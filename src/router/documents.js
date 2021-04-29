import {websiteInfo} from "../composable/staticData";

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
export const documents = {
    name: 'Документи',
    routes: [
        {
            path: '/regulations',
            name: 'Правилници и програми',
            component: () => import('@/views/documents/Regulations.vue'),
            meta: {
                title: `Правилници и програми | ${title}`,
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
            path: '/curriculum',
            name: 'Учебни планове',
            component: () => import('@/views/documents/Curriculum.vue'),
            meta: {
                title: `Учебни планове | ${title}`,
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
            path: '/laws',
            name: 'Нормативни докумети',
            component: () => import('@/views/documents/Laws.vue'),
            meta: {
                title: `Нормативни докумети | ${title}`,
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
            path: '/budget',
            name: 'Бюджет',
            component: () => import('@/views/documents/Budget.vue'),
            meta: {
                title: `Бюджет | ${title}`,
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
            path: '/interest-activities',
            name: 'Занимания по интереси',
            component: () => import('@/views/documents/InterestActivities.vue'),
            meta: {
                title: `Занимания по интереси | ${title}`,
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
}
