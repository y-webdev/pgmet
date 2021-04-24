<template>
    <div class="bg-dark-blue shadow">
        <p class="p-nowrap text-white py-2 px-3 m-0 position-relative" :class="[{'home-news text-start': data.results.homeNews[0]}, {'text-end': !data.results.homeNews[0]}]">
            <a v-if="data.results.homeNews[0]" href="#" class="text-white ps-4" data-bs-toggle="modal" data-bs-target="#newsHomeModal">{{data.results.homeNews[0].name}}</a>
            <span v-else>{{ currentDate() }}</span>
        </p>
    </div>
    <div v-if="data.results.homeNews[0]" class="modal fade" id="newsHomeModal" tabindex="-1" aria-labelledby="newsHomeModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Затвори"></button>
                </div>
                <div class="modal-body">
                    {{data.results.homeNews[0].description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    methods: {
        currentDate() {
            const date =  new Intl.DateTimeFormat('bg-BG', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            }).format(new Date())
            return date;
        }
    }
}
</script>

<style scoped>
.bg-dark-blue {
    background-color: #1a3156;
}

.home-news::after {
    content: "\f4ad";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    left: 1rem;
    color: #ffc107;
}
</style>
