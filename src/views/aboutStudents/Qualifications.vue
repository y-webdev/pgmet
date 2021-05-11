<template>
    <div v-if="!loading">
        <plan-template :data="data.results.qualification" :header="header"/>
        <Blank v-if="!!data.results.qualification.length && !!data.results.instructions"
               :data="data.results.instructions"
               :header="`Инструкции отностно ${header}`"/>
    </div>
</template>

<script>
import fetchData from "@/composable/fetchData";
import PlanTemplate from '@/components/plans/planTemplate'
import Blank from '@/components/blanks/Blank'

export default {
    data() {
        return {
            header: 'Държавни квалификационни изпити',
            instructionsHeader: 'Инструкции отностно Държавни квалификационни изпити'
        }
    },
    setup() {
        const {data, loading, error} = fetchData('qualification');
        return {data, loading, error};
    },
    components: {
        PlanTemplate,
        Blank
    }
}
</script>
