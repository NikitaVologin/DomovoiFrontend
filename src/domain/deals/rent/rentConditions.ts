export class RentConditions {
    private _price!: number | undefined;

    public get price(): number | undefined {
        return this._price;
    }

    public set price(value: number | undefined) {
        this._price = value;
    }

    private _period?: string | undefined;

    public get period(): string | undefined {
        return this._period;
    }

    public set period(value: string | undefined) {
        this._period = value;
    }

    private _deposit!: number | undefined;

    public get deposit(): number | undefined {
        return this._deposit;
    }

    public set deposit(value: number | undefined) {
        this._deposit = value;
    }

    private _communalPays!: number | undefined;

    public get communalPays(): number | undefined {
        return this._communalPays;
    }

    public set communalPays(value: number | undefined) {
        this._communalPays = value;
    }

    private _prepay!: number | undefined;

    public get prepay(): number | undefined {
        return this._prepay;
    }

    public set prepay(value: number | undefined) {
        this._prepay = value;
    }

    private _facilities?: string | undefined;

    public get facilities(): string | undefined {
        return this._facilities;
    }

    public set facilities(value: string | undefined) {
        this._facilities = value;
    }

    private _withKids!: boolean | undefined;

    public get withKids(): boolean | undefined {
        return this._withKids;
    }

    public set withKids(value: boolean | undefined) {
        this._withKids = value;
    }

    private _withAnimals!: boolean | undefined;

    public get withAnimals(): boolean | undefined {
        return this._withAnimals;
    }

    public set withAnimals(value: boolean | undefined) {
        this._withAnimals = value;
    }

    private _canSmoke!: boolean | undefined;

    public get canSmoke(): boolean | undefined {
        return this._canSmoke;
    }

    public set canSmoke(value: boolean | undefined ) {
        this._canSmoke = value;
    }

    public constructor() { }

    // public constructor(price: number, deposit: number,
    //     withKids: boolean, withAnimals: boolean, canSmoke: boolean,
    //     communalPays: number, prepay: number,
    //     period?: string | undefined) {
    //     this.price = price;
    //     this.deposit = deposit;
    //     this.communalPays = communalPays;
    //     this.prepay = prepay;
    //     this.period = period;
    //     this.withKids = withKids;
    //     this.withAnimals = withAnimals;
    //     this.canSmoke = canSmoke;
    // }
}