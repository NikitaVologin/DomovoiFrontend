export class ApartmentHouse {

    private _buildingYear?: number;

    private _type?: string;

    private _ceilingHeight?: number;
    
    private _isGas?: boolean;

    private _haveGarbageChute?: boolean;

    private _isSecurity?: boolean;

    private _haveParking?: boolean;

    private _isInfrastructure?: boolean;

    private _isLandscaping?: boolean;

    public readonly _elevators: Array<string> = [];

    public get buildingYear(): number | undefined {
        return this._buildingYear;
    }

    public set buildingYear(value: number | undefined) {
        this._buildingYear = value;
    }

    public get type(): string | undefined {
        return this._type;
    }

    public set type(value: string | undefined) {
        this._type = value;
    }

    public get ceilingHeight(): number | undefined {
        return this._ceilingHeight;
    }

    public set ceilingHeight(value: number | undefined) {
        this._ceilingHeight = value;
    }

    public get isGas(): boolean | undefined {
        return this._isGas;
    }

    public set isGas(value: boolean | undefined) {
        this._isGas = value;
    }

    public get haveGarbageChute(): boolean | undefined {
        return this._haveGarbageChute;
    }

    public set haveGarbageChute(value: boolean | undefined) {
        this._haveGarbageChute = value;
    }

    public get isSecurity(): boolean | undefined {
        return this._isSecurity;
    }

    public set isSecurity(value: boolean | undefined) {
        this._isSecurity = value;
    }

    public get haveParking(): boolean | undefined {
        return this._haveParking;
    }

    public set haveParking(value: boolean | undefined) {
        this._haveParking = value;
    }

    public get isInfrastructure(): boolean | undefined {
        return this._isInfrastructure;
    }

    public set isInfrastructure(value: boolean | undefined) {
        this._isInfrastructure = value;
    }

    public get isLandscaping(): boolean | undefined {
        return this._isLandscaping;
    }

    public set isLandscaping(value: boolean | undefined) {
        this._isLandscaping = value;
    }

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
