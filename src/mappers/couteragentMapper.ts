import { CounterAgent } from "../domain/counteragents/counteragent";
import { LegalCounterAgent } from "../domain/counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "../domain/counteragents/physicalCounteragent";
import { CounteragentViewModel } from "../viewModel/CounteragentViewModel";
import { ICouterAgentMapper } from "./interfaces/couteragentMapperInterface";

export class CounterAgentMapper implements ICouterAgentMapper{

    public mapObjectToCouterAgent(object: any): CounterAgent {
        throw new Error("Method not implemented.");
    }

    public mapCouterAgentToViewModel(counteragent: CounterAgent): CounteragentViewModel {
        let viewModel = new CounteragentViewModel();    
        if (counteragent instanceof LegalCounterAgent) {
            let user = counteragent as LegalCounterAgent;
            viewModel.FIO = user.name!;
            viewModel.email = user.mail!;
            viewModel.phone = user.contactNumber;
        }
        else if (counteragent instanceof PhysicalCounterAgent) {
            let user = counteragent as PhysicalCounterAgent;
            viewModel.FIO = user.FIO;
            viewModel.email = user.mail!;
            viewModel.phone = user.contactNumber;
        }        
        return viewModel;
    }
    
    public mapViewModelToCouterAget(viewModel: CounteragentViewModel): CounterAgent {
        throw new Error("Method not implemented.");
    }
}