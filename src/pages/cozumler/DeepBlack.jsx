import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, Check,
  Shield, Plug, Server, Bot, Brain,
  BarChart3, Database, Lock,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ─── Neden DeepBlack cards ─── */
const features = [
  {
    icon: Brain, color: '#3B82F6', bg: '#EFF6FF',
    title: 'Kurumsal ihtiyaçlara özel yapay zeka çözümleri', 
    desc: 'Her sektörün kendine özgü gereksinimlerine göre şekillenen özelleştirilebilir yapay zeka modülleri.',
  },
  {
    icon: Shield, color: '#F59E0B', bg: '#FFFBEB',
    title: 'Güvenli ve ölçeklenebilir mimari', fontSize:18,
    desc: 'Kurumsal güvenlik standartlarına uygun, büyüyen iş yüküne göre ölçeklenen altyapı.',
  },
  {
    icon: Plug, color: '#0CF25D', bg: '#ECFDF5',
    title: 'Mevcut sistemlerle kolay entegrasyon',
    desc: 'ERP, CRM ve diğer kurumsal sistemlerinizle hızlı ve sorunsuz entegrasyon imkânı.',
  },
  {
    icon: Server, color: '#6366F1', bg: '#EEF2FF',
    title: 'Bulut ya da kurum içi (On-Premise) kullanım seçenekleri',
    desc: 'İhtiyacınıza göre bulut tabanlı ya da tamamen yerel sunucularda çalışan esnek dağıtım modelleri.',
  },
  {
    icon: Bot, color: '#EF4444', bg: '#FEF2F2',
    title: 'Verimlilik ve müşteri deneyimini artıran yapay zeka ajanları',
    desc: 'Rutin görevleri otomatikleştiren, müşteri memnuniyetini yükselten akıllı ajan teknolojileri.',
  },
];

/* ─── Çözümler ─── */
const solutions = [
  {
    id: 'cagri-merkezi-asistan',
    title: 'Çağrı Merkezi Asistanı',
    desc: 'Yapay zeka destekli ölçeklenebilir ve modüler yapısıyla çağrı merkezlerinizin operasyonel verimliliğini artırın, müşteri deneyimini iyileştirin.',
    img: '/assets/deepblack/cagri-merkezi.png',
    imgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%)',
    feats: ['Doğal dil anlama (NLU)', 'Gerçek zamanlı transkripsiyon', 'Duygu analizi', 'Otomatik özetleme', 'Çok dilli destek', 'CRM entegrasyonu'],
    benefits: ['Ortalama işlem süresini kısaltma', 'İlk temas çözüm oranını artırma', 'Temsilci verimliliğini yükseltme', 'Müşteri memnuniyetini artırma'],
    reverse: false,
  },
  {
    id: 'kalite-analiz',
    title: 'Çağrı Merkezi Kalite Analizi',
    desc: 'Yapay zeka ile çağrılarınızı otomatik analiz edin, kalite standartlarını yükseltin ve operasyonel iyileştirme fırsatlarını belirleyin.',
    img: '/assets/deepblack/kalite-analiz.png',
    imgGradient: 'linear-gradient(135deg, #0f172a 0%, #1a2e52 50%, #3b82f6 100%)',
    feats: ['Otomatik çağrı değerlendirme', 'Uyumluluk kontrolü', 'Temsilci performans skoru', 'Trend analizi', 'Anlık uyarılar', 'Detaylı raporlama'],
    benefits: ['Manuel dinleme ihtiyacını azaltma', 'Standart dışı çağrıları tespit etme', 'Eğitim ihtiyaçlarını belirleme', 'Müşteri şikayetlerini önceden fark etme'],
    reverse: true,
  },
  {
    id: 'chatbot',
    title: 'Kurumsal Yapay Zeka Chatbot',
    desc: 'Çalışanlarınız ve müşterileriniz için 7/24 hizmet veren, kurumsal verilerinizle beslenen akıllı konuşma ajanı.',
    img: '/assets/deepblack/chatbot.png',
    imgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #6366f1 100%)',
    feats: ['RAG (Retrieval Augmented Generation)', 'Kurumsal bilgi tabanı entegrasyonu', 'Çok kanallı dağıtım', 'Rol tabanlı erişim kontrolü', 'Konuşma geçmişi ve analitik', 'API entegrasyonu'],
    benefits: ['Destek maliyetlerini düşürme', 'Çalışan üretkenliğini artırma', '7/24 kesintisiz hizmet', 'Bilgiye hızlı erişim'],
    reverse: false,
  },
  {
    id: 'chat-platform',
    title: 'Kurum İçi Yapay Zeka Chat Platformu',
    desc: 'Tüm verilerinizi kurum içinde tutarak, güvenli bir yapay zeka chat platformuyla çalışanlarınıza güçlü bir asistan sunun.',
    img: '/assets/deepblack/chat-platform.png',
    imgGradient: 'linear-gradient(135deg, #0f172a 0%, #1a2e52 50%, #0f766e 100%)',
    feats: ['On-Premise LLM desteği', 'DeepBlack LLM platformu', 'Güvenli veri işleme', 'Çok kullanıcılı mimari', 'Özel model fine-tuning', 'Kurum içi veri kaynaklarına bağlantı', 'Aktif dizin entegrasyonu', 'Gelişmiş erişim yönetimi'],
    benefits: ['Veri gizliliği ve güvenliği', 'Harici buluta veri çıkmaz', 'Kurumunuza özel model optimizasyonu', 'Uyumluluk ve denetlenebilirlik'],
    reverse: true,
  },
];

