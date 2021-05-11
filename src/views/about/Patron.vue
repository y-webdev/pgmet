<template>
    <section v-if="!loading" class="container">
        <div class="bg-white py-5 px-3 shadow mb-3">
            <h1 class="text-center mb-3">Патрон на училището</h1>
            <div class="row">
                <div class="col-md-3 text-center">
                    <img class="w-100 mb-3" :src="imagePath + data.results.patron.image" alt="Снимка на Христо Смирненски">
                    <i class="fas fa-user fa-2x"></i>
                    <p>Христо Димитров Измирлиев</p>
                    <i class="fas fa-birthday-cake fa-2x"></i>
                    <p>17 септември 1898 Кукуш, днес Гърция</p>
                    <i class="fas fa-cross fa-2x"></i>
                    <p>18 юни 1923 (на 24 години) София</p>
                    <i class="fas fa-info fa-2x"></i>
                    <p>{{ data.results.patron.info }}</p>
                </div>
                <div class="col-md-9">
                    <div class="iframe-container">
                        <iframe width="560" height="315" :src="data.results.patron.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="mt-2" v-html="parseBBCode(data.results.patron.description)"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import fetchData from "@/composable/fetchData";

export default {
    setup() {
        const {data, loading, error} = fetchData('patron');
        return {data, loading, error};
    }
}
</script>

<style scoped>

</style>
