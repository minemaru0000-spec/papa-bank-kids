self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('fetch', (e) => {
  // 通信は直接GASへ通す
});
