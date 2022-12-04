<template>
    <section class="p-5">
        <div class="container">
            <h1 class="underlined mb-5">Works</h1>
            <div class="pt-4">
                <div class="row gx-5 gy-5">
                    <div class="col-12 col-md-6"
                        v-for="(work, index) of works"
                        :key="'homepage-work-card-'+(index + 1)"
                    >
                        <work-card :work="work" :index="index" />
                    </div>
                </div>
            </div>
            <a class="btn btn-primary rounded-0 text-white mt-5" href="./portfolio">View All Works</a>  
        </div>
    </section>
</template>

<script>
import WorkCard from '../WorkCard.vue'
export default {
    computed: {
        works() {
            return this.$store.getters.works.slice(0, 4)
        }
    },
    components: {
        WorkCard
    }
}
</script>