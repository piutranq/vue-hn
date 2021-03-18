import Stories from '@/views/Stories'

const navvar = [
  {
    path: '/news',
    name: 'newstories',
    component: Stories,
    display: 'News',
    category: 'navbar'
  },
  {
    path: '/ask',
    name: 'askstories',
    component: Stories,
    display: 'Ask',
    category: 'navbar'
  },
  {
    path: '/jobs',
    name: 'jobstories',
    component: Stories,
    display: 'Jobs',
    category: 'navbar'
  }
]

export default navvar
