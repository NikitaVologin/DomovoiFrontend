import { DealType } from "../domain/enums/dealType";
import { RentConditionsViewModel } from "./RentConditionsViewModel";
import { SellConditionsViewModel } from "./SellConditionsViewModel";

export class DealViewModel {
	dealType: DealType = DealType.Rent;
	price: number = 22000;
	sellConditions?: SellConditionsViewModel;
	rentConditions?: RentConditionsViewModel;
}