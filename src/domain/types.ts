import { LegalCounterAgent } from "./counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "./counteragents/physicalCounteragent";
import { Rent } from "./deals/rent/rent";
import { Sell } from "./deals/sell/sell"
import { MainRealityType, RealityType } from "./enums/realityType";
import { FloorModeSelect } from "./enums/floorModeSelect";
import { DealType } from "./enums/dealType";

export type Deal = Sell | Rent;

export type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;

export type filterParameters = {
    DealType: DealType,
    PriceStart?: number,
    PriceEnd?: number,
    RealityType?: RealityType,
    FloorFilter?: FloorModeSelect,  
}