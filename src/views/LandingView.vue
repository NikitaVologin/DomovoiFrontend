<template>
<div class="title content-width-container" :class="loginFormShown ? 'title_form-shown' : ''">
	<div class="title-bg"></div>
	<div class="title-shade"></div>
	<div class="title-inner content-width">
		<div class="title__top-block">
			<div class="title__top-block__account">
				<ProfileHeaderBlock @loginClick="loginFormShown=true"></ProfileHeaderBlock>
			</div>
		</div>
		<div class="title__center">
			<h1 class="title__center__header">ДОМОВОЙ</h1>
			<div class="title__center__subheader">Аренда и продажа недвижимости</div>
			<div class="title__center__buttons">
				<button class="title__center__buttons__item" @click="sellerButtonClick">Хочу продать / сдать</button>
				<button class="title__center__buttons__item" @click="$router.push('search')">Хочу купить / снять</button>
			</div>
		</div>
	</div>
	<LoginFormFullscreen :shown="loginFormShown" @close="loginFormShown=false"></LoginFormFullscreen>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';
import LoginFormFullscreen from '../components/LoginFormFullscreen.vue';
import ProfileHeaderBlock from '../components/ProfileHeaderBlock.vue';
import { router } from '../router';
import store from '../store';

export default defineComponent({
	components: { LoginFormFullscreen, ProfileHeaderBlock },
	data() {
		return {
			loginFormShown: false,
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
		sellerButtonClick() {
			if (!store.state.user) this.loginFormShown=true;
			else router.push('/editAnnouncement/0');
		}
	},
})
</script>
	
	
<style lang="scss" scoped>
.title {
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
	position: relative;
}

.title-shade {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #0000008c;
	backdrop-filter: blur(2px);
}

.title-bg {
	background: url('../assets/img/bg.jpg');
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	transition: 0.3s;
	.title_form-shown & {
		transform: scale(1.05);
		filter: grayscale(.5) brightness(.8);
	}
}

* {
	color: #fff;
}

.title-inner {
	position: relative;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	
	.title__top-block {
		top: 4rem;
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: flex-end;

		.title__top-block__account {
			font-size: 1.3rem;
			.title__top-block__account__login {
				color: #fff;
				border: none;
			}
		}
	}

	.title__center {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		margin-top: -15vh;
		.title__center__header {
			font-size: 4rem;
			font-weight: 600;
			margin-bottom: 1rem;
		}
		.title__center__subheader {
			font-size: 1.5rem;
			margin-bottom: 5rem;
		}
		.title__center__buttons {
			display: flex;
			justify-content: space-between;
			width: 90%;
			.title__center__buttons__item {
				border-radius: 10rem;
				font-size: 1.6rem;
				padding: 1rem 3rem;
				font-weight: 300;
			}
		}
	}
}
</style>