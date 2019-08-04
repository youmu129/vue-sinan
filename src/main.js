import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import Element from 'element-ui'
import MainHeader from './components/header'
import MainFooter from './components/footer'
import MainAside from './components/aside'
import Sinan from './components/Sinan'
import HelloWorld from './components/HelloWorld'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element);
Vue.use(VueRouter);
Vue.component('main-header', MainHeader);
Vue.component('main-footer', MainFooter);
Vue.component('main-aside', MainAside);

Vue.config.productionTip = false

var router = new VueRouter({
  mode: 'hash', 
  routes: [
    {
      path: '/sinan', 
      name: 'Sinan',
      component: Sinan
    }, 
    {
      path: '/about',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
