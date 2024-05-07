import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface IRootState {
	apiRoot: String
}

export const key: InjectionKey<Store<IRootState>> = Symbol()

export default createStore<IRootState>({
	state: {
		apiRoot: "/",
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
