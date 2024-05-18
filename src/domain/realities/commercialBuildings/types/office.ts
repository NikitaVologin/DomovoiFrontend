import { Building } from "../building";
import { CommercialBuilding } from "../commercialBuilding";

export class Office extends CommercialBuilding {

    private _name?: string | undefined;

    public get name(): string | undefined {
        return this._name;
    }
    public set name(value: string | undefined) {
        this._name = value;
    }

    private _roomsCount?: number | undefined;

    public get roomsCount(): number | undefined {
        return this._roomsCount!;
    }

    public set roomsCount(value: number | undefined) {
        this._roomsCount = value;
    }

    // public constructor(id: string, area: number, floorsCount: number,
    //     entry: boolean, adress: string, isUse: boolean, isAcces: boolean,
    //     roomsCount: number,
    //     name?: string | undefined,
    //     building?: Building | undefined,
    //     type?: string | undefined) {
    //     super(id, area, floorsCount, entry, adress, isUse, isAcces, building, type);
    //     this.roomsCount = roomsCount;
    //     this.name = name;
    // }

    public constructor(){
        super();    
    }
}