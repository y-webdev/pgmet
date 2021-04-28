import Home from "../views/Home";

export const websiteInfo = {
    name: 'Христо Смирненски',
    location: 'Кнежа',
    fullName: 'Професионална гимназия по механоелектротехника',
    shortName: 'ПГМЕТ',
    logo: 'logo_pgmet.png'
}

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`

export const navItems = [
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

export const footerNavItems = [
    {
        path: '/privacy',
        name: 'Поверителност',
        icon: 'fas fa-user-shield',
        component: () => import('@/views/Privacy.vue'),
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
        component: () => import('@/views/Cookies.vue'),
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

export const contact = {
    path: '/contacts',
    name: 'Контакти',
    component: () => import('@/views/Contacts.vue'),
    meta: {
        title: `Контакти | ${title}`,
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

export const webmaster = {
    text: 'Уеб дизайн и програмиране',
    url: 'https://www.yweb.dev',
    name: 'yweb.dev',
    logo: 'yweb-dev-logo-white.svg'
}
