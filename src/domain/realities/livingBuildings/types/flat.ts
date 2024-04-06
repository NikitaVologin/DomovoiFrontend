namespace Domain {
    export class Flat extends LivingBuilding {
        private _roomsCount!: number;
    
        public get roomsCount(): number {
            return this._roomsCount;
        }
    
        public set roomsCount(value: number) {
            this._roomsCount = value;
        }
    
        private _isRepaired!: boolean;
    
        public get isRepaired(): boolean {
            return this._isRepaired;
        }
    
        public set isRepaired(value: boolean) {
            this._isRepaired = value;
        }
    
        private _isFresh!: boolean;
    
        public get isFresh(): boolean {
            return this._isFresh;
        }
    
        public set isFresh(value: boolean) {
            this._isFresh = value;
        }
    
        private _kitchenArea!: number;
    
        public get kitchenArea(): number {
            return this._kitchenArea;
        }
    
        public set kitchenArea(value: number) {
            this._kitchenArea = value;
        }
    
        private _balconyType?: string | undefined;
    
        public get balconyType(): string | undefined {
            return this._balconyType;
        }
    
        public set balconyType(value: string | undefined) {
            this._balconyType = value;
        }
    
        private _viewFromBalcony?: string | undefined;
    
        public get viewFromBalcony(): string | undefined {
            return this._viewFromBalcony;
        }
    
        public set viewFromBalcony(value: string | undefined) {
            this._viewFromBalcony = value;
        }
    
        private _apartmentHouse?: ApartmentHouse | undefined;
    
        public get apartmentHouse(): ApartmentHouse | undefined {
            return this._apartmentHouse;
        }
    
        public set apartmentHouse(value: ApartmentHouse | undefined) {
            this._apartmentHouse = value;
        }
    
        public constructor(id: number, area: number, floor: number, roomsCount: number, isRepaired: boolean,
            isFresh: boolean, kitchenArea: number, 
             balconyType?: string | undefined,
             viewFromBalcony?: string | undefined,
             apartmentHouse?: ApartmentHouse | undefined,
             type?: string | undefined){
            super(id, area, floor, type);
            this.roomsCount = roomsCount;
            this.isRepaired = isRepaired;
            this.isFresh = isFresh;
            this.kitchenArea = kitchenArea;
            this.balconyType = balconyType;
            this.viewFromBalcony = viewFromBalcony;
            this.apartmentHouse = apartmentHouse;
        }
    }
}