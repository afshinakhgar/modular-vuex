import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
new Vue({
    render(h) {
      return h(App)
    }
}).$mount('#app')