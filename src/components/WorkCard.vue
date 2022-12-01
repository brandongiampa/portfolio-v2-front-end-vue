<template>
    <div class="card" :key="`work-card-${index}`">
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
