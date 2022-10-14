import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from 'src/views/HomeView.vue';
import FontSizeView from 'src/views/FontSizeView.vue';
import FontWeightView from 'src/views/FontWeightView.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomeView },
    { path: '/font-size', component: FontSizeView },
    { path: '/font-weight', component: FontWeightView },
    { path: '/:notFound(.*)', redirect: '/'}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
