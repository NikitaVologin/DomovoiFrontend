export class CounterAgent {

    private _id: string | undefined;

    private _mail!: string | undefined;

    private _contactNumber: string | undefined;
    
    public get id(): string | undefined {
        return this._id;
    }

    public set id(value: string | undefined) {
        this._id = value;
    }

    public get mail(): string | undefined {
        return this._mail;
    }

    public set mail(value: string | undefined) {
        this._mail = value;
    }

    public get contactNumber(): string | undefined {
        return this._contactNumber;
    }

    public set contactNumber(value: string | undefined) {
        this._contactNumber = value;
    }

    public getInformationObject(): any {
        let object = {
            contactNumber: this.contactNumber,
            email: this.mail,
            password: "",
            type: "",
        }
        return object;
    }

    public constructor() { }
    
    // public constructor(id: string, mail: string) {
    //     this.id = id;
    //     this.mail = mail;
    // }
}
