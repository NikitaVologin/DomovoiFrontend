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
					<div class="search-head__card_filters__col">
						<div class="search-head__card_filters__col__item">
							<div class="search-head__card_filters__col__item__caption">Тип сделки:</div>
							<div class="search-head__card_filters__col__item__inputs">
								<div>
									<input type="radio" v-model="head.filters.dealType" :value="'buy'" id="deal-type-radio-buy" hidden>
									<label
										:for="`deal-type-radio-buy`"
										class="search-head__card_filters__col__item__inputs__item search-head__card_filters__col__item__inputs__item_radio input-style"
										:class="head.filters.dealType == 'buy' ? 'search-head__card_filters__col__item__inputs__item_radio_checked' : ''"
									>
										Покупка
									</label>
								</div>
								<div>
									<input type="radio" v-model="head.filters.dealType" :value="'lease'" id="deal-type-radio-lease" hidden>
									<label
										:for="`deal-type-radio-lease`"
										class="search-head__card_filters__col__item__inputs__item search-head__card_filters__col__item__inputs__item_radio input-style"
										:class="head.filters.dealType == 'lease' ? 'search-head__card_filters__col__item__inputs__item_radio_checked' : ''"
									>
										Аренда
									</label>
								</div>
							</div>
						</div>
						<div class="search-head__card_filters__col__item">
							<div class="search-head__card_filters__col__item__caption">Тип недвижимости:</div>
							<div class="search-head__card_filters__col__item__inputs">
								<select>
									<option value="">Квартира</option>
								</select>
							</div>
						</div>
					</div>
					<div class="search-head__card_filters__col">
						<div class="search-head__card_filters__col__item">
							<div class="search-head__card_filters__col__item__caption">Цена, рублей:</div>
							<div class="search-head__card_filters__col__item__inputs">
								<input type="number" v-model="head.filters.price.from" class="input-number_medium search-head__card_filters__col__item__inputs__item" placeholder="от">
								<div class="search-head__card_filters__col__item__inputs__dash">—</div>
								<input type="number" v-model="head.filters.price.to" class="input-number_medium search-head__card_filters__col__item__inputs__item" placeholder="до">
							</div>
						</div>
						<div class="search-head__card_filters__col__item">
							<div class="search-head__card_filters__col__item__caption">Кол-во комнат:</div>
							<div class="search-head__card_filters__col__item__inputs">
								<div v-for="nRooms in [1,2,3,4]">
									<input type="checkbox" v-model="head.filters.roomsCount" :value="nRooms" :id="`rooms-checkbox-${nRooms}`" hidden>
									<label
										:for="`rooms-checkbox-${nRooms}`"
										class="search-head__card_filters__col__item__inputs__item search-head__card_filters__col__item__inputs__item_checkbox input-style"
										:class="head.filters.roomsCount.includes(nRooms) ? 'search-head__card_filters__col__item__inputs__item_checkbox_checked' : ''"
									>
										{{ `${nRooms}${nRooms == 4 ? '+' : ''}` }}
									</label>
								</div>
							</div>
						</div>
						<div class="search-head__card_filters__col__item">
							<div class="search-head__card_filters__col__item__caption">Площадь, м2:</div>
							<div class="search-head__card_filters__col__item__inputs">
								<input type="number" v-model="head.filters.area.from" class="input-number_short search-head__card_filters__col__item__inputs__item" placeholder="от">
								<div class="search-head__card_filters__col__item__inputs__dash">—</div>
								<input type="number" v-model="head.filters.area.to" class="input-number_short search-head__card_filters__col__item__inputs__item" placeholder="до">
							</div>
						</div>
					</div>
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
			<h2 class="search-announcements__header">Все объявления</h2>
			<div class="search-announcements__list">
				<AnnouncementCard v-for="annCard in announcementCards" :announcement="annCard"></AnnouncementCard>
			</div>
		</div>
	</main>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Header from "../components/Header.vue"
import AnnouncementCard from "../components/AnnouncementCard.vue"
import { AnnouncementViewModel } from "../viewModel/AnnouncementViewModel"

type DealType = "buy"|"lease";

type TabName = "filters"|"map";

interface FilterRange {
	from: number|undefined,
	to: number|undefined,
}

export default defineComponent({
	components: { Header, AnnouncementCard, LMap, LTileLayer },
	data() {
		return {
			head: {
				filtersShown: true,
				mapShown: true,
				filters: {
					dealType: "buy" as DealType,
					price: {} as FilterRange,
					roomsCount: [] as number[],
					area: {} as FilterRange,
				}
			},
			map: {
				zoom: 13.5,
			},
			announcementCards: [
				new AnnouncementViewModel(),
				new AnnouncementViewModel(),
				new AnnouncementViewModel(),
				new AnnouncementViewModel(),
				new AnnouncementViewModel(),
				new AnnouncementViewModel(),
			]
		}
	},
	methods: {

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
				display: flex;
				column-gap: 3rem;
				padding: 1.5rem 1.75rem;
				.search-head__card_filters__col {
					display: flex;
					flex-direction: column;
					row-gap: 1.5rem;
	
					.search-head__card_filters__col__item {
						display: flex;
						align-items: center;
						column-gap: .7rem;
						.search-head__card_filters__col__item__caption {
							font-weight: 400;
							opacity: 0.975;
						}
						.search-head__card_filters__col__item__inputs__dash {
							opacity: 0.8;
							font-weight: 300;
						}
						.search-head__card_filters__col__item__inputs {
							display: flex;
							align-items: center;
							column-gap: .5rem;
	
							.search-head__card_filters__col__item__inputs__item {
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
					}
				}
			}
	
			&.search-head__card_map {
				height: 400px;
				overflow: hidden;
				.search-head__card_map__map {
					outline: none;
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