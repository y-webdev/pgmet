<template>
    <div v-if="autoloadContent.enable === 'enable'" class="modal fade" id="autoLoadModal" ref="autoLoadModal" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="modal-close-button" data-bs-dismiss="modal" aria-label="Затвори">
                        <span aria-hidden="true">
                          <i class="fas fa-times text-danger"></i>
                          <span class="ml-2 font-weight-light">Затвори</span>
                        </span>
                    </button>
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

export default {
    props: ['autoloadContent'],
    mounted() {
        if (this.autoloadContent.enable === 'enable') {
            new Modal(this.$refs.autoLoadModal).show()
        }
    }
}
</script>
