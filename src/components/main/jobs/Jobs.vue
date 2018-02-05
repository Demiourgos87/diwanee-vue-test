<template lang="html">
    <section class="b-jobs">

        <div class="c-section-title--wrap l">
            <div class="c-section-title">
                <h4>otvorene pozicije</h4>
                <h2>poslovi</h2>
            </div>

            <p class="b-jobs__desc">
                We are always looking for motivated, multi-talented, and organized people to join our diverse team.
            </p>
        </div>

        <Job/>

        <div class="c-btn--wrap">
            <button class="c-btn c-btn--gray" type="button" name="button">ucitaj jos pozicija</button>
        </div>

    </section>
</template>

<script>
import Job from './inc/Job.vue'

export default {
    components: {
        Job
    }
}
</script>

<style lang="css">
</style>
