import { Rent } from "../domain/deals/rent/rent";
import { RentConditions } from "../domain/deals/rent/rentConditions";
import { Sell } from "../domain/deals/sell/sell";
import { SellConditions } from "../domain/deals/sell/sellConditions";
import { DealType } from "../domain/enums/dealType";
import { Deal } from "../domain/types";
import { DealViewModel } from "../viewModel/DealViewModel";
import { RentConditionsViewModel } from "../viewModel/RentConditionsViewModel";
import { SellConditionsViewModel } from "../viewModel/SellConditionsViewModel";
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

    public mapDealToViewModel(deal: Deal): DealViewModel {
        let viewModel = new DealViewModel();
        viewModel.dealType = deal.dealType;
        viewModel.price = deal.conditions.price!;

        switch(deal.dealType){
            case(DealType.Rell):{
                let rent = new RentConditionsViewModel();
                rent.canSmoke = (deal.conditions as RentConditions).canSmoke;
                rent.communalPays = (deal.conditions as RentConditions).communalPays;
                rent.deposit = (deal.conditions as RentConditions).deposit;
                rent.facilities = (deal.conditions as RentConditions).facilities;
                rent.period = (deal.conditions as RentConditions).period;
                rent.prepay = (deal.conditions as RentConditions).prepay;
                rent.withAnimals = (deal.conditions as RentConditions).withAnimals;
                rent.withKids = (deal.conditions as RentConditions).withKids;
                viewModel.rentConditions = rent;
                break;
            }
            case(DealType.Sell):{
                let sell = new SellConditionsViewModel();
                sell.haveChildOwners = (deal.conditions as SellConditions).haveChildOwners;
                sell.haveChildPrescribers = (deal.conditions as SellConditions).haveChildPrescribers;
                sell.ownersCount = (deal.conditions as SellConditions).ownersCount;
                sell.prescribersCount = (deal.conditions as SellConditions).prescribersCount;
                sell.yearInOwn = (deal.conditions as SellConditions).yearInOwn;
                viewModel.sellConditions = sell;
                break;
            }
            default: {
                throw new Error('Unsupported deal type');
            }
        }
        return viewModel;
    }

    mapViewModelToDeal(viewModel: DealViewModel): Deal {
        switch(viewModel.dealType){
            case (DealType.Rell): {
                let rent = new Rent();
                let conditions = new RentConditions();
                let objectCon = viewModel.rentConditions;
                conditions.price = viewModel.price;
                conditions.period = objectCon?.period;
                conditions.deposit = objectCon?.deposit;
                conditions.communalPays = objectCon?.communalPays;
                conditions.prepay = objectCon?.prepay;
                conditions.facilities = objectCon?.facilities;
                conditions.withAnimals = objectCon?.withAnimals;
                conditions.canSmoke = objectCon?.canSmoke;
                conditions.withKids = objectCon?.withKids;
                rent.conditions = conditions;
                return rent;    
            }
            case (DealType.Sell): {
                let sell = new Sell(); 
                let conditions = new SellConditions();
                let objCon = viewModel.sellConditions;
                conditions.price = viewModel.price;
                //conditions.type = objCon?.type;
                conditions.yearInOwn = objCon?.yearInOwn;
                conditions.ownersCount = objCon?.ownersCount;
                conditions.prescribersCount = objCon?.prescribersCount;
                conditions.haveChildOwners = objCon?.haveChildOwners;
                conditions.haveChildPrescribers = objCon?.haveChildPrescribers;
                sell.conditions = conditions;
                return sell;
            }
            default: {
                throw new Error('Unsupported deal type'); 
            }
        }
    }
}