namespace Domain{
    export class LegalCounterAgent extends CounterAgent {

        private _name?: string | undefined; 
    
        public get name(): string | undefined {
            return this._name;
        }
    
        public set name(value: string | undefined) {
            this._name = value;
        }
    
        private _tin?: string | undefined; 
    
        public get tin(): string | undefined {
            return this._tin;
        }
    
        public set tin(value: string | undefined) {
            this._tin = value;
        }
    
        private _trc?: string | undefined;
    
        public get trc(): string | undefined {
            return this._trc;
        }
       
        public set trc(value: string | undefined) {
            this._trc = value;
        }
    
        public constructor(id: number, mail: string, name?: string, _tin?: string, _trc?: string, description?: string){
            super(id, mail, description);
        }
    }
}
