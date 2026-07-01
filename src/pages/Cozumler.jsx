import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, Shield, RefreshCw, Clock, Zap, Building2, CheckCircle } from 'lucide-react';

/* ── Assets ── */
const headerImg    = '/assets/headers/cozumler-header.png';
const heroImg      = '/assets/Çözümler/cozumler.png';
const eDonusumImg  = '/assets/Çözümler/e-dönüşüm.png';
const peykImg      = '/assets/Çözümler/peyk-folder.png';
const saglikImg    = '/assets/Çözümler/saglik.png';

/* ── Animation ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Product cards data ── */
const products = [
  {
    id: 'e-donusum',
    label: 'e-Dönüşüm',
    description: 'e-Fatura, e-Arşiv, e-İrsaliye ve tüm e-belge çözümleri tek platformda.',
    img: eDonusumImg,
    iconBg: '#EEF4FF',
    iconColor: '#184A97',
    href: '/cozumler/e-donusum',
    badge: 'GİB Lisanslı',
    badgeBg: '#EEF4FF',
    badgeColor: '#184A97',
  },
  {
    id: 'peyk',
    label: 'Peyk',
    description: 'Dijital bildirim, KEP entegrasyonu ve kurumsal iletişim yönetimi.',
    img: peykImg,
    iconBg: '#F0FFF4',
    iconColor: '#16A34A',
    href: '/cozumler/peyk',
    badge: 'Yeni Nesil',
    badgeBg: '#F0FFF4',
    badgeColor: '#16A34A',
  },
  {
    id: 'kolay-care',
    label: 'KolayCare',
    description: 'Sağlık sektörüne özel dijital süreç ve hasta yönetim platformu.',
    img: saglikImg,
    iconBg: '#FFF0F6',
    iconColor: '#DB2777',
    href: '/cozumler/kolay-care',
    badge: 'Sağlık',
    badgeBg: '#FFF0F6',
    badgeColor: '#DB2777',
  },
];

/* ══════════════════════════════════════════
   PAGE HEADER
══════════════════════════════════════════ */
function PageHeader() {
  return (
    <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
      <img src={headerImg} alt="Çözümler" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

      <div className="container-wide relative z-10 h-full flex flex-col justify-center">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm mb-6"
        >
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
          <ChevronRight className="w-4 h-4 text-white/60" />
          <span className="text-white font-medium">Çözümler</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
        >
          Çözümlerimiz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-white/90 text-lg max-w-2xl"
        >
          Dijital dönüşümü hızlandıran üç temel teknoloji platformu
        </motion.p>
      </div>
    </header>
  );
}

