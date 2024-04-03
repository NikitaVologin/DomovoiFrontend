<template>
<div>
	
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
	components: {  },
	data() {
		
	},
	mounted() {
		axios.get('https://agency.amberday.net/api/', {}).then(res => {
			console.log(res)
		})
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