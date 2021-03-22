const redirects = [
  {
    path: '/',
    redirect: '/news',
    category: 'redirects'
  },
  {
    path: '/submitted/:id',
    redirect: '/submitted/:id/0',
    category: 'redirects'
  },

  {
    path: '/news',
    redirect: '/news/0',
    category: 'redirects'
  },
  {
    path: '/ask',
    redirect: '/ask/0',
    category: 'redirects'
  },
  {
    path: '/jobs',
    redirect: '/jobs/0',
    category: 'redirects'
  }
]

export default redirects
