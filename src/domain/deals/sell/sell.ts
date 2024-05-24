import { DealType } from "../../enums/dealType";
import { SellConditions } from "./sellConditions";

export class Sell {

    public readonly type: DealType = DealType.Sell;

    private _price!: number | undefined;

    public get price(): number | undefined {
        return this._price;
    }

    public set price(value: number | undefined) {
        this._price = value;
    }

    private _conditions!: SellConditions;

    public get conditions(): SellConditions {
        return this._conditions;
    }

    public set conditions(value: SellConditions) {
        this._conditions = value;
    }

    // public constructor(id: string, conditions: SellConditions) {
    //     super(id);
    //     this.conditions = conditions;
    // }
    public constructor() {
    }
} 