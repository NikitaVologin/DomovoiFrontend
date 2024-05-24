<template>
<div class="picker">
	<div v-for="item,i in items">
		<input type="checkbox" 
			v-if="multiple" 
			v-model="pickedValuesMultiple" 
			:value="item.value" 
			:id="`rooms-checkbox-${rnd}-${i}`"
			@change="itemPickedChanged"
			hidden
		>
		<input type="radio" 
			v-if="!multiple" 
			v-model="pickedValue" 
			:value="item.value" 
			:id="`rooms-checkbox-${rnd}-${i}`"
			@change="itemPickedChanged"
			hidden
		>
		<label
			:for="`rooms-checkbox-${rnd}-${i}`"
			class="picker__item input-style"
			:class="pickedStyleOn(i) ? 'picker__item_checked' : ''"
		>
			{{ item.caption }}
		</label>
	</div>
</div>
</template>
	
	
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
	components: { },
	props: {
		items: {
			type: Object as PropType<Array<{caption:string,value:string|number|boolean}>>,
			required: true
		},
		multiple: Boolean,
		defaultValue: {
			type: [String, Number, Boolean],
		}
	},
	emits: [ 'change' ],
	data() {
		return {
			rnd: 0,
			pickedValue: 0 as string|number|boolean,
			pickedValuesMultiple: [] as any[],
		}
	},
	computed: {
	},
	mounted() {
		this.rnd = Math.random();
		if (this.defaultValue) {
			this.pickedValue = this.defaultValue;
		}
	},
	methods: {
		pickedStyleOn(i:number) {
			if (this.multiple) return this.pickedValuesMultiple.includes(this.items[i].value);
			return this.pickedValue == this.items[i].value;
		},
		itemPickedChanged() {
			this.$emit('change', this.multiple ? this.pickedValuesMultiple : this.pickedValue);
		}
	},
})
</script>
	
	
<style lang="scss">
.picker {
	display: flex;
	align-items: center;
	column-gap: .5rem;

	.picker__item {
		&, & * {
			cursor: pointer;
		}
		&_checked {
			border-width: 2px;
			border-color: #444;
		}
		&:not(&_checked) {
			margin: 1px 1px;
		}
	}
}
</style>