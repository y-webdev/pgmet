import {handleMetaTags} from '@/composable/handleMetaTags'

export const acceptance = {
    id: 'acceptance',
    name: 'Прием',
    routes: [
        {
            path: '/occupations',
            name: 'Нашите специалности',
            component: () => import('@/views/acceptance/Occupations'),
            meta: handleMetaTags('Нашите специалности')
        },
        {
            path: '/acceptance/plan',
            name: 'График за приема',
            component: () => import('@/views/acceptance/Plan'),
            meta: handleMetaTags('График за приема')
        },
        {
            path: '/acceptance/documents',
            name: 'Документи за приема',
            component: () => import('@/views/Documents'),
            props: {slug: 'acceptance-docs'},
            meta: handleMetaTags('Документи за приема')
        },
    ]
}
