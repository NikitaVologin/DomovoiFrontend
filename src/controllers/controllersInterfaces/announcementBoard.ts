import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel.ts";
import { Announcement } from "../../domain/announcements/announcement.ts";
import { RealityType } from "../../domain/realities/realityType.ts";
import { DealType } from "../../domain/deals/dealType.ts";

export interface IAnnouncementBoard {
    getAnnouncementById(id: string): Promise<AnnouncementViewModel>;
    getAnnouncements(count: number): Promise<AnnouncementViewModel[]>;
    postAnnouncement(announcement: Announcement, realityType: RealityType, dealType: DealType): Promise<string>;
}