# Portograph

> Template portofolio studio fotografi dan sinematografi pernikahan berbasis Bootstrap 5 dengan integrasi feed Instagram dan formulir pemesanan WhatsApp.

[![Bootstrap 5.1.3](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Typed.js](https://img.shields.io/badge/Animation-Typed.js-FF6F00?style=flat-square)](https://mattboldt.com/demos/typed-js/)
[![HTML5 / CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Modern_Web-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id-10B981?style=flat-square)](https://widifirmaan.web.id/bootstrap-portograph-template/)

---

## Live URL

- **Production URL**: [https://widifirmaan.web.id/bootstrap-portograph-template/](https://widifirmaan.web.id/bootstrap-portograph-template/)

---

## Screenshot

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage & Animasi Judul Typed.js**<br>![Hero](screenshots/Hero%20Desktop.png) | **Hero Stage & Animasi Judul Typed.js**<br>![Hero](screenshots/Hero%20Mobile.png) |
| **Profil Studio & Filosofi Karya**<br>![Tentang Studio](screenshots/Tentang%20Studio%20Desktop.png) | **Profil Studio & Filosofi Karya**<br>![Tentang Studio](screenshots/Tentang%20Studio%20Mobile.png) |
| **Grid Galeri Portofolio Instagram**<br>![Galeri Portofolio](screenshots/Galeri%20Portofolio%20Desktop.png) | **Grid Galeri Portofolio Instagram**<br>![Galeri Portofolio](screenshots/Galeri%20Portofolio%20Mobile.png) |
| **Katalog Paket Layanan & Unduh PDF**<br>![Paket Layanan](screenshots/Paket%20Layanan%20Desktop.png) | **Katalog Paket Layanan & Unduh PDF**<br>![Paket Layanan](screenshots/Paket%20Layanan%20Mobile.png) |
| **Ulasan Klien & Testimoni Pasangan**<br>![Testimoni](screenshots/Testimoni%20Desktop.png) | **Ulasan Klien & Testimoni Pasangan**<br>![Testimoni](screenshots/Testimoni%20Mobile.png) |
| **Formulir Pemesanan Langsung WhatsApp**<br>![Form Booking](screenshots/Form%20Booking%20Desktop.png) | **Formulir Pemesanan Langsung WhatsApp**<br>![Form Booking](screenshots/Form%20Booking%20Mobile.png) |

---

## Fitur

- **Animasi Headline Mesin Tik**: Teks spesialisasi studio pada section hero berganti secara dinamis (`Wedding Photography`, `Wedding Cinematic`, `Live Streaming`, `Video Shooting`) didukung oleh Typed.js.
- **Feed Portofolio Instagram Terintegrasi**: Galeri visual otomatis via widget EmbedSocial (`#portfolio`) yang menampilkan dokumentasi foto dan video terbaru dari Instagram studio.
- **Katalog Brosur Paket Lengkap**: Tampilan visual 5 lembar brosur paket pernikahan dan prewedding yang dilengkapi tombol unduhan file PDF brosur cetak (`paket_compressed.pdf`).
- **Formulir Pemesanan WhatsApp Instan**: Form reservasi jadwal tanggal dan pemilihan paket pada section kontak yang otomatis menyusun draf pesan WhatsApp resmi ke nomor admin (*Click-to-Chat*).
- **Navigasi Sidebar Responsif**: Menu ikon di sisi kiri dengan pelacak posisi scroll (*scroll-spy*), drawer menu mobile tersembunyi, dan tombol pintas kembali ke atas (*back-to-top*).
- **Animasi Halus Elemen (AOS)**: Transisi pemunculan kartu dan section berbasis Animate On Scroll (AOS) yang halus saat pengguna menggulir halaman.
- **Informasi Kontak Terpadu**: Tautan langsung ke kanal media sosial (YouTube, Instagram `@aruna_daydream`, WhatsApp hotline) dan alamat studio fisik.

---

## Tech Stack

| Kategori | Teknologi | Deskripsi / Peran |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.1.3` | Grid layout mobile-first, styling responsif, dan utilitas tata letak |
| **Ikonografi** | Bootstrap Icons, Boxicons, Iconify | Koleksi ikon vektor untuk menu navigasi dan tautan media sosial |
| **Animasi & Interaktivitas** | Typed.js `2.0.12`, AOS `2.3.4` | Animasi teks mesin tik pada hero dan efek scroll-triggered |
| **Integrasi Media Sosial** | Widget EmbedSocial | Rendering feed dokumentasi foto Instagram secara live |
| **Komunikasi Langsung** | WhatsApp Click-to-Chat API | Pembuatan tautan chat pemesanan otomatis terformat |
| **Tipografi & Desain** | Google Fonts (Open Sans, Raleway, Poppins) | Tipografi editorial modern dengan stylesheet custom |

---

## Panduan Setup & Menjalankan Lokal

### 1. Prasyarat Sistem

- Browser web modern (Google Chrome, Firefox, Safari, Microsoft Edge).
- Python 3 (`python3`) atau Node.js (`npx serve`) untuk menyajikan file statis.
- Database: **Tidak membutuhkan database** (aplikasi statis client-side).

### 2. Environment Variables

Tidak ada environment variable khusus yang dibutuhkan.

### 3. Instalasi & Menjalankan Server Lokal

```bash
# 1. Clone repository
git clone https://github.com/widifirmaan/bootstrap-portograph-template.git
cd bootstrap-portograph-template

# 2. Jalankan static server lokal
# Menggunakan Python 3:
python3 -m http.server 8080

# Atau menggunakan npx serve (jika ada Node.js):
npx serve .
```

Buka [http://localhost:8080](http://localhost:8080) di browser Anda.

### 4. Panduan Uji Manual (Testing Checklist)

| No | Fitur | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Animasi Teks Hero** | Buka `http://localhost:8080`, amati teks judul | Efek mesin tik Typed.js berganti secara berkala dengan lancar |
| 2 | **Sidebar & Scroll-spy** | Scroll ke bawah melewati section Tentang Kami | Penanda aktif pada sidebar navigasi berpindah otomatis mengikuti posisi layar |
| 3 | **Unduhan Brosur PDF** | Scroll ke section Paket Layanan, klik link unduh brosur | File PDF `paket_compressed.pdf` berhasil diunduh |
| 4 | **Form Booking WhatsApp** | Isi nama klien, pilih paket prewedding, klik pesan | Browser membuka WhatsApp dengan draft teks pemesanan terformat rapi |
| 5 | **Galeri Portofolio** | Periksa kontainer section Portofolio | Foto dokumentasi pernikahan dari feed Instagram tampil teratur |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
