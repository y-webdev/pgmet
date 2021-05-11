<template>
    <section v-if="!loading" class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h1 class="text-center mb-3">{{ mapTeamsHeader(slug) }}</h1>
            <div class="row">
                <div v-for="item in data.results[slug]" class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="h-100 border border-top-0 shadow-sm">
                        <img class="w-100" :src="imagePath + item.image" :alt="`Снимка на ${item.name}`">
                        <p class="mx-2 text-white py-1 px-2 fw-bold" :class="bgClass(item[position])">{{ item.name }}</p>
                        <p class="mx-2"
                           :class="{'h4': /^директор|председател$/gi.test(item[position])}"
                           v-html="handleHtml(item[position])"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import fetchData from "@/composable/fetchData";

export default {
    props: ['slug', 'position'],
    setup(props) {
        const {data, loading, error} = fetchData(props.slug);
        return {data, loading, error};
    },
    methods: {
        bgClass(position) {
            let className = 'bg-dark-blue';

            switch (true) {
                case /^директор|председател$/gi.test(position):
                    className = 'bg-danger';
                    break;
                case /^зам.\s?директор/gi.test(position):
                    className = 'bg-warning';
                    break;
            }

            return className;
        },
        handleHtml(position) {
            return position.replace(/(.*)\s?-\s?(.*)/,'$1<span class="d-block small text-muted">$2</span>')
        },
        mapTeamsHeader(header) {
            const headers = {
                'council': 'Обществен съвет',
                'teachers': 'Учителски колектив'
            }

            return headers[header]
        }
    }
}
</script>

<style scoped>
img + p {
    position: relative;
    top: -17px;
}
</style>
