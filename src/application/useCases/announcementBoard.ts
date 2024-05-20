import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "../../controllers/controllersInterfaces/announcementBoard";
import { Announcement } from "../../domain/announcements/announcement";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";
import { IAnnouncementBoardService } from "../interfaces/announcementBoadService";
import { RealityType } from "../../domain/enums/realityType";
import { DealType } from "../../domain/enums/dealType";
import { LegalCounterAgent } from "../../domain/counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "../../domain/counteragents/physicalCounteragent";
import { CounterAgentResponse } from "../../domain/types";
import { CounteragentViewModel } from "../../viewModel/CounteragentViewModel";
import { CounterAgent } from "../../domain/counteragents/counteragent";
import { Office } from "../../domain/realities/commercialBuildings/types/office";

@injectable()
export class AnnouncementBoard implements IAnnouncementBoard {

    public constructor(@inject("IAnnouncementBoardService") private readonly _announcementBoardSerivce: IAnnouncementBoardService) { }

    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        let announcement = await this._announcementBoardSerivce.getAnnouncementById(id);
        let viewModel = this.mapToViewModel(announcement);
        return viewModel;
    }

    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        let announcements = await this._announcementBoardSerivce.getAnnouncements(count);
        let list: AnnouncementViewModel[] = [];
        for(let announcement of announcements) {
            let viewModel = this.mapToViewModel(announcement);
            list.push(viewModel);
        }
        return list;
    }

    async postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): Promise<string> {
        let id = await this._announcementBoardSerivce.postAnnouncement(announcement,
             realityType.toString(), dealType.toString());
        return id;
    }

    mapToViewModel(announcement: Announcement): AnnouncementViewModel{
        let viewModel = new AnnouncementViewModel();
        viewModel.address = announcement.reality.adress!;
        viewModel.area = announcement.reality.area!;
        viewModel.buildingType = RealityType[announcement.reality.type! as keyof typeof RealityType];
        viewModel.counteragent = this.getCounterAgentViewModel(announcement.counteragent);
        viewModel.dealType = announcement.deal.dealType;

        switch(RealityType[announcement.reality.type! as keyof typeof RealityType]){
            case(RealityType.Office): {
                viewModel.haveParking = (announcement.reality as Office).building?.haveParking;
            }
        }
        return viewModel;
    }

    getCounterAgentViewModel(counteragent: CounterAgent) : CounteragentViewModel {
        let viewModel = new CounteragentViewModel();    
        if (counteragent instanceof LegalCounterAgent) {
            let user = counteragent as LegalCounterAgent;
            viewModel.FIO = user.name!;
            viewModel.email = user.mail!;
            viewModel.phone = user.contactNumber;
        }
        else if (counteragent instanceof PhysicalCounterAgent) {
            let user = counteragent as PhysicalCounterAgent;
            viewModel.FIO = user.FIO;
            viewModel.email = user.mail!;
            viewModel.phone = user.contactNumber;
        }        
        return viewModel;
    }
}