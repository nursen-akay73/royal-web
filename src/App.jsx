import { BrowserRouter, Routes, Route } from "react-router-dom";

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
