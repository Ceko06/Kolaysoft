import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';
import './styles/index.css';
import { NewsProvider } from './context/NewsContext';
import Navbar from './components/layout/Navbar';
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
import MedyaMerkeziPage from './pages/medyamerkezi';
import NewsDetail from './pages/NewsDetail';
import NewsAdminPage from './pages/newsAdmin';
import Kariyer from './pages/Kariyer';
import KolaysoftaKatil from './pages/kolaysoft-kariyer';
import IlanDetay from './pages/IlanDetay';
import GenelBasvuru from './pages/GenelBasvuru';
import Peyk from './pages/cozumler/Peyk';
import EDonusum from './pages/cozumler/EDonusum';
import KolayCare from './pages/cozumler/KolayCare';
import KolaysoftPOS from './pages/cozumler/KolaysoftPOS';
import EczaneTek from './pages/cozumler/EczaneTek';
import OptikTeknolojileri from './pages/cozumler/OptikTeknolojileri';
import Companies from './pages/Companies';
import Partners from './pages/Partners';
import SuccessStories from './pages/corporate/SuccessStories';
import Cozumler from './pages/Cozumler';
import DeepBlack from './pages/cozumler/DeepBlack';
import KirmiziKurumsal from './pages/cozumler/KirmiziKurumsal';

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <NewsProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="bg-koc-dark font-body min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/referanslar" element={<References />} />
            <Route path="/medyamerkezi" element={<MedyaMerkeziPage />} />
            <Route path="/medyamerkezi/:id" element={<NewsDetail />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/kurumsal" element={<CorporateLayout />}>
              <Route path="biz-kimiz" element={<WhoWeAre />} />
              <Route path="hikayemiz" element={<History />} />
              <Route path="degerlerimiz" element={<Values />} />
              <Route path="teknoloji" element={<Technology />} />
              <Route path="faaliyetler" element={<Activities />} />
              <Route path="basarilarimiz" element={<SuccessStories />} />
            </Route>
            <Route path="/sirketler" element={<Companies />} />
            <Route path="/is-ortaklarimiz" element={<Partners />} />
            <Route path="/newsAdmin" element={<NewsAdminPage />} />
            <Route path="/kariyer" element={<Kariyer />} />
            <Route path="/kolaysoft-kariyer" element={<KolaysoftaKatil />} />
            <Route path="/ilan/:id" element={<IlanDetay />} />
            <Route path="/genel-basvuru" element={<GenelBasvuru />} />
            <Route path="/cozumler" element={<Cozumler />} />
            <Route path="/cozumler/peyk" element={<Peyk />} />
            <Route path="/cozumler/e-donusum" element={<EDonusum />} />
            <Route path="/cozumler/kolay-care" element={<KolayCare />} />
            <Route path="/cozumler/kolaysoft-pos" element={<KolaysoftPOS />} />
            <Route path="/cozumler/eczane-teknolojileri" element={<EczaneTek />} />
            <Route path="/cozumler/optik-teknolojileri" element={<OptikTeknolojileri />} />
            <Route path="/cozumler/deepblack" element={<DeepBlack />} />
            <Route path="/cozumler/kirmizi-kurumsal" element={<KirmiziKurumsal />} />
          </Routes>
        </div>
        <ChatBot />
        <Footer />
      </BrowserRouter>
    </NewsProvider>
  );
}
