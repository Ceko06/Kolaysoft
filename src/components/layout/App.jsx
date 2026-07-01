import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Navbar from './components/layout/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/layout/Footer';
import CorporateLayout from './components/layout/CorporateLayout';
import Hero from './components/sections/Hero';
import TrustStrip from './components/sections/TrustStrip';
import Services from './components/sections/Services';

import About from './components/sections/About';
import Features from './components/sections/Features';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import WhoWeAre from './pages/corporate/WhoWeAre';
import Values from './pages/corporate/Values';
import History from './pages/corporate/History';
import Technology from './pages/corporate/Technology';
import Activities from './pages/corporate/Activities';
import ContactPage from './pages/Contact';
import References from './pages/References';
import MedyaMerkeziPage from './pages/MedyaMerkezi';
import KolayCare from './pages/cozumler/KolayCare';
import EDonusum from './pages/cozumler/EDonusum';
import Peyk from './pages/cozumler/Peyk';

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      
      <About />
      <Features />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-koc-dark font-body min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/referanslar" element={<References />} />
          <Route path="/medyamerkezi" element={<MedyaMerkeziPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/kurumsal" element={<CorporateLayout />}>
            <Route path="biz-kimiz" element={<WhoWeAre />} />
            <Route path="hikayemiz" element={<History />} />
            <Route path="degerlerimiz" element={<Values />} />
            <Route path="teknoloji" element={<Technology />} />
            <Route path="faaliyetler" element={<Activities />} />
          </Route>
          <Route path="/cozumler/e-donusum" element={<EDonusum />} />
          <Route path="/cozumler/peyk" element={<Peyk />} />
          <Route path="/cozumler/kolay-care" element={<KolayCare />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

