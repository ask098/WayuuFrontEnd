import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Navigation from './Navigation.vue'
import About from './About.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})
new Vue({
  el: '#home',
  render: h => h(Home)
})
new Vue({
  el: '#navigation',
  render: h => h(Navigation)
})

new Vue({
  el: '#about',
  render: h => h(About)
})