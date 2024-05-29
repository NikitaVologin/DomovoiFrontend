import { ApartmentHouse } from "../../common/apartmentHouse";
import { LivingBuilding } from "../livingBuilding";

export class Flat extends LivingBuilding {

    private _isFresh?: boolean;

    private _roomsCount?: number;

    private _isRepaired?: boolean;
    
    private _kitchenArea?: number;

    private _balconyType?: string;

    private _viewFromBalcony?: string;

    private _apartmentHouse?: ApartmentHouse;

    public get roomsCount(): number | undefined {
        return this._roomsCount;
    }

    public set roomsCount(value: number) {
        this._roomsCount = value;
    }

    public get isRepaired(): boolean | undefined{
        return this._isRepaired;
    }

    public set isRepaired(value: boolean | undefined) {
        this._isRepaired = value;
    }

    public get isFresh(): boolean | undefined {
        return this._isFresh;
    }

    public set isFresh(value: boolean | undefined)  {
        this._isFresh = value;
    }

    public get kitchenArea(): number  | undefined{
        return this._kitchenArea;
    }

    public set kitchenArea(value: number | undefined) {
        this._kitchenArea = value;
    }

    public get balconyType(): string | undefined {
        return this._balconyType;
    }

    public set balconyType(value: string | undefined) {
        this._balconyType = value;
    }

    public get viewFromBalcony(): string | undefined {
        return this._viewFromBalcony;
    }

    public set viewFromBalcony(value: string | undefined) {
        this._viewFromBalcony = value;
    }

    public get apartmentHouse(): ApartmentHouse | undefined {
        return this._apartmentHouse;
    }

    public set apartmentHouse(value: ApartmentHouse | undefined) {
        this._apartmentHouse = value;
    }

    // public constructor(id: number, area: number, floor: number, roomsCount: number, isRepaired: boolean,
    //     isFresh: boolean, kitchenArea: number,
    //     balconyType?: string | undefined,
    //     viewFromBalcony?: string | undefined,
    //     apartmentHouse?: ApartmentHouse | undefined,
    //     type?: string | undefined) {
    //     super(id, area, floor, type);
    //     this.roomsCount = roomsCount;
    //     this.isRepaired = isRepaired;
    //     this.isFresh = isFresh;
    //     this.kitchenArea = kitchenArea;
    //     this.balconyType = balconyType;
    //     this.viewFromBalcony = viewFromBalcony;
    //     this.apartmentHouse = apartmentHouse;
    // }
}
