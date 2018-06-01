var CACHE_NAME = 'sw-ex';
var CACHE_VERSION = 10;

var filesToCache = [
    '/berlin-clock-app/msa/',
    '/berlin-clock-app/msa/index.html',
    '/berlin-clock-app/msa/css/styles.css',
    '/berlin-clock-app/msa/app.js',
    '/berlin-clock-app/msa/images/msa/msa-192x192.png',
    '/berlin-clock-app/msa/images/background-couple@4x.jpg',
    '/berlin-clock-app/msa/images/msa/msa-512x512.png',
];

self.oninstall = function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME + '-v' + CACHE_VERSION).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
};

self.onactivate = function (event) {
    var currentCacheName = CACHE_NAME + '-v' + CACHE_VERSION;
    caches.keys().then(function (cacheNames) {
        return Promise.all(
            cacheNames.map(function (cacheName) {
                if (cacheName.indexOf(CACHE_NAME) == -1) {
                    return;
                }

                if (cacheName != currentCacheName) {
                    console.log('delete cahceName=', cacheName);
                    return caches.delete(cacheName);
                }
            })
        );
    });
};

self.onfetch = function (event) {
    var request = event.request;
    event.respondWith(
        caches.match(request).then(function (response) {
            if (response) {
                return response;
            }

            return fetch(request).then(function (response) {
                var responseToCache = response.clone();
                caches.open(CACHE_NAME + '-v' + CACHE_VERSION).then(
                    function (cache) {
                        cache.put(request, responseToCache).catch(function (err) {
                            console.warn(request.url + ': ' + err.message);
                        });
                    });
                return response;
            });
        })
    );
};


// Communicate via MessageChannel.
self.addEventListener('message', function (event) {
    console.log(`Received message from main thread: ${event.data}`);
    event.ports[0].postMessage(`Got message! Sending direct message back - "${event.data}"`);
});

// Broadcast via postMessage.
function sendMessage(message) {
    self.clients.matchAll().then(function (clients) {
        clients.map(function (client) {
            return client.postMessage(message);
        })
    });
}


