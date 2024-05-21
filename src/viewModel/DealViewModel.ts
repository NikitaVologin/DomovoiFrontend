import { DealType } from "../domain/enums/dealType";
import { RentConditions } from "./RentConditionsViewModel";
import { SellConditions } from "./SellConditionsViewModel";

export class DealViewModel {
	dealType: DealType = DealType.Rell;
	price: number = 22000;
	sellConditions?: SellConditions;
	rentConditions?: RentConditions;
}