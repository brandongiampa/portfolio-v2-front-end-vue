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
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGithub)
library.add(faLinkedin)
library.add(faCircleInfo)
library.add(faEye)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"