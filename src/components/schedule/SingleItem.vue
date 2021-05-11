<template>
    <div v-for="item in filterData(items, day)"  class="row border m-0 py-3">
        <div class="col-md-4 my-auto" :class="{'current-time': setCurrentTimeClass(setLessonTime(lessons, 'start', item.lesson), setLessonTime(lessons, 'end', item.lesson))}">
            {{ setLessonTime(lessons, 'start', item.lesson)}} - {{ setLessonTime(lessons, 'end', item.lesson)}}
        </div>
        <div class="col-md-8">
            <h6 v-if="item.discipline_2" class="text-info border-bottom pl-5">I-ва група</h6>
            <p class="h5">{{ item.discipline_1 }}</p>
            <p class="mb-0">{{ item.teacher_1 }}</p>
            <h6 v-if="item.discipline_2"  class="text-info border-bottom pl-5 pt-3">II-ра група</h6>
            <p v-if="item.discipline_2"  class="h5">{{ item.discipline_2 }}</p>
            <p class="mb-0" v-if="item.discipline_2" >{{ item.teacher_2 }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items', 'lessons', 'day'],
    methods: {
        filterData(items, day) {
            return _.filter(items, ['day', day])
        },
        setLessonTime(times, key, lesson) {
            return _.find(times, ['lesson', lesson])[key]
        },
        setCurrentTimeClass(start, end) {
            const currentTime = new Date().getHours() + ':' + String(new Date().getMinutes()).padStart(2, "0");
            if (currentTime >= start && currentTime <= end) {
                return true
            }
        }
    }
}
</script>

<style scoped>
.current-day .current-time {
    color: #dc3545;
    padding-left: 2rem;
}

.current-time::after {
    content: '\f017';
    font-family: "Font Awesome 5 Free";
    position: absolute;
    left: 2.63rem;
}
</style>
