import { CounterAgent } from "./counteragent";

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

    public override getInformationObject(): any {
        let object = super.getInformationObject();
        object.name = this.name;
        object.tin = this.tin;
        return object;
    }

    public constructor() {
        super();
    }
    // public constructor(id: string, mail: string, name?: string, _tin?: string, _trc?: string) {
    //     super(id, mail);
    // }
}

