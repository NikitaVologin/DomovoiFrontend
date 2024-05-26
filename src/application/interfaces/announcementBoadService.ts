import { Announcement } from "../../domain/announcements/announcement";
import { filterParameters } from "../../domain/types";

export interface IAnnouncementBoardService {
    getAnnouncementById(id: string): Promise<Announcement>;
    getAnnouncements(count: number): Promise<Announcement[]>;
    postAnnouncement(announcement: Announcement): Promise<string>;
    getFilteredAnnouncements(params: filterParameters): Promise<Announcement[]>;
    deleteAnnouncement(idUser: string, idAnnouncement: string): Promise<void>;
    changeAnnouncement(userId: string, announcementInformation: Announcement): Promise<void>;
    getAnnouncementsFromTo(from: number, to: number): Promise<Announcement[]> 
}