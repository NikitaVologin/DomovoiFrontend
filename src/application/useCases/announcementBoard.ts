import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "../../controllers/controllersInterfaces/announcementBoard";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";
import { IAnnouncementBoardService } from "../interfaces/announcementBoadService";
import { IAnnoucementMapper } from "../../mappers/interfaces/annoucementMapperInterface";
import { FilterParameters, Period, SortParameters } from "../../domain/types";
import { SortType } from "../../domain/enums/sortType";

@injectable()
export class AnnouncementBoard implements IAnnouncementBoard {

    public constructor(@inject("IAnnouncementBoardService") private readonly _announcementBoardSerivce: IAnnouncementBoardService,
        @inject("IAnnoucementMapper") private readonly _annoucementMapper: IAnnoucementMapper) { }

    async getSortedAnnouncements(announcementViewModels: AnnouncementViewModel[], sortParameters: SortParameters,
         direction: SortType): Promise<AnnouncementViewModel[]> {
        throw new Error("Нереализованный метод");
        let sortedAnnouncements: AnnouncementViewModel[] = [];
        switch(direction){
            case(SortType.Up): {
                sortedAnnouncements = announcementViewModels.sort( (an1, an2) => an1.deal.price - an2.deal.price);
                return new Promise((resolve, reject) => {
                    resolve(sortedAnnouncements);
                });
            }
            case(SortType.Down): {
                return new Promise((resolve, reject) => {
                    resolve(sortedAnnouncements);
                });
            }
        }
    }

    async deleteAnnouncement(idUser: string, idAnnouncement: string): Promise<void> {
        await this._announcementBoardSerivce.deleteAnnouncement(idUser, idAnnouncement);
    }

    async changeAnnouncement(userId: string, announcementInformation: AnnouncementViewModel): Promise<void> {
        let announcement = this._annoucementMapper.mapViewModelToAnnoucement(announcementInformation);
        await this._announcementBoardSerivce.changeAnnouncement(userId, announcement);
    }

    async getAnnouncementsFromTo(data?: Period): Promise<AnnouncementViewModel[]> {
        let announcements = await this._announcementBoardSerivce.getAnnouncementsFromTo(data?.indexFrom, data?.indexTo);
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

    async getFilteredAnnouncements(params: FilterParameters): Promise<AnnouncementViewModel[]>{
        let announcements = await this._announcementBoardSerivce.getFilteredAnnouncements(params);
        let list: AnnouncementViewModel[] = this._annoucementMapper.mapAnnoucementsToViewModels(announcements);
        return list;
    }

    async getAnnouncementsByUserId(userId: string): Promise<AnnouncementViewModel[]> {
        let announcements = await this._announcementBoardSerivce.getAnnouncementsByUserId(userId);
        let list: AnnouncementViewModel[] = this._annoucementMapper.mapAnnoucementsToViewModels(announcements);
        return list;
    }
}