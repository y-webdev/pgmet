<template>
    <div class="bg-dark-blue shadow">
        <p class="text-white py-2 px-3 m-0 position-relative" :class="[{'home-news text-start': homeNews[0]}, {'text-end': !homeNews[0]}]">
            <a v-if="homeNews[0]" href="#" class="text-white ps-4" data-bs-toggle="modal" data-bs-target="#newsHomeModal">{{homeNews[0].name}}</a>
            <span v-else>{{ currentDate() }}</span>
        </p>
    </div>
    <div v-if="homeNews[0]" class="modal fade" id="newsHomeModal" tabindex="-1" aria-labelledby="newsHomeModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <modal-header/>
                <div class="modal-body">
                    {{homeNews[0].description}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModalHeader from '@/components/modals/ModalHeader'

export default {
    props: ['homeNews'],
    components: {
      ModalHeader
    },
    methods: {
        currentDate() {
            return  new Intl.DateTimeFormat('bg-BG', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            }).format(new Date())
        }
    }
}
</script>

<style scoped>
p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
