const CACHE_NAME = 'quiz-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/style.css',
    '/app.js',
    '/icon.png'
];

// Installer le service worker et mettre en cache les fichiers
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

// Intercepter les requêtes
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
