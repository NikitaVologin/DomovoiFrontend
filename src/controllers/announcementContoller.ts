import { injectable, inject } from "tsyringe";
import { IAnnouncementBoard } from "./controllersInterfaces/announcementBoard";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { FilterParameters, Period, SortParameters } from "../domain/types";
import { SortType } from "../domain/enums/sortType";

@injectable()
export class AnnouncementController {

    constructor(@inject("IAnnouncementBoard") private readonly _announcementBoard: IAnnouncementBoard) { }

     /**
     * Возвращает объекты, отвечающие за отображение объявлений.
     *
     * @param {number} count - Количество запрашиваемых объявлений от сервера.
     */
    async getAnnouncements(count: number): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getAnnouncements(count);
        return viewModels;
    } 

    /**
     * Возвращает отфильтрованные по параметрам объекты, отвечающие за отображение объявлений.
     *
     * @param {FilterParameters} parameters - Объект, содержащий в себе параметры, по которым проводится фильтрация объявлений.
     */
    async getFilteredAnnouncements(parameters: FilterParameters): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getFilteredAnnouncements(parameters);
        return viewModels;
    }

    /**
     * Возвращает срез или все доступные объекты, отвечающие за отображение объявлений.
     * 
     * @param {Period} data? - Объект, содержащий в себе параметры, по которым выбираются объявления. Может быть undefied.
     */
    async getAnnouncementsFromTo(data?: Period): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getAnnouncementsFromTo(data);
        return viewModels;
    }

    /**
     * Возвращает отсортированные объекты, отвечающие за отображение объявлений.
     * 
     * @param {AnnouncementViewModel[]} announcementViewModels - Коллекция объявлений, которые нужно отсортировать.
     */
    async getSortedAnnouncements(announcementViewModels: AnnouncementViewModel[], sortParameters: SortParameters,
            direction: SortType): Promise<AnnouncementViewModel[]> {
        let viewModels: AnnouncementViewModel[] = 
        await this._announcementBoard.getSortedAnnouncements(announcementViewModels, sortParameters, direction);
        return viewModels;
    }

    /**
     * Возвращает объект, отвечающий за отображение объявления, с конкретным id.
     * 
     * @param {string} id - Идентификационный ключ объявления.
     */
    async getAnnouncementById(id: string): Promise<AnnouncementViewModel> {
        let viewModel = await this._announcementBoard.getAnnouncementById(id);
        return viewModel;
    }

    /**
     * Возвращает объекты, отвечающие за отображение объявлений конкретного пользователя.
     * 
     * @param {string} userId - Идентификационный ключ пользователя.
     */
    async getAnnouncementsByUserId(userId: string): Promise<AnnouncementViewModel[]> {
        let viewModels = await this._announcementBoard.getAnnouncementsByUserId(userId);
        return viewModels;    
    }

    /**
     * Публикация объявления.
     * 
     * @param {AnnouncementViewModel} viewModel - Объявление, которое нужно опубликовать.
     */
    async postAnnouncement(viewModel: AnnouncementViewModel): Promise<string> {
        let id = await this._announcementBoard.postAnnouncement(viewModel);
        return id;    
    }

    /**
     * Удаление объявления.
     * 
     * @param {string} userId - Идентификационный ключ пользователя. 
     * @param {string} announcementId - Идентификационный ключ объявления.
     */
    async deleteAnnouncement(userId: string, announcementId: string): Promise<void> {
        await this._announcementBoard.deleteAnnouncement(userId, announcementId);
    }

    /**
     * Редактирование объявления.
     * 
     * @param {string} userId - Идентификационный ключ пользователя. 
     * @param {AnnouncementViewModel} announcementInformation - Изменённое объявление.
     */
    async changeAnnouncement(userId: string, announcementInformation: AnnouncementViewModel): Promise<void> {
        await this._announcementBoard.changeAnnouncement(userId, announcementInformation);
    }
}