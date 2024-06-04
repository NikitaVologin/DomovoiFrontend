<template>
    <Header></Header>
    <div class="chat">
        <div class="chat__contacts"> 
            <div class="chat__contacts__contact" v-for="user in controller.contacts" @click="openChoosenUsersChat(user.id)">
                <div class="chat__contacts__contact__ava":style="`background-image: url('${user.avatar}'`"></div>  
                <div class="chat__contacts__contact__name">{{ user.FIO }}</div>  
            </div> 
            <hr class="chat__contacts__straight">      
        </div>
        <div class="chat__field">
            <div class="chat__header">
                <div class="chat__header__name">{{ user.FIO }}</div>
                <div :class="[controller.isCompanionOnline ? online_class : offline_class]">{{controller.isCompanionOnline?'online':'offline'}}</div>
            </div>
            <div class="chat__messages">     
                <div :class="[message.senderId != me_user.id ? send_class : receive_class]" v-for="(message, index) in controller.messages" :key="index"">
                    <div @click="openUserProfile(message.senderId != me_user.id ? message.senderId : message.recieverId)" class="chat__messages__message__ava":style="`background-image: url('${user.avatar}'`"></div>
                    <div class="chat__messages__message__field">
                        {{ message.text }}
                    </div>
                </div>
            </div>
            <div class="chat__intput-field">
                <textarea v-on:keyup.enter="enterMessage" v-model="input_text" placeholder="Напишите сообщение..." class="chat__intput-field__text"></textarea>
            </div>
        </div>
    </div>
</template>
        
<script lang="ts">
import { defineComponent } from 'vue';
import { router } from '../router';
import store from '../store';
import Header from "../components/Header.vue"
import { CounteragentViewModel } from '../viewModel/CounteragentViewModel';
import { container } from 'tsyringe';
import { ReceptionController } from '../controllers/receptionController.ts';
import { ChatService } from '../dataproviders/chat/ChatService.ts';
import { ChatController } from '../controllers/chatController.ts';
import { Message } from '../domain/chat/message.ts';

export default defineComponent({
	components: { Header},
	data() {
		return {
			store: store,
            controller: {} as ChatController,
			chatService: {} as ChatService, 
			user: new CounteragentViewModel(),
			me_user: new CounteragentViewModel(),
			isUserOnline: false,
			input_text: "",
			offline_class: "chat__header__offline-status",
			online_class: "chat__header__online-status",
			send_class: "chat__messages__message__reverse",
			receive_class: "chat__messages__message",
		};
	},
	computed: {
	},
	mounted() {
        this.controller = container.resolve(ChatController);
		let ac = container.resolve(ReceptionController);
		ac.getUserInformation((router.currentRoute.value.params.id as string)).then(res => {
			this.user = res;
			this.me_user = this.store.state.user!;
            
		}).then(() => this.load_data());
	},
	methods: {
        async load_data(){
            this.controller.user = this.me_user;
            this.controller.companion = this.user;
			await this.controller.start(this.user, this.me_user);
        },
		enterMessage(){
            let message = this.input_text;
			this.controller.addMessage(message).then(() => {
   
            });
            //this.input_text = "";
		},
		openChoosenUsersChat(id: string){
            router.push(`/profile/${id}`)
		},
		openUserProfile(id: string) {
			router.push(`/profile/${id}`)
		},
	},
})
</script>
	
<style lang="scss" scoped>

.chat {
	position: absolute;
	left: 0; 
	right: 0; 
	margin-left: auto; 
	margin-right: auto; 
	
	width: 1200px;
	height: 100%;
	background-color: rgba(163, 201, 179, 0.5);
	
	display: flex;
	box-shadow:
		inset 0 -2em 2em rgba(0, 0, 0, 0.1),
		0 0 0 1px rgb(255, 255, 255),
		0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
}

.chat__contacts {
	display: block;
	width: 30%;
	height: 100%;
	background-color: rgba(255, 255, 255, 1);
	border-right: 1px solid rgba(154, 154, 154, 1);
	overflow-y: scroll;

	.chat__contacts__contact:hover {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 70px;
		background-color: rgba(243, 243, 243, 1);
		cursor: pointer;
	}

	.chat__contacts__contact {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 70px;

		.chat__contacts__contact__ava {
			display: flex;
			flex-wrap: wrap;
			height: 3rem;
			aspect-ratio: 1/1;
			border-radius: 50%;
			background-size: cover;
			align-self: center;
			justify-content: center;
			margin-left: 10px;
		}
		.chat__contacts__contact__name {
			display: flex;
			align-self: center;
			padding-left: 15px;
		}
	}
	.chat__contacts__straight{
		border: none;
		border-bottom: 1px solid rgba(154, 154, 154, 1);
	}
}

.chat__field {
	display: flex;
	width: 70%;
	height: 90%;
	flex-direction: row;
	align-content: space-between;
	flex-wrap: wrap;

	.chat__header {
		display: flex;
		flex-direction: column;
		padding-left: 20px;
		padding-top: 5px;
		width: 100%;
		height: 50px;
		background-color: rgba(243, 243, 243, 1);
	}
	.chat__header__online-status {
		color: blue;
	}
	.chat__header__offline-status {
		color: rgba(154, 154, 154, 1);
	}
	.chat__messages {
		display: block;
		width: 100%;
		height: 100%;
		overflow-y: scroll;

		// .chat__messages__message__wrapped {
		//     display: flex;
		//     width: 100%;
		// }

		.chat__messages__message {
			display: flex;
			width: 80%;
			flex-direction: row;
			justify-content: flex-start;

			.chat__messages__message__ava {
				margin-left: 15px;
				margin-right: 15px;
				display: flex;
				height: 2.5rem;
				aspect-ratio: 1/1;
				border-radius: 50%;
				background-size: cover;
				cursor: pointer;
			}
			.chat__messages__message__field {
				background-color: rgba(255, 249, 249, 1);
				border-radius: 15px;
				margin-bottom: 10px;
				padding: 10px;
			}

		}
			.chat__messages__message__reverse{
			display: flex;
			flex-direction: row-reverse;
			justify-content: flex-start;
			margin-left: 20%;

			.chat__messages__message__ava {
				margin-left: 15px;
				margin-right: 15px;
				display: flex;
				height: 2.5rem;
				aspect-ratio: 1/1;
				border-radius: 50%;
				background-size: cover;
				cursor: pointer
			}
			.chat__messages__message__field {
				word-wrap: break-word;
				background-color: rgba(255, 249, 249, 1);
				border-radius: 15px;
				margin-bottom: 10px;
				padding: 10px;
			}
		}   
	}   
	.chat__intput-field{
		display: flex;
		justify-content: start;
		align-content: center;;
		flex-wrap: wrap;
		width: 100%;
		height: 50px;
		background-color: rgba(243, 243, 243, 1);
		border-top: 1px solid rgba(154, 154, 154, 1);

		.chat__intput-field__text{
			width: 100%;
			height: 100%;
			padding-left: 15px;
			background-color: rgba(243, 243, 243, 1);
			border: 0px;
		}
	}
	:active, :hover, :focus {
		outline: 0;
		outline-offset: 0;
	}
}
</style>