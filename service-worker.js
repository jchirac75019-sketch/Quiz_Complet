self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    // Ajoute du caching ici si besoin
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // Gérer la récupération du cache ici si besoin
});
