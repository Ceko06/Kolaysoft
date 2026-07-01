import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ChevronLeft, ArrowRight, Play,
  CreditCard, FileText, BarChart2, Smartphone,
  Shield, Clock, Zap, Users, CheckCircle, Printer, Receipt,
  ExternalLink,
} from 'lucide-react';

const headerImg = '/assets/headers/cozumler-header.png';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Animated counter ── */
function Counter({ target, suffix = '+', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const frame = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let t0 = null;
          const ease = (t) => 1 - Math.pow(1 - t, 4);
          const tick = (ts) => {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / duration, 1);
            setCount(Math.round(ease(p) * target));
            if (p < 1) frame.current = requestAnimationFrame(tick);
          };
          frame.current = requestAnimationFrame(tick);
        }
      },
      { rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame.current); };
  }, [target, duration]);

  return <span ref={ref} className="tabular-nums">{prefix}{count}{suffix}</span>;
}

const cozumler = [
  {
    icon: CreditCard,
    title: 'Ödeme Çözümleri',
    desc: 'Eczanelere özel POS ve temassız ödeme altyapısıyla hızlı ve güvenli tahsilat.',
  },
  {
    icon: FileText,
    title: 'e-Faturalama',
    desc: 'SGK ve özel sigorta faturalarını tek ekrandan, mevzuata uygun şekilde yönetin.',
  },
  {
    icon: BarChart2,
    title: 'Raporlama & Analiz',
    desc: 'Satış, stok ve finansal verilerinizi anlık dashboard ve raporlarla izleyin.',
  },
  {
    icon: Smartphone,
    title: 'Mobil Takip',
    desc: 'Eczanenizin tüm süreçlerini mobil uygulama üzerinden her an takip edin.',
  },
];

const nedenCards = [
  { icon: Shield, iconColor: '#184A97', iconBg: '#E2ECFF', bg: '#F4F8FF', span: 4,
    title: 'Güvenli ve Mevzuata Uygun', desc: 'Sağlık mevzuatı ve KVKK gereksinimlerini karşılayan güvenli altyapı.' },
  { icon: Zap, iconColor: '#16A34A', iconBg: '#DCFCE7', bg: '#F0FFF5', span: 3,
    title: 'Hızlı Entegrasyon', desc: 'Mevcut eczane yazılımlarınızla API üzerinden hızla entegre olur.' },
  { icon: Clock, iconColor: '#7C3AED', iconBg: '#EDE9FE', bg: '#F5F3FF', span: 3,
    title: '7/24 Erişilebilirlik', desc: 'Bulut tabanlı altyapıyla kesintisiz hizmet ve her yerden erişim.' },
  { icon: Users, iconColor: '#D97706', iconBg: '#FEF3C7', bg: '#FFFBF0', span: 3,
    title: 'Uzman Destek Ekibi', desc: 'Eczacılık sektörüne hakim uzman ekibimizle her adımda yanınızdayız.' },
  { icon: BarChart2, iconColor: '#DB2777', iconBg: '#FCE7F3', bg: '#FFF0F6', span: 3,
    title: 'Kapsamlı Raporlama', desc: 'Anlık veri analiziyle işletmenizin nabzını sürekli tutun.' },
  { icon: CheckCircle, iconColor: '#0891B2', iconBg: '#CFFAFE', bg: '#F8FAFF', span: 4,
    title: 'Tek Platformda Tüm Çözümler', desc: 'Ödeme, faturalama, raporlama ve mobil takibi tek ekosistemde birleştirin.' },
];

