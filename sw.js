/* MedEnglish70 service worker — network-first (auto-update on refresh, offline fallback) */
var CACHE = "medenglish70-v22";
var ASSETS = [
  "./",
  "./index.html",
  "./css/styles.css",
  "./js/i18n.js",
  "./js/data/grammar.js",
  "./js/data/vocabulary.js",
  "./js/data/reading.js",
  "./js/data/listening.js",
  "./js/data/writing.js",
  "./js/data/speaking.js",
  "./js/data/donate.js",
  "./js/data/fundamentals.js",
  "./js/data/grammarTests.js",
  "./js/app.js",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", function (e) {
  // Activate the new worker immediately, without waiting for old tabs to close.
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).catch(function () {}));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) { if (k !== CACHE) return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Allow the page to tell a waiting worker to take over right away.
self.addEventListener("message", function (e) {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  // only handle same-origin requests; let external (telegram SDK) pass through
  if (url.origin !== self.location.origin) return;

  // Network-first: always try to fetch the freshest version, fall back to cache when offline.
  e.respondWith(
    fetch(req).then(function (res) {
      // Cache a fresh copy for offline use.
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); }).catch(function () {});
      return res;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        if (cached) return cached;
        // offline fallback: return cached index for navigations
        if (req.mode === "navigate") return caches.match("./index.html");
      });
    })
  );
});
