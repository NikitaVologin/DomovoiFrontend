import { Announcement } from "../../domain/announcements/announcement";

export interface IAnnouncementBoardService {
    getAnnouncementById(id: string): Promise<Announcement>;
    getAnnouncements(count: number): Promise<Announcement[]>;
    postAnnouncement(announcement: Announcement, realityType: string, dealType: string): Promise<string>;
}