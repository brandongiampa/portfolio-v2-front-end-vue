import axios from "axios"

const portfolioWorksModule = {
    state: {
        defaultWork: {
            img_url: 'https://imgur.com/bjNRaaP.png',
            name: '',
            subheader: '',
            info_url: '',
            site_url: '',
            github_url: '',
            technologies: '',
            features: '',
            hashtags: "",
            description: ""
        },
        works: [],
        inputtedName: null,
        selectedFeature: null,
        selectedTechnology: null,
        worksLoaded: false
    },
    getters: {
        works(state) {
            return state.works
        },
        defaultWork(state) {
            return state.defaultWork
        },
        inputtedName(state) {
            return state.inputtedName
        },
        selectedFeature(state) {
            return state.selectedFeature
        },
        selectedTechnology(state) {
            return state.selectedTechnology
        },
        hasSearchQuery(state) {
            return (state.inputtedName && state.selectedFeature && state.selectedTechnology) ? false : true
        },
        worksLoaded(state) {
            return state.worksLoaded
        }
    },
    mutations: {
        setWorks(state, works) {
            state.works = works
        },
        setDefaultWork(state, work) {
            state.defaultWork = work
        },
        setInputtedName(state, name) {
            state.inputtedName = name
        },
        setSelectedFeature(state, feature) {
            state.selectedFeature = feature
        },
        setSelectedTechnology(state, technology) {
            state.selectedTechnology = technology
        },
        setWorksLoaded(state, bool) {
            state.worksLoaded = bool
        }
    },
    actions: {
        setInputtedName({commit}, name) {
            commit('setInputtedName', name)
        },
        setSelectedFeature({commit}, feature) {
            commit('setSelectedFeature', feature)
        },
        setSelectedTechnology({commit}, technology) {
            commit('setSelectedTechnology', technology)
        },
        clearSearchQuery({commit}) {
            commit('setInputtedName', null)
            commit('setSelectedFeature', null)
            commit('setSelectedTechnology', null)
        },
        setWorks({commit}) {
            /**
             * Insert placeholders while API is called so page doesn't suddenly expand.
             */
            if (!this.getters.works.length) {
                const arr = []
                for (let i = 0; i < 8; i++) arr.push(this.getters.defaultWork)
                commit('setWorks', arr)
            }
            return new Promise((resolve) => {
                const API_URL = this.getters.API_URL
                if (!this.getters.worksLoaded) {
                    axios.request( {
                        method: 'GET',
                        url: `${API_URL}/works`
                    })
                    .then((response) => {
                        /**
                         * Get rid of spaces in hashtags.
                         */
                        for (let datum of response.data) {
                            datum.hashtags = datum.hashtags.split(" ").join("")
                        }
                        commit('setWorks', response.data.reverse())
                        commit('setWorksLoaded', true)
                        resolve()
                    })
                }
                else resolve()
            })
        }
    }
}

export default portfolioWorksModule