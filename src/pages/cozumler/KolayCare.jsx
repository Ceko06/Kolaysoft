import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ChevronLeft, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const headerImg = '/assets/headers/cozumler-header.png';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const optikProducts = [
  {
    title: 'KolayOptik',
    desc: 'Optik mağazalarının satış, stok ve müşteri süreçlerini tek bit platform üzerinden kolayca yönetmesini sağlar.',
    img: '/assets/kolaycare/optik ürünler/Kolayoptik-ürün-görseli.png',
    features: [
      'Satış ve sipariş yönetimi',
      'Stok takibi ve Cari hesap yönetimi',
      'Müşteri yönetimi',
      'UTS entegrasyonu',
      'Modüle entegrasyonu',
      'Bulut tabanlı kullanım',
      'Çok şubeli yapı desteği',
    ],
    buttons: [
      { label: 'Hemen Başvur', href: '#', primary: true },
      { label: 'KolayOptik Portal', href: '#', primary: false },
    ],
  },
  {
    title: 'OptikPos',
    desc: 'Optik mağazaları için tasarlanmış yeni nesil ödeme ve tahsilat çözümüyle finansal süreçlerinizi tek cihazdan yönetin.',
    img: '/assets/kolaycare/optik ürünler/OptikPos-Ürün-görseli.png',
    features: [
      'VUK 507 uyumlu altyapı',
      'Kredi kartı ve temassız ödeme',
      'QR ile ödeme alma',
      'Hızlı satış ve tahsilat',
      'Elektronik belge entegrasyonu',
      'Günlük ve dönemsel raporlama',
    ],
    buttons: [
      { label: 'https://basvuru.kolaysoftpos.com/posbasvuru-home', href: '#', primary: true },
      { label: 'OptikPos Portal', href: '#', primary: false },
    ],
  },
  {
    title: 'Ogo Fatura',
    desc: 'Optik işletmelerinin fatura süreçlerini tek platform üzerinden hızlı, güvenli ve mevzuata uyumlu şekilde yönetmesini sağlar.',
    img: '/assets/kolaycare/optik ürünler/Ogo-Fatura-ürün-görseli.png',
    features: [
      'SGK faturalarının yönetimi',
      'Tek ekran üzerinden işlem',
      'Ek fatura işlemleri',
      'Satış faturaları',
      'Mevzuata uygun süreç takibi',
      'Otomatik fatura gönderimi',
    ],
    buttons: [
      { label: 'Ogo Fatura Portal', href: '#', primary: false },
    ],
  },
  {
    title: 'ALLY',
    desc: 'Optik mağazanızın performansını mobil cihazlar üzerinden takip edin, verilerinize her an erişin.',
    img: '/assets/kolaycare/optik ürünler/Ally-ürün-görseli.png',
    features: [
      'OptikPOS entegrasyonu',
      'Günlük, haftalık ve aylık satış takibi',
      'Fatura süreçlerinin görüntülenmesi',
      'Finansal performans analizi',
      'Mobil erişim',
      'Anlık bildirimler ve raporlar',
    ],
    buttons: [
      { label: 'appstore', href: '#', store: 'apple' },
      { label: 'googleplay', href: '#', store: 'google' },
    ],
  },
];

const products = [
  {
    title: 'EczacıPos',
    desc: 'Eczaneler için geliştirilmiş yeni nesil ödeme ve satış çözümüyle tahsilat ve elektronik belge süreçlerinizi tek cihaz üzerinden yönetin.',
    img: '/assets/kolaycare/EczacıPos-ürün-görseli.png',
    features: [
      'VUK 507 uyumlu altyapı',
      'Kredi kartı, banka kartı ve temassız ödeme desteği',
      'QR ile ödeme alma',
      'Hızlı satış ve tahsilat süreçleri',
      'Elektronik belge entegrasyonu',
      'Günlük ve dönemsel raporlama',
      'Güvenli ödeme altyapısı',
    ],
    buttons: [
      { label: 'Hemen Başvur', href: '#', primary: true },
      { label: 'EczacıPos Portal', href: '#', primary: false },
    ],
  },
  {
    title: 'ALLY',
    desc: 'İşletmenizin performansını mobil cihazlar üzerinden takip edin, verilerinize her an erişin.',
    img: '/assets/kolaycare/Ally Eczacı Ürün Görseli.png',
    features: [
      'EczacıPOS entegrasyonu',
      'Günlük, haftalık ve aylık satış takibi',
      'Fatura süreçlerinin görüntülenmesi',
      'Finansal performans analizi',
      'Mobil erişim',
      'Anlık bildirimler ve raporlar',
    ],
    buttons: [
      { label: 'appstore', href: '#', store: 'apple' },
      { label: 'googleplay', href: '#', store: 'google' },
    ],
  },
  {
    title: 'Eczacıkart Fatura',
    desc: 'Fatura süreçlerinizi tek bir platform üzerinden hızlı, güvenli ve mevzuata uyumlu şekilde yönetin.',
    img: '/assets/kolaycare/Eczacıkart Fatura -ürün-görseli.png',
    features: [
      'SGK faturalarının yönetimi',
      'Tek ekran üzerinden işlem yapma',
      'Ek fatura işlemleri',
      'Satış faturaları',
      'Depoya iade faturaları',
      'Göç idaresi faturaları',
      'Mevzuata uygun süreç takibi',
    ],
    buttons: [
      { label: 'Eczacıkart Fatura Portal', href: '#', primary: false },
    ],
  },
];

