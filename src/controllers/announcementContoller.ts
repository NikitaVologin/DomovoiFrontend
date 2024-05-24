import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "./controllersInterfaces/announcementBoard";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { filterParameters } from "../domain/types";

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

    async getFilteredAnnouncements(parameters: filterParameters): Promise<AnnouncementViewModel[]> {
        throw new Error("Method not implemented.");
    }

    async postAnnouncement(viewModel: AnnouncementViewModel): Promise<string> {
        let id = await this._AnnouncementBoard.postAnnouncement(viewModel);
        return id;    
    }
}