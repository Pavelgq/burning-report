import Vue from 'vue';
import Vuelidate from 'vuelidate'
import App from './App.vue';
import store from './vuex/store';
import router from './router'

Vue.config.productionTip = false;

Vue.use(Vuelidate);


export const bus = new Vue({});
Vue.prototype.$eventPool = new Vue();

new Vue({
  router,
  render: h => h(App),
  store
  
}).$mount('#app')
