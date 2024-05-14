import axios, { Axios, AxiosInstance, AxiosResponse } from "axios";
import {Response} from "../../src/dataproviders/models/response";
import { inject, singleton } from "tsyringe";

@singleton()
export class HTTPClient implements HTTPClient {
    private _axios!: AxiosInstance;

    constructor(@inject("baseURL") private baseURL: string) {
        this._axios = axios.create({
            baseURL: baseURL,
        });
    }

    async get<T>(url: string): Promise<Response<T>> {
        try {
            let axiosResponse = await this._axios.get<T>(url);
            let response = this.map<T>(axiosResponse);
            return response;
        }
        catch (error) {
            throw (error);
        }
    }

    async post<T>(url: string, data?: any): Promise<Response<T>> {
        try {
            const axiosResponse = await this._axios.post<T>(url, data);
            let response = this.map<T>(axiosResponse);
            return response;
        }
        catch (error) {
            throw (error);
        }
    }

    async delete<T>(url: string): Promise<Response<T>> {
        throw new Error("Method not implemented.");
    }

    async patch<T>(url: string, data: any): Promise<Response<T>> {
        throw new Error("Method not implemented.");
    }

    private map<T>(axiosResponse: AxiosResponse<T, any>): Response<T> {
        let response = new Response(axiosResponse.data, axiosResponse.status,
            axiosResponse.statusText, axiosResponse.headers, axiosResponse.config,
            axiosResponse.request);
        return response;
    }
}