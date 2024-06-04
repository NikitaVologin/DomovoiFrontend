import  { HttpTransportType, HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { inject, singleton } from "tsyringe";
import { Chat } from "../../application/useCases/chat";
import { Message } from "../../domain/chat/message";
import { MessageStatus } from "../../domain/enums/chatEnum";
import { CounterAgent } from "../../domain/counteragents/counteragent";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";
import { ICouterAgentMapper } from "../../mappers/interfaces/couteragentMapperInterface";

@singleton()
export class ChatService {

    private readonly _connection: HubConnection;
    private _listener!: Chat;
    
    public constructor(@inject("chatURL") private readonly _baseURL: string,
        @inject("ICouterAgentMapper") private readonly _userMapper: ICouterAgentMapper) {
        this._connection = new HubConnectionBuilder()
            .withUrl(this._baseURL, {
                withCredentials: true,
            })
            .withAutomaticReconnect()
            .build();
        this._connection.on("Receive", (text: string, idSender: string) => this.receiveMessage(text, idSender));
        this._connection.on("NotifySendMethod", (text: string) => console.log(text));
    }

    public start(idCompanion: string, user: CounteragentViewModel): void {
        let counteragent = this._userMapper.mapViewModelToCouterAget(user);
        this._listener = new Chat(this, true, idCompanion, counteragent);
        this._connection.start();
    }

    public close(): void {
        this._connection.stop()
    }

    public get state(): string {
        return this._connection.state.toString();
    }

    public get messages(): Message[] {
        return this._listener.messages;
    }

    public async sendMessage(text: string): Promise<void> {
        let message = new Message("", text, this._listener.user.id!, this._listener.idCompanion);
        try {
            let response = await this._connection.invoke("Send", message.text, message.recieverId);
            message.status = MessageStatus.Send;            
        }
        catch(e){
            message.status = MessageStatus.NotSend;
            console.log(e);
            throw(e);
        }
        finally {
            this._listener.addMessage(message);
        }
    }

    public receiveMessage(text: string, idSender: string): void {
        let message = new Message("", text, idSender, this._listener.user.id!);
        message.status = MessageStatus.Recieve;
        this._listener.addMessage(message);
    } 
}