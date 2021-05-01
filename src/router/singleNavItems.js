import {handleMetaTags} from '@/composable/handleMetaTags'

export const singleNavItems = [
    {
        path: '/services',
        name: 'Услуги',
        component: () => import('@/views/Documents.vue'),
        props: { slug: 'services' },
        meta: handleMetaTags('Услуги')
    },
    {
        path: '/projects',
        name: 'Проекти',
        component: () => import('@/views/Article.vue'),
        props: { slug: 'projects' },
        meta: handleMetaTags('Проекти')
    },
    {
        path: '/news',
        name: 'Новини',
        component: () => import('@/views/Article.vue'),
        props: { slug: 'news' },
        meta: handleMetaTags('Новини')
    }
]

export const singleArticle = [
    {
        path: '/:page/:id',
        name: 'Статия',
        component: () => import('@/components/article/SingleArticle.vue'),
        props: true,
        meta: handleMetaTags('Статия') // TODO: Fix name to use correct page name
    }
]
