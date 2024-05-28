import { RealityType } from "../domain/enums/realityType";
import { Building } from "../domain/realities/commercialBuildings/building";
import { Office } from "../domain/realities/commercialBuildings/types/office";
import { Flat } from "../domain/realities/livingBuildings/types/flat";
import { Reality } from "../domain/realities/reality";
import { RealityViewModel } from "../viewModel/RealityViewModel";
import { IRealityMapper } from "./interfaces/realityMapperInterface";

export class RealityMapper implements IRealityMapper {

    public mapObjectToReality(obj: any): Reality {
        let type: RealityType = RealityType[obj.type as keyof typeof RealityType];
        switch(type) {
            case (RealityType.Office): {
                let reality = new Office();
                reality.type = type;
                (reality as Office).name = obj.name;
                (reality as Office).roomsCount = obj.roomsCount;
                (reality as Office).floor = obj.floor;
                (reality as Office).floorsCount = obj.floorsCount;
                (reality as Office).entry = obj.entry;
                (reality as Office).isUse = obj.isUse;
                (reality as Office).isAcces = obj.access;
                (reality as Office).address = obj.address;
                (reality as Office).area = obj.area;
                let building = new Building();
                building.classBuilding = obj.building.class;
                building.buildingYear = obj.building.buildingYear;
                building.centerName = obj.building.centerName;
                building.haveParking = obj.building.haveParking;
                building.isEquipment = obj.building.isEquipment;
                (reality as Office).building = building;
                return (reality as Office);
            }  
            case(RealityType.Flat): {
                let reality = new Flat();
                reality.type = type;
                return reality;
            } 
            default: {
                throw new Error('Unsupported realty type'); 
            }  
        }
    }

    public mapRealityToModelView(reality: Reality): RealityViewModel {
        let viewModel = new RealityViewModel();
        switch(reality.type) {
            case (RealityType.Office): {
                viewModel.address = (reality as Office).address!;
                viewModel.area = (reality as Office).area!;
                viewModel.destrict = "";
                viewModel.floor = (reality as Office).floor;
                viewModel.haveParking = (reality as Office).building?.haveParking;
                viewModel.isSingleRoom = false;
                viewModel.realityType = reality.type;
                viewModel.roomCount = (reality as Office).roomsCount;
                viewModel.totalFloorsInBuilding = (reality as Office).floorsCount;
                return viewModel;
            } 
            case(RealityType.Flat): {
                return viewModel;
            } 
            default: {
                throw new Error('Unsupported realty type'); 
            }  
        }
    }

    mapViewModelToRealirt(viewModel: RealityViewModel): Reality {
        switch(viewModel.realityType) {
            case (RealityType.Office): {
                let reality = new Office();
                reality.address = viewModel.address;
                (reality as Office).area = viewModel.area;
                (reality as Office).floorsCount = viewModel.totalFloorsInBuilding!;
                (reality as Office).floor = viewModel.floor;
                (reality as Office).type = viewModel.realityType;
                // (reality as Office).entry = viewModel.entry;
                // (reality as Office).adress = viewModel.adress;
                // (reality as Office).isUse = viewModel.isUse;
                // (reality as Office).isAcces = viewModel.acces;
                // (reality as Office).name = viewModel.name;
                (reality as Office).roomsCount = viewModel.roomCount;
                let building = new Building();
                //building.classBuilding = viewModel.classBuilding;
                //building.buildingYear = viewModel.buildingYear;
                building.haveParking = viewModel.haveParking;
                //building.isEquipment = viewModel.isEquipment;
                (reality as Office).building = building;
                return (reality as Office);
            }   
            default: {
                throw new Error('Unsupported realty type'); 
            }  
        }
    }
}