# 🏰 Royal Güzellik - Güzellik Merkezi Web Sitesi

## 📋 Proje Genel Bakış

Royal Güzellik, modern ve kullanıcı dostu bir güzellik merkezi web sitesidir. React ve Vite teknolojileri kullanılarak geliştirilmiştir.

## 🚀 Teknolojiler

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.0
- **Routing**: React Router DOM 6.30.1
- **Styling**: Tailwind CSS 4.1.13 + Custom CSS
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.539.0
- **Animations**: Lottie React 2.4.1

## 📁 Proje Yapısı

```
royal-guzellik/
├── public/                    # Statik dosyalar
│   └── vite.svg              # Vite logosu
├── src/                      # Kaynak kodlar
│   ├── assets/              # Görseller ve medya dosyaları
│   │   ├── about/           # Hakkımızda sayfası görselleri
│   │   ├── appointment/     # Randevu sayfası görselleri
│   │   ├── contact/         # İletişim sayfası görselleri
│   │   ├── home/            # Ana sayfa görselleri
│   │   └── services/        # Hizmetler sayfası görselleri
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── BottomNav.jsx    # Alt navigasyon menüsü
│   │   └── BottomNav.css    # Alt navigasyon stilleri
│   ├── pages/               # Sayfa bileşenleri
│   │   ├── Home/            # Ana sayfa
│   │   │   ├── Home.jsx     # Ana sayfa bileşeni
│   │   │   └── Home.css     # Ana sayfa stilleri
│   │   ├── About.jsx        # Hakkımızda sayfası
│   │   ├── About.css        # Hakkımızda stilleri
│   │   ├── Services.jsx     # Hizmetler sayfası
│   │   ├── Services.css     # Hizmetler stilleri
│   │   ├── Appointment.jsx  # Randevu sayfası
│   │   ├── Appointment.css  # Randevu stilleri
│   │   ├── Contact.jsx      # İletişim sayfası
│   │   └── Contact.css      # İletişim stilleri
│   ├── App.jsx              # Ana uygulama bileşeni
│   ├── main.jsx             # Uygulama giriş noktası
│   └── index.css            # Global stiller ve Tailwind
├── index.html               # HTML şablonu
├── package.json             # Proje bağımlılıkları
├── vite.config.js           # Vite yapılandırması
├── tailwind.config.js       # Tailwind CSS yapılandırması
└── postcss.config.js        # PostCSS yapılandırması
```

## 🎨 Sayfa Yapısı ve İşlevleri

### 🏠 Ana Sayfa (`/`)
- **Dosya**: `src/pages/Home/Home.jsx`
- **Stil**: `src/pages/Home/Home.css`
- **Özellikler**:
  - Gradient arka plan
  - Sol ve sağ hero görselleri
  - Merkezi navigasyon butonları
  - Alt kısımda metin balonu
  - Responsive tasarım

### 👤 Hakkımızda (`/hakkimizda`)
- **Dosya**: `src/pages/About.jsx`
- **Stil**: `src/pages/About.css`
- **Özellikler**:
  - Şirket bilgileri
  - Ekip tanıtımı
  - Misyon ve vizyon

### 🌿 Hizmetler (`/hizmetler`)
- **Dosya**: `src/pages/Services.jsx`
- **Stil**: `src/pages/Services.css`
- **Özellikler**:
  - Hizmet listesi
  - Görsel galeri
  - Detaylı açıklamalar

### 📅 Randevu Al (`/randevu-al`)
- **Dosya**: `src/pages/Appointment.jsx`
- **Stil**: `src/pages/Appointment.css`
- **Özellikler**:
  - Randevu formu
  - Tarih ve saat seçimi
  - Hizmet seçimi

### 📞 İletişim (`/iletisim`)
- **Dosya**: `src/pages/Contact.jsx`
- **Stil**: `src/pages/Contact.css`
- **Özellikler**:
  - İletişim bilgileri
  - Harita entegrasyonu
  - İletişim formu

