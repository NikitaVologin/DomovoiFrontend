<template>
<teleport to='body'>
	<transition name="login-form-transition">
		<div class="login-form-bg" v-if="shown" @click.self="$emit('close')">
			<LoginForm></LoginForm>
		</div>
	</transition>
</teleport>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from './LoginForm.vue';

export default defineComponent({
	components: { LoginForm },
	props: {
		shown: Boolean,
	},
	emits: [ 'close' ],
	data() {
		return {
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
	},
})
</script>
	
	
<style lang="scss">
	
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