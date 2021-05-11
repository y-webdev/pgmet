<template>
    <div v-if="!isMobile" class="modal fade" id="docs-modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
export default {
    props: ['file'],
    components: {
        ModalHeader
    }
}
</script>
