import { injectable, inject} from "tsyringe";
import { IAnnouncementBoardService } from "../application/interfaces/announcementBoadService";
import { Announcement } from "../domain/announcements/announcement";
import { IHTTPClient } from "./interfaces/HTTPClient";

@injectable()
export class AnnouncementBoardService implements IAnnouncementBoardService {

    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient) { }

    async getAnnouncementById(id: string): Promise<Announcement> {
        let url = "/Announcement/" + id;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let announcement = this.mapToAnnouncement(response.data);
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
                list.push(this.mapToAnnouncement(object));
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
            dealInfo: announcement.deal.dealInfo,
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

    private mapToAnnouncement(object: any): Announcement {
        throw new Error("Method not implemented.");
    }
}