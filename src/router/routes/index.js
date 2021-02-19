import navbar from './navbar'
import redirects from './redirects'
import items from './items'

const routes = [
  ...redirects,
  ...navbar,
  ...items
]

export default routes
