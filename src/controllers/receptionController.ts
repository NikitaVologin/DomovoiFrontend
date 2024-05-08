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
}