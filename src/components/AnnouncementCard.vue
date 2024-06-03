<template>
<div class="ann-card card" @click="$router.push(`/announcement/${announcement.id}`)">
	<div class="ann-card__img-wrapper">
		<div class="ann-card__img" :style="`background-image: url('${announcement.reality.images[0]}');`"></div>
		<div class="ann-card__deal-type">{{ announcement.deal.dealType == "Rent" ? "Аренда" : "Продажа" }}</div>
	</div>
	<div class="ann-card__body">
		<div class="ann-card__body__head">
			<div class="ann-card__body__head__address">{{ announcement.reality.address }}</div>
			<div class="ann-card__body__head__price">{{ announcement.deal.price }}₽</div>
		</div>
		<div class="ann-card__body__numbers" v-if="!minimized">
			<span class="ann-card__body__numbers__item" v-if="roomsStr.trim() != ''">{{ roomsStr }}</span>
			<span class="ann-card__body__numbers__item" v-if="roomsStr.trim() != ''">{{ announcement.reality.area }} м2</span>
		</div>
		<div class="ann-card__body__district" v-if="!minimized">Район {{ announcement.reality.destrict }}</div>
		<div class="ann-card__toggles" v-if="editable">
			<button @click.stop="$router.push(`/editAnnouncement/${announcement.id}`)">Редактировать</button>
			<button @click.stop="deleteAnnouncement()">Удалить</button>
		</div>
	</div>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { AnnouncementViewModel } from '../viewModel/AnnouncementViewModel';
import { DealType } from '../domain/enums/dealType';
import { container } from 'tsyringe';
import { AnnouncementController } from '../controllers/announcementContoller';
import store from '../store';

export default defineComponent({
	props: {
		announcement: {
			type: AnnouncementViewModel,
			required: true,
		},
		minimized: Boolean,
		editable: Boolean,
	},
	computed: {
		roomsStr() : string {
			if (this.announcement.reality.roomCount !== undefined) return `${this.announcement.reality.roomCount} ком.`;
			else if (this.announcement.reality.isSingleRoom) return 'комната';
			return '';
		}
	},
	mounted() {
		console.log(this.announcement);
	},
	methods: {
		deleteAnnouncement() {
			if (!store.state.user) return;
			let ac = container.resolve(AnnouncementController);
			ac.deleteAnnouncement(store.state.user.id, this.announcement.id).then(() => {
				this.$emit('delete');
			})
		}
	}
})
</script>


<style lang="scss" scoped>

.ann-card {
	background: #fff;
	padding: 0;

	&, & * {
		cursor: pointer;
	}
}

.ann-card__img-wrapper {
	border-radius: 10px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	overflow: hidden;
	position: relative;
	.ann-card__img {
		width: 100%;
		aspect-ratio: 1/0.7;
		background-size: cover;
	}
	.ann-card__deal-type {
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
		padding: 0.15rem .4rem;
		color: #fff;
		background: #e1986fbb;
		font-size: 0.8rem;
		border-radius: 5px;
		border: 1px solid #ddd5;
	}
}

.ann-card__body {
	padding: 1.2rem;
	display: flex;
	flex-direction: column;
	row-gap: .5rem;

	.ann-card__body__head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1rem;
	}

	.ann-card__body__numbers {
		color: #7d7d7d;
		font-size: 0.9rem;
	}

	.ann-card__body__district {
		font-size: 0.95rem;
	}

	.ann-card__toggles {
		display: flex;
		flex-direction: column;
		row-gap: .5rem;
		margin-top: 0.5rem;

		button {
			background: #ddd;
			color: #444;
			font-size: 0.9rem;
			&:hover {
				background: #d0d0d0;
			}
		}
	}
}

</style>