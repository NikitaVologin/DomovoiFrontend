import { DealType } from "../../enums/dealType";
import { RentConditions } from "./rentConditions";

export class Rent {
    public readonly type: DealType = DealType.Rent;

    private _price!: number | undefined;

    public get price(): number | undefined {
        return this._price;
    }

    public set price(value: number | undefined) {
        this._price = value;
    }


    private _conditions!: RentConditions;

    public get conditions(): RentConditions {
        return this._conditions;
    }

    public set conditions(value: RentConditions) {
        this._conditions = value;
    }

    // public constructor(id: string, rentConditions: RentConditions) {
    //     super(id);
    //     this.conditions = rentConditions;
    // }

    public constructor () { 

    }
}