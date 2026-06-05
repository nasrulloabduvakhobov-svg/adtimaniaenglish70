/* MedEnglish70 service worker — offline app shell caching */
var CACHE = "medenglish70-v10";
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
  "./js/data/grammarTests.js",
  "./js/app.js",
  "./manifest.json",
  "./icon.svg"
];

self.addEventListener("install", function (e) {
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

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  // only handle same-origin requests; let external (telegram SDK) pass through
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); }).catch(function () {});
        return res;
      }).catch(function () {
        // offline fallback: return cached index for navigations
        if (req.mode === "navigate") return caches.match("./index.html");
      });
    })
  );
});
