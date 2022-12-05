import axios from "axios"

const portfolioWorksModule = {
    state: {
        defaultWork: {
            imgUrl: 'https://imgur.com/bjNRaaP.png',
            title: '',
            subtitle: '',
            infoUrl: '',
            siteUrl: '',
            githubUrl: '',
            technologies: '',
            features: '',
            hashtags: "",
            description: ""
        },
        works: []
    },
    getters: {
        works(state) {
            return state.works
        },
        defaultWork(state) {
            return state.defaultWork
        }
    },
    mutations: {
        setWorks(state, works) {
            state.works = works
        },
        setDefaultWork(state, work) {
            state.work = work
        }
    },
    actions: {
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
                axios.request( {
                    method: 'GET',
                    url: 'http://localhost:8000/api/works'
                })
                .then((response) => {
                    commit('setWorks', response.data.reverse())
                    console.log(this.getters.works)
                    resolve()
                })
            })
        }
    }
}

export default portfolioWorksModule