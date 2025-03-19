const CACHE_NAME = "file-cache-v1";
const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/app_icon.png",
    "/app_icon2.png",
    "https://docs.google.com/spreadsheets/d/1tG1ftpq4Z6PhtdnHkpGvIh_PoRwJIHvRzUHfVi8pDHA/gviz/tq?tqx=out:csv"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
