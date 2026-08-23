// 最小のService Worker（PWAインストール要件を満たすためのシェルキャッシュのみ。
// アップロード自体はオンライン必須＝オフラインキューは持たない）
const CACHE = 'receipt-pwa-v2';
const SHELL = ['.', 'index.html', 'manifest.webmanifest', 'icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
});

// 送信（POST）は素通し。シェルはネット優先・失敗時キャッシュ
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
