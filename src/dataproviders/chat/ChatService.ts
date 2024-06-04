import  { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { inject, injectable, singleton } from "tsyringe";
import { Message } from "../../domain/chat/message";
import { MessageStatus } from "../../domain/enums/chatEnum";
import { reactive } from "vue";
import { IChatService } from "../../application/interfaces/chatService";
import { IHTTPClient } from "../interfaces/HTTPClient";
import { IMessageMapper } from "../../mappers/interfaces/messageMapperInterface";

@singleton()
export class ChatService implements IChatService{
    private readonly _connection: HubConnection;
    private _messages: Message[] = reactive([]);
    private _contacts: string[] = reactive([]);
    private _meUserId!: string;
    private _companionId!: string;
    
    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient,
            @inject("chatURL") private readonly _baseURL: string,
            @inject("IMessageMapper") private readonly _messageMapeer: IMessageMapper) {
        this._connection = new HubConnectionBuilder()
            .withUrl(this._baseURL, {
                withCredentials: true,
            })
            .withAutomaticReconnect()
            .build();
        this._connection.on("Receive", 
        (text: string, idSender: string, messageId: string, messageStatus: string) => this.receiveMessage(text, idSender, messageId, messageStatus));
        this._connection.on("NotifySendMethod", async (messageId: string, messageStatus: string) => await this.changeMessageStatus(messageId, messageStatus));
        // this._connection.on("NotifyUserStatus", (idCompanion: string, companionStatus: string) => {});
        // this._connection.on("NotifyReadDialog", (idCompanion: string) => {});
        // this._connection.on("NotifyMessageStatus", (idMessage: string, newText: string, messageStatus: string) => {});
    }

    public async getDiaologMessages(userId: string, idCompanion: string): Promise<Message[]> {
        let url = `/Chat/Take/${userId}/${idCompanion}` ;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let list: Message[] = [];
            for (let messageData of response.data) {
                let message = this._messageMapeer.mapObjectToMessage(messageData);
                list.push(message);
            }
            return list;
        }
        
        return new Promise(
            (resolve, reject) => reject(response)
        );
    }

    public async getDialogs(userId: string): Promise<string[]> {
        let url = `/Chat/Take/$${userId}`;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            return response.data as string[];
        }
        
        return new Promise(
            (_resolve, reject) => reject(response)
        );
    }

    public async start(): Promise<void> {
        this._connection.start();
    }

    public close(): void {
        this._connection.stop()
    }
    
    public get state(): string {
        return this._connection.state.toString();
    }

    public get messages(): Message[] {
        return this._messages;
    }

    public set messages(values: Message[]) {
        this._messages = values;
    }

    public get contacts(): string[] {
        return this._contacts;
    }

    public set meUserId(value: string) {
        this._meUserId = value;
    }

    public set companionId(value: string) {
        this._companionId = value;
    }

    public async sendMessage(text: string): Promise<void> {
        let message = new Message("", text, this._meUserId, this._companionId);
        try {
            await this._connection.send("Send", message.text, message.recieverId);
            this.messages.push(message);
            console.log(message);
        }
        catch(e){
            throw(e);
        }
    }

    public changeMessageStatus(idMessage: string, statusstr: string){
        let status: MessageStatus = MessageStatus[statusstr as keyof typeof MessageStatus];
        this.messages.find((x) => x.id == idMessage)!.status = status;
    }

    public receiveMessage(text: string, idSender: string, messageId: string, messageStatus: string): void {
        let message = new Message(messageId, text, idSender, this.meUserId);
        let status: MessageStatus = MessageStatus[messageStatus as keyof typeof MessageStatus];
        message.status = status;
        console.log(message);
        this._messages.push(message);
    } 

    public async notifyUserStatus(meUserId: string, status: string) {
        throw new Error("The Method is not implement");
    }

    public async NotifyReadDialog(companionId: string) {
        throw new Error("The Method is not implement");
    }

    public async NotifyRemoveMessage(messageId: string) {
        throw new Error("The Method is not implement");
    }

    public async NotifyChangeMessage(messageId: string, newText: string) {
        throw new Error("The Method is not implement");
    }
}