<template>
<div class="search content-width-container">
	<Header></Header>
	
	<main class="content-width">
		<div class="primary-parameters card">
			<div class="primary-parameters__item">
				<div class="primary-parameters__item__caption">Тип сделки:</div>
				<Picker
					:items="store.state.realEstateParameterPickers.dealTypeForBusiness"
					:defaultValue="(announcement.deal.dealType as string)"
					@change="dealTypeChange"
				></Picker>
			</div>
			<div class="primary-parameters__item">
				<div class="primary-parameters__item__caption">Тип недвижимости:</div>
				<RealityTypePicker @change=""></RealityTypePicker>
			</div>
			<div class="primary-parameters__item">
				<div class="primary-parameters__item__caption">Цена:</div>
				<input type="number" class="input-number_medium" v-model="announcement.deal.price">
				<span>₽</span>
			</div>
		</div>
		<div class="address-picker card">
			<input type="text" v-model="announcement.reality.address" class="address-picker__input" placeholder="Укажите адрес">
			<div class="address-picker__map-wrapper">
				<LMap
					class="address-picker__map"
					:zoom="13.5"
					:center="[57.157075, 65.540729]"
					:useGlobalLeaflet="false"
					style="outline: none;"
				>
					<LTileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						layer-type="base"
						name="OpenStreetMap"
					></LTileLayer>
				</LMap>
			</div>
		</div>
		<div class="secondary-parameters card">
			<div class="secondary-parameters__block">
				<div class="secondary-parameters__block__col">
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">Площадь:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="text" placeholder="Общая" v-model="announcement.reality.area">
								<span>м<sup>2</sup></span>
							</div>
							<div class="secondary-parameters__block__col__item__inputs-row__item" v-if="additionalAreasShown">
								<input type="text" placeholder="Жилая">
								<span>м<sup>2</sup></span>
							</div>
							<div class="secondary-parameters__block__col__item__inputs-row__item" v-if="additionalAreasShown">
								<input type="text" placeholder="Кухня">
								<span>м<sup>2</sup></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="secondary-parameters__block">
				<div class="secondary-parameters__block__col">
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">Кол-во комнат:</div>
						<Picker
							:items="store.state.realEstateParameterPickers.roomsCount"
							@change="(val:number) => announcement.reality.roomCount = val"
						></Picker>
					</div>
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">Этаж:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_tiny" v-model="announcement.reality.floor">
								<span>из</span>
								<input type="number" class="input-number_tiny" v-model="announcement.reality.totalFloorsInBuilding">
							</div>
						</div>
					</div>
					<div class="secondary-parameters__block__col__item" v-if="announcement.deal.dealType == 'Rent' && announcement.deal.rentConditions">
						<div class="secondary-parameters__block__col__item__caption">Период:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_tiny" v-model="announcement.deal.rentConditions.period">
								<span>месяцев</span>
							</div>
						</div>
					</div>
				</div>
				<div class="secondary-parameters__block__col" v-if="announcement.deal.dealType == 'Rent' && announcement.deal.rentConditions">
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">Коммунальные платежи:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_short" placeholder="0" v-model="announcement.deal.rentConditions.communalPays">
								<span>₽</span>
							</div>
						</div>
					</div>
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">Залог:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_short" placeholder="0" v-model="announcement.deal.rentConditions.deposit">
								<span>₽</span>
							</div>
						</div>
					</div>
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">Предоплата:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_short" placeholder="0" v-model="announcement.deal.rentConditions.prepay">
								<span>₽</span>
							</div>
						</div>
					</div>
				</div>
				<div class="secondary-parameters__block__col" v-if="announcement.deal.dealType == 'Sell' && announcement.deal.sellConditions">
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">Предыдущих владельцев:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_short" placeholder="0" v-model="announcement.deal.sellConditions.ownersCount">
								<span>чел.</span>
							</div>
						</div>
					</div>
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">В моём владении:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_short" placeholder="0" v-model="announcement.deal.sellConditions.yearInOwn">
								<span>лет</span>
							</div>
						</div>
					</div>
					<div class="secondary-parameters__block__col__item">
						<div class="secondary-parameters__block__col__item__caption">prescribersCount:</div>
						<div class="secondary-parameters__block__col__item__inputs-row">
							<div class="secondary-parameters__block__col__item__inputs-row__item">
								<input type="number" class="input-number_short" placeholder="0" v-model="announcement.deal.sellConditions.prescribersCount">
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="secondary-parameters__block__col secondary-parameters__block__col_with-checkboxes"
					v-if="announcement.deal.dealType == ('Rent' as DealType) && announcement.deal.rentConditions && announcement.reality.realityType == 'Flat'"
				>
					<label class="secondary-parameters__block__col__item secondary-parameters__block__col__item_with-checkbox" for="with-animals-checkbox">
						<input type="checkbox" id="with-animals-checkbox" v-model="announcement.deal.rentConditions.withAnimals">
						<span>Можно с животными</span>
					</label>
					<label class="secondary-parameters__block__col__item secondary-parameters__block__col__item_with-checkbox" for="with-kids-checkbox">
						<input type="checkbox" id="with-kids-checkbox" v-model="announcement.deal.rentConditions.withKids">
						<span>Можно с детьми</span>
					</label>
					<label class="secondary-parameters__block__col__item secondary-parameters__block__col__item_with-checkbox" for="can-smoke-checkbox">
						<input type="checkbox" id="can-smoke-checkbox" v-model="announcement.deal.rentConditions.canSmoke">
						<span>Можно курить</span>
					</label>
				</div>
				<div v-if="announcement.reality.realityType == 'Office'"
					class="secondary-parameters__block__col secondary-parameters__block__col_with-checkboxes"
				>
					<label class="secondary-parameters__block__col__item secondary-parameters__block__col__item_with-checkbox" for="with-animals-checkbox">
						<input type="checkbox" id="with-animals-checkbox" v-model="announcement.reality.haveParking">
						<span>Есть парковка</span>
					</label>
					<!-- <label class="secondary-parameters__block__col__item secondary-parameters__block__col__item_with-checkbox" for="with-kids-checkbox">
						<input type="checkbox" id="with-kids-checkbox" v-model="announcement.reality.entry">
						<span>entry</span>
					</label>
					<label class="secondary-parameters__block__col__item secondary-parameters__block__col__item_with-checkbox" for="can-smoke-checkbox">
						<input type="checkbox" id="can-smoke-checkbox" v-model="announcement.reality.isUse">
						<span>isUse</span>
					</label>
					<label class="secondary-parameters__block__col__item secondary-parameters__block__col__item_with-checkbox" for="can-smoke-checkbox">
						<input type="checkbox" id="can-smoke-checkbox" v-model="announcement.reality.isAccess">
						<span>isAccess</span>
					</label> -->
				</div>
			</div>
		</div>
		<div class="submit-button-wrapper">
			<button class="submit-button" @click="submit">Опубликовать</button>
		</div>
	</main>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Header from "../components/Header.vue"
