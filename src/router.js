import Vue from 'vue';
import VueRouter from 'vue-router';
import vHome from './components/v-home';
import vViewData from './components/v-view-data';
import vPersonReport from './components/forms/v-person-report';
import vPartReport from './components/forms/v-part-report';


Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: vHome},
        {path: '/person-report', component: vPersonReport},
        {path: '/view-data', component: vViewData},
        {path: '/part-report', component: vPartReport}
      ]

})

