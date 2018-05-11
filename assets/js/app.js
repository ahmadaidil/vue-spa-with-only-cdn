const NotFound = { template: '<p>Page not found</p>' }

const routes = {
  '/': Home,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    viewComponent: routes[window.location.pathname] || NotFound
  },
  render (h) { return h(this.viewComponent) }
})
