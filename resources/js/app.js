require('./bootstrap');

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue)

window.Vue = require('vue').default;

Vue.component('component-utama', require('./pages/ComponentUtama.vue').default);

const app = new Vue({
    el: '#app',
});