const technologies = [
  {
    title: 'Eczane Teknolojileri',
    desc: 'Eczanelerin günlük operasyonlarını kolaylaştıran ödeme, fatura, mobil yönetim ve dijital dönüşüm çözümlerini tek bir ekosistemde buluşturuyoruz.',
    img: '/assets/kolaycare/eczacıpos.png',
    href: '/cozumler/eczane-teknolojileri',
  },
  {
    title: 'Optik Teknolojileri',
    desc: 'Optik mağazalarının satış, ödeme, müşteri ve işletme süreçlerini daha verimli yönetmelerini sağlayan teknolojiler geliştiriyoruz.',
    img: '/assets/kolaycare/optik.png',
    href: '/cozumler/optik-teknolojileri',
  },
];


// URL'den platform + thumbnail + embed bilgisi çıkarır
function getVideoInfo(url) {
  if (!url) return { platform: 'unknown', embedUrl: '', thumbnail: null, fallback: null };
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (yt) {
    const id = yt[1];
    return {
      platform: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`,
      thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
      fallback:  `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    };
  }
  const ig = url.match(/instagram\.com\/(?:p|reel|tv)\/([a-zA-Z0-9_-]+)/);
  if (ig) {
    const shortcode = ig[1];
    return {
      platform: 'instagram',
      embedUrl: `https://www.instagram.com/p/${shortcode}/embed/`,
      thumbnail: null,
      fallback:  null,
    };
  }
  return { platform: 'unknown', embedUrl: url, thumbnail: null, fallback: null };
}

const eczaciStories = [
  {
    id: 1,
    company: 'Mardin Eczacı Odası Üyesi',
    tags: ['EczacıPOS', 'Ödeme Sistemleri'],
    title: 'Teşekkürler',
    desc: 'İsminiz de olduğu gibi işlerimizi kolaylaştırıyorsunuz. POS eczacılarımızın ihtiyaç duyduğu bir şeydi. Teşekkür ediyoruz.',
    person: 'Kadri Çalım',
    role: 'Eczacı',
    videoUrl: 'https://www.youtube.com/watch?v=J4zxOUr7-50',
    duration: '0:39',
  },
  {
    id: 2,
    company: 'Mali Müşavir',
    tags: ['EczacıPOS', 'e-Dönüşüm'],
    title: 'Entegrasyon Sorunu Tarih Oldu!',
    desc: '2018 yılından beri şöyle bir kanun vardı: Eczane yazılımı ile POS cihazı arasında bir bağlantı olmak zorundaydı. Entegrasyonu olmayan eczacılara 7.500 ₺\'lık cezalar kesildi. Bu sorunu en az maliyetle çözen siz oldunuz.',
    person: 'Sinan Erdem',
    role: 'Mali Müşavir · Şanlıurfa',
    videoUrl: 'https://www.youtube.com/watch?v=yIvl1MLL_6E',
    duration: '1:06',
  },
  {
    id: 3,
    company: 'Şifa Eczanesi',
    tags: ['EczacıPOS', 'Temassız Ödeme'],
    title: 'Kolaysoft Her Zaman Yanınızda',
    desc: '2016\'dan beri e-fatura entegrasyonunda Kolaysoft\'un çok faydasını gördük ',
    person: 'Mehmet Ali Üçkök',
    role: 'Genel Müdür · Şifa Eczanesi Zinciri',
    videoUrl: 'https://www.youtube.com/watch?v=FsePODR68fk',
    duration: '1:09',
  },
];

