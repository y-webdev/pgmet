import {createRouter, createWebHistory} from 'vue-router'
import {startRouter} from '@/router/startRouter'
import {singleNavItems, singleArticle} from '@/router/singleNavItems'
import {documents} from '@/router/documents'
import {aboutUs} from '@/router/aboutUs'
import {acceptance} from '@/router/acceptance'
import {aboutStudents} from '@/router/aboutStudents'
import {footerNavItems} from '@/router/footerNavItems';
import {contact} from '@/router/contact';
import { createMeta } from '@/router/createMeta'
import {handleMetaTags} from '@/composable/handleMetaTags'


const routes = [
    startRouter,
    ...documents.routes,
    ...aboutUs.routes,
    ...acceptance.routes,
    ...aboutStudents.routes,
    ...singleNavItems,
    ...singleArticle,
    ...footerNavItems,
    contact,
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: () => import('@/components/404.vue'),
        meta: handleMetaTags('Not Found')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

createMeta(router);

export default router
