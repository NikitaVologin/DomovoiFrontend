import { CounterAgent } from "./counteragent";

export class PhysicalCounterAgent extends CounterAgent {

    private _FIO!: string;

    public get FIO(): string {
        return this._FIO!;
    }

    public set FIO(value: string) {
        this._FIO = value;
    }

    public override getInformationObject(): any {
        let object = super.getInformationObject();
        object.fio = this.FIO;
        return object;
    }

    public constructor(){
        super();
    }
    // public constructor(id: string, fio: string, mail: string) {
    //     super(id, mail);
    //     this.FIO = fio;
    // }
}
