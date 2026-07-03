import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, BookOpen, Archive, Truck, CheckSquare, Shield,
  ShoppingCart, Heart, Building2, Factory, Zap, Globe,
  ChevronDown, Menu, X, Paperclip, ArrowRight, Phone, Target, Users, Award, Rocket, Cpu, Send, FlaskConical, Eye,
} from 'lucide-react';

const megaMenuData = {
  Kurumsal: {
    image: {
      src: 'assets/headers/kurumsal-header.png',
      title: 'Kolaysoft Hakkında',
      sub: '2016\'dan bu yana dijital dönüşümün öncüsü',
    },
    items: [
      { icon: Users, label: 'Biz Kimiz', desc: 'Hakkımızda ve değerlerimiz' },
      { icon: Rocket, label: 'Hikayemiz', desc: '8 yıllık başarı hikayemiz' },
      { icon: Award, label: 'Değerlerimiz', desc: 'Çalışma prensiplerimiz' },
      { icon: Cpu, label: 'Teknoloji', desc: 'Güçlü teknoloji altyapımız' },
      { icon: Send, label: 'Faaliyetler', desc: 'Sektörler ve çözümlerimiz' },
      { icon: Award, label: 'Başarılarımız', desc: 'Müşteri başarı hikayeleri ve ödüller' },
    ],
  },
  Çözümler: {
    image: {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=280&fit=crop',
      title: 'Dijital Dönüşümde Öncü',
      sub: 'GİB onaylı tüm e-Dönüşüm çözümleri tek platformda',
    },
    items: [
      { icon: Heart, label: 'KolayCare', desc: 'Sağlık sektörüne özel çözümler.', children: [
        { icon: FlaskConical, label: 'Eczane Teknolojileri', desc: 'Eczaneler için dijital çözümler' },
        { icon: Eye, label: 'Optik Teknolojileri', desc: 'Optik sektörüne özel çözümler' },
      ] },
      { icon: BookOpen, label: 'e-Dönüşüm', desc: 'Güvenli dijal belge ve ödeme' },
      { icon: Paperclip, label: 'Peyk', desc: 'İK operasyonlarını dijitalleştirme' },
      { icon: ShoppingCart, label: 'KolaysoftPOS', desc: 'Perakende ve işletme POS çözümleri' },
      { icon: FlaskConical, label: 'DeepBlack', desc: 'Kurumsal yapay zeka çözümleri' },
      { icon: Target, label: 'Kırmızı Kurumsal', desc: 'Kurumsal sadakat ve avantaj platformu' },
    ],
  },

  Faaliyetler: {
    image: {
      src: 'assets/headers/faaliyetler-header.png',
      title: 'Kolaysoft Faaliyet Alanları',
      sub: 'Teknoloji, yazılım ve danışmanlık alanlarında hizmetlerimiz',
    },
    items: [
      { icon: Zap, label: 'Şirketler', desc: 'Kolaysoft Grup şirketleri' },
      { icon: Building2, label: 'İş Ortaklarımız', desc: 'Stratejik iş ortaklarımız' },
    ],
  },

  'Kolaysoft Kariyer': {
    image: {
      src: 'assets/headers/kariyer-header.png',
      title: 'Kolaysoft\'ta Kariyer',
      sub: 'Yeteneğinle geleceği birlikte inşa edelim',
    },
    items: [
      { icon: Users, label: 'Çalışma Hayatı', desc: 'Kolaysoft\'ta çalışma kültürümüz' },
      { icon: Send, label: 'Ekibimize Katılın', desc: 'Açık pozisyonlar ve başvuru' },
    ],
  },
};

