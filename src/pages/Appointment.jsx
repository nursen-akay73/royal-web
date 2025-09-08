import React, { useState } from "react";
import "./Appointment.css";

// Güzellik bakımı görsellerini import et
import beautyImage1 from "../assets/services/14e190ee-f3d1-4b68-bb5b-fe0f05f03deb.png"; // Yosun peeling
import beautyImage2 from "../assets/services/15d5a7cc-37cd-4ac4-bc0b-ae4116a03b92.png"; // Hydrafacial
import skinImage1 from "../assets/services/61910f0f-31c2-496e-b81b-46edf6704b0d.png"; // Cilt bakımı
import skinImage2 from "../assets/services/cc312366-75ff-4cbd-96a7-9ed5f661c54a.png"; // Cilt gençleştirme

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    time: "",
    service: ""
  });

  const services = [
    "LAZER EPİLASYON",
    "YOSUN PEELİNG", 
    "HYDRAFACIAL",
    "KİRPİK LIFTING",
    "SAÇ VİTAMİN İŞLEMİ",
    "CİLT GENÇLEŞTİRME",
    "CİLT BAKIMI",
    "DOLGU İŞLEMLERİ",
    "BOTOKS İŞLEMLERİ",
    "DERMAPEN"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const message = `Merhaba randevu almak istiyorum.

Ad: ${formData.name}
Yaş: ${formData.age}
Randevu Saati: ${formData.time}
Randevu Türü: ${formData.service}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/905453632026?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+905453632026', '_self');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/royalguzellik_', '_blank');
  };

  return (
    <div className="appointment-container">
      {/* Sol Güzellik Görseli */}
      <div className="left-beauty-image">
        <img src={beautyImage1} alt="Yosun Peeling" />
      </div>

      {/* Sağ Güzellik Görseli */}
      <div className="right-beauty-image">
        <img src={beautyImage2} alt="Hydrafacial" />
      </div>

      {/* Ana Randevu Kartı */}
      <div className="appointment-card">
        <h1 className="appointment-title">RANDEVU AL</h1>
        
        {/* İletişim İkonları */}
        <div className="contact-icons">
          <div className="contact-icon whatsapp" onClick={handleWhatsAppClick}>
            <div className="icon whatsapp-logo">📱</div>
            <span>WhatsApp</span>
          </div>
          
          <div className="contact-icon phone" onClick={handlePhoneClick}>
            <div className="icon">📞</div>
            <span>Telefon</span>
          </div>
          
          <div className="contact-icon instagram" onClick={handleInstagramClick}>
            <div className="icon instagram-logo">📷</div>
            <span>@royalguzellik_</span>
          </div>
        </div>

        {/* Randevu Formu */}
        <div className="appointment-form">
          <h2 className="form-title">Randevu Formu</h2>
          
          <div className="form-group">
            <label htmlFor="name">Adınız:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Adınızı giriniz"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Yaşınız:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Yaşınızı giriniz"
              min="1"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Randevu Saati:</label>
            <input
              type="datetime-local"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Randevu Türü:</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="">Hizmet seçiniz</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <button 
            className="submit-button" 
            onClick={handleWhatsAppClick}
            disabled={!formData.name || !formData.age || !formData.time || !formData.service}
          >
            WhatsApp ile Randevu Al
          </button>
        </div>
      </div>

      {/* Alt İkonlar */}
      <div className="bottom-icons">
        <div className="icon">📱</div>
        <div className="icon">💄</div>
        <div className="icon">🧴</div>
        <div className="icon">✂️</div>
        <div className="icon">🪞</div>
      </div>

      {/* Alt Cilt Görselleri */}
      <div className="bottom-skin-images">
        <div className="skin-image-left">
          <img src={skinImage1} alt="Cilt Bakımı" />
        </div>
        <div className="skin-image-right">
          <img src={skinImage2} alt="Cilt Gençleştirme" />
        </div>
      </div>
    </div>
  );
}