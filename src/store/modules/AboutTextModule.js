const aboutTextModule = {
    state: {
        aboutText: "<p>Greetings and salutations! My name is Brandon and I am a web developer/software engineer. My coding journey began in 2017, and my first formal client work in the industry began in 2019.I am currently living in Tulsa and my job is remote, but might be willing to relocate anywhere in the US for the right job."
    },
    getters: {
        aboutText(state) {
            return state.aboutText
        },
        aboutTextExcerpt(state) {
            const text = state.aboutText
            if (!text || text === '') return ''
            const textSplit = text.split(/<\/?p>/).filter((text)=> {return text !== '' })
            const firstParagraph = textSplit[0]
            const reconstructedParagraph = firstParagraph.split(' ').filter((word, index) => { return index < 50 }).join(' ')
            return `${reconstructedParagraph}...`
        }
    },
    mutations: {
        setAboutText(state, aboutText) {
            state.aboutText = aboutText
        }
    },
    actions: {
        setAboutText({commit}, aboutText) {
            commit('setAboutText', aboutText)
        }
    }
}

export default aboutTextModule