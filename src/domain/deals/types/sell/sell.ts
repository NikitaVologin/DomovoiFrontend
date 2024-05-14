import { Deal } from "../../deal";
import { SellConditions } from "./sellConditions";
import { SellFeatures } from "./sellFeatures";

export class Sell extends Deal {

    public readonly dealType: string = "Sell";

    private _conditions!: SellConditions;

    public get conditions(): SellConditions {
        return this._conditions;
    }

    public set conditions(value: SellConditions) {
        this._conditions = value;
    }

    private _features!: SellFeatures;

    public get features(): SellFeatures {
        return this._features;
    }

    public set features(value: SellFeatures) {
        this._features = value;
    }

    public constructor(id: number, conditions: SellConditions, features: SellFeatures) {
        super(id);
        this.conditions = conditions;
        this.features = features;
    }
} 