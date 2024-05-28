<template>
<div class="content-width-container">
	<Header></Header>
	<main class="content-width">
		<div class="info card">
			<div class="info__gallery">
				<div
					class="info__gallery__shown-img"
					:style="`background-image: url(${announcement.reality.images[shownImageIndex]});`"
				></div>
				<Swiper
					class="info__gallery__swiper"
					@swiper="(sw:SwiperRef) => swiper = sw"
					:modules="[ Scrollbar ]"
    				:scrollbar="{ draggable: true }"
					:slidesPerView="4"
					spaceBetween="16"
				>
					<SwiperSlide
						v-for="img,i in announcement.reality.images"
					>
						<div
							class="info__gallery__swiper__img"
							:class="i == shownImageIndex ? 'info__gallery__swiper__img_shown' : ''"
							:style="`background-image: url(${announcement.reality.images[i]});`"
							@click="showImage(i)"
						></div>
					</SwiperSlide>
				</Swiper>
			</div>
			<div class="info__text">
				<div class="info__text__author">
					<div
						class="info__text__author__avatar"
						:style="`background-image: url(${announcement.counteragent.avatar});`"
					></div>
					<div class="info__text__author__name">{{ announcement.counteragent.FIO }}</div>
				</div>
				<div class="info__text__props">
					<div class="info__text__props-col">
						<div class="info__text__props-col__item">{{ announcement.reality.address }}</div>
						<div class="info__text__props-col__item">{{ announcement.deal.price }}₽</div>
					</div>
					<div class="info__text__props-col">
						<div class="info__text__props-col__item" v-if="announcement.reality.floor !== undefined">Этаж: {{ announcement.reality.floor }}</div>
						<div class="info__text__props-col__item" v-if="announcement.reality.roomCount !== undefined">Комнат: {{ announcement.reality.roomCount }}</div>
						<div class="info__text__props-col__item">{{ announcement.reality.area }} м2</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="similar card">
			<h3 class="similar__header">Похожие</h3>
			<div class="similar__list">
				<AnnouncementCard
					class="similar__list__item"
					v-for="ann in similarAnnouncements"
					:announcement="ann"
				></AnnouncementCard>
			</div>
		</div>
	</main>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { type Swiper as SwiperRef } from 'swiper';
import { Scrollbar } from 'swiper/modules';
import Header from "../components/Header.vue"
import AnnouncementCard from "../components/AnnouncementCard.vue"
import { AnnouncementViewModel } from '../viewModel/AnnouncementViewModel';

export default defineComponent({
	components: { Header, Swiper, SwiperSlide, AnnouncementCard },
	data() {
		return {
			announcement: new AnnouncementViewModel(),
			shownImageIndex: 0,
			swiper: {} as SwiperRef,
			Scrollbar: Scrollbar,
			similarAnnouncements: [
				new AnnouncementViewModel(),
				new AnnouncementViewModel(),
				new AnnouncementViewModel(),
			]
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
		showImage(i:number) {
			this.shownImageIndex = i;
			this.swiper.slideTo(Math.max(i-1, 0));
		}
	},
})
</script>
	
	
<style lang="scss" scoped>
.content-width>.card {
	padding: 1.5rem;
}

.info {
	display: flex;
	justify-content: space-between;
	.info__gallery {
		width: 50%;
		.info__gallery__shown-img {
			aspect-ratio: 3/2;
			background-size: cover;
			margin-bottom: .75rem;
		}
		.info__gallery__swiper {
			width: 100%;
			.info__gallery__swiper__img {
				aspect-ratio: 3/2;
				background-size: cover;
				cursor: pointer;
				&_shown {
					border: 2px solid #e16f6f;
					border-radius: 5px;
					cursor: default;
				}
			}
			&:deep(.swiper-scrollbar-horizontal) {
				display: none;
			}
		}
	}

	.info__text {
		padding-top: 0.5rem;
		width: 46%;
		.info__text__author {
			display: flex;
			align-items: center;
			margin-bottom: 1.5rem;
			.info__text__author__avatar {
				aspect-ratio: 1/1;
				border-radius: 50%;
				background-size: cover;
				background-position: center;
				margin-right: 1rem;
				height: 2rem;
			}
			// .info__text__author__name {
			// 	// font-size: 0.9rem;
			// }
		}
		.info__text__props {
			display: flex;
			justify-content: space-between;
			width: 100%;
			.info__text__props-col {
				display: flex;
				flex-direction: column;
				row-gap: .3rem;
				&:last-child {
					align-items: flex-end;
				}
			}
			.info__text__props-col__item {
				font-size: 1.1rem;
			}
		}
	}
}

.similar {
	margin-top: 2rem;
	.similar__header {
		margin-top: 0;
		margin-bottom: 1rem;
		font-weight: 300;
		font-size: 1.5rem;
	}
	.similar__list {
		display: flex;
		justify-content: space-between;
		width: 100%;
		.similar__list__item {
			width: 30%;
			&:deep(.ann-card__img-wrapper) {
				border-radius: 0;
			}
			&:deep(.ann-card__body) {
				padding: .75rem .25rem 0;
			}
		}
	}
}
</style>