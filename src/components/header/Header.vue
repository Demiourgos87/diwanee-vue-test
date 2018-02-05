<template>
    <div class="b-header--wrap">
        <header class="b-header">
            <figure class="b-header__logo">
                <img src="../../assets/img/logo.png" alt="Diwanee Serbia">
            </figure>

            <div v-on:click="trigger=!trigger" class="b-header__burger">
                <span class="b-header__burger-line"></span>
                <span class="b-header__burger-line"></span>
                <span class="b-header__burger-line"></span>
            </div>

            <NavigationDesk/>
        </header>

        <NavigationMob :trigger="trigger"/>
    </div>
</template>

<script>
import NavigationDesk from './inc/NavigationDesk.vue'
import NavigationMob from './inc/NavigationMob.vue'

export default {
    components: {
        NavigationDesk, NavigationMob
    },
    data() {
        return {
            trigger: false
        }
    }
}
</script>

<style lang="css">
</style>
