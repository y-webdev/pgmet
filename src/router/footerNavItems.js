import {handleMetaTags} from '@/composable/handleMetaTags'

export const footerNavItems = [
    {
        path: '/privacy',
        name: 'Поверителност',
        icon: 'fas fa-user-shield',
        component: () => import('@/views/Basic.vue'),
        props: { slug: 'privacy'},
        meta: handleMetaTags('Поверителност')
    },
    {
        path: '/cookies',
        name: 'Бисквитки',
        icon: 'fas fa-cookie-bite',
        component: () => import('@/views/Basic.vue'),
        props: { slug: 'cookies'},
        meta: handleMetaTags('Бисквитки')
    }
]
