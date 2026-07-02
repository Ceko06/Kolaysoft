import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ArrowRight, CheckCircle, FileText, ShieldCheck,
  Zap, Clock, BarChart2, Globe, Lock,
  LayoutGrid, RefreshCw, Cloud, Headphones,
  ClipboardList, Settings, Link2, FilePlus, Send, Archive,
  Calculator, Fingerprint, PenTool,
} from 'lucide-react';

const headerImg = '/assets/headers/cozumler-header.png';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Animated counter ── */
function Counter({ target, suffix = '+', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const frame = useRef(null);
  useEffect(() => {
    if (!inView) return;
    let t0 = null;
    const ease = (t) => 1 - Math.pow(1 - t, 4);
    const tick = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.round(ease(p) * target));
      if (p < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [inView, target, duration]);
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
}

/* ── e-Belge türleri (network diagram) ── */
const eDocNodes = [
  { label: 'e-Fatura',     angle: 90,   desc: 'GİB onaylı elektronik fatura düzenleme ve arşivleme' },
  { label: 'e-Arşiv',     angle: 30,   desc: 'e-Fatura kapsamı dışındaki faturaların elektronik arşivi' },
  { label: 'e-İrsaliye',  angle: 330,  desc: 'Mal sevkiyatlarına ait irsaliyelerin elektronik ortamda iletimi' },
  { label: 'e-Defter',    angle: 270,  desc: 'Yevmiye ve kebir defterlerinin elektronik tutulması' },
  { label: 'e-SMM',       angle: 225,  desc: 'Serbest meslek makbuzu elektronik olarak düzenlenebilir' },
  { label: 'e-Müstahsil', angle: 210,  desc: 'Çiftçilerden alınan ürünlere ait elektronik müstahsil makbuzu' },
  { label: 'e-Dekont',    angle: 150,  desc: 'Finansal işlemlere ait dekontların elektronik iletimi' },
  { label: 'e-Adisyon',   angle: 120,  desc: 'Otel ve restoran gibi işletmelerin elektronik adisyon belgesi' },
];

/* ── Faydalar ── */
const benefits = [
  { icon: ShieldCheck, color: '#184A97', bg: '#EEF2FF', title: 'GİB Lisanslı Güvenlik',      desc: 'Gelir İdaresi Başkanlığı lisanslı özel entegratör altyapısıyla tam uyum ve güvenlik.' },
  { icon: Zap,         color: '#16A34A', bg: '#F0FFF4', title: 'Hızlı Entegrasyon',           desc: 'Mevcut ERP ve muhasebe sistemlerinizle API tabanlı hızlı entegrasyon imkânı.' },
  { icon: Clock,       color: '#D97706', bg: '#FFFBEB', title: '7/24 Kesintisiz Erişim',      desc: 'Yüksek erişilebilirlik altyapısıyla belgelerinize her an, her yerden ulaşın.' },
  { icon: BarChart2,   color: '#7C3AED', bg: '#F5F3FF', title: 'Anlık Raporlama',             desc: 'Tüm e-belge süreçlerinizi merkezi dashboard üzerinden anlık olarak izleyin.' },
  { icon: Globe,       color: '#0891B2', bg: '#ECFEFF', title: 'Çoklu Şirket Yönetimi',      desc: 'Tek hesap üzerinden birden fazla şirketin e-belge süreçlerini yönetin.' },
  { icon: Lock,        color: '#DB2777', bg: '#FDF2F8', title: 'Yasal Uyumluluk',             desc: 'Türk Ticaret Kanunu ve vergi mevzuatına tam uyumlu, denetlenebilir kayıtlar.' },
];

/* ── e-Belge detay kartları ── */
const eDocDetails = [
  {
    title: 'e-Fatura',
    icon: '🧾',
    color: '#184A97',
    bg: '#EEF2FF',
    items: ['GİB e-Fatura portalı ile tam entegrasyon', 'Otomatik arşivleme ve sorgulama', 'XML ve PDF formatında çıktı', 'Toplu fatura gönderimi'],
  },
  {
    title: 'e-Arşiv Fatura',
    icon: '📂',
    color: '#0891B2',
    bg: '#ECFEFF',
    items: ['e-Fatura dışı faturaların dijital arşivi', 'Otomatik e-posta ile iletim', '10 yıl yasal saklama', 'İnteraktif PDF çıktısı'],
  },
  {
    title: 'e-İrsaliye',
    icon: '🚚',
    color: '#16A34A',
    bg: '#F0FFF4',
    items: ['Sevk belgelerinin elektronik düzenlenmesi', 'Gerçek zamanlı GİB bildirimi', 'Lojistik sistemleriyle entegrasyon', 'Barkod ve QR desteği'],
  },
  {
    title: 'e-Defter',
    icon: '📒',
    color: '#7C3AED',
    bg: '#F5F3FF',
    items: ['Yevmiye ve kebir defteri tutma', 'Otomatik beratlandırma', 'Mali mühür entegrasyonu', 'GİB e-Defter portali ile uyum'],
  },
];

/* ── Tüm e-Belge çözümleri ── */
const allEDocs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <rect x="4" y="2" width="12" height="16" rx="2" /><path d="M8 7h5M8 10h5M8 13h3" /><path d="M14 2v4h4" />
      </svg>
    ),
    title: 'e-Fatura',
    desc: 'GİB aracılı elektronik fatura oluşturma, gönderme ve alma işlemlerini güvenle yönetin.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <rect x="3" y="3" width="14" height="18" rx="2" /><path d="M7 8h6M7 11h6M7 14h4" /><path d="M17 3v18" opacity="0.3"/>
      </svg>
    ),
    title: 'e-Arşiv Fatura',
    desc: 'Faturalarınızı hızlıca oluşturun, müşterilerinize elektronik olarak paylaşabilir ve yasal saklama yükümlülüklerinizi kolayca yerine getirebilirsiniz.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <rect x="3" y="3" width="14" height="18" rx="2" /><path d="M7 8h6M7 11h6M7 14h4" />
        <circle cx="18" cy="18" r="4" fill="#EEF2FF" stroke="#184A97" strokeWidth="1.5"/>
        <path d="M16.5 18h3M18 16.5v3" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'İnteraktif e-Arşiv Fatura',
    desc: 'Faturalara özgü bir portal üzerinden görüntülenebilir, interaktif ve kolay paylaşımı sağlayan, müşteri memnuniyetini artırırken kağıt ve kargo maliyetlerini ortadan kaldırır.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <path d="M1 3h4l2.5 9h9L19 7H6" /><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" />
        <rect x="4" y="4" width="12" height="14" rx="1" opacity="0.15" fill="#184A97"/>
      </svg>
    ),
    title: 'e-İrsaliye',
    desc: 'Sevkiyat belgelerinizi elektronik ortamda oluşturabilir, irsaliyelerinizi hızlıca alıcıya iletebilir ve mevzuata tam uyum sağlayabilirsiniz.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <rect x="4" y="2" width="12" height="16" rx="2" /><path d="M8 6h4M8 9h4M8 12h2" />
        <path d="M14 16l2 4" opacity="0.5"/>
      </svg>
    ),
    title: 'e-SMM',
    desc: 'Serbest meslek sahipleri için e-SMM belgesi oluşturma ve gönderme altyapısı.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <path d="M12 3C8 3 5 6 5 10c0 5 7 11 7 11s7-6 7-11c0-4-3-7-7-7z" /><circle cx="12" cy="10" r="2.5"/>
      </svg>
    ),
    title: 'e-Müstahsil Makbuzu',
    desc: 'Çiftçi ve müstahsillere çalışan işletmeler için dijital makbuz altyapısı.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M7 13h2M7 16h4"/>
      </svg>
    ),
    title: 'Gider Pusulası',
    desc: 'Vergi mükellefi olmayan kişilerden alınan mal ve hizmetler için düzenlenen dijital gider pusulası.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4M14 15h4"/>
      </svg>
    ),
    title: 'e-Dekont',
    desc: 'Ödeme ve tahsilat işlemlerinizi elektronik ortamda kayıt altına alma, süreçlerinizi hızlandır ve belge yönetimini kolaylaştır.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <path d="M3 12l9-9 9 9"/><path d="M9 21V12h6v9"/><path d="M12 3v4"/>
      </svg>
    ),
    title: 'e-Döviz Alım Satım Belgesi',
    desc: 'Yetkili döviz müesseselerinin döviz alım satım işlemlerine ait GİB uyumlu elektronik belgeyle kayıt altına alma.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'e-Kıymetli Maden Alım Satım Belgesi',
    desc: 'Altın, gümüş ve diğer kıymetli madenlerin ticaretinde kullanılan işletmeler için elektronik ortama taşıyan çözümümüz, sektörün ihtiyaçlarına özel geliştirilmiştir.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/>
      </svg>
    ),
    title: 'e-Adisyon',
    desc: 'Restoran, kafe ve yeme-içme işletmeleri için geliştirilen e-Adisyon çözümü ile işletmenin tüm satışlarını kadın tüm süreçleri dijital ortamda kolayca yönetin.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: 'e-Sigorta Komisyon Gider Belgesi',
    desc: 'Sigorta acenteleri için yasal geçerliliği olan e-belge sistemimiz, acentelerin komisyon giderlerini elektronik ortamda belgeleyebilmesini sağlar.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M8 3v18M12 11h4M12 15h4"/>
      </svg>
    ),
    title: 'e-Defter',
    desc: 'Yasal defterlerinizi elektronik ortamda oluşturun, onaylayın ve yönetin. GİB standartlarına tam uyum sağlayabilirsiniz.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="#184A97" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        <rect x="8" y="8" width="8" height="8" rx="1" opacity="0.2" fill="#184A97"/>
      </svg>
    ),
    title: 'e-Defter Saklama',
    desc: 'e-Defter ve berat dosyalarınızı yasal saklama süresi boyunca güvenli veri merkezlerimizde koruyun, ihtiyaç duyduğunuzda her an hızlıca erişebilirsiniz.',
  },
];

