# Portograph

> Responsive Bootstrap 5 template for wedding photography, videography, and creative studio showcases.

Portograph is a responsive Bootstrap 5 web template designed for photography and videography studios. It features a hero section with Typed.js typewriter animations, an integrated EmbedSocial Instagram portfolio feed, service catalogs across wedding package tiers with downloadable PDF brochures, and a WhatsApp booking inquiry form.

[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id%2Fbootstrap--portograph--template-10B981?style=flat-square&logo=googlechrome&logoColor=white)](https://widifirmaan.web.id/bootstrap-portograph-template/)
[![Bootstrap 5.1.3](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Typed.js](https://img.shields.io/badge/Animation-Typed.js-FF6F00?style=flat-square)](https://mattboldt.com/demos/typed-js/)
[![Deployment](https://img.shields.io/badge/Deployment-GitHub_Pages-black?style=flat-square&logo=github)](https://pages.github.com/)

---

## Live Production

- **URL:** [https://widifirmaan.web.id/bootstrap-portograph-template/](https://widifirmaan.web.id/bootstrap-portograph-template/)
- **Deployment:** GitHub Pages

---

## Showcase

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage Desktop**<br>![Portograph Hero Desktop](screenshots/Portograph%20Hero%20Desktop.png) | **Hero Stage Mobile**<br>![Portograph Hero Mobile](screenshots/Portograph%20Hero%20Mobile.png) |
| **Instagram Portfolio Feed Desktop**<br>![Live Instagram Portfolio Feed Desktop](screenshots/Portograph%20Portfolio%20Gallery%20Desktop.png) | **Instagram Portfolio Feed Mobile**<br>![Live Instagram Portfolio Feed Mobile](screenshots/Portograph%20Portfolio%20Gallery%20Mobile.png) |
| **Service Packages Catalog Desktop**<br>![Service Packages Catalog Desktop](screenshots/Portograph%20Pricing%20Packages%20Desktop.png) | **Service Packages Catalog Mobile**<br>![Service Packages Catalog Mobile](screenshots/Portograph%20Pricing%20Packages%20Mobile.png) |
| **WhatsApp Booking Form Desktop**<br>![Order Now WhatsApp Booking Desktop](screenshots/Portograph%20Contact%20Section%20Desktop.png) | **WhatsApp Booking Form Mobile**<br>![Order Now WhatsApp Booking Mobile](screenshots/Portograph%20Contact%20Section%20Mobile.png) |

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
