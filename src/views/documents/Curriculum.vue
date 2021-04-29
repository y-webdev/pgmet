<template>
    <blank-docs v-if="!loading" :docs="data.results.curriculumFull" :heading="`Учебни планове - Дневна форма на обучение през учебната ${data.results.year} година`"/>
    <blank-docs v-if="!loading" :docs="data.results.curriculumPart" :heading="`Учебни планове - Задочна форма на обучение през учебната ${data.results.year} година`"/>
    <blank-docs v-if="!loading" :docs="data.results.curriculumSingle" :heading="`Учебни планове - Самостоятелна форма на обучение през учебната ${data.results.year} година`"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import BlankDocs from "@/components/blanks/BlankDocs";

export default {
    setup() {
        const {data, loading, error} = fetchData('curriculum');
        return {data, loading, error};
    },
    components: {
        BlankDocs
    }
}
</script>
