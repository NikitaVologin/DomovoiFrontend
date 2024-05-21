import { Reality } from "../../domain/realities/reality";
import { RealityViewModel } from "../../viewModel/RealityViewModel";

export interface IRealityMapper {
    mapObjectToReality(obj: any): Reality
    mapRealityToModelView(reality: Reality): RealityViewModel
    mapViewModelToRealirt(viewModel: RealityViewModel): Reality
}