export class Response<T> {
    readonly data: T;
    readonly status!: number;
    readonly statusText!: string;
    readonly headers: any;
    readonly confing: any;
    readonly request: any;

    constructor(data: T, status: number, statusText: string,
        headers: any, confing: any, request: any
    ) {
        this.data = data;
        this.status = status;
        this.statusText = statusText;
        this.headers = headers;
        this.confing = confing;
        this.request = request;
    }
}
