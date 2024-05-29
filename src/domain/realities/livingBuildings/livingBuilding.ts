import { Reality } from "../reality";

export class LivingBuilding extends Reality {

    private _floor?: number;

    public get floor(): number | undefined {
        return this._floor;
    }

    public set floor(value: number | undefined) {
        this._floor = value;
    }

    private _floorsCount?: number;

    public get floorsCount(): number | undefined {
        return this._floor;
    }

    public set floorsCount(value: number | undefined) {
        this._floor = value;
    }


    // public constructor(id: string, area: number, floor: number, type?: string | undefined) {
    //     super(id, area, type);
    //     this.floor = floor;
    // }
}