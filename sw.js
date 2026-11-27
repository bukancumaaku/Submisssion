// Service worker lama (versi PWA admin di root) — sekarang menghapus dirinya sendiri.
// Aplikasi admin pindah ke ./admin/ dengan service worker-nya sendiri.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('bca-admin-v1')).map((k) => caches.delete(k)));
    await self.registration.unregister();
  })());
});
