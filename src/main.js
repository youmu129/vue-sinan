import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import Element from 'element-ui';

import App from './app';
import MainHeader from './components/header';
import MainFooter from './components/footer';
import MainAside from './components/aside';
import Workflow from './components/workflow';
import Index from './components/index';
import About from './components/about';

import 'element-ui/lib/theme-chalk/base.css';
import 'element-ui/lib/theme-chalk/index.css';

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(Element);
Vue.component(CollapseTransition.name, CollapseTransition);

Vue.component(MainHeader.name, MainHeader);
Vue.component(MainFooter.name, MainFooter);
Vue.component(MainAside.name, MainAside);

var i18n = new VueI18n({
  locale: 'en', 
  messages: {
    'zh_CN': {

    },
    'en_US': {

    }
  }
});

var router = new VueRouter({
  mode: 'hash', 
  routes: [
    {
      path: '/index', 
      name: Index.name,
      component: Index
    }, 
    {
      path: '/about',
      name: About.name,
      component: About
    }, 
    {
      path: '/workflow',
      name: Workflow.name, 
      component: Workflow
    },
    {
      path: '/',    // 默认跳转项
      redirect: '/index'
    }
  ]
});

new Vue({
  render: h => h(App),
  router, 
  i18n
}).$mount('#app');
