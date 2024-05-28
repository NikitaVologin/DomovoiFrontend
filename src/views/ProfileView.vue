<template>
<div class="search content-width-container">
	<Header></Header>

	<main class="content-width">
		<aside class="aside">
			<div class="aside__avatar card" :style="`background-image: url('${user.avatar}');`"></div>
			<div class="aside__info" v-if="!infoEdited">
				<div class="aside__info__item">{{user.FIO}}</div>
				<div class="aside__info__item">{{user.email}}</div>
				<div class="aside__info__item" v-if="user.phone">{{user.phone}}</div>
			</div>
			<div class="aside__edit" v-if="infoEdited">
				<input class="aside__edit__item" v-model="editedUser.FIO">
				<input class="aside__edit__item" v-model="editedUser.email">
				<input class="aside__edit__item" v-if="user.phone" v-model="editedUser.phone">
				<button class="aside__buttons__item" @click="saveEditedInfo">Сохранить</button>
				<button class="aside__buttons__item" @click="cancelEditing">Отмена</button>
			</div>
			<div class="aside__buttons" v-if="!infoEdited">
				<button class="aside__buttons__item" v-if="!own">Написать</button>
				<button class="aside__buttons__item" v-if="own" @click="editInfo">Редактировать</button>
			</div>
		</aside>
		<div class="info">
			<div class="info__annoncements-swiper-block">
				<div class="info__annoncements-swiper-block__arrow info__annoncements-swiper-block__arrow_left" @click="announcementsSwiper.slidePrev()">
					<svg viewBox="0 0 13 22" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.2193 21.2575L12.181 19.3817L3.82205 10.4407L12.6627 1.98688L10.8052 0L-9.95432e-05 10.3324L10.2193 21.2575Z"/>
					</svg>
				</div>
				<Swiper
					class="info__annoncements-swiper"
					:slidesPerView="3"
					space-between="20"
					loop
					@swiper="getAnnouncementsSwiperRef"
				>
					<SwiperSlide v-for="ann in announcements">
						<AnnouncementCard :announcement="ann" minimized />
					</SwiperSlide>
				</Swiper>
				<div class="info__annoncements-swiper-block__arrow info__annoncements-swiper-block__arrow_right" @click="announcementsSwiper.slideNext()">
					<svg viewBox="0 0 13 22" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
						<path d="M10.2193 21.2575L12.181 19.3817L3.82205 10.4407L12.6627 1.98688L10.8052 0L-9.95432e-05 10.3324L10.2193 21.2575Z"/>
					</svg>
				</div>
			</div>
			<div class="info__reviews-block card">
				<div>
					<div class="info__reviews-block__toggles">
						<div class="info__reviews-block__toggles__left">
							<button v-if="user.reviews.length != 0" @click="changeReviewsSort">
								{{ rewiewsSort == 'negative' ? 'Сначала положительные' : 'Сначала отрицательные' }}
							</button>
							<div class="info__reviews-block__toggles__no-reviews" v-if="user.reviews.length == 0">Пока нет отзывов</div>
						</div>
						<button v-if="!own && store.state.user">Написать отзыв</button>
					</div>
					<div class="info__reviews-block__reviews-list"  v-if="user.reviews.length != 0">
						<div class="info__reviews-block__reviews-list-item review" v-for="review in sortedReviews">
							<div class="review__head">
								<div class="review__head__img" :style="`background-image: url('${review.author.avatar}');`"></div>
								<div class="review__head__captions">
									<div class="review__head__captions__author-name">{{ review.author.FIO }}</div>
									<div class="review__head__captions__review-header">{{ review.header }}</div>
								</div>
							</div>
							<div class="review__text">
								{{ review.text }}
							</div>
							<div class="review__rate">
								<div v-for="star,i in [...Array(5)]" class="review__rate__star" :class="review.rate >= i ? 'review__rate__star_ticked' : ''">
									<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
											stroke="#000000" stroke-width="0.86" stroke-linecap="round" stroke-linejoin="round"
										></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { type Swiper as SwiperRef } from 'swiper';
import Header from "../components/Header.vue"
import AnnouncementCard from "../components/AnnouncementCard.vue"
import { CounteragentViewModel } from "../viewModel/CounteragentViewModel"
import { AnnouncementViewModel } from '../viewModel/AnnouncementViewModel';
import { ReviewViewModel } from '../viewModel/ReviewViewModel';
import { router } from '../router';
import store from '../store';
import { container } from 'tsyringe';
import { ReceptionController } from '../controllers/receptionController';

