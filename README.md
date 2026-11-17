# Portograph

> Responsive Bootstrap 5 portfolio template for wedding photography and videography studios featuring an integrated Instagram feed and WhatsApp booking inquiries.

[![Bootstrap 5.1.3](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Typed.js](https://img.shields.io/badge/Animation-Typed.js-FF6F00?style=flat-square)](https://mattboldt.com/demos/typed-js/)
[![HTML5 / CSS3](https://img.shields.io/badge/HTML5%20%2F%20CSS3-Modern_Web-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/)
[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id-10B981?style=flat-square)](https://widifirmaan.web.id/bootstrap-portograph-template/)

---

## Live URL

- **Production URL**: [https://widifirmaan.web.id/bootstrap-portograph-template/](https://widifirmaan.web.id/bootstrap-portograph-template/)

---

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage & Typed.js Animated Headline**<br>![Hero](screenshots/Hero%20Desktop.png) | **Hero Stage & Typed.js Animated Headline**<br>![Hero](screenshots/Hero%20Mobile.png) |
| **Studio Philosophy & About Section**<br>![Tentang Studio](screenshots/Tentang%20Studio%20Desktop.png) | **Studio Philosophy & About Section**<br>![Tentang Studio](screenshots/Tentang%20Studio%20Mobile.png) |
| **Live Instagram Portfolio Gallery Grid**<br>![Galeri Portofolio](screenshots/Galeri%20Portofolio%20Desktop.png) | **Live Instagram Portfolio Gallery Grid**<br>![Galeri Portofolio](screenshots/Galeri%20Portofolio%20Mobile.png) |
| **Service Packages Catalog & PDF Download**<br>![Paket Layanan](screenshots/Paket%20Layanan%20Desktop.png) | **Service Packages Catalog & PDF Download**<br>![Paket Layanan](screenshots/Paket%20Layanan%20Mobile.png) |
| **Client Testimonials & Couple Reviews**<br>![Testimoni](screenshots/Testimoni%20Desktop.png) | **Client Testimonials & Couple Reviews**<br>![Testimoni](screenshots/Testimoni%20Mobile.png) |
| **WhatsApp Direct Booking Inquiry Form**<br>![Form Booking](screenshots/Form%20Booking%20Desktop.png) | **WhatsApp Direct Booking Inquiry Form**<br>![Form Booking](screenshots/Form%20Booking%20Mobile.png) |

---

## Features

- **Typewriter Headline Simulation**: Hero section headline cycling through creative studio specialties (`Wedding Photography`, `Wedding Cinematic`, `Live Streaming`, `Video Shooting`) powered by Typed.js.
- **Integrated Instagram Portfolio Feed**: Live gallery widget powered by EmbedSocial (`#portfolio`) pulling photography shoots directly from Instagram.
- **Service Package Catalog & PDF Download**: Visual showcase of studio service tiers featuring 5 brochures covering Prewedding and Wedding packages with downloadable PDF brochures (`paket_compressed.pdf`).
- **Direct WhatsApp Booking Form**: Booking reservation form (`#contact`) with client name input and package selection building pre-formatted inquiries via WhatsApp Click-to-Chat.
- **Sidebar Navigation & Scrollspy**: Left-aligned icon menu with scroll-spy offset tracking, collapsible mobile drawer, and back-to-top button.
- **Smooth Scroll Animations (AOS)**: Transitions and element reveals powered by Animate on Scroll (AOS) as users browse the page.
- **Studio Contact Information**: Direct links to social media channels (YouTube, Instagram `@aruna_daydream`, WhatsApp hotline) and studio physical address.

---

## Tech Stack

| Category | Technology | Description / Purpose |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.1.3` | Mobile-first responsive layout grid and utilities |
| **Iconography** | Bootstrap Icons, Boxicons, Iconify | Vector icon suites for navigation menu and social channel badges |
| **Animation & Interactivity** | Typed.js `2.0.12`, AOS `2.3.4` | Hero typewriter headline simulation and scroll-triggered element transitions |
| **Live Social Embed** | EmbedSocial Universal Widget | Real-time Instagram portfolio grid rendering |
| **Direct Communication** | WhatsApp Click-to-Chat API | Pre-formatted booking inquiry redirection via WhatsApp API |
| **Typography & Styling** | Google Fonts (Open Sans, Raleway, Poppins) | Modern editorial typography with custom responsive stylesheet |

---

## Local Setup & Deployment

### 1. Prerequisites

- Any modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).
- Python 3 (`python3`) or Node.js (`npx serve`) to serve static HTML files locally.
- Database: **No database required** (100% static client-side website).

### 2. Environment Variables

No environment variables are required.

### 3. Installation & Running the Local Server

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/bootstrap-portograph-template.git
cd bootstrap-portograph-template

# 2. Run local static web server
# Option A: Using Python 3
python3 -m http.server 8080

# Option B: Using npx serve (if Node.js is installed)
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### 4. Manual Testing Checklist

| No | Feature | Test Steps | Expected Result |
| :---: | :--- | :--- | :--- |
| 1 | **Typewriter Animation** | Open `http://localhost:8080`, observe hero text | Headline specialties cycle smoothly using Typed.js |
| 2 | **Sidebar Scrollspy** | Scroll down past the About section | Active indicator on the sidebar navigation shifts automatically based on scroll position |
| 3 | **PDF Brochure Download** | Scroll to Service Packages section, click download link | Downloads `paket_compressed.pdf` brochure catalog |
| 4 | **WhatsApp Booking Form** | Fill in client name, select a package, click Submit | Browser opens WhatsApp Click-to-Chat with a pre-filled booking draft message |
| 5 | **Portfolio Gallery** | Inspect the Portfolio section container | Live Instagram photos render in a structured responsive grid |

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
