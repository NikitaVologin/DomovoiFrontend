import { injectable, inject } from "tsyringe";
import { IReceptionService } from "../application/interfaces/receptionService";
import { IHTTPClient } from "../dataproviders/interfaces/HTTPClient";
import { CounterAgent } from "../domain/counteragents/counteragent";
import { CounterAgentResponse } from "../domain/types";
import { ICouterAgentMapper } from "../mappers/interfaces/couteragentMapperInterface";

@injectable()
export class ReceptionService implements IReceptionService {

    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient,
        @inject("ICouterAgentMapper") private readonly _userMapper: ICouterAgentMapper) { }

    async getUserInformation(id: string): Promise<CounterAgent> {
        throw new Error("Method not implemented.");
        let url = "";

        let response = await this._httpClient.get<CounterAgentResponse>(url).catch((error) => {
            throw (error);
        });

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async changeUserInformation(idOldUser: string, newUserInformation: CounterAgent): Promise<CounterAgent> {
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

    async registration(userType: string, mail: string, password: string): Promise<CounterAgent> {
        let url = "/CounterAgent/" + userType;
        let data = {
            email: mail,
            password: password
        };
		
        let response = await this._httpClient.post<any>(url, data).catch((error) => {
			throw (error);
        });

        if (response.status == 200) {
            let user = this._userMapper.mapObjectToCouterAgent(response.data);
            return user;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async authorize(mail: string, password: string): Promise<CounterAgent> {
        let url = "/CounterAgent/Login";
        let data = {
            email: mail,
            password: password
        };

        let response = await this._httpClient.post<any>(url, data).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let user = this._userMapper.mapObjectToCouterAgent(response.data);
            return user;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }
}