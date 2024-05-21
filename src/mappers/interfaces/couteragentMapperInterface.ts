import { CounterAgent } from "../../domain/counteragents/counteragent";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";

export interface ICouterAgentMapper {
    mapObjectToCouterAgent(object: any): CounterAgent
    mapCouterAgentToViewModel(user: CounterAgent): CounteragentViewModel
}