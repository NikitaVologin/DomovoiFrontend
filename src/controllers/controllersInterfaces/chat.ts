import { MessageResult } from "../../domain/enums/chatEnum";

export interface IChat {
    sendMessage() : Promise<MessageResult>
    
}