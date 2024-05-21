import { CounteragentViewModel } from "./CounteragentViewModel";
import { DealViewModel } from "./DealViewModel";
import { RealityViewModel } from "./RealityViewModel";

export class AnnouncementViewModel {
	id:string = "";
	counteragent: CounteragentViewModel = new CounteragentViewModel();
	deal: DealViewModel = new DealViewModel();
	reality: RealityViewModel = new RealityViewModel();

	constructor(/* obj:Announcement */) {
		// todo присвоение значений. либо можно в геттерах всё прописать,
		// так наверн даж лучше - здесь просто приватный Announcement присваиваем, а в геттерах уже логику. меньше кода.
	}
}