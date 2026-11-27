# Bukan Cuma Aku — GitHub Pages

| Halaman | URL | Isi |
|---|---|---|
| Kirim cerita (publik) | `/submission/` | Halaman statis. Kiriman & cek status dikirim ke Apps Script proyek PUBLIK lewat `doPost`. |
| Dashboard admin (PWA) | `/admin/` | Aplikasi pembungkus (manifest, service worker, ikon). Dashboard dimuat dari Apps Script proyek ADMIN di dalam iframe dan hanya bisa dibuka pemilik akun. |

Tidak ada data kiriman di repo ini. URL admin juga tidak disimpan di repo: dimasukkan sekali di aplikasi dan disimpan di perangkat itu saja.

`submission/index.html` dibuat otomatis dari kode proyek publik dengan `node tools/build-submission.js <URL /exec publik>` — jangan diedit langsung.
