import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {
  const location = useLocation();

  // Anasayfada alt navigasyonu gösterme
  if (location.pathname === '/') {
    return null;
  }

  const navItems = [
    { path: '/', label: 'Anasayfa', icon: '🏠' },
    { path: '/hizmetler', label: 'Hizmetlerimiz', icon: '🌿' },
    { path: '/hakkimizda', label: 'Hakkımızda', icon: '👤' },
    { path: '/randevu-al', label: 'Randevu Al', icon: '📅' },
    { path: '/iletisim', label: 'İletişim', icon: '📞' }
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <div className="nav-icon">{item.icon}</div>
            <span className="nav-label">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
