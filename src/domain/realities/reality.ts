import { RealityType } from "../enums/realityType";

export class Reality {
    private _id!: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    private _area!: number | undefined;

    public get area(): number | undefined {
        return this._area;
    }

    public set area(value: number | undefined) {
        this._area = value;
    }

    private _type?: RealityType | undefined;

    public get type(): RealityType | undefined {
        return this._type;
    }

    public set type(value: RealityType | undefined) {
        this._type = value;
    }

    private _address?: string 

    public get address(): string | undefined {
        return this._address;
    }

    public set adress(value: string | undefined) {
        this._address = value;
    }

    // public getInstance(id: string, area: number, type?: string | undefined): Reality {
    //     let object = new Reality();
    //     object.id = id;
    //     object.area = area;
    //     object.type = type;
    //     return object;
    // }

    public constructor() {}
}
