/// <reference path = "../domain/commonDomain.ts" />
import { injectable, inject } from "tsyringe";
import { IReceptionService } from "../application/interfaces/receptionService";
import { IHTTPClient } from "../dataproviders/interfaces/HTTPClient";
import { PhysicalCounterAgent } from "../domain/counteragents/physicalCounteragent";
import { LegalCounterAgent } from "../domain/counteragents/legalCounteragent";


type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;
@injectable()
export class ReceptionService implements IReceptionService {

    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient) { }

    async registration(userType: string, mail: string, password: string): Promise<CounterAgentResponse> {
        let url = "/CounterAgent/" + userType;
        let data = {
            email: mail,
            password: password
        };
		
        let response = await this._httpClient.post<CounterAgentResponse>(url, data).catch((error) => {
			throw (error);
        });

        if (response.status == 200) {
			// console.log(response.status)
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