import Picker from "../components/Picker.vue"
import RealityTypePicker from "../components/RealityTypePicker.vue"
import { container } from 'tsyringe';
import { Announcement } from '../domain/announcements/announcement';
import { AnnouncementController } from '../controllers/announcementContoller';
import { RealityType } from '../domain/enums/realityType';
import { DealType } from '../domain/enums/dealType';
import { Office } from '../domain/realities/commercialBuildings/types/office';
import { Rent } from '../domain/deals/rent/rent';
import { CounterAgent } from '../domain/counteragents/counteragent';
import { AnnouncementViewModel } from '../viewModel/AnnouncementViewModel';
import { router } from '../router';
import { RentConditionsViewModel } from '../viewModel/RentConditionsViewModel';
import { SellConditionsViewModel } from '../viewModel/SellConditionsViewModel';

export default defineComponent({
	components: { Header, Picker, RealityTypePicker, LMap, LTileLayer },
	data() {
		return {
			store: store,
			DealType: DealType,
			announcement: new AnnouncementViewModel(),
			mode: "create" as "create"|"edit",
		}
	},
	computed: {
		additionalAreasShown() {
			return this.announcement.reality.realityType != 'Office'
		}
	},
	beforeMount() {
		if (router.currentRoute.value.params.id == '0') {
			if (this.announcement.deal.dealType == DealType.Rent)
				 this.announcement.deal.rentConditions = new RentConditionsViewModel();
			else this.announcement.deal.sellConditions = new SellConditionsViewModel();
		}
		else {
			let ac = container.resolve(AnnouncementController);
			ac.getAnnouncementById(router.currentRoute.value.params.id as string).then(res => {
				this.announcement = res;
			});
			this.mode = 'edit';
		}
	},
	methods: {
		dealTypeChange(val:String) {
			this.announcement.deal.dealType = val as DealType;
			if (this.announcement.deal.dealType == DealType.Rent) {
				this.announcement.deal.rentConditions = new RentConditionsViewModel();
				this.announcement.deal.sellConditions = undefined;
			}
			else {
				this.announcement.deal.rentConditions = undefined;
				this.announcement.deal.sellConditions = new SellConditionsViewModel();
			}
		},
		async submit() {
			// обращаться к созданному объекту AnnouncementViewModel через this.announcement
			let ac = container.resolve(AnnouncementController);
			if (this.mode == 'create') {
				this.announcement.counteragent = this.store.state.user!;
				ac.postAnnouncement(this.announcement).then(res => {
					router.push('/announcement/'+res);
				})
			}
			else {
				ac.changeAnnouncement(this.store.state.user!.id, this.announcement).then(res => {
					router.push('/announcement/'+this.announcement.id);
				})
			}
			// router.push('/profile');   // раскомментить когда всё заработает
		}
	},	
})
</script>
	
	
<style lang="scss" scoped>
main {
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	.card {
		padding: 1.5rem 1.75rem;
	}
}

