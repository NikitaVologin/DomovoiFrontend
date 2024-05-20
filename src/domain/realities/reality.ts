export class Reality {
    private _id!: string | undefined;

    public get id(): string | undefined {
        return this._id;
    }

    public set id(value: string | undefined) {
        this._id = value;
    }

    private _area!: number | undefined;

    public get area(): number | undefined {
        return this._area;
    }

    public set area(value: number | undefined) {
        this._area = value;
    }

    private _type?: string | undefined;

    public get type(): string | undefined {
        return this._type;
    }

    public set type(value: string | undefined) {
        this._type = value;
    }

    private _adress?: string 

    public get adress(): string | undefined {
        return this._type;
    }

    public set adress(value: string | undefined) {
        this._type = value;
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
