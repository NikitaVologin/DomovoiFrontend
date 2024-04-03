import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface IRootState {
	
}

export const key: InjectionKey<Store<IRootState>> = Symbol()

export default createStore<IRootState>({
	state: {
		
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
