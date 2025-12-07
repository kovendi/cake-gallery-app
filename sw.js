self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("v1").then(cache => {
      return cache.addAll([
        "/cake-gallery-app/",
        "/cake-gallery-app/index.html",
        "/cake-gallery-app/manifest.json",
        "/cake-gallery-app/logo-192.png",
        "/cake-gallery-app/logo-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});