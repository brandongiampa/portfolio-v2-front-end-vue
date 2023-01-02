<template>
    <div class="card" :key="`work-card-${index}`">
        <router-link class="nav-link" :to="`/works/${work.name}`">
            <img :src="work.img_url" class="card-img-top" :alt="work.title" />
        </router-link>
        
        <div class="card-body">
            <h3 class="card-name text-center">{{ work.name }}</h3>
            <p class="card-subheader text-center" style="color: #495057;">
                <i>{{ work.subheader }}</i>
            </p>
            <hr/>
            <div class="py-1">
                <div class="row">
                    <div class="col-4 text-center icon">
                        <a style="color: #172125;" :href="work.site_url">
                            <font-awesome-icon icon="fa-solid fa-eye" />
                        </a>
                    </div>
                    <div class="col-4 text-center icon">
                        <router-link class="nav-link" :to="`/works/${work.name}`">
                            <font-awesome-icon icon="fa-solid fa-circle-info" />
                        </router-link>
                    </div>
                    <div class="col-4 text-center icon">
                        <a style="color: #172125;" :href="work.github_url">
                            <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            work: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
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
