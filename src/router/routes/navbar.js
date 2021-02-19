import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'

const navvar = [
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    display: 'News',
    category: 'navbar'
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    display: 'Ask',
    category: 'navbar'
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    display: 'Jobs',
    category: 'navbar'
  }
]

export default navvar
