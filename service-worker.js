const cacheName = 'dice-roller-cache-v1';
const filesToCache = [
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
  // Include other files (CSS, JS) if needed.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
