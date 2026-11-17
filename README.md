# Portograph

> Responsive Bootstrap 5 template for wedding photography, videography, and creative studio showcases.

Portograph is a responsive Bootstrap 5 web template designed for photography and videography studios. It features a hero section with Typed.js typewriter animations, an integrated EmbedSocial Instagram portfolio feed, service catalogs across wedding package tiers with downloadable PDF brochures, and a WhatsApp booking inquiry form.

[![Bootstrap 5.1.3](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Typed.js](https://img.shields.io/badge/Animation-Typed.js-FF6F00?style=flat-square)](https://mattboldt.com/demos/typed-js/)
[![HTML5 / CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Modern_Web-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/)

---

## Showcase

### 1. Studio Stage, Philosophy & Works (`#hero`, `#about`, `#portfolio`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Hero Stage with Typed.js Headline**<br>![Portograph Hero Stage Desktop](screenshots/Portograph%20Hero%20Stage%20Desktop.png) | **Hero Stage with Typed.js Headline**<br>![Portograph Hero Stage Mobile](screenshots/Portograph%20Hero%20Stage%20Mobile.png) |
| **Studio Philosophy & About Section**<br>![Portograph Studio About Desktop](screenshots/Portograph%20Studio%20About%20Desktop.png) | **Studio Philosophy & About Section**<br>![Portograph Studio About Mobile](screenshots/Portograph%20Studio%20About%20Mobile.png) |
| **Instagram Portfolio Gallery Grid**<br>![Portograph Portfolio Gallery Desktop](screenshots/Portograph%20Portfolio%20Gallery%20Desktop.png) | **Instagram Portfolio Gallery Grid**<br>![Portograph Portfolio Gallery Mobile](screenshots/Portograph%20Portfolio%20Gallery%20Mobile.png) |

### 2. Pricing Packages, Client Reviews & Booking (`#services`, `#testimonials`, `#contact`)

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Service Packages & PDF Brochure Catalog**<br>![Portograph Pricing Packages Desktop](screenshots/Portograph%20Pricing%20Packages%20Desktop.png) | **Service Packages & PDF Brochure Catalog**<br>![Portograph Pricing Packages Mobile](screenshots/Portograph%20Pricing%20Packages%20Mobile.png) |
| **Client Testimonials & Reviews**<br>![Portograph Client Testimonials Desktop](screenshots/Portograph%20Client%20Testimonials%20Desktop.png) | **Client Testimonials & Reviews**<br>![Portograph Client Testimonials Mobile](screenshots/Portograph%20Client%20Testimonials%20Mobile.png) |
| **WhatsApp Direct Booking Inquiry Form**<br>![Portograph WhatsApp Booking Form Desktop](screenshots/Portograph%20WhatsApp%20Booking%20Form%20Desktop.png) | **WhatsApp Direct Booking Inquiry Form**<br>![Portograph WhatsApp Booking Form Mobile](screenshots/Portograph%20WhatsApp%20Booking%20Form%20Mobile.png) |
| **Studio Location Map & Contact Information**<br>![Portograph Location & Footer Desktop](screenshots/Portograph%20Location%20&%20Footer%20Desktop.png) | **Studio Location Map & Contact Information**<br>![Portograph Location & Footer Mobile](screenshots/Portograph%20Location%20&%20Footer%20Mobile.png) |

---

## Features

- **Typewriter Headline**: Hero section headline cycling through creative studio specialties (`Wedding Photography`, `Wedding Cinematic`, `Live Streaming`, `Video Shooting`) powered by Typed.js 2.0.12.
- **Instagram Portfolio Feed**: Social gallery embed via EmbedSocial hashtag widget (`#portfolio`) pulling photography shoots directly from Instagram.
- **Service Package Catalog**: Visual showcase of studio service tiers featuring 5 brochures covering Prewedding and Wedding tiers with PDF download links (`paket_compressed.pdf` and `paket.pdf`).
- **WhatsApp Booking Form**: Order form (`#contact`) with client name input and package selection building a pre-filled booking inquiry via WhatsApp Click-to-Chat (`gotowhatsapp()`).
- **Sidebar Navigation**: Left-aligned icon menu with scroll-spy offset tracking, collapsible mobile drawer, and back-to-top button.
- **Studio Contact Information**: Contact links for YouTube, Instagram (`@aruna_daydream`), WhatsApp hotline, and studio address.
- **Scroll Animations**: AOS (Animate on Scroll) transitions across page sections paired with smooth scrolling navigation.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.1.3` | Mobile-first responsive layout grid and utilities (with Bootstrap `4.1.1` and jQuery `3.2.1` CDN includes) |
| **Iconography** | Bootstrap Icons, Boxicons, Iconify | Vector icon suites for navigation menu, social channels, and contact badges |
| **Typography & Styling** | Google Fonts (Open Sans, Raleway, Poppins), Custom CSS | Studio typography and responsive stylesheet (`assets/css/style.css`) |
| **Live Social Embed** | EmbedSocial Universal Hashtag Widget | Real-time Instagram portfolio grid rendering |
| **Motion & Animation** | Typed.js `2.0.12`, AOS `2.3.4` | Animated hero headline typing simulation and scroll-triggered element transitions |
| **Direct Communication** | WhatsApp Click-to-Chat API | Pre-formatted booking inquiry redirection via WhatsApp API endpoint |

---

## Project Structure

```bash
/
├── index.html              # Main single-page studio showcase layout
├── indextemp.html          # Legacy template archive
├── paket.pdf               # Complete full-resolution service package catalog
├── paket_compressed.pdf    # Compressed service package catalog
├── assets/
│   ├── css/                # Main stylesheet (style.css)
│   ├── js/                 # Main JavaScript (main.js)
│   ├── img/                # Package brochures (paket_compressed-1..5.jpg), hero bg, logos
│   └── vendor/             # Bootstrap 5.1.3, AOS, GLightbox, Typed.js, PureCounter
├── forms/
│   └── contact.php         # Server-side PHP mailer stub
├── screenshots/            # Showcase mockups
└── README.md
```

---

## Local Setup & Deployment

### 1. Prerequisites

- Any modern web browser (Google Chrome, Firefox, Safari, Edge).
- Python 3 (`python3`) or Node.js (`npx serve`) to serve static HTML files locally.

### 2. Menjalankan Server Lokal

Template ini adalah website portofolio statis yang dapat langsung dijalankan tanpa database:

```bash
# 1. Clone repository
git clone https://github.com/widifirmaan/bootstrap-portograph-template.git
cd bootstrap-portograph-template

# 2. Jalankan static server lokal
python3 -m http.server 8080

# Atau menggunakan npx serve (jika ada Node.js)
npx serve .
```

Buka [http://localhost:8080](http://localhost:8080) di browser Anda.

### 3. Panduan Uji Manual (Testing Checklist)

Lakukan verifikasi manual berikut di browser:

| No | Fitur yang Diuji | Langkah Pengujian | Hasil yang Diharapkan |
| :---: | :--- | :--- | :--- |
| 1 | **Animasi Typewriter Hero** | Buka `http://localhost:8080`, amati teks judul | Teks keahlian studio berganti secara dinamis dengan animasi ketik Typed.js |
| 2 | **Navigasi Sidebar & Scrollspy** | Scroll halaman ke bawah | Menu navigasi samping berpindah sorotan aktif mengikuti section yang tampil |
| 3 | **Katalog Paket & Download PDF** | Scroll ke section Paket Layanan, klik link unduh | File PDF brosur paket (`paket_compressed.pdf`) berhasil terunduh |
| 4 | **Form Booking WhatsApp** | Isi nama klien, pilih paket prewedding, klik pesan | Browser membuka WhatsApp Click-to-Chat dengan draft pesan pemesanan terformat |
| 5 | **Galeri Instagram** | Periksa kontainer galeri foto di section Portfolio | Grid visual foto tertampil rapi dengan filter kategori galeri |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
