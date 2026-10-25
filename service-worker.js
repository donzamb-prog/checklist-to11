/*
=========================================================
checklist-to11
Copyright (c) 2026 Donizete Zambeli

Licenciado conforme os termos do arquivo LICENSE.

Repositório oficial:
https://github.com/donzamb-prog/checklist-to11

Desenvolvido por Donizete Zambeli
Projeto Checklist de Acidentes
checklist-to11
=========================================================
*/

const CACHE_NAME = 'checklist-to11-v9';
const ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'service-worker.js',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

// Instalação do Service Worker e armazenamento inicial
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Ativação e remoção de caches antigos
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

// Estratégia Network First com Fallback para Cache (Garante atualizações online e funcionamento offline)
self.addEventListener('fetch', (event) => {
  // Ignora requisições que não sejam GET (ex: envio de dados)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Se requisitar navegação de página e estiver offline
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
