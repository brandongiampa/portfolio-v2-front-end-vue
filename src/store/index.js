import { createStore } from 'vuex'
import aboutTextModule from './modules/AboutTextModule.js'
import portfolioWorksModule from './modules/PortfolioWorksModule.js'
import testimonialsModule from './modules/TestimonialsModule.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    aboutTextModule,
    portfolioWorksModule,
    testimonialsModule
  }
})
