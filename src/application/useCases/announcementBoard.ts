import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "../../controllers/controllersInterfaces/announcementBoard";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";
import { IAnnouncementBoardService } from "../interfaces/announcementBoadService";
import { IAnnoucementMapper } from "../../mappers/interfaces/annoucementMapperInterface";
import { ICouterAgentMapper } from "../../mappers/interfaces/couteragentMapperInterface";
import { filterParameters } from "../../domain/types";

@injectable()
export class AnnouncementBoard implements IAnnouncementBoard {

    public constructor(@inject("IAnnouncementBoardService") private readonly _announcementBoardSerivce: IAnnouncementBoardService,
        @inject("IAnnoucementMapper") private readonly _annoucementMapper: IAnnoucementMapper,
        @inject("ICouterAgentMapper") private readonly _userMapper: ICouterAgentMapper) { }

    async deleteAnnouncement(idUser: string, idAnnouncement: string): Promise<void> {
        await this._announcementBoardSerivce.deleteAnnouncement(idUser, idAnnouncement);
    }

    async changeAnnouncement(userId: string, announcementInformation: AnnouncementViewModel): Promise<void> {
        let announcement = this._annoucementMapper.mapViewModelToAnnoucement(announcementInformation);
        await this._announcementBoardSerivce.changeAnnouncement(userId, announcement);
    }

    async getAnnouncementsFromTo(from: number, to: number): Promise<AnnouncementViewModel[]> {
        let announcements = await this._announcementBoardSerivce.getAnnouncementsFromTo(from, to);
        let list: AnnouncementViewModel[] = this._annoucementMapper.mapAnnoucementsToViewModels(announcements);
        return list;
    }

    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        let announcement = await this._announcementBoardSerivce.getAnnouncementById(id);
        let viewModel = this._annoucementMapper.mapAnnoucementToViewModel(announcement);
        return viewModel;
    }

    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        let announcements = await this._announcementBoardSerivce.getAnnouncements(count);
        let list: AnnouncementViewModel[] = this._annoucementMapper.mapAnnoucementsToViewModels(announcements);
        return list;
    }

    async postAnnouncement(viewModel: AnnouncementViewModel): Promise<string> {
        let announcement = this._annoucementMapper.mapViewModelToAnnoucement(viewModel);
        let id = await this._announcementBoardSerivce.postAnnouncement(announcement);
        return id;
    }

    async getFilteredAnnouncements(params: filterParameters): Promise<AnnouncementViewModel[]>{
        let announcements = await this._announcementBoardSerivce.getFilteredAnnouncements(params);
        let list: AnnouncementViewModel[] = this._annoucementMapper.mapAnnoucementsToViewModels(announcements);
        return list;
    }
}