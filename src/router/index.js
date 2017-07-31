import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NewMovie from '@/components/newMovie'
import MyFilm from '@/components/myFilm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/newMovie',
      name: 'newMovie',
      component: NewMovie
    },
    {
      path: '/myFilm',
      name: 'myFilm',
      component: MyFilm
    },
  ]
})