/* ── Ürünler verisi ── */
const urunler = [
  {
    id: 'eczacipos',
    imageLeft: true,
    bgImage: '/assets/eczane-teknolojileri/eczacipos.png',
    productImage: '/assets/eczane-teknolojileri/eczacipos.png',
    badgeIcon: Printer,
    badgeLabel: 'EczacıPOS',
    tag: 'EczacıPOS',
    title: 'EczacıPOS ile Yazarkasa Entegrasyon Sorunsunuz Tarihe Karışıyor',
    desc: 'Eczaneler için geliştirilen yeni nesil ödeme ve satış çözümüyle tahsilat ve elektronik belge süreçlerinizi tek cihaz üzerinden yönetin.',
    features: [
      'VUK 507 uyumlu altyapı',
      'Hızlı satış ve tahsilat süreçleri',
      'Kredi kartı, banka kartı ve temassız ödeme desteği',
      'QR ile ödeme alma',
      'Elektronik belge entegrasyonu',
      'Günlük ve dönemsel raporlama',
      'Güvenli ödeme altyapısı',
    ],
    buttons: [
      { label: 'Hemen Başvur', href: 'https://www.eczacikartfatura.com/eczacikart-home', primary: true },
      { label: 'EczacıPOS Portal', href: 'https://portal.kolaysoft.com.tr/eczacipos/login', primary: false },
    ],
    mobileBadge: null,
  },
  {
    id: 'eczacikart-fatura',
    imageLeft: false,
    bgImage: '/assets/eczane-teknolojileri/eczacikart.png',
    productImage: '/assets/eczane-teknolojileri/eczacikart.png',
    badgeIcon: Receipt,
    badgeLabel: 'Eczacıkart Fatura',
    tag: 'Eczacıkart Fatura',
    title: 'Eczacıkart Fatura ile Faturalama Süreçlerinizi Kolaylaştırın',
    desc: 'Eczanelerin faturalama süreçlerini mevzuata uygun, hızlı ve dijital şekilde yönetmesini sağlayan e-Dönüşüm çözümü.',
    features: [
      'e-Fatura ve e-Arşiv işlemleri',
      'Tek platformdan kolay fatura yönetimi',
      'GİB mevzuatına uyumlu yapı',
      'Güvenli saklama ve arşivleme',
      'SGK, Göç İdaresi, ek fatura, satış faturası ve depoya iade süreçleri',
      'Tek tıkla fatura oluşturma kolaylığı',
    ],
    buttons: [
      { label: 'Hemen Başvur', href: 'https://www.eczacikartfatura.com/eczacikart-home', primary: true },
      { label: 'Eczacıkart Fatura Portal', href: 'https://portal.eczacikartfatura.com/accounting/login', primary: false },
    ],
    mobileBadge: null,
  },
  {
    id: 'ally',
    imageLeft: true,
    bgImage:'/assets/eczane-teknolojileri/ally_urun.png',
    productImage:'/assets/eczane-teknolojileri/ally_urun.png',
    badgeIcon: Smartphone,
    badgeLabel: 'ALLY',
    tag: 'ALLY',
    title: 'ALLY ile Eczanenizin Ekonomisi Her An Yanınızda',
    desc: 'ALLY, eczanenizin fatura ve satış verilerini mobil cihazınızdan takip etmenizi sağlayan, eczacılar için özel olarak geliştirilen mobil uygulamadır.',
    features: [
      'Mobil kullanım',
      'SGK, GÖÇ ve Kamu faturalarını takip etme',
      'Gelen faturaları tek ekrandan görüntüleme',
      'EczacıPOS satış verilerini takip etme',
      'Günlük, haftalık ve aylık ciro takibi',
      'EczacıKart Fatura ve EczacıPOS entegrasyonu',
    ],
    buttons: 'app-store',
    mobileBadge: 'MOBİL',
  },
];

