import Vue from 'vue'
import App from './App.vue'
import Book from './book.vue'

Vue.component('app-book', Book)

new Vue({
  el: '#app',
  render: h => h(App)
})
