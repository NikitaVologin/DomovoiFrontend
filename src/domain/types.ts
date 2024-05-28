import { LegalCounterAgent } from "./counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "./counteragents/physicalCounteragent";
import { Rent } from "./deals/rent/rent";
import { Sell } from "./deals/sell/sell"
import { RealityType } from "./enums/realityType";
import { FloorModeSelect } from "./enums/floorModeSelect";
import { DealType } from "./enums/dealType";

export type Deal = Sell | Rent;

export type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;

export type FilterParameters = {
    DealType: DealType,
    PriceStart?: number,
    PriceEnd?: number,
    RealityType?: RealityType,
    FloorFilter?: FloorModeSelect,  
}

export type SortParameters = {
    price: number,
    area: number  
}

export type Period  = {
    indexFrom: number,
    indexTo: number
}