import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import BottomNav from "./components/BottomNav";

// Stil dosyalarını ŞİMDİLİK kapalı tutuyoruz
// import "./styles/styleguide.css";
// import "./styles/global.scss";
import "./index.css";

export default function App() {
  useEffect(() => {
    // Özel fare imleci oluştur
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    
    cursor.className = 'cursor cursor-shimmer';
    cursorFollower.className = 'cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    // Fare hareketini takip et
    const moveCursor = (e) => {
      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      
      cursorFollower.style.left = e.clientX - 20 + 'px';
      cursorFollower.style.top = e.clientY - 20 + 'px';
    };
    
    // Hover efektleri
    const addHoverEffect = (e) => {
      cursor.classList.add('cursor-hover');
      cursorFollower.classList.add('cursor-follower-hover');
    };
    
    const removeHoverEffect = (e) => {
      cursor.classList.remove('cursor-hover');
      cursorFollower.classList.remove('cursor-follower-hover');
    };
    
    // Event listener'ları ekle
    document.addEventListener('mousemove', moveCursor);
    
    // Tıklanabilir elementler için hover efektleri
    const clickableElements = document.querySelectorAll('a, button, .glow-btn, [role="button"]');
    clickableElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      clickableElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
      if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (cursorFollower.parentNode) cursorFollower.parentNode.removeChild(cursorFollower);
    };
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/randevu-al" element={<Appointment />} />
        <Route path="/iletisim" element={<Contact />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}
