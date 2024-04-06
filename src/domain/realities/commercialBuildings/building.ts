namespace Domain{
    export class Building {

        private _id!: number;
    
        public get id(): number {
            return this._id;
        }
    
        public set id(value: number) {
            this._id = value;
        }
        
        private _class!: string;
    
        public get classBuilding(): string {
            return this._class;
        }
    
        public set classBuilding(value: string) {
            this._class = value;
        }
        
        private _buildingYear!: number;
    
        public get buildingYear(): number {
            return this._buildingYear;
        }
    
        public set buildingYear(value: number) {
            this._buildingYear = value;
        }
        
        private _centerName?: string | undefined;
    
        public get centerName(): string | undefined {
            return this._centerName;
        }
    
        public set centerName(value: string | undefined) {
            this._centerName = value;
        }
        
        private _haveParking!: boolean;
    
        public get haveParking(): boolean {
            return this._haveParking;
        }
    
        public set haveParking(value: boolean) {
            this._haveParking = value;
        }
        
        private _isEquipment!: boolean;
    
        public get isEquipment(): boolean {
            return this._isEquipment;
        }
    
        public set isEquipment(value: boolean) {
            this._isEquipment = value;
        }
    
        public constructor(id: number, classBuilding: string, haveParking: boolean,
            isEquipment: boolean, centerName?: string | undefined){
                this.id = id;
                this.classBuilding = classBuilding;
                this.haveParking = haveParking;
                this.isEquipment = isEquipment;
                this.centerName = centerName;
        }
    }
}