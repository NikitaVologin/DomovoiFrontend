import { SortType } from "../../domain/enums/sortType";
import { FilterParameters, Period, SortParameters} from "../../domain/types";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";

export interface IAnnouncementBoard {
    getAnnouncementById(id: string): Promise<AnnouncementViewModel>;
    getAnnouncements(count: number): Promise<AnnouncementViewModel[]>;
    postAnnouncement(announcement: AnnouncementViewModel): Promise<string>;
    getFilteredAnnouncements(params: FilterParameters): Promise<AnnouncementViewModel[]>;
    deleteAnnouncement(idUser: string, idAnnouncement: string): Promise<void>;
    changeAnnouncement(userId: string, announcementInformation: AnnouncementViewModel): Promise<void>;
    getAnnouncementsFromTo(data?: Period): Promise<AnnouncementViewModel[]> 
    getSortedAnnouncements(announcementViewModels: AnnouncementViewModel[], sortParameters: SortParameters, direction: SortType): Promise<AnnouncementViewModel[]>;
    getAnnouncementsByUserId(userId: string): Promise<AnnouncementViewModel[]>;
}