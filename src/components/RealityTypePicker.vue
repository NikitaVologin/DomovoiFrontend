<template>
<div>
	<select v-model="value">
		<option :value="'Flat'">Квартира</option>
		<option :value="'CommercialBuilding'">Коммерческая</option>
	</select>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	components: { },
	data() {
		return {
			value: 'Flat'
		}
	},
	emits: [ 'change' ],
	watch: {
		value(newValue) {
			this.$emit('change', newValue);
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
		changeEvent(evt:Event) {
			
		}
	},
})
</script>
	
	
<style lang="scss" scoped>
	
</style>