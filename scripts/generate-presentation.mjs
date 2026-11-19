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
    console.warn(`⚠️ Warning: Screenshot not found: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('📷 Encoding Portograph studio screenshots...');

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

console.log('🎨 Constructing Portograph Luxury Editorial Presentation Deck HTML...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portograph - Luxury Wedding Studio Web Architecture</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-editorial: #111317;
      --bg-card: #181B20;
      --gold-primary: #D4AF37;
      --gold-light: #F3E8D0;
      --gold-dim: rgba(212, 175, 55, 0.2);
      --text-light: #F7F5F0;
      --text-muted: #9E9EA7;
      --border-gold: rgba(212, 175, 55, 0.25);
      --border-subtle: #242830;
      --radius-editorial: 10px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #0A0B0D;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-light);
      line-height: 1.45;
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
      background: var(--bg-editorial);
      display: flex;
      flex-direction: column;
      padding: 16mm 18mm;
      overflow: hidden;
      background-image: 
        radial-gradient(circle at 80% 10%, rgba(212, 175, 55, 0.06) 0%, transparent 60%),
        linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 100% 100%, 40px 40px, 40px 40px;
    }

    /* Top gold rule */
    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #8A7322, #D4AF37, #FFF2A1, #D4AF37, #8A7322);
      z-index: 50;
    }

    /* Header */
    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1px solid var(--border-gold);
      padding-bottom: 3.5mm;
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .editorial-badge {
      background: var(--gold-dim);
      border: 1px solid var(--gold-primary);
      color: var(--gold-light);
      padding: 3px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border-radius: 3px;
    }

    .slide-section-title {
      font-family: 'Playfair Display', serif;
      font-size: 14.5px;
      font-weight: 700;
      color: var(--gold-light);
      letter-spacing: 0.03em;
    }

    .slide-page-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      background: var(--bg-card);
      border: 1px solid var(--border-gold);
      color: var(--gold-primary);
      padding: 3px 10px;
      border-radius: 3px;
    }

    /* Layout */
    .slide-body {
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      gap: 22px;
      flex: 1;
      min-height: 0;
    }

    .slide-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 0;
    }

    .headline-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .route-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--bg-card);
      border: 1px solid var(--border-gold);
      padding: 3px 10px;
      width: fit-content;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 600;
      color: var(--gold-primary);
      border-radius: 3px;
    }

    .slide-title {
      font-family: 'Playfair Display', serif;
      font-size: 25px;
      font-weight: 800;
      line-height: 1.15;
      color: #FFFFFF;
      letter-spacing: -0.01em;
    }

    .slide-subtitle {
      font-size: 12.5px;
      color: var(--text-muted);
      font-weight: 400;
      line-height: 1.5;
    }

    /* Editorial Cards */
    .feature-blocks {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .editorial-card {
      background: var(--bg-card);
      border: 1px solid var(--border-gold);
      border-radius: 6px;
      padding: 11px 15px;
      border-left: 3px solid var(--gold-primary);
    }

    .card-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--gold-light);
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .card-text {
      font-size: 11px;
      line-height: 1.45;
      color: #CBC9C3;
    }

    /* Metrics Grid */
    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: var(--bg-card);
      border: 1px solid var(--border-gold);
      border-radius: 6px;
      padding: 7px 10px;
      text-align: center;
    }

    .metric-val {
      font-family: 'Playfair Display', serif;
      font-size: 18px;
      font-weight: 800;
      color: var(--gold-primary);
    }

    .metric-desc {
      font-size: 8.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--text-muted);
    }

    /* Mockup Frames */
    .slide-visual {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 0;
    }

    .device-container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .desktop-frame {
      width: 90%;
      background: #0B0D10;
      border: 1px solid var(--border-gold);
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .frame-bar {
      height: 24px;
      background: #15181E;
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      padding: 0 10px;
      gap: 6px;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .dot.red { background: #FF5F56; }
    .dot.yellow { background: #FFBD2E; }
    .dot.green { background: #27C93F; }

    .url-chip {
      margin-left: 12px;
      background: #0D0F12;
      border: 1px solid var(--border-subtle);
      padding: 1px 12px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 600;
      color: var(--gold-light);
      border-radius: 3px;
    }

    .desktop-img {
      width: 100%;
      height: auto;
      max-height: 380px;
      object-fit: contain;
      background: #0B0D10;
      display: block;
    }

    .mobile-frame {
      position: absolute;
      right: -8px;
      bottom: -12px;
      width: 27%;
      background: #0B0D10;
      border: 2px solid var(--border-gold);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.8);
      border-radius: 14px;
      overflow: hidden;
      z-index: 10;
    }

    .mobile-notch {
      height: 12px;
      background: #050608;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .notch-speaker {
      width: 28px;
      height: 2px;
      background: #4B5563;
      border-radius: 2px;
    }

    .mobile-img {
      width: 100%;
      height: auto;
      display: block;
    }

    /* Footer */
    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border-gold);
      padding-top: 3.5mm;
      margin-top: 4mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: #7D7D88;
      font-weight: 600;
    }

    /* Cover Slide */
    .cover-slide {
      background: 
        radial-gradient(circle at 75% 25%, rgba(212, 175, 55, 0.12) 0%, transparent 60%),
        #111317;
      justify-content: space-between;
      padding: 18mm 20mm;
    }

    .cover-giant-title {
      font-family: 'Playfair Display', serif;
      font-size: 50px;
      font-weight: 900;
      line-height: 1.05;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    .cover-giant-title span {
      color: var(--gold-primary);
    }

    .cover-desc {
      font-size: 15.5px;
      line-height: 1.5;
      color: #CBC9C3;
      font-weight: 400;
      max-width: 720px;
    }

    .cover-split {
      display: grid;
      grid-template-columns: 1.05fr 1fr;
      gap: 28px;
      align-items: center;
      margin: 10px 0;
    }

    .cover-specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .cover-spec-card {
      background: var(--bg-card);
      border: 1px solid var(--border-gold);
      border-radius: 6px;
      padding: 12px 14px;
    }

    .cover-spec-k {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      color: var(--gold-primary);
      text-transform: uppercase;
      margin-bottom: 3px;
    }

    .cover-spec-v {
      font-family: 'Playfair Display', serif;
      font-size: 14.5px;
      font-weight: 700;
      color: #FFFFFF;
    }

    /* Architecture Grid */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 10px;
      flex: 1;
    }

    .arch-col {
      background: var(--bg-card);
      border: 1px solid var(--border-gold);
      border-radius: 8px;
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .arch-col-title {
      font-family: 'Playfair Display', serif;
      font-size: 13.5px;
      font-weight: 800;
      text-transform: uppercase;
      padding-bottom: 6px;
      border-bottom: 1px solid var(--border-gold);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gold-light);
    }

    .arch-item {
      background: #14161C;
      border: 1px solid var(--border-subtle);
      border-radius: 5px;
      padding: 8px 10px;
      font-size: 11px;
    }

    .arch-item-name {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: var(--gold-primary);
      margin-bottom: 2px;
    }

    .arch-item-detail {
      font-size: 10px;
      color: var(--text-muted);
      line-height: 1.4;
    }

    /* Closing Slide */
    .closing-slide {
      background: radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), #111317;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20mm;
      gap: 18px;
    }

    .closing-title {
      font-family: 'Playfair Display', serif;
      font-size: 38px;
      font-weight: 900;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      color: #FFFFFF;
    }

    .closing-pills {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 760px;
    }

    .live-hero-card {
      background: var(--bg-card);
      border: 1px solid var(--gold-primary);
      box-shadow: 0 12px 32px rgba(212, 175, 55, 0.15);
      border-radius: 8px;
      padding: 16px 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      margin-top: 10px;
    }

    .live-url-text {
      font-family: 'JetBrains Mono', monospace;
      font-size: 17px;
      font-weight: 800;
      color: var(--gold-primary);
    }
  </style>
</head>
<body>

  <!-- ==================== SLIDE 01: COVER ==================== -->
  <div class="slide cover-slide">
    <div>
      <div style="display:flex; gap:12px; align-items:center;">
        <div class="editorial-badge">WEDDING STUDIO SUITE</div>
        <div class="route-pill">BOOTSTRAP 5 • TYPED.JS • WHATSAPP API</div>
        <div class="editorial-badge" style="border-color:#10B981; color:#10B981;">PRODUCTION DEPLOYED</div>
      </div>
      <div style="margin-top: 20px; max-width: 85%;">
        <div class="cover-giant-title">
          <span>PORTOGRAPH STUDIO</span><br>
          FINE-ART WEDDING PHOTOGRAPHY & BOOKING
        </div>
        <p class="cover-desc">
          Template web portofolio fotografi & videografi pernikahan dengan tata letak editorial mewah, efek typewriter Typed.js dinamis, integrasi Instagram feed, katalog paket layanan, dan form pemesanan instan ke WhatsApp.
        </p>
      </div>
    </div>

    <div class="cover-split">
      <div class="cover-specs-grid">
        <div class="cover-spec-card">
          <div class="cover-spec-k">CORE FRAMEWORK</div>
          <div class="cover-spec-v">Bootstrap 5.1.3 CSS</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">ANIMATION ENGINE</div>
          <div class="cover-spec-v">Typed.js + AOS Scroll</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">BOOKING INTEGRATION</div>
          <div class="cover-spec-v">WhatsApp Click-to-Chat</div>
        </div>
        <div class="cover-spec-card">
          <div class="cover-spec-k">DESIGN SPECIFICATION</div>
          <div class="cover-spec-v">Luxury Editorial & Serif</div>
        </div>
      </div>

      <div style="position: relative;">
        <div class="desktop-frame" style="width: 100%;">
          <div class="frame-bar">
            <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
            <div class="url-chip">https://widifirmaan.web.id/bootstrap-portograph-template/</div>
          </div>
          <img src="${images.heroDesktop}" class="desktop-img" alt="Portograph Cover">
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>AUTHOR: WIDI FIRMANSYAH</div>
      <div>PROJECT: PORTOGRAPH WEDDING STUDIO</div>
      <div>PAGE 01 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 02: HERO & TYPED.JS ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge">HERO STAGE</div>
        <div class="slide-section-title">CINEMATIC HERO STAGE & TYPED.JS SPECIALTY CYCLING</div>
      </div>
      <div class="slide-page-badge">SLIDE 02</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #hero • TYPED.JS ENGINE</div>
          <h2 class="slide-title">Cinematic Hero Stage & Dynamic Specialization</h2>
          <p class="slide-subtitle">
            Panggung hero layar penuh dengan latar belakang fotografi pernikahan atmosferik dan headline dinamis Typed.js yang berganti secara otomatis.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="editorial-card">
            <div class="card-label">⌨️ Typed.js Specialization Loop</div>
            <div class="card-text">
              Simulasi ketikan teks real-time yang memamerkan spesialisasi studio: Wedding Photography, Wedding Cinematic, Live Streaming, dan Video Shooting.
            </div>
          </div>
          <div class="editorial-card">
            <div class="card-label">⚡ Direct CTA Scroll Anchors</div>
            <div class="card-text">
              Tombol aksi utama bernuansa emas yang mengarahkan pengunjung langsung ke galeri portofolio atau formulir reservasi tanggal pernikahan.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">100vh</div>
            <div class="metric-desc">Viewport Hero</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">4</div>
            <div class="metric-desc">Service Loops</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Smooth</div>
            <div class="metric-desc">Scroll Anchors</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-portograph-template/</div>
            </div>
            <img src="${images.heroDesktop}" class="desktop-img" alt="Hero Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.heroMobile}" class="mobile-img" alt="Hero Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>TYPED.JS LIFECYCLE & HERO STAGE</div>
      <div>PAGE 02 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 03: VERTICAL SIDEBAR NAVIGATION ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge">NAVIGATION SYSTEM</div>
        <div class="slide-section-title">VERTICAL ICON SIDEBAR & SCROLLSPY TRACKING</div>
      </div>
      <div class="slide-page-badge">SLIDE 03</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">NAV: #header • BOOTSTRAP SCROLLSPY</div>
          <h2 class="slide-title">Left Dock Navigation & Viewport Spy</h2>
          <p class="slide-subtitle">
            Bilah navigasi vertikal di sisi kiri layar dengan ikon elegan dan penanda aktif (active indicator) otomatis berdasarkan posisi scroll pengguna.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="editorial-card">
            <div class="card-label">🧭 Bootstrap ScrollSpy Integration</div>
            <div class="card-text">
              Offset tracking otomatis yang mendeteksi section yang sedang terlihat di layar dan menyoroti tautan menu terkait tanpa delay.
            </div>
          </div>
          <div class="editorial-card">
            <div class="card-label">📱 Collapsible Mobile Off-Canvas Drawer</div>
            <div class="card-text">
              Menu bertransformasi menjadi drawer samping yang ringkas pada perangkat mobile, lengkap dengan transisi slide halus dan penutup otomatis saat menu diklik.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Fixed</div>
            <div class="metric-desc">Left Dock</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Auto</div>
            <div class="metric-desc">Spy Highlight</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero-Jank</div>
            <div class="metric-desc">Mobile Drawer</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-portograph-template/#about</div>
            </div>
            <img src="${images.heroDesktop}" class="desktop-img" alt="Sidebar Navigation Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.heroMobile}" class="mobile-img" alt="Sidebar Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>SCROLLSPY OFFSET & DRAWER COMPONENT</div>
      <div>PAGE 03 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 04: INSTAGRAM FEED GALLERY ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge">GALLERY INTEGRATION</div>
        <div class="slide-section-title">LIVE INSTAGRAM PORTFOLIO FEED & MASONRY</div>
      </div>
      <div class="slide-page-badge">SLIDE 04</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #portfolio • EMBEDSOCIAL FEED</div>
          <h2 class="slide-title">Live Social Feed & Photography Showcase</h2>
          <p class="slide-subtitle">
            Galeri portofolio modern yang menyinkronkan foto-foto karya pernikahan langsung dari akun Instagram studio tanpa perlu unggah ulang manual.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="editorial-card">
            <div class="card-label">📸 Automated Social Media Sync</div>
            <div class="card-text">
              Widget feed responsif yang menampilkan karya pemotretan terbaru dengan metadata caption, likes, dan tautan langsung ke postingan media sosial.
            </div>
          </div>
          <div class="editorial-card">
            <div class="card-label">🖼️ High-DPI Grid Formatting</div>
            <div class="card-text">
              Penyusunan gambar dalam tata letak kisi berjarak estetis dengan efek hover zoom halus yang menonjolkan detail komposisi fotografi pernikahan.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Live</div>
            <div class="metric-desc">Social Sync</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Grid</div>
            <div class="metric-desc">Photo Layout</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Responsive View</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-portograph-template/#portfolio</div>
            </div>
            <img src="${images.portfolioDesktop}" class="desktop-img" alt="Portfolio Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.portfolioMobile}" class="mobile-img" alt="Portfolio Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>SOCIAL WIDGET INTEGRATION & PHOTO MASONRY</div>
      <div>PAGE 04 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 05: SERVICE PACKAGES ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge">PRICING TIERS</div>
        <div class="slide-section-title">SERVICE PACKAGE CATALOG & BROCHURES</div>
      </div>
      <div class="slide-page-badge">SLIDE 05</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">VIEW: #services • 5-TIER BROCHURES</div>
          <h2 class="slide-title">Photography & Cinematic Package Cards</h2>
          <p class="slide-subtitle">
            Katalog 5 paket layanan terstruktur mencakup sesi Prewedding, Wedding Day Photography, Cinematic Video, dan Liputan Acara Lengkap dengan unduhan PDF.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="editorial-card">
            <div class="card-label">📑 Visual Brochure Showcase</div>
            <div class="card-text">
              Penyajian brosur visual berkualitas tinggi yang memuat detail durasi liputan, jumlah fotografer, album cetak, hingga link Google Drive hasil render.
            </div>
          </div>
          <div class="editorial-card">
            <div class="card-label">📥 Downloadable Compressed PDF</div>
            <div class="card-text">
              Tautan unduh langsung berkas pricelist terkompresi (paket_compressed.pdf) untuk memudahkan calon pengantin berdiskusi secara luring.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">5</div>
            <div class="metric-desc">Service Tiers</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">PDF</div>
            <div class="metric-desc">Brochure Link</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Clear</div>
            <div class="metric-desc">Inclusions</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-portograph-template/#services</div>
            </div>
            <img src="${images.packagesDesktop}" class="desktop-img" alt="Packages Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.packagesMobile}" class="mobile-img" alt="Packages Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>TIERED CATALOG & BROCHURE DISTRIBUTION</div>
      <div>PAGE 05 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 06: WHATSAPP DIRECT BOOKING ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge" style="border-color:#10B981; color:#10B981;">WHATSAPP GATEWAY</div>
        <div class="slide-section-title">DIRECT WHATSAPP BOOKING & DYNAMIC URL BUILDER</div>
      </div>
      <div class="slide-page-badge">SLIDE 06</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">FORM: #contact • WHATSAPP CLICK-TO-CHAT</div>
          <h2 class="slide-title">Interactive Reservation & Dynamic Message Builder</h2>
          <p class="slide-subtitle">
            Formulir pemesanan cerdas yang memvalidasi nama klien, pilihan paket, dan tanggal pernikahan, lalu merangkainya menjadi pesan WhatsApp terformat otomatis.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="editorial-card">
            <div class="card-label">💬 URI-Encoded Message Sanitizer</div>
            <div class="card-text">
              Algoritma JavaScript yang merangkum parameter formulir ke dalam template teks terstruktur (Nama, Paket Pilihan, Tanggal Booking) dan mengonversinya ke format URI aman.
            </div>
          </div>
          <div class="editorial-card">
            <div class="card-label">🚀 Instant Studio Lead Generation</div>
            <div class="card-text">
              Mengarahkan calon klien langsung ke chat admin WhatsApp tanpa perantara backend atau server email, memangkas waktu tunggu respon secara signifikan.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Direct</div>
            <div class="metric-desc">WhatsApp API</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero</div>
            <div class="metric-desc">Server Overhead</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Instant</div>
            <div class="metric-desc">Lead Conversion</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-portograph-template/#contact</div>
            </div>
            <img src="${images.bookingDesktop}" class="desktop-img" alt="Booking Form Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.bookingMobile}" class="mobile-img" alt="Booking Form Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>CLICK-TO-CHAT URL GENERATION & SANITIZATION</div>
      <div>PAGE 06 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 07: RESPONSIVE BEHAVIOR ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge">RESPONSIVE DESIGN</div>
        <div class="slide-section-title">MOBILE OPTIMIZATION & TOUCH-FIRST ADAPTATION</div>
      </div>
      <div class="slide-page-badge">SLIDE 07</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">BREAKPOINTS: &lt;768px • MOBILE INTERFACES</div>
          <h2 class="slide-title">Touch-First Layout & Mobile Drawer Adaptation</h2>
          <p class="slide-subtitle">
            Optimalisasi antarmuka smartphone dengan padding safe-area, navigasi tombol hamburger, ukuran target sentuh nyaman, dan perataan form yang ergonomis.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="editorial-card">
            <div class="card-label">📱 48px Minimum Touch Targets</div>
            <div class="card-text">
              Seluruh tombol formulir, link navigasi drawer, dan kontrol brosur dirancang memenuhi standar ergonomi sentuhan jari mobile tanpa salah ketuk.
            </div>
          </div>
          <div class="editorial-card">
            <div class="card-label">✨ Fluid Typography & Aspect Ratios</div>
            <div class="card-text">
              Skala tipografi proporsional memastikan judul editorial Playfair Display tetap megah di layar lebar dan rapi terbaca pada layar ponsel sempit.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">48px+</div>
            <div class="metric-desc">Touch Targets</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-desc">Mobile Usability</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero</div>
            <div class="metric-desc">Horizontal Overflow</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-portograph-template/</div>
            </div>
            <img src="${images.packagesDesktop}" class="desktop-img" alt="Responsive Packages Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.packagesMobile}" class="mobile-img" alt="Responsive Packages Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>TOUCH TARGETS & ERGONOMIC ADAPTATION</div>
      <div>PAGE 07 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 08: AOS SCROLL ANIMATION ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge">MOTION DESIGN</div>
        <div class="slide-section-title">ANIMATE ON SCROLL (AOS) & GPU ACCELERATION</div>
      </div>
      <div class="slide-page-badge">SLIDE 08</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <div class="route-pill">LIBRARY: AOS.JS • VIEWPORT REVEAL</div>
          <h2 class="slide-title">Staggered Scroll Animations & Entrance Reveals</h2>
          <p class="slide-subtitle">
            Pengalaman browsing mewah dengan animasi kemunculan elemen bertahap (staggered fade-up, zoom-in) saat elemen memasuki area pandang pengguna.
          </p>
        </div>

        <div class="feature-blocks">
          <div class="editorial-card">
            <div class="card-label">🎞️ Hardware-Accelerated Transforms</div>
            <div class="card-text">
              Animasi memanfaatkan properti CSS transform3d dan opacity yang diproses oleh GPU browser, menjaga framerate tetap mulus pada 60 FPS tanpa jank.
            </div>
          </div>
          <div class="editorial-card">
            <div class="card-label">⏳ Configurable Easing & Delays</div>
            <div class="card-text">
              Pengaturan jeda waktu (data-aos-delay) antar kartu brosur paket layanan menghasilkan efek visual sekuensial yang artistik dan elegan.
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">60 fps</div>
            <div class="metric-desc">Scroll Framerate</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">GPU</div>
            <div class="metric-desc">CSS Transforms</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Delays</div>
            <div class="metric-desc">Staggered Reveal</div>
          </div>
        </div>
      </div>

      <div class="slide-visual">
        <div class="device-container">
          <div class="desktop-frame">
            <div class="frame-bar">
              <div class="dot red"></div><div class="dot yellow"></div><div class="dot green"></div>
              <div class="url-chip">widifirmaan.web.id/bootstrap-portograph-template/</div>
            </div>
            <img src="${images.portfolioDesktop}" class="desktop-img" alt="Portfolio Motion Desktop">
          </div>
          <div class="mobile-frame">
            <div class="mobile-notch"><div class="notch-speaker"></div></div>
            <img src="${images.portfolioMobile}" class="mobile-img" alt="Portfolio Motion Mobile">
          </div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>AOS TRIGGER PIPELINE & GPU OPTIMIZATION</div>
      <div>PAGE 08 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 09: SYSTEM ARCHITECTURE ==================== -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <div class="editorial-badge">TECH STACK</div>
        <div class="slide-section-title">FRONTEND ARCHITECTURE & INTEGRATIONS</div>
      </div>
      <div class="slide-page-badge">SLIDE 09</div>
    </div>

    <div style="margin-bottom: 8px;">
      <h2 class="slide-title">Editorial Frontend Architecture & Performance</h2>
      <p class="slide-subtitle">
        Kombinasi Bootstrap 5.1.3 CSS framework, Typed.js animasi dinamis, AOS viewport motion, dan integrasi WhatsApp API tanpa ketergantungan server runtime berat.
      </p>
    </div>

    <div class="arch-grid">
      <!-- UI Tier -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>01. EDITORIAL UI TIER</span>
          <span style="color:var(--gold-primary);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Bootstrap 5.1.3</div>
          <div class="arch-item-detail">Framework tata letak responsif standar industri dengan sistem grid teruji dan utilitas navigasi fleksibel.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Playfair Display Serif</div>
          <div class="arch-item-detail">Tipografi editorial klasik berkarakter anggun yang memperkuat citra studio pernikahan kelas atas.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Dark Luxury Palette</div>
          <div class="arch-item-detail">Kombinasi warna charcoal (#111317) dan aksen emas (#D4AF37) yang menciptakan atmosfer visual sinematik.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Boxicons Suite</div>
          <div class="arch-item-detail">Koleksi ikon vektor presisi tinggi untuk bilah navigasi vertikal dan tombol kontak sosial.</div>
        </div>
      </div>

      <!-- Logic Tier -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>02. SCRIPTS & ENGINE</span>
          <span style="color:var(--gold-light);">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Typed.js Library</div>
          <div class="arch-item-detail">Library animasi ketik ringan yang menyimulasikan teks berganti tanpa penurunan performa rendering peramban.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">AOS Motion Engine</div>
          <div class="arch-item-detail">Pengendali animasi scroll berbasis Intersection Observer yang memicu efek kemunculan saat elemen terlihat.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">WhatsApp URL Composer</div>
          <div class="arch-item-detail">Fungsi JavaScript mandiri yang menyusun format pesan inquiry pemesanan ke skema wa.me secara instan.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Pure Vanilla DOM</div>
          <div class="arch-item-detail">Interaksi tombol dan validasi formulir dijalankan menggunakan JavaScript standar tanpa ketergantungan jQuery.</div>
        </div>
      </div>

      <!-- Delivery Tier -->
      <div class="arch-col">
        <div class="arch-col-title">
          <span>03. CLOUD DEPLOYMENT</span>
          <span style="color:#10B981;">●</span>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">GitHub Pages CDN</div>
          <div class="arch-item-detail">Distribusi statis global dengan uptime 99.9% dan keamanan protokol HTTPS tersertifikasi otomatis.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">EmbedSocial API</div>
          <div class="arch-item-detail">Widget sinkronisasi galeri foto pihak ketiga yang aman dari pembatasan kuota API Instagram langsung.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Compressed PDF Assets</div>
          <div class="arch-item-detail">Penyajian brosur terkompresi untuk pengunduhan instan tanpa membebani kuota data seluler pengunjung.</div>
        </div>
        <div class="arch-item">
          <div class="arch-item-name">Playwright E2E Suite</div>
          <div class="arch-item-detail">Verifikasi otomatis lintas resolusi desktop dan mobile memastikan seluruh fitur template berfungsi sempurna.</div>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH WEB ARCHITECTURE</div>
      <div>CORE TECH STACK & SYSTEM TOPOLOGY</div>
      <div>PAGE 09 / 10</div>
    </div>
  </div>

  <!-- ==================== SLIDE 10: CLOSING ==================== -->
  <div class="slide closing-slide">
    <div class="editorial-badge" style="font-size:12px; padding:6px 16px;">
      PORTOGRAPH STUDIO TEMPLATE
    </div>
    <h1 class="closing-title">FINE-ART WEDDING PHOTOGRAPHY<br>WEB ARCHITECTURE</h1>
    
    <p style="font-size: 15px; color: #CBC9C3; max-width: 680px; font-weight: 400; line-height: 1.5;">
      Solusi web portofolio studio fotografi pernikahan modern yang menggabungkan kemewahan estetika editorial, animasi dinamis Typed.js, galeri sosial langsung, dan konversi reservasi instan via WhatsApp.
    </p>

    <div class="closing-pills">
      <div class="editorial-card" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">💍 FINE-ART EDITORIAL</div>
      <div class="editorial-card" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">⌨️ TYPED.JS HERO</div>
      <div class="editorial-card" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">🧭 SCROLLSPY DOCK</div>
      <div class="editorial-card" style="padding: 6px 14px; font-weight: 700; font-size: 11px;">📸 INSTAGRAM FEED</div>
      <div class="editorial-card" style="padding: 6px 14px; font-weight: 700; font-size: 11px; border-color:#10B981; color:#10B981;">💬 WHATSAPP BOOKING</div>
    </div>

    <div class="live-hero-card">
      <div style="font-family:'Playfair Display',serif; font-size:12px; font-weight:700; color:var(--gold-light); letter-spacing:0.06em; text-transform:uppercase;">
        LIVE PRODUCTION ENVIRONMENT
      </div>
      <div class="live-url-text">https://widifirmaan.web.id/bootstrap-portograph-template/</div>
      <div style="font-size:11px; color:#A0A0AA; font-weight:500;">
        Built with Bootstrap 5.1.3 • Typed.js • AOS Motion • WhatsApp Click-to-Chat
      </div>
    </div>

    <div class="slide-footer" style="width: 100%; margin-top: 15px;">
      <div>ENGINEERED BY WIDI FIRMANSYAH</div>
      <div>PRODUCTION-READY WEB PLATFORM</div>
      <div>PAGE 10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`📄 Presentation HTML written to: ${htmlFilePath}`);

console.log('🚀 Launching Chromium with Playwright to render Portograph PDF...');

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
  console.log('🖨️  Rendering Multi-Page A4 Landscape Presentation PDF (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    preferCSSPageSize: true,
  });

  // 2. Continuous Poster Mode (Single tall scroll)
  console.log('📜 Rendering Continuous Single-Scroll Showcase PDF (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background: #111317 !important;
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

  console.log('\n================================================================================');
  console.log('🎉 PORTOGRAPH STUDIO ARCHITECTURE PDFS SUCCESSFULLY GENERATED!');
  console.log(`📦 Multi-Page Deck (Slides)   : ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (10 Pages A4 Landscape)`);
  console.log(`   -> Saved: ${slidePdfPath}`);
  console.log(`📦 Continuous Poster (Scroll) : ${(contStat.size / 1024 / 1024).toFixed(2)} MB (1 Long Showcase Page)`);
  console.log(`   -> Saved: ${continuousPdfPath}`);
  console.log('================================================================================\n');
}

renderPDF().catch((err) => {
  console.error('❌ Error during PDF generation:', err);
  process.exit(1);
});
