import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add([faShoppingCart, faXmark])

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
