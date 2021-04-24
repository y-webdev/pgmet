import { createRouter, createWebHistory } from 'vue-router'
import { navItems } from '../composable/staticData';

const routes = navItems;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
