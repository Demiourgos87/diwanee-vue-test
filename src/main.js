// ----- Main app file

// ----- Path to main SCSS file
import css from './scss/style.scss'

// ----- Require modules here
// var navigation = require('./navigation/navigation.js');
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: "#diwanee-app",
    components: { App },
    template: "<App/>",
    render: n => n(App)
})
