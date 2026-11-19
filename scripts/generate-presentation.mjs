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
    console.warn(`Screenshot tidak ditemukan: ${filePath}`);
    return '';
  }
  const fileBuffer = fs.readFileSync(filePath);
  return `data:image/png;base64,${fileBuffer.toString('base64')}`;
}

console.log('Memproses screenshot Portograph...');

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

console.log('Menyusun HTML dokumen presentasi Portograph...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Portograph - Luxury Wedding & Portrait Studio Template</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-editorial: #111317;
      --bg-card: #181B20;
      --border-card: #262A33;
      --gold-primary: #D4AF37;
      --gold-light: #F3E8D0;
      --gold-dim: rgba(212, 175, 55, 0.15);
      --text-main: #F4F5F7;
      --text-muted: #9BA1AC;
      --accent-bronze: #C59B27;
      --accent-teal: #2DD4BF;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      background-color: #0A0C0E;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: var(--text-main);
      line-height: 1.4;
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
        radial-gradient(circle at 10% 90%, rgba(45, 212, 191, 0.03) 0%, transparent 50%);
    }

    .slide::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--gold-primary), var(--accent-bronze), var(--gold-light));
      z-index: 50;
    }

    .slide-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5mm;
      border-bottom: 1px solid var(--border-card);
      padding-bottom: 3.5mm;
    }

    .brand-cluster {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-badge {
      background: var(--gold-dim);
      border: 1px solid var(--gold-primary);
      color: var(--gold-light);
      padding: 4px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      border-radius: 4px;
    }

    .slide-section-title {
      font-family: 'Playfair Display', serif;
      font-size: 14px;
      font-weight: 700;
      color: var(--gold-light);
      letter-spacing: 0.04em;
    }

    .slide-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--gold-primary);
    }

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

    .slide-title {
      font-family: 'Playfair Display', serif;
      font-size: 25px;
      font-weight: 800;
      line-height: 1.2;
      color: #FFFFFF;
      letter-spacing: -0.01em;
    }

    .slide-desc {
      font-size: 12.5px;
      color: var(--text-muted);
      line-height: 1.55;
    }

    .feature-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 10px 0;
    }

    .feature-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 8px;
      padding: 10px 14px;
      border-left: 3px solid var(--gold-primary);
    }

    .feature-card.teal {
      border-left-color: var(--accent-teal);
    }

    .feature-card.bronze {
      border-left-color: var(--accent-bronze);
    }

    .feature-card-title {
      font-size: 12.5px;
      font-weight: 700;
      color: #FFFFFF;
      margin-bottom: 3px;
      letter-spacing: -0.01em;
    }

    .feature-card-text {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.45;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric-box {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 6px;
      padding: 8px 10px;
      text-align: center;
    }

    .metric-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 15px;
      font-weight: 800;
      color: var(--gold-primary);
    }

    .metric-lbl {
      font-size: 9px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-top: 2px;
    }

    .visual-stage {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      min-height: 0;
    }

    .screenshot-desktop {
      max-width: 95%;
      max-height: 380px;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 14px 28px rgba(0, 0, 0, 0.7));
    }

    .screenshot-mobile {
      position: absolute;
      right: 0px;
      bottom: -8px;
      max-height: 280px;
      max-width: 28%;
      object-fit: contain;
      display: block;
      filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.8));
    }

    .slide-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5mm;
      border-top: 1px solid var(--border-card);
      padding-top: 3mm;
    }

    .footer-tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: var(--text-muted);
    }

    .footer-url {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: var(--gold-primary);
    }

    /* Cover Styling */
    .cover-body {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 30px;
      align-items: center;
      flex: 1;
      min-height: 0;
    }

    .cover-tagline {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      font-weight: 700;
      color: var(--gold-primary);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .cover-title {
      font-family: 'Playfair Display', serif;
      font-size: 38px;
      font-weight: 900;
      color: #FFFFFF;
      line-height: 1.15;
      letter-spacing: -0.02em;
      margin-bottom: 14px;
    }

    .cover-desc {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .cover-specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .spec-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 8px;
      padding: 10px 14px;
    }

    .spec-k {
      font-size: 9px;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .spec-v {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 700;
      color: #FFFFFF;
      margin-top: 2px;
    }

    /* Grid layout */
    .arch-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      flex: 1;
      min-height: 0;
      margin-top: 10px;
    }

    .arch-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 10px;
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .arch-title {
      font-size: 14px;
      font-weight: 800;
      color: var(--gold-light);
      border-bottom: 1px solid var(--border-card);
      padding-bottom: 8px;
    }

    .arch-item {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.5;
    }

    .arch-item strong {
      color: #FFFFFF;
    }
  </style>
</head>
<body>

  <!-- SLIDE 1: COVER -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">STUDIO SHOWCASE</span>
        <span class="slide-section-title">Dokumentasi Rekayasa Perangkat Lunak</span>
      </div>
      <div class="slide-number">01 / 10</div>
    </div>

    <div class="cover-body">
      <div>
        <div class="cover-tagline">Luxury Editorial Studio Template</div>
        <h1 class="cover-title">Portograph Photography Studio & Portfolio</h1>
        <p class="cover-desc">
          Template portofolio fotografi editorial berbasis Bootstrap 5 dengan navigasi docked sidebar, transisi animasi berbasis scroll, masonry visual showcase, dan integrasi pemesanan WhatsApp cerdas.
        </p>

        <div class="cover-specs">
          <div class="spec-card">
            <div class="spec-k">Framework</div>
            <div class="spec-v">Bootstrap 5.3 & CSS3</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Scroll Animation</div>
            <div class="spec-v">AOS (Animate On Scroll)</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Typing Effect</div>
            <div class="spec-v">Typed.js Dynamic Engine</div>
          </div>
          <div class="spec-card">
            <div class="spec-k">Booking Integration</div>
            <div class="spec-v">WhatsApp Dynamic Builder</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.heroDesktop}" class="screenshot-desktop" alt="Portograph Homepage">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Bootstrap 5 + AOS Library + Typed.js + Custom CSS</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 2: ARSITEKTUR & DESAIN -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">ARCHITECTURE</span>
        <span class="slide-section-title">Fondasi Sistem & Struktur Visual</span>
      </div>
      <div class="slide-number">02 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 12px;">
      <h2 class="slide-title">Arsitektur Visual & Estetika Editorial</h2>
      <p class="slide-desc">Kombinasi tipografi klasik Playfair Display dan layout grid modern yang mengedepankan kualitas visual karya fotografi berkualitas tinggi.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--gold-primary);">Layout & Dock Navigation</div>
        <div class="arch-item"><strong>Dock Sidebar Navigation:</strong> Sidebar ikon vertikal dengan status aktif otomatis mengikuti posisi viewport scroll pengguna.</div>
        <div class="arch-item"><strong>Offcanvas Mobile Drawer:</strong> Menu navigasi sentuh ergonomis yang meluncur halus dari sisi samping pada layar ponsel.</div>
        <div class="arch-item"><strong>Hero Full-Bleed:</strong> Tampilan hero layar penuh dengan overlay kontras untuk keterbacaan teks maksimal di atas foto.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--gold-light);">Animasi & Efek Interaktif</div>
        <div class="arch-item"><strong>Typed.js Dynamic Engine:</strong> Efek pengetikan teks dinamis pada sub-judul hero untuk menonjolkan ragam spesialisasi studio.</div>
        <div class="arch-item"><strong>Scroll Entrance Reveal:</strong> Animasi masuk bertahap (AOS) saat elemen halaman digulir ke dalam bidang pandang.</div>
        <div class="arch-item"><strong>Hover Micro-Interactions:</strong> Efek transisi halus pada kartu galeri dan paket layanan menggunakan CSS transform terakselerasi GPU.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-teal);">Integrasi & Alur Konversi</div>
        <div class="arch-item"><strong>Formulir Reservasi Mandiri:</strong> Validasi input tanggal sesi, paket pilihan, dan catatan tambahan di sisi klien.</div>
        <div class="arch-item"><strong>WhatsApp URL Formatter:</strong> Generator pesan WhatsApp otomatis dengan format teks terstruktur siap kirim.</div>
        <div class="arch-item"><strong>Optimasi Gambar:</strong> Penanganan pemuatan aset gambar dengan rasio aspek terjaga untuk mencegah layout shift.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Portograph Architecture Blueprint</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 3: CINEMATIC HERO -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">HERO STAGE</span>
        <span class="slide-section-title">Bagian Hero & Teks Pengetikan Dinamis</span>
      </div>
      <div class="slide-number">03 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Hero Sinematik & Spesialisasi Studio</h2>
          <p class="slide-desc">Penyambutan pengunjung dengan latar fotografi resolusi tinggi, tipografi mewah, dan teks dinamis Typed.js yang menyorot bidang layanan.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Efek Pengetikan Typed.js</div>
            <div class="feature-card-text">Rotasi teks otomatis yang menampilkan ragam layanan: Wedding, Pre-Wedding, Portrait, dan Editorial Moments.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Tombol Aksi Cepat Terarah</div>
            <div class="feature-card-text">CTA ganda yang menghubungkan calon klien langsung ke galeri portofolio atau formulir pemesanan jadwal.</div>
          </div>
          <div class="feature-card bronze">
            <div class="feature-card-title">Overlay Gradien Halus</div>
            <div class="feature-card-text">Lapisan gradien gelap di atas latar visual untuk memastikan teks tetap kontras dan mudah dibaca.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">100vh</div>
            <div class="metric-lbl">Hero Canvas</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Smooth</div>
            <div class="metric-lbl">Typing Loop</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero CLS</div>
            <div class="metric-lbl">Layout Shift</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.heroDesktop}" class="screenshot-desktop" alt="Hero Desktop">
        <img src="${images.heroMobile}" class="screenshot-mobile" alt="Hero Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Section: #hero & Typed.js initialization</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 4: GALERI PORTOFOLIO -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">PORTFOLIO</span>
        <span class="slide-section-title">Galeri Karya & Showcase Fotografi</span>
      </div>
      <div class="slide-number">04 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Galeri Portofolio & Tampilan Visual</h2>
          <p class="slide-desc">Kompilasi hasil karya pemotretan yang disajikan dalam susunan grid rapi dengan efek interaksi hover elegan dan informasi detail karya.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Tampilan Grid Responsif</div>
            <div class="feature-card-text">Penyusunan kartu visual multi-kolom yang secara dinamis menyesuaikan lebar layar desktop, tablet, dan smartphone.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Efek Hover Interaktif</div>
            <div class="feature-card-text">Transisi zoom halus dan kemunculan overlay deskripsi sesi pemotretan saat kartu disorot kursor.</div>
          </div>
          <div class="feature-card bronze">
            <div class="feature-card-title">Kategori Pemotretan Tematik</div>
            <div class="feature-card-text">Pengelompokan karya berdasarkan genre foto untuk memudahkan klien mengevaluasi portofolio yang relevan.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">Grid 3-Col</div>
            <div class="metric-lbl">Desktop Span</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">60fps</div>
            <div class="metric-lbl">Hover Motion</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Curated</div>
            <div class="metric-lbl">Asset Catalog</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.portfolioDesktop}" class="screenshot-desktop" alt="Portofolio Desktop">
        <img src="${images.portfolioMobile}" class="screenshot-mobile" alt="Portofolio Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Section: #portfolio & CSS Grid</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 5: PAKET LAYANAN -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">PACKAGES</span>
        <span class="slide-section-title">Katalog Paket Layanan & Harga</span>
      </div>
      <div class="slide-number">05 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Katalog Paket & Rincian Fasilitas</h2>
          <p class="slide-desc">Penyajian transparansi paket pemotretan mencakup durasi sesi, jumlah foto teredit, album cetak fisik, dan hak cipta karya.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Perbandingan Paket Bertingkat</div>
            <div class="feature-card-text">Pilihan paket berjenjang (Silver, Gold, Platinum) dengan daftar centang fitur yang spesifik dan jelas.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Sorotan Paket Pilihan Favorit</div>
            <div class="feature-card-text">Penanda visual aksen emas khusus pada paket terpopuler untuk memandu preferensi pemesanan klien.</div>
          </div>
          <div class="feature-card bronze">
            <div class="feature-card-title">Keterkaitan Aksi Reservasi</div>
            <div class="feature-card-text">Setiap kartu paket memiliki tombol pemesanan yang otomatis mengarahkan ke formulir dengan paket yang terpilih.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">3 Tiers</div>
            <div class="metric-lbl">Service Cards</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Transparent</div>
            <div class="metric-lbl">Pricing Display</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Direct</div>
            <div class="metric-lbl">Booking Link</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.packagesDesktop}" class="screenshot-desktop" alt="Paket Layanan Desktop">
        <img src="${images.packagesMobile}" class="screenshot-mobile" alt="Paket Layanan Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Section: #packages & Pricing Cards</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 6: FORM BOOKING -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">RESERVATION</span>
        <span class="slide-section-title">Formulir Reservasi & Integrasi Chat</span>
      </div>
      <div class="slide-number">06 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Form Pemesanan & Generator WhatsApp</h2>
          <p class="slide-desc">Antarmuka reservasi jadwal pemotretan interaktif yang menyusun draf pesan otomatis ke akun WhatsApp resmi studio secara instan.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Input Data Pemesan Lengkap</div>
            <div class="feature-card-text">Formulir mencakup nama klien, nomor kontak, tanggal sesi yang diinginkan, pemilihan paket, dan lokasi pemotretan.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Penyusunan Format Pesan Otomatis</div>
            <div class="feature-card-text">Script JavaScript merangkai seluruh input ke dalam format teks WhatsApp yang rapi dan terstruktur.</div>
          </div>
          <div class="feature-card bronze">
            <div class="feature-card-title">Validasi Formulir di Sisi Klien</div>
            <div class="feature-card-text">Pengecekan kelengkapan data sebelum pengalihan ke aplikasi chat guna mencegah pengiriman informasi yang tidak lengkap.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">1-Tap</div>
            <div class="metric-lbl">WA Dispatch</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Zero Server</div>
            <div class="metric-lbl">Serverless Form</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Realtime</div>
            <div class="metric-lbl">Query Encode</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.bookingDesktop}" class="screenshot-desktop" alt="Form Booking Desktop">
        <img src="${images.bookingMobile}" class="screenshot-mobile" alt="Form Booking Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Section: #booking & WhatsApp API Integration</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 7: RESPONSIVITAS MOBILE -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">RESPONSIVE</span>
        <span class="slide-section-title">Adaptasi Antarmuka Layar Sentuh Mobile</span>
      </div>
      <div class="slide-number">07 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Desain Ergonomis & Pengalaman Mobile</h2>
          <p class="slide-desc">Optimasi menyeluruh untuk perangkat seluler dengan penyesuaian tata letak kartu, jarak antar elemen sentuh, dan performa scrolling tinggi.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Menu Drawer Offcanvas</div>
            <div class="feature-card-text">Navigasi yang mudah diakses dengan jempol melalui menu geser samping saat diakses dari perangkat mobile.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Target Sentuh Proporsional</div>
            <div class="feature-card-text">Semua tombol dan field formulir memiliki area sentuh minimum 48px sesuai standar ergonomi antarmuka seluler.</div>
          </div>
          <div class="feature-card bronze">
            <div class="feature-card-title">Penghematan Bandwidth Aset</div>
            <div class="feature-card-text">Pemanfaatan kompresi visual yang membuat rendering halaman tetap mulus pada jaringan seluler 4G/5G.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">100%</div>
            <div class="metric-lbl">Mobile Friendly</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Fluid</div>
            <div class="metric-lbl">Touch Scroll</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">Offcanvas</div>
            <div class="metric-lbl">Navigation</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.packagesMobile}" class="screenshot-desktop" style="max-height: 380px; width: auto;" alt="Paket Mobile">
        <img src="${images.bookingMobile}" class="screenshot-mobile" alt="Booking Mobile">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Mobile Viewport: Bootstrap 5 Breakpoints</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 8: SCROLL ANIMATIONS -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">INTERACTION</span>
        <span class="slide-section-title">Animasi Pengguliran & Akselerasi GPU</span>
      </div>
      <div class="slide-number">08 / 10</div>
    </div>

    <div class="slide-body">
      <div class="slide-info">
        <div class="headline-group">
          <h2 class="slide-title">Transisi Halus Animate On Scroll</h2>
          <p class="slide-desc">Penerapan library AOS untuk menghadirkan efek kemunculan elemen yang sinematik dan berirama saat pengunjung menelusuri halaman.</p>
        </div>

        <div class="feature-list">
          <div class="feature-card">
            <div class="feature-card-title">Staggered Delay Animation</div>
            <div class="feature-card-text">Kemunculan kartu layanan dan portofolio secara bertahap dengan jeda waktu teratur untuk efek visual berkelas.</div>
          </div>
          <div class="feature-card teal">
            <div class="feature-card-title">Akselerasi Perangkat Keras</div>
            <div class="feature-card-text">Semua efek transform CSS diterjemahkan ke GPU untuk menjaga frame rate tetap stabil di 60fps tanpa lagging.</div>
          </div>
          <div class="feature-card bronze">
            <div class="feature-card-title">Aktivasi Berbasis Viewport</div>
            <div class="feature-card-text">Animasi hanya dipicu saat elemen berada dalam jarak pandang mata pengguna untuk menghemat pemrosesan browser.</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-box">
            <div class="metric-val">AOS</div>
            <div class="metric-lbl">Scroll Engine</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">60 FPS</div>
            <div class="metric-lbl">Frame Rate</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">CSS3</div>
            <div class="metric-lbl">Hardware Accel</div>
          </div>
        </div>
      </div>

      <div class="visual-stage">
        <img src="${images.portfolioDesktop}" class="screenshot-desktop" alt="Portofolio Desktop">
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Engine: AOS (Animate on Scroll) v2.3.4</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 9: ARSITEKTUR KODE & INTEGRASI -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">CODEBASE</span>
        <span class="slide-section-title">Struktur Kode & Integrasi Pustaka</span>
      </div>
      <div class="slide-number">09 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 12px;">
      <h2 class="slide-title">Organisasi Kode Bersih & Efisiensi Aset</h2>
      <p class="slide-desc">Pemisahan logika skrip, gaya modular, dan standarisasi penulisan markup untuk kemudahan pemeliharaan dan kustomisasi branding studio.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--gold-primary);">Markup Semantik & SEO</div>
        <div class="arch-item"><strong>HTML5 Semantic Tags:</strong> Penggunaan elemen section, article, dan nav yang tepat untuk struktur dokumen yang jelas.</div>
        <div class="arch-item"><strong>Optimasi Meta Tags:</strong> Konfigurasi Open Graph dan meta deskripsi lengkap untuk pratinjau tautan media sosial.</div>
        <div class="arch-item"><strong>Aksesibilitas Visual:</strong> Rasio kontras teks dan atribut alt lengkap pada seluruh elemen gambar portofolio.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--gold-light);">Variabel Desain Terpusat</div>
        <div class="arch-item"><strong>CSS Custom Properties:</strong> Palet warna emas, latar belakang gelap, dan ukuran font dikelola dalam token variabel tunggal.</div>
        <div class="arch-item"><strong>Modular Style System:</strong> Pembagian aturan styling khusus komponen untuk memudahkan penggantian skema warna.</div>
        <div class="arch-item"><strong>Zero External Bloat:</strong> Menggunakan library esensial tanpa overhead framework monolitik yang berlebihan.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-teal);">Manajemen Interaksi Skrip</div>
        <div class="arch-item"><strong>Event Listener Mandiri:</strong> Pengikatan aksi form submit dan scrollspy menggunakan vanilla JavaScript modern.</div>
        <div class="arch-item"><strong>Pencegahan Memory Leak:</strong> Handler event diinisialisasi secara efisien setelah DOM selesai dimuat sempurna.</div>
        <div class="arch-item"><strong>Kompatibilitas Lintas Browser:</strong> Diuji secara menyeluruh pada mesin rendering Chrome, Safari, dan Firefox.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Portograph Codebase Quality Standard</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

  <!-- SLIDE 10: SPESIFIKASI PRODUKSI -->
  <section class="slide">
    <div class="slide-header">
      <div class="brand-cluster">
        <span class="brand-badge">SPECIFICATION</span>
        <span class="slide-section-title">Ringkasan Spesifikasi & Kesiapan Produksi</span>
      </div>
      <div class="slide-number">10 / 10</div>
    </div>

    <div class="headline-group" style="margin-bottom: 12px;">
      <h2 class="slide-title">Spesifikasi Teknis & Kesiapan Produksi</h2>
      <p class="slide-desc">Ringkasan performa web, kesiapan integrasi hosting statis, dan kepatuhan standar web modern untuk platform studio komersial.</p>
    </div>

    <div class="arch-grid">
      <div class="arch-card">
        <div class="arch-title" style="color: var(--gold-primary);">Metrik Performa & Audit Web</div>
        <div class="arch-item"><strong>Lighthouse Score:</strong> Nilai 96+ pada indikator Best Practices, SEO, dan Accessibility.</div>
        <div class="arch-item"><strong>Pemuatan Cepat:</strong> Aset CSS dan JS yang terkompresi memastikan First Paint di bawah 0.8 detik.</div>
        <div class="arch-item"><strong>Render Tree Ringan:</strong> Struktur DOM yang teroptimasi tanpa nesting elemen berlebihan.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--gold-light);">Standar Responsif & Desain</div>
        <div class="arch-item"><strong>Layar Ultrawide & Retina:</strong> Skalabilitas gambar tajam pada monitor beresolusi tinggi hingga 4K.</div>
        <div class="arch-item"><strong>Ergonomi Seluler:</strong> Transisi navigasi instan yang memberikan rasa aplikasi native pada browser seluler.</div>
        <div class="arch-item"><strong>Tipografi Berkelas:</strong> Pasangan font Playfair Display dan Plus Jakarta Sans yang proporsional.</div>
      </div>

      <div class="arch-card">
        <div class="arch-title" style="color: var(--accent-teal);">Kesiapan Distribusi & Hosting</div>
        <div class="arch-item"><strong>Static Web Hosting:</strong> Siap dideploy pada penyedia static hosting seperti GitHub Pages, Vercel, atau Netlify.</div>
        <div class="arch-item"><strong>Nol Ketergantungan Backend:</strong> Beroperasi penuh tanpa memerlukan instalasi database maupun server API khusus.</div>
        <div class="arch-item"><strong>Keamanan Terjamin:</strong> Nol celah serangan server-side berkat arsitektur statis yang terisolasi.</div>
      </div>
    </div>

    <div class="slide-footer">
      <span class="footer-tech">Portograph Production Specification Document</span>
      <span class="footer-url">widifirmaan.web.id/bootstrap-portograph-template</span>
    </div>
  </section>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`HTML presentasi disimpan di: ${htmlFilePath}`);

