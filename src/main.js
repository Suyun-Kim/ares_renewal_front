import {createApp} from 'vue'
import {router} from './router'
import Store from "./store";
import BootstrapVue from 'bootstrap-vue-3'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import CKEditor from '@ckeditor/ckeditor5-vue'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.use(BootstrapVue)
app.use(CKEditor)
app.use(router)
app.use(Store)

app.mount('#app')

