import { CounterAgent } from "../../domain/counteragents/counteragent";

export interface IReceptionService {
    registration(userType: string, mail: string, password: string): Promise<CounterAgent>;
    authorize(mail: string, password: string): Promise<CounterAgent>;
    getUserInformation(id: string): Promise<CounterAgent>;
    putUserInformation(idOldUser: string, newUserInformation: any): Promise<void>;
    deleteUser(id: string): Promise<void>;
}