function EczaciPOSSuccessStories() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = eczaciStories.length;
  const story = eczaciStories[current];
  const videoInfo = getVideoInfo(story.videoUrl);

  const prev = () => { setPlaying(false); setCurrent((c) => (c - 1 + total) % total); };
  const next = () => { setPlaying(false); setCurrent((c) => (c + 1) % total); };

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">

        {/* Üst başlık */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-[#184A97] mb-3">
            BAŞARI HİKAYELERİMİZ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 max-w-xl leading-tight mb-3">
            KolayCare Çözümünde<br />Başarı Hikayemiz
          </h2>
          <p className="text-slate-500 text-sm max-w-lg">
            EczacıPOS kullanan eczanelerin deneyimlerini kendi sözleriyle dinleyin.
          </p>
        </motion.div>

        {/* Kart */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row rounded-2xl border border-slate-100 bg-white shadow-md overflow-hidden transition-all duration-300 group/card hover:border-[#0CF25D]/50 hover:shadow-[0_0_32px_4px_rgba(12,242,93,0.18)]"
          style={{ minHeight: '380px' }}
        >
          {/* Sol — Video */}
          <div className="md:w-[52%] flex-shrink-0 bg-slate-900 relative overflow-hidden" style={{ minHeight: '320px' }}>
            {playing ? (
              <iframe
                key={story.videoUrl + '-' + current}
                src={videoInfo.embedUrl}
                title={story.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : videoInfo.thumbnail ? (
              <>
                <img
                  src={videoInfo.thumbnail}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={e => { e.target.src = videoInfo.fallback || ''; }}
                />
                <div className="absolute inset-0 bg-black/30" />
                {/* Süre */}
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
                  {story.duration}
                </div>
                {/* Play butonu */}
                <button
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Videoyu oynat"
                >
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-200 group-hover:scale-105">
                    <svg className="w-7 h-7 text-[#184A97] ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              /* Instagram veya bilinmeyen platform — play butonu göster */
              <button
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 group"
                aria-label="Videoyu oynat"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/50 group-hover:bg-white/30 flex items-center justify-center transition-all duration-200">
                  <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white/80 text-xs font-medium">{story.duration}</span>
              </button>
            )}
          </div>

          {/* Sağ — İçerik */}
          <div className="flex-1 flex flex-col justify-between p-8 md:p-10">
            <div>
              {/* Şirket & etiketler */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                
                <span className="px-3 py-1 rounded-full bg-[#EEF4FF] text-[#184A97] text-xs font-semibold">
                  {story.company}
                </span>
                {story.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>

              {/* Başlık */}
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug mb-4 max-w-sm">
                {story.title}
              </h3>

              {/* Açıklama */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                {story.desc}
              </p>
            </div>

            <div>
              {/* Kişi */}
              <div className="mb-6">
                <p className="font-bold text-slate-800 text-sm">{story.person}</p>
                <p className="text-slate-400 text-xs mt-0.5">{story.role}</p>
              </div>

              {/* Videoyu izle butonu */}
              <button
                onClick={() => setPlaying(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white font-semibold text-sm transition-all shadow-md shadow-[#184A97]/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Videoyu İzle
              </button>
            </div>
          </div>
        </motion.div>

        {/* Navigasyon */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-slate-400 text-sm font-medium tabular-nums">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0CF25D] hover:text-[#184A97] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#184A97] flex items-center justify-center text-white hover:bg-[#1446b8] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function KolayCare() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [optikActive, setOptikActive] = useState(0);
  const [optikDirection, setOptikDirection] = useState(1);

  const go = (next) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  };
  const prev = () => go((active - 1 + products.length) % products.length);
  const next = () => go((active + 1) % products.length);

  const goOptik = (next) => {
    setOptikDirection(next > optikActive ? 1 : -1);
    setOptikActive(next);
  };
  const prevOptik = () => goOptik((optikActive - 1 + optikProducts.length) % optikProducts.length);
  const nextOptik = () => goOptik((optikActive + 1) % optikProducts.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((a) => (a + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setOptikDirection(1);
      setOptikActive((a) => (a + 1) % optikProducts.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
{/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img src={headerImg} alt="KolayCare" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white/80">Çözümler</span>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">KolayCare</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            KolayCare
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl">
            Sağlık İşletmelerinin Dijital Gücü
          </motion.p>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white" style={{ minHeight: '580px' }}>

        {/* Sağ panel — viewport'a tam dayalı mavi arka plan */}
        <div className="absolute top-0 right-0 bottom-0 w-[55%] bg-[#EEF4FF] hidden " />

        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-[45%_55%] items-center" style={{ minHeight: '580px' }}>

            {/* Sol — metin */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col justify-center py-16 pr-12"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm mb-8 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#0CF25D] animate-pulse" />
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  KOLAY CARE
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.15] mb-6 text-slate-900">
                Sağlık<br />
                İşletmelerinin Dijital<br />
                Gücü: <span className="text-[#184A97]">Kolay Care</span>
              </h2>

              <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-[380px]">
                Eczane, optik ve medikal işletmeler için geliştirilen teknolojilerle operasyon,
                ödeme ve e-Dönüşüm süreçlerinizi tek bir platformda yönetin.
              </p>

              <a
                href="#teknolojiler"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white font-bold text-sm transition-all shadow-lg shadow-[#184A97]/25 w-fit"
              >
                Hemen Başvur <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Sağ — görsel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative flex items-end justify-center pt-[120px]"
              style={{ minHeight: '480px' }}
            >
              {/* Dekoratif halkalar */}


              <img
                src="/assets/kolaycare/ürünler.png"
                alt="KolayCare Ürünler"
                className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-2xl rounded-t-[20px]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TEKNOLOJİLERİMİZ
      ══════════════════════════════════════════ */}
      <section id="teknolojiler" className="py-16" style={{ backgroundColor: '#F7F9FF' }}>
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                TEKNOLOJİLERİMİZ
              </span>
            </div>
          </motion.div>

          {/* Kartlar — metin sol, görsel sağ */}
          <div className="grid md:grid-cols-2 gap-6 bg-[#F7F9FF]">
            {technologies.map(({ title, desc, img, href }, i) => (
              <motion.div
                key={title}
                variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.15}
                viewport={{ once: true }}
                className="flex rounded-2xl overflow-hidden border border-slate-100 bg-white group hover:shadow-glow-green transition-all duration-300 min-h-[280px]"
              >
                {/* Sol — içerik */}
                <div className="flex flex-col justify-between p-8 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#184A97] text-[#184A97] font-semibold text-sm hover:bg-[#184A97] hover:text-white transition-all duration-200 w-fit mt-6"
                  >
                    Ürünleri Keşfet <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Sağ — görsel */}
                <div className="w-[45%] flex-shrink-0 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          RAKAMLARLA KOLAY CARE
      ══════════════════════════════════════════ */}
      {/* Rakamlar */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="flex flex-col items-center text-center">

            {/* Badge */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  KOLAY CARE RAKAMLARLA
                </span>
              </div>
            </motion.div>

            {/* Başlık */}
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
              viewport={{ once: true }}
              className="font-extrabold text-slate-900 leading-tight mb-5 max-w-3xl"
              style={{ fontSize: '2.5rem' }}
            >
              EczacıPos Artık Türkiye'nin Her İlinde
            </motion.h2>

            {/* Açıklama */}
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" custom={0.2}
              viewport={{ once: true }}
              className="text-slate-800 text-base leading-relaxed max-w-xl mb-16"
            >
              Gelişmiş ödeme ve güçlü teknik altyapımızla Türkiye'nin 81 ilindeki
              eczanelere hızlı güvenli ve kesintisiz hizmet sunuyoruz.
            </motion.p>

            {/* İstatistikler */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 w-full">
              {[
                { value: '81', label: 'İl' },
                { value: 'Binlerce', label: 'İşletme' },
                { value: 'Türkiye Geneli', label: 'Güvenli Hizmet' },
              ].map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.15}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-1"
                >
                  <span className="sm:text-6xl font-black text-[#184A97]" style={{ fontSize: '2.5rem' }}>{value}</span>
                  <span className="text-slate-500 text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="py-16" style={{ backgroundColor: '#F1F4FB' }}>
        <div className="container-wide flex justify-center">
          <motion.img
            src="/assets/kolaycare/harita.png"
            alt="Türkiye Haritası"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="w-full max-w-4xl object-contain"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ÜRÜNLERİMİZ CAROUSEL
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">

          {/* Başlık */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">ÜRÜNLERİMİZ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Eczacı Teknolojileri</h2>
            <p className="text-slate-500 text-base">Eczaneniz için uçtan uca dijital çözümler</p>
          </motion.div>

          {/* Kart */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                initial={{ x: direction * 100 + '%' }}
                animate={{ x: 0 }}
                exit={{ x: direction * -100 + '%' }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col md:flex-row rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden min-h-[320px]"
              >
                {/* Sol — görsel */}
                <div className="md:w-[38%] flex-shrink-0 bg-[#F7F9FF] overflow-hidden" style={{ minHeight: '320px' }}>
                  <img
                    src={products[active].img}
                    alt={products[active].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sağ — içerik */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{products[active].title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-lg">{products[active].desc}</p>

                  {/* Özellikler */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                    {products[active].features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#184A97] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Butonlar */}
                  <div className="flex flex-wrap gap-3">
                    {products[active].buttons.map(({ label, href, primary, store }) =>
                      store === 'apple' ? (
                        <a key={label} href={href} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black hover:bg-gray-900 text-white transition-all">
                          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04l-.07.29zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-normal opacity-80">Download on the</span>
                            <span className="text-sm font-semibold">App Store</span>
                          </div>
                        </a>
                      ) : store === 'google' ? (
                        <a key={label} href={href} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 transition-all shadow-sm">
                          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M3.18 23.76c.3.17.64.24.99.2l13.12-13.12L13.41 7l-10.23 16z" fill="#EA4335"/>
                            <path d="M20.47 10.37l-3.04-1.73-3.64 3.64 3.64 3.63 3.07-1.75c.88-.5.88-1.79-.03-2.79z" fill="#FBBC05"/>
                            <path d="M3.18.24C2.86.41 2.64.78 2.64 1.28v21.44c0 .5.22.87.54 1.04l13.17-13.18L3.18.24z" fill="#4285F4"/>
                            <path d="M4.17 23.96l13.12-13.12-3.88-3.88L3.18 23.76c.28.16.63.21.99.2z" fill="#34A853"/>
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-normal text-slate-500">GET IT ON</span>
                            <span className="text-sm font-semibold">Google Play</span>
                          </div>
                        </a>
                      ) : (
                        <a
                          key={label}
                          href={href}
                          className={
                            primary
                              ? 'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white font-bold text-sm transition-all shadow-md shadow-[#184A97]/20'
                              : 'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#184A97] text-[#184A97] font-semibold text-sm hover:bg-[#184A97] hover:text-white transition-all'
                          }
                        >
                          {label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigasyon */}
          <div className="flex items-center justify-between mt-6">
            {/* Dotlar */}
            <div className="flex gap-2">
              {products.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-2.5 bg-[#184A97]' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            {/* Oklar */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0CF25D] hover:text-[#184A97] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#0CF25D] hover:text-[#184A97] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          OPTİK ÜRÜNLERİ CAROUSEL
      ══════════════════════════════════════════ */}
      <section id="optik" className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container-wide">

          {/* Başlık */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">ÜRÜNLERİMİZ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Optik Teknolojileri</h2>
            <p className="text-slate-500 text-base">Optik mağazanız için uçtan uca dijital çözümler</p>
          </motion.div>

          {/* Kart */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={optikDirection}>
              <motion.div
                key={optikActive}
                custom={optikDirection}
                initial={{ x: optikDirection * 100 + '%' }}
                animate={{ x: 0 }}
                exit={{ x: optikDirection * -100 + '%' }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col md:flex-row rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden min-h-[320px]"
              >
                {/* Sol — görsel */}
                <div className="md:w-[38%] flex-shrink-0 bg-[#EEF4FF] overflow-hidden" style={{ minHeight: '320px' }}>
                  <img
                    src={optikProducts[optikActive].img}
                    alt={optikProducts[optikActive].title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sağ — içerik */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{optikProducts[optikActive].title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-lg">{optikProducts[optikActive].desc}</p>

                  {/* Özellikler */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                    {optikProducts[optikActive].features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#184A97] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Butonlar */}
                  <div className="flex flex-wrap gap-3">
                    {optikProducts[optikActive].buttons.map(({ label, href, primary, store }) =>
                      store === 'apple' ? (
                        <a key={label} href={href} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black hover:bg-gray-900 text-white transition-all">
                          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.79.03 3.02 2.65 4.03 2.68 4.04l-.07.29zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-normal opacity-80">Download on the</span>
                            <span className="text-sm font-semibold">App Store</span>
                          </div>
                        </a>
                      ) : store === 'google' ? (
                        <a key={label} href={href} className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-900 transition-all shadow-sm">
                          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M3.18 23.76c.3.17.64.24.99.2l13.12-13.12L13.41 7l-10.23 16z" fill="#EA4335"/>
                            <path d="M20.47 10.37l-3.04-1.73-3.64 3.64 3.64 3.63 3.07-1.75c.88-.5.88-1.79-.03-2.79z" fill="#FBBC05"/>
                            <path d="M3.18.24C2.86.41 2.64.78 2.64 1.28v21.44c0 .5.22.87.54 1.04l13.17-13.18L3.18.24z" fill="#4285F4"/>
                            <path d="M4.17 23.96l13.12-13.12-3.88-3.88L3.18 23.76c.28.16.63.21.99.2z" fill="#34A853"/>
                          </svg>
                          <div className="flex flex-col leading-tight">
                            <span className="text-[9px] font-normal text-slate-500">GET IT ON</span>
                            <span className="text-sm font-semibold">Google Play</span>
                          </div>
                        </a>
                      ) : (
                        <a
                          key={label}
                          href={href}
                          className={
                            primary
                              ? 'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white font-bold text-sm transition-all shadow-md shadow-[#184A97]/20'
                              : 'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-[#184A97] text-[#184A97] font-semibold text-sm hover:bg-[#184A97] hover:text-white transition-all'
                          }
                        >
                          {label}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigasyon */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {optikProducts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goOptik(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === optikActive ? 'w-6 h-2.5 bg-[#184A97]' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevOptik}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#0CF25D] hover:text-[#184A97] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextOptik}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#0CF25D] hover:text-[#184A97] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>
       {/* ══════════════════════════════════════════
          PORTAL GİRİŞLERİMİZ
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F7F9FF]">
        <div className="container-wide">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                PORTAL GİRİŞLERİMİZ
              </span>
            </div>
          </motion.div>

          {/* Kartlar */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Medikal Portalı',
                desc: 'Medikal işletmelerin günlük operasyonlarını dijitalleştiren, süreç yönetimini kolaylaştıran bütünleşik platform.',
                img: '/assets/kolaycare/04F80DDF-053F-43DC-AE6C-EEB08F548BBB 1.png',
                href: '#',
              },
              {
                title: 'İşitme Merkezleri Portalı',
                desc: 'İşitme merkezlerine özel geliştirilen dijital platformla tüm süreçlerinizi tek noktada yönetin.',
                img: '/assets/kolaycare/0BA68ECF-CB23-49CD-891C-48C0C6413314 1.png',
                href: '#',
              },
            ].map(({ title, desc, img, href }, i) => (
              <motion.div
                key={title}
                variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.15}
                viewport={{ once: true }}
                className="flex rounded-2xl border border-slate-100 bg-white overflow-hidden group hover:shadow-glow-green transition-all duration-300 min-h-[220px]"
              >
                {/* Sol — içerik */}
                <div className="flex flex-col justify-between p-8 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:border-[#0CF25D] hover:text-[#184A97] transition-all duration-200 w-fit mt-6"
                  >
                    Portala Giriş Yap <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Sağ — görsel */}
                <div className="w-[42%] flex-shrink-0 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════
          BAŞARI HİKAYEMİZ
      ══════════════════════════════════════════ */}
      <EczaciPOSSuccessStories />

            {/* ══════════════════════════════════════════
          TEK EKOSİSTEM CTA
      ══════════════════════════════════════════ */}
      <section className="py-24" style={{ backgroundColor: '#184A97' }}>
        <div className="container-wide flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">TEK EKOSİSTEM</span>
            </div>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
            viewport={{ once: true }}
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Sağlık Teknolojilerinde<br />
            <span style={{ color: '#0CF25D' }}>Güçlü Ekosistem</span>
          </motion.h2>

          {/* Açıklama */}
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.2}
            viewport={{ once: true }}
            className="text-white/80 text-base leading-relaxed max-w-xl mb-10"
          >
            Türkiye genelinde binlerce işletme tarafından tercih edilen
            çözümlerimizle sağlık sektörünün dijital dönüşümüne yön veriyoruz.
          </motion.p>

          {/* CTA */}
          <motion.a
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.3}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
            style={{ backgroundColor: '#0CF25D', color: '#0f2d6e' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#00d94f'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0CF25D'}
          >
            Hemen Başvur <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Etiketler */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.4}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-white/60 text-sm"
          >
            {['Ödeme Sistemleri', 'İşletme Yönetimi', 'e-Dönüşüm', 'Güvenli Altyapı'].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0CF25D]" />
                {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

     

    </div>
  );
}
