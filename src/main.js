import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faShoppingCart)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
