import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies'

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

const routeCacheFirst = ({ url, request }) =>
  url.origin === hnapiURL.origin &&
  request.headers.get('X-Caching-Strategy') === 'cacheFirst'

const routeNetworkFirst = ({ url, request }) =>
  url.origin === hnapiURL.origin &&
  request.headers.get('X-Caching-Strategy') === 'networkFirst'

registerRoute(routeDefault, new StaleWhileRevalidate(), 'GET')
registerRoute(routeCacheFirst, new CacheFirst(), 'GET')
registerRoute(routeNetworkFirst, new NetworkFirst(), 'GET')
