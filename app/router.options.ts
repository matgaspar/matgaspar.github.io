import type { RouterConfig } from '@nuxt/schema'

// Smooth-scroll to in-page anchors — on menu clicks AND on initial load/refresh
// when the URL already contains a hash. `top` offsets the sticky header.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
}
