import { CounteragentViewModel } from "./CounteragentViewModel";

export class AnnouncementViewModel {
	// тут значения по умолчанию пока для наполнения висят
	counteragent: CounteragentViewModel = new CounteragentViewModel();
	price: number = 16000;
	address: string = "Муравленко, 9";
	roomCount?: number = 2;
	isSingleRoom: boolean = false;
	area: number = 26;
	destrict: string = "1-й Заречный";
	images: string[] = ["https://floorcarpet.ru/wp-content/uploads/e/b/1/eb17cb192181ae999fbd54b4437f18e9.jpeg"]

	constructor(/* obj:Announcement */) {
		// todo присвоение значений. либо можно в геттерах всё прописать,
		// так наверн даж лучше - здесь просто приватный Announcement присваиваем, а в геттерах уже логику. меньше кода.
	}
}
