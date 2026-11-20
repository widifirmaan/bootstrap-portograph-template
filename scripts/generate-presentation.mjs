import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const screenshotsDir = path.join(projectRoot, 'screenshots');
const downloadsDir = '/home/widifirmaan/Downloads';

function encodeImage(filename) {
  const filePath = path.join(screenshotsDir, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Encoding Portograph screenshots...');

const images = {
  heroDesktop: encodeImage('Hero Desktop.png'),
  heroMobile: encodeImage('Hero Mobile.png'),
  portfolioDesktop: encodeImage('Portofolio Desktop.png'),
  portfolioMobile: encodeImage('Portofolio Mobile.png'),
  packagesDesktop: encodeImage('Paket Layanan Desktop.png'),
  packagesMobile: encodeImage('Paket Layanan Mobile.png'),
  bookingDesktop: encodeImage('Form Booking Desktop.png'),
  bookingMobile: encodeImage('Form Booking Mobile.png'),
};

console.log('Assembling English Portograph Editorial Sapphire Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Portograph - Web Engineering Presentation</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@600;700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-slate: #F8F9FA;
      --card-white: #FFFFFF;
      --border-subtle: #E6E9EC;
      --border-highlight: #D7DCE1;
      --accent-sapphire: #0563BB;
      --accent-hover: #067DED;
      --text-dark: #272829;
      --text-body: #45505B;
      --text-muted: #727C85;
      --radius-pill: 50px;
      --radius-card: 16px;
      --radius-subcard: 12px;
      --shadow-soft: 0 4px 20px rgba(69, 80, 91, 0.08);
      --shadow-nav: 0 8px 24px rgba(69, 80, 91, 0.12);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: var(--bg-slate);
      font-family: 'Poppins', sans-serif;
      color: var(--text-body);
      line-height: 1.45;
      letter-spacing: -0.01em;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Raleway', sans-serif;
      color: var(--text-dark);
      letter-spacing: -0.02em;
    }

    @page {
      size: 297mm 210mm;
      margin: 0;
    }

    .slide {
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      position: relative;
      background: var(--bg-slate);
      display: flex;
      flex-direction: column;
      padding: 16mm 20mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 10% 10%, rgba(5, 99, 187, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 90% 90%, rgba(69, 80, 91, 0.04) 0%, transparent 50%);
    }

    /* Slide Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6mm;
      z-index: 10;
    }

    .brand-pill {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: var(--card-white);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-pill);
      padding: 6px 18px;
      box-shadow: var(--shadow-soft);
    }

    .brand-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--accent-sapphire);
    }

    .brand-title {
      font-family: 'Raleway', sans-serif;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.04em;
      color: var(--text-dark);
      text-transform: uppercase;
    }

    .brand-subtitle {
      font-size: 12px;
      color: var(--text-muted);
      border-left: 1px solid var(--border-subtle);
      padding-left: 12px;
      margin-left: 2px;
      font-family: 'Poppins', sans-serif;
    }

    .badge-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: var(--accent-sapphire);
      background: rgba(5, 99, 187, 0.07);
      border: 1px solid rgba(5, 99, 187, 0.18);
      border-radius: var(--radius-pill);
      padding: 6px 14px;
    }

    /* Content Layout */
    .slide-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      z-index: 10;
    }

    .title-block {
      margin-bottom: 5mm;
    }

    .slide-category {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--accent-sapphire);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 4px;
    }

    .slide-title {
      font-size: 27px;
      font-weight: 800;
      color: var(--text-dark);
      line-height: 1.15;
    }

    .slide-subtitle {
      font-size: 13.5px;
      color: var(--text-muted);
      margin-top: 4px;
      max-width: 900px;
    }

    /* Cards */
    .clean-card {
      background: var(--card-white);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-card);
      box-shadow: var(--shadow-soft);
      padding: 18px 22px;
    }

    /* Grid Layouts */
    .layout-split {
      display: grid;
      grid-template-columns: 1.12fr 0.88fr;
      gap: 20px;
      align-items: stretch;
      flex: 1;
    }

    .layout-split-reversed {
      display: grid;
      grid-template-columns: 0.88fr 1.12fr;
      gap: 20px;
      align-items: stretch;
      flex: 1;
    }

    .layout-grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
      flex: 1;
    }

    .layout-grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      flex: 1;
    }

    /* Visual Stage for Screenshots */
    .visual-stage {
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-card);
      box-shadow: var(--shadow-soft);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100%;
      min-height: 290px;
      padding: 12px;
    }

    .visual-stage img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: drop-shadow(0 8px 20px rgba(69, 80, 91, 0.12));
    }

    /* Feature Items */
    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
    }

    .feature-item {
      background: var(--card-white);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-subcard);
      box-shadow: var(--shadow-soft);
      padding: 13px 16px;
    }

    .feature-item-title {
      font-family: 'Raleway', sans-serif;
      font-size: 14.5px;
      font-weight: 700;
      color: var(--text-dark);
      margin-bottom: 3px;
    }

    .feature-item-desc {
      font-size: 12.5px;
      color: var(--text-body);
      line-height: 1.4;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      padding-top: 3.5mm;
      border-top: 1px solid var(--border-subtle);
      font-size: 11px;
      color: var(--text-muted);
      font-family: 'JetBrains Mono', monospace;
    }

    .tech-pill {
      display: inline-block;
      padding: 4px 12px;
      background: #FFFFFF;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-pill);
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 600;
      color: var(--accent-sapphire);
      margin-right: 6px;
      margin-top: 5px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Portograph Studio</div>
        <div class="brand-subtitle">Photography Portfolio &amp; Booking Architecture</div>
      </div>
      <div class="badge-pill">DECK-PORTO-01 / 10</div>
    </div>

    <div class="slide-content">
      <div class="layout-split">
        <div style="display: flex; flex-direction: column; justify-content: center; padding-right: 15px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px;">
            <span class="tech-pill">Bootstrap 5</span>
            <span class="tech-pill">Isotope Masonry</span>
            <span class="tech-pill">GLightbox</span>
            <span class="tech-pill">Editorial Sapphire</span>
          </div>
          <h1 style="font-size: 40px; font-weight: 900; line-height: 1.1; margin-bottom: 16px;">
            Photography Studio Portfolio &amp; Booking Web Architecture
          </h1>
          <p style="font-size: 14.5px; color: var(--text-body); line-height: 1.55; margin-bottom: 24px;">
            An editorial photography studio web platform engineered on Bootstrap 5 featuring a floating sidebar pill navigation, real-time Isotope masonry filtering, touch-optimized GLightbox media inspection, and an integrated reservation workflow.
          </p>
          <div class="clean-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">DESIGN SYSTEM</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--accent-sapphire); margin-top: 2px;">Editorial</div>
              <div style="font-size: 11px; color: var(--text-muted);">Sapphire Blue &amp; Slate</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">FILTER GRID</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-top: 2px;">Isotope.js</div>
              <div style="font-size: 11px; color: var(--text-muted);">Zero-Jank Sorting</div>
            </div>
            <div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">MODAL VIEWER</div>
              <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-top: 2px;">GLightbox</div>
              <div style="font-size: 11px; color: var(--text-muted);">Touch Gestures</div>
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.heroDesktop}" alt="Portograph Hero Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; PHOTOGRAPHY STUDIO TEMPLATE</div>
      <div>WIDI FIRMANSYAH &bull; LEAD WEB DEVELOPER</div>
      <div>01 / 10</div>
    </div>
  </div>

  <!-- SLIDE 2: ARCHITECTURE & TECHNICAL FOUNDATIONS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Architecture &amp; Foundations</div>
        <div class="brand-subtitle">Editorial Web Specifications</div>
      </div>
      <div class="badge-pill">DECK-PORTO-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Web Engineering Foundations</div>
        <h2 class="slide-title">Editorial Visual Display &amp; Client Booking Conversion</h2>
        <p class="slide-subtitle">Balancing high-resolution studio imagery with rapid First Contentful Paint times and frictionless reservation flows.</p>
      </div>

      <div class="layout-grid-3">
        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">01 &bull; BOTTLENECK</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Heavy Visual Assets</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Master resolution photography assets risk degrading page load benchmarks and triggering layout shifts without strict dimensional containers.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">02 &bull; SOLUTION</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Masonry &amp; Lazy Loading</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Structured wrapper containers paired with client-side Isotope coordinate calculation and Intersection Observer lazy-loading eliminate reflow stutter.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">03 &bull; ERGONOMICS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">50px Floating Pill Nav</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Floating vertical pill navigation bar expanding label text on hover maximizes canvas real estate while keeping section jumps within easy reach.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; SYSTEM ARCHITECTURE</div>
      <div>EDITORIAL WEB STANDARDS</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: FLOATING SIDEBAR NAVIGATION -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Navigation System</div>
        <div class="brand-subtitle">Vertical Floating Pill Bar &amp; Mobile Drawer</div>
      </div>
      <div class="badge-pill">DECK-PORTO-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">User Interface Components</div>
        <h2 class="slide-title">Vertical Floating Pill Bar with Dynamic Expansion</h2>
        <p class="slide-subtitle">Modular sidebar navigation with automated active-section tracking and an isolated mobile off-canvas drawer.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.heroMobile}" alt="Portograph Mobile View &amp; Navigation">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">50px Radius Pill with Expandable Text</div>
            <div class="feature-box-desc">
              56x56px desktop icons expand smoothly into full label pills filled with Sapphire Blue (#0563bb) on hover, preserving clean visual space.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Scrollspy Active Segment Tracking</div>
            <div class="feature-box-desc">
              Window scroll listeners continuously update active menu pill states as visitors glide through portfolio, services, and booking sections.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Isolated Mobile Hamburger Drawer</div>
            <div class="feature-box-desc">
              Circular 50px toggler in the upper viewport triggers an off-canvas navigation drawer with hardware-accelerated CSS transforms.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; NAVIGATION MODULE</div>
      <div>FLOATING SIDEBAR SYSTEM</div>
      <div>03 / 10</div>
    </div>
  </div>

  <!-- SLIDE 4: ISOTOPE MASONRY PORTFOLIO GRID -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Gallery Module</div>
        <div class="brand-subtitle">Isotope.js Masonry &amp; Multi-Category Filter</div>
      </div>
      <div class="badge-pill">DECK-PORTO-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Portfolio Filtering Engine</div>
        <h2 class="slide-title">Masonry Portfolio Grid with Real-Time Filtering</h2>
        <p class="slide-subtitle">Dynamic sorting across Wedding, Portrait, and Commercial albums with fluid element transitions and zero screen flicker.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Isolated Capsule Filter Tabs</div>
            <div class="feature-box-desc">
              Pill filter buttons trigger class selector matches instantaneously via Isotope layout callbacks without requiring full-page reloads.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Corner Bracket Border Effect</div>
            <div class="feature-box-desc">
              Subtle decorative corner borders (3px solid #d7dce1) animate into sharp focal positions as cursor hovers over photograph cards.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Zero Layout Thrashing Recalculation</div>
            <div class="feature-box-desc">
              Percentage-based widths and responsive image wrappers prevent repeated reflows during coordinate repositioning cycles.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.portfolioDesktop}" alt="Portograph Portfolio Masonry Grid">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; MASONRY ENGINE</div>
      <div>ISOTOPE FILTERING</div>
      <div>04 / 10</div>
    </div>
  </div>

  <!-- SLIDE 5: LIGHTBOX MODAL & MOBILE GALLERY -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Media Inspection</div>
        <div class="brand-subtitle">GLightbox Modal &amp; Touch Gestures</div>
      </div>
      <div class="badge-pill">DECK-PORTO-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">High-Resolution Photo Inspection</div>
        <h2 class="slide-title">Full-Resolution Media Viewer Powered by GLightbox</h2>
        <p class="slide-subtitle">A modern, lightweight lightbox modal supporting touch gestures, smooth zooming, and desktop keyboard shortcuts.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.portfolioMobile}" alt="Portograph Portfolio Mobile View">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Dependency-Free GLightbox Integration</div>
            <div class="feature-box-desc">
              Pure vanilla JavaScript modal lightbox handling smooth zoom transitions and image album cycling with zero jQuery baggage.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Touch Swipe &amp; Keyboard Controls</div>
            <div class="feature-box-desc">
              Mobile users swipe naturally between photos, while desktop visitors navigate seamlessly using keyboard arrow keys and Escape.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Asynchronous High-Res Asset Fetching</div>
            <div class="feature-box-desc">
              Lightweight thumbnails display on the main page, while master-quality raw captures load on-demand only when the modal opens.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; LIGHTBOX MODULE</div>
      <div>TOUCH-ENABLED INSPECTION</div>
      <div>05 / 10</div>
    </div>
  </div>

  <!-- SLIDE 6: SERVICE PACKAGES & PRICING MATRIX -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Commercial Conversion</div>
        <div class="brand-subtitle">Package Tiering &amp; Transparent Breakdown</div>
      </div>
      <div class="badge-pill">DECK-PORTO-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Service Package Hierarchy</div>
        <h2 class="slide-title">Transparent Photography Packages &amp; Deliverables</h2>
        <p class="slide-subtitle">Tiered service cards (Silver, Gold, Platinum) with itemized deliverable breakdowns and direct booking action triggers.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Tiered Cards with Soft Elevation</div>
            <div class="feature-box-desc">
              Flagship packages highlighted with Sapphire Blue border highlights and soft elevation (0 4px 20px) to guide client decision making.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Itemized Session Deliverables Breakdown</div>
            <div class="feature-box-desc">
              Clearly states photographer count, shooting duration, printed album specs, and master digital files delivered via USB.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Deep-Linking Call to Action to Booking Form</div>
            <div class="feature-box-desc">
              Selecting a package smoothly scrolls to the reservation form and pre-populates the chosen package tier in the booking dropdown.
            </div>
          </div>
        </div>

        <div class="visual-stage">
          <img src="${images.packagesDesktop}" alt="Portograph Service Packages Desktop">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; SERVICE TIERS</div>
      <div>PRICING MATRIX</div>
      <div>06 / 10</div>
    </div>
  </div>

  <!-- SLIDE 7: RESERVATION WORKFLOW & VALIDATION -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Reservation Flow</div>
        <div class="brand-subtitle">Interactive Booking &amp; Client-Side Validation</div>
      </div>
      <div class="badge-pill">DECK-PORTO-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Client Reservation Flow</div>
        <h2 class="slide-title">Photo Session Booking Form with Live Validation</h2>
        <p class="slide-subtitle">A clean booking interface with real-time field validation, date selection, and asynchronous submission handling.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.bookingDesktop}" alt="Portograph Booking Form Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">Real-Time Client-Side Validation</div>
            <div class="feature-box-desc">
              Validates email formats, mobile numbers, and event date selections before packaging payload for backend dispatch.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Accessible Clean Input Styling</div>
            <div class="feature-box-desc">
              Pure white input controls with subtle borders (#e6e9ec), Sapphire Blue focus rings, and screen-reader accessible label tags.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Loading States &amp; Confirmation Feedback</div>
            <div class="feature-box-desc">
              Clear visual feedback spinners and isolated confirmation banners communicate successful booking without refreshing the page.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; RESERVATION WORKFLOW</div>
      <div>CLIENT-SIDE VALIDATION</div>
      <div>07 / 10</div>
    </div>
  </div>

  <!-- SLIDE 8: RESPONSIVE TOUCH & MOBILE ERGONOMICS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Mobile Ergonomics</div>
        <div class="brand-subtitle">Responsive Layout &amp; Touch Target Compliance</div>
      </div>
      <div class="badge-pill">DECK-PORTO-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Mobile User Experience</div>
        <h2 class="slide-title">Touch Target Optimization &amp; Mobile Readability</h2>
        <p class="slide-subtitle">Reconfiguring desktop multi-column layouts into single-column flows for effortless one-handed thumb browsing.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="visual-stage">
          <img src="${images.bookingMobile}" alt="Portograph Booking Mobile Ergonomics">
        </div>

        <div class="feature-list">
          <div class="feature-box">
            <div class="feature-box-title">48x48px Minimum Touch Target Standard</div>
            <div class="feature-box-desc">
              Buttons and form input triggers adhere strictly to mobile human interface guidelines to eliminate misclicks on smaller touchscreens.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Fluid Typography Scaling</div>
            <div class="feature-box-desc">
              Raleway and Poppins font hierarchies scale responsively using CSS clamp formulas, preserving visual elegance on smartphones.
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-box-title">Zero Horizontal Overflow Drift</div>
            <div class="feature-box-desc">
              Calibrated box-sizing and padding rules eliminate horizontal scroll drift, keeping the client focused on photography portfolio imagery.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; MOBILE ERGONOMICS</div>
      <div>TOUCH INTERFACE OPTIMIZATION</div>
      <div>08 / 10</div>
    </div>
  </div>

  <!-- SLIDE 9: WEB PERFORMANCE & CORE WEB VITALS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Performance Engineering</div>
        <div class="brand-subtitle">Asset Loading &amp; Core Web Vitals</div>
      </div>
      <div class="badge-pill">DECK-PORTO-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Speed &amp; Code Quality</div>
        <h2 class="slide-title">Asset Delivery Efficiency &amp; Core Web Vitals</h2>
        <p class="slide-subtitle">Modular loading strategies minimizing render-blocking resources and sustaining rapid Largest Contentful Paint benchmarks.</p>
      </div>

      <div class="layout-grid-3">
        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">ASSET DELIVERY</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Minified CSS &amp; Bundling</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Separating core site logic from third-party libraries, supported by compressed stylesheets to conserve client mobile bandwidth.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">LAYOUT STABILITY</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Zero CLS Grid Containers</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Explicit width and height aspect ratios across all portfolio images prevent unexpected layout jumps during image decoding.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">W3C STANDARDS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Semantic HTML5 &amp; Schema</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Clean semantic markup facilitates search engine indexing (SEO) and Open Graph rich preview cards for shared studio portfolios.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; PERFORMANCE AUDIT</div>
      <div>CORE WEB VITALS METRICS</div>
      <div>09 / 10</div>
    </div>
  </div>

  <!-- SLIDE 10: ARCHITECTURAL SUMMARY & DEPLOYMENT -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Milestone Summary</div>
        <div class="brand-subtitle">Production Specifications &amp; Quality Audit</div>
      </div>
      <div class="badge-pill">DECK-PORTO-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Production Readiness</div>
        <h2 class="slide-title">Comprehensive Project Implementation Summary</h2>
        <p class="slide-subtitle">A modern photography studio web platform uniting editorial aesthetic luxury with dependable technical architecture.</p>
      </div>

      <div class="layout-grid-4">
        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">FRAMEWORK</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-sapphire); margin-top: 4px; margin-bottom: 4px;">Bootstrap 5</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Flexible 12-column grid with standardized editorial utility classes.</p>
        </div>

        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">INTERACTION</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-sapphire); margin-top: 4px; margin-bottom: 4px;">Isotope.js</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Instant multi-category portfolio sorting with zero page reloads.</p>
        </div>

        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">INSPECTION</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-sapphire); margin-top: 4px; margin-bottom: 4px;">GLightbox</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Master resolution image viewer with touch swipe gestures.</p>
        </div>

        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">STATUS</div>
          <div style="font-size: 18px; font-weight: 800; color: #16A34A; margin-top: 4px; margin-bottom: 4px;">Production</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Fully verified across desktop, tablet, and mobile breakpoints.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.packagesMobile}" alt="Portograph Packages Mobile Final View">
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; PROJECT COMPLETION</div>
      <div>WIDI FIRMANSYAH &bull; LEAD DEVELOPER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`Presentation HTML written to: ${htmlFilePath}`);

console.log('Launching Chromium with Playwright to render English Portograph Editorial Sapphire PDFs...');

async function renderPDF() {
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const slidePdfPath = path.join(downloadsDir, 'Portograph.pdf');
  const continuousPdfPath = path.join(downloadsDir, 'Portograph-Continuous.pdf');

  // 1. Multi-Page Deck Mode (10 Slides A4 Landscape)
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('Rendering Continuous Single-Scroll Showcase (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background-color: #F8F9FA !important;
      }
      .slide {
        page-break-after: unset !important;
        page-break-inside: avoid !important;
        margin-bottom: 0px !important;
        box-shadow: none !important;
      }
    `
  });

  await page.waitForTimeout(500);

  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.pdf({
    path: continuousPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    pageRanges: '1',
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(continuousPdfPath);

  console.log('\nPortograph English PDFs successfully generated:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error rendering PDF:', err);
  process.exit(1);
});
