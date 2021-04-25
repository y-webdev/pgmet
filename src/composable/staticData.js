import Home from "../views/Home";

export const websiteInfo = {
    name: 'Христо Смирненски',
    location: 'Кнежа',
    fullName: 'Професионална гимназия по механоелектротехника',
    shortName: 'ПГМЕТ',
    logo: 'logo_pgmet.png'
}

export const navItems = [
    {
        path: '/',
        name: 'Начало',
        icon: 'fas fa-home',
        component: Home
    },
    {
        path: '/about',
        name: 'За нас',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/projects',
        name: 'Проекти',
        component: () => import('@/views/Projects.vue')
    },
    {
        path: '/news',
        name: 'Новини',
        component: () => import('@/views/News.vue')
    }
]

export const footerNavItems = [
    {
        path: '/privacy',
        name: 'Поверителност',
        icon: 'fas fa-user-shield',
        component: () => import('@/views/Privacy.vue')
    },
    {
        path: '/cookies',
        name: 'Бисквитки',
        icon: 'fas fa-cookie-bite',
        component: () => import('@/views/Cookies.vue')
    },
]

export const webmaster = {
    text: 'Уеб дизайн и програмиране',
    url: 'https://www.yweb.dev',
    name: 'yweb.dev',
    logo: 'yweb-dev-logo-white.svg'
}
