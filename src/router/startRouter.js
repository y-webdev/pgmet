import {handleMetaTags} from '@/composable/handleMetaTags'

export const startRouter = {
    path: '/',
    name: 'Начало',
    icon: 'fas fa-home',
    component: () => import('@/views/Home'),
    meta: handleMetaTags('Начало')
}
