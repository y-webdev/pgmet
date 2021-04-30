<template>
    <blank-docs v-if="!loading" v-for="(item, index) in data.results[slug]" :docs="item"
                :heading="mapHeading(slug, index, data.results.year)" @filePath="filePath($event)"/>
    <documents-modal v-if="!loading" :data="data.results[slug]" :file="file"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import BlankDocs from "@/components/blanks/BlankDocs";
import DocumentsModal from '@/components/modals/DocumentsModal';

export default {
    props: ['slug'],
    setup(props) {
        const {data, loading, error} = fetchData(props.slug);
        return {data, loading, error};
    },
    data() {
        return {
            file: null
        }
    },
    components: {
        BlankDocs,
        DocumentsModal
    },
    methods: {
        mapHeading(heading, index, year) {
            const headings = {
                'regulations': [`Планове за дейността на училището през учебната ${year} година`],
                'curriculum': [
                    `Учебни планове - Дневна форма на обучение през учебната ${year} година`,
                    `Учебни планове - Задочна форма на обучение през учебната ${year} година`,
                    `Учебни планове - Самостоятелна форма на обучение през учебната ${year} година`
                ],
                'laws': ['Нормативни докумети'],
                'budget': ['Бюджет'],
                'interest-activities': ['Занимания по интереси - Наредба за приобщаващо образование'],
                'services': ['Административни услуги извършвани от ПГМЕТ']
            }

            return headings[heading][index]
        },
        filePath(file) {
            this.file = file;
        }
    }
}
</script>
