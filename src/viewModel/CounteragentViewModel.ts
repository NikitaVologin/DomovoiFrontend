import { CounteragentType } from "../domain/enums/counteragentEnum";
import { AnnouncementViewModel } from "./AnnouncementViewModel";
import { ReviewViewModel } from "./ReviewViewModel";

export class CounteragentViewModel {
	id:string = "";
	FIO: string = "Иванов Иван Иванович";
	email: string = "email@mail.ru";
	phone?: string = "+79503217645";
	announcements: Array<AnnouncementViewModel>;
	reviews: Array<ReviewViewModel>;
	type: CounteragentType = CounteragentType.Physical;
	private _avatar?: string;

	get avatar() {
		if (this._avatar === undefined) return '/src/assets/img/avatar_default.png';
		return this._avatar;
	}

	// параметр addReviewPlacheloders временный, пока не будет сделана загрузка с сервера.
	// пришлось добавить чтобы по кд не добавлялись отзывы, у которых есть параметр counteragent, у которого есть отзывы и т. д. до переполнения стека рекурсии
	// то же самое для addAnnouncementPlaceholders
	constructor(addReviewPlacheloders = false, addAnnouncementPlaceholders = false) {
		this.reviews = addReviewPlacheloders ? [...Array(4)].map(i => new ReviewViewModel()) : [];
		this.announcements = addAnnouncementPlaceholders ? [...Array(4)].map(i => new AnnouncementViewModel()) : [];
	}
}
