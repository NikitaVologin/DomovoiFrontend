import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "../../controllers/controllersInterfaces/announcementBoard";
import { Announcement } from "../../domain/announcements/announcement";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";
import { IAnnouncementBoardService } from "../interfaces/announcementBoadService";
import { RealityType } from "../../domain/realities/realityType";
import { DealType } from "../../domain/deals/dealType";

@injectable()
export class AnnouncementBord implements IAnnouncementBoard {

    public constructor(@inject("IAnnouncementBoardService") private readonly _announcementBordSerivce: IAnnouncementBoardService) { }

    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        throw new Error("Method not implemented.");
        let announcement = await this._announcementBordSerivce.getAnnouncementById(id);
        let viewModel = new AnnouncementViewModel();
        return viewModel;
    }

    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        throw new Error("Method not implemented.");
        let announcements = await this._announcementBordSerivce.getAnnouncements(count);
        let list: AnnouncementViewModel[] = [];
        for(let announcement in announcements) {
            let viewModel = new AnnouncementViewModel();
            list.push(viewModel);
        }
        return list;
    }

    async postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): Promise<string> {
        throw new Error("Method not implemented.");
        let id = await this._announcementBordSerivce.postAnnouncement(announcement,
             realityType.toString(), dealType.toString());
        return id;
    }
}