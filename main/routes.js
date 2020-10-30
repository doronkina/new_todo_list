export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PHome
  },
  {
    path: '/board/:boardId',
    exact: true,
    component: components.PBoard
  }
]
