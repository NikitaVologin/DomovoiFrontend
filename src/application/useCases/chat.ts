import { inject, injectable } from "tsyringe";
import { Message } from "../../domain/chat/message";
import { CounterAgent } from "../../domain/counteragents/counteragent";
import { ChatService } from "../../dataproviders/chat/ChatService";

export class Chat {
    private _messages: Message[] = [];
    private _contacts: CounterAgent[] = [];

    public constructor(private readonly _chatService: ChatService,
        private _isCompanionOnline: boolean,
        private _idCompanion: string,
        private _user: CounterAgent) { }

    public addMessage(message: Message): void {
        this._messages.push(message);
    }

    public addContact(user: CounterAgent) {
        this._contacts.push(user);
    } 
    
    public clearChat(): void {
        this._messages = [];
    }

    public get messages(): Message[] {
        return this._messages;
    }

    public get contacts(): CounterAgent[] {
        return this.contacts;
    }

    public get isCompanionOnline() {
        return this._isCompanionOnline;
    }

    public set isCompanionOnline(status: boolean) {
        this._isCompanionOnline = status;
    }

    public get idCompanion() {
        return this._idCompanion;
    }

    public set idCompanion(id: string) {
        this._idCompanion = id;
    }

    public get user() {
        return this._user;
    }

    public set user(user: CounterAgent) {
        this._user = user;
    }
}