// Self-cleaning Service Worker: cleans old cache and unregisters
self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.clients.matchAll())
      .then((clients) => {
        clients.forEach((client) => client.navigate(client.url));
        return self.registration.unregister();
      })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request));
});
