import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Navigation from './Navigation.vue'
import About from './About.vue'
import Footer from './Footer.vue'
import Management from './Management.vue'


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

new Vue({
  el: '#footer',
  render: h => h(Footer)
})

new Vue({
  el: '#management',
  render: h => h(Management)
})