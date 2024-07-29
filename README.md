# Wilwa-Tikta Rent

Wilwa-Tikta Rent adalah aplikasi penyewaan online yang memungkinkan pengguna untuk menyewa berbagai barang, seperti properti, kendaraan, peralatan, pakaian, aksesori, teknologi, elektronik, dan layanan. Aplikasi ini menyediakan fitur untuk mengelola penyewaan, ulasan dan penilaian, pembayaran, serta notifikasi.

## Fitur Utama

- **Autentikasi Pengguna:** Sistem login dan registrasi dengan proteksi JWT.
- **CRUD Item:** Pengelolaan item yang tersedia untuk disewa.
- **Manajemen Pesanan:** Pengelolaan penyewaan oleh pengguna.
- **Pembayaran dan Pengembalian Dana:** Integrasi dengan Stripe untuk transaksi pembayaran.
- **Sistem Ulasan dan Penilaian:** Pengguna dapat memberikan ulasan dan penilaian untuk item yang disewa.
- **Notifikasi:** Pemberitahuan untuk pengguna tentang aktivitas terkait penyewaan.
- **Keamanan:** Menggunakan Helmet untuk melindungi aplikasi dari serangan web umum.
- **Dokumentasi API:** Menggunakan Swagger untuk dokumentasi API.

## Persyaratan

- Node.js (versi terbaru disarankan)
- MongoDB (penggunaan MongoDB Atlas disarankan untuk penyimpanan online)
- Stripe Account (untuk integrasi pembayaran)

## Instalasi dan Menjalankan Proyek

1. **Clone Repository**

   ```bash
   git clone https://github.com/ebetap/wilwa-tikta-rent.git
   cd wilwa-tikta-rent
   ```

2. **Instal Dependensi**

   ```bash
   npm install
   ```

3. **Konfigurasi Environment Variables**

   Buat file `.env` di root proyek dan tambahkan konfigurasi berikut:

   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. **Menjalankan Server**

   ```bash
   npm start
   ```

   Server akan berjalan di `http://localhost:5000`.

5. **Mengakses Dokumentasi API**

   Dokumentasi API tersedia di `http://localhost:5000/api-docs`.

## Struktur Proyek

```bash
src/
├── config/           # Konfigurasi database dan lainnya
├── controllers/      # Logika kontrol untuk rute API
├── models/           # Definisi model untuk MongoDB
├── routes/           # Definisi rute API
├── services/         # Layanan untuk notifikasi dan lainnya
├── middleware/       # Middleware aplikasi
└── utils/            # Utility functions
```

## Kontribusi

Kami menerima kontribusi dari siapa pun yang ingin meningkatkan aplikasi ini. Untuk kontribusi, silakan buat pull request atau buka isu baru di repository ini.

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## Kontak

Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan ragu untuk menghubungi kami di [support@wilwatikta-rent.com](mailto:support@wilwatikta-rent.com).
