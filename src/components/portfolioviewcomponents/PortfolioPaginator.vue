<template>
    <div class="d-flex align-items-center justify-content-center py-4">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <span v-if="pageLink1 === currentIndex" class="page-link inactive font-small">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    </span>
                    <span v-if="pageLink1 !== currentIndex" class="page-link font-small" @click="decrementCurrentIndex">
                        <font-awesome-icon icon="fa-solid fa-chevron-left" />
                    </span>
                </li>
                <li class="page-item">
                    <span v-if="pageLink1 === currentIndex" class="page-link inactive">{{pageLink1}}</span>
                    <span v-if="pageLink1 !== currentIndex" class="page-link" @click="setCurrentIndex(pageLink1)">{{pageLink1}}</span>
                </li>
                <li class="page-item" v-if="numberOfPages>1">
                    <span v-if="pageLink2 === currentIndex" class="page-link inactive">{{pageLink2}}</span>
                    <span v-if="pageLink2 !== currentIndex" class="page-link" @click="setCurrentIndex(pageLink2)">{{pageLink2}}</span>
                </li>
                <li class="page-item" v-if="numberOfPages>2">
                    <span v-if="pageLink3 === currentIndex" class="page-link inactive">{{pageLink3}}</span>
                    <span v-if="pageLink3 !== currentIndex" class="page-link" @click="setCurrentIndex(pageLink3)">{{pageLink3}}</span>
                </li>
                <li class="page-item">
                    <span v-if="pageLink3 === currentIndex" class="page-link inactive font-small">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </span>
                    <span v-if="pageLink3 !== currentIndex" class="page-link font-small" @click="incrementCurrentIndex">
                        <font-awesome-icon icon="fa-solid fa-chevron-right" />
                    </span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        pageLink1() {
            if (this.currentIndex <= 2) return 1
            if (this.currentIndex === this.numberOfPages) return this.currentIndex - 2
            return this.currentIndex - 1
        },
        pageLink2() {
            if (this.currentIndex === 1) return 2
            if (this.currentIndex === this.numberOfPages) return this.currentIndex - 1
            return this.currentIndex
        },
        pageLink3() {
            if (this.currentIndex === 1) return 3
            if (this.currentIndex === this.numberOfPages) return this.currentIndex
            return this.currentIndex + 1
        }
    },
    data() {
        return {
            currentIndex: 1
        }
    },
    methods: {
        setCurrentIndex: function(index) {
            this.currentIndex = index
            this.$emit('setCurrentIndex', this.currentIndex)
        },
        incrementCurrentIndex: function() {
            this.setCurrentIndex(Math.min(this.currentIndex+1, this.numberOfPages))
        },
        decrementCurrentIndex: function() {
            this.setCurrentIndex(Math.max(1, this.currentIndex-1))
        }
    },
    props: {
        numberOfPages: {
            type: Number,
            required: true
        }
    },
    emits: ['setCurrentIndex']
}
</script>

<style lang="scss">
    .page-link.inactive {
        color: #FF710077;
        &:hover {
            background-color: #fff;
        }
    }
    .page-link {
        &:hover {
            cursor: pointer;
        }
        &.inactive:hover {
            cursor: default;
        }
    }
</style>