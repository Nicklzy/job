import Vue from 'vue'
import Router from 'vue-router'
import info from 'components/info/info'
import work from 'components/work/work'
import skill from 'components/skill/skill'
import contact from 'components/contact/contact'

Vue.use(Router)

const routes = [{
  path: '/',
  component: info
}, {
  path: '/info',
  component: info
}, {
  path: '/work',
  component: work
}, {
  path: '/skill',
  component: skill
}, {
  path: '/contact',
  component: contact
}]

const router = new Router({
  linkActiveClass: 'active',
  routes
})

// router.push('info')
export default router

