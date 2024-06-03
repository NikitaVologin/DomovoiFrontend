import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { inject, singleton } from "tsyringe";
import { Chat } from "../../application/useCases/chat";
import { Message } from "../../domain/chat/message";
import { MessageStatus } from "../../domain/enums/chatEnum";

@singleton()
export class ChatService {

    private readonly _connection: HubConnection;
    private readonly _listener!: Chat;
    
    public constructor(@inject("chatURL") private readonly _baseURL: string) {
        this._connection = new HubConnectionBuilder()
            .withUrl("/chat")
            .build();
        this._connection.on("Receive", (text: string, idSender: string) => this.receiveMessage(text, idSender))
    }

    public start(): void {
        this._connection.start();
    }

    public close(): void {
        this._connection.stop()
    }

    public get state(): string {
        return this._connection.state.toString();
    }

    public async sendMessage(message: Message): Promise<void> {
        try {
            let response = await this._connection.invoke("Send", message.text, message.recieverId);
            message.status = MessageStatus.Send;            
        }
        catch(e){
            message.status = MessageStatus.NotSend;
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