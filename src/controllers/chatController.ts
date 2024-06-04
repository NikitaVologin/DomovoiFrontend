import { inject, injectable } from "tsyringe";
import { IChat } from "./controllersInterfaces/chat";
import { Message } from "../domain/chat/message";
import { CounteragentViewModel } from "../viewModel/CounteragentViewModel";

@injectable()
export class ChatController {

    public constructor(@inject("IChat") private readonly _chat: IChat) { }

    public async GetDiaologMessagesAsync(userId: string, idCompanion: string): Promise<Message[]>
    {
        return await this._chat.getDiaologMessages(userId, idCompanion);
    }

    public async GetDialogsAsync(userId: string): Promise<string[]>
    {
        return await this._chat.getDialogs(userId);
    }

    public async start(companion: CounteragentViewModel, me_user: CounteragentViewModel): Promise<void> {
        await this._chat.start(companion, me_user);
    }
    
    public close(): void {
        this._chat.close();
    }

    public async addMessage(text: string): Promise<void> {
        await this._chat.addMessage(text);
    }

    public addContact(user: CounteragentViewModel): void {
        this._chat.addContact(user);
    }

    public clearChat(): void {
        this._chat.clearChat();
    }

    get messages(): Message[] {
        return this._chat.messages;
    }

    get contacts(): CounteragentViewModel[] {
        return this._chat.contacts;
    }

    get isCompanionOnline(): boolean {
        return this._chat.isCompanionOnline;
    }

    set isCompanionOnline(status: boolean) {
        this._chat.isCompanionOnline = status;
    }

    get companion() : CounteragentViewModel {
        return this._chat.companion;
    }

    set companion(user: CounteragentViewModel) {
        this._chat.companion = user;
    }

    get user(): CounteragentViewModel {
        return this._chat.user;
    }

    set user(user: CounteragentViewModel) {
        this._chat.user = user;
    }
}