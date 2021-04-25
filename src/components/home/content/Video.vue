<template>
    <div class="col-12 bg-white shadow p-3">
        <h1 class="text-center h3">{{ video.header }}</h1>
        <div class="iframe-container">
            <iframe width="560" height="315" :src="video.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
    props: ['video']
}
</script>
