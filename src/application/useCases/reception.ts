import { injectable, inject } from "tsyringe";
import { IReceptionService } from "../interfaces/receptionService";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";
import { IReception } from "../../controllers/controllersInterfaces/receptionInterface";
import { ICouterAgentMapper } from "../../mappers/interfaces/couteragentMapperInterface";

@injectable()
export class Reception implements IReception {

    public constructor(@inject("IReceptionService") private readonly _service: IReceptionService,
        @inject("ICouterAgentMapper") private readonly _userMapper: ICouterAgentMapper) { }

    async getUserInformation(id: string): Promise<CounteragentViewModel> {
        let user = await this._service.getUserInformation(id);
        let viewModel = this._userMapper.mapCouterAgentToViewModel(user);
        return viewModel;
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounteragentViewModel): Promise<CounteragentViewModel> {
        let newUser = this._userMapper.mapViewModelToCouterAget(newUserInformation);
        let updateUser = await this._service.changeUserInformation(idOldUser, newUser);
        let viewModel = this._userMapper.mapCouterAgentToViewModel(updateUser);
        return viewModel;
    }

    async checkOut(id: string): Promise<void> {
        let responseId = await this._service.checkOut(id);
        return responseId;
    }

    async registration(userType: string, mail: string, password: string): Promise<CounteragentViewModel> {
        let userDto = await this._service.registration(userType, mail, password);
        let viewModel = this._userMapper.mapCouterAgentToViewModel(userDto);    
        return viewModel;
    }

    async authorize(mail: string, password: string): Promise<CounteragentViewModel> {
        let userDto = await this._service.authorize(mail, password);
        let viewModel = this._userMapper.mapCouterAgentToViewModel(userDto);    
        return viewModel;
    } 
}