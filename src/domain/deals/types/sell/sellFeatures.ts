namespace Domain {

    export class SellFeatures {
        private _id!: number;

        public get id(): number {
            return this._id;
        }

        public set id(value: number) {
            this._id = value;
        }

        private _yearInOwn!: number;

        public get yearInOwn(): number {
            return this._yearInOwn;
        }

        public set yearInOwn(value: number) {
            this._yearInOwn = value;
        }

        private _ownersCount!: number;
        
        public get ownersCount(): number {
            return this._ownersCount;
        }

        public set ownersCount(value: number) {
            this._ownersCount = value;
        }

        private _prescribersCount!: number;

        public get prescribersCount(): number {
            return this._prescribersCount;
        }

        public set prescribersCount(value: number) {
            this._prescribersCount = value;
        }

        private _haveChildOwners!: boolean;

        public get haveChildOwners(): boolean {
            return this._haveChildOwners;
        }

        public set haveChildOwners(value: boolean) {
            this._haveChildOwners = value;
        }

        private _haveChildPrescribers!: boolean;

        public get haveChildPrescribers(): boolean {
            return this._haveChildPrescribers;
        }

        public set haveChildPrescribers(value: boolean) {
            this._haveChildPrescribers = value;
        }

        public constructor(id: number, yearInOwn: number, ownersCount: number,
            prescribersCount: number, haveChildOwners: boolean, haveChildPrescribers: boolean) { 
                this.id = id;
                this.yearInOwn = yearInOwn;
                this.ownersCount = ownersCount;
                this.prescribersCount = prescribersCount;
                this.haveChildOwners = haveChildOwners;
                this.haveChildPrescribers = haveChildOwners; 
        }
    } 
}