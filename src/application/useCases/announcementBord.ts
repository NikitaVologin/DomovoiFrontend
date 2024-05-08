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

    getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        throw new Error("Method not implemented.");
    }
    getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        throw new Error("Method not implemented.");
    }
    postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): string {
        throw new Error("Method not implemented.");
    }
}