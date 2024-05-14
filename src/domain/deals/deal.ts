import { Rent } from "./types/rent/rent";
import { Sell } from "./types/sell/sell";

export class Deal {
    private _id!: number;

    private _dealInfo!: Sell | Rent; 

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get dealInfo(): Sell | Rent {
        return this._dealInfo;
    }

    public set dealInfo(value: Sell | Rent) {
        this._dealInfo = value;
    }

    public constructor(id: number) {
        this.id = id;
    }
}