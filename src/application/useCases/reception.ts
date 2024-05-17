import { injectable, inject } from "tsyringe";
import { IReceptionService } from "../interfaces/receptionService";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";
import { IReception } from "../../controllers/controllersInterfaces/receptionInterface";
import { PhysicalCounterAgent } from "../../domain/counteragents/physicalCounteragent";
import { LegalCounterAgent } from "../../domain/counteragents/legalCounteragent";
import { CounterAgent } from "../../domain/counteragents/counteragent";
import { CounterAgentResponse } from "../../domain/types";

@injectable()
export class Reception implements IReception {

    public constructor(@inject("IReceptionService") private _service: IReceptionService) { }

    async getUserInformation(id: string): Promise<CounteragentViewModel> {
        throw new Error("Method not implemented.");
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounterAgent): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async checkOut(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async registration(userType: string, mail: string, password: string): Promise<CounteragentViewModel> {
        let userDto = await this._service.registration(userType, mail, password);
        let viewModel = this.getCounterAgentViewModel(userDto);    
		console.log('vm', viewModel)
        return viewModel;
    }

    async authorize(mail: string, password: string): Promise<CounteragentViewModel> {
        let userDto = await this._service.authorize(mail, password);
        let viewModel = this.getCounterAgentViewModel(userDto);    
        return viewModel;
    } 

    getCounterAgentViewModel(counteragent: CounterAgentResponse) : CounteragentViewModel {
        let viewModel = new CounteragentViewModel();    
        if (counteragent instanceof LegalCounterAgent) {
            let user = counteragent as LegalCounterAgent;
        }
        else if (counteragent instanceof PhysicalCounterAgent) {
            let user = counteragent as PhysicalCounterAgent;
        }        
        return viewModel;
    }
}