import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: { title: 'About Us' }
    },
    {
      path: '/faculty',
      name: 'faculty',
      component: () => import('../views/Faculty.vue'),
      meta: { title: 'Faculty & Staff' }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
      meta: { title: 'News & Events' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: { title: 'Contact Us' }
    },
    // Program Routes
    {
      path: '/programs/bsit',
      name: 'bsit',
      component: () => import('../views/programs/BSIT.vue'),
      meta: { title: 'BSIT Program' }
    },
    {
      path: '/programs/bscs',
      name: 'bscs',
      component: () => import('../views/programs/BSCS.vue'),
      meta: { title: 'BSCS Program' }
    },
    {
      path: '/programs/bsdmia',
      name: 'bsdmia',
      component: () => import('../views/programs/BSDMIA.vue'),
      meta: { title: 'BSDMIA Program' }
    },
    {
      path: '/programs/blis',
      name: 'blis',
      component: () => import('../views/programs/BLIS.vue'),
      meta: { title: 'BLIS Program' }
    },
  ],
  // Technical Requirement #6: Smooth scrolling behavior
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

// Dynamic document title update on page navigation
router.afterEach((to) => {
  const pageTitle = to.meta.title as string | undefined
  if (pageTitle) {
    document.title = `${pageTitle} | College of Computer Studies`
  } else {
    document.title = 'College of Computer Studies'
  }
})

export default router