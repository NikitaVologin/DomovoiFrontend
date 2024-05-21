import { injectable, inject } from "tsyringe";
import { Announcement } from "../domain/announcements/announcement";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { IAnnoucementMapper } from "./interfaces/annoucementMapperInterface";
import { IRealityMapper } from "./interfaces/realityMapperInterface";
import { IDealMapper } from "./interfaces/dealMapperInterface";
import { ICouterAgentMapper } from "./interfaces/couteragentMapperInterface";

@injectable()
export class AnnoucementMapper implements IAnnoucementMapper {

    public constructor(@inject("IRealityMapper") private readonly _realityMapper: IRealityMapper,
        @inject("IDealMapper") private readonly _dealMapper: IDealMapper,
        @inject("ICouterAgentMapper") private readonly _userMapper: ICouterAgentMapper) { }

    public mapObjectToAnnoucement(obj: any): Announcement {
        let announcement = new Announcement();
        announcement.id = obj.id;
        announcement.description = obj.description;
        announcement.connectionType = obj.connectionType;
        announcement.deal = this._dealMapper.mapObjectToDeal(obj.dealInfo);
        announcement.reality = this._realityMapper.mapObjectToReality(obj.realityInfo);
        announcement.counteragent = this._userMapper.mapObjectToCouterAgent(obj.counterAgentInfo);
        return announcement;
    }

    public mapAnnoucementToViewModel(announcement: Announcement): AnnouncementViewModel {
        let viewModel = new AnnouncementViewModel();
        viewModel.id = announcement.id;
        viewModel.connectionType = announcement.connectionType;
        viewModel.description = announcement.description;
        viewModel.reality = this._realityMapper.mapRealityToModelView(announcement.reality);
        viewModel.deal = this._dealMapper.mapDealToViewModel(announcement.deal);
        viewModel.counteragent = this._userMapper.mapCouterAgentToViewModel(announcement.counteragent);
        return viewModel;
    }

    mapViewModelToAnnoucement(viewModel: AnnouncementViewModel): Announcement {
        let announcement = new Announcement();
        announcement.id = viewModel.id;
        announcement.description = viewModel.description;
        announcement.connectionType = viewModel.connectionType;
        announcement.deal = this._dealMapper.mapViewModelToDeal(viewModel.deal);
        announcement.reality = this._realityMapper.mapViewModelToRealirt(viewModel.reality);
        announcement.counteragent = this._userMapper.mapViewModelToCouterAget(viewModel.counteragent);
        return announcement;
    }
}