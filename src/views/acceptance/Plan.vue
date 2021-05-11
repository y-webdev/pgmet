<template>
    <plan-template v-if="!loading" :data="data.results.plan" header="График за приема"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import PlanTemplate from '@/components/plans/planTemplate'

export default {
    setup() {
        const {data, loading, error} = fetchData('plan');
        return {data, loading, error};
    },
    components: {
        PlanTemplate
    }
}
</script>

<style scoped>

</style>
