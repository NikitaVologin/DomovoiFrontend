import { CounteragentViewModel } from "./CounteragentViewModel";

export class ReviewViewModel {
	author: CounteragentViewModel = new CounteragentViewModel();
	rate: number = Math.round(Math.random() * 4 + 1);
	header: string = "Всё супер";
	text: string = "Не, рил всё супер";
	date: Date = new Date();
}
