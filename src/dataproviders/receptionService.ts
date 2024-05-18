import { injectable, inject } from "tsyringe";
import { IReceptionService } from "../application/interfaces/receptionService";
import { IHTTPClient } from "../dataproviders/interfaces/HTTPClient";
import { PhysicalCounterAgent } from "../domain/counteragents/physicalCounteragent";
import { LegalCounterAgent } from "../domain/counteragents/legalCounteragent";
import { CounterAgent } from "../domain/counteragents/counteragent";


type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;
@injectable()
export class ReceptionService implements IReceptionService {

    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient) { }

    async getUserInformation(id: string): Promise<CounterAgentResponse> {
        throw new Error("Method not implemented.");
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounterAgent): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async checkOut(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async registration(userType: string, mail: string, password: string): Promise<CounterAgentResponse> {
        let url = "/CounterAgent/" + userType;
        let data = {
            email: mail,
            password: password
        };
		
        let response = await this._httpClient.post<CounterAgentResponse>(url, data).catch((error) => {
			console.log('status', error)
			throw (error);
        });

        if (response.status == 200) {
            return response.data;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async authorize(mail: string, password: string): Promise<CounterAgentResponse> {
        let url = "/CounterAgent/Login";
        let data = {
            email: mail,
            password: password
        };

        let response = await this._httpClient.post<CounterAgentResponse>(url, data).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            return response.data;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }
}