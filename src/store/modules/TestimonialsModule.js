import axios from "axios"

const testimonialsModule = {
    state: {
        testimonials: [
            {
                author: "Author One",
                company: "Company One",
                text: "Loading testimonial one..."
            },
            {
                author: "Author Two",
                company: "Company Two",
                text: "Loading testimonial two..."
            },
            {
                author: "Author Three",
                company: "Company Three",
                text: "Loading testimonial three..."
            },
            {
                author: "Author Four",
                company: "Company Four",
                text: "Loading testimonial four..."
            },
            {
                author: "Author Five",
                company: "Company Five",
                text: "Loading testimonial five..."
            },
            {
                author: "Author Six",
                company: "Company Six",
                text: "Loading testimonial six..."
            },
        ],
        testimonialsLoaded: false
    },
    getters: {
        testimonials(state) {
            return state.testimonials
        },
        testimonialsLoaded(state) {
            return state.testimonialsLoaded
        }
    },
    mutations: {
        setTestimonials(state, testimonialsArray) {
            state.testimonials = testimonialsArray
        },
        setTestimonialsLoaded(state, bool) {
            state.testimonialsLoaded = bool
        }
    },
    actions: {
        setTestimonials({commit}) {
            return new Promise((resolve) => {
                const API_URL = this.getters.API_URL
                axios.request( {
                    method: 'GET',
                    url: `${API_URL}/testimonials`
                })
                .then((response) => {
                    const arr = []
                    for (let testimonial of response.data) {
                        if (testimonial.approved) arr.push(testimonial)
                    }
                    commit('setTestimonials', arr)
                    commit('setTestimonialsLoaded', true)
                    resolve()
                })
            })
        },
        setTestimonialsLoaded({commit}, bool) {
            commit('setTestimonials', bool)
        }
    }
}

export default testimonialsModule