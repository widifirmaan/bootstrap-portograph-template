# Portograph

Responsive Bootstrap 5 studio showcase and booking landing page for wedding photography and videography featuring an embedded Instagram hashtag feed and WhatsApp booking form.

![Bootstrap](https://img.shields.io/badge/Bootstrap-5.1.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Typed.js](https://img.shields.io/badge/Typed.js-2.0.12-FF6F00?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-E34F26?style=flat-square&logo=html5&logoColor=white)

## Live URL

- **Production**: [https://widifirmaan.web.id/bootstrap-portograph-template/](https://widifirmaan.web.id/bootstrap-portograph-template/)

## Features

- **Typewriter Hero Section (`#hero`)**: Animated role switcher cycling through studio services (`Wedding Photography`, `Wedding Cinematic`, `Live Streaming`, `Video Shooting`) powered by Typed.js.
- **Instagram Hashtag Portfolio (`#portfolio`)**: Embedded EmbedSocial hashtag gallery widget (`embedsocial-hashtag`).
- **Package Gallery (`#services`)**: Visual catalog displaying five studio package sheets (`paket_compressed-1.jpg` through `paket_compressed-5.jpg`).
- **Direct WhatsApp Booking Form (`#contact`)**: Booking form validating client name and selected wedding/prewedding package (`7` package options) and opening a URL-encoded `wa.me` WhatsApp inquiry.
- **Responsive Navigation & Scrollspy (`assets/css/style.css`, `assets/js/main.js`)**: Fixed desktop sidebar menu above `992px`, `d-lg-none` mobile drawer toggle, active scrollspy highlighting, and back-to-top button.
- **Scroll Animations**: Element entrance transitions configured via Animate on Scroll (AOS).

## Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **UI Framework** | Bootstrap `5.1.3` | Responsive layout grid and utilities |
| **Icons** | Bootstrap Icons, Boxicons | Sidebar navigation, contact details, and social links |
| **Animations** | Typed.js `2.0.12`, AOS | Typewriter hero headline and scroll reveal animations |
| **Social & Messaging** | EmbedSocial Hashtag Script, WhatsApp `wa.me` | Portfolio gallery embed and Click-to-Chat booking URL |
| **Typography & Styling** | Google Fonts (Open Sans, Raleway, Poppins), `assets/css/style.css` | Editorial typography and responsive navigation styles |

## Screenshots

| Desktop | Mobile |
| :---: | :---: |
| **Hero Stage & Animated Headline**<br>![Hero](screenshots/Hero%20Desktop.png) | **Hero Stage & Animated Headline**<br>![Hero](screenshots/Hero%20Mobile.png) |
| **Instagram Hashtag Portfolio Feed**<br>![Portofolio](screenshots/Portofolio%20Desktop.png) | **Instagram Hashtag Portfolio Feed**<br>![Portofolio](screenshots/Portofolio%20Mobile.png) |
| **Service Package Brochures**<br>![Paket Layanan](screenshots/Paket%20Layanan%20Desktop.png) | **Service Package Brochures**<br>![Paket Layanan](screenshots/Paket%20Layanan%20Mobile.png) |
| **WhatsApp Booking Form & Contact Info**<br>![Form Booking](screenshots/Form%20Booking%20Desktop.png) | **WhatsApp Booking Form & Contact Info**<br>![Form Booking](screenshots/Form%20Booking%20Mobile.png) |

## Local Setup

### Prerequisites

- Any modern web browser
- **Python 3** or **Node.js** (`npx serve`) to serve static HTML files locally
- **No database or environment variables required**

### Run Locally

```bash
git clone https://github.com/widifirmaan/bootstrap-portograph-template.git
cd bootstrap-portograph-template

# Option A: Python 3
python3 -m http.server 8080

# Option B: npx serve
npx serve -l 8080 .
```

Open `http://localhost:8080` in your browser.

## Author

**Widi Firmansyah** · [widifirmaan.web.id](https://widifirmaan.web.id)
