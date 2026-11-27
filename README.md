# Bukan Cuma Aku — GitHub Pages

| Halaman | URL | Isi |
|---|---|---|
| Kirim cerita (publik) | `/submission/` | Halaman statis. Kiriman & cek status dikirim ke Apps Script proyek PUBLIK lewat `doPost`. |
| Dashboard admin (PWA) | `/admin/` | Aplikasi admin statis + login password. Data diambil dari `doPost` proyek ADMIN dengan token sesi. |

Tidak ada data kiriman di repo ini. URL API ada di halaman (publik), tapi tanpa password admin API admin tidak mengembalikan data apa pun.

`submission/index.html` dan `admin/index.html` dibuat otomatis (`tools/build-submission.js`, `tools/build-admin.js`) dari kode proyek publik — jangan diedit langsung.
