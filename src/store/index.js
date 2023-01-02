import { createStore } from 'vuex'
import aboutTextModule from './modules/AboutTextModule.js'
import portfolioWorksModule from './modules/PortfolioWorksModule.js'
import testimonialsModule from './modules/TestimonialsModule.js'

export default createStore({
  state: {
    API_URL: 'https://portfoliov2api.brandongiampa.host/api'
  },
  getters: {
    API_URL(state) {
      return state.API_URL
    }
  },
  modules: {
    aboutTextModule,
    portfolioWorksModule,
    testimonialsModule
  }
})
