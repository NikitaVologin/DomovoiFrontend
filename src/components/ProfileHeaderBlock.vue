<template>
<div class="profile-block">
    <div
        class="profile-block__logged-out"
        :class="loginIsButton ? 'button-style' : ''"
        v-if="!store.state.user"
        @click="$emit('loginClick')"
    >
        Войти
    </div>
    <div class="profile-block__logged-in" v-if="store.state.user">
        <div class="profile-block__logged-in__title" @click="popupShown = !popupShown">
            <div class="profile-block__logged-in__title__name">{{store.state.user.FIO}}</div>
            <div class="profile-block__logged-in__title__avatar" :style="`background-image: url('${store.state.user.avatar}'`"></div>
        </div>
        <transition name="popup-transition">
            <div class="profile-block__logged-in__popup" v-if="popupShown" @click="popupShown=false">
                <div class="profile-block__logged-in__popup__list-item" @click="router.push(`/profile/${store.state.user!.id}`)">Профиль</div>
                <div class="profile-block__logged-in__popup__list-item" @click="logout">Выйти</div>
            </div>
        </transition>
    </div>
</div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';
import { router } from '../router';
import store from '../store';

export default defineComponent({
    components: {

    },
    emits: [ "loginClick", "logout" ],
    props: {
        loginIsButton:Boolean
    },
    data() {
        return {
            router: router,
            store: store,
            popupShown: false,
        }
    },
    computed: {
    },
    mounted() {
    },
    methods: {
		logout() {
			store.state.user = undefined;
			localStorage.removeItem('user');
			this.$emit('logout');
		}
    },
})
</script>
    
    
<style lang="scss" scoped>
.profile-block {
    font-size: 1rem;
}
.profile-block__logged-out {
    cursor: pointer;
}
.profile-block__logged-in {
    position: relative;
    .profile-block__logged-in__title {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        column-gap: 1rem;
        cursor: pointer;
        
        .profile-block__logged-in__title__name {
            max-width: 150px;
            overflow-x: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .profile-block__logged-in__title__avatar {
            height: 2rem;
            aspect-ratio: 1/1;
            border-radius: 50%;
            background-size: cover;
        }
    }
    .profile-block__logged-in__popup {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
        background: #fff;
		z-index: 10;
        .profile-block__logged-in__popup__list-item {
            cursor: pointer;
            padding: .5rem;
            padding-right: 1rem;
            color: #000;
            font-weight: 300;
            transition: 0.1s;
            &:hover {
                background: #00000027;
            }
        }
    }
}

.popup-transition-enter-from, .popup-transition-leave-to {
	transform: translateY(-10px);
    opacity: 0;
}
.popup-transition-enter-active, .popup-transition-leave-active {
	transition: 0.1s;
}
</style>