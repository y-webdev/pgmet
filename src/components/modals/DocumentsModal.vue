<template>
    <div v-if="!mobileDetect" class="modal fade" id="docs-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content border-0">
                <modal-header/>
                <div class="modal-body p-0">
                    <div class="iframe-modal-container">
                        <iframe id="doc-modal" src=""></iframe>
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
    props: ['file'],
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
