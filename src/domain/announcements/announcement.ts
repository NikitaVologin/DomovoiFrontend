import { CounterAgent } from "../counteragents/counteragent";
import { Deal } from "../types" ;
import { Reality } from "../realities/reality";

export class Announcement {
    
        private _id!: string;

        public get id(): string {
            return this._id;
        }

        public set id(value: string) {
            this._id = value;
        }

        private _description?: string | undefined;

        public get description(): string | undefined {
            return this._description;
        }

        public set description(value: string | undefined) {
            this._description = value;
        }

        private _connectionType?: string | undefined;

        public get connectionType(): string | undefined {
            return this._connectionType;
        }

        public set connectionType(value: string | undefined) {
            this._connectionType = value;
        }

        private _reality!: Reality;
        
        public get reality(): Reality {
            return this._reality;
        }

        public set reality(value: Reality) {
            this._reality = value;
        }

        private _deal!: Deal;

        public get deal(): Deal {
            return this._deal;
        }

        public set deal(value: Deal) {
            this._deal = value;
        }

        private _counteragent!: CounterAgent; 

        public get counteragent(): CounterAgent {
            return this._counteragent;
        }

        public set counteragent(value: CounterAgent) {
            this._counteragent = value;
        }

        public static getInstance(id: string, reality: Reality, deal: Deal, counteraget: CounterAgent,
            description?: string | undefined, 
            connectionType?: string | undefined): Announcement {
                let instance = new Announcement();
                instance.id = id;
                instance.reality = reality;
                instance.deal = deal;
                instance.counteragent = counteraget;
                instance.description = description;
                instance.connectionType = connectionType;
                return instance;
        }

        public constructor() { }
}