import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import NewMovie from '@/components/newMovie'
import MyFilm from '@/components/myFilm'
import More from '@/components/com/more'
import Detail from '@/components/detail'
import Cast from '@/components/cast'
import Search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
//  	主页电影
      path: '/newMovie',
      name: 'newMovie',
      component: NewMovie
    },
    {
      path: '/myFilm',
      name: 'myFilm',
      component: MyFilm
    },
    {
    	//点击更多
      path: '/more/:id',
      name: 'more',
      component: More
    },
    {
    	//点击更多
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
    	//演员
      path: '/cast/:id',
      name: 'cast',
      component: Cast
    },
    {
    	//搜索
      path: '/search',
      name: 'search',
      component: Search
    },
  ]
})