/* ── SVG Network Diagram — dark theme, no background ── */
function NetworkDiagram() {
  // cx/cy merkez; outerR = uydu daire mesafesi; innerR = iç ring; nodeR = uydu yarıçap
  const cx = 280, cy = 260, outerR = 155, innerR = 82, nodeR = 30;

  const nodes = [
    { label: 'e-Fatura',     angle: 270 },
    { label: 'e-Arşiv',     angle: 315 },
    { label: 'e-İrsaliye',  angle:   0 },
    { label: 'e-Defter',    angle:  45 },
    { label: 'e-SMM',       angle:  90 },
    { label: 'e-Müstahsil', angle: 135 },
    { label: 'e-Dekont',    angle: 180 },
    { label: 'e-Adisyon',   angle: 225 },
  ];

  const toRad = (a) => (a * Math.PI) / 180;

  const nodePos = (angle) => ({
    x: cx + outerR * Math.cos(toRad(angle)),
    y: cy + outerR * Math.sin(toRad(angle)),
  });

  const innerEdge = (angle) => ({
    x: cx + innerR * Math.cos(toRad(angle)),
    y: cy + innerR * Math.sin(toRad(angle)),
  });

  /* Label konumu: node dışında, her yönde yeterli boşluk */
  const labelPos = (angle) => {
    const dist = outerR + nodeR + 16;
    return {
      x: cx + dist * Math.cos(toRad(angle)),
      y: cy + dist * Math.sin(toRad(angle)),
    };
  };

  /* Text anchor: sola/sağa/ortaya hizala */
  const anchor = (angle) => {
    const n = ((angle % 360) + 360) % 360;
    if (n > 300 || n < 60) return 'start';   // sağ taraf
    if (n > 120 && n < 240) return 'end';     // sol taraf
    return 'middle';                           // üst/alt
  };

  return (
    /* viewBox: sol/sağ label taşmasını engellemek için geniş tutuldu */
    <svg viewBox="60 30 440 460" className="w-full max-w-[520px] overflow-visible"
      xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
      <defs>
        <radialGradient id="centerGrad2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </radialGradient>
        <radialGradient id="centerGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
        <filter id="nodeGlow2" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#3b82f6" floodOpacity="0.35" />
        </filter>
        <filter id="centerGlow2f" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="0" stdDeviation="18" floodColor="#3b82f6" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* Glow halo arkasında merkez */}
      <circle cx={cx} cy={cy} r="90" fill="url(#centerGlow2)" />

      {/* Outer dashed ring (uyduların dışı) */}
      <circle cx={cx} cy={cy} r={outerR + nodeR + 8}
        fill="none" stroke="rgba(100,116,139,0.2)" strokeWidth="1.2" strokeDasharray="5 6" />

      {/* Orta dashed ring (uyduların tam üzerinde) */}
      <circle cx={cx} cy={cy} r={outerR}
        fill="none" stroke="rgba(100,116,139,0.15)" strokeWidth="1" strokeDasharray="4 7" />

      {/* İç dashed ring */}
      <circle cx={cx} cy={cy} r={innerR}
        fill="none" stroke="rgba(100,116,139,0.2)" strokeWidth="1" strokeDasharray="3 6" />

      {/* Haç çizgiler */}
      <line x1={cx} y1={cy - outerR - 10} x2={cx} y2={cy + outerR + 10}
        stroke="rgba(100,116,139,0.1)" strokeWidth="1" />
      <line x1={cx - outerR - 10} y1={cy} x2={cx + outerR + 10} y2={cy}
        stroke="rgba(100,116,139,0.1)" strokeWidth="1" />

      {/* İç ring'den uyduya kesik çizgiler */}
      {nodes.map(({ angle }, i) => {
        const { x: ix, y: iy } = innerEdge(angle);
        const { x: nx, y: ny } = nodePos(angle);
        return (
          <line key={`l${i}`}
            x1={ix} y1={iy} x2={nx} y2={ny}
            stroke="rgba(100,116,139,0.3)" strokeWidth="1.2" strokeDasharray="4 4" />
        );
      })}

      {/* Uydu node'lar */}
      {nodes.map(({ label, angle }, i) => {
        const { x: nx, y: ny } = nodePos(angle);
        const lp = labelPos(angle);
        return (
          <g key={`n${i}`} filter="url(#nodeGlow2)">
            {/* Beyaz daire */}
            <circle cx={nx} cy={ny} r={nodeR} fill="white" />
            {/* Belge ikonu */}
            <rect x={nx - 9} y={ny - 11} width="15" height="18" rx="2.5"
              fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.8" />
            <path d={`M ${nx + 2} ${ny - 11} L ${nx + 6} ${ny - 7} L ${nx + 2} ${ny - 7} Z`}
              fill="#93c5fd" />
            <rect x={nx - 7} y={ny - 5}   width="11" height="1.8" rx="0.9" fill="#3b82f6" />
            <rect x={nx - 7} y={ny - 1.5} width="9"  height="1.8" rx="0.9" fill="#3b82f6" opacity="0.7" />
            <rect x={nx - 7} y={ny + 2}   width="7"  height="1.8" rx="0.9" fill="#3b82f6" opacity="0.5" />
            {/* Etiket */}
            <text x={lp.x} y={lp.y + 4}
              textAnchor={anchor(angle)}
              fontSize="10" fontFamily="Cabin, sans-serif" fontWeight="600"
              fill="#64748B">
              {label}
            </text>
          </g>
        );
      })}

      {/* Merkez node */}
      <g filter="url(#centerGlow2f)">
        <circle cx={cx} cy={cy} r="52" fill="url(#centerGrad2)" />
        <circle cx={cx} cy={cy} r="57" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <text x={cx} y={cy - 7} textAnchor="middle"
          fontSize="12" fontFamily="Cabin, sans-serif" fontWeight="700"
          fill="white" letterSpacing="0.8">KOLAYSOFT</text>
        <text x={cx} y={cy + 10} textAnchor="middle"
          fontSize="9.5" fontFamily="Cabin, sans-serif" fontWeight="500"
          fill="#4ade80">e-Dönüşüm</text>
      </g>
    </svg>
  );
}

