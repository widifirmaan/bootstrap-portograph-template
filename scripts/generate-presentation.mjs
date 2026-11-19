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
    console.warn(`Peringatan: Screenshot tidak ditemukan: ${filePath}`);
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

console.log('Menyusun HTML presentasi dengan style murni Portograph Editorial Sapphire...');

const htmlContent = `<!DOCTYPE html>
<html lang="id">
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
            <span class="tech-pill">PHP Mailer Ready</span>
          </div>
          <h1 style="font-size: 40px; font-weight: 900; line-height: 1.1; margin-bottom: 16px;">
            Arsitektur Web Portofolio &amp; Layanan Studio Fotografi
          </h1>
          <p style="font-size: 14.5px; color: var(--text-body); line-height: 1.55; margin-bottom: 24px;">
            Sistem web editorial studio foto berbasis Bootstrap 5 dengan navigasi floating sidebar, galeri filter masonry dinamis, inspeksi media resolusi tinggi, dan alur reservasi terpadu.
          </p>
          <div class="clean-card" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 14px 18px;">
            <div>
              <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">DESAIN SISTEM</div>
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

  <!-- SLIDE 2: LATAR BELAKANG & TUJUAN REKAYASA -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Arsitektur &amp; Fondasi</div>
        <div class="brand-subtitle">Spesifikasi Kebutuhan Web</div>
      </div>
      <div class="badge-pill">DECK-PORTO-02 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Fondasi Rekayasa Web</div>
        <h2 class="slide-title">Kebutuhan Display Editorial &amp; Konversi Reservasi Klien</h2>
        <p class="slide-subtitle">Merancang platform visual bagi fotografer profesional dengan keseimbangan kualitas gambar tinggi dan performa loading responsif.</p>
      </div>

      <div class="layout-grid-3">
        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">01 &bull; KENDALA TEKNIS</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Beban Aset Gambar Berat</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Foto beresolusi tinggi rawan memperlambat First Contentful Paint dan memicu layout shift jika dimensi aspek rasio kontainer tidak didefinisikan secara presisi.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">02 &bull; SOLUSI ARSITEKTUR</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Masonry Terisolasi &amp; Lazy Loading</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Pengaturan container wrapper terstandarisasi dengan kalkulasi koordinat Isotope dan pemuatan bertahap berbasis intersection observer tanpa jeda.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">03 &bull; ERGONOMI NAVIGASI</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Navigasi Floating Pill 50px</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Bilah navigasi samping melayang dengan radius 50px yang mengekspansi label saat kursor melintas, menjaga kanvas galeri tetap luas dan leluasa dinikmati.
          </p>
        </div>
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; ARSITEKTUR SISTEM</div>
      <div>STANDARISASI WEB EDITORIAL</div>
      <div>02 / 10</div>
    </div>
  </div>

  <!-- SLIDE 3: FLOATING SIDEBAR NAVIGATION -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Sistem Navigasi</div>
        <div class="brand-subtitle">Vertical Floating Pill Bar &amp; Mobile Drawer</div>
      </div>
      <div class="badge-pill">DECK-PORTO-03 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Komponen Antarmuka Pengguna</div>
        <h2 class="slide-title">Navigasi Mengambang Vertikal Berbentuk Kapsul</h2>
        <p class="slide-subtitle">Implementasi navigasi samping modular dengan indikator segmen aktif otomatis dan mode drawer seluler bebas hambatan.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.heroMobile}" alt="Portograph Mobile View &amp; Navigation">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Icon Pill Radius 50px dengan Expandable Text</div>
            <div class="feature-item-desc">
              Menu desktop berukuran 56x56px yang melebar secara mulus menjadi teks lengkap dengan latar belakang warna Sapphire Blue (#0563bb) saat di-hover.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Scrollspy Segment Tracking</div>
            <div class="feature-item-desc">
              Deteksi posisi scroll pengguna yang secara dinamis memperbarui kelas aktif pada tautan menu menggunakan listener posisi vertikal window.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Mobile Hamburger Drawer Terisolasi</div>
            <div class="feature-item-desc">
              Tombol toggler berlingkar 50px di sudut kanan atas layar seluler yang membuka menu off-canvas dengan transisi CSS transform hardware-accelerated.
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
        <div class="brand-title">Modul Galeri</div>
        <div class="brand-subtitle">Isotope.js Masonry &amp; Multi-Category Filter</div>
      </div>
      <div class="badge-pill">DECK-PORTO-04 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Mesin Filter Portofolio</div>
        <h2 class="slide-title">Grid Portofolio Masonry dengan Filter Kategori Real-Time</h2>
        <p class="slide-subtitle">Pengelompokan karya fotografi (Wedding, Portrait, Commercial) dengan animasi relokasi elemen tanpa kedipan layar.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Filter Tab Kapsul Terisolasi</div>
            <div class="feature-item-desc">
              Kancing tab filter dengan gaya kapsul pill yang memicu seleksi selector kelas data-filter secara instan melalui callback Isotope layout.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Corner Bracket Border Effect</div>
            <div class="feature-item-desc">
              Efek bingkai sudut dekoratif (3px solid #d7dce1) yang bertransisi ke posisi fokus saat kursor pengguna mendekati kartu karya fotografi.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Zero Layout Thrashing Recalculation</div>
            <div class="feature-item-desc">
              Penetapan lebar persentase dan gambar responsif yang mencegah reflow berulang pada container galeri selama kalkulasi ulang koordinat.
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
        <div class="brand-title">Pratinjau Media</div>
        <div class="brand-subtitle">GLightbox Modal &amp; Touch Gestures</div>
      </div>
      <div class="badge-pill">DECK-PORTO-05 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Inspeksi Detail Foto</div>
        <h2 class="slide-title">Pratinjau Foto Resolusi Tinggi dengan GLightbox</h2>
        <p class="slide-subtitle">Modal penampil foto modern yang mendukung gestur cubit, usap layar sentuh, dan navigasi keyboard berkecepatan tinggi.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.portfolioMobile}" alt="Portograph Portfolio Mobile View">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Integrasi GLightbox Ringan</div>
            <div class="feature-item-desc">
              Pustaka modal murni tanpa dependensi jQuery yang menangani transisi zoom dan perpindahan antar foto dalam album secara mulus.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Dukungan Navigasi Sentuh &amp; Keyboard</div>
            <div class="feature-item-desc">
              Pengguna gawai layar sentuh dapat menggeser foto secara alami, sementara pengguna desktop dapat memanfaatkan tombol panah keyboard dan tombol Escape.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Asynchronous High-Res Image Fetching</div>
            <div class="feature-item-desc">
              Thumbnail berbobot ringan ditampilkan di halaman utama, sementara file resolusi penuh hanya diunduh saat modal dibuka pengguna.
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

  <!-- SLIDE 6: PAKET LAYANAN & PERBANDINGAN HARGA -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Komersial &amp; Konversi</div>
        <div class="brand-subtitle">Package Tiering &amp; Transparent Breakdown</div>
      </div>
      <div class="badge-pill">DECK-PORTO-06 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Struktur Paket Layanan</div>
        <h2 class="slide-title">Daftar Paket Fotografi dengan Komparasi Transparan</h2>
        <p class="slide-subtitle">Penyusunan tingkatan paket (Silver, Gold, Platinum) dengan daftar fitur terperinci dan tombol aksi reservasi instan.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Kartu Bertingkat dengan Elevasi Visual</div>
            <div class="feature-item-desc">
              Penonjolan paket terfavorit dengan border Sapphire Blue dan bayangan elevasi soft 0 4px 20px untuk membimbing keputusan calon klien.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Detail Spesifikasi Sesi &amp; Deliverables</div>
            <div class="feature-item-desc">
              Rincian jumlah fotografer, durasi sesi pemotretan, album cetak eksklusif, serta ketersediaan flash drive data digital beresolusi master.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Deep-Linking Call to Action ke Formulir</div>
            <div class="feature-item-desc">
              Tautan tombol 'Pilih Paket' yang secara otomatis menggulir halus ke bagian reservasi dan mengisi pilihan paket pada formulir pemesanan.
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

  <!-- SLIDE 7: FORMULIR RESERVASI & VALIDASI -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Alur Reservasi</div>
        <div class="brand-subtitle">Interactive Booking Flow &amp; Date Picker</div>
      </div>
      <div class="badge-pill">DECK-PORTO-07 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Interaksi Pengguna</div>
        <h2 class="slide-title">Formulir Pemesanan Sesi Foto dengan Validasi Klien</h2>
        <p class="slide-subtitle">Antarmuka formulir pemesanan yang higienis dengan umpan balik validasi real-time dan penanganan asynchronous.</p>
      </div>

      <div class="layout-split">
        <div class="visual-stage">
          <img src="${images.bookingDesktop}" alt="Portograph Booking Form Desktop">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Validasi Sisi Klien Real-Time</div>
            <div class="feature-item-desc">
              Pemeriksaan format email, nomor telepon seluler, dan kelengkapan tanggal reservasi sebelum data dikirimkan ke endpoint pemrosesan.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Styling Input Elegan &amp; Accessible</div>
            <div class="feature-item-desc">
              Kontrol formulir berlatar putih dengan border #e6e9ec, transisi fokus Sapphire Blue, serta label semantik ramah pembaca layar (screen reader).
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Feedback State Loading &amp; Konfirmasi</div>
            <div class="feature-item-desc">
              Indikator proses pengiriman data yang jelas serta pesan status berhasil/gagal yang terisolasi tanpa memicu reload halaman penuh.
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

  <!-- SLIDE 8: ADAPTASI ERGONOMI SELULER -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Ergonomi Seluler</div>
        <div class="brand-subtitle">Responsive Layout &amp; Touch Target</div>
      </div>
      <div class="badge-pill">DECK-PORTO-08 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Pengalaman Pengguna Seluler</div>
        <h2 class="slide-title">Optimasi Sentuhan &amp; Keterbacaan pada Layar Seluler</h2>
        <p class="slide-subtitle">Penyesuaian tata letak grid satu kolom pada perangkat seluler demi kemudahan pengoperasian dengan satu jempol tangan.</p>
      </div>

      <div class="layout-split-reversed">
        <div class="visual-stage">
          <img src="${images.bookingMobile}" alt="Portograph Booking Mobile Ergonomics">
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <div class="feature-item-title">Touch Target Minimum 48x48px</div>
            <div class="feature-item-desc">
              Seluruh tombol aksi dan bidang sentuh masukan formulir disesuaikan dengan pedoman ergonomi human interface seluler.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Fluid Typography Scaling</div>
            <div class="feature-item-desc">
              Penyesuaian hierarki ukuran font Raleway dan Poppins menggunakan unit clamp responsif untuk menjaga harmoni visual di berbagai dimensi layar.
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-item-title">Pencegahan Horizontal Overflow</div>
            <div class="feature-item-desc">
              Pengaturan box-sizing border-box dan margin komposit terkalibrasi yang mencegah pergeseran horizontal yang mengganggu pengguna.
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

  <!-- SLIDE 9: REKAYASA KINERJA & CORE WEB VITALS -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Rekayasa Kinerja</div>
        <div class="brand-subtitle">Asset Loading &amp; Core Web Vitals</div>
      </div>
      <div class="badge-pill">DECK-PORTO-09 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Kecepatan &amp; Kualitas Kode</div>
        <h2 class="slide-title">Efisiensi Distribusi Aset &amp; Skor Web Vitals Tinggi</h2>
        <p class="slide-subtitle">Strategi pemuatan modular yang meminimalisasi render-blocking resource dan mengamankan nilai metrik LCP yang cepat.</p>
      </div>

      <div class="layout-grid-3">
        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">DISTRIBUSI ASSET</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">CSS &amp; JS Minified</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Pemisahan modul skrip inti dengan dependensi pihak ketiga, didukung kompresi berkas style.css untuk menghemat konsumsi kuota data klien.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">LAYOUT STABILITY</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Zero CLS Grid Skeleton</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Pemberian atribut width dan height eksplisit pada seluruh gambar portofolio untuk mencegah lonjakan layout saat gambar selesai dimuat.
          </p>
        </div>

        <div class="clean-card">
          <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--accent-sapphire); margin-bottom: 8px;">STANDAR W3C</div>
          <h3 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;">Semantic HTML5 Markup</h3>
          <p style="font-size: 12.5px; color: var(--text-body); line-height: 1.5;">
            Struktur markup semantik yang rapi mempermudah pengindeksan mesin pencari Google (SEO) dan integrasi metadata Open Graph fotografi.
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

  <!-- SLIDE 10: RANGKUMAN ARSITEKTUR & PRODUKSI -->
  <div class="slide">
    <div class="slide-header">
      <div class="brand-pill">
        <div class="brand-dot"></div>
        <div class="brand-title">Ringkasan Proyek</div>
        <div class="brand-subtitle">Spesifikasi Akhir &amp; Kesiapan Rilis</div>
      </div>
      <div class="badge-pill">DECK-PORTO-10 / 10</div>
    </div>

    <div class="slide-content">
      <div class="title-block">
        <div class="slide-category">Rangkuman Akhir Rekayasa</div>
        <h2 class="slide-title">Kesimpulan Implementasi Portograph Studio</h2>
        <p class="slide-subtitle">Platform web portofolio fotografi yang menggabungkan estetika editorial modern dengan arsitektur teknis yang stabil.</p>
      </div>

      <div class="layout-grid-4">
        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">FRAMEWORK</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-sapphire); margin-top: 4px; margin-bottom: 4px;">Bootstrap 5</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Grid fleksibel 12 kolom dengan utility class terstandarisasi.</p>
        </div>

        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">INTERACTION</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-sapphire); margin-top: 4px; margin-bottom: 4px;">Isotope.js</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Penyaringan kategori karya foto instan tanpa reload.</p>
        </div>

        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">INSPECTION</div>
          <div style="font-size: 18px; font-weight: 800; color: var(--accent-sapphire); margin-top: 4px; margin-bottom: 4px;">GLightbox</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Pratinjau visual resolusi tinggi dengan navigasi sentuh.</p>
        </div>

        <div class="clean-card">
          <div style="font-size: 11px; color: var(--text-muted); font-family: 'JetBrains Mono', monospace;">STATUS</div>
          <div style="font-size: 18px; font-weight: 800; color: #16A34A; margin-top: 4px; margin-bottom: 4px;">Siap Produksi</div>
          <p style="font-size: 12px; color: var(--text-body); line-height: 1.45;">Teruji pada seluruh breakpoint layar perangkat modern.</p>
        </div>
      </div>

      <div class="visual-stage" style="min-height: 160px; max-height: 180px; margin-top: 15px;">
        <img src="${images.packagesMobile}" alt="Portograph Packages Mobile Final View">
      </div>
    </div>

    <div class="slide-footer">
      <div>PORTOGRAPH &bull; KESIMPULAN REKAYASA WEB</div>
      <div>WIDI FIRMANSYAH &bull; LEAD DEVELOPER</div>
      <div>10 / 10</div>
    </div>
  </div>

</body>
</html>
`;

const htmlFilePath = path.join(projectRoot, 'presentation.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
console.log(`HTML presentasi disimpan di: ${htmlFilePath}`);

console.log('Menjalankan Playwright Chromium untuk render PDF Portograph Editorial Sapphire...');

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
        background: #F8F9FA !important;
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

  console.log('\nPDF Portograph Editorial Sapphire berhasil dibuat:');
  console.log(`- Multi-Page Deck: ${(slideStat.size / 1024 / 1024).toFixed(2)} MB (${slidePdfPath})`);
  console.log(`- Continuous Poster: ${(contStat.size / 1024 / 1024).toFixed(2)} MB (${continuousPdfPath})\n`);
}

renderPDF().catch((err) => {
  console.error('Error saat render PDF:', err);
  process.exit(1);
});
