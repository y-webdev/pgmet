<template>
    <blank-docs v-if="!loading" :docs="data.results.interest_activities" heading="Занимания по интереси - Наредба за приобщаващо образование"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import BlankDocs from "@/components/blanks/BlankDocs";

export default {
    setup() {
        const {data, loading, error} = fetchData('interest_activities');
        return {data, loading, error};
    },
    components: {
        BlankDocs
    }
}
</script>
