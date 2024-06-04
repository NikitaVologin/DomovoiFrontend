<template>
<header class="content-width-container">
	<div class="content-width">
		<div class="header__primary">
			<div class="header__primary__name">
				<router-link to="/" class="no-link-style">
					<!-- <h1>ДОМОВОЙ</h1> -->
					<img src="../assets/img/logo.webp" alt="">
				</router-link>
			</div>
			<nav class="header__primary__links">
				<router-link to="/search" class="header__primary__links__item">Найти</router-link>
				<span class="header__primary__links__item" @click="publishClick">Опубликовать</span>
				<router-link to="/chat" class="header__primary__links__item" v-if="store.state.user">Чат</router-link>
			</nav>
		</div>
		<div class="header__secondary">
			<ProfileHeaderBlock loginIsButton @loginClick="loginFormShown=true" @logout="$emit('logout')"></ProfileHeaderBlock>
		</div>
	</div>

	<LoginFormFullscreen :shown="loginFormShown" :headToProfileAfterLogin="headToProfileAfterLogin" @close="loginFormShown=false"></LoginFormFullscreen>
</header>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import LoginFormFullscreen from './LoginFormFullscreen.vue';
import ProfileHeaderBlock from '../components/ProfileHeaderBlock.vue';
import store from '../store';
import { router } from '../router';

export default defineComponent({
	components: { LoginFormFullscreen, ProfileHeaderBlock },
	props: {
		headToProfileAfterLogin: Boolean,
	},
	data() {
		return {
			store: store,
			loginFormShown: false,
		}
	},
	methods: {
		publishClick() {
			if (!store.state.user) this.loginFormShown=true;
			else router.push('/editAnnouncement/0');
		}
	}
})
</script>


<style lang="scss" scoped>
header {
	// background: #CF3030;
	color: #555;
	width: 100%;
	padding: 1rem 0 0;
	// border-bottom: 4px solid #CF3030;
	// box-shadow: 0 0px 10px 1px #0000004a;

	.content-width {
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}

	.header__primary {
		display: flex;
		align-items: center;
		.header__primary__name h1 {
			font-size: 1.6rem;
			font-weight: 800;
			opacity: 0.9;
			letter-spacing: .03rem;
			color: #fff;
		}
		.header__primary__name img {
			height: 2.2rem;
		}

		.header__primary__links {
			margin-left: 3rem;
			margin-bottom: -.2rem;
			display: flex;
			align-items: center;
			column-gap: 1.5rem;
			.header__primary__links__item {
				&, &:visited {
					color: #444;
					text-decoration: none;
					border-bottom: none;
					cursor: pointer;
				}
			}
		}
	}
}


</style>