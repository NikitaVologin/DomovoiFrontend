import { Message } from "../../domain/chat/message";

export interface IChatService {
    start(): Promise<void> 

    close(): void 

    get state(): string 

    get messages(): Message[]

    sendMessage(text: string, to: string, from: string): Promise<void> 

    receiveMessage(text: string, idSender: string, messageId: string, messageStatus: string): void 

    getDiaologMessages(userId: string, idCompanion: string): Promise<Message[]>
    
    getDialogs(userId: string): Promise<string[]>
}