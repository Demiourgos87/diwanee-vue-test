<template lang="html">
    <div class="b-jobs--wrap">
        <div v-for="job in jobs" class="b-jobs__job">
            <div class="l">
                <div class="b-jobs__job--wrap">
                    <h4 class="b-jobs__job__title">{{ job.title }}</h4>
                    <p class="b-jobs__job__desc">{{ job.desc }}</p>
                    <div class="b-jobs__job__tags">
                        <span v-for="tag in job.tags">{{ tag }}</span>
                    </div>
                </div>

                <button class="c-btn" type="button" name="button">prijavi se</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                    title: 'front end developer',
                    desc: 'Trazimo Front End Developera sa odlicnim poznavanjem i iskustvom vise od godinu dana u Drupalu.',
                    tags: ['#HTML', '#CSS', '#JavaScript']

                },
                {
                    title: 'project manager',
                    desc: 'Trazimo Project Managera sa odlicnim organizacionim sposobnostima i iskustvom vodjenja digital projekata...',
                    tags: ['#HTML', '#CSS', '#Balsamiq', '#UXpin']
                },
                {
                    title: 'ui/ux designer',
                    desc: 'Ako si kreativan i volis da radis u timu, posedujes visegodisnje iskustvo iz oblasti digital dizajna, ux/ui...',
                    tags: ['#Sketch', '#AdobeXD', '#Photoshop', '#Balsamiq']
                }
            ]
        }
    }
}
</script>

<style lang="css">
</style>
