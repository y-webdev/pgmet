import {websiteInfo} from "../composable/staticData";

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
export const singleNavItems = [
    {
        path: '/services',
        name: 'Услуги',
        component: () => import('@/views/Documents.vue'),
        props: { slug: 'services' },
        meta: {
            title: `Услуги | ${title}`,
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/projects',
        name: 'Проекти',
        component: () => import('@/views/Article.vue'),
        props: { slug: 'projects' },
        meta: {
            title: `Проекти | ${title}`,
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    },
    {
        path: '/news',
        name: 'Новини',
        component: () => import('@/views/Article.vue'),
        props: { slug: 'news' },
        meta: {
            title: `Новини | ${title}`,
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
        }
    }
]
