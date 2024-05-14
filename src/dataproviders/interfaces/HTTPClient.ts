import {Response} from "../models/response";

export interface IHTTPClient {
    get<T>(url: string): Promise<Response<T>>
    post<T>(url: string, data?: any): Promise<Response<T>>
    delete<T>(url: string): Promise<Response<T>>
    patch<T>(url: string, data: any): Promise<Response<T>>
}
