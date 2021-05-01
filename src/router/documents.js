import {handleMetaTags} from '@/composable/handleMetaTags'

export const documents = {
    id: 'documents',
    name: 'Документи',
    routes: [
        {
            path: '/documents/:slug',
            name: 'Документи',
            component: () => import('@/views/Documents'),
            props: true,
            meta: handleMetaTags('Документи')
        }
    ],
    children: [
        {
            path: '/documents/regulations',
            name: 'Правилници и програми',
        },
        {
            path: '/documents/curriculum',
            name: 'Учебни планове',
        },
        {
            path: '/documents/laws',
            name: 'Нормативни докумети',
        },
        {
            path: '/documents/budget',
            name: 'Бюджет',
        },
        {
            path: '/documents/interest-activities',
            name: 'Занимания по интереси',
        }
    ]
}
