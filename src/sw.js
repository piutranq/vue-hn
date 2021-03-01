import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'

self.skipWaiting()
clientsClaim()

precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('[SW] Service Worker has been installed')
})

registerRoute(
  ({ url }) => (url.origin === 'https://hacker-news.firebaseio.com'),
  new CacheFirst(),
  'GET'
)
