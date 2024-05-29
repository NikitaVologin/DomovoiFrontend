<template>
    <Header></Header>
    <div class="chat">
        <div class="chat__contacts"> 
            <div class="chat__contacts__contact" v-for="user in otherCounterAgents">
                <div class="chat__contacts__contact__ava">{{ user.avatar }}</div>  
                <div class="chat__contacts__contact__name">{{ user.FIO }}</div>  
            </div>     
            <hr class="chat__contacts__straight">      
        </div>
        <div class="chat__field">
            <div class="chat__header">
                <div class="chat__header__name">{{ currentCounterAgent.FIO }}</div>
                <div class="chat__header__status">Online</div>
            </div>
            <div class="chat__messages">
                <div class="chat__messages__message">
                    <div class="chat__messages__message__ava"></div>
                    <div class="chat__messages__message__field">LOOOOOOOOOOOOOOl</div>
                </div>
            </div>
            <div class="chat__intput-field">
                <!-- <p1 class="chat__intput-field__text" v-if="visible">Напишите текст...</p1> -->
                <textarea v-model="input_text" placeholder="Напишите сообщение..." class="chat__intput-field__text"></textarea>
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
    import { MessageViewModel } from '../viewModel/MessageViewModel';
    
    export default defineComponent({
        components: { Header},
        data() {
            return {
                store: store,
                otherCounterAgents: [] as Array<CounteragentViewModel>,
                messages: [] as Array<MessageViewModel>,
                currentCounterAgent: new CounteragentViewModel(),
                visible: true,
                input_text: "",
            };
        },
        computed: {
        },
        mounted() {
        },
        methods: {
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
    }

    .chat__contacts {
        width: 30%;
        height: 100%;
        background-color: rgba(255, 255, 255, 1);
        border-right: 1px solid rgba(154, 154, 154, 1);

        .chat__contacts__contact {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 70px;

            .chat__contacts__contact__ava {
                width: 100px;
                height: 50px;
            }
            .chat__contacts__contact__name {
                display: flex;
                align-self: center;
            }
        }
        .chat__contacts__straight{
            color: 1px solid rgba(154, 154, 154, 1);
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
        .chat__messages {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            justify-content: end;
            align-content: end;

            .chat__messages__message {
                display: flex;
                flex-direction: row;
                justify-content: start;
                .chat__messages__message__ava {
                    padding-right: 15px;
                }
                .chat__messages__message__field {
                    width: 100px;
                }
            }
             .chat__messages__message_reverse{
                display: flex;
                flex-direction: row-reverse;
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
    }
    </style>