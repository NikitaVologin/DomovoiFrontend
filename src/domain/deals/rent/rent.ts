import { DealType } from "../../enums/dealType";
import { RentConditions } from "./rentConditions";

export class Rent {
    public readonly dealType: DealType = DealType.Rell;

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