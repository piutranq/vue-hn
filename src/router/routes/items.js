import PostView from '@/views/PostView'
import UserView from '@/views/UserView'

const items = [
  {
    path: '/post:/id',
    name: 'post',
    component: PostView,
    category: 'items'
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
    category: 'items'
  }
]

export default items
