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
        ]
    },
    getters: {
        testimonials(state) {
            return state.testimonials
        }
    },
    mutations: {
        setTestimonials(state, testimonialsArray) {
            state.testimonials = testimonialsArray
        }
    },
    actions: {
        setTestimonials({commit}) {
            return new Promise((resolve) => {
                axios.request( {
                    method: 'GET',
                    url: 'http://localhost:8000/api/testimonials'
                })
                .then((response) => {
                    const arr = []
                    for (let testimonial of response.data) {
                        if (testimonial.approved) arr.push(testimonial)
                    }
                    commit('setTestimonials', arr)
                    console.log(this.getters.testimonials)
                    resolve()
                })
            })
        }
    }
}

export default testimonialsModule