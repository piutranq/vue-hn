import PostView from '@/views/PostView'
import UserView from '@/views/UserView'

const items = [
  {
    path: '/post',
    name: 'post',
    component: PostView,
    category: 'items'
  },
  {
    path: '/user',
    name: '/user',
    component: UserView,
    category: 'items'
  }
]

export default items
