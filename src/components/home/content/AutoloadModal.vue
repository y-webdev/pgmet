<template>
    <div v-if="autoloadContent.enable === 'enable'" class="modal fade" id="autoLoadModal" ref="autoLoadModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <modal-button/>
                </div>
                <div class="modal-body p-0">
                    <div :class="autoloadContent.padding">{{ autoloadContent.description }}</div>
                    <a class="btn d-block" :class="autoloadContent.btn_color" :href="autoloadContent.btn_link"
                       target="_new">{{ autoloadContent.btn_text }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {Modal} from 'bootstrap'
import ModalButton from '@/components/modals/ModalButton';

export default {
    props: ['autoloadContent'],
    components: {
      ModalButton
    },
    mounted() {
        if (this.autoloadContent.enable === 'enable') {
            new Modal(this.$refs.autoLoadModal).show()
        }
    }
}
</script>
