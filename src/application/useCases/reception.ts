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
        throw new Error("Method not implemented.");
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounteragentViewModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async checkOut(id: string): Promise<void> {
        throw new Error("Method not implemented.");
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