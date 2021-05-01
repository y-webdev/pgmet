import {websiteInfo, webmaster} from '@/composable/staticData'

export const handleMetaTags = (title) => {
    const name = `${websiteInfo.shortName} "${websiteInfo.name}" - ${websiteInfo.location}`;
    const descriptionName = `${websiteInfo.fullName} "${websiteInfo.name}" - ${websiteInfo.location}`;

    return {
        title: `${title} | ${name}`,
        metaTags: [
            {
                name: 'description',
                content: `Официален сайт на ${descriptionName}`
            },
            {
                property: 'og:description',
                content: `Официален сайт на ${descriptionName}`
            },
            {
                name: 'author',
                content: `${webmaster.devName}, ${webmaster.email}`
            },
        ]
    }
}
