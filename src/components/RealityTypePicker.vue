<template>
<div>
	<select v-model="value">
		<option :value="RealityType.Office">Офис</option>
		<!-- <option :value="'Flat'">Квартира</option> -->
	</select>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent } from 'vue';
import { RealityType } from '../domain/enums/realityType';

export default defineComponent({
	components: { },
	data() {
		return {
			RealityType: RealityType,
			value: RealityType.Office
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