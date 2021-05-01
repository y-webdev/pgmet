import {createRouter, createWebHistory} from 'vue-router'
import {startRouter} from '@/router/startRouter'
import {singleNavItems, singleArticle} from '@/router/singleNavItems'
import {documents} from '@/router/documents'
import {aboutStudents} from '@/router/aboutStudents'
import {footerNavItems} from '@/router/footerNavItems';
import {contact} from '@/router/contact';
import { createMeta } from '@/router/createMeta'


const routes = [
    startRouter,
    ...documents.routes,
    ...aboutStudents.routes,
    ...singleNavItems,
    ...singleArticle,
    ...footerNavItems,
    contact,
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('@/components/404.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createMeta(router);

export default router
