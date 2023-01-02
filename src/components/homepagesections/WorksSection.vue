<template>
    <section class="p-5">
        <div class="container">
            <h1 class="underlined after mb-5">Works</h1>
            <div class="pt-4">
                <div class="row gx-5 gy-5 works-row">
                    <div 
                        v-for="(work, index) of works"
                        :key="'homepage-work-card-'+(index + 1)"
                        :class="index % 2 === 0 ? workLeftClasses : workRightClasses"
                        :id="'work-card-' + (index+1).toString()"
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
        },
        numberOfWorks() {
            return this.works.length
        }
    },
    components: {
        WorkCard
    },
    data() {
        return {
            workLeftClasses: 'col-12 col-md-6 work-left work',
            workRightClasses: 'col-12 col-md-6 work-right work'
        }
    },
    emits: [
        'setNumberOfWorks'
    ],
    mounted() {
        this.$emit('setNumberOfWorks', this.numberOfWorks)
    }
}
</script>

<style lang="scss" scoped>
    .work {
        opacity: 0;
        &-left {
            transform: translateX(-100px);
        }
        &-right {
            transform: translateX(100px);
        }
    }
</style>