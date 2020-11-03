import { filters } from '@dmapper/auth/isomorphic'

export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PHome,
    filters: [filters.isLoggedIn]
  },
  {
    path: '/board/:boardId',
    exact: true,
    component: components.PBoard,
    filters: [filters.isLoggedIn]
  }
]
