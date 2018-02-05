<template lang="html">
    <nav v-if="trigger" class="c-navigation__mob">
        <ul>
            <li><a href="#">o nama</a></li>
            <li><a href="#">poslovi</a></li>
            <li><a href="#">kontakt</a></li>
        </ul>

        <div class="c-social">
            <span class="c-social__message">pratite nas</span>
            <div class="c-social__follow">
                <img class="twitter" src="../../../assets/img/twitter-small.png" alt="">
                <img class="fb" src="../../../assets/img/fb-small.png" alt="">
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: [
        "trigger"
    ]
}
</script>

<style lang="css">
</style>
