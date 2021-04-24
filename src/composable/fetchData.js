import {ref} from 'vue';

const fetchData = (query) => {
    const data = ref([])
    const error = ref(null)

    const load = async () => {
        const response = await fetch(process.env.VUE_APP_API + query);

        try {
            if (!response.ok) {
                throw Error('No data available')
            }

            data.value = await response.json();

        } catch (err) {
            error.value = err.message;
        }

    }

    return {data, error, load}
}

export default fetchData;
