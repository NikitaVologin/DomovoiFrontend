import { Announcement } from "../../domain/announcements/announcement";
import { AnnouncementViewModel } from "../../viewModel/AnnouncementViewModel";

export interface IAnnoucementMapper {
    mapObjectToAnnoucement(obj: any): Announcement
    mapAnnoucementToViewModel(announcement: Announcement): AnnouncementViewModel
    mapViewModelToAnnoucement(viewModel: AnnouncementViewModel): Announcement
}