## 🧩 Bileşenler

### BottomNav
- **Dosya**: `src/components/BottomNav.jsx`
- **Stil**: `src/components/BottomNav.css`
- **İşlev**: Mobil cihazlarda alt navigasyon menüsü

## 🎨 Stil Sistemi

### Global Stiller (`src/index.css`)
- Tailwind CSS importları
- Özel scrollbar stilleri
- Global reset ve animasyonlar
- Glow button stilleri
- Pill component stilleri

### Sayfa Stilleri
Her sayfa kendi CSS dosyasına sahiptir:
- Responsive tasarım
- Özel animasyonlar
- Renk paleti: Mor tonları (#a67d9e, #8b5a8a)
- Gradient arka planlar

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- npm veya yarn

### Kurulum
```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Üretim için build al
npm run build

# Build'i önizle
npm run preview
```

### Geliştirme Sunucusu
- **URL**: http://localhost:5173/
- **Hot Reload**: Otomatik sayfa yenileme
- **Network Access**: `--host` parametresi ile

## 📱 Responsive Tasarım

- **Desktop**: 1400px ve üzeri
- **Tablet**: 768px - 1399px
- **Mobile**: 767px ve altı

## 🎯 Özellikler

- ✅ Modern React 19 kullanımı
- ✅ React Router ile sayfa yönlendirme
- ✅ Tailwind CSS ile hızlı styling
- ✅ Responsive tasarım
- ✅ Smooth animasyonlar
- ✅ SEO dostu yapı
- ✅ Hızlı yükleme (Vite)
- ✅ Hot reload geliştirme

## 🔧 Yapılandırma Dosyaları

### `vite.config.js`
- React plugin yapılandırması
- Geliştirme sunucusu ayarları

### `tailwind.config.js`
- Tailwind CSS özelleştirmeleri
- Renk paleti tanımları

### `postcss.config.js`
- PostCSS eklentileri
- Autoprefixer yapılandırması

## 📦 Bağımlılıklar

### Ana Bağımlılıklar
- `react`: UI framework
- `react-dom`: DOM rendering
- `react-router-dom`: Sayfa yönlendirme
- `framer-motion`: Animasyonlar
- `lucide-react`: İkonlar
- `lottie-react`: Lottie animasyonları

### Geliştirme Bağımlılıkları
- `vite`: Build tool
- `@vitejs/plugin-react`: React desteği
- `tailwindcss`: CSS framework
- `autoprefixer`: CSS prefix'leri
- `eslint`: Kod kalitesi
- `sass`: SCSS desteği

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Ana Mor**: #a67d9e
- **Koyu Mor**: #8b5a8a
- **Açık Mor**: #c3a4bd
- **Arka Plan**: #fdeef8
- **Beyaz**: #ffffff

### Tipografi
- **Ana Font**: Arial, sans-serif
- **Başlık Font**: Work Sans
- **Metin Font**: Crimson Text

### Animasyonlar
- Fade in/out efektleri
- Hover animasyonları
- Glow efektleri
- Shimmer animasyonları

## 🔄 Güncelleme Notları

### Temizlenen Dosyalar
- `src/App.css` (boş dosya)
- `src/tailwind.css` (duplicate)
- `src/ErrorBoundary.jsx` (kullanılmıyor)
- `src/styles/global.scss` (kullanılmıyor)
- `src/styles/styleguide.css` (kullanılmıyor)
- `src/pages/Home.jsxt` (duplicate)
- `src/components/Navbar.jsx` (kullanılmıyor)
- `src/components/ImageFrame.jsx` (kullanılmıyor)
- `src/components/Pill.jsx` (kullanılmıyor)

## 📞 Destek

Herhangi bir sorun veya öneri için lütfen iletişime geçin.

---

**Royal Güzellik** - Güzel hissetmenin adresi... ✨