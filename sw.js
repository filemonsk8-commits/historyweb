self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('historico-pwa').then((cache) => {
      return cache.addAll([
        'index.html',
        'fundo.jpg',
        'pre-historia.json',
        'idade-antiga.json',
        'idade-medieval.json',
        'idade-moderna.json',
        'idade-contemporanea.json',
        'brasil.json',
        'atualidades.json',
        'direitos-humanos.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
