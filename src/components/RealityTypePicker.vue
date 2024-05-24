<template>
<div>
	<select v-model="value">
		<option :value="'CommercialBuilding'">Коммерческая</option>
		<!-- <option :value="'Flat'">Квартира</option> -->
	</select>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	components: { },
	data() {
		return {
			value: 'CommercialBuilding'
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