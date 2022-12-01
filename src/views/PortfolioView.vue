<template>
    <div class="container py-5">
        <h1 class="underlined mb-5">Portfolio</h1>
        <div class="pt-4">
            <div class="row gx-5">
                <div v-for="(work, index) in works" class="col col-md-6 col-lg-3 pb-5" :key="`work-card-div-${index}`">
                    <work-card :work="work" :index="(index-1)" />
                </div>
            </div>
        </div>
        <portfolio-paginator :number-of-pages="numberOfPages" @set-current-index="setCurrentIndex" />
    </div>
</template>

<script>
    const WORKS_PER_PAGE = 8
    import PortfolioPaginator from '../components/portfolioviewcomponents/PortfolioPaginator.vue'
    export default {
        computed: {
            works() {
                return this.$store.getters.works.slice(this.offset, this.offset + WORKS_PER_PAGE)
            },
            offset() {
                return (this.currentIndex * WORKS_PER_PAGE) - WORKS_PER_PAGE
            },
            numberOfPages() {
                return Math.ceil(this.$store.getters.works.length / WORKS_PER_PAGE)
            },
            worksToShow() {
                return this.$store.getters.works.slice(this.offset, this.offset + WORKS_PER_PAGE)
            }
        },
        methods: {
            setCurrentIndex: function(index) {
                this.currentIndex = index
                console.log(this.currentIndex)
            }
        },
        data() {
            return {
                currentIndex: 1
            }
        },
        components: {
            PortfolioPaginator
        }
    }
</script>
