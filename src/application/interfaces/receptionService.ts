import { LegalCounterAgent } from "../../domain/counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "../../domain/counteragents/physicalCounteragent";

type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;
export interface IReceptionService {
    registration(userType: string, mail: string, password: string): Promise<CounterAgentResponse>;
    authorize(mail: string, password: string): Promise<CounterAgentResponse>;
}