/* ─────────────────────────────────────────────
   Kart İçeriği (saf JSX, animasyon dışarıda)
───────────────────────────────────────────── */
function CardContent({ urun }) {
  const { imageLeft, bgImage, badgeIcon: BadgeIcon, badgeLabel, tag, title, desc, features, buttons, mobileBadge } = urun;

  const ImageCol = (
    <div className="relative md:w-[48%] min-h-[420px] flex-shrink-0 overflow-hidden">
      <img src={bgImage} alt={badgeLabel} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold shadow-sm">
          <BadgeIcon className="w-3.5 h-3.5 text-[#184A97]" /> {badgeLabel}
        </span>
      </div>
      {mobileBadge && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 rounded-full bg-[#22C55E] text-white text-xs font-bold shadow">
            {mobileBadge}
          </span>
        </div>
      )}
    </div>
  );

  const ContentCol = (
    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center bg-white">
      <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 text-slate-600 text-xs font-semibold mb-5 w-fit">
        {tag}
      </span>
      <h3 className="text-xl md:text-2xl font-bold text-[#184A97] leading-snug mb-4">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
      <ul className="space-y-2.5 mb-8">
        {features.map(f => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
            <CheckCircle className="w-4 h-4 text-[#184A97] flex-shrink-0 mt-0.5" /> {f}
          </li>
        ))}
      </ul>
      {buttons === 'app-store' ? (
        <div className="flex flex-wrap gap-3">
          <a href="https://play.google.com/store/apps/details?id=com.kolaysoft.ally&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-slate-900 rounded-xl text-white hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.31.17.67.22 1.04.13l11.61-6.69-2.6-2.6-10.05 9.16zm-1.12-19.74c-.06.21-.06.45-.06.69v14.56c0 .25 0 .48.07.7L13 11.01 2.06 4.02zM20.23 9.58l-2.72-1.57-3.17 2.89 3.17 2.89 2.74-1.58c.78-.45.78-1.18-.02-1.63zM4.22.11L15.83 6.8l-2.6 2.6L1.22.24C1.6.14 1.96.19 2.27.36L4.22.11z"/></svg>
            <span className="text-left leading-tight">
              <span className="block text-[9px] text-white/70 uppercase tracking-wide">GET IT ON</span>
              <span className="block text-sm font-semibold">Google Play</span>
            </span>
          </a>
          <a href="https://apps.apple.com/tr/app/ally/id6654928295?l=tr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-slate-900 rounded-xl text-white hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <span className="text-left leading-tight">
              <span className="block text-[9px] text-white/70 uppercase tracking-wide">Download on the</span>
              <span className="block text-sm font-semibold">App Store</span>
            </span>
          </a>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {buttons.map(btn => btn.primary ? (
            <a key={btn.label} href={btn.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white text-sm font-semibold transition-colors">
              {btn.label} <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <a key={btn.label} href={btn.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:border-[#184A97] hover:text-[#184A97] transition-colors">
              {btn.label} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {urun.imageLeft ? <>{ImageCol}{ContentCol}</> : <>{ContentCol}{ImageCol}</>}
    </>
  );
}

/* ─────────────────────────────────────────────
   Ürün Kartı – SuccessStories ile aynı sticky pattern
   top: 96 + index*12  →  kademeli kart yığma efekti
───────────────────────────────────────────── */
function ProductCard({ urun, index }) {
  const STICKY_TOP = 96 + index * 12;   /* navbar(80) + boşluk + kademeli offset */

  return (
    <div
      className="sticky"
      style={{ top: `${STICKY_TOP}px`, zIndex: index + 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-3xl shadow-md border border-slate-100 flex flex-col md:flex-row mb-6"
      >
        <CardContent urun={urun} />
      </motion.div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   Section Wrapper
───────────────────────────────────────────── */
function ProductsSection() {
  return (
    <section className="py-20 bg-[#F8FAFF]">
      <div className="container-wide">

        {/* Başlık */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-semibold uppercase tracking-widest mb-5">
            ÜRÜNLERİMİZ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#184A97] mb-3">
            Eczane Teknolojileri Ürünlerimiz
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Eczanenizin satış, ödeme, fatura ve finansal takip süreçleri için
            geliştirilen dijital çözümler.
          </p>
        </motion.div>

        {/* Kartlar – sticky yığma */}
        <div>
          {urunler.map((urun, i) => (
            <ProductCard key={urun.id} urun={urun} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Başarı Hikayeleri verisi ── */
const hikayeler = [
  {
    thumb: '/assets/eczane-teknolojileri/seyfi-ozdemir.jpg',
    video: null,
    link: 'https://www.instagram.com/p/DWyfPvJjFV9/',
    duration: '2:14',
    avatar: 'SE',
    company: 'Şırnak Eczacı Odası',
    tags: ['EczacıPOS', 'Ödeme Çözümleri'],
    title: "Şırnak Eczacı Odası Başkanı Sayın Ecz. Seyfi Özdemir’in deneyimleriyle EczacıPOS. ",
    desc: "Uzun zamandır kullanıyorum bölgemizde EczacıPOS'u ilk kullananlardanım.İlk kullanmaya başladığımda hastalarım cihazın hızına şaşırmıştı.Nöbetlerimiz yoğun geçiyor fakat bir EczacıPOS tüm nöbete yetiyor. ",
    author: 'Seyfi Özdemir',
    role: 'Eczacı Odası Başkanı · Şırnak Eczacı Odası',
  },
  {
    thumb: 'https://img.youtube.com/vi/yIvl1MLL_6E/maxresdefault.jpg',
    video: null,
    link: 'https://www.youtube.com/watch?v=yIvl1MLL_6E',
    duration: '1:05',
    avatar: 'İT',
    company: 'Şanlıurfa Eczacı Odası',
    tags: ['EczacıPOS', 'Ödeme Çözümleri'],
    title: 'Mali Müşavir Gözüyle EczacıPOS: Muhasebe Süreçleri Çok Kolaylaştı',
    desc: 'Eczane müşterilerimizin mali süreçlerini yakından takip ediyorum. EczacıPOS\'a geçtikten sonra hem tahsilat kayıtları hem de belge yönetimi ciddi ölçüde düzene girdi. Muhasebe yükü belirgin şekilde azaldı.',
    author: 'Sinan Erdem',
    role: 'Mali Müşavir · EczacıPOS Kullanıcısı',
  },
  {
    thumb: 'https://img.youtube.com/vi/FsePODR68fk/maxresdefault.jpg',
    video: null,
    link: 'https://www.youtube.com/watch?v=FsePODR68fk',
    duration: '1:09',
    avatar: 'TK',
    company: 'Mardin Eczacı Odası',
    tags: ['EczacıPOS', 'Raporlama'],
    title: '2016\'dan beri Kolaysoft',
    desc: '2016 yılından bier Kolaysoftla birlikteyiz. e-Fatura entegrasyonunda çok faydasını gördük.',
    author: 'Ecz. Abdullah Demir',
    role: 'Üye Eczacı · Mardin Eczacı Odası',
  },
  {
    thumb: 'https://img.youtube.com/vi/oobkPX6rFfY/maxresdefault.jpg',
    video: null,
    link: 'https://www.youtube.com/watch?v=oobkPX6rFfY',
    duration: '0:33',
    avatar: 'TK',
    company: 'Teslime Kurt',
    tags: ['EczacıPOS', 'QR Ödeme'],
    title: 'Temassız ve QR Ödeme ile Müşteri Memnuniyeti Arttı',
    desc: "Kredi kartı, temassız ve QR ödeme seçeneklerini sunmaya başladıktan sonra kasa önündeki bekleme süresi neredeyse sıfırlandı. Müşterilerimiz 'artık çok hızlandınız' diyor.",
    author: 'Ecz. Teslime Kurt',
    role: 'Üye Eczacı · Mardin Eczacı Odası',
  },
];

function SuccessStories() {
  const [active, setActive] = useState(0);
  const total = hikayeler.length;
  const story = hikayeler[active];

  const prev = () => setActive(i => (i - 1 + total) % total);
  const next = () => setActive(i => (i + 1) % total);

  return (
    <section className="py-20 bg-[#EEF2FF]">
      <div className="container-wide">

        {/* Başlık */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#184A97]/20 bg-white text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-5">
            BAŞARI HİKAYELERİMİZ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#184A97] mb-3">
            Eczacılarımızla Birlikte Oluşturduğumuz Başarı
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Kolaysoft Eczane Teknolojileri'nin eczanelerin iş süreçlerine nasıl değer
            kattığını kullanıcı deneyimlerinden dinleyin.
          </p>
        </motion.div>

        {/* Kart */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row"
        >
          {/* Sol – Video / Thumbnail */}
          <div className="relative md:w-[45%] min-h-[260px] bg-slate-200 flex-shrink-0 overflow-hidden">
            {story.video ? (
              <video
                key={story.video}
                src={story.video}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={story.thumb}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={e => { e.target.style.display = 'none'; }}
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              {story.link ? (
                <a href={story.link} target="_blank" rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-[#184A97] flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </a>
              ) : (
                <button className="w-14 h-14 rounded-full bg-[#184A97] flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </button>
              )}
            </div>
            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
              {story.duration}
            </div>
          </div>

          {/* Sağ – İçerik */}
          <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
            <div>
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {story.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#EEF2FF] text-[#184A97] text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Başlık */}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-snug">
                {story.title}
              </h3>

              {/* Açıklama */}
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {story.desc}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Yazar */}
              <div>
                <p className="text-slate-900 font-semibold text-sm">{story.author}</p>
                <p className="text-slate-400 text-xs mt-0.5">{story.role}</p>
              </div>

              {/* CTA */}
              {story.link ? (
                <a href={story.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white text-sm font-semibold transition-colors w-fit">
                  <Play className="w-3.5 h-3.5 fill-white" /> Videoyu İzle
                </a>
              ) : (
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white text-sm font-semibold transition-colors w-fit">
                  <Play className="w-3.5 h-3.5 fill-white" /> Videoyu İzle
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Alt – Sayaç + Progress + Oklar */}
        <div className="mt-6 flex items-center gap-4">
          {/* Sayaç */}
          <span className="text-[#184A97] font-bold text-sm tabular-nums w-12 flex-shrink-0">
            {String(active + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
          </span>

          {/* Progress bar */}
          <div className="flex-1 h-0.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#184A97] rounded-full transition-all duration-500"
              style={{ width: `${((active + 1) / total) * 100}%` }}
            />
          </div>

          {/* Oklar */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#184A97] hover:text-[#184A97] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-[#184A97] flex items-center justify-center text-white hover:bg-[#1446b8] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}


/* ── SSS verisi ── */
const faqData = [
  {
    q: 'EczacıPOS hangi ödeme yöntemlerini destekliyor?',
    a: 'EczacıPOS; kredi kartı, banka kartı, temassız ödeme ve QR ile ödeme yöntemlerini destekler. VUK 507 uyumlu altyapısıyla tüm tahsilat süreçleri elektronik ortamda yönetilir.',
  },
  {
    q: 'Eczacıkart Fatura, GİB mevzuatına uyumlu mu?',
    a: "Evet, Eczacıkart Fatura Gelir İdaresi Başkanlığı (GİB) mevzuatına tam uyumlu olarak geliştirilmiştir. e-Fatura, e-Arşiv ve ilgili tüm elektronik belge işlemleriniz yasal gereklilikler çerçevesinde sorunsuz şekilde yürütülür.",
  },
  {
    q: 'ALLY uygulaması hangi platformlarda kullanılabilir?',
    a: 'ALLY, hem iOS (App Store) hem de Android (Google Play) platformlarında ücretsiz olarak indirilebilir. Eczanenizin EczacıPOS ve Eczacıkart Fatura sistemleriyle tam entegrasyon sağlayarak anlık veri takibi yapmanıza olanak tanır.',
  },
  {
    q: 'Kolaysoft ürünleri için teknik destek nasıl alınır?',
    a: '7/24 teknik destek ekibimize 0850 259 98 08 numaralı müşteri hizmetleri hattından, destek portalımız üzerinden ticket açarak veya e-posta ile ulaşabilirsiniz. Ayrıca uzaktan bağlantı desteği de sunulmaktadır.',
  },
  {
    q: 'VUK 507 nedir ve EczacıPOS bu gereklilikle uyumlu mu?',
    a: "VUK 507, Vergi Usul Kanunu kapsamında yeni nesil ödeme kaydedici cihazlara ilişkin Maliye Bakanlığı tebliğidir. EczacıPOS, bu tebliğe tam uyumlu altyapısıyla eczanelerin yasal yükümlülüklerini eksiksiz yerine getirmesini sağlar.",
  },
  {
    q: 'SGK faturalarımı Kolaysoft üzerinden takip edebilir miyim?',
    a: 'Evet. Hem Eczacıkart Fatura portalı hem de ALLY mobil uygulaması üzerinden SGK faturalarınızı, Göç İdaresi faturalarınızı ve diğer kamu faturalarınızı tek ekrandan görüntüleyebilir ve yönetebilirsiniz.',
  },
  {
    q: 'Kolaysoft ürünleri birbiriyle entegre çalışıyor mu?',
    a: 'Evet. EczacıPOS, Eczacıkart Fatura ve ALLY; birbiriyle tam entegre çalışan bir dijital ekosistem oluşturur. Satış, ödeme, faturalama ve mobil takip süreçlerinin tümü tek bir platformdan yönetilir.',
  },
  {
    q: 'Geçiş süreci ne kadar sürer?',
    a: 'Başvurunuzun ardından uzman ekibimiz sizinle iletişime geçer ve kurulum sürecini birlikte planlar. Eczanenizin mevcut altyapısına bağlı olarak geçiş süreci genellikle 1-3 iş günü içinde tamamlanır. Tüm süreçte teknik destek ekibimiz yanınızdadır.',
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm font-semibold text-[#184A97] pr-8 group-hover:text-green-600 transition-colors">
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-[#184A97] group-hover:border-green-600 group-hover:text-green-600 transition-all"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p className="text-slate-500 text-sm leading-relaxed pb-5 pr-10">
          {item.a}
        </p>
      </div>

    </div>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container-wide max-w-2xl mx-auto">

        {/* Başlık */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200 text-slate-500 text-xs font-semibold tracking-widest mb-5">
            S.S.S.
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#184A97] mb-3">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto">
            Kolaysoft Eczane Teknolojileri hakkında en çok merak edilen
            soruların yanıtlarını aşağıda bulabilirsiniz.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-10">
          {faqData.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* Alt CTA kartı */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: '#0d1b4b' }}>
          <div>
            <p className="text-white/50 text-[10px] font-semibold uppercase tracking-widest mb-1">
              UZMAN EKİBİMİZ SİZE YARDIMCI OLMAKTAN MEMNUNİYET DUYAR.
            </p>
            <p className="text-white font-bold text-base">
              Sorunuzun yanıtını bulamadınız mı?
            </p>
          </div>
          <a href="#basvuru"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold text-sm transition-colors whitespace-nowrap">
            Bize Ulaşın
          </a>
        </motion.div>

      </div>
    </section>
  );
}

/* ── Blog Verisi ── */
const blogPosts = [
  {
    id: 1,
    category: 'EczacıPOS',
    categoryColor: '#184A97',
    date: '12 Haziran 2026',
    readTime: '5 dk okuma',
    title: 'VUK 507 Nedir? Eczaneler İçin Yeni Nesil Ödeme Kaydedici Sistemler',
    excerpt: "Maliye Bakanlığı'nın VUK 507 tebliğiyle birlikte eczanelerde yeni nesil yazarkasa zorunluluğu başladı. Peki bu değişiklik eczacıları nasıl etkiliyor?",
    image: null,
  },
  {
    id: 2,
    category: 'Dijitalleşme',
    categoryColor: '#7C3AED',
    date: '7 Haziran 2026',
    readTime: '4 dk okuma',
    title: 'E-Fatura ve E-Arşiv Geçişinde Eczanelerin Bilmesi Gereken 7 Şey',
    excerpt: "GİB'in e-Dönüşüm sürecinde eczaneler için kritik tarihler ve yapılması gereken hazırlıklar hakkında kapsamlı bir rehber.",
    image: null,
  },
  {
    id: 3,
    category: 'Mobil',
    categoryColor: '#16A34A',
    date: '28 Mayıs 2026',
    readTime: '3 dk okuma',
    title: 'ALLY ile Eczanenizi Her Yeden Yönetin: Kullanıcı Deneyimleri',
    excerpt: "28.000'den fazla eczacının tercih ettiği ALLY uygulamasının gerçek kullanıcılardan gelen başarı hikayeleri ve pratik ipuçları.",
    image: null,
  },
  {
    id: 4,
    category: 'SGK & Mevzuat',
    categoryColor: '#D97706',
    date: '15 Mayıs 2026',
    readTime: '6 dk okuma',
    title: 'SGK Fatura Süreçlerinde Dijital Dönüşüm: Eczaneler Nerede Duruyor?',
    excerpt: "SGK'nın dijital faturalama altyapısına geçiş sürecinde eczanelerin dikkat etmesi gereken adımlar ve kolaylaştırıcı teknoloji çözümleri.",
    image: null,
  },
  {
    id: 5,
    category: 'Güvenlik',
    categoryColor: '#0891B2',
    date: '3 Mayıs 2026',
    readTime: '4 dk okuma',
    title: 'Eczane Verilerinin Güvenliği: KVKK Uyumu ve Bulut Altyapısı',
    excerpt: 'Hasta ve müşteri verilerini korumak için eczanelerin uygulaması gereken KVKK adımları ve güvenli bulut çözümlerine geçişin faydaları.',
    image: null,
  },
];

function BlogCard({ post }) {
  const gradients = [
    'from-[#0d1b4b] via-[#184A97] to-[#1e3a8a]',
    'from-[#1e1b4b] via-[#4c1d95] to-[#6d28d9]',
    'from-[#052e16] via-[#14532d] to-[#15803d]',
    'from-[#451a03] via-[#92400e] to-[#b45309]',
    'from-[#042f2e] via-[#0f766e] to-[#0891b2]',
  ];
  const gi = (post.id - 1) % gradients.length;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-glow-green hover:border-[#0CF25D]/60 transition-all duration-300">
      {/* Image */}
      <div className={`relative h-44 bg-gradient-to-br ${gradients[gi]} flex-shrink-0`}>
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            }}
          />
        )}
        <div className="absolute top-3 left-3">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] font-bold text-white"
            style={{ backgroundColor: post.categoryColor + 'cc', backdropFilter: 'blur(4px)' }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 text-slate-400 text-xs mb-3">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {post.readTime}
          </span>
        </div>

        <h3 className="font-bold text-slate-900 leading-snug mb-2 text-sm line-clamp-2 hover:text-[#184A97] transition-colors cursor-pointer">
          {post.title}
        </h3>

        <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        <a href="#" className="inline-flex items-center gap-1.5 text-[#184A97] text-xs font-semibold hover:gap-2.5 transition-all">
          Devamını Oku
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}

function BlogSection() {
  const PER_PAGE = 3;
  const total = blogPosts.length;
  const pageCount = Math.ceil(total / PER_PAGE);
  const [page, setPage] = useState(0);

  const visible = blogPosts.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f5f3ff 100%)' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#184A97]/10 text-[#184A97] text-xs font-bold tracking-wider uppercase mb-4">
              Blog & Haberler
            </span>
            <h2 className="font-display font-bold text-slate-900 leading-tight" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              Eczane Teknolojileri Blog<br className="hidden md:block" /> Yazılarımız
            </h2>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-sm text-slate-500 font-medium">
              {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, total)} / {total}
            </span>
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:border-[#184A97] hover:text-[#184A97] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPage(p => Math.min(pageCount - 1, p + 1))}
              disabled={page === pageCount - 1}
              className="w-9 h-9 rounded-full bg-[#184A97] flex items-center justify-center text-white hover:bg-[#1446b8] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>

        {/* Dot pagination */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`rounded-full transition-all ${i === page ? 'w-6 h-2.5 bg-[#184A97]' : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


function CtaFinalSection() {
  const links = [
    { label: 'EczacıPOS', href: '#eczacipos' },
    { label: 'Eczacıkart Fatura', href: '#eczacikart-fatura' },
    { label: 'ALLY', href: '#ally' },
    { label: 'Kolaysoft', href: '/' },
  ];

  return (
    <section
      className="relative overflow-hidden py-20"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #0d1b4b 40%, #184A97 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #22C55E 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #184A97 0%, transparent 70%)' }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/30 text-[#22C55E] text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              Hemen Başlayın
            </span>

            <h2
              className="font-display font-extrabold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Eczaneniz için dijital<br />
              dönüşümü birlikte<br />
              <span style={{ color: '#22C55E' }}>kolaylaştıralım.</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-8 max-w-md" style={{ fontSize: '0.95rem' }}>
              Kolaysoft Eczane Teknolojileri ile ödeme, fatura, raporlama ve mobil takip süreçlerinizi tek ekosistemde yönetin.
            </p>

            <ul className="space-y-3">
              {[
                'Ücretsiz kurulum ve eğitim desteği',
                '7/24 teknik destek ekibi',
                '28.000+ eczacının tercihi',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-[#22C55E]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-80 flex-shrink-0"
          >
            <div
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <h3 className="text-white font-bold text-lg mb-1">Hemen Başvurun</h3>
              <p className="text-white/50 text-sm mb-6">Uzman ekibimiz 24 saat içinde sizi arasın.</p>

              <a
                href="https://www.eczacikartfatura.com/eczacikart-home"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold text-sm transition-colors mb-4"
              >
                Hemen Başvur <ArrowRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/30 text-xs">veya</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <a
                href="tel:08502599808"
                className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm font-semibold transition-all"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <span className="w-6 h-6 rounded-full bg-[#184A97]/60 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.32.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.02 21 3 13.98 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.46.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <div className="text-left">
                  <div className="text-[10px] text-white/40 leading-none mb-0.5">Telefon ile Ulaşın</div>
                  <div className="font-bold text-sm">0850 259 98 08</div>
                </div>
              </a>

              <p className="text-center text-white/30 text-[11px] mt-4">
                Ücretsiz demo. Bağlayıcı olmayan görüşme.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom product links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-white/80 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function EczaneTek() {
  const [form, setForm] = useState({ eczaneAdi: '', telefon: '', eposta: '', aciklama: '' });

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img src={headerImg} alt="Eczane Teknolojileri" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <Link to="/cozumler" className="text-white/80 hover:text-white transition-colors">Çözümler</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Eczane Teknolojileri</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Eczane Teknolojileri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl">
            Eczaneniz için uçtan uca dijital çözümler
          </motion.p>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          SECTION 1 – Hero / İntro (görseldeki gibi)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-wide grid md:grid-cols-2 gap-16 items-center">

          {/* Sol – metin */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184A97]/10 text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#184A97]" /> ECZANE TEKNOLOJİLERİ
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Eczaneniz İçin<br />
              <span className="text-[#184A97]">Uçtan Uca Dijital</span>{' '}
              Çözümler
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
              Kolaysoft Eczane Teknolojileri; ödeme, faturalama, raporlama
              ve mobil takip süreçlerini eczaneler için tek bir dijital
              ekosistemde kolaylaştırır.
            </p>

            <a href="https://basvuru.kolaysoftpos.com/posbasvuru-home"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#184A97] hover:bg-[#1446b8] text-white font-semibold text-sm transition-colors">
              Hemen Başvur <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Sağ – Hero-Video3 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg rounded-2xl shadow-lg overflow-hidden border border-slate-200 bg-black" style={{ aspectRatio: '16/9' }}>
              <video
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) scale(1.12)',
                  minWidth: '100%',
                  minHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
                src="/assets/eczane-teknolojileri/eczaci.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 – BAŞARI HİKAYELERİ (slider)
      ══════════════════════════════════════════ */}
      <SuccessStories />

      {/* ══════════════════════════════════════════
          SECTION 3 – ÜRÜNLER
      ══════════════════════════════════════════ */}
      <ProductsSection />
    
      {/* ══════════════════════════════════════════
          SECTION 4 – SSS
      ══════════════════════════════════════════ */}
      <FaqSection />


     

      <BlogSection />
      <CtaFinalSection />

    </div>
  );
}
