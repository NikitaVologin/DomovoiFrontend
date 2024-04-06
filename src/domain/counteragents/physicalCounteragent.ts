namespace Domain {
    export class PhysicalCounterAgent extends CounterAgent {

        private _FIO!: string;
    
        public get FIO(): string {
            return this._FIO!;
        }
    
        public set FIO(value: string) {
            this._FIO = value;
        }
    
        public constructor(id: number, fio: string, mail: string, description?: string){
            super(id, mail, description);
            this.FIO = fio;
        }  
    }
}