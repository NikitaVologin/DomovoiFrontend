<template>
<div class="search content-width-container">
	<Header></Header>
	
	<main class="content-width">
		<div class="primary-parameters card">
			<div class="primary-parameters__item">
				<div class="primary-parameters__item__caption">Тип сделки:</div>
				<Picker
					:items="store.state.realEstateParameterPickers.dealTypeForBusiness"
					@change="(val: any) => announcement.deal.dealType = val"
				></Picker>
			</div>
			<div class="primary-parameters__item">
				<div class="primary-parameters__item__caption">Тип недвижимости:</div>
				<EstateTypePicker></EstateTypePicker>
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
			<div class="secondary-parameters__item">
				<div class="secondary-parameters__item__caption">Кол-во комнат:</div>
				<Picker
					:items="store.state.realEstateParameterPickers.roomsCount"
					@change="(val:number) => announcement.reality.roomsCount = val"
				></Picker>
			</div>
			<div class="secondary-parameters__item">
				<div class="secondary-parameters__item__caption">Площадь:</div>
				<div class="secondary-parameters__item__inputs-row">
					<div class="secondary-parameters__item__inputs-row__item">
						<input type="text" placeholder="Общая" v-model="announcement.reality.area">
						<span>м<sup>2</sup></span>
					</div>
					<div class="secondary-parameters__item__inputs-row__item" v-if="false">
						<input type="text" placeholder="Жилая">
						<span>м<sup>2</sup></span>
					</div>
					<div class="secondary-parameters__item__inputs-row__item" v-if="false">
						<input type="text" placeholder="Кухня">
						<span>м<sup>2</sup></span>
					</div>
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
import EstateTypePicker from "../components/EstateTypePicker.vue"
import { container } from 'tsyringe';
import { Announcement } from '../domain/announcements/announcement';
import { AnnouncementController } from '../controllers/announcementContoller';
import { RealityType } from '../domain/enums/realityType';
import { DealType } from '../domain/enums/dealType';
import { Office } from '../domain/realities/commercialBuildings/types/office';
import { Rent } from '../domain/deals/rent/rent';
import { CounterAgent } from '../domain/counteragents/counteragent';
import { AnnouncementViewModel } from '../viewModel/AnnouncementViewModel';

export default defineComponent({
	components: { Header, Picker, EstateTypePicker, LMap, LTileLayer },
	data() {
		return {
			store: store,
			announcement: new AnnouncementViewModel(),
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
		async submit() {
			// обращаться к созданному объекту AnnouncementViewModel через this.announcement

			let ac = container.resolve(AnnouncementController);
			//let counteragent = new CounterAgent();
			//counteragent.id = "";
			//let response = await ac.postAnnouncement(
			//	Announcement.getInstance("", new Office(), new Rent(), counteragent, "", ""), RealityType.Office, DealType.Sell);
			//console.log(response);
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
	row-gap: 2rem;
	.secondary-parameters__item {
		.secondary-parameters__item__caption {
			font-weight: 400;
			opacity: 0.975;
			margin-bottom: 0.5rem;
		}
	}
	.secondary-parameters__item__inputs-row {
		display: flex;
		column-gap: .7rem;
		input {
			width: 100px;
			text-align: right;
			margin-right: 2px;
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