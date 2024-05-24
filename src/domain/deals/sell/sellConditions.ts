export class SellConditions {
    private _type?: string | undefined;

    public get type(): string | undefined {
        return this._type;
    }

    public set type(value: string | undefined) {
        this._type = value;
    }

    private _yearInOwn!: number | undefined;

    public get yearInOwn(): number | undefined {
        return this._yearInOwn;
    }

    public set yearInOwn(value: number | undefined) {
        this._yearInOwn = value;
    }

    private _ownersCount!: number | undefined;

    public get ownersCount(): number | undefined {
        return this._ownersCount;
    }

    public set ownersCount(value: number | undefined ) {
        this._ownersCount = value;
    }

    private _prescribersCount!: number | undefined;

    public get prescribersCount(): number | undefined {
        return this._prescribersCount;
    }

    public set prescribersCount(value: number | undefined) {
        this._prescribersCount = value;
    }

    private _haveChildOwners!: boolean | undefined;

    public get haveChildOwners(): boolean | undefined {
        return this._haveChildOwners;
    }

    public set haveChildOwners(value: boolean | undefined) {
        this._haveChildOwners = value;
    }

    private _haveChildPrescribers!: boolean | undefined;

    public get haveChildPrescribers(): boolean | undefined {
        return this._haveChildPrescribers;
    }

    public set haveChildPrescribers(value: boolean | undefined) {
        this._haveChildPrescribers = value;
    }

    public constructor() { }

    // public constructor(id: string, price: number,  yearInOwn: number, ownersCount: number,
    //     prescribersCount: number, haveChildOwners: boolean,
    //     haveChildPrescribers: boolean, type?: string | undefined) {
    //     this.id = id;
    //     this.price = price;
    //     this.type = type;
    //     this.yearInOwn = yearInOwn;
    //     this.ownersCount = ownersCount;
    //     this.prescribersCount = prescribersCount;
    //     this.haveChildOwners = haveChildOwners;
    //     this.haveChildPrescribers = haveChildOwners;
    //     this.haveChildPrescribers = haveChildPrescribers;
    // }
} 