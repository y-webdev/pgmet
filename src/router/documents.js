import {websiteInfo} from "../composable/staticData";
import Documents from '@/views/Documents'

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
export const documents = {
    id: 'documents',
    name: 'Документи',
    routes: [
        {
            path: '/documents/:slug',
            name: 'Документи',
            component: Documents,
            props: true,
            meta: {
                title: `Правилници и програми | ${title}`,
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
