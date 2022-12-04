import axios from "axios"

const portfolioWorksModule = {
    state: {
        defaultWork: {
            imgUrl: 'https://imgur.com/bjNRaaP.png',
            title: 'Bitbuddy',
            subtitle: 'Cryptocurrency Converter',
            infoUrl: './works/bitbuddy',
            siteUrl: 'https://brandongiampa.host/bitbuddy',
            githubUrl: 'https://github.com',
            technologies: 'Vue,HTML,CSS,JS,Axios,Bootstrap 5,chart.js',
            features: 'Cryptocurrency/Fiat Conversion,Two-Way Conversion,Crypto Information,Sparkline Charting',
            hashtags: "Bitcoin,Cryptocurrency,CurrencyConverter",
            description: '<p>Lorem ipsum dolor sit amet. Aut quis nihil ut dolores voluptatem et quisquam quia et necessitatibus autem ut provident mollitia nam mollitia corporis aut maxime enim. In harum galisum qui tempora quos ut quos sint et porro voluptatem 33 vitae optio non consequatur cumque ab laboriosam dolor. Qui placeat excepturi ex cupiditate nihil qui repudiandae vero et optio minus ut velit eligendi et velit asperiores. Non quod aspernatur vel exercitationem consequatur At consectetur unde vel molestias dolor. Et distinctio enim non nihil quos aut ipsum fuga sed quidem recusandae id quaerat illo et maiores minima eos inventore doloribus! Ea enim quibusdam ex illum officia qui commodi maxime aut corrupti earum et libero fugit quo molestiae error? Sed Quis vero ut nisi harum sed consectetur aspernatur eos asperiores aliquid ea officiis explicabo. Sit deserunt animi aut iste consequatur et explicabo doloremque et autem quod. In mollitia corporis non ducimus fugiat et sapiente odio id eaque dolore. </p><p>Ut consectetur dolor non voluptatem corrupti ea culpa velit est sapiente accusantium id nisi impedit qui minima amet. Qui porro temporibus ut exercitationem reiciendis ut repudiandae impedit sed neque perferendis ea odit dolores non dolor iusto id quod iusto. Rem reprehenderit quia est placeat laudantium a consequatur doloremque. Et assumenda blanditiis aut dolor aliquid eum reprehenderit voluptatem non dolorum earum in voluptatem esse non harum iure! Sit aperiam earum est nulla laudantium ad pariatur provident aut autem dicta sed dolor voluptas aut quae soluta et repudiandae numquam! Ab excepturi ratione non voluptates dolore ad officia nostrum qui veniam nulla. A odit soluta ut voluptatem veniam sed dignissimos similique a praesentium culpa ut quam fugit et molestias atque eum sint asperiores. Et consequatur quos eos itaque facere ut doloremque nobis et quia praesentium ut possimus nostrum. 33 doloremque voluptates et tempora nemo quo autem voluptas qui facere quas qui enim atque ex fugiat ipsa. </p>'
        },
        works: [],
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
        setWorks({commit}, works) {
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