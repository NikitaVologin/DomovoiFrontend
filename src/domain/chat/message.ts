import { MessageStatus } from "../enums/chatEnum";

export class Message {

    private _status: MessageStatus = MessageStatus.NotSend;

    public constructor(private _id: string, private _text: string, private _senderId: string, private _recieverId: string) { }

    public get text() {
        return this._text;
    }

    public get senderId() {
        return this._senderId;
    }

    public get recieverId(){
        return this._recieverId;
    }

    public get id() {
        return this._id;
    }

    public get status(){
        return this._status;
    }

    public set status(status: MessageStatus) {
        this._status = status;
    }
}