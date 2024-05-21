<template>
<header class="content-width-container">
	<div class="content-width">
		<div class="header__primary">
			<div class="header__primary__name">
				<router-link to="/" class="no-link-style">
					<h1>ДОМОВОЙ</h1>
				</router-link>
			</div>
		</div>
		<div class="header__secondary">
			<ProfileHeaderBlock loginIsButton @loginClick="loginFormShown=true"></ProfileHeaderBlock>
		</div>
	</div>

	<LoginFormFullscreen :shown="loginFormShown" @close="loginFormShown=false"></LoginFormFullscreen>
</header>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import LoginFormFullscreen from './LoginFormFullscreen.vue';
import ProfileHeaderBlock from '../components/ProfileHeaderBlock.vue';

export default defineComponent({
	components: { LoginFormFullscreen, ProfileHeaderBlock },
	data() {
		return {
			loginFormShown: false,
		}
	}
})
</script>


<style lang="scss" scoped>
header {
	background: #CF3030;
	color: #fff;
	width: 100%;
	box-shadow: 0 0px 10px 1px #0000004a;

	.content-width {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h1 {
			font-size: 1.5rem;
			font-weight: 800;
			opacity: 0.9;
			letter-spacing: .03rem;
			color: #fff;
		}
	}

}


</style>