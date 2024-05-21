import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";

export interface IAnnouncementBoard {
    getAnnouncementById(id: string): Promise<AnnouncementViewModel>;
    getAnnouncements(count: number): Promise<AnnouncementViewModel[]>;
    postAnnouncement(announcement: AnnouncementViewModel): Promise<string>;
}