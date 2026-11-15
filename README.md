# Portograph

> Wedding photography, cinematic videography, and event documentation studio showcase template.

Portograph is a responsive photography and creative studio portfolio template built with Bootstrap 5. It features a full-screen hero stage with dynamic Typed.js headline animation, an integrated EmbedSocial live Instagram portfolio feed, visual service catalogs across 5 wedding and pre-wedding package tiers with downloadable PDF brochures, an instant WhatsApp booking form, and a dedicated case study project detail page (`portfolio-details.html`).

[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id%2Fbootstrap--portograph--template-10B981?style=flat-square&logo=googlechrome&logoColor=white)](https://widifirmaan.web.id/bootstrap-portograph-template/)
[![Bootstrap 5.1.3](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Instagram Feed](https://img.shields.io/badge/Feed-EmbedSocial_Widget-E4405F?style=flat-square&logo=instagram&logoColor=white)](#features)
[![Swiper](https://img.shields.io/badge/Carousel-Swiper_7.3.0-6366F1?style=flat-square&logo=swiper&logoColor=white)](https://swiperjs.com/)
[![Typed.js](https://img.shields.io/badge/Animation-Typed.js_2.0.12-FF6F00?style=flat-square)](#features)
[![Booking](https://img.shields.io/badge/Booking-WhatsApp_Direct_API-25D366?style=flat-square&logo=whatsapp&logoColor=white)](#features)

---

## Live Production

- **URL:** [https://widifirmaan.web.id/bootstrap-portograph-template/](https://widifirmaan.web.id/bootstrap-portograph-template/)
- **Deployment:** GitHub Pages (Custom Domain with Fastly / Varnish Edge CDN)

---

## Showcase

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage & Dynamic Typed Header Desktop**<br>![Portograph Hero Desktop](screenshots/Portograph%20Hero%20Desktop.png) | **Hero Stage & Dynamic Typed Header Mobile**<br>![Portograph Hero Mobile](screenshots/Portograph%20Hero%20Mobile.png) |
| **Live Instagram Portfolio Feed Desktop**<br>![Live Instagram Portfolio Feed Desktop](screenshots/Portograph%20Portfolio%20Gallery%20Desktop.png) | **Live Instagram Portfolio Feed Mobile**<br>![Live Instagram Portfolio Feed Mobile](screenshots/Portograph%20Portfolio%20Gallery%20Mobile.png) |
| **Service Packages Catalog Desktop**<br>![Service Packages Catalog Desktop](screenshots/Portograph%20Pricing%20Packages%20Desktop.png) | **Service Packages Catalog Mobile**<br>![Service Packages Catalog Mobile](screenshots/Portograph%20Pricing%20Packages%20Mobile.png) |
| **Single Project Case Study Detail Desktop**<br>![Single Project Case Study Detail Desktop](screenshots/Portograph%20Project%20Detail%20Desktop.png) | **Single Project Case Study Detail Mobile**<br>![Single Project Case Study Detail Mobile](screenshots/Portograph%20Project%20Detail%20Mobile.png) |
| **Order Now WhatsApp Booking Desktop**<br>![Order Now WhatsApp Booking Desktop](screenshots/Portograph%20Contact%20Section%20Desktop.png) | **Order Now WhatsApp Booking Mobile**<br>![Order Now WhatsApp Booking Mobile](screenshots/Portograph%20Contact%20Section%20Mobile.png) |

---

## Features

- **Dynamic Typewriter Headline**: Hero section headline cycling through creative studio specialties (`Wedding Photography`, `Wedding Cinematic`, `Live Streaming`, `Video Shooting`) powered by Typed.js 2.0.12 with looping typing and deleting transitions.
- **Live Instagram Portfolio Feed**: Dynamic social gallery embed via EmbedSocial hashtag widget (`#portfolio`) pulling real-time photography shoots directly from Instagram without manual static markup maintenance.
- **Service Package Catalog**: Visual showcase of studio service tiers featuring 5 comprehensive brochures covering Prewedding Basic, Prewedding Premium, Prewedding Exclusive, Wedding Silver, Wedding Gold, and Platinum Exclusive tiers, with bundled PDF download links (`paket_compressed.pdf` and `paket.pdf`).
- **Direct WhatsApp Booking Engine**: Interactive order form (`#contact`) with client name input and dropdown package selection that dynamically builds and launches a pre-filled booking inquiry via WhatsApp API (`gotowhatsapp()` routing directly to `+6281904111898`).
- **Case Study Detail Template (`portfolio-details.html`)**: Dedicated multi-image project showcase featuring an auto-playing Swiper 7.3.0 carousel with pagination bullets, project metadata sidebar (Category, Client, Date, URL), and project narrative container.
- **Responsive Sidebar Navigation**: Vertical left-aligned desktop icon menu (`#header`) with smooth scroll-spy offset tracking, collapsible mobile off-canvas drawer toggled via `bi-list`/`bi-x` icon triggers, and a persistent back-to-top floating button.
- **Studio Contact & Social Channels**: Quick-access social connections in header and footer linking to official YouTube channel, Instagram (`@aruna_daydream`), WhatsApp hotline, and physical studio address in Logandeng, Playen, Gunungkidul, Yogyakarta.
- **Smooth Scroll & Viewport Animations**: AOS (Animate on Scroll) transitions across page sections paired with native smooth scrolling navigation.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.1.3` | Mobile-first responsive layout grid and utilities (with Bootstrap `4.1.1` and jQuery `3.2.1` CDN includes) |
| **Iconography** | Bootstrap Icons, Boxicons, Iconify | Vector icon suites for navigation menu, social channels, and contact badges |
| **Typography & Styling** | Google Fonts (Open Sans, Raleway, Poppins), Custom CSS | Studio typography and responsive stylesheet (`assets/css/style.css`) |
| **Live Social Embed** | EmbedSocial Universal Hashtag Widget | Real-time Instagram portfolio grid rendering |
| **Touch Sliders** | Swiper `7.3.0` | Touch-swipe auto-play image carousel for single project case studies |
| **Motion & Animation** | Typed.js `2.0.12`, AOS `2.3.4` | Animated hero headline typing simulation and scroll-triggered element transitions |
| **Direct Communication** | WhatsApp Click-to-Chat API | Pre-formatted booking lead redirection (`https://wa.me/6281904111898`) |
| **Hosting & Edge Delivery** | GitHub Pages, Fastly / Varnish CDN | Static site hosting under custom domain `widifirmaan.web.id` |

---

## Project Structure

```bash
/
├── index.html              # Main single-page studio showcase layout
├── portfolio-details.html  # Dedicated single project case study template
├── indextemp.html          # Legacy template archive
├── paket.pdf               # Complete full-resolution service package catalog
├── paket_compressed.pdf    # Compressed service package catalog
├── assets/
│   ├── css/                # Main stylesheet (style.css)
│   ├── js/                 # Main JavaScript (main.js)
│   ├── img/                # Package brochures (paket_compressed-1..5.jpg), hero bg, logos
│   └── vendor/             # Bootstrap 5.1.3, Swiper 7.3.0, AOS, GLightbox, Typed.js, PureCounter
├── forms/
│   └── contact.php         # Server-side PHP mailer stub
├── screenshots/            # MacBook Pro M4 & iPhone 16 Pro showcase mockups
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

No build tools, package managers, or server runtimes are required. All core styles and vendor assets are bundled locally within the repository.

### Local Development

> **Environment Variables:** No `.env` file or API keys are required. All typewriter animations, scroll triggers, and WhatsApp booking actions run 100% client-side in the browser.

```bash
# 1. Clone the repository
git clone https://github.com/widifirmaan/bootstrap-portograph-template.git
cd bootstrap-portograph-template

# 2. Start any local static web server
python3 -m http.server 8080
# or using Node.js:
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your web browser.

---

## Author

Developed by **[Widi Firmansyah](https://widifirmaan.web.id)**.
