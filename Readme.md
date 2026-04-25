# 📽️ Portograph — Cinematic Wedding Portfolio Bootstrap Template

**Portograph** is a zero-build, static HTML5 template engineered for wedding photography and cinematic services. It delivers a fully client-rendered, single-page experience with no server-side runtime dependency, making it trivially deployable to any static hosting provider (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

The template is structured around **Bootstrap 5** as the responsive grid foundation and progressively enhanced with a curated set of vendor libraries for scroll-triggered animation, lightbox media display, touch-optimized carousels, and typewriter text effects.

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📸 Application Showcase

Explore the design implementation of **Portograph** across viewport sizes.

| | |
|:---:|:---:|
| ![Screenshot 1](screenshots/Hero%20Desktop%20Page.png)<br>**Hero Section** | ![Screenshot 2](screenshots/Porto%20Desktop%20Page.png)<br>**Portfolio — EmbedSocial Hashtag Feed** |
| ![Screenshot 3](screenshots/Package%20Desktop%20Page.png)<br>**Service Package Tier Grid** | ![Screenshot 4](screenshots/Footer%20Desktop%20Page.png)<br>**Contact & WhatsApp Order Form** |
| ![Screenshot 5](screenshots/Hero%20Mobile%20Page.png)<br>**Mobile Viewport (375px)** | ![Screenshot 6](screenshots/Sidebar%20Mobile%20Page.png)<br>**Off-Canvas Mobile Nav** |

---

## 🚀 Features

### 🎨 Rendering & Animation
- **AOS (Animate On Scroll) v2** — Declarative `data-aos` attribute-driven scroll-triggered entrance animations with configurable easing, delay, and duration per element.
- **Typed.js** — DOM-based typewriter effect cycling through service categories in the hero section using a `data-typed-items` attribute.
- **CSS3 Transitions** — Custom hover states and micro-interaction effects authored in `assets/css/style.css` without JavaScript overhead.

### 🖼️ Media & Gallery
- **GLightbox** — Keyboard-accessible, ARIA-compliant lightbox overlay for portfolio media with swipe gesture support on touch devices.
- **Swiper.js** — GPU-accelerated touch carousel for responsive content sliders.
- **EmbedSocial Hashtag Widget** — Third-party iframe-less JavaScript SDK (`ht.js`) injected asynchronously to aggregate and render Instagram portfolio content by hashtag reference hash.

### 📦 Service Package Display
- Package tiers rendered as a sequence of pre-compressed JPEG images (`paket_compressed-[1-5].jpg`) inside a Bootstrap row, with responsive width scaling via CSS.

### 📲 WhatsApp Order Integration
- Vanilla JS `gotowhatsapp()` handler constructs a `wa.me` deep-link URL with pre-filled message body encoding the customer name and selected service package via `encodeURIComponent`-compatible string templating.
- Triggered on HTML form `onsubmit` — no PHP backend or API endpoint required.

### 📐 Layout & Responsiveness
- **Bootstrap 5 Grid** — 12-column fluid grid with breakpoint-specific column classes (`col-lg-*`).
- **Bootstrap Icons + Boxicons** — Dual icon set providing both outline/filled variants and brand logos (YouTube, Instagram, WhatsApp).
- **Isotope.js** — Filterable masonry grid layout engine, available for portfolio extension.
- **Waypoints.js** — Scroll-position trigger library used for activating CSS classes and counters on viewport entry.
- **PureCounter.js** — Animated numeric counter for stats sections.

---

## 🛠️ Technology Stack

| Layer | Technology | Version |
|---|---|---|
| Markup | HTML5 (semantic) | — |
| Styling | CSS3 + Bootstrap | 5.x |
| Scripting | Vanilla JavaScript (ES5+) | — |
| Animation | AOS | 2.x |
| Typewriter | Typed.js | — |
| Lightbox | GLightbox | — |
| Carousel | Swiper | Bundle |
| Layout engine | Isotope | pkgd |
| Scroll trigger | Waypoints | noframework |
| Counter | PureCounter | — |
| Icon sets | Bootstrap Icons + Boxicons | — |
| Social feed | EmbedSocial Hashtag SDK | CDN |
| jQuery (compat) | jQuery | 3.2.1 |

> **Note:** jQuery is included exclusively for Bootstrap 4 legacy compatibility (`bootstrap.min.js` v4.1.1 CDN). The template's own interaction logic does **not** depend on jQuery.

---

## 📂 Project Structure

```
/
├── index.html                   # Entry point — single-page app shell
├── portfolio-details.html       # Extended portfolio detail view
├── assets/
│   ├── css/
│   │   └── style.css            # Primary stylesheet (custom variables, layout, components)
│   ├── js/
│   │   └── main.js              # Core init: AOS, GLightbox, Swiper, Typed.js, Waypoints, nav scroll spy
│   ├── img/
│   │   ├── paket_compressed-*.jpg  # Pre-exported service package slide images
│   │   ├── favicon.png
│   │   └── apple-touch-icon.png
│   └── vendor/                  # Vendored (self-hosted) third-party libraries
│       ├── aos/
│       ├── bootstrap/           # Bootstrap 5 CSS + JS bundle
│       ├── bootstrap-icons/
│       ├── boxicons/
│       ├── glightbox/
│       ├── isotope-layout/
│       ├── php-email-form/      # Client-side form validation utility
│       ├── purecounter/
│       ├── swiper/
│       ├── typed.js/
│       └── waypoints/
├── css/                         # Root-level CSS overrides (supplemental)
├── js/                          # Root-level JS overrides (supplemental)
├── fonts/                       # Self-hosted web fonts
├── forms/                       # Legacy form handler stubs
├── img/                         # Root-level image assets
├── screenshots/                 # README documentation screenshots
└── paket_compressed.pdf         # Source PDF for package slide export
```

---

## 📦 Getting Started

### Prerequisites
- Any modern evergreen browser (Chromium ≥ 90, Firefox ≥ 88, Safari ≥ 14).
- No Node.js, build tools, or package manager required — all dependencies are vendored locally.

### Local Development

```bash
# Clone the repository
git clone https://github.com/widifirmaan/bootstrap-portograph-template.git
cd bootstrap-portograph-template

# Option A: Python built-in HTTP server (zero dependency)
python3 -m http.server 8000
# → Open http://localhost:8000

# Option B: VS Code Live Server extension
# → Right-click index.html → "Open with Live Server"
```

> Opening `index.html` directly via `file://` protocol works for most features, but the EmbedSocial widget and some CDN assets may require an HTTP origin due to CORS policies.

### Deployment

Upload the entire repository root (excluding `.git/` and `screenshots/`) to any static host:

```bash
# GitHub Pages (via gh-pages branch or /docs folder)
# Vercel / Netlify — connect repo, set output directory to ./
# Cloudflare Pages — build command: (none), output: /
```

### Customization Entry Points

| Task | File |
|---|---|
| Edit brand name, typed text items | `index.html` — `<h1>` and `data-typed-items` |
| Modify color palette & typography | `assets/css/style.css` — CSS custom properties at `:root` |
| Update social links (YT/IG/WA) | `index.html` — hero `.social-links` and footer `.social-links` |
| Change WhatsApp number | `index.html` — `wa.me/` URL in `gotowhatsapp()` and anchor hrefs |
| Replace portfolio feed | `index.html` — EmbedSocial `data-ref` hash |
| Update service packages | `assets/img/paket_compressed-*.jpg` — regenerate from source PDF |

---

## 👥 Authors

Developed with ❤️ by **Widi Firmaan**.

