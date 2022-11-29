<template>
    <section class="p-5">
        <div class="container">
            <h1 class="underlined mb-5">Works</h1>
            <div class="pt-4">
                <div class="row gx-5">
                    <div class="col col-md-6 col-lg-3"
                        v-for="(work, index) of works"
                        :key="'homepage-work-card-'+(index + 1)"
                    >
                        <div class="card">
                            <img :src="work.imgUrl" class="card-img-top" :alt="work.title">
                            <div class="card-body">
                                <h3 class="card-title text-center">{{ work.title }}</h3>
                                <p class="card-subtitle text-center" style="color: #495057;">
                                    <i>{{ work.subtitle }}</i>
                                </p>
                                <hr/>
                                <div class="py-1">
                                    <div class="row">
                                        <div class="col-4 text-center icon">
                                            <a style="color: #172125;" :href="work.siteUrl">
                                                <font-awesome-icon icon="fa-solid fa-eye" />
                                            </a>
                                        </div>
                                        <div class="col-4 text-center icon">
                                            <a style="color: #172125;" :href="work.infoUrl">
                                                <font-awesome-icon icon="fa-solid fa-circle-info" />
                                            </a>
                                        </div>
                                        <div class="col-4 text-center icon">
                                            <a style="color: #172125;" :href="work.githubUrl">
                                                <font-awesome-icon icon="fa-brands fa-github" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="btn btn-primary rounded-0 text-white mt-5" href="./portfolio">View All Works</a>  
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            works: [
                {
                    imgUrl: 'https://imgur.com/bjNRaaP.png',
                    title: 'Bitbuddy',
                    subtitle: 'Cryptocurrency Converter',
                    infoUrl: './works/bitbuddy',
                    siteUrl: 'https://brandongiampa.host/bitbuddy',
                    githubUrl: 'https://github.com'
                },
                {
                    imgUrl: 'https://imgur.com/e17vhC5.png',
                    title: 'Teachable',
                    subtitle: 'Educational WordPress Theme',
                    infoUrl: './works/teachable',
                    siteUrl: 'https://brandongiampa.host/teachable',
                    githubUrl: 'https://github.com'
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .card-body {
        border-top: 1px #33333333 solid;
       .icon a {
            text-decoration: none;
            font-size: 32px;
        }
    }
</style>
