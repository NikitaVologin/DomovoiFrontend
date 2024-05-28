<template>
<div class="search content-width-container">
	<Header></Header>

	<main class="content-width">
		<div class="search-head">
			<div class="search-head__tabs">
				<div
					class="search-head__tabs__item"
					:class="head.filtersShown ? 'search-head__tabs__item_expanded' : ''"
					@click="head.filtersShown = !head.filtersShown"
				>
					<div class="search-head__tabs__item__caption">Фильтры</div>
					<svg class="search-head__tabs__item__arrow" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.7221 1.6924L14.2642 0.295459L7.9688 6.86527L1.39899 0.569826L0 2.02979L8.02977 9.72422L15.7221 1.6924Z" fill="#696969"/>
					</svg>
				</div>
				<div
					class="search-head__tabs__item"
					:class="head.mapShown ? 'search-head__tabs__item_expanded' : ''"
					@click="head.mapShown = !head.mapShown"
				>
					<div class="search-head__tabs__item__caption">Карта</div>
					<svg class="search-head__tabs__item__arrow" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15.7221 1.6924L14.2642 0.295459L7.9688 6.86527L1.39899 0.569826L0 2.02979L8.02977 9.72422L15.7221 1.6924Z" fill="#696969"/>
					</svg>
				</div>
			</div>
			<div class="search-head__cards-container">
				<div class="search-head__card search-head__card_filters card" v-if="head.filtersShown">
					<div class="search-head__card_filters__inputs">
						<div class="search-head__card_filters__inputs__col">
							<div class="search-head__card_filters__inputs__col__item">
								<div class="search-head__card_filters__inputs__col__item__caption">Тип сделки:</div>
								<Picker
									:items="store.state.realEstateParameterPickers.dealTypeForCustomer"
									defaultValue="Rent"
									@change="(val:any) => head.filters.DealType = val"
								></Picker>
							</div>
							<div class="search-head__card_filters__inputs__col__item">
								<div class="search-head__card_filters__inputs__col__item__caption">Тип недвижимости:</div>
								<div class="search-head__card_filters__inputs__col__item__inputs">
									<RealityTypePicker @change="(val : RealityType) => head.filters.RealityType = val"></RealityTypePicker>
								</div>
							</div>
						</div>
						<div class="search-head__card_filters__inputs__col">
							<RangeFilter class="search-head__card_filters__inputs__col__item"
								caption="Цена, рублей" fieldsSize="medium"
								@change="(obj:FilterRange) => { head.filters.PriceStart = obj.from; head.filters.PriceEnd = obj.to; }"
							/>
							<!-- <RangeFilter class="search-head__card_filters__inputs__col__item"
								caption="Площадь, м2" fieldsSize="short"
								@change="(obj:FilterRange) => head.filters.area = obj"
							/>
							<div class="search-head__card_filters__inputs__col__item">
								<div class="search-head__card_filters__inputs__col__item__caption">Кол-во комнат:</div>
								<Picker
									:items="store.state.realEstateParameterPickers.roomsCount"
									multiple
									@change="(val:any) => head.filters.roomsCount = val"
								></Picker>
							</div> -->
						</div>
						<!-- <div v-if="head.filters.DealType == ('Rent' as DealType) && head.filters.RealityType == 'Flat'"
							class="search-head__card_filters__inputs__col search-head__card_filters__inputs__col_with-checkboxes"
						>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="with-animals-checkbox">
								<input type="checkbox" id="with-animals-checkbox" v-model="head.filters.withAnimals">
								<span>Можно с животными</span>
							</label>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="with-kids-checkbox">
								<input type="checkbox" id="with-kids-checkbox" v-model="head.filters.withChildren">
								<span>Можно с детьми</span>
							</label>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="can-smoke-checkbox">
								<input type="checkbox" id="can-smoke-checkbox" v-model="head.filters.canSmoke">
								<span>Можно курить</span>
							</label>
						</div>
						<div v-if="head.filters.realityType == 'CommercialBuilding'"
							class="search-head__card_filters__inputs__col search-head__card_filters__inputs__col_with-checkboxes"
						>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="with-animals-checkbox">
								<input type="checkbox" id="with-animals-checkbox" v-model="head.filters.haveParking">
								<span>Есть парковка</span>
							</label>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="with-kids-checkbox">
								<input type="checkbox" id="with-kids-checkbox" v-model="head.filters.entry">
								<span>entry</span>
							</label>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="can-smoke-checkbox">
								<input type="checkbox" id="can-smoke-checkbox" v-model="head.filters.isUse">
								<span>isUse</span>
							</label>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="can-smoke-checkbox">
								<input type="checkbox" id="can-smoke-checkbox" v-model="head.filters.isAccess">
								<span>isAccess</span>
							</label>
						</div> -->
					</div>
					<div class="search-head__card_filters__more-filters"
						@click="head.moreFiltersShown=!head.moreFiltersShown"
						>
						<!-- v-if="head.filters.RealityType && head.filters.RealityType != RealityType.Office" -->
						<div class="search-head__card_filters__more-filters__inner">
							{{ head.moreFiltersShown ? 'Меньше' : 'Больше' }} фильтров
						</div>
					</div>
					<div class="search-head__card_filters__inputs search-head__card_filters__inputs_more" v-if="head.moreFiltersShown">
						<!-- <div class="search-head__card_filters__inputs__col">
							<RangeFilter class="search-head__card_filters__inputs__col__item"
								caption="Жилая площадь, м2" fieldsSize="medium"
								@change="(obj:FilterRange) => head.filters.livingArea = obj"
							/>
							<RangeFilter class="search-head__card_filters__inputs__col__item"
								caption="Кухня, м2" fieldsSize="medium"
								@change="(obj:FilterRange) => head.filters.kitchenArea = obj"
							/>
						</div> -->
						<div class="search-head__card_filters__inputs__col search-head__card_filters__inputs__col_with-checkboxes">
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="floor-ch-f">
								<input type="checkbox" id="floor-ch-f" v-model="head.filtersProxy.floors.notFirst" @change="floorFilterChange">
								<span>Не первый этаж</span>
							</label>
							<label class="search-head__card_filters__inputs__col__item search-head__card_filters__inputs__col__item_with-checkbox" for="floor-ch-l">
								<input type="checkbox" id="floor-ch-l" v-model="head.filtersProxy.floors.notLast" @change="floorFilterChange">
								<span>Не последний этаж</span>
							</label>
						</div>
					</div>
					<input type="submit" class="search-head__card_filters__submit" value="Найти" @click="submitSearch">
				</div>
				<div class="search-head__card search-head__card_map card" v-if="head.mapShown">
					<keep-alive>
						<LMap
							class="search-head__card_map__map"
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
					</keep-alive>
				</div>
			</div>
		</div>

		<div class="search-announcements">
			<h2 class="search-announcements__header" v-if="announcementCards.length > 0">Все объявления</h2>
			<div class="search-announcements__list">
				<AnnouncementCard v-for="annCard in announcementCards" :announcement="annCard"></AnnouncementCard>
			</div>
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
import RangeFilter from "../components/RangeFilter.vue"
import RealityTypePicker from "../components/RealityTypePicker.vue" 
import AnnouncementCard from "../components/AnnouncementCard.vue"
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel"
import { container } from 'tsyringe';
import { AnnouncementController } from '../controllers/announcementContoller';
import { DealType } from '../domain/enums/dealType';
import { filter, head } from 'lodash';
import { RealityType } from '../domain/enums/realityType';
import { FilterParameters } from '../domain/types';

