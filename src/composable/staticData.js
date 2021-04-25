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
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('@/views/News.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue')
    },
]

export const webmaster = {
    text: 'Уеб дизайн и програмиране',
    url: 'https://www.yweb.dev',
    name: 'yweb.dev',
    logo: 'yweb-dev-logo-white.svg'
}