/* ══════════════════════════════════════════
   HERO SECTION
══════════════════════════════════════════ */
function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white"
      style={{ minHeight: '88vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          
        }}
      />

      <div className="container-wide relative w-full py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
            >
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: '#F1F5F9', color: '#64748B', border: '1px solid #E2E8F0', letterSpacing: '0.12em' }}
              >
                Teknoloji Çözümleri
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
              className="mt-5 font-display font-bold text-[#0A1628] leading-[1.08]"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}
            >
              Çözümlerimiz
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
              className="mt-6 text-[#475569] leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', maxWidth: '480px' }}
            >
              Kolaysoft, işletmelerin dijital dönüşüm yolculuğunu hızlandıran üç temel teknoloji
              platformu geliştirmektedir. Kurumsal verimliliği artırmak ve süreçleri güvenle
              yönetmek için birbirini tamamlayan çözümler sunuyoruz.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
              className="mt-10"
            >
              <a
                href="#cozumler"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
                style={{
                  background: '#184A97',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px -4px rgba(24,74,151,0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1449b8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#184A97'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Çözümleri İncele
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </a>
            </motion.div>
          </div>

          {/* ── Right column: Hero image ── */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
            className="relative flex items-center justify-center"
          >
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{
        
              }}
            >
              <motion.img
                src={heroImg}
                alt="Kolaysoft Çözümler"
                className="w-full h-auto object-contain"
                style={{ maxHeight: '520px' }}
               
                
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   INTRO SECTION  (2. section)
══════════════════════════════════════════ */
const pills = [
  { label: 'KolayCare', color: '#184A97' },
  { label: 'e-Dönüşüm', color: '#16A34A' },
  { label: 'Peyk',      color: '#D97706' },
];

function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <section ref={ref} className="bg-[#F8F9FC]" style={{ borderTop: '1px solid #F1F5F9' }}>
      <div className="container-wide py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left – big heading */}
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
            className="font-display font-bold text-[#0A1628] leading-[1.12]"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Farklı iş ihtiyaçlarına yönelik{' '}
            <span style={{ color: '#184A97' }}>üç çözüm ailesi.</span>
          </motion.h2>

          {/* Right – description + pills */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
            className="flex flex-col gap-6"
          >
            <p className="text-[#475569] leading-relaxed" style={{ fontSize: '1.05rem' }}>
              KolayCare, e-Dönüşüm ve Peyk — Kolaysoft'un kurumsal ihtiyaçları karşılamak için
              geliştirdiği üç bağımsız ancak birbirine entegre teknoloji platformu.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {pills.map(({ label, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#1E293B' }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: color }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   KOLAYCARE SECTION  (3. section)
══════════════════════════════════════════ */
const kcFeatures = ['Merkezi Yönetim', 'Dijital Süreçler', 'Kolay Erişim', 'Güvenli Altyapı'];
const kcStats    = [
  { value: '3.200+', label: 'Aktif Kullanıcı' },
  { value: '500+',   label: 'Kurum' },
  { value: '%99.9',  label: 'Uptime' },
];
const kcCategories = [
  { icon: '⚗️', label: 'ECZANE' },
  { icon: '👓', label: 'OPTİK' },
  { icon: '➕', label: 'MEDİKAL' },
];

function KolayCareSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section ref={ref} className="bg-white" style={{ borderTop: '1px solid #F1F5F9' }}>
      <div className="container-wide py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left ── */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: '#F8FAFC', color: '#64748B', border: '1px solid #E2E8F0', letterSpacing: '0.14em' }}
              >
                KolayCare
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
              className="mt-5 font-display font-bold leading-[1.1] "
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0A1628' }}
            >
              İş Sağlığı ve{' '}
              <span style={{ color: '#184A97', display: 'block' }}>Kurumsal Yönetim</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
              className="mt-6 text-[#475569] leading-relaxed"
              style={{ fontSize: '1rem', maxWidth: '440px' }}
            >
              Eczaneden optiğe, saha operasyonlarından büyük ölçekli kurumsal yapılara kadar
              farklı sektörlerin ihtiyaçlarına özel yazılım, ödeme sistemleri, e-dönüşüm ve
              yapay zekâ çözümleri geliştiriyoruz.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
              className="mt-7 flex flex-wrap gap-2.5 "
            >             
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}
              className="mt-9"
            >
              <Link
                to="/cozumler/kolay-care"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
                style={{
                  background: '#184A97',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px -4px rgba(24,74,151,0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1449b8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#184A97'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                KolayCare'i Keşfet
                <span style={{ fontSize: '1.1rem' }}>›</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={5}
              className="mt-12 flex items-center gap-10"
              style={{ borderTop: '1px solid #F1F5F9', paddingTop: '1.5rem' }}
            >
              {kcStats.map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display font-bold text-[#0A1628]" style={{ fontSize: '1.6rem' }}>{value}</p>
                  <p className="text-[#64748B] text-sm mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: image card ── */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
            className="relative"
          >


            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 20px 60px -12px rgba(24,74,151,0.18)', border: '1px solid #E2E8F0' }}
            >
              <img
                src="/assets/Çözümler/saglik.png"
                alt="KolayCare"
                className="w-full h-auto object-cover"
                style={{ minHeight: '360px', objectPosition: 'center' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   E-DÖNÜŞÜM SECTION  (4. section)
══════════════════════════════════════════ */
const edFeatures = ['e-Fatura', 'e-Arşiv', 'e-Defter', 'ERP Entegrasyonları'];

function EDonusumSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section
      ref={ref}
      style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F0F6FF 50%, #E8F0FE 100%)' }}
    >
      <div className="container-wide py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: image ── */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
            className="relative order-2 lg:order-1"
          >
            {/* Green accent border – left side */}
            
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
               
              
              }}
            >
              <img
                src="/assets/Çözümler/e-dönüşüm.png"
                alt="e-Dönüşüm"
                className="w-full h-auto object-cover"
                style={{ minHeight: '360px', objectPosition: 'center' }}
              />
            </div>
          </motion.div>

          {/* ── Right: content ── */}
          <div className="flex flex-col order-1 lg:order-2">
            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#64748B', letterSpacing: '0.14em' }}
              >
                E-Dönüşüm
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
              className="mt-5 font-display font-bold leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0A1628' }}
            >
              GİB Uyumlu{' '}
              <span style={{ color: '#184A97', display: 'block' }}>Dijital Dönüşüm</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
              className="mt-6 text-[#475569] leading-relaxed"
              style={{ fontSize: '1rem', maxWidth: '480px' }}
            >
              Şirketlerin yüksek hacimli dijital belge ve entegrasyon süreçlerini güvenli
              altyapılarla yönetiyoruz. Yeni nesil ödeme altyapıları ve mobil POS
              teknolojileriyle hızlı ve güvenli tahsilat deneyimleri sağlıyoruz.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {edFeatures.map((f) => (
                <span
                  key={f}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid #CBD5E1', color: '#334155' }}
                >
                  {f}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}
              className="mt-9"
            >
              <Link
                to="/cozumler/e-donusum"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
                style={{
                  background: '#184A97',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px -4px rgba(24,74,151,0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1449b8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#184A97'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                e-Dönüşüm'ü Keşfet
                <span style={{ fontSize: '1.1rem' }}>›</span>
              </Link>
            </motion.div>

            {/* GİB badge */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={5}
              className="mt-5"
            >
              <div
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.85)', border: '1px solid #BBF7D0', backdropFilter: 'blur(8px)' }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: '#DCFCE7' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5L6.5 12L13 5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: '#0A1628' }}>GİB Onaylı Entegratör</p>
                  <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>Gelir İdaresi Başkanlığı sertifikalı</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PEYK SECTION  (5. section)
══════════════════════════════════════════ */
const peykFeatures = ['Bordro', 'Tebligat', 'Sözleşme', 'İzin Formları'];

function PeykSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section ref={ref} className="bg-white" style={{ borderTop: '1px solid #F1F5F9' }}>
      <div className="container-wide py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: content ── */}
          <div className="flex flex-col">
            {/* Badge */}
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}>
              <span
                className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{ background: '#F8FAFC', color: '#64748B', border: '1px solid #E2E8F0', letterSpacing: '0.14em' }}
              >
                Peyk
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
              className="mt-5 font-display font-bold leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#0A1628' }}
            >
              Kurumsal Belgeyi{' '}
              <span style={{ color: '#184A97', display: 'block' }}>Dijitale Taşıyor</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={2}
              className="mt-6 text-[#475569] leading-relaxed"
              style={{ fontSize: '1rem', maxWidth: '420px' }}
            >
              İK operasyonlarını dijitalleştiren yasal uyumlu belge ve çalışan süreçleri geliştiriyoruz
            </motion.p>

            {/* Feature pills */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={3}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {peykFeatures.map((f) => (
                <span
                  key={f}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#334155' }}
                >
                  {f}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={4}
              className="mt-9"
            >
              <Link
                to="/cozumler/peyk"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200"
                style={{
                  background: '#184A97',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 20px -4px rgba(24,74,151,0.35)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1449b8'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#184A97'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Peyk'i Keşfet
                <span style={{ fontSize: '1.1rem' }}>›</span>
              </Link>
            </motion.div>
          </div>

          {/* ── Right: image ── */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
              
               
               
              }}
            >
              <img
                src="/assets/Çözümler/peyk-folder.png"
                alt="Peyk"
                className="w-full h-auto object-contain"
                style={{ minHeight: '340px', padding: '2rem' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


/* ══════════════════════════════════════════
   NEDEN KOLAYSOFT SECTION  (son section)
══════════════════════════════════════════ */
const whyItems = [
  {
    icon: RefreshCw,
    title: 'Esnek Entegrasyon',
    desc: 'SAP, Logo, Mikro, Netsis ve 50+ ERP sistemi ile hazır entegrasyon bağlantıları.',
  },
  {
    icon: Clock,
    title: '7/24 Destek',
    desc: 'Kesintisiz teknik destek hattı, SLA garantisi ve proaktif izleme altyapısı.',
  },
  {
    icon: Zap,
    title: 'Yüksek Performans',
    desc: '%99.9 uptime garantisi, düşük gecikme süresi ve optimize veri işleme.',
  },
  {
    icon: Building2,
    title: 'Kurumsal Deneyim',
    desc: '15 yılı aşkın sektör deneyimi, 500+ kurumsal referans.',
  },
];

const securityChecks = ['ISO 27001 Sertifikalı', 'SSL 256-bit Şifreleme', 'KVKK Uyumlu', 'Çok Katmanlı Güvenlik'];
const securityPills  = ['ISO 27001', 'SSL 256', 'KVKK'];

function NedenKolaysoftSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section ref={ref} style={{ background: '#F0F4FA' }}>
      <div className="container-wide py-20 lg:py-28">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
          className="mb-12"
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ background: '#F8FAFC', color: '#64748B', border: '1px solid #E2E8F0', letterSpacing: '0.14em' }}
          >
            Neden Kolaysoft?
          </span>
          <h2
            className="font-display font-bold text-[#0A1628]"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          >
            Neden Kolaysoft{' '}
            <span style={{ color: '#184A97' }}>Çözümleri?</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5" style={{ gridTemplateRows: 'auto auto' }}>

          {/* Large card – spans 2 rows */}
          <motion.div
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
            className="lg:row-span-2 flex flex-col rounded-2xl bg-white p-7"
            style={{ boxShadow: '0 2px 20px -4px rgba(0,0,0,0.07)', border: '1px solid #E8EEF8' }}
          >
            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
              style={{ background: '#EEF4FF' }}
            >
              <Shield size={20} style={{ color: '#184A97' }} />
            </div>

            <h3 className="font-display font-bold text-[#0A1628] mb-3" style={{ fontSize: '1.2rem' }}>
              Güvenli Altyapı
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-7">
              ISO 27001 sertifikası, SSL 256-bit şifreleme ve çok katmanlı güvenlik protokolleri ile
              verileriniz her an korunur. KVKK uyumlu altyapı ile kurumsal veri güvenliğini garanti
              altına alıyoruz.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-2.5 mb-8">
              {securityChecks.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CheckCircle size={16} style={{ color: '#184A97', flexShrink: 0 }} />
                  <span className="text-sm text-[#475569]">{item}</span>
                </div>
              ))}
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {securityPills.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: '#F1F5F9', color: '#334155', border: '1px solid #E2E8F0' }}
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 4 small cards – 2x2 on right */}
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={i + 2}
              className="flex flex-col rounded-2xl bg-white p-6"
              style={{ boxShadow: '0 2px 20px -4px rgba(0,0,0,0.07)', border: '1px solid #E8EEF8' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: '#EEF4FF' }}
              >
                <item.icon size={18} style={{ color: '#184A97' }} />
              </div>
              <h3 className="font-display font-bold text-[#0A1628] mb-2" style={{ fontSize: '1.05rem' }}>
                {item.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function Cozumler() {
  return (
    <>
      <PageHeader />
      <HeroSection />
      <IntroSection />
      <KolayCareSection />
      <EDonusumSection />
      <PeykSection />
      <NedenKolaysoftSection />
    </>
  );
}
