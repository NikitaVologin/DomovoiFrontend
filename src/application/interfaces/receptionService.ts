import { CounterAgent } from "../../domain/counteragents/counteragent";
import { CounterAgentResponse } from "../../domain/types";

export interface IReceptionService {
    registration(userType: string, mail: string, password: string): Promise<CounterAgentResponse>;
    authorize(mail: string, password: string): Promise<CounterAgentResponse>;
    getUserInformation(id: string): Promise<CounterAgentResponse>;
    changeUserInformation(idOldUser: string, newUserInformation: CounterAgent): Promise<void>;
    checkOut(id: string): Promise<void>;
}
