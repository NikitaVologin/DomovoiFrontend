import { Rent } from "../domain/deals/rent/rent";
import { RentConditions } from "../domain/deals/rent/rentConditions";
import { Sell } from "../domain/deals/sell/sell";
import { SellConditions } from "../domain/deals/sell/sellConditions";
import { DealType } from "../domain/enums/dealType";
import { Deal } from "../domain/types";
import { DealViewModel } from "../viewModel/DealViewModel";
import { IDealMapper } from "./interfaces/dealMapperInterface";

export class DealMapper implements IDealMapper {
    
    public mapObjectToDeal(object: any): Deal {
        let type: DealType = DealType[object.Type as keyof typeof DealType];
        switch(type){
            case (DealType.Rell): {
                let rent = new Rent();
                let conditions = new RentConditions();
                let objectCon = object.conditions;
                conditions.price = objectCon.cprice;
                conditions.period = objectCon.period;
                conditions.deposit = objectCon.deposit;
                conditions.communalPays = objectCon.communalPays;
                conditions.prepay = objectCon.prepay;
                conditions.facilities = objectCon.facilities;
                conditions.withAnimals = objectCon.withAnimals;
                conditions.canSmoke = objectCon.canSmoke;
                conditions.withKids = objectCon.withKids;
                rent.conditions = conditions;
                return rent;
            }
            case (DealType.Sell): {
                let sell = new Sell(); 
                let conditions = new SellConditions();
                let objCon = object.conditions;
                conditions.price = objCon.price;
                conditions.type = objCon.type;
                conditions.yearInOwn = objCon.yearInOwn;
                conditions.ownersCount = objCon.ownersCount;
                conditions.prescribersCount = objCon.prescribersCount;
                conditions.haveChildOwners = objCon.haveChildOwners;
                conditions.haveChildPrescribers = objCon.haveChildPrescribers;
                sell.conditions = conditions;
                return sell;
            }
            default: {
                throw new Error('Unsupported deal type'); 
            }
        }
    }

    public mapDealToViewModel(user: Deal): DealViewModel {
        throw new Error("Method not implemented.");
    }

}