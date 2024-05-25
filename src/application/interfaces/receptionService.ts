import { CounterAgent } from "../../domain/counteragents/counteragent";
import { CounterAgentResponse } from "../../domain/types";

export interface IReceptionService {
    registration(userType: string, mail: string, password: string): Promise<CounterAgent>;
    authorize(mail: string, password: string): Promise<CounterAgent>;
    getUserInformation(id: string): Promise<CounterAgent>;
    changeUserInformation(idOldUser: string, newUserInformation: CounterAgent): Promise<CounterAgent>;
    checkOut(id: string): Promise<void>;
}
