import Vue from 'vue'
import App from './App.vue'
import Book from './book.vue'
import Taskbar from './Taskbar.vue'

Vue.component('app-book', Book)
Vue.component('app-task', Taskbar)

new Vue({
  el: '#app',
  render: h => h(App)
})
