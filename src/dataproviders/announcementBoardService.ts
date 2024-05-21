import { injectable, inject} from "tsyringe";
import { IAnnouncementBoardService } from "../application/interfaces/announcementBoadService";
import { Announcement } from "../domain/announcements/announcement";
import { IHTTPClient } from "./interfaces/HTTPClient";
import { IAnnoucementMapper } from "../mappers/interfaces/annoucementMapperInterface";

@injectable()
export class AnnouncementBoardService implements IAnnouncementBoardService {
    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient,
        @inject("IAnnoucementMapper") private readonly _annoucementMapper: IAnnoucementMapper) { }

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

        let response = await this._httpClient.get<any[]>(url).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let list: Announcement[] = [];
            for (let object in response.data) {
                list.push(this._annoucementMapper.mapObjectToAnnoucement(object));
            }
            return list;
        }

        return new Promise((resolve, reject) => {
            reject(response);
        });
    }

    async postAnnouncement(announcement: Announcement, realityType: string, dealType: string): Promise<string> {
        let url = "/Announcement/" + realityType + "/" + dealType;
        
        let data = {
            description: announcement.description,
            connectionType: announcement.connectionType,
            dealInfo: announcement.deal,
            realityInfo: announcement.reality,
            counterAgentInfo: {
                counterAgentId: announcement.counteragent.id 
            }
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
}