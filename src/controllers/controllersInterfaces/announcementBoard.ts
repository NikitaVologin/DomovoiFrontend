import { filterParameters } from "../../domain/types";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";

export interface IAnnouncementBoard {
    getAnnouncementById(id: string): Promise<AnnouncementViewModel>;
    getAnnouncements(count: number): Promise<AnnouncementViewModel[]>;
    postAnnouncement(announcement: AnnouncementViewModel): Promise<string>;
    getFilteredAnnouncements(params: filterParameters): Promise<AnnouncementViewModel[]>;
    deleteAnnouncement(idUser: string, idAnnouncement: string): Promise<void>;
    changeAnnouncement(userId: string, announcementInformation: AnnouncementViewModel): Promise<void>;
    getAnnouncementsFromTo(from: number, to: number): Promise<AnnouncementViewModel[]> 
}