<template>
    <section class="p-5">
        <div class="container">
            <h1 class="underlined mb-5">Testimonials</h1>
            <div class="py-3" v-for="(testimonial, index) of testimonials" :key="'homepage-testimonial-'+(index+1)">
                <p style="color: #343a40;" class="mb-1 testimonial-meta"><b>{{testimonial.author}}</b> from <a :href="testimonial.companyUrl">{{testimonial.company}}</a> says:</p>
                <p class="mt-0 text-black testimonial-text">{{testimonial.text}}</p>
            </div>
            <a class="btn btn-primary rounded-0 text-white mt-3" href="./leave-testimonial">Leave Brandon a Testimonial</a>  
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                    author: 'Ari Fine',
                    company: 'roofgenius.com',
                    companyUrl: 'https://roofgenius.com',
                    text: "Brandon was awesome to work with! He's super knowledgeable, was responsive and easy to communicate with, and took a really proactive approach to helping me solve the issues I was having with my Wordpress blog. He went above and beyond on this project - Brandon pointed out and took care of a few issues that I hadn't even noticed and that were outside the scope of our arrangement, which I really appreciated. I'm planning to enlist Brandon's help with future projects, and would absolutely recommend working with him."
                },
                {
                    author: 'Gluten Free Beer Brian',
                    company: 'GFB Supply',
                    companyUrl: 'https://gfbsupply.com',
                    text: "Brandon Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro distinctio itaque eos voluptatum pariatur fuga fugiat, nemo nam dicta excepturi adipisci possimus cupiditate laudantium? Voluptatum ad officia ipsum, incidunt est dolores, nihil praesentium at quod harum numquam recusandae! Itaque nostrum voluptatem ex sed!"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .testimonial-meta {
        font-size: 1.1em !important;
    }
    .testimonial-text {
        font-size: 1.3em !important;
    }
</style>
