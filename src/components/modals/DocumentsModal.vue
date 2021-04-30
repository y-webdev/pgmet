<template>
    <div v-if="!mobileDetect && data.length !== 0" class="modal fade" id="docs-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content border-0">
                <modal-header/>
                <div class="modal-body p-0">
                    <div class="iframe-modal-container">
                        <iframe :src="file"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ModalHeader from '@/components/modals/ModalHeader';
import { isMobile } from 'mobile-device-detect';
export default {
    props: ['data', 'file'],
    components: {
        ModalHeader
    },
    data() {
        return {
            mobileDetect: isMobile
        }
    }
}
</script>

<style scoped>

</style>
