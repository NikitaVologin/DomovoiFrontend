export class Reality {
    private _id!: number;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    private _area!: number;

    public get area(): number {
        return this._area;
    }

    public set area(value: number) {
        this._area = value;
    }

    private _type?: string | undefined;

    public get type(): string | undefined {
        return this._type;
    }

    public set type(value: string | undefined) {
        this._type = value;
    }

    public constructor(id: number, area: number, type?: string | undefined) {
        this.id = id;
        this.area = area;
        this.type = type;
    }
}
