import { RealityType } from "../domain/enums/realityType";
import { Building } from "../domain/realities/commercialBuildings/building";
import { Office } from "../domain/realities/commercialBuildings/types/office";
import { Reality } from "../domain/realities/reality";
import { RealityViewModel } from "../viewModel/RealityViewModel";
import { IRealityMapper } from "./interfaces/realityMapperInterface";

export class RealityMapper implements IRealityMapper {

    public mapObjectToReality(obj: any): Reality {
        let type: RealityType = RealityType[obj.Type as keyof typeof RealityType];
        switch(type) {
            case (RealityType.Office): {
                let reality = new Office();
                (reality as Office).area = obj.area;
                (reality as Office).floorsCount = obj.floorsCount;
                (reality as Office).entry = obj.entry;
                (reality as Office).adress = obj.adress;
                (reality as Office).isUse = obj.isUse;
                (reality as Office).isAcces = obj.acces;
                (reality as Office).name = obj.name;
                (reality as Office).roomsCount = obj.roomsCount;
                let building = new Building();
                building.classBuilding = obj.classBuilding;
                building.buildingYear = obj.buildingYear;
                building.haveParking = obj.haveParking;
                building.isEquipment = obj.isEquipment;
                (reality as Office).building = building;
                return (reality as Office);
            }   
        }
    }

    public mapRealityToModelView(obj: any): RealityViewModel {
        throw new Error("Method not implemented.");
    }

}