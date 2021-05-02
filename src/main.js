import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import lightbox from 'lightbox2/dist/js/lightbox-plus-jquery.js'
import 'lightbox2/dist/css/lightbox.css'
import {parseBBCode} from './composable/parseBBCode'
import {blankModalSrc, resizeImage} from "./composable/functions";


createApp(App)
    .mixin({
        data() {
          return {
              imagePath: process.env.VUE_APP_IMAGE_PATH,
              docPath: process.env.VUE_APP_DOCS_PATH
          }
        },
        methods: {
            parseBBCode,
            blankModalSrc
        },
        mounted() {
            resizeImage()
            lightbox.option({
                albumLabel: 'Снимка %1 от %2'
            })
        }
    })
    .use(router)
    .mount('#app')
