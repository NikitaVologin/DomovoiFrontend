import axios, { AxiosInstance, AxiosResponse } from "axios";
import {Response} from "../models/response";
import { inject, singleton } from "tsyringe";
import { IHTTPClient } from "../interfaces/HTTPClient";

@singleton()
export class HTTPClient implements IHTTPClient {
    private _axios!: AxiosInstance;

    constructor(@inject("baseURL") baseURL: string) {
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
		return new Promise<Response<T>>((resolve, reject) => {
			// try {
				this._axios.post<T>(url, data).then(response => {
					let mappedResponse = this.map<T>(response);
					resolve(mappedResponse);
				}).catch(error => {
					reject(error)
				})
			// }
			// catch (error) {
			// 	console.log('err in http-c');
			// 	throw (error);
			// }
		})
    }

    async delete<T>(url: string): Promise<Response<T>> {
        try {
            let axiosResponse = await this._axios.delete<T>(url);
            let response = this.map<T>(axiosResponse);
            return response;
        }
        catch (error) {
            throw (error);
        }
    }

    async patch<T>(url: string, data: any): Promise<Response<T>> {
        try {
            let axiosResponse = await this._axios.patch<T>(url, data);
            let response = this.map<T>(axiosResponse);
            return response;
        }
        catch (error) {
            throw (error);
        }
    }

    private map<T>(axiosResponse: AxiosResponse<T, any>): Response<T> {
        let response = new Response(axiosResponse.data, axiosResponse.status,
            axiosResponse.statusText, axiosResponse.headers, axiosResponse.config,
            axiosResponse.request);
        return response;
    }
}