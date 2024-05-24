import { LegalCounterAgent } from "./counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "./counteragents/physicalCounteragent";
import { Rent } from "./deals/rent/rent";
import { Sell } from "./deals/sell/sell"
import { MainRealityType, RealityType } from "./enums/realityType";
import { FloorModeSelect } from "./enums/floorModeSelect";

export type Deal = Sell | Rent;

export type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;

export type filterParameters = {
    PriceStart?: number,
    PriceEnd?: number,
    RealityType?: MainRealityType,
    RealitySubtype?: RealityType,
    FloorFilter?: FloorModeSelect
}