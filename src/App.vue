<template>
    <div id="diwanee-app">
        <Header/>
        <Main/>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Main from './components/main/Main.vue'
import Footer from './components/footer/Footer.vue'

export default {
    name: "App",
    components: {
        Header, Main, Footer
    }
}
</script>

<!-- CSS (or SCSS; change lang to lang="scss") for individual component, if needed -->
<style lang="css">
</style>
