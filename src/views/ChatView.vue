<template>
    <Header></Header>
    <div class="chat">
        <div class="chat__contacts"> 
            <div class="chat__contacts__contact" v-for="user in contactsUsers" @click="openChoosenUsersChat">
                <div class="chat__contacts__contact__ava":style="`background-image: url('${user.avatar}'`"></div>  
                <div class="chat__contacts__contact__name">{{ user.FIO }}</div>  
            </div> 
            <!-- <div class="chat__contacts__contact">
                <div class="chat__contacts__contact__ava":style="`background-image: url('${user.avatar}'`"></div>  
                <div class="chat__contacts__contact__name">{{ user.FIO }}</div>  
            </div>  -->
            <hr class="chat__contacts__straight">      
        </div>
        <div class="chat__field">
            <div class="chat__header">
                <div class="chat__header__name">{{ user.FIO }}</div>
                <div :class="[isUserOnline ? online_class : offline_class]">{{isUserOnline?'online':'offline'}}</div>
            </div>
            <div class="chat__messages">     
                <!-- <div class="chat__messages__message__reverse"  @click="openChoosenUsersChat">
                    <div @click="openUserProfile" class="chat__messages__message__ava":style="`background-image: url('${user.avatar}'`"></div>
                    <div class="chat__messages__message__field">
                        Иногда просто физическое присутствие близкого человека может быть лучшей поддержкой. Просто будьте рядом с братом, поддерживайте его в трудные моменты, обнимите, если это поможет. Ваша поддержка и забота сейчас очень важны.

В такие моменты слова не всегда нужны, главное - ваша поддержка и понимание. Будьте терпеливыми, заботливыми и бережными в отношениях с братом, который переживает утрату мамы. Помните, что вместе вы сможете преодолеть этот трудный период и поддержать друг друга.
                    </div>
                </div>
                    <div class="chat__messages__message" >
                        <div @click="openUserProfile" class="chat__messages__message__ava":style="`background-image: url('${user.avatar}'`"></div>
                        <div class="chat__messages__message__field">
                            Иногда просто физическое присутствие близкого человека может быть лучшей поддержкой. Просто будьте рядом с братом, поддерживайте его в трудные моменты, обнимите, если это поможет. Ваша поддержка и забота сейчас очень важны.

В такие моменты слова не всегда нужны, главное - ваша поддержка и понимание. Будьте терпеливыми, заботливыми и бережными в отношениях с братом, который переживает утрату мамы. Помните, что вместе вы сможете преодолеть этот трудный период и поддержать друг друга.
                        </div>
                    </div> -->
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
    import { MessageViewModel } from '../viewModel/MessageViewModel.ts';
    import { container } from 'tsyringe';
import { ReceptionController } from '../controllers/receptionController.ts';
    
    export default defineComponent({
        components: { Header},
        data() {
            return {
                store: store,
                contactsUsers: [] as Array<CounteragentViewModel>,
                messages: [] as Array<MessageViewModel>,
                user: new CounteragentViewModel(),
                isUserOnline: false,
                input_text: "",
                offline_class: "chat__header__offline-status",
                online_class: "chat__header__online-status"
            };
        },
        computed: {
        },
        mounted() {
            let ac = container.resolve(ReceptionController);
		    ac.getUserInformation((router.currentRoute.value.params.id as string)).then(res => {
			    this.user = res;
		    })
        },
        methods: {
            enterMessage(){

            },
            openChoosenUsersChat(){

            },
            openUserProfile() {

            }
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