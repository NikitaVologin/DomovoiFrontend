import { injectable, inject } from "tsyringe";
import { IReceptionService } from "../interfaces/receptionService";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";
import { IReception } from "../../controllers/controllersInterfaces/receptionInterface";
import { CounterAgentLegal } from "../../dataproviders/models/counteragents/counteragentLegal";
import { CounterAgentPhysical } from "../../dataproviders/models/counteragents/counteragentPhysical";
import { PhysicalCounterAgent } from "../../domain/counteragents/physicalCounteragent";
import { LegalCounterAgent } from "../../domain/counteragents/legalCounteragent";

type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;
@injectable()
export class Reception implements IReception {

    public constructor(@inject("ReceptionService") private _service: IReceptionService) { }

    async registration(userType: string, mail: string, password: string): Promise<CounteragentViewModel> {
        let userDto = await this._service.registration(userType, mail, password);
        let viewModel = this.getCounterAgentViewModel(userDto);    
        return viewModel;
    }

    async authorize(mail: string, password: string): Promise<CounteragentViewModel> {
        let userDto = await this._service.authorize(mail, password);
        let viewModel = this.getCounterAgentViewModel(userDto);    
        return viewModel;
    } 

    getCounterAgentViewModel(counteragent: CounterAgentResponse) : CounteragentViewModel {
        let viewModel = new CounteragentViewModel();    
        if (counteragent instanceof CounterAgentLegal) {
            let user = counteragent as CounterAgentLegal;
            viewModel.FIO = user.name;
        }
        else if (counteragent instanceof CounterAgentPhysical) {
            let user = counteragent as CounterAgentPhysical;
            viewModel.FIO = user.fio;
        }        
        return viewModel;
    }
}