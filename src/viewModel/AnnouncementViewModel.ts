import { CounteragentViewModel } from "./CounteragentViewModel";
import { DealType } from "../domain/enums/dealType";
import { RealityType } from "../domain/enums/realityType";

export class AnnouncementViewModel {
	// тут значения по умолчанию пока для наполнения висят
	id:number = 1;

	dealType: DealType = DealType.Rell;
	buildingType: RealityType = RealityType.Office;
	counteragent: CounteragentViewModel = new CounteragentViewModel();

	sellConditions?: {
		yearInOwn: number,
		ownersCount: number,
		prescribersCount: number,
		haveChildOwners: boolean,
		haveChildPrescribers: boolean,
	};

	rentConditions?: {
		period: string,
		deposit: number,
		communalPays: number,
		prepay: number,
		facilities: string,
		withKids: boolean,
		withAnimals: boolean,
		canSmoke: boolean,
	}

	price: number = 16000;
	address: string = "Муравленко, 9";
	roomCount?: number = 2;
	floor?: number = 4;
	totalFloorsInBuilding?: number = 9;
	haveParking?: boolean;
	isSingleRoom: boolean = false;
	area: number = 26;
	destrict: string = "1-й Заречный";

	images: string[] = [
		"https://floorcarpet.ru/wp-content/uploads/e/b/1/eb17cb192181ae999fbd54b4437f18e9.jpeg",
		"https://mykaleidoscope.ru/uploads/posts/2022-08/1660701747_9-mykaleidoscope-ru-p-solnechnii-svet-v-komnate-dizain-krasivo-f-9.jpg",
		"https://mykaleidoscope.ru/uploads/posts/2021-03/1615661472_43-p-kvartira-s-krasivim-vidom-obraz-44.png",
		"https://www.dizainvfoto.ru/wp-content/uploads/2019/05/50-foto-idej-oboev-v-interere-spalni-2019-goda4.jpg",
		"https://mykaleidoscope.ru/uploads/posts/2021-10/1633408596_27-mykaleidoscope-ru-p-komnata-v-stile-modern-interer-krasivo-fot-31.jpg",
		"https://i.pinimg.com/originals/c3/a2/da/c3a2dae2c3202d303e9d52020d68ad7a.jpg",
		"https://www.dizainvfoto.ru/wp-content/uploads/2019/05/50-foto-idej-modnyh-intererov-2019-goda1.jpg"
	];

	constructor(/* obj:Announcement */) {
		// todo присвоение значений. либо можно в геттерах всё прописать,
		// так наверн даж лучше - здесь просто приватный Announcement присваиваем, а в геттерах уже логику. меньше кода.
	}
}
