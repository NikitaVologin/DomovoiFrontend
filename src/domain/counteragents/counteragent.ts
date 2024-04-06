namespace Domain {
    export class CounterAgent {

        private _id! : number;
    
        public get id(): number{
            return this._id;
        }
    
        public set id(value: number){
            this._id = value;
        }
    
        private _description?: string;
    
        public get description(): string | undefined{
            return this._description;
        }
    
        public set description(value: string | undefined){
            this._description = value;
        }
    
        public get mail(): string{
            return this._mail;
        }
    
        public set mail(value: string){
            this._mail = value;
        }
    
        private _mail!: string;
    
        public constructor(id: number, mail: string, description?: string){
            this.id = id;
            this.description = description;
            this.mail = mail;
        }
    }
}