import PostView from '@/views/PostView'
import UserView from '@/views/UserView'
import Submitted from '@/views/Submitted'

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
  },
  {
    path: '/submitted/:id/:page',
    name: 'submitted',
    component: Submitted,
    category: 'items'
  }
]

export default items
