import {websiteInfo} from "../composable/staticData";

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
export const footerNavItems = [
    {
        path: '/privacy',
        name: 'Поверителност',
        icon: 'fas fa-user-shield',
        component: () => import('@/views/Basic.vue'),
        props: { slug: 'privacy'},
        meta: {
            title: `Поверителност | ${title}`,
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
        path: '/cookies',
        name: 'Бисквитки',
        icon: 'fas fa-cookie-bite',
        component: () => import('@/views/Basic.vue'),
        props: { slug: 'cookies'},
        meta: {
            title: `Бисквитки | ${title}`,
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
]
