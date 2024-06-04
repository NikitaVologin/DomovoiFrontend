import { Message } from "../../domain/chat/message";
import { CounterAgent } from "../../domain/counteragents/counteragent";
import { reactive } from "vue";
import { IChat } from "../../controllers/controllersInterfaces/chat";
import { IChatService } from "../interfaces/chatService";
import { inject, injectable, singleton } from "tsyringe";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";
import { ICouterAgentMapper } from "../../mappers/interfaces/couteragentMapperInterface";
import { IReceptionService } from "../interfaces/receptionService";

@singleton()
export class Chat implements IChat {
    private _contacts: CounteragentViewModel[] = reactive([]);
    private _isCompanionOnline!: boolean; 
    private _companion!: CounterAgent;
    private _user!: CounterAgent;

    public constructor(@inject("IChatService") private readonly _chatService: IChatService,
        @inject("ICouterAgentMapper") private readonly _userMapper: ICouterAgentMapper,
        @inject("IReceptionService") private readonly _receptionSerive: IReceptionService) { }

    public async getDiaologMessages(userId: string, idCompanion: string): Promise<Message[]> {
        let messages = reactive(await this._chatService.getDiaologMessages(userId, idCompanion)) as Array<Message>;
        return messages;
    }

    public async getDialogs(userId: string): Promise<string[]> {
        let contacts = await this._chatService.getDialogs(userId);
        return contacts;
    }

    public async start(companion: CounteragentViewModel, me_user: CounteragentViewModel): Promise<void> {
        this._isCompanionOnline = false;
        this.companion = companion;
        this.user = me_user; 
        this._chatService.meUserId = this.user.id;
        this._chatService.companionId = this.companion.id;
        let ids = await this.getDialogs(this.user.id);
        for (let id of ids) {
            var user = await this._receptionSerive.getUserInformation(id);
            this._contacts.push(this._userMapper.mapCouterAgentToViewModel(user));
        }
        this.messages = reactive(await this.getDiaologMessages(this.user.id, this.companion.id)) as Array<Message>;
        await this._chatService.start();
    }

    public close(): void {
        this._chatService.close();
    }

    public async addMessage(text: string ): Promise<void> {
        await this._chatService.sendMessage(text);
    }

    public addContact(user: CounteragentViewModel) {
        this._contacts.push(user);
    } 
    
    public clearChat(): void {
        //this._messages = [];
    }

    public get messages(): Message[] {
        return this._chatService.messages;
    }

    public set messages(obj: Message[]) {
        this._chatService.messages = reactive(obj) as Array<Message>;
    }

    public get contacts(): CounteragentViewModel[] {
        return this._contacts;
    }

    public get isCompanionOnline() {
        return this._isCompanionOnline;
    }

    public set isCompanionOnline(status: boolean) {
        this._isCompanionOnline = status;
    }

    public get companion() : CounteragentViewModel {
        let user = this._userMapper.mapCouterAgentToViewModel(this._companion);
        return user;
    }

    public set companion(user: CounteragentViewModel) 
    {
        let obj = this._userMapper.mapViewModelToCouterAget(user);
        this._companion = obj;
    }

    public get user(): CounteragentViewModel {
        let obj = this._userMapper.mapCouterAgentToViewModel(this._user);
        return obj;
    }

    public set user(user: CounteragentViewModel) {
        let obj = this._userMapper.mapViewModelToCouterAget(user);
        this._user = obj;
    }
}