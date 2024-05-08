export class RentRules {
    private _id!: number;

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    private _facilities?: string | undefined;

    public get facilities(): string | undefined {
        return this._facilities;
    }

    public set facilities(value: string | undefined) {
        this._facilities = value;
    }

    private _withKids!: boolean;

    public get withKids(): boolean {
        return this._withKids;
    }

    public set withKids(value: boolean) {
        this._withKids = value;
    }

    private _withAnimals!: boolean;

    public get withAnimals(): boolean {
        return this._withAnimals;
    }

    public set withAnimals(value: boolean) {
        this._withAnimals = value;
    }

    private _canSmoke!: boolean;

    public get canSmoke(): boolean {
        return this._canSmoke;
    }

    public set canSmoke(value: boolean) {
        this._canSmoke = value;
    }

    public constructor(id: number, withKids: boolean, withAnimals: boolean, canSmoke: boolean) {
        this.id = id;
        this.withKids = withKids;
        this.withAnimals = withAnimals;
        this.canSmoke = canSmoke;
    }
}
