import { injectable, inject } from "tsyringe";
import { IReception } from "../controllers/controllersInterfaces/receptionInterface";
import { CounteragentViewModel } from "../viewModel/CounteragentViewModel";
import { CounterAgent } from "../domain/counteragents/counteragent";

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
        throw new Error("Method not implemented.");
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounterAgent): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async checkOut(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}