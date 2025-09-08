import React from "react";
import "./Contact.css";

// Güzellik bakımı görsellerini import et - yeni özgün görseller
import beautyImage1 from "../assets/services/14e190ee-f3d1-4b68-bb5b-fe0f05f03deb.png"; // Yosun peeling
import beautyImage2 from "../assets/services/15d5a7cc-37cd-4ac4-bc0b-ae4116a03b92.png"; // Hydrafacial
import backgroundImage from "../assets/services/5fe4a8b7-35fe-4993-9d19-450234a0dcd0.png"; // Arka plan görseli

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Sol Güzellik Görseli */}
      <div className="left-beauty-image">
        <img src={beautyImage1} alt="Yosun Peeling" />
      </div>

      {/* Sağ Güzellik Görseli */}
      <div className="right-beauty-image">
        <img src={beautyImage2} alt="Hydrafacial" />
      </div>

      {/* Ana İletişim Kartı */}
      <div className="contact-card">
        <h1 className="contact-title">İLETİŞİM</h1>
        
        <div className="contact-info">
          {/* Instagram */}
          <div className="contact-item">
            <div className="contact-icon">📷</div>
            <div className="contact-text">
              <span className="contact-label">INSTAGRAM:</span>
              <span className="contact-value">@ROYALGUZELLİK_</span>
            </div>
          </div>

          {/* Telefon */}
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-text">
              <span className="contact-label">TELEFON:</span>
              <span className="contact-value">0 (538) 429 91 45</span>
            </div>
          </div>

          {/* Adres */}
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <span className="contact-label">ADRES:</span>
              <div className="address-lines">
                <div className="address-line">BITLIS / TATVAN TUĞ MAHALLESI, CUMHURIYET BULVARI</div>
                <div className="address-line">ŞAHPER PLAZA, ROYAL GÜZELLIK DAIRE NO: 5, 3. KAT</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt İkonlar */}
      <div className="bottom-icons">
        <div className="icon">📷</div>
        <div className="icon">💄</div>
        <div className="icon">🧴</div>
        <div className="icon">✂️</div>
        <div className="icon">🪞</div>
      </div>
    </div>
  );
}