export class RentConditions {
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

    private _period?: string | undefined;

    public get period(): string | undefined {
        return this._period;
    }

    public set period(value: string | undefined) {
        this._period = value;
    }

    private _deposit!: number;

    public get deposit(): number {
        return this._deposit;
    }

    public set deposit(value: number) {
        this._deposit = value;
    }

    private _communalPays!: number;

    public get communalPays(): number {
        return this._communalPays;
    }

    public set communalPays(value: number) {
        this._communalPays = value;
    }

    private _prepay!: number;

    public get prepay(): number {
        return this._prepay;
    }

    public set prepay(value: number) {
        this._prepay = value;
    }

    public constructor(id: number, price: number, deposit: number,
        communalPays: number, prepay: number,
        period?: string | undefined) {

        this.id = id;
        this.price = price;
        this.deposit = deposit;
        this.communalPays = communalPays;
        this.prepay = prepay;
        this.period = period;
    }
}
