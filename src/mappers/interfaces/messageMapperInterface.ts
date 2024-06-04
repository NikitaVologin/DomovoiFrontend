import { Message } from "../../domain/chat/message";

export interface IMessageMapper {
    mapObjectToMessage(obj: any): Message
}