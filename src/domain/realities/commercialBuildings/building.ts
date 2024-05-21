export class Building {

    private _id!: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    private _class?: string;

    public get classBuilding(): string | undefined{
        return this._class;
    }

    public set classBuilding(value: string | undefined) {
        this._class = value;
    }

    private _buildingYear?: number | undefined;

    public get buildingYear(): number | undefined {
        return this._buildingYear;
    }

    public set buildingYear(value: number | undefined) {
        this._buildingYear = value;
    }

    private _centerName?: string;

    public get centerName(): string | undefined {
        return this._centerName;
    }

    public set centerName(value: string | undefined) {
        this._centerName = value;
    }

    private _haveParking?: boolean | undefined;

    public get haveParking(): boolean | undefined {
        return this._haveParking;
    }

    public set haveParking(value: boolean | undefined) {
        this._haveParking = value;
    }

    private _isEquipment?: boolean;

    public get isEquipment(): boolean | undefined {
        return this._isEquipment;
    }

    public set isEquipment(value: boolean | undefined) {
        this._isEquipment = value;
    }

    // public constructor(id: string, classBuilding: string, haveParking: boolean,
    //     isEquipment: boolean, centerName?: string | undefined) {
    //     this.id = id;
    //     this.classBuilding = classBuilding;
    //     this.haveParking = haveParking;
    //     this.isEquipment = isEquipment;
    //     this.centerName = centerName;
    // }
    public constructor() { }
}
