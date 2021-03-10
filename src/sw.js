import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheOnly, NetworkOnly, StaleWhileRevalidate }
  from 'workbox-strategies'

import hnapiURL from '@/lib/hnapi/url'

self.skipWaiting()
clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('[SW] Service Worker has been installed')
})

// Dynamic cache routings for hnapi request
const routeDefault = ({ url, request }) =>
  url.origin === hnapiURL.origin &&
  request.headers.get('X-Caching-Strategy') === 'undefined'

const routeCacheOnly = ({ url, request }) =>
  url.origin === hnapiURL.origin &&
  request.headers.get('X-Caching-Strategy') === 'cacheOnly'

const routeNetworkOnly = ({ url, request }) =>
  url.origin === hnapiURL.origin &&
  request.headers.get('X-Caching-Strategy') === 'networkOnly'

registerRoute(routeDefault, new StaleWhileRevalidate(), 'GET')
registerRoute(routeCacheOnly, new CacheOnly(), 'GET')
registerRoute(routeNetworkOnly, new NetworkOnly(), 'GET')
