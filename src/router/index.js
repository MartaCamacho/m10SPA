import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Botiga from '../views/Botiga.vue';
import Clients from '../views/Clients.vue';
import ClientsDetalls from '../views/ClientsDetalls.vue';
import Magatzem from '../views/Magatzem.vue';
import Proveidors from '../views/Proveidors.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/botiga',
    name: 'Botiga',
    component: Botiga
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/magatzem',
    name: 'Magatzem',
    component: Magatzem
  },
  {
    path: '/proveidors',
    name: 'Proveidors',
    component: Proveidors
  },
  {
    path: '/clients/:id',
    name: 'ClientsDetalls',
    component: ClientsDetalls
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
