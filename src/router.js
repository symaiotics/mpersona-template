import { createRouter, createWebHistory } from 'vue-router'
import Chat from '@/pages/Chat.vue'
import Help from './pages/Help.vue'
import Home from '@/pages/Home.vue'
import Join from '@/pages/Join.vue'
import Login from '@/pages/Login.vue'
import PageNotFound from './pages/PageNotFound.vue'
const routerHistory = createWebHistory()

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  history: routerHistory,
  routes: [
    {
      path: '/chat/:personaId?',
      name: 'chat',
      component: Chat,
      props: true,
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})

export default router
