import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Smartphone, Users, Tag, ShoppingCart, BarChart3, Check } from 'lucide-react';

const BASE = '/k%C4%B1rm%C4%B1z%C4%B1%20kurumsal%20g%C3%B6rsel/Hero%20Visual';
const kirmiziLogo  = '/k%C4%B1rm%C4%B1z%C4%B1%20kurumsal%20g%C3%B6rsel/kirmizi-logo.png';
const heroPhones   = `${BASE}/Higgsfield%20image.png`;
const puanKazan    = `${BASE}/Puan%20Kazan.png`;
const giderTakibi  = `${BASE}/Gider%20Takibi.png`;
const kampanyalar  = `${BASE}/Kampanyalar.png`;
const aiAsistan    = `${BASE}/AI%20Asistan.png`;
const dijitalKart  = `${BASE}/Dijital%20Kart.png`;
const cashback     = `${BASE}/Cashback.png`;

const floatingFeatures = [
  { src: puanKazan,   label: 'Puan Kazan',   style: { top: '2%',  left: '-4%'  } },
  { src: giderTakibi, label: 'Gider Takibi', style: { top: '2%',  right: '-2%' } },
  { src: kampanyalar, label: 'Kampanyalar',  style: { top: '38%', right: '-4%' } },
  { src: aiAsistan,   label: 'AI Asistan',   style: { bottom: '8%', left: '-4%' } },
  { src: dijitalKart, label: 'Dijital Kart', style: { bottom: '22%', left: '6%' } },
  { src: cashback,    label: 'Cashback',     style: { bottom: '8%', right: '-2%' } },
];

const modules = [
  { label: 'Puan Kazan',    sub: 'Sadakat & Ödül Sistemi'   },
  { label: 'Cashback',      sub: 'Nakit İade Mekanizması'   },
  { label: 'Dijital Kart',  sub: 'Üyelik & Kimlik Kartı'    },
  { label: 'AI Asistan',    sub: 'Yapay Zekâ Destek Modülü' },
];

