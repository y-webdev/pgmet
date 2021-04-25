<template>
    <Blank v-if="!loading"  :data="data.results.privacy" header="Политика за повери&shy;телност"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import Blank from "@/components/blanks/Blank";

export default {
    setup() {
        const {data, loading, error} = fetchData('privacy');
        return {data, loading, error};
    },
    components: {
        Blank
    }
}
</script>
