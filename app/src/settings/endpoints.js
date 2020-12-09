export const BACKEND = {
  baseRoute: process.env.REACT_APP_BACKEND,
  product: {
    list: {
      route: '/products/',
      method: 'get'
    },
    create: {
      route: '/products/',
      method: 'post'
    },
    update: {
      route: (id) => `/products/${id}/`,
      method: 'put'
    },
    delete: {
      route: (id) => `/products/${id}/`,
      method: 'delete'
    },
    getOne: {
      route: (id) => `/products/${id}/`,
      method: 'get'
    }
  }
}