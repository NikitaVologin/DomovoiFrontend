namespace Domain {
    export class Deal {
        private _id!: number;

        public get id(): number {
            return this._id;
        }

        public set id(value: number) {
            this._id = value;
        }

        public constructor(id: number) {
            this.id = id;
        }
    }
}