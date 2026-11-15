# Portograph

> Modern portfolio and studio showcase template built for professional photographers and creative directors.

Portograph is a photography and creative studio portfolio template built with Bootstrap 5. It features a hero section with dynamic typing animation, filterable Isotope masonry image gallery, GLightbox modal previews, client testimonials carousel, service pricing packages, and a dedicated project detail template (`portfolio-details.html`).

[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id%2Fportograph-10B981?style=flat-square&logo=googlechrome&logoColor=white)](http://widifirmaan.web.id/bootstrap-portograph-template/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Isotope](https://img.shields.io/badge/Filter-Isotope_Masonry-EA4335?style=flat-square)](#features)
[![GLightbox](https://img.shields.io/badge/Lightbox-GLightbox-4285F4?style=flat-square)](#features)
[![Swiper](https://img.shields.io/badge/Carousel-Swiper_Bundle-6366F1?style=flat-square&logo=swiper&logoColor=white)](https://swiperjs.com/)

---

## Live Production

- **URL:** [http://widifirmaan.web.id/bootstrap-portograph-template/](http://widifirmaan.web.id/bootstrap-portograph-template/)
- **Hosting:** Apache Web Server / Cloudflare Proxy
- **Design Aesthetic:** Minimalist editorial dark mode, generous negative space, and responsive typography

---

## Showcase

| Desktop Interface (MacBook Pro M4) | Mobile Interface (iPhone 16 Pro) |
| :---: | :---: |
| **Hero Stage & Dynamic Typed Header Desktop**<br>![Portograph Hero Desktop](screenshots/Portograph%20Hero%20Desktop.png) | **Hero Stage & Dynamic Typed Header Mobile**<br>![Portograph Hero Mobile](screenshots/Portograph%20Hero%20Mobile.png) |
| **Filterable Masonry Portfolio Gallery Desktop**<br>![Portfolio Gallery Desktop](screenshots/Portograph%20Portfolio%20Gallery%20Desktop.png) | **Filterable Masonry Portfolio Gallery Mobile**<br>![Portfolio Gallery Mobile](screenshots/Portograph%20Portfolio%20Gallery%20Mobile.png) |
| **Service Tiers & Pricing Packages Desktop**<br>![Pricing Packages Desktop](screenshots/Portograph%20Pricing%20Packages%20Desktop.png) | **Service Tiers & Pricing Packages Mobile**<br>![Pricing Packages Mobile](screenshots/Portograph%20Pricing%20Packages%20Mobile.png) |
| **Single Project Case Study Detail Desktop**<br>![Project Detail Desktop](screenshots/Portograph%20Project%20Detail%20Desktop.png) | **Single Project Case Study Detail Mobile**<br>![Project Detail Mobile](screenshots/Portograph%20Project%20Detail%20Mobile.png) |
| **Client Inquiry & Contact Section Desktop**<br>![Contact Section Desktop](screenshots/Portograph%20Contact%20Section%20Desktop.png) | **Client Inquiry & Contact Section Mobile**<br>![Contact Section Mobile](screenshots/Portograph%20Contact%20Section%20Mobile.png) |

---

## Features

- **Dynamic Typewriter Header**: Hero section headline cycling through creative roles (Photographer, Videographer, Director) via `Typed.js`.
- **Filterable Masonry Gallery**: Isotope grid with category filtering (All, App, Card, Web) and responsive column layouts.
- **GLightbox Media Modal**: Mobile touch-friendly full-resolution photo preview lightbox with zoom and metadata captions.
- **Project Detail Template (`portfolio-details.html`)**: Dedicated case study page layout with image carousel, project information card, and client overview.
- **PureCounter Animated Metrics**: Number counter animation displaying completed projects, client totals, and service statistics.
- **Client Testimonials Carousel**: Touch-swipe testimonial carousel powered by Swiper with pagination bullets and auto-play transitions.
- **Commercial Service Packages**: Comparison pricing tables (Bronze, Silver, Gold, Platinum) with feature checklist tags.
- **Client Inquiry Form**: Contact form layout with client-side field validation ready for email submission endpoints.

---

## Tech Stack

| Category | Technologies | Purpose |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.x`, Bootstrap Icons | Accessible mobile-first responsive layout grid and vector icons |
| **Layout & Filtering** | Isotope Masonry `3.0.6` | Animated masonry sorting and hardware-accelerated grid reorganization |
| **Media Modal** | GLightbox `3.2.0` | Mobile touch-ready modal lightbox for high-resolution photo examination |
| **Touch Sliders** | Swiper Bundle `8.4` | Smooth touch-swipe image carousel for project case study galleries |
| **Motion & Animation** | Typed.js `2.0.12`, AOS `2.3.4` | Terminal-style header typing simulation and entrance scroll triggers |
| **Hosting** | Static Web Server / Apache | Zero-backend static file hosting with client-side JavaScript execution |

---

## Project Structure

```bash
/
├── index.html              # Primary one-page showcase layout
├── portfolio-details.html  # Dedicated single project case study template
├── css/                    # Custom layout stylesheets and theme overrides
├── js/                     # Core theme initialization and event listeners
├── img/                    # Photography demo assets and branding logos
├── assets/
│   └── vendor/             # Bootstrap, Isotope, GLightbox, Swiper, AOS
├── screenshots/            # MacBook Pro M4 & iPhone 16 Pro showcase mockups
└── README.md
```

---

## Getting Started & Local Development

### Prerequisites

No build tools, package managers, or server runtimes required. All styles and vendor assets are bundled locally.

### Local Development

> **Environment Variables:** No `.env` file or API keys are required. All layout filtering, lightbox modals, and typewriter animations run 100% client-side in the browser.

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
