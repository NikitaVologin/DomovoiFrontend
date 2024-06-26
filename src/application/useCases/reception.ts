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

    async changeUserInformation(idOldUser: string, newUserInformation: CounteragentViewModel, new_password?: string): Promise<void> {
        let newUser = this._userMapper.mapViewModelToCouterAget(newUserInformation);
        let userInformation = newUser.getInformationObject();
        userInformation.password = new_password;
        try {
            await this._service.putUserInformation(idOldUser, userInformation);
            localStorage.setItem('user', JSON.stringify(newUserInformation));
        } catch (exception) {
            throw exception;
        }
    }

    async checkOut(): Promise<void> {
        let responseId = await this._service.deleteUser();
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