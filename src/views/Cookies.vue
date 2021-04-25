<template>
    <Blank v-if="!loading"  :data="data.results.cookies" header='Политика за използване на "Бисквитки" (Cookies)'/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import Blank from "@/components/blanks/Blank";

export default {
    setup() {
        const {data, loading, error} = fetchData('cookies');
        return {data, loading, error};
    },
    components: {
        Blank
    }
}
</script>
