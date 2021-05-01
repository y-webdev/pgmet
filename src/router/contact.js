import {handleMetaTags} from '@/composable/handleMetaTags'

export const contact = {
    path: '/contacts',
    name: 'Контакти',
    component: () => import('@/views/Contacts.vue'),
    meta: handleMetaTags('Контакти')
}
