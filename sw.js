var CACHE_NAME = 'restaurant-cache';

self.addEventListener('install',function(event){
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache){
      /*add all the urls to be cached */
        return cache.addAll([   
           '/',
           '/restaurant.html',
            '/css/styles.css',
            '/js/dbhelper.js',
            '/js/main.js',
             '/js/restaurant_info.js'
        ]);
      })
    );
  });

/* get the response from cache if present*/
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response){
        if(response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });