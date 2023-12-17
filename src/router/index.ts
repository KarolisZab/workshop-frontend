import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WorkerView from '../views/WorkerView.vue';
import AppLogin from '../views/AppLogin.vue';
import AppRegister from '../views/AppRegister.vue';
import NotFound from '../views/NotFound.vue';
import WorkshopDetails from '../views/WorkshopView.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import AdminRegister from '../views/AdminRegister.vue';
import AdminCreateWorkshop from '../views/AdminCreateWorkshopView.vue';
import AdminEditWorkshop from '../views/AdminEditWorkshopView.vue';
import AdminDeleteWorkshop from '../views/AdminDeleteWorkshopView.vue';
import WorkerDetails from '../views/WorkerDetailsView.vue';
import WorkerEdit from '../views/WorkerEditView.vue';
import WorkerDelete from '../views/WorkerDeleteView.vue';
import WorkerCreate from '../views/WorkerCreateView.vue';
import DutyView from '../views/DutiesView.vue';
import DutyDetails from '../views/DutyDetailsView.vue';
import DutyCreateView from '../views/DutyCreateView.vue'
import DutyEditView from '../views/DutyEditView.vue';
import DutyDeleteView from '../views/DutyDeleteView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    //component: () => import('../views/HomeView.vue'),
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
    path: '/workshop/:id/',
    name: 'WorkshopDetails',
    component: WorkshopDetails,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminDashboard,
  },
  {
    path: '/registeradmin',
    name: 'AdminRegister',
    component: AdminRegister,
  },
  {
    path: '/admin/createWorkshop',
    name: 'AdminCreateWorkshop',
    component: AdminCreateWorkshop,
  },
  {
    path: '/workshop/:id/edit',
    name: 'AdminEditWorkshop',
    component: AdminEditWorkshop,
  },
  {
    path: '/workshop/:id/delete',
    name: 'AdminDeleteWorkshop',
    component: AdminDeleteWorkshop,
  },
  {
    path: '/workshop/:id/workers',
    name: 'Worker',
    component: WorkerView,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/',
    name: 'WorkerDetails',
    component: WorkerDetails,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/edit',
    name: 'WorkerEdit',
    component: WorkerEdit,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/delete',
    name: 'WorkerDelete',
    component: WorkerDelete,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/create',
    name: 'WorkerCreate',
    component: WorkerCreate,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/duties',
    name: 'DutyView',
    component: DutyView,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/duties/:dutyId',
    name: 'DutyDetails',
    component: DutyDetails,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/duties/create',
    name: 'DutyCreate',
    component: DutyCreateView,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/duties/:dutyId/edit',
    name: 'DutyEdit',
    component: DutyEditView,
    //props: true,
  },
  {
    path: '/workshop/:id/workers/:workerId/duties/:dutyId/delete',
    name: 'DutyDelete',
    component: DutyDeleteView,
    //props: true,
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;