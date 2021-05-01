import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'lightbox2/dist/js/lightbox-plus-jquery.js'
import 'lightbox2/dist/css/lightbox.css'

createApp(App)
    .use(router)
    .mount('#app')
