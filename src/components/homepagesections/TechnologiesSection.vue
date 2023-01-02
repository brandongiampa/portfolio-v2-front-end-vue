<template>
    <section class="p-5">
        <div class="container">
            <h1 class="underlined after mb-5">Technologies</h1>
            <br/>
            <div class="pt-4" id="technologies-bg">
                <div class="row m-0">
                    <div 
                        class="col-6 col-md-3 d-flex align-items-center justify-content-center p-4 p-md-5" 
                        v-for="(technology, index) of technologies" :key="'technology-link-'+(index+1)"
                    >
                        <router-link to="/portfolio" @click="setSelectedTechnology(technology.name)">
                            <img 
                                :src="technology.imgUrl" 
                                :alt="technology.name" 
                            />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            technologies: [
                {
                    name: 'HTML',
                    imgUrl: 'https://imgur.com/c9No9lu.jpg'
                },
                {
                    name: 'CSS',
                    imgUrl: 'https://imgur.com/i0FG3q6.jpg'
                },
                {
                    name: 'Javascript',
                    imgUrl: 'https://imgur.com/iCY0vYC.jpg'
                },
                {
                    name: 'PHP',
                    imgUrl: 'https://imgur.com/meIaloQ.jpg'
                },
                {
                    name: 'mySQL',
                    imgUrl: 'https://imgur.com/ttMRZIY.jpg'
                },
                {
                    name: 'Vue',
                    imgUrl: 'https://imgur.com/OhUmHlh.jpg'
                },
                {
                    name: 'WordPress',
                    imgUrl: 'https://imgur.com/Iy1qdHF.jpg'
                },
                {
                    name: 'Bootstrap',
                    imgUrl: 'https://imgur.com/kuG2BAE.jpg'
                },
                {
                    name: 'Git',
                    imgUrl: 'https://imgur.com/hdRarZd.jpg'
                },
            ]
        }
    },
    methods: {
        setSelectedTechnology(technology) {
            this.$store.dispatch('setSelectedTechnology', technology)
            console.log(this.$store.getters.selectedTechnology)
            this.$router.push('./portfolio')
        }
    }
}
</script>

<style lang="scss" scoped>
    #technologies-bg {
        background-color: #e9ecef;
    }
    img {
        transform: scale(0);
        opacity: 0;
        height: 120px;
        @media (max-width: 575.99px) {
            height: 65px;
        }
    }
</style>
