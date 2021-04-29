<template>
    <blank-docs v-if="!loading" :docs="data.results.budget" heading="Бюджет"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import BlankDocs from "@/components/blanks/BlankDocs";

export default {
    setup() {
        const {data, loading, error} = fetchData('budget');
        return {data, loading, error};
    },
    components: {
        BlankDocs
    }
}
</script>
