import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheOnly, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies'

self.skipWaiting()
clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('[SW] Service Worker has been installed')
})

// Dynamic cache routings for hnapi request
const baseURL = 'https://hacker-news.firebaseio.com'

const routeDefault = ({ url }) => {
  return (url.origin === baseURL)
}

const routeCacheOnly = ({ url, request }) => {
  const cacheOnlyMode =
    request.headers.get('X-Caching-Strategy') === 'cacheOnly'
  return (url.origin === baseURL) && cacheOnlyMode
}

const routeNetworkOnly = ({ url, request }) => {
  const networkOnlyMode =
  request.headers.get('X-Caching-Strategy') === 'networkOnly'
  return (url.origin === baseURL) && networkOnlyMode
}

registerRoute(routeDefault, new StaleWhileRevalidate(), 'SET')
registerRoute(routeCacheOnly, new CacheOnly(), 'SET')
registerRoute(routeNetworkOnly, new NetworkOnly(), 'SET')
