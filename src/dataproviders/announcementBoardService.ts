import { injectable, inject} from "tsyringe";
import { IAnnouncementBoardService } from "../application/interfaces/announcementBoadService";
import { Announcement } from "../domain/announcements/announcement";
import { IHTTPClient } from "./interfaces/HTTPClient";
import { RealityType } from "../domain/enums/realityType";
import { Reality } from "../domain/realities/reality";
import { Office } from "../domain/realities/commercialBuildings/types/office";
import { Building } from "../domain/realities/commercialBuildings/building";
import { DealType } from "../domain/enums/dealType";
import { Rent } from "../domain/deals/rent/rent";
import { RentConditions } from "../domain/deals/rent/rentConditions";
import { Sell } from "../domain/deals/sell/sell";
import { SellConditions } from "../domain/deals/sell/sellConditions";
import { Deal } from "../domain/types";
import { CounterAgent } from "../domain/counteragents/counteragent";

@injectable()
export class AnnouncementBoardService implements IAnnouncementBoardService {
    public constructor(@inject("IHTTPClient") private readonly _httpClient: IHTTPClient) { }

    async getAnnouncementById(id: string): Promise<Announcement> {
        let url = "/Announcement/" + id;

        let response = await this._httpClient.get<any>(url).catch((error) => {
            throw (error);
        });

        if (response.status == 200) {
            console.log(response.data);
            let announcement = new Announcement();
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
                list.push(new Announcement());
                
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

    private mapToAnnoucement(object: any): Announcement {
        let announcement = new Announcement();
        announcement.id = object.id;
        announcement.description = object.description;
        announcement.connectionType = object.connectionType;
        announcement.deal = this.mapToDeal(object.dealInfo);
        announcement.reality = this.mapToReality(object.realityInfo);
        let user = new CounterAgent();
        user.id = object.counterAgentInfo.id;
        announcement.counteragent = user;
        return announcement;
    }

    private mapToReality(object: any): Reality {
        let type: RealityType = RealityType[object.Type as keyof typeof RealityType];
        switch(type) {
            case (RealityType.Office): {
                let reality = new Office();
                (reality as Office).area = object.area;
                (reality as Office).floorsCount = object.floorsCount;
                (reality as Office).entry = object.entry;
                (reality as Office).adress = object.adress;
                (reality as Office).isUse = object.isUse;
                (reality as Office).isAcces = object.acces;
                (reality as Office).name = object.name;
                (reality as Office).roomsCount = object.roomsCount;
                let building = new Building();
                building.classBuilding = object.classBuilding;
                building.buildingYear = object.buildingYear;
                building.haveParking = object.haveParking;
                building.isEquipment = object.isEquipment;
                (reality as Office).building = building;
                return (reality as Office);
            }   
        }
    }

    private mapToDeal(object: any): Deal {
        let type: DealType = DealType[object.Type as keyof typeof DealType];
        switch(type){
            case (DealType.Rell): {
                let rent = new Rent();
                let conditions = new RentConditions();
                let objectCon = object.conditions;
                conditions.price = objectCon.cprice;
                conditions.period = objectCon.period;
                conditions.deposit = objectCon.deposit;
                conditions.communalPays = objectCon.communalPays;
                conditions.prepay = objectCon.prepay;
                conditions.facilities = objectCon.facilities;
                conditions.withAnimals = objectCon.withAnimals;
                conditions.canSmoke = objectCon.canSmoke;
                conditions.withKids = objectCon.withKids;
                rent.conditions = conditions;
                return rent;
            }
            case (DealType.Sell): {
                let sell = new Sell(); 
                let conditions = new SellConditions();
                let objCon = object.conditions;
                conditions.price = objCon.price;
                conditions.type = objCon.type;
                conditions.yearInOwn = objCon.yearInOwn;
                conditions.ownersCount = objCon.ownersCount;
                conditions.prescribersCount = objCon.prescribersCount;
                conditions.haveChildOwners = objCon.haveChildOwners;
                conditions.haveChildPrescribers = objCon.haveChildPrescribers;
                sell.conditions = conditions;
                return sell;
            }
            default: {
                throw new Error('Unsupported deal type'); 
            }
        }
    }
}