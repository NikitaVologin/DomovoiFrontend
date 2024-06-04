import { Message } from "../domain/chat/message";

export class MessageMapper {
    public mapObjectToMessage(obj: any): Message {
        let message = new Message(
            obj.id,
            obj.text,
            obj.idSender,
            obj.idReciever,
        );
        return message;
    }
}