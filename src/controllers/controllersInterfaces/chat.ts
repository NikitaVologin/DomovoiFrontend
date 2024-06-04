import { Message } from "../../domain/chat/message";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";

export interface IChat {
    getDiaologMessages(userId: string, idCompanion: string): Promise<Message[]>;
    getDialogs(userId: string): Promise<string[]>;
    start(companion: CounteragentViewModel, me_user: CounteragentViewModel): Promise<void>;
    close(): void;
    addMessage(message: Message): void;
    addContact(user: CounteragentViewModel): void;
    clearChat(): void;
    get messages(): Message[];
    get contacts(): CounteragentViewModel[];
    get isCompanionOnline(): boolean;
    set isCompanionOnline(status: boolean);
    get companion() : CounteragentViewModel; 
    set companion(user: CounteragentViewModel);
    get user(): CounteragentViewModel;
    set user(user: CounteragentViewModel);
}