import React from "react";
import { Link } from "react-router-dom";
import heroLeft from "../../assets/home/hero-left.png";
import heroRight from "../../assets/home/hero-right.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Sol Fotoğraf */}
      <div className="left-image">
        <img 
          src={heroLeft} 
          alt="Güzellik bakımı" 
        />
      </div>

      {/* Sağ Fotoğraf */}
      <div className="right-image">
        <img 
          src={heroRight} 
          alt="Lazer epilasyon" 
        />
      </div>


      {/* Navigasyon Butonları */}
      <div className="navigation-buttons">
        <Link 
          to="/" 
          className="glow-btn"
          role="button"
          aria-label="Anasayfa"
        >
          🏠 ANASAYFA
        </Link>

        <Link 
          to="/hakkimizda" 
          className="glow-btn"
          role="button"
          aria-label="Hakkımızda"
        >
          👤 HAKKIMIZDA
        </Link>

        <Link 
          to="/hizmetler" 
          className="glow-btn"
          role="button"
          aria-label="Hizmetlerimiz"
        >
          🌿 HİZMETLERİMİZ
        </Link>

        <Link 
          to="/randevu-al" 
          className="glow-btn"
          role="button"
          aria-label="Randevu Al"
        >
          📅 RANDEVU AL
        </Link>

        <Link 
          to="/iletisim" 
          className="glow-btn"
          role="button"
          aria-label="İletişim"
        >
          📞 İLETİŞİM
        </Link>
      </div>

      {/* Metin Balonu */}
      <div className="text-bubble">
        <p>
          "BURADA HER AYRINTI SİZİN İÇİN TASARLANDI. ROYAL GÜZELLİK'TE, 
          KENDİNİZİ DAHA ÖZEL, DAHA BAKIMLI VE DAHA GÜZEL HİSSETMENİZ İÇİN BURADAYIZ."
        </p>
        <div className="brush-icon">🖌️</div>
      </div>

      {/* Alt Metin Şeridi */}
      <div className="bottom-bar">
        <span>Güzel hissetmenin adresi...</span>
      </div>
    </div>
  );
}
