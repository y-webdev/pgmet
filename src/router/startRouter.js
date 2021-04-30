import {websiteInfo} from "@/composable/staticData";
import Home from "@/views/Home";

const title = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`
export const startRouter = {
    path: '/',
    name: 'Начало',
    icon: 'fas fa-home',
    component: Home,
    meta: {
        title: `Начало | ${title}`,
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
