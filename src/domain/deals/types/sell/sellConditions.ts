export class SellConditions {
    private _id!: number;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    private _price!: number;

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    private _type?: string | undefined;

    public get type(): string | undefined {
        return this._type;
    }

    public set type(value: string | undefined) {
        this._type = value;
    }

    public constructor(id: number, price: number, type?: string | undefined) {
        this.id = id;
        this.price = price;
        this.type = type;
    }
} 