interface FilterRange {
	from: number|undefined,
	to: number|undefined,
}

export default defineComponent({
	components: { Header, Picker, RangeFilter, RealityTypePicker, AnnouncementCard, LMap, LTileLayer },
	data() {
		return {
			store: store,
			DealType: DealType,
			RealityType: RealityType,
			head: {
				filtersShown: true,
				mapShown: false,
				moreFiltersShown: false,
				// filters: {
				// 	dealType: DealType.Sell,
				// 	realityType: "Flat" as "Flat"|"CommercialBuilding",
				// 	price: {} as FilterRange,
				// 	roomsCount: [] as number[],
				// 	area: {} as FilterRange,
				// 	withAnimals: false,
				// 	withChildren: false,
				// 	canSmoke: false,
				// 	haveParking: false,
				// 	entry: false,
				// 	isUse: false,
				// 	isAccess: false,
				// 	livingArea: {} as FilterRange,
				// 	kitchenArea: {} as FilterRange,
				// }
				filters: {
					DealType: DealType.Rent,
					RealityType: RealityType.Office
				} as FilterParameters,
				filtersProxy: {
					floors: {
						notFirst:false,
						notLast:false
					}
				}
			},
			map: {
				zoom: 13.5,
			},
			ann: {} as AnnouncementViewModel,
			announcementCards: [] as Array<AnnouncementViewModel>,
		}
	},
	mounted() {
		let ac = container.resolve(AnnouncementController);
		ac.getAnnouncementsFromTo().then((res:Array<AnnouncementViewModel>) => {
			this.announcementCards = res;
		});
	},
	methods: {
		floorFilterChange() {
			this.head.filters.FloorFilter = 0;
			if (this.head.filtersProxy.floors.notFirst) this.head.filters.FloorFilter++;
			if (this.head.filtersProxy.floors.notLast) this.head.filters.FloorFilter += 2;
		},
		async submitSearch() {
			let ac = container.resolve(AnnouncementController);
			let announcements = await ac.getFilteredAnnouncements(this.head.filters);
			this.announcementCards = announcements as Array<AnnouncementViewModel>;
		}
	}
})
</script>


