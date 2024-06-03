import { inject, injectable } from "tsyringe";
import { IReception } from "./controllersInterfaces/receptionInterface";

@injectable()
export class ChatController {

    public constructor(@inject("IReception") private _reception: IReception) { }
}