/* ─── AI süreç adımları ─── */
const aiAdimlar = [
  { no: '01', baslik: 'Veri Kaynakları',      aciklama: 'Veri kaynakları hazırlanır',    Icon: BarChart3 },
  { no: '02', baslik: 'Güvenli Entegrasyon',  aciklama: 'Güvenli bağlantı kurulur',      Icon: Lock      },
  { no: '03', baslik: 'LLM & NLP İşleme',    aciklama: 'Dil modeliyle işlenir',          Icon: Brain     },
  { no: '04', baslik: 'Yapay Zekâ Ajanları', aciklama: 'Ajanlar göreve geçer',           Icon: Bot       },
  { no: '05', baslik: 'Raporlama ve Aksiyon', aciklama: 'Sonuç aksiyona dönüşür',        Icon: BarChart3 },
];

/* ─────────────────────────────────────────────────────────
   AI DIAGRAM — görsel ile bire bir SVG
───────────────────────────────────────────────────────── */
function AIDiagram() {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #FFFFFF 0%, #EEF5FF 55%, #E9FFF2 100%)',
        borderRadius: 28,
        padding: '36px 28px 28px',
        boxShadow: '0 24px 64px rgba(99,102,241,0.10), 0 4px 12px rgba(0,0,0,0.05)',
        width: '100%',
      }}
    >
      <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
        <defs>
          <filter id="pill-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#0000001C" />
          </filter>
          <filter id="center-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#00000030" />
          </filter>
        </defs>

        {/* Concentric circles */}
        <circle cx="240" cy="208" r="68"  fill="none" stroke="#C5D4EE" strokeWidth="1" />
        <circle cx="240" cy="208" r="112" fill="none" stroke="#C5D4EE" strokeWidth="1" />
        <circle cx="240" cy="208" r="155" fill="none" stroke="#C5D4EE" strokeWidth="0.7" />

        {/* Crosshair */}
        <line x1="240" y1="42"  x2="240" y2="374" stroke="#C5D4EE" strokeWidth="0.8" />
        <line x1="58"  y1="208" x2="422" y2="208" stroke="#C5D4EE" strokeWidth="0.8" />

        {/* Connection lines center → nodes */}
        <line x1="240" y1="140" x2="240" y2="88"  stroke="#BCC9E4" strokeWidth="1.4" />
        <line x1="183" y1="178" x2="120" y2="157" stroke="#BCC9E4" strokeWidth="1.4" />
        <line x1="297" y1="178" x2="360" y2="157" stroke="#BCC9E4" strokeWidth="1.4" />
        <line x1="194" y1="264" x2="138" y2="312" stroke="#BCC9E4" strokeWidth="1.4" />
        <line x1="286" y1="264" x2="352" y2="312" stroke="#BCC9E4" strokeWidth="1.4" />

        {/* Waypoint circles on lines */}
        <circle cx="240" cy="114" r="5" fill="white" stroke="#BCC9E4" strokeWidth="1.5" />
        <circle cx="151" cy="167" r="5" fill="white" stroke="#BCC9E4" strokeWidth="1.5" />
        <circle cx="329" cy="167" r="5" fill="white" stroke="#BCC9E4" strokeWidth="1.5" />
        <circle cx="166" cy="288" r="5" fill="white" stroke="#BCC9E4" strokeWidth="1.5" />
        <circle cx="319" cy="288" r="5" fill="white" stroke="#BCC9E4" strokeWidth="1.5" />

        {/* Scattered decorative circles */}
        <circle cx="198" cy="90"  r="4" fill="none" stroke="#C5D4EE" strokeWidth="1.5" />
        <circle cx="392" cy="86"  r="4" fill="none" stroke="#C5D4EE" strokeWidth="1.5" />
        <circle cx="78"  cy="258" r="4" fill="none" stroke="#C5D4EE" strokeWidth="1.5" />
        <circle cx="414" cy="298" r="4" fill="none" stroke="#C5D4EE" strokeWidth="1.5" />
        <circle cx="240" cy="370" r="4" fill="none" stroke="#C5D4EE" strokeWidth="1.5" />

        {/* ── CENTER NODE ── */}
        <rect x="192" y="158" width="96" height="100" rx="20" fill="#0D1117" filter="url(#center-shadow)" />
        {/* Green status dot */}
        <circle cx="281" cy="169" r="7" fill="#22C55E" />
        {/* AI */}
        <text x="240" y="221" textAnchor="middle" fill="white" fontSize="30" fontWeight="800" fontFamily="Cabin, sans-serif">AI</text>
        {/* secure core */}
        <text x="240" y="241" textAnchor="middle" fill="#22C55E" fontSize="10" fontWeight="500" fontFamily="DM Sans, sans-serif" letterSpacing="0.6">secure core</text>

        {/* ── SATELLITE PILLS ── */}

        {/* Integration — top */}
        <rect x="178" y="56" width="124" height="36" rx="18" fill="white" filter="url(#pill-shadow)" />
        <circle cx="200" cy="74" r="5.5" fill="#6366F1" />
        <text x="255" y="79" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="600" fontFamily="DM Sans, sans-serif">Integration</text>

        {/* NLP — left */}
        <rect x="50" y="139" width="84" height="36" rx="18" fill="white" filter="url(#pill-shadow)" />
        <circle cx="71" cy="157" r="5.5" fill="#3B82F6" />
        <text x="116" y="162" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="600" fontFamily="DM Sans, sans-serif">NLP</text>

        {/* LLM — right */}
        <rect x="346" y="139" width="82" height="36" rx="18" fill="white" filter="url(#pill-shadow)" />
        <circle cx="367" cy="157" r="5.5" fill="#3B82F6" />
        <text x="408" y="162" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="600" fontFamily="DM Sans, sans-serif">LLM</text>

        {/* Security — bottom left */}
        <rect x="44" y="302" width="106" height="36" rx="18" fill="white" filter="url(#pill-shadow)" />
        <circle cx="66" cy="320" r="5.5" fill="#22C55E" />
        <text x="120" y="325" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="600" fontFamily="DM Sans, sans-serif">Security</text>

        {/* AI Agents — bottom right */}
        <rect x="330" y="302" width="106" height="36" rx="18" fill="white" filter="url(#pill-shadow)" />
        <circle cx="351" cy="320" r="5.5" fill="#3B82F6" />
        <text x="400" y="325" textAnchor="middle" fill="#1E293B" fontSize="12.5" fontWeight="600" fontFamily="DM Sans, sans-serif">AI Agents</text>
      </svg>
    </div>
  );
}

