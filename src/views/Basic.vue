<template>
    <Blank v-if="!loading"  :data="data.results[slug]" :header="mapHeader(slug)"/>
</template>

<script>
import fetchData from "@/composable/fetchData";
import Blank from "@/components/blanks/Blank";

export default {
    props: ['slug'],
    setup(props) {
        const {data, loading, error} = fetchData(props.slug);
        return {data, loading, error};
    },
    components: {
        Blank
    },
    methods: {
        mapHeader(header) {
            const headers = {
                'privacy': 'Политика за повери&shy;телност',
                'cookies': 'Политика за използване на "Бисквитки" (Cookies)'
            }

            return headers[header]
        }
    }
}
</script>
