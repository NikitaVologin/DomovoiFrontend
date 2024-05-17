import { LegalCounterAgent } from "./counteragents/legalCounteragent";
import { PhysicalCounterAgent } from "./counteragents/physicalCounteragent";
import { Rent } from "./deals/rent/rent";
import { Sell } from "./deals/sell/sell"

export type Deal = Sell | Rent;

export type CounterAgentResponse = PhysicalCounterAgent | LegalCounterAgent;