import { injectable, inject} from "tsyringe";
import { IAnnouncementBoardService } from "../application/interfaces/announcementBoadService";
import { Announcement } from "../domain/announcements/announcement";
import { IHTTPClient } from "./interfaces/HTTPClient";
import { Mapper } from "./mappers/mapperContrainer";
import { Reality } from "../domain/realities/reality";
import { CounterAgent } from "../domain/counteragents/counteragent";
import { Rent } from "../domain/deals/types/rent/rent";
import { RentConditions } from "../domain/deals/types/rent/rentConditions";
import { RentRules } from "../domain/deals/types/rent/rentRules";

@injectable()
export class AnnouncementBoardService implements IAnnouncementBoardService {
	private readonly _mapper: Mapper = new Mapper()

    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient) { }

    async getAnnouncementById(id: string): Promise<Announcement> {
        let url = "/Announcement/" + id;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            let announcement = this._mapper.map<any, Announcement>(response.data, 
                new Announcement(0,
                    new Reality(0, 0),
                    new Rent(0, new RentConditions(0, 0, 0, 0, 0), new RentRules(0, false, false, false)),
                    new CounterAgent("", "")
                )
            );
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
                list.push(this._mapper.map<any, Announcement>(object, 
                    new Announcement(0,
                        new Reality(0, 0),
                        new Rent(0, new RentConditions(0, 0, 0, 0, 0), new RentRules(0, false, false, false)),
                        new CounterAgent("", "")
                    ))
                );
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