import React from "react";
import "./About.css";

// About görsellerini import et
import aboutImage1 from "../assets/about/Soprano-Titanium-mobil 1.png";

export default function About() {
  return (
    <div className="about-container">
      {/* Sol Taraf - Görseller */}
      <div className="left-section">
        {/* Ana Görsel */}
        <div className="main-image">
          <img src={aboutImage1} alt="Royal Güzellik" />
          <div className="image-overlay">
            <h3 className="overlay-title">Soprano Titanium</h3>
            <p className="overlay-subtitle">Lazer Epilasyonda Çığır Açan Yenilik</p>
          </div>
        </div>

      </div>

      {/* Sağ Taraf - Metin */}
      <div className="right-section">
        <h1 className="about-title">Hakkımızda</h1>
        
        <div className="about-content">
          <p className="intro-text">
            Royal Güzellik, güzellik ve bakım alanında en yüksek kalitede hizmet sunmaktadır.
          </p>

          <p className="founder-text">
            Kurucumuz ve uzmanımız <strong>Leyla Akay</strong>, İstanbul Royal Güzellik Akademisi'nde 
            güzellik ve bakım eğitimini tamamlayarak, müşterilerine zengin deneyim sunmaktadır.
          </p>

          <p className="expertise-text">
            Leyla Akay'ın uzmanlık alanları:
          </p>
          <ul className="expertise-list">
            <li>Cilt bakımı</li>
            <li>Lazer epilasyon</li>
            <li>Medikal bakım</li>
            <li>Kuaförlük</li>
            <li>Saç kesimi</li>
            <li>Saç tasarımı</li>
            <li>Dermapen</li>
          </ul>

          <p className="certification-text">
            MEB onaylı sertifika ve diplomalara sahip olan Leyla Akay, özellikle saç kesimi ve 
            tasarımında olağanüstü yetenek sergilemektedir.
          </p>

          <p className="technology-text">
            Merkezimizde, daha ağrısız, hızlı ve etkili lazer epilasyon için en son teknoloji 
            <strong>"Buz Lazer Soprano"</strong> cihazını kullanmaktayız.
          </p>

          <p className="hygiene-text">
            Tüm cihazlarımız düzenli olarak sterilize edilmekte, uygulama alanları titizlikle 
            temizlenmektedir. Hijyen ve müşteri memnuniyeti önceliğimizdir.
          </p>

          <p className="quality-text">
            Yüksek kaliteli ürünler ve güncel tekniklerle, güvenli ve konforlu bir bakım süreci 
            sunmaktayız.
          </p>

          <p className="conclusion-text">
            Royal Güzellik'te her ayrıntı, müşterilerimizin kendilerini daha özel, daha bakımlı 
            ve daha güzel hissetmeleri için tasarlanmıştır. Güzelliğinize değer katan özel bir 
            deneyim yaşamaya davet ediyoruz.
          </p>
        </div>
      </div>

      {/* Alt İkonlar */}
      <div className="bottom-icons">
        <div className="icon">📷</div>
        <div className="icon">💇‍♀️</div>
        <div className="icon">🧴</div>
        <div className="icon">✂️</div>
        <div className="icon">💺</div>
      </div>
    </div>
  );
}