const navLinks = ['Kurumsal', 'Çözümler', 'Faaliyetler', 'Referanslar', 'Medya Merkezi', 'Kolaysoft Kariyer', 'İletişim'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Route değişiminde menüleri kapat
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
    setHoveredItem(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    if (megaMenuData[label]) setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || activeMenu
          ? 'bg-white shadow-lg shadow-black/5'
          : 'bg-transparent '
      }`}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="container-wide h-full flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <img
            src={scrolled || activeMenu ? '/kolay-logo.svg' : '/kolay-logo-yatay-beyaz.png'}
            alt="Kolaysoft Teknoloji"
            className="h-9 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* hoveredLink: hangi linkin üzerinde olduğumuzu takip etmek için nav'a data attribute yetmez,
            activeMenu zaten var — onu kullanarak "başka bir öğe hover'da mı?" tespiti yapıyoruz */}
        <nav className="hidden lg:flex items-center gap-0" onMouseLeave={handleMouseLeave}>
          {navLinks.map((link) => {
            // Herhangi bir menü hover'daysa ve bu link o değilse → karart
            const dimmed = activeMenu !== null && activeMenu !== link;
            const isScrolledOrMenuOpen = scrolled || !!activeMenu;
            const baseColor = isScrolledOrMenuOpen ? 'text-slate-800' : 'text-white';

            return (
              <div
                key={link}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link)}
              >
                {link === 'İletişim' ? (
                  <Link
                    to="/iletisim"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:text-[#64b449] ${
                      dimmed ? 'text-slate-400' : baseColor
                    }`}
                  >
                    {link}
                  </Link>
                ) : link === 'Referanslar' ? (
                  <Link
                    to="/referanslar"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:text-[#64b449] ${
                      dimmed ? 'text-slate-400' : baseColor
                    }`}
                  >
                    {link}
                  </Link>
                ) : link === 'Medya Merkezi' ? (
                  <Link
                    to="/medyamerkezi"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:text-[#64b449] ${
                      dimmed ? 'text-slate-400' : baseColor
                    }`}
                  >
                    {link}
                  </Link>
                ) : link === 'Çözümler' ? (
                  <Link
                    to="/cozumler"
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeMenu === link
                        ? 'text-[#64b449]'
                        : dimmed
                        ? 'text-slate-400'
                        : `${baseColor} hover:text-[#64b449]`
                    }`}
                  >
                    {link}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMenu === link ? 'rotate-180' : ''
                      }`}
                      style={{ color: '#64b449' }}
                    />
                  </Link>
                ) : (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeMenu === link
                        ? 'text-[#64b449]'
                        : dimmed
                        ? 'text-slate-400'
                        : `${baseColor} hover:text-[#64b449]`
                    }`}
                  >
                    {link}
                    {megaMenuData[link] && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMenu === link ? 'rotate-180' : ''
                        }`}
                        style={{ color: '#64b449' }}
                      />
                    )}
                  </button>
                )}
              </div>
            );
          })}

          <AnimatePresence>
            {activeMenu && megaMenuData[activeMenu] && (
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute top-full left-0 right-0"
                style={{ zIndex: 999, paddingTop: 0 }}
                onMouseEnter={() => clearTimeout(timeoutRef.current)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`rounded-b-xl border border-t-0 shadow-2xl overflow-hidden ${
                  scrolled
                    ? 'glass-card border-tech-border'
                    : 'bg-white/95 backdrop-blur-lg border-slate-200 shadow-lg'
                }`} style={{ width: '100%' }}>
                  <div className="flex">
                    <div className="w-72 flex-shrink-0 relative overflow-hidden">
                      <img
                        src={megaMenuData[activeMenu].image.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <span className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">
                          Öne Çıkan
                        </span>
                        <p className="text-white font-display font-700 text-base leading-tight">
                          {megaMenuData[activeMenu].image.title}
                        </p>
                        <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
                          {megaMenuData[activeMenu].image.sub}
                        </p>
                        <a href="#" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-tech-cyan hover:text-white transition-colors">
                          Keşfet <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-1">
                      <div className="col-span-2 mb-2">
                        <span className="text-xs font-semibold text-tech-cyan uppercase tracking-wider">
                          {activeMenu}
                        </span>
                      </div>
                      {megaMenuData[activeMenu].items.map(({ icon: Icon, label, desc, children }) => {
                        const href = activeMenu === 'Kurumsal'
                           ? `/kurumsal/${label === 'Biz Kimiz' ? 'biz-kimiz' : label === 'Hikayemiz' ? 'hikayemiz' : label === 'Vizyon & Misyon' ? 'vizyon-misyon' : label === 'Değerlerimiz' ? 'degerlerimiz' : label === 'Faaliyetler' ? 'faaliyetler' : label === 'Başarılarımız' ? 'basarilarimiz' : 'teknoloji'}`
                           : label === 'Şirketler' ? '/sirketler' : label === 'İş Ortaklarımız' ? '/is-ortaklarimiz' : label === 'Çalışma Hayatı' ? '/kariyer' : label === 'Ekibimize Katılın' ? '/kolaysoft-kariyer' : label === 'Peyk' ? '/cozumler/peyk' : label === 'e-Dönüşüm' ? '/cozumler/e-donusum' : label === 'KolayCare' ? '/cozumler/kolay-care' : label === 'KolaysoftPOS' ? '/cozumler/kolaysoft-pos' : label === 'Eczane Teknolojileri' ? '/cozumler/eczane-teknolojileri' : label === 'Optik Teknolojileri' ? '/cozumler/optik-teknolojileri' : label === 'DeepBlack' ? '/cozumler/deepblack' : label === 'Kırmızı Kurumsal' ? '/cozumler/kirmizi-kurumsal' : '#';
                        const childHref = (l) => l === 'Eczane Teknolojileri' ? '/cozumler/eczane-teknolojileri' : l === 'Optik Teknolojileri' ? '/cozumler/optik-teknolojileri' : '#';
                        return (
                          <div
                            key={label}
                            className="flex flex-col"
                            onMouseEnter={() => setHoveredItem(label)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                          <Link
                            to={href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 group transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-tech-card flex items-center justify-center flex-shrink-0 group-hover:bg-tech-cyan/20 transition-colors mt-0.5 border border-tech-border">
                              <Icon className="w-4 h-4 text-slate-400 group-hover:text-tech-cyan transition-colors" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-tech-cyan transition-colors">
                                {label}
                              </p>
                              <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                            </div>
                          </Link>
                          <AnimatePresence initial={false}>
                          {children && hoveredItem === label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                              className="ml-11 mt-0.5 mb-1 flex flex-col gap-0.5 border-l border-tech-border/60 pl-3 overflow-hidden"
                            >
                              {children.map(({ icon: CIcon, label: cLabel, desc: cDesc }) => (
                                <Link
                                  key={cLabel}
                                  to={childHref(cLabel)}
                                  className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 group/child transition-colors"
                                >
                                  <CIcon className="w-3.5 h-3.5 text-slate-400 group-hover/child:text-tech-cyan transition-colors mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="text-[13px] font-medium text-slate-700 group-hover/child:text-tech-cyan transition-colors">{cLabel}</p>
                                    <p className="text-[11px] text-slate-500 mt-0.5">{cDesc}</p>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                          </AnimatePresence>
                          </div>
                        );
                      })}
                      <div className="col-span-2 mt-2 pt-3 border-t border-tech-border/50">
                        <Link to={activeMenu === 'Kurumsal' ? '/kurumsal/biz-kimiz' : activeMenu === 'Kolaysoft Kariyer' ? '/kariyer' : '#'} className="inline-flex items-center gap-1.5 text-xs font-semibold text-tech-cyan hover:text-tech-cyan/70 transition-colors">
                          Tüm {activeMenu === 'Kurumsal' ? 'Kurumsal' : activeMenu === 'Kolaysoft Kariyer' ? 'Kariyer İçeriğini' : activeMenu + 'ü'} Gör <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>


                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => window.dispatchEvent(new Event('open-koala'))}
            aria-label="Koala.ai sohbeti aç"
            className="flex items-center gap-2 rounded-full bg-white p-1 pr-3 shadow-md ring-1 ring-slate-200 transition-transform hover:scale-105"
          >
            <span className="block h-9 w-9 overflow-hidden rounded-full">
              <video
                src="/chat-bot.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden sm:block text-sm font-bold text-[#0A1628]">Koala.ai</span>
          </button>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled || mobileOpen ? 'hover:bg-slate-100' : 'hover:bg-white/10'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen
              ? <X className="w-6 h-6 text-slate-800" />
              : <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-800' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="container-wide py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link}>
                  {link === 'İletişim' ? (
                    <Link
                      to="/iletisim"
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                    >
                      {link}
                    </Link>
                  ) : link === 'Referanslar' ? (
                    <Link
                      to="/referanslar"
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                    >
                      {link}
                    </Link>
                ) : link === 'Medya Merkezi' ? (
                    <Link
                      to="/medyamerkezi"
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                    >
                      {link}
                    </Link>
                  ) : link === 'Kolaysoft Kariyer' ? (
                    <div className="flex items-center">
                      <Link
                        to="/kariyer"
                        className="flex-1 px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                      >
                        {link}
                      </Link>
                      <button
                        className="px-3 py-3 rounded-xl text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === link ? null : link)}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  ) : link === 'Çözümler' ? (
                    <div className="flex items-center">
                      <Link
                        to="/cozumler"
                        className="flex-1 px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                      >
                        {link}
                      </Link>
                      <button
                        className="px-3 py-3 rounded-xl text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === link ? null : link)}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-semibold text-slate-700 hover:text-tech-cyan hover:bg-slate-100 transition-colors"
                      onClick={() => setMobileExpanded(mobileExpanded === link ? null : link)}
                    >
                      {link}
                      {megaMenuData[link] && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === link ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                  )}
                  <AnimatePresence>
                    {mobileExpanded === link && megaMenuData[link] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 overflow-hidden rounded-b-xl"
                      >
                        {megaMenuData[link].items.map(({ icon: Icon, label, children }) => {
              // synctest
  const mobileHref = link === 'Kurumsal'
                              ? `/kurumsal/${label === 'Biz Kimiz' ? 'biz-kimiz' : label === 'Hikayemiz' ? 'hikayemiz' : label === 'Vizyon & Misyon' ? 'vizyon-misyon' : label === 'Değerlerimiz' ? 'degerlerimiz' : label === 'Faaliyetler' ? 'faaliyetler' : label === 'Başarılarımız' ? 'basarilarimiz' : 'teknoloji'}`
                              : label === 'Şirketler' ? '/sirketler' : label === 'İş Ortaklarımız' ? '/is-ortaklarimiz' : label === 'Çalışma Hayatı' ? '/kariyer' : label === 'Ekibimize Katılın' ? '/kolaysoft-kariyer' : label === 'Peyk' ? '/cozumler/peyk' : label === 'e-Dönüşüm' ? '/cozumler/e-donusum' : label === 'KolayCare' ? '/cozumler/kolay-care' : label === 'KolaysoftPOS' ? '/cozumler/kolaysoft-pos' : label === 'Eczane Teknolojileri' ? '/cozumler/eczane-teknolojileri' : label === 'Optik Teknolojileri' ? '/cozumler/optik-teknolojileri' : label === 'DeepBlack' ? '/cozumler/deepblack' : label === 'Kırmızı Kurumsal' ? '/cozumler/kirmizi-kurumsal' : '#';
                            const childHref = (l) => l === 'Eczane Teknolojileri' ? '/cozumler/eczane-teknolojileri' : l === 'Optik Teknolojileri' ? '/cozumler/optik-teknolojileri' : '#';
                            return (
                              <div key={label}>
                              <Link to={mobileHref} className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-tech-cyan hover:bg-slate-50 transition-colors">
                                <Icon className="w-4 h-4" /> {label}
                              </Link>
                              {children && children.map(({ icon: CIcon, label: cLabel }) => (
                                <Link key={cLabel} to={childHref(cLabel)} className="flex items-center gap-3 pl-11 pr-4 py-2 text-[13px] text-slate-500 hover:text-tech-cyan hover:bg-slate-50 transition-colors">
                                  <CIcon className="w-3.5 h-3.5" /> {cLabel}
                                </Link>
                              ))}
                              </div>
                            );
                          })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
