import {handleMetaTags} from '@/composable/handleMetaTags'

export const aboutUs = {
    id: 'about-us',
    name: 'За нас',
    routes: [
        {
            path: '/history',
            name: 'История на училището',
            component: () => import('@/views/Basic'),
            props: {slug: 'history'},
            meta: handleMetaTags('История на училището')
        },
        {
            path: '/patron',
            name: 'Патрон',
            component: () => import('@/views/about/Patron'),
            meta: handleMetaTags('Патрон на училището')
        },
        {
            path: '/council',
            name: 'Обществен съвет',
            component: () => import('@/views/about/Teams'),
            props: {slug: 'council', position: 'position'},
            meta: handleMetaTags('Обществен съвет')
        },
        {
            path: '/teachers',
            name: 'Учителски колектив',
            component: () => import('@/views/about/Teams'),
            props: {slug: 'teachers', position: 'disciplines'},
            meta: handleMetaTags('Учителски колектив')
        }
    ]
}
