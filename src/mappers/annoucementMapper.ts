import { injectable, inject } from "tsyringe";
import { Announcement } from "../domain/announcements/announcement";
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel";
import { IAnnoucementMapper } from "./interfaces/annoucementMapperInterface";
import { IRealityMapper } from "./interfaces/realityMapperInterface";
import { IDealMapper } from "./interfaces/dealMapperInterface";
import { ICouterAgentMapper } from "./interfaces/couteragentMapperInterface";
import { RealityType } from "../domain/enums/realityType";
import { Office } from "../domain/realities/commercialBuildings/types/office";

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
        viewModel.address = announcement.reality.adress!;
        viewModel.area = announcement.reality.area!;
        viewModel.buildingType = RealityType[announcement.reality.type! as keyof typeof RealityType];
        viewModel.counteragent = this._userMapper.mapCouterAgentToViewModel(announcement.counteragent);
        viewModel.dealType = announcement.deal.dealType;

        switch(RealityType[announcement.reality.type! as keyof typeof RealityType]){
            case(RealityType.Office): {
                viewModel.haveParking = (announcement.reality as Office).building?.haveParking;
            }
        }
        return viewModel;
    }

    mapViewModelToAnnoucement(viewModel: AnnouncementViewModel): Announcement {
        throw new Error("Method not implemented.");
    }
}