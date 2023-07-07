import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faShoppingCart, faXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add([faShoppingCart, faXmark, faArrowLeft])

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
