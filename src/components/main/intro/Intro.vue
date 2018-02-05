<template lang="html">
    <section class="b-intro l">

        <article v-for="object in objects" class="o-main">
            <figure class="o-main__img">
                <img :src='getImg(object.img)' :alt="object.imgAlt"/>
            </figure>
            <div class="o-main__content">
                <h3 class="o-main__title">{{ object.title }}</h3>
                <p class="o-main__desc">{{ object.desc }}</p>
            </div>
        </article>

    </section>
</template>

<script>
export default {
    data() {
        return {
            objects: [
                {
                    img: 'development.png',
                    imgAlt: 'development',
                    title: 'development',
                    desc: 'Front-end Developers play a critical role in most projects at Code and Theory. They are actively involved throughout the project lifecycle, often times starting with rapid prototypes early in the design phase.'
                },
                {
                    img: 'design.png',
                    imgAlt: 'design',
                    title: 'web & ui design',
                    desc: 'Front-end Developers play a critical role in most projects at Code and Theory. They are actively involved throughout the project lifecycle, often times starting with rapid prototypes early in the design phase.'
                },
                {
                    img: 'teamwork.png',
                    imgAlt: 'teamwork',
                    title: 'work in team',
                    desc: 'Front-end Developers play a critical role in most projects at Code and Theory. They are actively involved throughout the project lifecycle, often times starting with rapid prototypes early in the design phase.'
                }
            ]
        }
    },
    methods: {
        getImg(img) {
            return require('../../../assets/img/' + img)
        }
    }
}
</script>

<style lang="css">
</style>
