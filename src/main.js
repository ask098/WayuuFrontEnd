import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})
new Vue({
  el: '#home',
  render: h => h(Home)
})