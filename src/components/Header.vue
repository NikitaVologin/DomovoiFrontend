<template>
<header class="content-width-container">
	<div class="content-width">
		<div class="header__primary">
			<div class="header__primary__name">
				<h1>ДОМОВОЙ</h1>
			</div>
		</div>
		<div class="header__secondary">
			<button @click="loginFormShown=true">Войти</button>
		</div>
	</div>

	<teleport to='body'>
		<transition name="login-form-transition">
			<div class="login-form-bg" v-if="loginFormShown" @click.self="loginFormShown=false">
				<LoginForm></LoginForm>
			</div>
		</transition>
	</teleport>
</header>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from './LoginForm.vue';

export default defineComponent({
	components: { LoginForm },
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
		}
	}

}

.login-form-bg {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 50;
	background: #00000085;
	backdrop-filter: blur(3px);
}

.login-form-transition-enter-from, .login-form-transition-leave-to {
	background: #0000;
	backdrop-filter: blur(0px);
	.login-form {
		opacity: 0;
		transform: translate3d(0,50px,0) rotateX(40deg);
	}
}
.login-form-transition-enter-active, .login-form-transition-leave-active {
	&, & .login-form {
		transition: 0.2s;
	}
}

</style>