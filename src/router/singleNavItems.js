import Home from "../views/Home";
import {websiteInfo} from "../composable/staticData";

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
export const singleNavItems = [
    {
        path: '/',
        name: 'Начало',
        icon: 'fas fa-home',
        component: Home,
        meta: {
            title: `Начало | ${title}`,
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
        path: '/about',
        name: 'За нас',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
            title: `За нас | ${title}`,
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
        path: '/services',
        name: 'Услуги',
        component: () => import('@/views/Services.vue'),
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
        component: () => import('@/views/Projects.vue'),
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
        component: () => import('@/views/News.vue'),
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
