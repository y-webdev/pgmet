import { createRouter, createWebHistory } from 'vue-router'
import { navItems, footerNavItems, contact } from '@/composable/staticData';

const routes = [...navItems, ...footerNavItems, contact];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
