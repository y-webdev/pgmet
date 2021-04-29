import {websiteInfo} from "../composable/staticData";

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
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
