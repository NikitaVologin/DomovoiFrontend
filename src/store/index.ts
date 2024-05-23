import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { CounteragentViewModel } from '../viewModel/CounteragentViewModel';

export interface IRootState {
	apiRoot: String,
	realEstateParameterPickers: { [key: string]: Array<{caption:string,value:string|number|boolean}> },
	user?: CounteragentViewModel,
}

export const key: InjectionKey<Store<IRootState>> = Symbol()

export default createStore<IRootState>({
	state: {
		apiRoot: "/",
		realEstateParameterPickers: {
			dealTypeForBusiness: [
				{
					value: 'Sell',
					caption: 'Продажа'
				},
				{
					value: 'Rell',
					caption: 'Сдача в аренду'
				},
			],
			dealTypeForCustomer: [
				{
					value: 'Sell',
					caption: 'Покупка'
				},
				{
					value: 'Rell',
					caption: 'Аренда'
				},
			],
			roomsCount: [
				{ value: 1, caption: '1'},
				{ value: 2, caption: '2'},
				{ value: 3, caption: '3'},
				{ value: 4, caption: '4+'},
			]
		},
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