export default function KirmiziKurumsal() {
  const adimlar = [
    { no: '01', baslik: 'Kuruma Özel Uygulama',    aciklama: 'Marka kimliğine uygun mobil altyapı',    Icon: Smartphone    },
    { no: '02', baslik: 'Üyelik Yönetimi',          aciklama: 'Kapalı devre kullanıcı sistemi',         Icon: Users         },
    { no: '03', baslik: 'Kampanya ve Avantajlar',   aciklama: 'Marka iş birlikleri ve özel fırsatlar',  Icon: Tag           },
    { no: '04', baslik: 'Satın Alma Gücü',          aciklama: 'Tedarikçi ağı ve maliyet avantajı',      Icon: ShoppingCart  },
    { no: '05', baslik: 'Oyunlaştırma ve Analitik', aciklama: 'Ölçülebilir bağlılık modeli',            Icon: BarChart3     },
  ];

  const [aktifAdim, setAktifAdim] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setAktifAdim(p => (p + 1) % adimlar.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white">

      {/* HEADER */}
      <header className="relative min-h-[240px] sm:h-80 overflow-hidden">
        <img src="/assets/headers/cozumler-header.png" alt="Kırmızı Kurumsal" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />
        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-5">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <Link to="/cozumler" className="text-white/80 hover:text-white transition-colors">Çözümler</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Kırmızı Kurumsal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            Kırmızı Kurumsal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/85 text-base max-w-xl">
            Sadakat ve Avantaj Platformu
          </motion.p>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: '#ffffff', paddingTop: '4.5rem', paddingBottom: '5rem' }}>
        <div className="container-wide">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: '#ffffff', borderRadius: 16, padding: '14px 22px',
                marginBottom: 22, border: '1px solid #EEF2F6',
                boxShadow: '0 6px 20px rgba(12,242,93,0.18), 0 2px 6px rgba(0,0,0,0.05)',
              }}>
                <img src={kirmiziLogo} alt="Kırmızı Kurumsal"
                  style={{ height: 48, width: 'auto', display: 'block', objectFit: 'contain' }}
                  onError={e => { e.target.style.display = 'none'; }} />
                <span style={{
                  display: 'flex', flexDirection: 'column', lineHeight: 1.05,
                  fontFamily: 'Cabin, sans-serif', fontWeight: 800, color: '#0D1117',
                }}>
                  <span style={{ fontSize: 20, letterSpacing: '0.01em' }}>KIRMIZI</span>
                  <span style={{ fontSize: 20, letterSpacing: '0.01em' }}>KURUMSAL</span>
                </span>
              </div>

              <div style={{ marginBottom: 28 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: '#F1F5F9', borderRadius: 18, padding: '5px 14px',
                }}>
                  <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: '#475569', letterSpacing: '0.08em' }}>SADAKAT VE AVANTAJ PLATFORMU</span>
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.18,
                color: '#0D1117', marginBottom: '1.4rem', fontFamily: 'Cabin, sans-serif',
              }}>
                Kurumunuza Özel<br />Sadakat ve Avantaj<br />Platformu
              </h1>

              <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.78, maxWidth: 480, marginBottom: '2.4rem' }}>
                Kırmızı Kurumsal; kamu ve özel sektör kurumları, meslek birlikleri,
                odalar, sendikalar ve büyük organizasyonlar için geliştirilen
                mobil öncelikli dijital avantaj ekosistemidir. Kuruma özel mobil
                uygulama, yaygın marka ağı, toplu satın alma gücü ve dijital
                yönetim altyapısıyla sürdürülebilir fayda sunar.
              </p>

              <a href="https://kirmizikurumsal.com.tr/" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#1B3A6B', color: 'white', fontWeight: 700, fontSize: 15,
                  padding: '14px 28px', borderRadius: 12, textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(27,58,107,0.28)', transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1446b8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1B3A6B'; }}
              >
                Web Sitesini Ziyaret Et <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #FFF1F2 100%)',
                borderRadius: 28, padding: '28px 20px',
                boxShadow: '0 24px 64px rgba(225,29,72,0.08), 0 4px 12px rgba(0,0,0,0.06)',
                width: '100%', position: 'relative',
              }}>
                <img src={heroPhones} alt="Kırmızı Kurumsal App"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain', borderRadius: 12 }}
                  onError={e => { e.target.style.opacity = '0.3'; }} />

                {floatingFeatures.map(({ label, style }, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                    transition={{
                      opacity: { duration: 0.5, delay: 0.4 + i * 0.1 },
                      scale: { duration: 0.5, delay: 0.4 + i * 0.1 },
                      y: { duration: 3 + (i % 3) * 0.6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 },
                    }}
                    style={{
                      position: 'absolute', ...style,
                      background: 'white', borderRadius: 14,
                      boxShadow: '0 8px 26px rgba(0,0,0,0.14)',
                      overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center',
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '11px 20px', background: 'white', width: '100%',
                    }}>
                      <span style={{ width: 9, height: 9, background: '#E11D48', borderRadius: '50%', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#1E293B', whiteSpace: 'nowrap' }}>{label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM TANIMI */}
      <section style={{ background: '#EEF2FF', padding: '72px 0 80px' }}>
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'white', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '6px 16px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
              <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#475569', letterSpacing: '0.09em' }}>KURUMSAL SADAKAT EKOSİSTEMİ</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              background: '#ffffff', borderRadius: 24,
              padding: 'clamp(48px, 6vw, 72px) clamp(32px, 8vw, 120px)',
              textAlign: 'center',
              boxShadow: '0 2px 24px rgba(99,102,241,0.07)',
            }}
          >
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: 800, color: '#0D1117', lineHeight: 1.3,
              fontFamily: 'Cabin, sans-serif', maxWidth: 620, margin: '0 auto 20px',
            }}>
              Kırmızı Kurumsal ile bağlılığı artıran dijital avantaj deneyimi
            </h2>
            <p style={{ color: '#64748B', fontSize: 14.5, lineHeight: 1.8, maxWidth: 540, margin: '0 auto' }}>
              Kurumunuza özel mobil uygulama, yaygın marka ağı, oyunlaştırma,
              toplu satın alma gücü ve yapay zekâ destekli deneyimlerle
              üyelerinize ve çalışanlarınıza sürdürülebilir fayda sunun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: NEDEN KIRMIZI KURUMSAL */}
      <section style={{ background: '#ffffff', padding: '72px 0 80px' }}>
        <div className="container-wide">

          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ marginBottom: 20 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F8FAFC', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '5px 14px',
            }}>
              <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#475569', letterSpacing: '0.08em' }}>NEDEN KIRMIZI KURUMSAL?</span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.6rem)', fontWeight: 800, color: '#0D1117', lineHeight: 1.2,
              marginBottom: 40, fontFamily: 'Cabin, sans-serif',
            }}
          >
            Neden Kırmızı Kurumsal?
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gridAutoRows: '1fr',
            gap: 16,
            alignItems: 'stretch',
          }}>
            {[
              {
                bg: '#ECFDF5', iconBg: '#D1FAE5',
                title: 'Kurumunuza özel mobil uygulama',
                desc: 'Marka kimliğinize uygun, kapalı devre dijital avantaj platformu.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1v3M10 16v3M1 10h3M16 10h3M3.22 3.22l2.12 2.12M14.66 14.66l2.12 2.12M3.22 16.78l2.12-2.12M14.66 5.34l2.12-2.12" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                bg: '#F1F5F9', iconBg: '#E2E8F0',
                title: 'Kapalı devre sadakat sistemi',
                desc: 'Yalnızca kurum üyeleri veya çalışanları için özel avantaj altyapısı.',
                icon: (
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <rect x="2" y="9" width="14" height="10" rx="3" stroke="#64748B" strokeWidth="1.8"/>
                    <path d="M6 9V6a3 3 0 016 0v3" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="9" cy="14" r="1.5" fill="#64748B"/>
                  </svg>
                ),
              },
              {
                bg: '#FFF1F2', iconBg: '#FFE4E6',
                title: 'Oyunlaştırma ve ödüllendirme',
                desc: 'Görevler, rozetler, puanlar ve ödüllerle kullanıcı etkileşimini artırır.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 1v3M10 16v3M1 10h3M16 10h3M3.22 3.22l2.12 2.12M14.66 14.66l2.12 2.12M3.22 16.78l2.12-2.12M14.66 5.34l2.12-2.12" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                bg: '#F5F3FF', iconBg: '#EDE9FE',
                title: 'Yapay zekâ destekli deneyim',
                desc: 'Kullanıcı ihtiyaçlarına göre akıllı öneriler ve hızlı destek sunar.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="6" width="16" height="11" rx="3" stroke="#7C3AED" strokeWidth="1.8"/>
                    <circle cx="7" cy="11" r="1.5" fill="#7C3AED"/>
                    <circle cx="13" cy="11" r="1.5" fill="#7C3AED"/>
                    <path d="M7 6V4a3 3 0 016 0v2" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                bg: '#FFFBEB', iconBg: '#FEF3C7',
                title: 'Panel üzerinden gider takibi',
                desc: 'Satın alma ve hizmet giderlerini şeffaf biçimde raporlamayı kolaylaştırır.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2C6.13 2 3 5.13 3 9c0 2.38 1.19 4.47 3 5.74V17h8v-2.26C15.81 13.47 17 11.38 17 9c0-3.87-3.13-7-7-7z" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 17h4" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                bg: '#ECFDF5', iconBg: '#D1FAE5',
                title: 'Toplu satın alma gücü',
                desc: 'Kurumların ortak gücüyle avantajlı fiyatlar ve yüksek iskonto oranları sağlar.',
                icon: (
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                    <path d="M9 1v10M9 11l-3-3M9 11l3-3" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 14v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="#059669" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map(({ bg, iconBg, title, desc, icon }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: bg, borderRadius: 20,
                  padding: '28px 28px 32px',
                  display: 'flex', flexDirection: 'column',
                  minHeight: 240,
                  gridColumn: i === 0 || i === 5 ? 'span 2' : 'span 1',
                }}
              >
                {/* İkon — üstte sabit */}
                <div style={{
                  width: 52, height: 52, background: iconBg, borderRadius: 16,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {icon}
                </div>

                {/* Boşluk doldurucu */}
                <div style={{ flex: 1 }} />

                {/* Metin — kartta aşağıda */}
                <div>
                  <p style={{ fontWeight: 700, fontSize: 15, color: '#0D1117', lineHeight: 1.4, marginBottom: 8 }}>
                    {title}
                  </p>
                  <p style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.65, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: PLATFORM YETENEKLERİ */}
      <section style={{ background: '#F8FAFC', padding: '80px 0 80px' }}>
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ marginBottom: 20 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'white', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '5px 14px',
            }}>
              <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#475569', letterSpacing: '0.08em' }}>PLATFORM YETENEKLERİ</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0D1117', lineHeight: 1.2,
              marginBottom: 14, maxWidth: 640, fontFamily: 'Cabin, sans-serif',
            }}
          >
            Avantaj, sadakat ve kurumsal yönetim tek platformda
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: '#64748B', fontSize: 16, lineHeight: 1.7, maxWidth: 580, marginBottom: 56 }}
          >
            Kampanyalardan satın alma yönetimine, oyunlaştırmadan yapay zekâ destekli deneyime kadar
            kurumsal faydayı tek ekosistemde birleştirin.
          </motion.p>

          {/* Kartlar — stacking */}
          <div style={{ position: 'relative', paddingBottom: 80 }}>
            {[
              {
                reverse: false,
                img: '/k%C4%B1rm%C4%B1z%C4%B1%20kurumsal%20g%C3%B6rsel/Campaign%20Network.png',
                title: 'Avantaj ve Marka Ağı',
                desc: 'Gıda, giyim, akaryakıt, sağlık, eğitim ve daha birçok kategoride sunulan avantajlarla kullanıcı memnuniyetini ve kurumsal bağlılığı artırır.',
                feats: ['Türkiye genelinde avantaj ağı', 'Üyelere özel kampanyalar', 'İndirim ve puan sistemi', 'Cashback altyapısı', 'Marka iş birlikleri'],
              },
              {
                reverse: true,
                img: '/k%C4%B1rm%C4%B1z%C4%B1%20kurumsal%20g%C3%B6rsel/Expense%20Dashboard.png',
                title: 'Kurumsal Satın Alma ve Gider Yönetimi',
                desc: 'Toplu satın alma gücü, lider tedarikçi ağı ve panel üzerinden gider takibi ile satın alma süreçlerinde ölçülebilir verimlilik sağlar.',
                feats: ['Toplu satın alma gücü', 'Lider tedarikçi ağı', 'Panel üzerinden gider takibi', 'Şeffaf raporlama', 'Dijital sözleşme yönetimi'],
              },
              {
                reverse: false,
                img: '/k%C4%B1rm%C4%B1z%C4%B1%20kurumsal%20g%C3%B6rsel/Gamification.png',
                title: 'Oyunlaştırma Altyapısı',
                desc: 'Görevler, başarımlar, puanlama ve ödül sistemleriyle kullanıcıların platformla daha sık ve anlamlı etkileşim kurmasını sağlar.',
                feats: ['Günlük görevler', 'Rozet ve başarı sistemi', 'Puan kazanma mekanizması', 'Ödül senaryoları', 'Kullanıcı motivasyonu'],
              },
              {
                reverse: true,
                img: '/k%C4%B1rm%C4%B1z%C4%B1%20kurumsal%20g%C3%B6rsel/AI%20Assistant.png',
                title: 'Yapay Zeka Asistanı',
                desc: 'Mobil uygulamadaki yapay zekâ destekli dijital asistan, ihtiyaç duyulan bilgilere hızlı erişim ve kişiselleştirilmiş öneriler sunar.',
                feats: ['Doğal dil desteği', 'Akıllı öneriler', 'Kampanya yönlendirmeleri', 'Sık sorulan sorular desteği', '7/24 dijital asistan deneyimi'],
              },
            ].map(({ reverse, img, title, desc, feats }, i) => (
              <div
                key={title}
                style={{
                  position: 'sticky',
                  top: `calc(var(--nav-height, 80px) + ${20 + i * 24}px)`,
                  zIndex: i + 1,
                  maxWidth: 1320,
                  margin: '0 auto',
                  marginBottom: i < 3 ? 24 : 0,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  style={{
                    background: 'white',
                    borderRadius: 24,
                    boxShadow: `0 ${8 + i * 4}px ${32 + i * 8}px rgba(0,0,0,${0.06 + i * 0.01})`,
                    display: 'flex',
                    flexDirection: reverse ? 'row-reverse' : 'row',
                    overflow: 'hidden',
                    minHeight: 360,
                  }}
                >
                  {/* Görsel */}
                  <div style={{
                    width: '42%', flexShrink: 0,
                    background: '#ffffff',
                    overflow: 'hidden',
                    minHeight: 340,
                  }}>
                    <img
                      src={img} alt={title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      onError={e => { e.target.style.opacity = '0.2'; }}
                    />
                  </div>

                  {/* İçerik */}
                  <div style={{
                    flex: 1, padding: 'clamp(28px, 4vw, 48px)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  }}>
                    <h3 style={{
                      fontSize: 'clamp(1.2rem, 2.2vw, 1.55rem)', fontWeight: 800,
                      color: '#0D1117', lineHeight: 1.3, marginBottom: 12,
                      fontFamily: 'Cabin, sans-serif',
                    }}>
                      {title}
                    </h3>
                    <p style={{ color: '#64748B', fontSize: 13.5, lineHeight: 1.7, marginBottom: 24 }}>
                      {desc}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {feats.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                            <path d="M2 7l3.5 3.5L12 3.5" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span style={{ fontSize: 13, color: '#1B3A6B', fontWeight: 600 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 5 — KİMLER İÇİN */}
      <section style={{ background: '#F8FAFC', padding: '96px 0' }}>
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F0FDF4', border: '1.5px solid #BBF7D0',
              borderRadius: 20, padding: '5px 16px',
            }}>
              <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11.5, fontWeight: 700, color: '#15803D', letterSpacing: '0.08em' }}>KİMLER İÇİN?</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.06 }}
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 800,
              color: '#0D1117', textAlign: 'center', lineHeight: 1.2,
              fontFamily: 'Cabin, sans-serif', marginBottom: 20,
            }}
          >
            Üyelik bazlı yapılar için güçlü sadakat altyapısı
          </motion.h2>

          {/* Açıklama */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              textAlign: 'center', color: '#64748B', fontSize: 15, lineHeight: 1.75,
              maxWidth: 560, margin: '0 auto 56px',
            }}
          >
            Kırmızı Kurumsal; üyeleri, çalışanları veya paydaşları için avantajlı ve
            sürdürülebilir bir dijital deneyim oluşturmak isteyen kurumlara özel çözümler sunar.
          </motion.p>

          {/* 4×2 Kart Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gridAutoRows: '1fr',
            gap: 16,
            alignItems: 'stretch',
          }}>
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M9 21V7l3-4 3 4v14M5 21V11l2-2M19 21V11l-2-2" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Meslek Odaları',
                sub: 'Üyelere özel avantajlar',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Kamu Kurumları',
                sub: 'Kurumsal fayda yönetimi',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="white" strokeWidth="1.8"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M12 12v4M10 14h4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Büyük Ölçekli Şirketler',
                sub: 'Çalışan deneyimi',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
                    <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
                    <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
                    <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="white" strokeWidth="1.8"/>
                  </svg>
                ),
                title: 'Üyelik Bazlı Organizasyonlar',
                sub: 'Kapalı devre sadakat',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 22V12h6v10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Franchise Yapıları',
                sub: 'Dağıtık yapı yönetimi',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8"/>
                    <circle cx="17" cy="9" r="3" stroke="white" strokeWidth="1.8"/>
                    <path d="M1 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Sendikalar',
                sub: 'Çalışan adaleti desteği',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Dernekler',
                sub: 'Topluluk bağlılığı',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="3" stroke="white" strokeWidth="1.8"/>
                    <circle cx="5" cy="17" r="2.5" stroke="white" strokeWidth="1.8"/>
                    <circle cx="19" cy="17" r="2.5" stroke="white" strokeWidth="1.8"/>
                    <path d="M12 11v3M9.5 17H14.5M7 17H7.5M16.5 17H17" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Birlikler',
                sub: 'Ortak fayda ağı',
              },
            ].map(({ icon, title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  background: 'white',
                  borderRadius: 16,
                  border: '1.5px solid #E2E8F0',
                  padding: '20px 20px 22px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                }}
                whileHover={{ boxShadow: '0 4px 16px rgba(0,0,0,0.09)', borderColor: '#CBD5E1' }}
              >
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {icon}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 13.5, color: '#0D1117', margin: '0 0 4px', lineHeight: 1.4 }}>{title}</p>
                  <p style={{ fontSize: 12.5, color: '#94A3B8', margin: 0, lineHeight: 1.5 }}>{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 6 — REFERANS EKOSİSTEMİ */}
      <section style={{ background: '#ffffff', padding: '96px 0' }}>
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ marginBottom: 24 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F0FDF4', border: '1.5px solid #BBF7D0',
              borderRadius: 20, padding: '5px 16px',
            }}>
              <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11.5, fontWeight: 700, color: '#15803D', letterSpacing: '0.08em' }}>REFERANS EKOSİSTEMİ</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.06 }}
            style={{
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800,
              color: '#0D1117', lineHeight: 1.2,
              fontFamily: 'Cabin, sans-serif', marginBottom: 16,
              maxWidth: 700,
            }}
          >
            Farklı kurumlara özel sadakat ekosistemleri
          </motion.h2>

          {/* Açıklama */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              color: '#64748B', fontSize: 15, lineHeight: 1.75,
              maxWidth: 520, marginBottom: 52,
            }}
          >
            Kırmızı Kurumsal altyapısı ile farklı sektörlerde binlerce kullanıcıya ulaşan
            sürdürülebilir sadakat ve avantaj programları yönetilmektedir.
          </motion.p>

          {/* 4 Referans Kartı */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gridAutoRows: '1fr',
            gap: 20,
            alignItems: 'stretch',
          }}>
            {[
              { title: 'Eczacı Kart',      desc: 'Kurumuna özel avantaj ve sadakat deneyimi sunan dijital platform.' },
              { title: 'Optik Kart',       desc: 'Kurumuna özel avantaj ve sadakat deneyimi sunan dijital platform.' },
              { title: 'Memur-Sen Avantaj',desc: 'Kurumuna özel avantaj ve sadakat deneyimi sunan dijital platform.' },
              { title: 'MBT Avantaj',      desc: 'Kurumuna özel avantaj ve sadakat deneyimi sunan dijital platform.' },
            ].map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: 'white',
                  borderRadius: 20,
                  border: '1.5px solid #E2E8F0',
                  padding: '28px 24px 28px',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
                  minHeight: 220,
                }}
                whileHover={{ boxShadow: '0 6px 24px rgba(0,0,0,0.09)', borderColor: '#CBD5E1' }}
              >
                {/* Dekoratif köşe */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: 80, height: 80,
                  background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
                  borderBottomLeftRadius: 80,
                  opacity: 0.7,
                }} />

                <h3 style={{
                  fontSize: 15.5, fontWeight: 700,
                  color: '#1B3A6B', marginBottom: 16,
                  lineHeight: 1.3, position: 'relative', zIndex: 1,
                }}>
                  {title}
                </h3>

                <p style={{
                  fontSize: 13.5, color: '#64748B', lineHeight: 1.7,
                  flex: 1, margin: 0,
                }}>
                  {desc}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  marginTop: 24,
                }}>
                  <span style={{
                    width: 8, height: 8,
                    background: '#1B3A6B', borderRadius: '50%', display: 'inline-block', flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 12, color: '#1B3A6B', fontWeight: 600 }}>Kırmızı Kurumsal Altyapısı</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* SECTION 7 — AVANTAJLI DENEYİM AKIŞI */}
      <section style={{ background: '#F8FAFC', padding: '96px 0' }}>
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F0FDF4', border: '1.5px solid #BBF7D0',
              borderRadius: 20, padding: '5px 16px',
            }}>
              <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11.5, fontWeight: 700, color: '#15803D', letterSpacing: '0.08em' }}>AVANTAJLI DENEYİM AKIŞI</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.06 }}
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)', fontWeight: 800,
              color: '#0D1117', textAlign: 'center', lineHeight: 1.2,
              fontFamily: 'Cabin, sans-serif', marginBottom: 20,
            }}
          >
            Kurumdan kullanıcıya uzanan<br />sürdürülebilir değer modeli
          </motion.h2>

          {/* Açıklama */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              textAlign: 'center', color: '#64748B', fontSize: 15, lineHeight: 1.75,
              maxWidth: 520, margin: '0 auto 40px',
            }}
          >
            Kurumsal faydayı mobil deneyim, avantaj ağı ve ölçülebilir bağlılık modeliyle uçtan uca yönetin.
          </motion.p>

          {/* Aktif adım badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'white', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '7px 18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              fontSize: 13, fontWeight: 600, color: '#334155',
            }}>
              <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={aktifAdim}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {aktifAdim + 1}/5 — {adimlar[aktifAdim].baslik}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Stepper */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 28 }}>
            {adimlar.map((adim, i) => {
              const tamamlandi = i < aktifAdim;
              const aktif = i === aktifAdim;
              const { Icon } = adim;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                  {/* Bağlantı çizgisi */}
                  {i < adimlar.length - 1 && (
                    <div style={{
                      position: 'absolute', top: 28, left: '50%',
                      width: '100%', height: 2,
                      background: '#D1D5DB', zIndex: 0,
                    }}>
                      <motion.div
                        style={{ height: '100%', background: '#1B3A6B' }}
                        animate={{ width: tamamlandi ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}

                  {/* Node */}
                  <div style={{ position: 'relative', zIndex: 1, marginBottom: 14 }}>
                    {aktif && (
                      <span style={{
                        position: 'absolute', inset: 0,
                        borderRadius: '50%',
                        background: 'rgba(34,197,94,0.25)',
                        animation: 'ping 1s cubic-bezier(0,0,0.2,1) infinite',
                      }} />
                    )}
                    <motion.div
                      animate={{
                        backgroundColor: tamamlandi ? '#1B3A6B' : aktif ? '#22C55E' : '#CBD5E1',
                        scale: aktif ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      style={{
                        width: 56, height: 56, borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: aktif
                          ? '0 0 0 4px rgba(34,197,94,0.2), 0 4px 16px rgba(0,0,0,0.12)'
                          : '0 2px 8px rgba(0,0,0,0.08)',
                      }}
                    >
                      {tamamlandi
                        ? <Check size={22} color="white" strokeWidth={3} />
                        : <Icon size={22} color={aktif ? '#0D1117' : '#94A3B8'} />
                      }
                    </motion.div>
                  </div>

                  {/* Metin */}
                  <div style={{ textAlign: 'center', padding: '0 4px' }}>
                    <p style={{
                      fontSize: 10.5, fontWeight: 700, marginBottom: 3,
                      color: aktif ? '#22C55E' : tamamlandi ? '#1B3A6B' : '#94A3B8',
                      letterSpacing: '0.04em',
                    }}>
                      {adim.no}
                    </p>
                    <p style={{
                      fontSize: 12, fontWeight: 700, lineHeight: 1.35, marginBottom: 4,
                      color: (aktif || tamamlandi) ? '#0D1117' : '#94A3B8',
                    }}>
                      {adim.baslik}
                    </p>
                    <p style={{
                      fontSize: 11, lineHeight: 1.4,
                      color: (aktif || tamamlandi) ? '#64748B' : '#CBD5E1',
                    }}>
                      {adim.aciklama}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
            {adimlar.map((_, i) => (
              <button
                key={i}
                onClick={() => setAktifAdim(i)}
                style={{
                  height: 8, borderRadius: 4, border: 'none', cursor: 'pointer',
                  background: i === aktifAdim ? '#1B3A6B' : '#CBD5E1',
                  width: i === aktifAdim ? 24 : 8,
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>

        </div>
      </section>

      <style>{`@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`}</style>

      {/* FOOTER CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #0D1B3E 0%, #1B3A6B 50%, #1446b8 100%)',
        padding: '100px 0',
      }}>
        <div className="container-wide" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* Logo badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              background: 'white',
              borderRadius: 18, padding: '12px 26px 12px 16px',
              boxShadow: '0 0 18px rgba(12,242,93,0.8), 0 0 44px rgba(12,242,93,0.45)',
              marginBottom: 36,
            }}
          >
            <img src={kirmiziLogo} alt="Kırmızı Kurumsal"
              style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block', flexShrink: 0 }}
              onError={e => { e.target.style.display = 'none'; }} />
            <span style={{
              fontWeight: 800, fontSize: 18, color: '#0D1B3E', lineHeight: 1.15,
              fontFamily: 'Cabin, sans-serif', textAlign: 'left',
            }}>
              Kırmızı<br />Kurumsal
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800,
              color: 'white', lineHeight: 1.18,
              marginBottom: 20, maxWidth: 680, fontFamily: 'Cabin, sans-serif',
            }}
          >
            Kurumunuza özel{' '}
            <span style={{ color: '#0CF25D' }}>avantaj ekosistemini</span>{' '}
            dijitale taşıyın.
          </motion.h2>

          {/* Açıklama */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
            style={{
              color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.75,
              maxWidth: 500, marginBottom: 40,
            }}
          >
            Kırmızı Kurumsal ile üyelerinize ve çalışanlarınıza özel fırsatlar sunan,
            satın alma gücünüzü artıran ve bağlılığı güçlendiren mobil öncelikli
            kurumsal platformu keşfedin.
          </motion.p>

          {/* CTA Butonu */}
          <motion.a
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            href="https://kirmizikurumsal.com.tr" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#1B3A6B', color: 'white', fontWeight: 700, fontSize: 15,
              padding: '16px 36px', borderRadius: 14, textDecoration: 'none',
              boxShadow: '0 4px 24px #0CF25D', transition: 'background 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0dd754'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0ad552'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Web Sitesini Ziyaret Et <ArrowRight size={17} />
          </motion.a>

        </div>
      </section>

    </div>
  );
}