.primary-parameters {
	display: flex;
	column-gap: 3rem;
	.primary-parameters__item {
		.primary-parameters__item__caption {
			font-weight: 400;
			opacity: 0.975;
			margin-bottom: 0.5rem;
		}
		input {
			text-align: right;
		}
	}
}

.address-picker {
	.address-picker__input {
		background: #e7e7e7;
		border: none;
		width: 100%;
		font-size: 1rem;
		font-weight: 300;
		height: 2.75rem;
		padding: 0 1.2rem;
		border-radius: 10rem;
		margin-bottom: 1.5rem;
	}
	
	.address-picker__map-wrapper {
		height: 400px;
		.address-picker__map {
			outline: none;
			&:deep(.leaflet-control) { z-index: 0 !important}
			&:deep(.leaflet-pane) { z-index: 0 !important}
			&:deep(.leaflet-top, .leaflet-bottom) {z-index: 0 !important}
		}
	}
}

.secondary-parameters {
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;

	.secondary-parameters__block {
		display: flex;
		align-items: flex-start;
		column-gap: 5rem;

		.secondary-parameters__block__col {
			display: flex;
			flex-direction: column;
			row-gap: 1rem;

			&.secondary-parameters__block__col_with-checkboxes {
				padding-top: 1rem;
				row-gap: .75rem;
			}
			
			.secondary-parameters__block__col__item {
				.secondary-parameters__block__col__item__caption {
					font-weight: 400;
					opacity: 0.975;
					margin-bottom: 0.25rem;
				}
				&.secondary-parameters__block__col__item_with-checkbox {
					display: flex;
					align-items: center;
					column-gap: .4rem;
					font-size: 0.95rem;
					&, & * {
						cursor: pointer;
					}
				}
			}
			.secondary-parameters__block__col__item__inputs-row {
				display: flex;
				column-gap: .7rem;
				input {
					width: 100px;
					text-align: right;
				}
				.secondary-parameters__block__col__item__inputs-row__item {
					display: flex;
					align-items: baseline;
					column-gap: 5px;
				}
			}
		}
	}
}

.submit-button-wrapper {
	text-align: center;
	.submit-button {
		font-size: 1.3rem;
		font-weight: 300;
		padding: .75rem 1.3rem;
	}
}
</style>