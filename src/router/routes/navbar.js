import Stories from '@/views/Stories'

const navvar = [
  {
    path: '/news/:page',
    name: 'newstories',
    component: Stories,
    display: 'News',
    category: 'navbar'
  },
  {
    path: '/ask/:page',
    name: 'askstories',
    component: Stories,
    display: 'Ask',
    category: 'navbar'
  },
  {
    path: '/jobs/:page',
    name: 'jobstories',
    component: Stories,
    display: 'Jobs',
    category: 'navbar'
  }
]

export default navvar
