import { CounterAgent } from "../domain/counteragents/counteragent";
import { LegalCounterAgent } from "../domain/counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "../domain/counteragents/physicalCounteragent";
import { CounteragentType } from "../domain/enums/counteragentEnum";
import { CounteragentViewModel } from "../viewModel/CounteragentViewModel";
import { ICouterAgentMapper } from "./interfaces/couteragentMapperInterface";

export class CounterAgentMapper implements ICouterAgentMapper{

    public mapObjectToCouterAgent(object: any): CounterAgent {
        let type: CounteragentType = CounteragentType[object.type as keyof typeof CounteragentType];
        switch(type){
            case(CounteragentType.Legal): {
                let user = new LegalCounterAgent();
                user.id = object.id;
                user.contactNumber = object.contactNumber;
                user.name = object.name;
                user.tin = object.tin;
                return user;
            }
            case(CounteragentType.Physical): {
                let user = new PhysicalCounterAgent();
                user.id = object.id;
                user.contactNumber = object.contactNumber;
                user.FIO = object.fio;
                return user;
            }
        }
    }

    public mapCouterAgentToViewModel(counteragent: CounterAgent): CounteragentViewModel {
        let viewModel = new CounteragentViewModel();    
        if (counteragent instanceof LegalCounterAgent) {
            let user = counteragent as LegalCounterAgent;
            viewModel.id = user.id!;
            viewModel.FIO = user.name!;
            viewModel.email = user.mail!;
            viewModel.phone = user.contactNumber;
            viewModel.type = CounteragentType.Legal;
        }
        else if (counteragent instanceof PhysicalCounterAgent) {
            let user = counteragent as PhysicalCounterAgent;
            viewModel.id = counteragent.id!;
            viewModel.FIO = user.FIO;
            viewModel.email = user.mail!;
            viewModel.phone = user.contactNumber;
            viewModel.type = CounteragentType.Physical;
        }        
        return viewModel;
    }
    
    public mapViewModelToCouterAget(viewModel: CounteragentViewModel): CounterAgent {
        switch(viewModel.type){
            case(CounteragentType.Legal): {
                let user = new LegalCounterAgent();
                user.id = viewModel.id;
                user.contactNumber = viewModel.phone;
                user.mail = viewModel.email;
                user.name = viewModel.FIO;
                return user;
            }
            case(CounteragentType.Physical): {
                let user = new PhysicalCounterAgent();
                user.id = viewModel.id;
                user.FIO = viewModel.FIO;
                user.contactNumber = viewModel.phone;
                user.mail = viewModel.email;
                return user;
            }
        }
    }
}