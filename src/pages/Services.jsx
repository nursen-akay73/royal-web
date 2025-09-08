import React, { useState } from "react";
import "./Services.css";

// Services görsellerini import et - mevcut dosyalar
import lazerEpilasyon from "../assets/services/b1eb4735-9083-4939-96a6-4ad3f6ecce6c.png";
import yosunPeeling from "../assets/services/14e190ee-f3d1-4b68-bb5b-fe0f05f03deb.png";
import hydrafacial from "../assets/services/15d5a7cc-37cd-4ac4-bc0b-ae4116a03b92.png";
import kirpikLifting from "../assets/services/56ea6f8a-6899-48c6-8da8-b1a72f3d9b07.png";
import sacVitamin from "../assets/services/cc312366-75ff-4cbd-96a7-9ed5f661c54a.png";
import ciltBakimi from "../assets/services/61910f0f-31c2-496e-b81b-46edf6704b0d.png";
import ciltGenclestirme from "../assets/services/b1eb4735-9083-4939-96a6-4ad3f6ecce6c.png";
import dolguIslemleri from "../assets/services/cb834b35-b8f4-4246-bc96-c3ac0bbcdf59.png";
import botoksIslemleri from "../assets/services/cc312366-75ff-4cbd-96a7-9ed5f661c54a.png";
import dermapen from "../assets/services/d07db763-4ac0-44a3-872d-67ccfd95afbd.png";

export default function Services() {
  const [showLazerSubItems, setShowLazerSubItems] = useState(false);

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

  const lazerSubItems = [
    "Cımbız Epilasyon",
    "İğneli Epilasyon", 
    "Buz Epilasyon"
  ];

  const handleLazerClick = (e) => {
    e.preventDefault();
    setShowLazerSubItems(!showLazerSubItems);
  };

  // Zikzak düzen için görselleri eşleştir - görseldeki sıralamaya göre
  const serviceImages = [
    { src: lazerEpilasyon, alt: "Lazer Epilasyon", service: "LAZER EPİLASYON" }, // Sol 1 - Lazer Epilasyon
    { src: ciltBakimi, alt: "Cilt Bakımı", service: "CİLT BAKIMI" }, // Sağ 2 - Cilt Bakımı (yüz maskesi)
    { src: sacVitamin, alt: "Saç Vitamin İşlemi", service: "+ SAÇ VİTAMİN İŞLEMİ" }, // Sol 3 - Saç Vitamin
    { src: kirpikLifting, alt: "Kirpik Lifting", service: "KİRPİK LIFTING" }, // Sağ 4 - Kirpik Lifting
    { src: hydrafacial, alt: "Hydrafacial", service: "HYDRAFACIAL" }, // Sol 5 - Hydrafacial
    { src: yosunPeeling, alt: "Yosun Peeling", service: "YOSUN PEELİNG" } // Sağ 6 - Yosun Peeling
  ];

  return (
    <div className="services-container">
      {/* Ana Hizmetler Paneli */}
      <div className="services-panel">
        <h1 className="services-title">HİZMETLERİMİZ</h1>
        <ul className="services-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              {service === "LAZER EPİLASYON" ? (
                <div className="lazer-container">
                  <a 
                    className="sparkle-link lazer-main" 
                    href="#" 
                    role="button" 
                    aria-label={`${service} hizmeti`}
                    onClick={handleLazerClick}
                  >
                    {service}
                    <span className="expand-icon">{showLazerSubItems ? '−' : '+'}</span>
                  </a>
                  {showLazerSubItems && (
                    <ul className="lazer-sub-items">
                      {lazerSubItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="sub-item">
                          <a className="sparkle-link sub-link" href="#" role="button" aria-label={`${subItem} hizmeti`}>
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a className="sparkle-link" href="#" role="button" aria-label={`${service} hizmeti`}>
                  {service}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Zikzak Düzen Görselleri */}
      <div className="zigzag-images">
        {/* Sol taraf - 1, 3, 5 */}
        <div className="service-image left-side" data-service="LAZER EPİLASYON">
          <img src={serviceImages[0].src} alt={serviceImages[0].alt} />
          <div className="service-label">LAZER EPİLASYON</div>
        </div>
        
        {/* Sağ taraf - 2 */}
        <div className="service-image right-side" data-service="CİLT BAKIMI">
          <img src={serviceImages[1].src} alt={serviceImages[1].alt} />
          <div className="service-label">CİLT BAKIMI</div>
        </div>
        
        {/* Sol taraf - 3 */}
        <div className="service-image left-side" data-service="+ SAÇ VİTAMİN İŞLEMİ">
          <img src={serviceImages[2].src} alt={serviceImages[2].alt} />
          <div className="service-label">+ SAÇ VİTAMİN İŞLEMİ</div>
        </div>
        
        {/* Sağ taraf - 4 */}
        <div className="service-image right-side" data-service="KİRPİK LIFTING">
          <img src={serviceImages[3].src} alt={serviceImages[3].alt} />
          <div className="service-label">KİRPİK LIFTING</div>
        </div>
        
        {/* Sol taraf - 5 */}
        <div className="service-image left-side" data-service="HYDRAFACIAL">
          <img src={serviceImages[4].src} alt={serviceImages[4].alt} />
          <div className="service-label">HYDRAFACIAL</div>
        </div>
        
        {/* Sağ taraf - 6 */}
        <div className="service-image right-side" data-service="YOSUN PEELİNG">
          <img src={serviceImages[5].src} alt={serviceImages[5].alt} />
          <div className="service-label">YOSUN PEELİNG</div>
        </div>
      </div>

      {/* Alt İkonlar */}
      <div className="bottom-icons">
        <div className="icon">📷</div>
        <div className="icon">🧴</div>
        <div className="icon">✂️</div>
      </div>
    </div>
  );
}