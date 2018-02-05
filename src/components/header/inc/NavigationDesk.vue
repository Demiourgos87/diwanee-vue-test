<template lang="html">
    <nav v-if="visible" class="c-navigation__desk">
        <ul>
            <li><a href="#">o nama</a></li>
            <li><a href="#">poslovi</a></li>
            <li><a href="#">kontakt</a></li>
        </ul>
    </nav>
</template>

<script>
var windowWidth = window.outerWidth;

export default {
    data: function() {
        return {
            visible: (windowWidth > 1024) ? true : false
        }
    }
}
</script>

<style lang="css">
</style>
