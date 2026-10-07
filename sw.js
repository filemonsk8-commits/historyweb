const CACHE_NAME = 'historico-pwa-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'fundo.jpg',
  'pre-historia.json',
  'idade-antiga.json',
  'idade-medieval.json',
  'idade-moderna.json',
  'idade-contemporanea.json',
  'brasil.json',
  'atualidades.json',
  'direitos-humanos.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(err => console.log("Cache parcial:", err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }).catch(() => {
      return caches.match('index.html');
    })
  );
});
