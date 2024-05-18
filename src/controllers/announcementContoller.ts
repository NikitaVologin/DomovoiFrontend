import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "./controllersInterfaces/announcementBoard";
import { Announcement } from "../domain/announcements/announcement";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { RealityType } from "../domain/enums/realityType";
import { DealType } from "../domain/enums/dealType";

@injectable()
export class AnnouncementController {

    constructor(@inject("IAnnouncementBoard") private readonly _AnnouncementBoard: IAnnouncementBoard) { }

    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        let viewModel = await this._AnnouncementBoard.getAnnouncementById(id);
        return viewModel;
    }

    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._AnnouncementBoard.getAnnouncements(count);
        return viewModels;
    } 

    async postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): Promise<string> {
        let id = await this._AnnouncementBoard.postAnnouncement(announcement, realityType, dealType);
        return id;    
    }
}