const CACHE_NAME = "adippsi-pwa-v4";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icons/adippsi-192.png",
  "./assets/icons/adippsi-512.png",
  "./assets/icons/adippsi-1024.png",
  "./assets/icons/adippsi-maskable.png",
];

const OFFLINE_MEDIA = [
  "./assets/backgrounds/background1.mp4",
  "./assets/backgrounds/background2.mp4",
  "./assets/backgrounds/background3.mp4",
  "./assets/backgrounds/background4.mp4",
  "./assets/backgrounds/background5.mp4",
  "./assets/backgrounds/background6.mp4",
  "./assets/backgrounds/background7.mp4",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(CORE_ASSETS);
      await Promise.allSettled(OFFLINE_MEDIA.map((asset) => cache.add(asset)));
    }),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) {
    return;
  }

  if (event.request.headers.has("range") && isOfflineMedia(url)) {
    event.respondWith(handleRangeRequest(event.request));
    return;
  }

  if (event.request.mode === "navigate") {
    event.respondWith(networkFirstPage(event.request));
    return;
  }

  event.respondWith(cacheFirst(event.request));
});

async function networkFirstPage(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (_error) {
    return caches.match("./index.html");
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });

  if (cached) {
    return cached;
  }

  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }

  return response;
}

async function handleRangeRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request, { ignoreSearch: true });

  if (!cached) {
    return fetch(request);
  }

  const range = request.headers.get("range");
  const match = /^bytes=(\d*)-(\d*)$/.exec(range || "");

  if (!match) {
    return cached;
  }

  const blob = await cached.blob();
  const size = blob.size;
  let start = match[1] ? Number(match[1]) : 0;
  let end = match[2] ? Number(match[2]) : size - 1;

  if (!match[1] && match[2]) {
    const suffixLength = Number(match[2]);
    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  }

  if (start >= size || end >= size || start > end) {
    return new Response(null, {
      status: 416,
      statusText: "Range Not Satisfiable",
      headers: {
        "Content-Range": `bytes */${size}`,
      },
    });
  }

  const contentType = cached.headers.get("content-type") || "video/mp4";
  const sliced = blob.slice(start, end + 1, contentType);

  return new Response(sliced, {
    status: 206,
    statusText: "Partial Content",
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Length": String(sliced.size),
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Content-Type": contentType,
    },
  });
}

function isOfflineMedia(url) {
  return url.pathname.includes("/assets/backgrounds/") && url.pathname.endsWith(".mp4");
}

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      const existing = clients.find((client) => "focus" in client);
      if (existing) {
        return existing.focus();
      }

      return self.clients.openWindow("./index.html");
    }),
  );
});
