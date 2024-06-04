import { Message } from "../../domain/chat/message";

export interface IChatService {
    start(): Promise<void> 

    close(): void 

    get state(): string 

    get messages(): Message[]

    set messages(value: Message[]); 

    set meUserId(value: string);

    set companionId(value: string);

    sendMessage(text: string): Promise<void> 

    receiveMessage(text: string, idSender: string, messageId: string, messageStatus: string): void 

    getDiaologMessages(userId: string, idCompanion: string): Promise<Message[]>
    
    getDialogs(userId: string): Promise<string[]>
}