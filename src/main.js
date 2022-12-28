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
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons'
import WorkCard from './components/WorkCard.vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import axios from 'axios'
import VueAxios from 'vue-axios'

gsap.registerPlugin(ScrollTrigger)

/* add icons to the library */
library.add(faGithub)
library.add(faLinkedin)
library.add(faCircleInfo)
library.add(faEye)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faSearchPlus)
library.add(faSearchMinus)

createApp(App).component('work-card', WorkCard).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).use(VueAxios, axios).use(gsap, ScrollTrigger).mount('#app')

import "bootstrap/dist/js/bootstrap.js"