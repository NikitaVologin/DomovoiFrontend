import { injectable, inject } from "tsyringe";
import { IReceptionService } from "../application/interfaces/receptionService";
import { IHTTPClient } from "../dataproviders/interfaces/HTTPClient";
import { CounterAgent } from "../domain/counteragents/counteragent";
import { CounterAgentResponse } from "../domain/types";

@injectable()
export class ReceptionService implements IReceptionService {

    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient) { }

    async getUserInformation(id: string): Promise<CounterAgentResponse> {
        throw new Error("Method not implemented.");
        let url = "";

        let response = await this._httpClient.get<CounterAgentResponse>(url).catch((error) => {
            throw (error);
        });

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounterAgent): Promise<CounterAgentResponse> {
        throw new Error("Method not implemented.");
        let url = "";
        let data = {
            id: idOldUser,
            CounterAgent: newUserInformation
        };

        let response = await this._httpClient.patch<CounterAgentResponse>(url, data).catch((error) => {
            throw (error);
        });

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async checkOut(id: string): Promise<void> {
        throw new Error("Method not implemented.");
        let url = "";

        let response = await this._httpClient.delete<string>(url).catch((error) => {
            throw (error);
        });

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

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