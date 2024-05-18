import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "../../controllers/controllersInterfaces/announcementBoard";
import { Announcement } from "../../domain/announcements/announcement";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";
import { IAnnouncementBoardService } from "../interfaces/announcementBoadService";
import { RealityType } from "../../domain/enums/realityType";
import { DealType } from "../../domain/enums/dealType";

@injectable()
export class AnnouncementBoard implements IAnnouncementBoard {

    public constructor(@inject("IAnnouncementBoardService") private readonly _announcementBoardSerivce: IAnnouncementBoardService) { }

    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        let announcement = await this._announcementBoardSerivce.getAnnouncementById(id);
        let viewModel = new AnnouncementViewModel();
        return viewModel;
    }

    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        let announcements = await this._announcementBoardSerivce.getAnnouncements(count);
        let list: AnnouncementViewModel[] = [];
        for(let announcement of announcements) {
            let viewModel = new AnnouncementViewModel();
            list.push(viewModel);
        }
        return list;
    }

    async postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): Promise<string> {
        let id = await this._announcementBoardSerivce.postAnnouncement(announcement,
             realityType.toString(), dealType.toString());
        return id;
    }
}