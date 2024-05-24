<template>
<div class="range-filter">
	<div class="range-filter__caption">{{ caption }}:</div>
	<div class="range-filter__inputs">
		<input type="number" v-model="from" @input="inputEvent" class="range-filter__inputs__item" :class="`input-number_${fieldsSize}`" placeholder="от">
		<div class="range-filter__inputs__dash">—</div>
		<input type="number" v-model="to" @input="inputEvent" class="range-filter__inputs__item" :class="`input-number_${fieldsSize}`" placeholder="до">
	</div>
</div>
</template>
	
	
<script lang="ts">
import { PropType, defineComponent } from 'vue';

export default defineComponent({
	components: { },
	props: {
		caption: String,
		fieldsSize: String as PropType<'medium'|'short'>,
	},
	emits: [ 'change' ],
	data() {
		return {
			from: undefined as number|undefined,
			to: undefined as number|undefined,
		}
	},
	computed: {
	},
	mounted() {
	},
	methods: {
		inputEvent() {
			this.$emit('change', { from: this.from, to: this.to })
		}
	},
})
</script>
	
	
<style lang="scss" scoped>
.range-filter {
	display: flex;
	align-items: center;
	column-gap: .7rem;
	.range-filter__caption {
		font-weight: 400;
		opacity: 0.975;
	}
	.range-filter__inputs__dash {
		opacity: 0.8;
		font-weight: 300;
	}
	.range-filter__inputs {
		display: flex;
		align-items: center;
		column-gap: .5rem;
	}
}
</style>