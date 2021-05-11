import {handleMetaTags} from '@/composable/handleMetaTags'

export const aboutStudents = {
    id: 'about-students',
    name: 'За ученика',
    routes: [
        {
            path: '/schedule',
            name: 'Седмично разписание',
            component: () => import('@/views/aboutStudents/Schedule'),
            meta: handleMetaTags('Седмично разписание')
        },
        {
            path: '/awards',
            name: 'Стипендии',
            component: () => import('@/views/Basic'),
            props: {slug: 'awards'},
            meta: handleMetaTags('Стипендии')
        },
        {
            path: '/graph',
            name: 'Графици',
            component: () => import('@/views/Documents'),
            props: {slug: 'graph'},
            meta: handleMetaTags('Графици')
        },
        {
            path: '/vacations',
            name: 'Ваканции и неучебни дни',
            component: () => import('@/views/aboutStudents/Vacations'),
            meta: handleMetaTags('Ваканции и неучебни дни')
        },
        {
            path: '/qualifications',
            name: 'ДКИ',
            component: () => import('@/views/aboutStudents/Qualifications'),
            meta: handleMetaTags('Държавни квалификационни изпити')
        },
        {
            path: '/matriculation',
            name: 'ДЗИ',
            component: () => import('@/views/aboutStudents/Matriculation'),
            meta: handleMetaTags('Държавни зрелостни изпити')
        }
    ]
}
