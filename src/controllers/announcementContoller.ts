import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "./controllersInterfaces/announcementBoard";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { FilterParameters, SortParameters } from "../domain/types";
import { SortType } from "../domain/enums/sortType";

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

    async getFilteredAnnouncements(parameters: FilterParameters): Promise<AnnouncementViewModel[]> {
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

    async getAnnouncementsByUserId(userId: string): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getAnnouncementsByUserId(userId);
        return viewModels;    
    }

    async getSortedAnnouncements(announcementViewModels: AnnouncementViewModel[], sortParameters: SortParameters,
            direction: SortType): Promise<AnnouncementViewModel[]> {
        let viewModels: AnnouncementViewModel[] = 
            await this._announcementBoard.getSortedAnnouncements(announcementViewModels, sortParameters, direction);
        return viewModels;
    }
}