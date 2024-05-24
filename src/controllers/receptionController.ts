import { injectable, inject } from "tsyringe";
import { IReception } from "../controllers/controllersInterfaces/receptionInterface";
import { CounteragentViewModel } from "../viewModel/CounteragentViewModel";

@injectable()
export class ReceptionController {

    public constructor(@inject("IReception") private _reception: IReception) { }

    async registration(userType: string, mail: string, password: string): Promise<CounteragentViewModel> {
        return await this._reception.registration(userType, mail, password);
    }
    
    async authorize(mail: string, password: string): Promise<CounteragentViewModel> {
        return await this._reception.authorize(mail, password);
    }

    async getUserInformation(id: string): Promise<CounteragentViewModel> {
        return await this._reception.getUserInformation(id);
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounteragentViewModel): Promise<CounteragentViewModel> {
        return await this._reception.changeUserInformation(idOldUser, newUserInformation);
    }
    
    async checkOut(id: string): Promise<void> {
        return await this._reception.checkOut(id);
    }
}