import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Child1 from '@/components/Child1'
import Child2 from '@/components/Child2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      components: {
        default: HelloWorld,
        child1: Child1,
        child2: Child2
      }
    }
  ]
})
