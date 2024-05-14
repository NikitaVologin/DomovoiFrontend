export class CounterAgent {

    private _id!: string;
    private _mail!: string;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get mail(): string {
        return this._mail;
    }

    public set mail(value: string) {
        this._mail = value;
    }

    public constructor(id: string, mail: string) {
        this.id = id;
        this.mail = mail;
    }
}
