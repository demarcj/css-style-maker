import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from 'src/views/HomeView.vue';
import FontSizeView from 'src/views/FontSizeView.vue';
import FontWeightView from 'src/views/FontWeightView.vue';
import ErrorView from 'src/views/ErrorView.vue';

const environment = window.location.hostname.includes(`localhost`) ? `/` : `/css-style-maker`;

const routes: Array<RouteRecordRaw> = [
    { path: `${environment}`, component: HomeView },
    { path: `${environment}/font-size`, component: FontSizeView },
    { path: `${environment}/font-weight`, component: FontWeightView },
    { path: `/:notFound(.*)`, component: ErrorView }
]
  
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
