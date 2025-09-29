import React, { useEffect } from 'react';
import './ServiceBenefitsModal.css';

export default function ServiceBenefitsModal({ isOpen, onClose, serviceData }) {
  // ESC tuşu ile kapatma
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Body scroll'u kilitle
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  // Overlay tıklama ile kapatma
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  if (!isOpen || !serviceData) return null;
  
  return (
    <div 
      className={`benefits-modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`benefits-modal-content ${isOpen ? 'open' : ''}`}>
        <button
          className="benefits-modal-close"
          onClick={onClose}
          aria-label="Kapat"
        >
          ×
        </button>
        
        <h3 className="benefits-modal-title">{serviceData.title}</h3>
        
        <ul className="benefits-modal-list">
          {serviceData.benefits.map((benefit, index) => (
            <li key={index} className="benefits-modal-item">
              ✨ {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
