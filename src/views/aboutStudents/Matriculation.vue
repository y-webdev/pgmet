<template>
    <div v-if="!loading">
        <plan-template :data="filterData(data.results.matriculation, '1')"
                       :session="sessionOne" :header="header"
                       :heading="sessionOne"/>
        <plan-template :data="filterData(data.results.matriculation, '2')"
                       :session="sessionTwo"
                       :header="header"
                       :heading="sessionTwo"/>
        <Blank v-if="!!data.results.matriculation.length && !!data.results.instructions"
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
          sessionOne: 'Май/Юни',
          sessionTwo: 'Август/Септември',
          header: 'Държавни зрелостни изпити',
      }
    },
    setup() {
        const {data, loading, error} = fetchData('matriculation');
        return {data, loading, error};
    },
    components: {
        PlanTemplate,
        Blank
    },
    methods: {
        filterData(data, session) {
            return data.filter(item => item.session_1_2 === session)
        }
    }
}
</script>
