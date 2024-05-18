export class ApartmentHouse {
    private _buildingYear!: number;

    public get buildingYear(): number {
        return this._buildingYear;
    }

    public set buildingYear(value: number) {
        this._buildingYear = value;
    }

    private _type?: string | undefined;

    public get type(): string | undefined {
        return this._type;
    }

    public set type(value: string | undefined) {
        this._type = value;
    }

    private _ceilingHeight!: number;

    public get ceilingHeight(): number {
        return this._ceilingHeight;
    }

    public set ceilingHeight(value: number) {
        this._ceilingHeight = value;
    }

    private _isGas!: boolean;

    public get isGas(): boolean {
        return this._isGas;
    }

    public set isGas(value: boolean) {
        this._isGas = value;
    }

    private _haveGarbageChute!: boolean;

    public get haveGarbageChute(): boolean {
        return this._haveGarbageChute;
    }

    public set haveGarbageChute(value: boolean) {
        this._haveGarbageChute = value;
    }

    private _isSecurity!: boolean;

    public get isSecurity(): boolean {
        return this._isSecurity;
    }

    public set isSecurity(value: boolean) {
        this._isSecurity = value;
    }

    private _haveParking!: boolean;

    public get haveParking(): boolean {
        return this._haveParking;
    }

    public set haveParking(value: boolean) {
        this._haveParking = value;
    }

    private _isInfrastructure!: boolean;

    public get isInfrastructure(): boolean {
        return this._isInfrastructure;
    }

    public set isInfrastructure(value: boolean) {
        this._isInfrastructure = value;
    }

    private _isLandscaping!: boolean;

    public get isLandscaping(): boolean {
        return this._isLandscaping;
    }

    public set isLandscaping(value: boolean) {
        this._isLandscaping = value;
    }

    public readonly _elevators: Array<string> = [];

    // public constructor(id: string, buildingYear: number, ceilingHeight: number, isGas: boolean,
    //     haveGarbageChute: boolean, isSecurity: boolean, haveParking: boolean,
    //     isInfrastructure: boolean, isLandscaping: boolean) {
    //     this.id = id;
    //     this.buildingYear = buildingYear;
    //     this.ceilingHeight = ceilingHeight;
    //     this.isGas = isGas;
    //     this.haveGarbageChute = haveGarbageChute;
    //     this.isSecurity = isSecurity;
    //     this.haveParking = haveParking;
    //     this.isInfrastructure = isInfrastructure;
    //     this.isLandscaping = isLandscaping;
    // }
}
