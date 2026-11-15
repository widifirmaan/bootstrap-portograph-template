# Portograph

> Elegant, responsive portfolio and studio showcase template built for professional photographers and creative directors.

Portograph is a modern, media-first portfolio and client inquiry website template powered by Bootstrap 5. Designed specifically for commercial photographers, wedding cinematographers, and studio artists, Portograph features dynamic typing hero headers, an interactive Isotope masonry gallery with category filtering, GLightbox full-resolution modal previews, responsive tiered pricing tables, and dedicated case study detail pages.

[![Live Demo](https://img.shields.io/badge/Demo-widifirmaan.web.id%2Fportograph-10B981?style=flat-square&logo=googlechrome&logoColor=white)](http://widifirmaan.web.id/bootstrap-portograph-template/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Isotope](https://img.shields.io/badge/Filter-Isotope_Masonry-EA4335?style=flat-square)](#features)
[![GLightbox](https://img.shields.io/badge/Lightbox-GLightbox-4285F4?style=flat-square)](#features)
[![Swiper](https://img.shields.io/badge/Carousel-Swiper_Bundle-6366F1?style=flat-square&logo=swiper&logoColor=white)](https://swiperjs.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## Live Production

- **URL:** [http://widifirmaan.web.id/bootstrap-portograph-template/](http://widifirmaan.web.id/bootstrap-portograph-template/)
- **Hosting:** Apache Web Server / Cloudflare Proxy
- **Design Aesthetic:** High-fashion dark typography, minimalist grid systems, and subtle micro-interactions

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

## Core Features

- **Dynamic Animated Hero Header**: Engaging typing effect cycling through artistic specialties (Photographer, Videographer, Director) via `Typed.js`.
- **Masonry Gallery with Instant Filtering**: Seamless portfolio categorization (All, Portraits, Weddings, Commercial) powered by Isotope layout engine.
- **Full-Resolution GLightbox Previews**: Touch-friendly lightbox overlays supporting high-res zoom, keyboard navigation, and caption viewing.
- **Structured Project Case Study (`portfolio-details.html`)**: Deep-dive layout highlighting project metadata (Client, Date, Project URL), client testimonials, and multi-slide image carousels.
- **Service Pricing Packages**: High-converting tiered pricing comparison tables (Bronze, Silver, Gold, Platinum) with feature checklist tags.
- **Interactive Booking & Contact**: Form markup with client validation ready for server-side mailing endpoints.

---

## Tech Stack

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **CSS Framework** | Bootstrap `5.x` | Responsive grid, utility classes, and accessible components |
| **Layout Filtering** | Isotope Masonry | Hardware-accelerated CSS transforms for seamless sorting |
| **Media Modal** | GLightbox | Ultra-responsive lightbox gallery for images and video |
| **Carousel Engine** | Swiper Bundle | Touch-swipe slider for multi-image project case studies |
| **Text Animation** | Typed.js | Configurable typewriter text animation in hero viewport |
| **Scroll Animation** | AOS (Animate on Scroll) | Lightweight CSS3-driven scroll entrance effects |

---

## Project Structure

```text
bootstrap-portograph-template/
├── index.html              # Primary one-page showcase layout
├── portfolio-details.html  # Dedicated single project case study template
├── css/                    # Custom layout stylesheets and theme overrides
├── js/                     # Core theme initialization and event listeners
├── img/                    # Photography demo assets and branding logos
├── assets/
│   └── vendor/             # Bootstrap, Isotope, GLightbox, Swiper, AOS
├── raw_screenshots/        # High-resolution production screen captures
└── screenshots/            # MacBook Pro M4 & iPhone 16 Pro showcase mockups
```

---

## Getting Started & Local Development

### Prerequisites

No build pipelines or node package installations required. All CSS and JavaScript vendor libraries are self-contained.

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/widifirmaan/bootstrap-portograph-template.git
   cd bootstrap-portograph-template
   ```

2. **Serve with any local web server**:
   ```bash
   # Python 3
   python3 -m http.server 8080

   # Or Node.js
   npx serve .
   ```

3. **View in browser**:
   Open [http://localhost:8080](http://localhost:8080).

---

## License

This project is licensed under the [MIT License](LICENSE).