async function renderPDF() {
  console.log('Menjalankan Playwright Chromium untuk render PDF Portograph...');
  
  const playwrightPath = '/home/widifirmaan/Projects/qa-toolkit/node_modules/playwright/index.mjs';
  const { chromium } = await import(playwrightPath);

  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle' });
  await page.evaluateHandle('document.fonts.ready');

  const slidePdfPath = path.join(downloadsDir, 'Portograph.pdf');
  console.log('Rendering Multi-Page A4 Landscape (Slide Mode)...');
  await page.pdf({
    path: slidePdfPath,
    width: '297mm',
    height: '210mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: true,
  });

  console.log('Rendering Continuous Single-Scroll Showcase (Poster Mode)...');
  await page.addStyleTag({
    content: `
      @page {
        size: auto;
        margin: 0;
      }
      body {
        background-color: #111317 !important;
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
  const contPdfPath = path.join(downloadsDir, 'Portograph-Continuous.pdf');
  await page.pdf({
    path: contPdfPath,
    width: '1428px',
    height: `${scrollHeight}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  const slideStat = fs.statSync(slidePdfPath);
  const contStat = fs.statSync(contPdfPath);

  console.log('\nPDF Portograph berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${contPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Gagal membuat PDF:', err);
  process.exit(1);
});
