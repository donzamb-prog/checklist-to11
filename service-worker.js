const CACHE_NAME = 'checklist-to11-v6'; // Atualizado para v6
const ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'service-worker.js',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

// O restante do código (install, activate, fetch) permanece igualzinho!

// Instalação do Service Worker e armazenamento dos arquivos em cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) {
            return caches.delete(k);
          }
          return null;
        })
      );
    })
  );
  self.clients.claim();
});

// Intercepta as requisições para rodar offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
