<template>
    <section v-if="!loading" class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h1 class="text-center">Ваканции и неучебни дни през учебната {{ data.results.year }}</h1>
            <div v-for="vacation in data.results.vacations" class="row border mx-0 my-3 p-3">
                <div class="col-md-6 col-lg-5 fw-bold my-auto" :class="{'text-danger': isVacation(vacation.start_date, vacation.end_date)}">
                    {{ formatDate(vacation.start_date) }} - {{ formatDate(vacation.end_date) }}
                </div>
                <div class="col-md-6 col-lg-7">
                    {{ vacation.name }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import fetchData from "@/composable/fetchData";

export default {
    setup() {
        const {data, loading, error} = fetchData('vacations');
        return {data, loading, error};
    },
    methods: {
        formatDate(date) {
            return new Intl.DateTimeFormat('bg-BG', {
                year: 'numeric', month: 'long', day: '2-digit'
            }).format(new Date(date))
        },
        isVacation(startDate, endDate) {
            const currentDate = new Date();
            return (new Date(startDate) <= currentDate && new Date(endDate) >= currentDate)
        }
    }
}
</script>
