import { Deal } from "../../deal";
import { RentConditions } from "./rentConditions";
import { RentRules } from "./rentRules";

export class Rent extends Deal {
    public readonly dealType: string = "Rell";

    private _conditions!: RentConditions;

    public get conditions(): RentConditions {
        return this._conditions;
    }

    public set conditions(value: RentConditions) {
        this._conditions = value;
    }

    private _rules!: RentRules;

    public get rules(): RentRules {
        return this._rules;
    }

    public set rules(value: RentRules) {
        this._rules = value;
    }

    public constructor(id: number, rentConditions: RentConditions, rentRules: RentRules) {
        super(id);
        this.conditions = rentConditions;
        this.rules = rentRules;
    }
}