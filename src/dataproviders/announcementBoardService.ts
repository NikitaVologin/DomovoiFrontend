import { injectable, inject} from "tsyringe";
import { IAnnouncementBoardService } from "../application/interfaces/announcementBoadService";
import { Announcement } from "../domain/announcements/announcement";
import  { IHTTPClient } from "./interfaces/HTTPClient";
import { IAnnoucementMapper } from "../mappers/interfaces/annoucementMapperInterface";
import { FilterParameters } from "../domain/types";

@injectable()
export class AnnouncementBoardService implements IAnnouncementBoardService {
    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient,
        @inject("IAnnoucementMapper") private readonly _annoucementMapper: IAnnoucementMapper) { }

    async getAnnouncementsByUserId(userId: string): Promise<Announcement[]> {
        let url = "/Announcement/User" + userId;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);      
        });

        if (response.status == 200) {
            let list: Announcement[] = [];
            for (let object of response.data.announcementInformation) {
                list.push(this._annoucementMapper.mapObjectToAnnoucement(object));
            }
            return list;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async deleteAnnouncement(idUser: string, idAnnouncement: string): Promise<void> {
        let url = "/Announcement/" + idUser + "/" + idAnnouncement;

        let response = await this._httpClient.delete<any>(url).catch((error) => {
            throw (error);
        });

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async changeAnnouncement(userId: string, announcement: Announcement): Promise<void> {
        let url = "/Announcement/" + announcement.id;

        let data = {
            description: announcement.description,
            connectionType: announcement.connectionType,
            dealInfo: {
                price: announcement.deal.price,
                conditions: this.dsads(this.toJsonString(announcement.deal.conditions)),
                type: announcement.deal.type.toString()
            },
            realityInfo: this.dsads(this.toJsonString(announcement.reality)),
            counterAgentId: userId
        };

        let response = await this._httpClient.put<any[]>(url, data).catch((error) => {
            throw (error);
        });

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }
    
    async getAnnouncementsFromTo(from?: number, to?: number): Promise<Announcement[]> {
        let url = "/Announcement/Take";
        let params = {
            fromIndex: from,
            toIndex: to,
        }

        let response = await this._httpClient.get<any>(url, params).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let list: Announcement[] = [];
            for (let object of response.data.announcementInformation) {
                list.push(this._annoucementMapper.mapObjectToAnnoucement(object));
            }
            return list;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async getAnnouncementById(id: string): Promise<Announcement> {
        let url = "/Announcement/" + id;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);      
        });

        if (response.status == 200) {
            console.log(response.data);
            let announcement = this._annoucementMapper.mapObjectToAnnoucement(response.data);
            return announcement;
        }   

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async getAnnouncements(count: number): Promise<Announcement[]> {
        let url = "/Announcement/take/" + count;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let list: Announcement[] = [];
            for (let object of response.data.announcementInformation) {
                list.push(this._annoucementMapper.mapObjectToAnnoucement(object));
            }
            return list;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async getFilteredAnnouncements(params: FilterParameters): Promise<Announcement[]> {
        let url = "/Announcement/Filtered";

        let response = await this._httpClient.get<any>(url, (params as any)).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let list: Announcement[] = [];
            for (let object of response.data.announcementInformation) {
                list.push(this._annoucementMapper.mapObjectToAnnoucement(object));
            }
            return list;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async postAnnouncement(announcement: Announcement): Promise<string> {
        let url = "/Announcement"

        let data = {
            description: announcement.description,
            connectionType: announcement.connectionType,
            dealInfo: {
                price: announcement.deal.price,
                conditions: this.dsads(this.toJsonString(announcement.deal.conditions)),
                type: announcement.deal.type.toString()
            },
            realityInfo: this.dsads(this.toJsonString(announcement.reality)),
            counterAgentId: announcement.counteragent.id
        };
        
        let response = await this._httpClient.post<string>(url, data).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            return response.data;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    dsads(json: string) : any {
        json = json.replace("_", "");
        return JSON.parse(json);
    }

    toJsonString(data: any): string {
        let json = JSON.stringify(data);
        Object.keys(data).filter(key => key[0] === "_").forEach(key => {
            json = json.replace(key, key.substring(1));
        });
        return json;
    }
}