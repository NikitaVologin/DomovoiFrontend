import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "./controllersInterfaces/announcementBoard";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { filterParameters } from "../domain/types";

@injectable()
export class AnnouncementController {

    constructor(@inject("IAnnouncementBoard") private readonly _announcementBoard: IAnnouncementBoard) { }

    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        let viewModel = await this._announcementBoard.getAnnouncementById(id);
        return viewModel;
    }

    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getAnnouncements(count);
        return viewModels;
    } 

    async getFilteredAnnouncements(parameters: filterParameters): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getFilteredAnnouncements(parameters);
        return viewModels;
    }

    async postAnnouncement(viewModel: AnnouncementViewModel): Promise<string> {
        let id = await this._announcementBoard.postAnnouncement(viewModel);
        return id;    
    }

    async deleteAnnouncement(userId: string, announcementId: string): Promise<void> {
        await this._announcementBoard.deleteAnnouncement(userId, announcementId);
    }

    async changeAnnouncement(userId: string, announcementInformation: AnnouncementViewModel): Promise<void> {
        await this._announcementBoard.changeAnnouncement(userId, announcementInformation);
    }

    async getAnnouncementsFromTo(from: number, to: number): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getAnnouncementsFromTo(from, to);
        return viewModels;
    }
}