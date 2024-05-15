import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";
import { Announcement } from "../../domain/announcements/announcement";
import { RealityType } from "../../domain/realities/realityType";
import { DealType } from "../../domain/deals/dealType";

export interface IAnnouncementBoard {
    getAnnouncementById(id: string): Promise<AnnouncementViewModel>;
    getAnnouncements(count: number): Promise<AnnouncementViewModel[]>;
    postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): Promise<string>;
}