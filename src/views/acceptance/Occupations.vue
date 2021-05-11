<template>
    <single-occupation v-if="!loading" v-for="(items, index) in data.results.occupation" :items="items"
                       :heading="mapHeading(index)" :index="index" :year="data.results.year"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import SingleOccupation from "@/components/occupation/SingleOccupation";

export default {
    setup() {
        const {data, loading, error} = fetchData('occupation');
        return {data, loading, error};
    },
    components: {
        SingleOccupation
    },
    methods: {
        mapHeading(index) {
            const headings = [
                'Дневна форма на обучение',
                'Задочна форма на обучение',
                'Самостоятелна форма на обучение'
            ]

            return headings[index]
        }
    }
}
</script>

<style scoped>

</style>
