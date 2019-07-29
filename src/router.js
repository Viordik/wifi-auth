import Vue from 'vue';
import Router from 'vue-router';

// Components
import Home from './views/Home.vue';
import Traffic from './views/Traffic.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: Traffic
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
