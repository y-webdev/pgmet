<template>
    <blank-docs v-if="!loading" :docs="data.results.services" heading="Административни услуги извършвани от ПГМЕТ"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import BlankDocs from "@/components/blanks/BlankDocs";

export default {
    setup() {
        const {data, loading, error} = fetchData('services');
        return {data, loading, error};
    },
    components: {
        BlankDocs
    }
}
</script>
