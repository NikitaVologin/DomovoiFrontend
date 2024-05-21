import { CounteragentViewModel } from "./CounteragentViewModel";
import { DealType } from "../domain/enums/dealType";
import { RealityType } from "../domain/enums/realityType";
import { DealViewModel } from "./DealViewModel";
import { RealityViewModel } from "./RealityViewModel";

export class AnnouncementViewModel {
	id:number = 1;
	counteragent: CounteragentViewModel = new CounteragentViewModel();
	deal: DealViewModel = new DealViewModel();
	reality: RealityViewModel = new RealityViewModel();

	constructor(/* obj:Announcement */) {
		// todo присвоение значений. либо можно в геттерах всё прописать,
		// так наверн даж лучше - здесь просто приватный Announcement присваиваем, а в геттерах уже логику. меньше кода.
	}
}