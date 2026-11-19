const CACHE_NAME = 'historyweb-pwa-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './fundo.jpg',
  './icons/icon.svg',
  './icons/icon-maskable.svg',
  './pre-historia.json',
  './idade-antiga.json',
  './idade-medieval.json',
  './idade-moderna.json',
  './idade-contemporanea.json',
  './brasil.json',
  './atualidades.json',
  './direitos-humanos.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key === 'historico-pwa-v1' || (key.startsWith('historyweb-pwa-') && key !== CACHE_NAME))
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;

      try {
        const response = await fetch(request);
        if (response.ok && (url.pathname.endsWith('.json') || url.pathname.endsWith('.html'))) {
          cache.put(request, response.clone());
        }
        return response;
      } catch (error) {
        if (request.mode === 'navigate') {
          return (await cache.match('./index.html')) || Response.error();
        }
        return Response.error();
      }
    })
  );
});
