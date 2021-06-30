// Two caches need: static and dynamic 
// Static cache (for static assets like css, js, html, images)
const CACHE_NAME = 'static-cache-v2';
// dynamic cache for api routes
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
    './',
    './index.html',
    './assets/css/style.css',
    './assets/js/db.js',
    './assets/js/index.js',
    "./manifest.webmanifest",
    './assets/images/icons/icon-192x192.jpg',
    './assets/images/icons/icon-512x512.jpg',
    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://cdn.jsdelivr.net/npm/chart.js@2.8.0',

];

// Step 1 - install
self.addEventListener('install', function (evt) {
    // Pre-cache all static assets
    // We wait until the cache is open to do this.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Successfully pre-cached files');
            cache.addAll(FILES_TO_CACHE);
        }) 
    );

    // Step 2 - wait (skip) - tell the browser to activate this service worker immediately once it has finished installing
    self.skipWaiting();
});

// Step 3 - activate
self.addEventListener('activate', function (evt) {
    // We wait until the cache keys have been retrieved 
    evt.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    // IF the data does not match data in the static or dynamic caches, we get rid of it since it is old
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('Removing old cache data', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );

    self.clients.claim();
});

// Fetch
self.addEventListener('fetch', function (evt) {
    // If the fetch request involves an api call (meaning it contains the string '/api/')
    if (evt.request.url.includes('/api/')) {
        evt.respondWith(
            // open() method to grab the cache for dynamic assets (DATA_CACHE_NAME)
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                    .then(response => {
                        // If the response was successful, clone it and store it in the cache, saving the url. Can only read body response once, so we clone it to make additional copies. This allows us to replicate the fetch when user is offline.
                        if (response.status === 200) {
                            cache.put(evt.request.url, response.clone());
                        }

                        return response;
                    })
                    .catch(err => {
                        // If the network request failed, try to get it from the cache (attempting to grab the fetch from the cache).
                        return cache.match(evt.request);
                    });
            }).catch(err => console.log(err))
        );

        return;
    }

    // If the fetch request is not for an API call (does not have the string '/api/'), serve the static assets 
    evt.respondWith(
        // open() method to grab the cache for static assetss (CACHE_NAME)
        caches.open(CACHE_NAME).then(cache => {
            // return the match within this cache 
            return cache.match(evt.request).then(response => {
                return response || fetch(evt.request);
            });
        })
    );
});
// When this works correctly, service worker will go from dedundant to running in DevTools