/* ─── Solution image with gradient fallback ─── */
function SolutionImage({ src, gradient, alt }) {
  return (
    <div className="w-full h-full min-h-[300px] relative overflow-hidden" style={{ background: gradient }}>
      <img
        src={src} alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        onError={e => { e.target.style.display = 'none'; }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function DeepBlack() {
  const [aktifAdim, setAktifAdim] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAktifAdim((prev) => (prev + 1) % aiAdimlar.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">

      {/* ── HEADER ── */}
      <header className="relative min-h-[240px] sm:h-80 overflow-hidden">
        <img src="/assets/headers/cozumler-header.png" alt="DeepBlack" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />
        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-5">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <Link to="/cozumler" className="text-white/80 hover:text-white transition-colors">Çözümler</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">DeepBlack</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-3">
            DeepBlack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/85 text-base max-w-xl">
            Kurumsal Yapay Zekâ Platformu
          </motion.p>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Sol: metin */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

              {/* DeepBlack logo badge — yeşil glow, border-radius 18 */}
              <div
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  background: 'white',
                  border: '2px solid #22C55E',
                  borderRadius: 18,
                  padding: '8px 20px 8px 8px',
                  boxShadow: '0 0 0 4px rgba(34,197,94,0.10), 0 0 24px rgba(34,197,94,0.18)',
                  marginBottom: 22,
                }}
              >
                {/* DeepBlack logo */}
                <img
                  src="/assets/deep-black/db-logo.png"
                  alt="DeepBlack"
                  style={{ width: 42, height: 42, borderRadius: 10, flexShrink: 0, objectFit: 'contain' }}
                />
                <span style={{ fontWeight: 700, fontSize: 16, color: '#0D1117' }}>DeepBlack</span>
              </div>

              {/* DEEPBLACK küçük badge */}
              <div style={{ marginBottom: 28 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  background: '#F1F5F9', borderRadius: 18, padding: '5px 14px',
                }}>
                  <span style={{ width: 8, height: 8, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ fontSize: 11.5, fontWeight: 700, color: '#475569', letterSpacing: '0.08em' }}>DEEPBLACK</span>
                </span>
              </div>

              {/* Başlık */}
              <h1 style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.2rem)',
                fontWeight: 800, lineHeight: 1.18, color: '#0D1117',
                marginBottom: '1.4rem',
                fontFamily: 'cabin, sans-serif',
              }}>
                Yapay Zekâ ile<br />
                İş Süreçlerini<br />
                Dönüştürün
              </h1>

              {/* Açıklama */}
              <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.78, maxWidth: 456, marginBottom: '2.4rem' }}>
                Müşteri hizmetlerinden kurum içi bilgi yönetimine, kalite analizinden
                yapay zekâ ajanlarına kadar birçok alanda işletmelerin verimliliğini
                artıran çözümler sunar. Gelişmiş büyük dil modelleri (LLM), doğal dil
                işleme (NLP) ve yapay zekâ ajan teknolojilerini kullanarak kurumların
                dijital dönüşümünü hızlandırır.
              </p>

              {/* Buton */}
              <a
                href="https://deepblack.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: '#1B3A6B', color: 'white',
                  fontWeight: 700, fontSize: 15,
                  padding: '14px 28px', borderRadius: 12,
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(27,58,107,0.28)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1446b8'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1B3A6B'; }}
              >
                Web Sitesini Ziyaret Et
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Sağ: AI diyagram */}
            <motion.div
              initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <AIDiagram />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: KURUMSAL YAPAY ZEKA ── */}
      <section style={{ background: '#EEF2FF', padding: '60px 0 72px' }}>
        <div className="container-wide">

          {/* Badge — ortada */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'white', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '6px 16px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
              <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#475569', letterSpacing: '0.09em' }}>KURUMSAL YAPAY ZEKA</span>
            </div>
          </motion.div>

          {/* Gradient kart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              background: 'linear-gradient(110deg, #ffffff 0%, #f0faff 45%, #e8fff3 100%)',
              borderRadius: 24,
              padding: 'clamp(40px, 6vw, 64px) clamp(24px, 6vw, 80px)',
              textAlign: 'center',
              boxShadow: '0 2px 20px rgba(99,102,241,0.06)',
            }}
          >
            <h2 style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
              fontWeight: 800, color: '#0D1117', lineHeight: 1.25,
              marginBottom: 20, maxWidth: 680, margin: '0 auto 20px',
              fontFamily: 'cabin, sans-serif',
            }}>
              DeepBlack ile güvenli, ölçeklenebilir ve entegre yapay zekâ altyapısı
            </h2>
            <p style={{
              color: '#64748B', fontSize: 15, lineHeight: 1.75,
              maxWidth: 560, margin: '0 auto',
            }}>
              DeepBlack, kurumların yapay zekâyı yalnızca deneysel bir teknoloji olarak değil, iş
              süreçlerine değer katan güvenli ve sürdürülebilir bir altyapı olarak kullanmasını sağlar.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 3: NEDEN DEEPBLACK? ── */}
      <section style={{ background: '#ffffff', padding: '72px 0 80px' }}>
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ marginBottom: 18 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F1F5F9', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '5px 14px',
            }}>
              <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.08em' }}>NEDEN DEEPBLACK?</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800, color: '#0D1117', lineHeight: 1.2,
              marginBottom: 36,
              fontFamily: 'cabin, sans-serif',
            }}
          >
            Neden DeepBlack?
          </motion.h2>

          {/* Üst sıra: 3 kart */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 14 }}>
            {[
              {
                bg: '#ECFDF5', iconBg: 'white', iconColor: '#10B981',
                title: 'Kurumsal ihtiyaçlara özel yapay zekâ çözümleri',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2v4M11 16v4M2 11h4M16 11h4M4.93 4.93l2.83 2.83M14.24 14.24l2.83 2.83M4.93 17.07l2.83-2.83M14.24 7.76l2.83-2.83" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                bg: '#EEF2FF', iconBg: 'white', iconColor: '#6366F1',
                title: 'Güvenli ve ölçeklenebilir mimari',
                icon: (
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                    <rect x="3" y="10" width="14" height="11" rx="3" stroke="#6366F1" strokeWidth="2"/>
                    <path d="M7 10V7a3 3 0 016 0v3" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="10" cy="15.5" r="1.5" fill="#6366F1"/>
                  </svg>
                ),
              },
              {
                bg: '#FFF1F2', iconBg: 'white', iconColor: '#F43F5E',
                title: 'Mevcut sistemlerle kolay entegrasyon',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M14 2v4a2 2 0 002 2h4" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8H6a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-6" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M20 2l-6 6" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 2h6v6" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map(({ bg, iconBg, iconColor, title, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: bg, borderRadius: 20,
                  padding: '28px 24px 32px',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                {/* İkon kutusu */}
                <div style={{
                  width: 44, height: 44, background: iconBg, borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 36,
                  boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
                }}>
                  {icon}
                </div>
                {/* Başlık */}
                <p style={{ fontWeight: 700, fontSize: 15, color: '#0D1117', lineHeight: 1.45, marginBottom: 'auto', paddingBottom: 24 }}>
                  {title}
                </p>
                {/* Alt çizgi */}
                <div style={{ width: 32, height: 2.5, background: '#D1D5DB', borderRadius: 2 }} />
              </motion.div>
            ))}
          </div>

          {/* Alt sıra: 2 kart (geniş + dar) */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
            {[
              {
                bg: '#F5F3FF', iconColor: '#8B5CF6',
                title: 'Bulut veya kurum içi (On-Premise) kullanım seçenekleri',
                icon: (
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <path d="M18 17H6a5 5 0 010-10 7 7 0 0114 1.5A4.5 4.5 0 0118 17z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                bg: '#FFFBEB', iconColor: '#F59E0B',
                title: 'Verimlilik ve müşteri deneyimini artıran yapay zekâ ajanları',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="3" y="7" width="16" height="12" rx="3" stroke="#F59E0B" strokeWidth="2"/>
                    <circle cx="8" cy="12" r="1.5" fill="#F59E0B"/>
                    <circle cx="14" cy="12" r="1.5" fill="#F59E0B"/>
                    <path d="M8 19v2M14 19v2M7 7V5a4 4 0 018 0v2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 12h.01M13 12h.01" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map(({ bg, iconColor, title, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 + i * 0.08 }}
                style={{
                  background: bg, borderRadius: 20,
                  padding: '28px 24px 32px',
                  display: 'flex', flexDirection: 'column',
                }}
              >
                <div style={{
                  width: 44, height: 44, background: 'white', borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 36,
                  boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
                }}>
                  {icon}
                </div>
                <p style={{ fontWeight: 700, fontSize: 15, color: '#0D1117', lineHeight: 1.45, marginBottom: 'auto', paddingBottom: 24 }}>
                  {title}
                </p>
                <div style={{ width: 32, height: 2.5, background: '#D1D5DB', borderRadius: 2 }} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: YAPAY ZEKA KATMANI ── */}
      <section style={{ background: '#ffffff', padding: '72px 0 80px' }}>
        <div className="container-wide">

          {/* Badge — ortada */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: '#F1F5F9', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '5px 16px',
            }}>
              <span style={{ width: 7, height: 7, background: '#0CF25D', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.08em' }}>YAPAY ZEKA ODAKLI ALTYAPI</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }}
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
              fontWeight: 800, color: '#0D1117', lineHeight: 1.2,
              marginBottom: 40,
              fontFamily: 'Cabin, sans-serif',
            }}
          >
            Kurumsal süreçler için güçlü yapay zekâ katmanı
          </motion.h2>

          {/* Yatay ayırıcı */}
          <div style={{ height: 1, background: '#E2E8F0', marginBottom: 40 }} />

          {/* 4 sütun */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
          >
            {[
              { label: 'LLM',        sub: 'Büyük Dil Modeli Altyapısı'     },
              { label: 'NLP',        sub: 'Doğal Dil İşleme Yeteneği'      },
              { label: 'On-Premise', sub: 'Kurum İçi Kullanım Seçeneği'    },
              { label: 'AI Agents',  sub: 'Yapay Zekâ Ajan Teknolojileri'  },
            ].map(({ label, sub }, i) => (
              <div
                key={label}
                style={{
                  padding: '8px 32px 8px 0',
                  borderRight: i < 3 ? '1px solid #E2E8F0' : 'none',
                  marginRight: i < 3 ? 32 : 0,
                }}
              >
                <p style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#184A97',
                  lineHeight: 1.2,
                  marginBottom: 8,
                  fontFamily: 'Cabin, sans-serif',
                  textalign:'center',
                }}>
                  {label}
                </p>
                <p style={{ fontSize: 13, color: '#94A3B8', fontWeight: 400, lineHeight: 1.5 }}>
                  {sub}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── SECTION 5: ÇÖZÜMLER (STACKING) ── */}
      <section style={{ background: '#F0F4FF', padding: '72px 0 0' }}>
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ marginBottom: 18 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'white', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '5px 14px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}>
              <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.08em' }}>ÇÖZÜMLERİMİZ</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }}
            style={{
              fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)',
              fontWeight: 800, color: '#0D1117', lineHeight: 1.2,
              marginBottom: 14, maxWidth: 540,
              fontFamily: 'Cabin, sans-serif',
            }}
          >
            DeepBlack çözümleriyle iş süreçlerinizi akıllandırın
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ color: '#64748B', fontSize: 14.5, lineHeight: 1.7, maxWidth: 520, marginBottom: 48 }}
          >
            Müşteri hizmetlerinden kalite analizine, kurum içi bilgi yönetiminden güvenli yapay
            zekâ platformlarına kadar farklı ihtiyaçlara özel çözümler sunar.
          </motion.p>
        </div>

        {/* ── Stacking kartlar ── */}
        <div style={{ position: 'relative', paddingBottom: 80 }}>
          {[
            {
              id: 'cagri-asistan',
              img: '/assets/deep-black/db-cozumler-gorsel/support.png',
              reverse: false,
              title: 'Çağrı Merkezi Asistanı',
              desc: 'Yapay zekâ ajan teknolojileri ile müşteri hizmetleri süreçlerini otomatikleştirir. Doğal dil anlayabilen akıllı asistanlar sayesinde müşterilere hızlı, doğru ve kesintisiz destek sunar.',
              feats: ['Doğal Dil Anlama (NLP)', 'Çok Kanallı Destek', 'Gerçek Zamanlı Öneriler', 'Otomatik Bilet Yönetimi', 'Veri Odaklı Analiz'],
              benefits: ['İlk çağrıda çözüm oranını artırır.', 'Ortalama görüşme süresini azaltır.', 'Müşteri memnuniyetini yükseltir.', 'Operasyonel verimliliği artırır.'],
            },
            {
              id: 'kalite-analiz',
              img: '/assets/deep-black/db-cozumler-gorsel/analytics.png',
              reverse: true,
              title: 'Çağrı Merkezi Kalite Analizi',
              desc: 'Yapay zekâ destekli analiz teknolojisi ile müşteri temsilcileri ve müşteriler arasındaki tüm görüşmeleri otomatik olarak değerlendirir. Kalite standartlarının korunmasını ve operasyonel performansın artırılmasını sağlar.',
              feats: ['Tam Kapsamlı Etkileşim Analizi', 'Duygu ve Niyet Analizi', 'Uyumluluk Kontrolü', 'Performans Skorlaması', 'Akıllı Raporlama'],
              benefits: ['Manuel kalite kontrol süreçlerini azaltır.', 'Temsilci performansını objektif olarak ölçer.', 'Eğitim ihtiyaçlarını belirler.', 'Müşteri deneyimini iyileştirir.'],
            },
            {
              id: 'chatbot',
              img: '/assets/deep-black/db-cozumler-gorsel/chatbot.png',
              reverse: false,
              title: 'Kurumsal Yapay Zekâ Chatbot',
              desc: 'Kurumun kendi bilgi kaynaklarıyla çalışan, güvenli ve özelleştirilebilir yapay zekâ asistanıdır. Çalışanların ve müşterilerin doğru bilgiye saniyeler içinde ulaşmasını sağlar.',
              feats: ['Kurumsal Bilgi Entegrasyonu', 'Güvenlik ve Yetkilendirme', 'Doğal Dil İşleme (NLP)', 'Çoklu Platform Desteği', 'Kaynak Referanslı Yanıtlar'],
              benefits: ['Bilgiye erişim süresini kısaltır.', 'Çalışan verimliliğini artırır.', 'Müşteri taleplerine hızlı ve doğru yanıt verir.', 'Bilgi kirliliğini önler.'],
            },
            {
              id: 'onprem',
              img: '/assets/deep-black/db-cozumler-gorsel/onprem.png',
              reverse: true,
              title: 'Kurum İçi Yapay Zekâ Chat Platformu',
              desc: 'Tamamen kurumun kendi altyapısında çalışan, internete kapalı büyük dil modeli (LLM) platformudur. Hassas verilerin kurum dışına çıkmadan güvenli şekilde kullanılmasını sağlar.',
              feats: ['On-Premise Kurulum', 'Kurumsal Bilgi Entegrasyonu', 'Tam Güvenlik ve Denetim', 'Özelleştirilebilir LLM', 'Çoklu Platform Desteği', 'Gelişmiş Guardrails'],
              benefits: ['Verilerin kurum içinde kalmasını sağlar.', 'KVKK ve kurum politikalarına uyum sağlar.', 'Güvenli yapay zekâ kullanımını mümkün kılar.', 'Kritik iş süreçlerinde yüksek güvenlik sunar.'],
            },
          ].map(({ id, img, reverse, title, desc, feats, benefits }, i) => (
            <div
              key={id}
              style={{
                position: 'sticky',
                top: `calc(var(--nav-height) + ${20 + i * 24}px)`,
                zIndex: i + 1,
                padding: '0 clamp(1rem, 4vw, 3rem)',
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
                  overflow: 'hidden',
                  boxShadow: `0 ${8 + i * 4}px ${32 + i * 8}px rgba(0,0,0,${0.06 + i * 0.01})`,
                  display: 'flex',
                  flexDirection: reverse ? 'row-reverse' : 'row',
                  minHeight: 360,
                }}
              >
                {/* Görsel */}
                <div style={{ width: '42%', flexShrink: 0, overflow: 'hidden', minHeight: 340 }}>
                  <img
                    src={img}
                    alt={title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* İçerik */}
                <div style={{ flex: 1, padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                    fontWeight: 800, color: '#0D1117', lineHeight: 1.25,
                    marginBottom: 12,
                    fontFamily: 'Cabin, sans-serif',
                  }}>
                    {title}
                  </h3>
                  <p style={{ color: '#64748B', fontSize: 13.5, lineHeight: 1.7, marginBottom: 24 }}>
                    {desc}
                  </p>

                  {/* İki kolon: özellikler + faydalar */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px' }}>
                    {/* Özellikler */}
                    <div>
                      <p style={{ fontSize: 11.5, fontWeight: 700, color: '#1B3A6B', letterSpacing: '0.06em', marginBottom: 10 }}>
                        Öne Çıkan Özellikler
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {feats.map(f => (
                          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                              <path d="M2 7l3.5 3.5L12 3.5" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.5 }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Faydalar */}
                    <div>
                      <p style={{ fontSize: 11.5, fontWeight: 700, color: '#1B3A6B', letterSpacing: '0.06em', marginBottom: 10 }}>
                        Sağladığı Faydalar
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {benefits.map(b => (
                          <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                              <path d="M2 7l3.5 3.5L12 3.5" stroke="#1B3A6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span style={{ fontSize: 12.5, color: '#475569', lineHeight: 1.5 }}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 6: VERİDEN AKSİYONA (ANİMASYONLU STEPPER) ── */}
      <section style={{ background: '#EBF0FF', padding: '80px 0 72px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 clamp(1rem, 4vw, 2.5rem)' }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.45 }}
            style={{ textAlign: 'center', marginBottom: 18 }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: 'white', border: '1px solid #E2E8F0',
              borderRadius: 50, padding: '5px 14px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            }}>
              <span style={{ width: 7, height: 7, background: '#22C55E', borderRadius: '50%', display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B', letterSpacing: '0.08em' }}>AKILLI İŞ AKIŞI</span>
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }}
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1.7rem, 3.5vw, 2.5rem)',
              fontWeight: 800, color: '#0D1117', lineHeight: 1.2,
              marginBottom: 12,
              fontFamily: 'Space Grotesk, sans-serif',
            }}
          >
            Veriden Aksiyona Uzanan Yapay Zekâ Süreci
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ textAlign: 'center', color: '#64748B', fontSize: 14.5, lineHeight: 1.7, marginBottom: 36 }}
          >
            Kurumsal verinin güvenli biçimde işlenip anlamlı aksiyonlara dönüşmesini gösteren sade süreç akışı.
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
              <span style={{ width: 8, height: 8, background: '#0CF25D', borderRadius: '50%', display: 'inline-block' }} />
              <AnimatePresence mode="wait">
                <motion.span
                  key={aktifAdim}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {aktifAdim + 1}/5 — {aiAdimlar[aktifAdim].baslik}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Stepper */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 0, marginBottom: 28 }}>
            {aiAdimlar.map((adim, i) => {
              const tamamlandi = i < aktifAdim;
              const aktif = i === aktifAdim;
              const { Icon } = adim;

              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                  {/* Bağlantı çizgisi */}
                  {i < aiAdimlar.length - 1 && (
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
                        backgroundColor: tamamlandi ? '#1B3A6B' : aktif ? '#0CF25D' : '#CBD5E1',
                        scale: aktif ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      style={{
                        width: 56, height: 56,
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: aktif ? '0 0 0 4px rgba(34,197,94,0.2), 0 4px 16px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.08)',
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
                      fontSize: 11.5, fontWeight: 700, lineHeight: 1.35, marginBottom: 3,
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
            {aiAdimlar.map((_, i) => (
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

      {/* ── FOOTER CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1a2fa8 0%, #1853c8 40%, #1a6fd4 100%)',
        padding: '80px 0',
      }}>
        <div className="container-wide" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

          {/* Logo */}
          <motion.img
            src="/assets/deep-black/DeepBlack white background.png"
            alt="DeepBlack"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ height: 150, objectFit: 'cover', marginBottom: 0 }}
          />

          {/* Başlık */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.08 }}
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
              fontWeight: 800, color: 'white', lineHeight: 1.2,
              marginBottom: 18, maxWidth: 1200,
              fontFamily: 'Canin, sans-serif',
            }}
          >
            DeepBlack ile{' '}
            <span style={{ color: '#0CF25D' }}>kurumsal yapay zeka</span>{' '}
            dönüşümünüzü güvenle başlatın.
          </motion.h2>

          {/* Alt yazı */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
            style={{ color: 'rgb(255, 255, 255)', fontSize: 15, lineHeight: 1.7, maxWidth: 420, marginBottom: 36 }}
          >
            Güvenli, ölçeklenebilir ve iş süreçlerinize entegre edilebilir yapay zekâ
            çözümleriyle verimliliği artırın.
          </motion.p>

          {/* CTA butonu */}
          <motion.a
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            href="https://deepblack.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#0CF25D', color: '#0B1C3A',
              fontWeight: 700, fontSize: 15,
              padding: '14px 28px', borderRadius: 12,
              textDecoration: 'none', transition: 'background 0.2s, transform 0.15s',
              boxShadow: '0 4px 16px rgba(34,197,94,0.35)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#0CF25D'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#0CF25D'; e.currentTarget.style.color = '#0D1117'; }}
          >
            Web Sitesini Ziyaret Et <ArrowRight size={17} />
          </motion.a>

        </div>
      </section>

    </div>
  );
}
