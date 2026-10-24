const CACHE_NAME = 'electroapp-v1';
const urlsToCache = [
  './',
  './index.html',
  './inventario.html',
  './proyectos.html',
  './nuevo_componente.html',
  './herramientas.html'
];

// Instalar y guardar en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Interceptar peticiones para cargar desde caché si es necesario
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});