import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "./controllersInterfaces/announcementBoard";
import { Announcement } from "../domain/announcements/announcement";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { RealityType } from "../domain/realities/realityType";
import { DealType } from "../domain/deals/dealType";

@injectable()
export class AnnouncementController {

    constructor(@inject("IAnnouncementBord") private readonly _announcementBord: IAnnouncementBoard) { }

    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        let viewModel = await this._announcementBord.getAnnouncementById(id);
        return viewModel;
    }

    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBord.getAnnouncements(count);
        return viewModels;
    } 

    async postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): Promise<string> {
        let id = await this._announcementBord.postAnnouncement(announcement, realityType, dealType);
        return id;    
    }
}