<template>
    <section class="p-5">
        <div class="container">
            <h1 class="underlined mb-5">Technologies</h1>
            <br/>
            <div class="pt-4" id="technologies-bg">
                <div class="row m-0">
                    <div 
                        class="col-3 d-flex align-items-center justify-content-center p-5" 
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
                    imgUrl: 'https://imgur.com/hzgllqZ.png'
                },
                {
                    name: 'CSS',
                    imgUrl: 'https://imgur.com/tFctgth.png'
                },
                {
                    name: 'Javascript',
                    imgUrl: 'https://imgur.com/MVGRrVh.png'
                },
                {
                    name: 'PHP',
                    imgUrl: 'https://imgur.com/WQDVLq4.png'
                },
                {
                    name: 'WordPress',
                    imgUrl: 'https://imgur.com/hy2bfkZ.png'
                },
                {
                    name: 'Vue',
                    imgUrl: 'https://imgur.com/rq7uYft.png'
                }
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
        height: 120px;
        @media (max-width: 575.99px) {
            height: 65px;
        }
    }
</style>
