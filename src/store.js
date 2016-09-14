import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import user  from './modules/user'
import product  from './modules/product'
import supplier from './modules/supplier'
Vue.use(Vuex);

export default new Vuex.Store({
	modules : {
		login,
		user,
		product,
		supplier
	}
});