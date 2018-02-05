<template lang="html">
    <main id="main">
        <Hero/>
        <Intro/>
        <Jobs/>
        <Info/>
        <Social/>
    </main>
</template>

<script>
import Hero from './hero/Hero.vue'
import Intro from './intro/Intro.vue'
import Jobs from './jobs/Jobs.vue'
import Info from './info/Info.vue'
import Social from './social/Social.vue'

export default {
    components: {
        Hero, Intro, Jobs, Info, Social
    }
}
</script>

<style lang="css">
</style>
