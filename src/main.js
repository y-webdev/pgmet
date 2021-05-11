import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import 'lightbox2/dist/css/lightbox.css'
import { isMobile } from 'mobile-device-detect';
import {parseBBCode} from './composable/parseBBCode'
import {blankModalSrc, resizeImage, popoverTrigger, tooltipTrigger, fileSizeErrorModal} from "./composable/functions";
import _ from 'lodash'

createApp(App)
    .mixin({
        data() {
          return {
              imagePath: process.env.VUE_APP_IMAGE_PATH,
              docPath: process.env.VUE_APP_DOCS_PATH,
              isMobile: isMobile
          }
        },
        methods: {
            parseBBCode,
            blankModalSrc,
            fileSizeErrorModal
        },
        updated() {
            resizeImage()
            popoverTrigger()
            tooltipTrigger()
            lightbox.option({
                albumLabel: 'Снимка %1 от %2',
                alwaysShowNavOnTouchDevices: true,
                disableScrolling: true,
                fadeDuration: 300,
                imageFadeDuration: 300,
                resizeDuration: 100,
                wrapAround: true

            })

        }
    })
    .use(router)
    .mount('#app')
