<template>
<form class="login-form" @submit.prevent="submit()" id="form">
	<h3>{{ mode == 0 ? "Вход" : "Регистрация" }}</h3>

	<div class="inputs-container" v-if="mode==0">
		<input type="email" placeholder="E-mail" v-model="loginData.email" @input="error=false" required name="loginName">
		<input type="password" placeholder="Пароль" v-model="loginData.password" @input="error=false" required name="loginPass">
		<input type="submit" value="Войти" :disabled="submitButtonDisabled">
		<span class="error-message" v-if="error">Неверные данные!</span>
	</div>

	<div class="inputs-container" v-if="mode==1">
		<input type="email" name="email" placeholder="E-mail" v-model="signupData.email" @input="checkUserExists" required autocomplete="off">
		<input type="password" placeholder="Пароль" v-model="signupData.password" required readonly onfocus="this.removeAttribute('readonly')">
		<input type="submit" value="Зарегистрироваться" :disabled="submitButtonDisabled">
		<span class="error-message" v-if="userExists===true">Пользователь с этой почтой уже существует</span>
		<span class="error-message" v-else-if="error">Произошла ошибка</span>
	</div>

	<div class="tip" v-if="mode==0">
		Нет аккаунта? 
		<span class="link-style" @click="switchMode(1)">Зарегистрироваться</span>
	</div>
	<div class="tip" v-if="mode==1">
		Уже есть аккаунт?
		<span class="link-style" @click="switchMode(0)">Войти</span>
	</div>
</form>
</template>
	
	
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { router } from '../router';
import store from '../store';

export default defineComponent({
	components: { },
	data() {
		return {
			mode: 0 as 0|1, // 0 - login, 1 - signup
			loginData: { email: "", password: "" },
			signupData: { email: "", password: "", reserveKey: "" },
			userExists: "unchecked" as Boolean|"unchecked",
			question: "default",
			error: false,
			modeWasChanged: false,
		}
	},
	computed: {
		submitButtonDisabled() : boolean {
			if (this.mode == 0) return !this.loginDataValid();
			return !this.signupDataValid();
		},
	},
	mounted() {
	},
	methods: {
		loginDataValid():Boolean {
			return this.loginData.email.trim()!='' && this.loginData.password.trim()!=''
		},
		emailValid() : boolean {
			return this.signupData.email.toLowerCase().trim().match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)!==null;
		},
		signupDataValid(includeReserveKey:Boolean=true):Boolean {
			let emailArr = this.signupData.email.split('@').filter((val) => val.trim()!="");
			return this.signupData.email.trim()!='' &&
				this.signupData.password.trim()!='' &&
				this.userExists===false &&
				(!includeReserveKey || this.signupData.reserveKey.trim()!='') &&
				this.emailValid();
		},

		checkUserExists() {
			this.userExists = true;
			// this.userExists = "unchecked";
			// if (!this.emailValid) return;
			// axios.get(store.state.apiRoot+"api/auth/checkUserExists.php", { params: {email: this.signupData.email} })
			// .then(res=> {
			// 	console.log(res.data);
			// 	if (res.data.success) {
			// 		this.userExists = res.data.exists;
			// 	}
			// })
		},

		submit() {
			if (this.mode == 0) this.submitLogin()
			else this.submitSignup()
		},
		submitLogin() {
			this.error = false;

			axios.post(store.state.apiRoot+`api/auth/login.php`, this.loginData)
			.then(res => {
				
			})
			.catch(err => console.log(JSON.stringify(err)));;
		},
		submitSignup() {
			if (!this.signupDataValid()) return;
			this.error = false;

			// axios.post(store.state.apiRoot+`api/auth/signup.php`, {
				
			// })
			// .then(res => {
				
			// });
		},
		
		switchMode(mode:0|1) {
			this.error=false;
			this.mode = mode;
			this.modeWasChanged = true;
		},
	},
})
</script>
	
	
<style lang="scss" scoped>

form {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 540px;
	max-width: 90%;
	position: fixed;
	padding: 50px 40px;
	box-shadow: 2px 2px 20px 0px #00000028;
	background: #fff;
	
	.dark-theme & {
		box-shadow: 2px 2px 20px 0px #0000004d;
	}
}
h3 {
	margin-top: 0;
	margin-bottom: 30px;
	font-weight: 200;
	font-size: 2.2rem;
}
.inputs-container {
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
}
input, button, .select-wrapper, .text {
	width: 100%;
	margin-bottom: 15px;
}
.text {
	text-align: center;	
}
select {
	width: 100%;
	padding: 10px 10px;
	cursor: pointer;
	border: 0;
  	border-right: 10px solid transparent
}
option {
	cursor: pointer;
}
.tip {
	margin-top: 20px;
}
.error-message {
	margin-bottom: 10px;
	font-size: 0.85rem;
}

@media screen and (max-width: 480px) {
	h3 {
		font-size: 1.9rem;
	}
}

</style>