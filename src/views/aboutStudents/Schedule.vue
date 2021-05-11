<template>
    <section class="container">
        <div v-if="!loading"  class="bg-white py-5 shadow mb-3">
            <div class="text-center">
                <h3 class="text-uppercase">Седмично разписание<br> на {{ translate(id) }} клас</h3>
                <h4>
                    за {{ translate(data.results.term.term) }}<sup>–{{data.results.term.term === 1 ? 'ви' : 'ри'}}</sup>
                    учебен срок на {{ data.results.term.year }} година
                </h4>
            </div>
            <div class="row border-top border-bottom m-3">
                <div class="col-md-4 my-3 border-end">
                    <select @change="selectClassName($event)">
                        <option v-for="className in data.results.classes" :value="className.class" :selected="className.class.match(id)">
                            {{ translate(className.class) + ' клас' }}
                        </option>
                    </select>
                </div>
                <div class="col-md-8 my-3">
                    <div class="row">
                        <div class="col-8 m-auto">
                            <ul ref="days" class="list-unstyled mb-0 pt-2 h5 text-uppercase">
                                <li v-for="day in weekDays" :class="startDay(currentDay) === day.index ? 'd-block' : 'd-none'">
                                    <span class="position-relative" :class="{'ps-4 current-day': day.index === currentDay}">{{ day.day }}</span>
                                </li>
                            </ul>
                        </div>
                        <div id="slideBtns" class="col-4 text-end">
                            <button ref="prev" class="btn bg-light-blue text-white fw-bold border me-1 prev" :disabled="startDay(currentDay) === 1"
                                    @click="eventListener($event)">
                                <i class="fas fa-angle-double-left"></i>
                            </button>
                            <button ref="next" class="btn bg-light-blue text-white fw-bold border next" :disabled="startDay(currentDay) === 5"
                                    @click="eventListener($event)">
                                <i class="fas fa-angle-double-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="day-content m-3">
                <ul ref="event" class="list-unstyled">
                    <li v-for="day in weekDays" :class="startDay(currentDay) === day.index ? 'd-block current-day' : 'd-none'">
                        <single-item :items="data.results.schedule" :lessons="data.results.lessons" :day="day.day"/>
                    </li>
                </ul>
            </div>
        </div>
        <Loader v-else loaderText="зареждане"/>
    </section>

</template>

<script>
import fetchData from "@/composable/fetchData";
import SingleItem from "@/components/schedule/SingleItem";
import Loader from "@/components/Loader";

export default {
    data() {
        return {
            currentDay: new Date().getDay(),
            dayIndex: new Date().getDay() === 0 ? 1 : new Date().getDay(),
            weekDays: [
                {day: 'Понеделник', index: 1},
                {day: 'Вторник', index: 2},
                {day: 'Сряда', index: 3},
                {day: 'Четвъртък', index: 4},
                {day: 'Петък', index: 5}
            ],
            id: '8a',
            data: {},
            loading: true
        }
    },
    components: {
        SingleItem,
        Loader
    },
    methods: {
        translate(className) {
            return className
                .replace(/(\d+)a/, '$1а')
                .replace(/(\d+)b/, '$1б')
                .replace(/(\d+)v/, '$1в')
                .replace(/^1$/, 'I')
                .replace(/^2$/, 'II')
        },
        showDay(day, dayIndex) {
            const days = this.$refs.days.children;
            const events = this.$refs.event.children;

            if (day > days.length || day > events.length) {
                dayIndex = 1;
            }
            if (day < 1) {
                dayIndex = days.length;
            }

            days.forEach(day => day.classList.add("d-none"));
            events.forEach(event => {
                event.classList.add("d-none");
            });

            days[dayIndex - 1].classList.remove("d-none");
            events[dayIndex - 1].classList.remove("d-none");

            this.btnDisable(day);

        },
        btnDisable(day) {
            if (day === 1) {
                this.$refs.prev.disabled = true
            } else if (day === 5) {
                this.$refs.next.disabled = true
            } else {
                this.$refs.prev.disabled = false
                this.$refs.next.disabled = false
            }
        },
        eventListener(event) {
            if (event.target.matches('.next')) {
                this.showDay((this.dayIndex += 1), this.dayIndex);
            }

            if (event.target.matches('.prev')) {
                this.showDay((this.dayIndex -= 1), this.dayIndex);
            }
        },
        startDay(day) {
            if (day > 5 || day === 0) {
                return 1
            }
            return day;
        },
        selectClassName(event) {
            this.getData(event.target.value)
        },
        getData(id) {
            const {data, loading, error} = fetchData(`schedule&class=${id}`);
            this.id = id;
            this.data = data;
            this.loading = loading;
        }
    },
    mounted() {
        const {data, loading, error} = fetchData(`schedule&class=${this.id}`);
        this.data = data;
        this.loading = loading;
    }
}
</script>

<style scoped>
section {
    min-height: 876px;
}
select {
    width: 100%;
    padding: .375rem 1.75rem .375rem .75rem;
    font-size: 1.25rem;
    color: #495057;
    vertical-align: middle;
    background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .5rem center/.5rem .7rem;
    border: none;
    border-bottom: 1px solid #ced4da;
    appearance: none;
    outline: none;
}
option {
    width: auto;
}

.bg-light-blue {
    background: #428dc9;
}

button > * {
    pointer-events: none;
}

button:hover {
    background: #1a3156;
}

button:disabled {
    color: black !important;
    background: white;
}

span.current-day {
    color: #dc3545;
}

span.current-day::after {
    content: "\f274";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    left: 0;

}
</style>
