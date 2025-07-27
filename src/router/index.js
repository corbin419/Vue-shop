import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/views/HomeView.vue';
import checkCartPage from '@/views/checkCart.vue';
import enterInfoPage from '@/views/enterInfo.vue';
import finishPage from '@/views/finishPage.vue';
import payPage from '@/views/payPage.vue';
import loginPage from '@/views/loginPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/checkCartPage',
      name: 'checkCartPage',
      component: checkCartPage,
    },
    {
      path: '/enterInfoPage',
      name: 'enterInfoPage',
      component: enterInfoPage,
    },
    {
      path: '/finishPage',
      name: 'finishPage',
      component: finishPage,
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage,
    },
    {
      path: '/payPage',
      name: 'payPage',
      component: payPage,
    },
  ],
});

export default router;
