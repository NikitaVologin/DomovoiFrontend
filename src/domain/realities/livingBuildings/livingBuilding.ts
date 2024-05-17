import { Reality } from "../reality";

export class LivingBuilding extends Reality {

    private _floor!: number;

    public get floor(): number {
        return this._floor;
    }

    public set floor(value: number) {
        this._floor = value;
    }

    public constructor(id: string, area: number, floor: number, type?: string | undefined) {
        super(id, area, type);
        this.floor = floor;
    }
}