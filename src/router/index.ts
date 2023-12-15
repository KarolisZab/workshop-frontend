import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WorkerView from '../views/WorkerView.vue';
import AppLogin from '../views/AppLogin.vue';
import AppRegister from '../views/AppRegister.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    //component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/workshop/:id/workers',
    name: 'Worker',
    component: WorkerView,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: AppLogin,
  },
  {
    path: '/register',
    name: 'Register',
    component: AppRegister,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;