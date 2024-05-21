import { Deal } from "../../domain/types"
import { DealViewModel } from "../../viewModel/DealViewModel"

export interface IDealMapper {
    mapObjectToDeal(object: any): Deal
    mapDealToViewModel(deal: Deal): DealViewModel
    mapViewModelToDeal(viewModel: DealViewModel): Deal
}