
const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

const mapTileBaseUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const maxZoomLevel = 18;

// Generate the URLs for the OpenStreetMap tiles based on zoom levels
for (let zoom = 0; zoom <= maxZoomLevel; zoom++) {
    const tilesPerZoom = Math.pow(2, zoom);
    for (let x = 0; x < tilesPerZoom; x++) {
      for (let y = 0; y < tilesPerZoom; y++) {
        const mapTileUrl = mapTileBaseUrl
          .replace("{s}", "a")
          .replace("{z}", zoom)
          .replace("{x}", x)
          .replace("{y}", y);
        urlsToCache.push(mapTileUrl);
      }
    }
  }

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener("fetch", (event) => {
    // Separate handling for map tile requests
    if (event.request.url.startsWith(mapTileBaseUrl)) {
      event.respondWith(
        fetch(event.request).then((response) => {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        }).catch(() => caches.match(event.request))
      );
    } else {
      // Handle other requests using cache first, fallback to network
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
  
          return fetch(event.request)
            .then((response) => {
              const clonedResponse = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clonedResponse);
              });
              return response;
            })
            .catch(() => caches.match("offline.html"));
        })
      );
    }
  });
  
// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});