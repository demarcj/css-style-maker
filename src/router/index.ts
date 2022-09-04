import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from 'src/views/HomeView.vue';
import FontSizeView from 'src/views/FontSizeView.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: HomeView },
    { path: '/font-size', component: FontSizeView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
