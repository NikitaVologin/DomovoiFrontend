<template>
<div>
	<router-view></router-view>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
import store from './store';
import { CounteragentViewModel } from './viewModel/CounteragentViewModel';

export default defineComponent({
	components: {  },
	data() {
		return {}
	},
	mounted() {
		if (localStorage.getItem('user')) store.state.user = JSON.parse(localStorage.getItem('user')!) as CounteragentViewModel
	},
	computed: {
	},
	watch: {
		
	},
	methods: {
		
	},
	directives: {
		
	}
})
</script>


<style scoped>
/* .value {
	color: v-bind(valColor)
} */
</style>