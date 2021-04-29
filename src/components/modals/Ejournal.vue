<template>
    <div class="modal fade" id="e-journal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content border-0">
                <modal-header/>
                <div class="modal-body p-0">
                    <div class="iframe-modal-container">
                        <iframe :src="frameUrl"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModalHeader from '@/components/modals/ModalHeader'
export default {
    props: ['frameUrl'],
    components: {
        ModalHeader
    }
}
</script>

<style scoped>

</style>
