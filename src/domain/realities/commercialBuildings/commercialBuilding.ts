import { Reality } from "../reality";
import { Building } from "./building";

export class CommercialBuilding extends Reality {

    private _floorsCount!: number;

    public get floorsCount(): number {
        return this._floorsCount;
    }

    public set floorsCount(value: number) {
        this._floorsCount = value;
    }

    private _entry!: boolean;

    public get entry(): boolean {
        return this._entry;
    }

    public set entry(value: boolean) {
        this._entry = value;
    }

    private _adress!: string;

    public get adress(): string {
        return this._adress;
    }

    public set adress(value: string) {
        this._adress = value;
    }

    private _isUse!: boolean;

    public get isUse(): boolean {
        return this._isUse;
    }

    public set isUse(value: boolean) {
        this._isUse = value;
    }

    private _isAcces!: boolean;

    public get isAcces(): boolean {
        return this._isAcces;
    }

    public set isAcces(value: boolean) {
        this._isAcces = value;
    }

    private _building?: Building | undefined;

    public get building(): Building | undefined {
        return this._building;
    }

    public set building(value: Building | undefined) {
        this._building = value;
    }

    public constructor(id: number, area: number, floorsCount: number,
        entry: boolean, adress: string, isUse: boolean, isAcces: boolean,
        building?: Building | undefined,
        type?: string | undefined) {
        super(id, area, type);

        this.floorsCount = floorsCount;
        this.entry = entry;
        this.adress = adress;
        this.isUse = isUse;
        this.isAcces = isAcces;
        this.building = building;
    }
}
