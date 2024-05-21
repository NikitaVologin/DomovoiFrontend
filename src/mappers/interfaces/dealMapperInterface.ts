import { Deal } from "../../domain/types"
import { DealViewModel } from "../../viewModel/DealViewModel"

export interface IDealMapper {
    mapObjectToDeal(object: any): Deal
    mapDealToViewModel(user: Deal): DealViewModel
}