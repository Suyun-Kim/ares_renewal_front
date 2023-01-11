import {createApp} from 'vue'
import {router} from './router'
import Store from "./store";
import BootstrapVue from 'bootstrap-vue-3'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import vuetify from './plugins/vuetify'
import CKEditor from '@ckeditor/ckeditor5-vue'
import axios from 'axios'
import store from './store'
const app = createApp(App).use(router).use(store)

app.config.globalProperties.$axios = axios
app.use(BootstrapVue)
app.use(CKEditor)
app.use(router)
app.use(Store)
app.use(vuetify)

app.mount('#app')