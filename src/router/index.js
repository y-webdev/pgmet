import { createRouter, createWebHistory } from 'vue-router'
import { navItems, footerNavItems } from '@/composable/staticData';

const routes = [...navItems, ...footerNavItems];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
