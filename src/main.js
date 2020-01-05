import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';

import App from './app';
import MainHeader from './components/header';
import MainFooter from './components/footer';
import MainAside from './components/aside';
import Workflow from './components/workflow';
import Bookmark from './components/bookmark';
import About from './components/about';

import 'element-ui/lib/theme-chalk/base.css';
import 'element-ui/lib/theme-chalk/index.css';

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

Vue.use(VueRouter);
Vue.use(Element);
Vue.component(CollapseTransition.name, CollapseTransition);

Vue.component(MainHeader.name, MainHeader);
Vue.component(MainFooter.name, MainFooter);
Vue.component(MainAside.name, MainAside);

var router = new VueRouter({
  mode: 'hash', 
  routes: [
    {
      path: '/bookmark', 
      name: Bookmark.name,
      component: Bookmark
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
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
