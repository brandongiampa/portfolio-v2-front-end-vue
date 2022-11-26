import "./app.scss"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub)
library.add(faLinkedin)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"