import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface IRootState {
	apiRoot: String,
	realEstateParameterPickers: { [key: string]: Array<{caption:string,value:string|number|boolean}> }
}

export const key: InjectionKey<Store<IRootState>> = Symbol()

export default createStore<IRootState>({
	state: {
		apiRoot: "/",
		realEstateParameterPickers: {
			dealTypeForBusiness: [
				{
					value: 'buy',
					caption: 'Продажа'
				},
				{
					value: 'lease',
					caption: 'Сдача в аренду'
				},
			],
			dealTypeForCustomer: [
				{
					value: 'buy',
					caption: 'Покупка'
				},
				{
					value: 'lease',
					caption: 'Аренда'
				},
			],
			roomsCount: [
				{ value: 1, caption: '1'},
				{ value: 2, caption: '2'},
				{ value: 3, caption: '3'},
				{ value: 4, caption: '4+'},
			]
		}
	},
	getters: {
		
	},
	mutations: {
		
	},
	actions: {
		
	},
	modules: {
		
	}
});