<style lang="scss" scoped>

.search-head {
	margin-bottom: 2rem;

	.search-head__tabs {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 2rem;
		margin-bottom: 1rem;

		.search-head__tabs__item {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			column-gap: .5rem;
			color: #696969;
			&, & * {
				cursor: pointer;
			}

			.search-head__tabs__item__arrow {
				height: .5rem;
				transition: 0.2s;
				path {
					stroke: #696969;
					stroke-width: 0;
				}
			}

			&.search-head__tabs__item_expanded {
				color: #222;
				.search-head__tabs__item__arrow {
					transform: rotate(180deg);
					path {
						stroke: #222;
					}
				}
			}
		}
	}

	.search-head__cards-container {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		.search-head__card {
			&.search-head__card_filters {
				padding: 1.5rem 1.75rem;
				.search-head__card_filters__inputs {
					display: flex;
					column-gap: 3rem;

					.search-head__card_filters__inputs__col {
						display: flex;
						flex-direction: column;
						row-gap: 1rem;
		
						.search-head__card_filters__inputs__col__item {
							display: flex;
							align-items: center;
							column-gap: .7rem;
							.search-head__card_filters__inputs__col__item__caption {
								font-weight: 400;
								opacity: 0.975;
							}
							.search-head__card_filters__inputs__col__item__inputs__dash {
								opacity: 0.8;
								font-weight: 300;
							}
							.search-head__card_filters__inputs__col__item__inputs {
								display: flex;
								align-items: center;
								column-gap: .5rem;
		
								.search-head__card_filters__inputs__col__item__inputs__item {
									&_checkbox, &_radio {
										&, & * {
											cursor: pointer;
										}
										&_checked {
											border-width: 2px;
											border-color: #444;
										}
										&:not(&_checked) {
											margin: 1px 0;
										}
									}
								}
							}

							&.search-head__card_filters__inputs__col__item_with-checkbox {
								display: flex;
								align-items: center;
								column-gap: .4rem;
								font-size: 0.95rem;
								&, & * {
									cursor: pointer;
								}
							}
						}

						&.search-head__card_filters__inputs__col_with-checkboxes {
							row-gap: 1rem;
						}
					}

					&.search-head__card_filters__inputs_more {
						margin-top: 1.5rem;
					}
				}

				.search-head__card_filters__more-filters {
					cursor: pointer;
					font-size: 0.95em;
					color: #555;
					margin-bottom: 0.5rem;
					.search-head__card_filters__more-filters__inner {
						display: inline-block;
						text-decoration: underline;
						// padding: 0.3rem .6rem;
						// background: #eee;
						// border-radius: 10px;
					}
				}

				.search-head__card_filters__submit {
					margin-top: 1rem;
				}
			}
	
			&.search-head__card_map {
				height: 400px;
				overflow: hidden;
				.search-head__card_map__map {
					outline: none;
					&:deep(.leaflet-control) { z-index: 0 !important}
					&:deep(.leaflet-pane) { z-index: 0 !important}
					&:deep(.leaflet-top, .leaflet-bottom) {z-index: 0 !important}
				}
			}
		}
	}
}

.search-announcements {
	.search-announcements__header {
		font-size: 1.4rem;
		font-weight: 300;
	}
	.search-announcements__list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 3%;
		row-gap: 4%;
	}
}

</style>