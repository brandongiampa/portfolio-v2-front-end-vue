import { createStore } from 'vuex'
import aboutTextModule from './modules/AboutTextModule.js'
import portfolioWorksModule from './modules/PortfolioWorksModule.js'
import testimonialsModule from './modules/TestimonialsModule.js'

export default createStore({
  state: {
    API_URL: 'https://portfoliov2api.brandongiampa.host/api',
    apiDoneLoading: false,
  },
  getters: {
    API_URL(state) {
      return state.API_URL
    },
    apiDoneLoading(state) {
      return state.apiDoneLoading
    },
  },
  mutations: {
    setApiDoneLoading(state, bool) {
      state.apiDoneLoading = bool
    },
  },
  actions: {
    setApiDoneLoading({commit}, bool) {
      commit('setApiDoneLoading', bool)
    },
  },
  modules: {
    aboutTextModule,
    portfolioWorksModule,
    testimonialsModule
  }
})
