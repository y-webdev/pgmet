<template>
    <blank-docs v-if="!loading" :docs="data.results.laws" heading="Нормативни докумети"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import BlankDocs from "@/components/blanks/BlankDocs";

export default {
    setup() {
        const {data, loading, error} = fetchData('laws');
        return {data, loading, error};
    },
    components: {
        BlankDocs
    }
}
</script>