export default defineComponent({
	components: { Header, AnnouncementCard, Swiper, SwiperSlide },
	data() {
		return {
			store: store,

			user: new CounteragentViewModel(true, true),
			own: false,
			infoEdited: false,
			editedUser: {} as CounteragentViewModel,

			announcements: [...Array(7)].map(i => new AnnouncementViewModel()),
			announcementsSwiper: {} as SwiperRef,

			rewiewsSort: 'positive' as 'positive'|'negative',
		}
	},
	computed: {
		loggedUser: () => store.state.user, 
		sortedReviews() : ReviewViewModel[] {
			return this.user.reviews.sort((r1,r2) => {
				return Math.sign((r1.rate - r2.rate) * (this.rewiewsSort == 'positive' ? -1 : 1));
			})
		}
	},
	watch: {
		loggedUser: {
			deep: true,
			handler(val:CounteragentViewModel) {
				this.checkIfOwnProfile();
			}
		}
	},
	mounted() {
		this.checkIfOwnProfile();
	},
	methods: {
		checkIfOwnProfile() {
			if (router.currentRoute.value.params.id == store.state.user?.id) {
				this.own = true;
				this.user = store.state.user;
			}
		},
		editInfo() {
			this.editedUser = JSON.parse(JSON.stringify(this.user));
			this.infoEdited = true;
		},
		saveEditedInfo() {
			let rc = container.resolve(ReceptionController);
			rc.changeUserInformation(this.user.id, this.editedUser).then(() => {
				this.user = this.editedUser;
				this.infoEdited = false;
			}).catch(err => {
				console.log(err);
			})
		},
		cancelEditing() {
			this.infoEdited = false;
		},
		getAnnouncementsSwiperRef(sw:SwiperRef) {
			this.announcementsSwiper = sw;
		},
		changeReviewsSort() {
			this.rewiewsSort = this.rewiewsSort == 'positive' ? 'negative' : 'positive';
		}
	}
})
</script>


<style lang="scss" scoped>

main {
	display: flex;
	justify-content: space-between;
	// width: 100px;

	aside {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		width: 20%;
	
		.aside__avatar {
			background-size: cover;
			aspect-ratio: .866;
			padding: 0;
		}

		.aside__info {
			display: flex;
			flex-direction: column;
			row-gap: .5rem;

			.aside__info__item {
				overflow: hidden;
				white-space: nowrap;
			}
		}

		.aside__edit {
			display: flex;
			flex-direction: column;
			row-gap: .5rem;
		}

		.aside__buttons {

			.aside__buttons__item {
				width: 100%;
			}
		}
	}

	.info {
		width: 76%;

		.info__annoncements-swiper-block {
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 1rem;
			margin-bottom: 2rem;

			.info__annoncements-swiper-block__arrow {
				min-width: 1.75rem;
				min-height: 1.75rem;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #fff;
				border-radius: 100%;
				transition: 0.15s;
				cursor: pointer;
				box-shadow: 0px 2px 4px 1px #0000001f;

				&:hover {
					background: #f0f0f0;
				}

				svg {
    				height: .9rem;
					path {
						fill: #696969;
					}
				}

				&_left svg {
					margin-left: -2px;
				}
				&_right svg {
					margin-right: -2px;
				}
			}

			// .ann-card:deep(.ann-card__img) {
			// 	aspect-ratio: 1/1;
			// }
		}

		.info__reviews-block {
			.info__reviews-block__toggles {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 1rem 1.25rem;

				.info__reviews-block__toggles__no-reviews {
					color: #666;
					font-weight: 300;
				}
			}

			.info__reviews-block__reviews-list {
				// margin-top: 2rem;
				.review	{
					border: 1px solid #777;
					border-right: none;
					border-left: none;
					padding: 15px 10px;
					position: relative;
					&:not(:last-child) {
						margin-bottom: 1rem;
					}
					.review__head {
						display: flex;
						column-gap: 1rem;
						margin-bottom: .75rem;
						.review__head__img {
							min-width: 50px;
							min-height: 50px;
							background-size: cover;
							border-radius: 100%;
						}
						.review__head__captions {
							.review__head__captions__author-name {
								margin-top: 0.3rem;
								margin-bottom: 0.3rem;
								color: #555;
								font-size: 0.9rem;
							}
							.review__head__captions__review-header {
								font-weight: 500;
								color: #333;
								font-size: 1.1rem;
							}
						}
					}
					.review__text {
						line-height: 1.5;
					}
					.review__rate {
						position: absolute;
						top: 15px;
						right: 10px;
						display: flex;
						// column-gap: .3rem;
						.review__rate__star {
							svg {
								height: 1rem;
							}
							&.review__rate__star_ticked svg path {
								fill: #ffbe00;
								stroke: #ffbe00;
							}
						}
					}
				}
			}
		}
	}
}


</style>