const CACHE_NAME = 'historyweb-pwa-v9';
const MAP_CACHE_NAME = 'historyweb-maps-v2';
const MAX_CACHED_MAPS = 20;

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './fundo.jpg',
  './icons/icon.svg',
  './icons/icon-maskable.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './pre-historia.json',
  './idade-antiga.json',
  './idade-medieval.json',
  './idade-moderna.json',
  './idade-contemporanea.json',
  './brasil.json',
  './atualidades.json',
  './direitos-humanos.json',
  './mapas-historicos.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const requests = ASSETS_TO_CACHE.map((asset) =>
        new Request(new URL(asset, self.registration.scope), { cache: 'reload' })
      );
      return cache.addAll(requests);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) =>
            key === 'historico-pwa-v1' ||
            key === 'historyweb-maps-v1' ||
            (key.startsWith('historyweb-pwa-') && key !== CACHE_NAME)
          )
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

async function trimMapCache(cache) {
  const keys = await cache.keys();
  const excess = keys.length - MAX_CACHED_MAPS;
  if (excess > 0) {
    await Promise.all(keys.slice(0, excess).map((key) => cache.delete(key)));
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET') return;

  // Entrega primeiro a cópia guardada e não deixa uma falha de cache bloquear a imagem online.
  if (
    url.hostname === 'commons.wikimedia.org' &&
    url.pathname.startsWith('/wiki/Special:FilePath/')
  ) {
    event.respondWith((async () => {
      const cache = await caches.open(MAP_CACHE_NAME);
      const cached = await cache.match(request, { ignoreVary: true });
      if (cached) return cached;

      let response;
      try {
        response = await fetch(request, { cache: 'no-store' });
      } catch (error) {
        return (await cache.match(request, { ignoreVary: true })) || Response.error();
      }

      if (response.ok || response.type === 'opaque') {
        try {
          await cache.put(request, response.clone());
          await trimMapCache(cache);
        } catch (cacheError) {
          console.warn('A imagem foi carregada, mas não pôde ser guardada para uso offline:', cacheError);
        }
      }
      return response;
    })());
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Navegação online prioriza a versão publicada; offline usa a última cópia válida.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(new Request(request, { cache: 'no-store' })).then(async (response) => {
        if (response.ok) {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(new URL('./index.html', self.registration.scope), copy);
        }
        return response;
      }).catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match('./index.html')) || Response.error();
      })
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request);
      if (cached) return cached;

      try {
        const response = await fetch(request);
        if (response.ok && (url.pathname.endsWith('.json') || url.pathname.endsWith('.html'))) {
          await cache.put(request, response.clone());
        }
        return response;
      } catch (error) {
        return Response.error();
      }
    })
  );
});
