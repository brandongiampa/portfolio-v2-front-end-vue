<template>
    <section class="p-5">
        <div class="container">
            <h1 class="underlined after mb-5">About</h1>
            <p>
                {{ text }}
                <router-link class="text-primary" to="/about">
                    learn more
                </router-link>
            </p>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        text() {
            return this.$store.getters.aboutTextExcerpt
        }
    }
}
</script>