export default function EDonusum() {
  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img src={headerImg} alt="e-Dönüşüm" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white/80">Çözümler</span>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">e-Dönüşüm</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            e-Dönüşüm
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl">
            GİB Lisanslı Özel Entegratör ile Dijital Dönüşümün En Kolay Hali
          </motion.p>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO — Görseldeki birebir tasarım
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-wide grid md:grid-cols-2 gap-16 items-center">

          {/* Sol — metin */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* GİB Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D] animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                GİB LİSANSLI ÖZEL ENTEGRATÖR
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="text-slate-900">e-Dönüşümün</span>
              <br />
              <span className="text-[#184A97]">En Kolay Hali</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
              Gelir İdaresi Başkanlığı lisanslı özel entegratör altyapısıyla işletmenizin tüm e-belge
              süreçlerini tek platformdan güvenle yönetin. e-Fatura'dan e-Defter'e, e-İrsaliye'den
              sektörel e-belgelere kadar tüm süreçler tek merkezde yönetilsin.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="https://kolaybasvuru.kolaysoft.com.tr/kolaybasvuru-home"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white font-semibold text-sm transition-all shadow-lg shadow-[#184A97]/20">
                Hemen Başvur <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://portal.kolaysoft.com.tr/accounting/login"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-[#0CF25D] hover:text-[#184A97] transition-all">
                e-dönüşüm Portal
              </a>
            </div>
          </motion.div>

          {/* Sağ — Network diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex justify-center items-center rounded-3xl overflow-hidden"
          >
            <NetworkDiagram />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS — Güvenin Arkasındaki Rakamlar
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CF25D]" /> E-DÖNÜŞÜM RAKAMLARLA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Güvenin Arkasındaki Rakamlar
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-slate-100">
            {[
              { target: 100,  suffix: '.000+',    label: 'Aktif Kullanıcı' },
              { target: 500,  suffix: ' Milyon+', label: 'İşlenen Elektronik Belge' },
              { target: 81,   suffix: ' İl',      label: 'Türkiye Genelinde Hizmet' },
              { target: 4,    suffix: ' Yıl',     label: 'Bilişim 500 Birinciliği' },
            ].map(({ target, suffix, label }, i) => (
              <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1}
                viewport={{ once: true }}
                className="flex flex-col items-start px-8 py-4 first:pl-0">
                <span className="text-3xl md:text-4xl font-extrabold text-[#184A97] mb-2 leading-none">
                  <Counter target={target} suffix={suffix} />
                </span>
                <p className="text-slate-500 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4'lü ÖZELLİK KARTLARI — rakamların altı
      ══════════════════════════════════════════ */}
      <section className="py-16" style={{ background: 'rgba(247, 249, 255, 1)' }}>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: ShieldCheck, iconColor: '#184A97', iconBg: '#EEF2FF',
                title: 'GİB Lisanslı Özel Entegratör',
                desc: 'Gelir İdaresi Başkanlığı onaylı altyapıyla tam mevzuat uyumu.',
              },
              {
                icon: Zap, iconColor: '#0D9488', iconBg: '#F0FDFA',
                title: 'Hızlı ve Kesintisiz Altyapı',
                desc: 'Yüksek erişilebilirlik ve 7/24 teknik destek altyapısı.',
              },
              {
                icon: RefreshCw, iconColor: '#7C3AED', iconBg: '#F5F3FF',
                title: 'Otomatik Mevzuat Güncellemeleri',
                desc: 'GİB değişikliklerine anında uyum, sıfır manuel müdahale.',
              },
              {
                icon: LayoutGrid, iconColor: '#D97706', iconBg: '#FFFBEB',
                title: 'Tek Platformdan Yönetim',
                desc: 'Tüm e-belge türleri tek arayüzden, merkezi kontrol paneli.',
              },
            ].map(({ icon: Icon, iconColor, iconBg, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-glow-green transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: iconBg }}>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          e-BELGE ÇÖZÜMLERİ — Görseldeki tasarım
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">

          {/* Başlık — sol büyük + sağ açıklama */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-14">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-6">
                E-BELGE ÇÖZÜMLERİ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-slate-900">İşletmenizin Tüm<br />e-Belge</span>
                <br />
                <span className="text-[#184A97]">Süreçleri Tek<br />Platformda</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={1}
              viewport={{ once: true }}
              className="text-slate-500 text-base leading-relaxed md:pt-16 max-w-md">
              Her işletmenin ihtiyacı farklıdır. Bu nedenle Kolaysoft, yalnızca bir e-Fatura çözümü
              sunmaz; tüm e-Dönüşüm süreçlerini uçtan uca yönetebileceğiniz kapsamlı bir altyapı sağlar.
            </motion.p>
          </div>

          {/* 4'lü kart grid — ilk 12 belge */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {allEDocs.slice(0, 12).map(({ icon, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.07}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-100 transition-all duration-300 group cursor-pointer"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#0CF25D';
                  e.currentTarget.style.boxShadow = '0 0 0 1px #0CF25D, 0 0 20px rgba(12,242,93,0.2), 0 0 40px rgba(12,242,93,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  const iconWrap = e.currentTarget.querySelector('.icon-wrap');
                  if (iconWrap) {
                    iconWrap.style.background = '#0CF25D';
                    iconWrap.style.filter = 'none';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = '';
                  const iconWrap = e.currentTarget.querySelector('.icon-wrap');
                  if (iconWrap) {
                    iconWrap.style.background = '';
                    iconWrap.style.filter = '';
                  }
                }}>
                <div className="icon-wrap w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5 transition-all duration-300">
                  {icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Son satır: 2 kart + CTA kutusu */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allEDocs.slice(12).map(({ icon, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.07}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 border border-slate-100 transition-all duration-300 group cursor-pointer"
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#0CF25D';
                  e.currentTarget.style.boxShadow = '0 0 0 1px #0CF25D, 0 0 20px rgba(12,242,93,0.2), 0 0 40px rgba(12,242,93,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  const iconWrap = e.currentTarget.querySelector('.icon-wrap');
                  if (iconWrap) {
                    iconWrap.style.background = '#0CF25D';
                    iconWrap.style.filter = 'none';
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.transform = '';
                  const iconWrap = e.currentTarget.querySelector('.icon-wrap');
                  if (iconWrap) {
                    iconWrap.style.background = '';
                    iconWrap.style.filter = '';
                  }
                }}>
                <div className="icon-wrap w-11 h-11 rounded-xl bg-[#EEF2FF] flex items-center justify-center mb-5 transition-all duration-300">
                  {icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}

            {/* CTA kutusu — 2. görseldeki tasarım */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.3}
              viewport={{ once: true }}
              className="lg:col-span-2 rounded-2xl overflow-hidden flex flex-col">
              {/* Üst kısım — açık arka plan, büyük başlık */}
              <div className="border border-slate-100 rounded-2xl p-6 mb-3">
                <p className="text-[#93a8c8] font-bold text-xl leading-snug">
                  Tek platform, tam<br />
                  kontrol, kesintisiz<br />
                  e-Dönüşüm deneyimi<span className="text-slate-400">.</span>
                </p>
              </div>
              {/* Alt kısım — koyu mavi kart */}
              <div className="bg-[#184A97] rounded-2xl p-5 flex items-center justify-between gap-4 flex-1">
                <p className="text-white/90 text-sm leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0CF25D] flex-shrink-0" />
                  e-Belge yönetimine tek platform üzerinden başlayın.
                </p>
                <a href="https://kolaybasvuru.kolaysoft.com.tr/kolaybasvuru-home"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0CF25D] hover:bg-[#0adb52] text-slate-900 font-bold text-sm transition-colors whitespace-nowrap">
                  Hemen Başvur <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAYDALAR — Bento grid
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Avantajlar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Neden <span className="text-[#184A97]">Kolaysoft e-Dönüşüm?</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={1}
              viewport={{ once: true }}
              className="text-slate-500 text-sm leading-relaxed md:pt-10">
              GİB lisanslı özel entegratör olarak işletmenizin tüm e-belge gereksinimlerini güvenli,
              hızlı ve uygun maliyetle karşılıyoruz.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, color, bg, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.5}
                viewport={{ once: true }}
                className="rounded-2xl p-6 border border-slate-100/60 hover:shadow-glow-green transition-all"
                style={{ background: bg }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}18` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EK ÇÖZÜMLER — 3'lü kart
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container-wide">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-12">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-white text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
              EK ÇÖZÜMLER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-slate-900">İşletmenize Uygun </span>
              <span className="text-[#184A97]">Ek Çözümler</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Calculator, iconColor: '#184A97', iconBg: '#EEF2FF',
                title: 'Ön Muhasebe',
                desc: 'İşletmenizin finansal süreçlerini tek platformdan yönetin. Fatura, tahsilat ve ödeme takibini, gider yönetimini ve raporlamayı merkezi bir yapıda dijitalleştirin.',
              },
              {
                icon: Fingerprint, iconColor: '#0D9488', iconBg: '#F0FDFA',
                title: 'Mali Mühür',
                desc: 'Elektronik belge süreçlerinin güvenliğini sağlayın. Yasal geçerliliği tam olarak desteklenen mali mühür altyapısıyla belgelerinizi imzalayın ve güvence altına alın.',
              },
              {
                icon: PenTool, iconColor: '#7C3AED', iconBg: '#F5F3FF',
                title: 'e-İmza',
                desc: 'Belgelerinizi dijital ortamda yasal geçerlilikle imzalayın. Nitelikli elektronik imza altyapısıyla kağıtsız iş süreçlerine hızla geçiş yapın.',
              },
            ].map(({ icon: Icon, iconColor, iconBg, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-glow-green transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-7"
                  style={{ background: iconBg }}>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALTI ADIMDA e-DÖNÜŞÜM — yatay timeline
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">

          {/* Başlık */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
              NASIL ÇALIŞIR?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-slate-900">Altı Adımda </span>
              <span className="text-[#184A97]">e-Dönüşüm</span>
            </h2>
            <p className="text-slate-500 text-base max-w-md mx-auto">
              Başvurudan arşivlemeye, tüm süreci sorunsuz yönetiyoruz.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Yatay bağlantı çizgisi */}
            <div className="hidden lg:block absolute top-[28px] left-[calc(100%/12)] right-[calc(100%/12)] h-[2px] bg-[#184A97]/15 z-0" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-4">
              {[
                { num: '01', icon: ClipboardList, title: 'Başvuru',         desc: 'Hızlı online başvuru ile süreci başlatın.' },
                { num: '02', icon: Settings,      title: 'Kurulum',         desc: 'Teknik altyapı ve hesap yapılandırması.' },
                { num: '03', icon: Link2,         title: 'Entegrasyon',     desc: 'Mevcut ERP ve muhasebe sisteminize bağlanın.' },
                { num: '04', icon: FilePlus,      title: 'Belge Oluşturma', desc: 'e-Belge oluşturma ve düzenleme işlemleri.' },
                { num: '05', icon: Send,          title: 'Gönderim',        desc: 'GİB onaylı güvenli ve anlık gönderim.' },
                { num: '06', icon: Archive,       title: 'Arşivleme',       desc: '10 yıllık yasal dijital arşiv güvencesi.' },
              ].map(({ num, icon: Icon, title, desc }, i) => (
                <motion.div key={num}
                  variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center text-center z-10">
                  {/* Daire ikon */}
                  <div className="w-14 h-14 rounded-full bg-[#184A97] flex items-center justify-center mb-4 shadow-lg shadow-[#184A97]/25 ring-4 ring-white">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Adım no */}
                  <span className="text-[#184A97] text-[10px] font-bold uppercase tracking-widest mb-1">
                    ADIM {num}
                  </span>
                  {/* Başlık */}
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                  {/* Açıklama */}
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[130px]">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEDEN e-DÖNÜŞÜM — 3x2 kart grid
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">

          {/* Başlık satırı */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
                AVANTAJLARIMIZ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-slate-900">Neden </span>
                <span className="text-[#184A97]">e-dönüşüm?</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={1}
              viewport={{ once: true }}
              className="text-slate-500 text-base leading-relaxed md:pt-14">
              e-Dönüşüm süreçlerinizde doğru teknolojiyi, uzman desteği ve güvenli altyapıyı bir arada sunuyoruz.
            </motion.p>
          </div>

          {/* 3x2 Kart grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: LayoutGrid, iconColor: '#184A97', iconBg: '#EEF2FF',
                title: 'Tek Platform',
                desc: 'e-Fatura\'dan e-Defter\'e tüm e-belge türleri tek arayüzden yönetilir. Birden fazla yazılıma gerek kalmaz.',
              },
              {
                icon: RefreshCw, iconColor: '#0D9488', iconBg: '#F0FDFA',
                title: 'Otomatik Güncelleme',
                desc: 'GİB mevzuat değişiklikleri otomatik uygulanır. Güncelleme takibi ve manuel müdahale gerektirmez.',
              },
              {
                icon: ShieldCheck, iconColor: '#7C3AED', iconBg: '#F5F3FF',
                title: 'Güvenli Altyapı',
                desc: 'Uçtan uca şifreleme, iso sertifikalı veri merkezi ve tam GİB lisanslı entegratör güvencesiyle çalışır.',
              },
              {
                icon: Cloud, iconColor: '#D97706', iconBg: '#FFFBEB',
                title: 'Bulut Teknolojisi',
                desc: 'Kurulum gerektirmeyen SaaS mimarisi. İstediğiniz cihazdan, istediğiniz yerden erişim.',
              },
              {
                icon: Headphones, iconColor: '#DB2777', iconBg: '#FDF2F8',
                title: 'Uzman Destek',
                desc: 'e-Dönüşüm alanında uzman teknik ekip desteği. Kurulum, entegrasyon ve operasyonda yanınızdayız.',
              },
              {
                icon: BarChart2, iconColor: '#16A34A', iconBg: '#F0FFF4',
                title: 'Ölçeklenebilir Yapı',
                desc: 'Küçük işletmeden büyük kuruma esnek altyapı. İşletmeniz büyüdükçe sistem de büyür.',
              },
            ].map(({ icon: Icon, iconColor, iconBg, title, desc }, i) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.08}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-glow-green transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: iconBg }}>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ALT CTA BANNER
      ══════════════════════════════════════════ */}
      <section id="basvuru" className="py-24 bg-[#184A97] relative overflow-hidden">
        {/* Arka plan dekorasyon */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full bg-white/5" />
          <div className="absolute bottom-[-60px] left-[-60px] w-[240px] h-[240px] rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03]" />
        </div>

        <div className="container-wide relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0CF25D]" />
            <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
              GİB LİSANSLI ÖZEL ENTEGRATÖR
            </span>
          </motion.div>

          {/* Başlık */}
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">e-Dönüşüm Süreçlerinizi</span>
            <br />
            <span className="text-[#0CF25D]">Bugün Dijitalleştirin</span>
          </motion.h2>

          {/* Alt yazı */}
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={0.2}
            viewport={{ once: true }}
            className="text-white/75 text-base max-w-md mb-10 leading-relaxed">
            Mevzuata uyumlu, hızlı ve güvenli e-belge yönetimine tek platform üzerinden başlayın.
          </motion.p>

          {/* Buton */}
          <motion.a href="/iletisim"
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.3}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0CF25D] hover:bg-[#0adb52] text-slate-900 font-bold text-base transition-all shadow-xl shadow-black/20 mb-10">
            Hemen Başvur <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Alt özellik listesi */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.4}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['GİB Lisanslı', 'Mevzuat Uyumlu', '7/24 Destek', 'Güvenli Altyapı'].map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-white/65 text-sm">
                {i > 0 && <span className="hidden sm:inline text-white/30">·</span>}
                <span className="w-1.5 h-1.5 rounded-full bg-[#0CF25D] sm:hidden" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
