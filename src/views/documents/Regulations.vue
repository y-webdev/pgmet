<template>
    <blank-docs v-if="!loading" :docs="data.results.regulations" :heading="`Планове за дейността на училището през учебната ${data.results.year} година`"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import BlankDocs from "@/components/blanks/BlankDocs";

export default {
    setup() {
        const {data, loading, error} = fetchData('regulations');
        return {data, loading, error};
    },
    components: {
        BlankDocs
    }
}
</script>
