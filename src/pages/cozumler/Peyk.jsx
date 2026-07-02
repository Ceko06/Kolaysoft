import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronRight, ChevronLeft, Bell, Users, FileText, Link2,
  CheckCircle, ArrowRight, Send, Award,
  Lock, Scale, Mail, BarChart2, LayoutGrid, Layers,
} from 'lucide-react';

/* ── Assets ── */
const peykHeader     = '/assets/headers/cozumler-header.png';
const glassFolderImg = '/assets/peyk/glass-folder.png';
const globeImg       = '/assets/peyk/globe.png';
const folderImg      = '/assets/peyk/folder.png';
const folder2Img     = '/assets/peyk/folder2.png';
const iaspLogo       = '/assets/awards/IASP.png';

/* ── Hakkında floating belgeler ── */
const aboutDocs = [
  { src: '/assets/peyk/bordro.png',    alt: 'Bordro',     className: 'w-[115px] md:w-[134px] top-2 left-2',    delay: 0 },
  { src: '/assets/peyk/sözleşme.png',  alt: 'Sözleşme',   className: 'w-[115px] md:w-[134px] top-0 right-2',   delay: 0.6 },
  { src: '/assets/peyk/izinformu.png', alt: 'İzin Formu', className: 'w-[115px] md:w-[134px] top-1/3 right-0', delay: 1.1 },
  { src: '/assets/peyk/özlük.png',     alt: 'Özlük',      className: 'w-[115px] md:w-[134px] top-1/2 left-0',  delay: 0.3 },
  { src: '/assets/peyk/tebligat.png',  alt: 'Tebligat',   className: 'w-[115px] md:w-[134px] bottom-6 left-6', delay: 0.9 },
  { src: '/assets/peyk/performans.png',alt: 'Performans', className: 'w-[115px] md:w-[134px] bottom-0 right-6',delay: 1.4 },
];

/* ── Animated counter ── */
function Counter({ target, suffix = '+', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const frame = useRef(null);
  useEffect(() => {
    if (!inView || !target) return;
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
  return <span ref={ref} className="tabular-nums">{prefix}{count}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ── Data ── */
const faaliyetler = [
  { icon: Bell,     title: 'Dijital Bildirim Yönetimi',               desc: 'Çalışanlara yönelik resmi bildirimlerin elektronik ortamda güvenli şekilde iletilmesini sağlar.' },
  { icon: Users,    title: 'İnsan Kaynakları Süreçleri',              desc: 'İzin, onay, evrak ve çalışan iletişim süreçlerinin merkezi olarak yönetilmesine yardımcı olur.' },
  { icon: FileText, title: 'Hukuki Geçerliliğe Sahip Dijital Kayıtlar', desc: 'İşletmelerin dijital süreçlerini kayıt altına alarak izlenebilirlik ve denetlenebilirlik sunar.' },
  { icon: Link2,    title: 'KEP ve Entegrasyon Teknolojileri',         desc: 'Kurumların mevcut sistemleriyle entegre çalışarak uçtan uca dijital iletişim altyapısı oluşturur.' },
];

/* ── Başarı Hikayeleri ── */
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
  return { platform: 'unknown', embedUrl: url, thumbnail: null, fallback: null };
}

const peykStories = [
  {
    id: 1,
    company: 'IKEA Türkiye / MAPA A.Ş.',
    tags: ['TÜBİTAK Zaman Damgası', 'Arşivleme'],
    title: 'Yüzlerce Bildirimi Manuel İmzalatmak Tarih Oldu',
    desc: "PEYK ile iletilen bildirimlerin TÜBİTAK zaman damgasıyla yasal platformda kabul görmesi bizim için en önemli unsurlardan biriydi. Yazılı belgelerin hızlıca paylaşılması hem zamandan hem insan kaynağından tasarruf, hem de arşivleme iş yükünden kaçınma imkânı sağladı.",
    person: 'Nagehan Üstünel Coşkun',
    role: 'Bordro ve Raporlama Grup Lideri · IKEA Türkiye',
    videoUrl: 'https://www.instagram.com/peykkolaysoft/reel/CoKU643IA8B/',
    thumbnail: '/assets/peyk/thumbnail/nagehan-ustunel-coskun.jpg',
  },
  {
    id: 2,
    company: 'Eti Bakır · Cengiz Holding',
    tags: ['Zaman Damgası', 'Web Arşivi'],
    title: 'Arşivlenebilir ve Zaman Damgalı Yapı',
    desc: "Bilgi işlem olarak mesleğimden kaynaklı en büyük artısı PEYK'in arşivlenebilir ve zaman damgalı mühürle saklanabilir olması. Veriyi bilgisayara indirmeden web üzerinde arşivleyebilmek bizim için en büyük avantajdı.",
    person: 'Ayşe Elif Karan',
    role: 'ERP İş Geliştirme Mühendisi · Eti Bakır',
    videoUrl: 'https://www.instagram.com/peykkolaysoft/reel/CnjeeXQJzx1/',
    thumbnail: '/assets/peyk/thumbnail/ayse-elif-karahan.jpg',
  },
  {
    id: 3,
    company: 'Interpress',
    tags: ['7/24 Destek', 'Maliyet Tasarrufu'],
    title: 'Dosyalama, Personel ve Zaman Maliyeti Sıfırlandı',
    desc: "PEYK kullanmanın size birçok faydası olduğunu düşünüyorum. Dosyalama maliyetleri, buna ayıracağınız personel maliyetleri ve ciddi zaman tasarrufu sağlıyor. Bunu oldukça kaliteli bir şekilde yapıyor. Müşteri hizmetlerinin 7/24 destek vermesi de bizi gayet memnun etmektedir.",
    person: 'Recep Can',
    role: 'Genel Müdür Yardımcısı · Interpress',
    videoUrl: 'https://www.instagram.com/peykkolaysoft/reel/CqZ0z4eo1fR/',
    thumbnail: '/assets/peyk/thumbnail/recep-can.jpg',
  },
  {
    id: 4,
    company: 'Seçil Store',
    tags: ['Kağıtsız Süreç', 'İş Davası Delili'],
    title: 'Delil Niteliğinde Kabul Ediliyor',
    desc: "PEYK'i Temmuz 2020'den itibaren kullanıyoruz. Şubesi fazla işletmelerin personelle kağıt trafiğini en aza indirmek, zaman tasarrufu sağlamak, kırtasiye masrafını düşürmek ve en önemlisi iş davalarında personel uyuşmazlıklarında delil niteliğinde kabul olması bizi cezbeden taraflar oldu.",
    person: 'Murat Demiralay',
    role: 'İnsan Kaynakları Yöneticisi · Seçil Store',
    videoUrl: 'https://www.instagram.com/peykkolaysoft/reel/Cq40pSsomkR/',
    thumbnail: '/assets/peyk/thumbnail/murat-demiralay,.jpg',
  },
  {
    id: 5,
    company: 'Mitaş',
    tags: ['KVKK Uyumu', 'TÜBİTAK Mührü'],
    title: "Mail'den PEYK'e: Güvenli Tebligat",
    desc: "Mailler üzerinden bordro göndermek doğru değildi; KVKK kapsamında şifreleme ve BT süreçleri bizi zorluyordu. PEYK'e geçerek hem TÜBİTAK mührüyle tebliğ güvencesi elde ettik hem de bordroların mail üzerinde dolaşmasının önüne geçtik.",
    person: 'Selda Meral Yıldırım',
    role: 'Endüstriyel İlişkiler Kıdemli Uzmanı · Mitaş',
    videoUrl: 'https://www.instagram.com/peykkolaysoft/reel/CqFUprFI-ld/',
    thumbnail: '/assets/peyk/thumbnail/selda-meral-yıldırım.jpg',
  },
  {
    id: 6,
    company: 'Eti Bakır',
    tags: ['Zaman Tasarrufu', 'Hukuki Uyum'],
    title: 'Mavi Yaka Beyaz Yaka Fark Etmiyor',
    desc: "Mavi yaka beyaz yaka olayını çok etkilemiyor, iki tarafta da rahatlıkla kullanabiliyor. Zaten kolay bir uygulama. Zaman tasarrufu, kağıt ısrafı ve hukuki yönden bordroyla ilgili mütabakatı sağlamak adına PEYK programını kullanmalarını tavsiye ederim.",
    person: 'Selahattin Er',
    role: 'İnsan Kaynakları Yöneticisi · Eti Bakır',
    videoUrl: 'https://www.instagram.com/peykkolaysoft/reel/CriyvB9oL_h/',
    thumbnail: '/assets/peyk/thumbnail/selehattin-er.jpg',
  },
];

function PeykSuccessStories() {
  const [current, setCurrent] = useState(0);
  const total = peykStories.length;
  const story = peykStories[current];

  const prev = () => { setCurrent((c) => (c - 1 + total) % total); };
  const next = () => { setCurrent((c) => (c + 1) % total); };

  return (
    <section className="py-20 bg-[#EEF2FF]">
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
            PEYK ile Dönüşen<br />Kurumsal Süreçler
          </h2>
          <p className="text-slate-500 text-sm max-w-lg">
            PEYK kullanan kurumların deneyimlerini kendi sözleriyle dinleyin.
          </p>
        </motion.div>

        {/* Kart */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row rounded-2xl border border-slate-100 bg-white shadow-md overflow-hidden transition-all duration-300 hover:border-[#0CF25D]/50 hover:shadow-[0_0_32px_4px_rgba(12,242,93,0.18)]"
          style={{ minHeight: '380px' }}
        >
          {/* Sol — Thumbnail */}
          <div className="md:w-[52%] flex-shrink-0 bg-slate-900 relative overflow-hidden" style={{ minHeight: '320px' }}>
            {story.thumbnail ? (
              <img
                src={story.thumbnail}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#0d1b4b 0%,#184A97 100%)' }} />
            )}
            {/* Play butonu — Instagram'a yönlendirir */}
            <a
              href={story.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center group"
              aria-label="Instagram'da izle"
            >
              <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-200 group-hover:scale-105">
                <svg className="w-7 h-7 text-[#184A97] ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </a>
            {/* PEYK watermark */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-widest">
                PEYK
              </span>
            </div>
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

              {/* Videoyu izle butonu — Instagram'a yönlendirir */}
              <a
                href={story.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#184A97] hover:bg-[#1446b8] text-white font-semibold text-sm transition-all shadow-md shadow-[#184A97]/20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Instagram'da İzle
              </a>
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

/* ── Neden PEYK cards ── */
const nedenCards = [
  { icon: Lock,       iconColor: '#6366F1', iconBg: '#EEEEFF', bg: '#F4F5FF', span: 4,
    title: 'Güvenli dijital iletişim altyapısı',
    desc: 'Her bildirim uçtan uca şifreleme ve kriptografik imzayla korunur.' },
  { icon: Scale,      iconColor: '#16A34A', iconBg: '#DCFCE7', bg: '#F0FFF5', span: 3,
    title: 'Hukuki süreçlere uyumlu yapı',
    desc: 'Türk mevzuatına tam uyumlu; e-tebligat ve dijital belge standartları.' },
  { icon: Mail,       iconColor: '#7C3AED', iconBg: '#EDE9FE', bg: '#F5F3FF', span: 3,
    title: 'KEP entegrasyon desteği',
    desc: 'Kayıtlı Elektronik Posta altyapısıyla sorunsuz çalışır.' },
  { icon: BarChart2,  iconColor: '#D97706', iconBg: '#FEF3C7', bg: '#FFFBF0', span: 3,
    title: 'İzlenebilir ve raporlanabilir süreçler',
    desc: 'Anlık dashboard ve detaylı raporlarla tüm süreçler şeffaf.' },
  { icon: LayoutGrid, iconColor: '#DB2777', iconBg: '#FCE7F3', bg: '#FFF0F6', span: 3,
    title: 'Yapay zekâ destekli operasyon yönetimi',
    desc: 'Akıllı sınıflandırma, önceliklendirme ve anormallik tespiti.' },
  { icon: Layers,     iconColor: '#0891B2', iconBg: '#CFFAFE', bg: '#F8FAFF', span: 4,
    title: 'Kurumsal sistemlerle entegrasyon kabiliyeti',
    desc: 'SAP, İKY ve ERP sistemleriyle hazır API entegrasyonu sunar.', wide: true },
];

export default function Peyk() {
  const [form, setForm] = useState({ firmaAdi: '', calisanSayisi: '', telefon: '', eposta: '', aciklama: '', alanlar: [] });
  const toggle = (a) => setForm(p => ({ ...p, alanlar: p.alanlar.includes(a) ? p.alanlar.filter(x => x !== a) : [...p.alanlar, a] }));

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════
          HEADER – kariyer ile aynı pattern
      ══════════════════════════════════════════ */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img src={peykHeader} alt="PEYK" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white/80">Çözümler</span>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">PEYK</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            PEYK
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl">
            Dijital Bildirim ve Çalışan İletişim Teknolojileri
          </motion.p>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          SECTION 1 – Beyaz, sol metin + sağ görsel
      ══════════════════════════════════════════ */}
      <section className="pt-20 pb-0 bg-white overflow-hidden">
        <div className="container-wide grid md:grid-cols-2 gap-16 items-center">
          {/* Left – text */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184A97]/10 text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#184A97]" /> PEYK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Dijital Bildirim ve<br />
              <span className="text-[#184A97]">Çalışan İletişim</span><br />
              Teknolojileri
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
              İnsan kaynakları süreçlerinde güvenli, izlenebilir ve sürdürülebilir dijital iletişim.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#basvuru"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#184A97] hover:bg-[#1446b8] text-white font-semibold text-sm transition-colors">
                Hemen Başvur <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://peyk.com.tr" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:border-[#184A97] hover:text-[#184A97] transition-colors">
                PEYK Portal
              </a>
            </div>
          </motion.div>

          {/* Right – glass folder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="flex justify-center items-end"
          >
            <img src={glassFolderImg} alt="PEYK Dijital Bildirim"
              className="w-full max-w-lg drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BAŞARI HİKAYELERİMİZ
      ══════════════════════════════════════════ */}
      <PeykSuccessStories />

      {/* ══════════════════════════════════════════
          STATS – Güvenin Arkasındaki Rakamlar
      ══════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184A97]/10 text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-4">
              + PEYK RAKAMLARLA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Güvenin Arkasındaki Rakamlar</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Türkiye'nin kurumlarının dijital bildirim altyapısına güvendiği PEYK,
              Türkiye'nin en kapsamlı çalışan iletişim platformudur.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
            {[
              { value: 300,  suffix: '+',  label: 'Kurumsal Müşteri',  fontfamily:'cabin'},
              { display: 'Milyonlarca',    label: 'Dijital Bildirim' },
              { value: 100,  suffix: '%',  label: 'Dijital Güvenilirlik' },
              { display: '7/24',           label: 'Erişilebilir Altyapı' },
            ].map(({ value, suffix, label, display }, i) => (
              <motion.div key={label} variants={fadeUp} initial="hidden" whileInView="visible" custom={i}
                viewport={{ once: true }}
                className="text-center py-8 px-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className={`${typeof display === 'string' && display.length > 6 ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'} font-extrabold text-[#184A97] mb-2 h-14 md:h-16 flex items-center justify-center`}>
                  {display ?? <Counter target={value} suffix={suffix} />}
                </div>
                <p className="font-cabin text-slate-700 text-base md:text-lg font-semibold tracking-wide">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT – Tek platformda yönetin
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container-wide grid md:grid-cols-2 gap-14 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184A97]/10 text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-5">
              + PEYK HAKKINDA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-5">
              Çalışan iletişim<br />süreçlerini tek platformda<br />
              <span className="text-[#184A97]">yönetin.</span>
            </h2>
            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <p>PEYK, kurumunuzun çalışanlarıyla dijital, izlenebilir, ücret, izin, ikaz ve benzeri insan kaynakları süreçlerini yönetmenizi ve tüm iletişim kayıtlarını yasal güvence altına almanızı sağlar.</p>
              <p>Güvenli ortamda, mevzuata uygun bildirimler gerçekleştirip, innovasyon odaklı yapısı ve yüksek entegrasyon kapasitesiyle akıllı iş akışı yönetimine olanak tanıyan güçlü bir platforma sahip olabilirsiniz.</p>
              <p>PEYK ile kurumsal süreçlerinizdeki insan kaynakları iletişimlerini, hukuken geçerlilik kazandırılmış dijital belgelerle sürdürülebilir biçimde yönetebilirsiniz.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="relative">
            {/* Klasör görseli */}
            <div className="relative mx-auto max-w-md">
              <img src={folder2Img} alt="PEYK Platform" className="w-full object-contain drop-shadow-2xl" />

              {/* Floating belgeler */}
              {aboutDocs.map((doc) => (
                <motion.div
                  key={doc.alt}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: doc.delay * 0.3 }}
                  className={`absolute ${doc.className}`}
                >
                  <motion.img
                    src={doc.src}
                    alt={doc.alt}
                    className="w-full drop-shadow-xl"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: doc.delay }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-slate-100 z-10">
              <div className="w-10 h-10 bg-[#0CF25D] rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Hukuki Güvence</p>
                <p className="text-sm font-bold text-slate-900">%100 Yasal Uyumluluk</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAAALİYET ALANLARI
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#EEF2FF]">
        <div className="container-wide max-w-2xl mx-auto">

          {/* Başlık */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-slate-300 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-5">
              ÇÖZÜMLER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-slate-900">Faaliyet </span>
              <span className="text-[#184A97]">Alanlarımız</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              PEYK'in sunduğu kapsamlı dijital çözüm alanları, kurumların
              uçtan uca iletişim süreçlerini güvenle yönetmesini sağlar.
            </p>
          </motion.div>

          {/* Timeline listesi */}
          <div className="relative">
            {/* Dikey çizgi */}
            <div className="absolute left-[22px] top-6 bottom-6 w-0.5 bg-[#184A97]/30" />

            <div className="space-y-4">
              {faaliyetler.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" custom={i}
                  viewport={{ once: true }}
                  className="flex items-start gap-5">
                  {/* İkon – koyu mavi daire */}
                  <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-[#184A97] flex items-center justify-center shadow-md shadow-[#184A97]/30">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {/* Kart */}
                  <div className="flex-1 bg-white rounded-2xl px-6 py-4 shadow-sm border border-slate-100/60">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEDEN PEYK – Bento grid (tasarıma birebir)
          Satır 1: kart0(4) kart1(3) kart2(3)
          Satır 2: kart3(3) kart4(3) kart5(4)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">

          {/* Başlık */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-4">
                Avantajlar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Neden <span className="text-[#184A97]">PEYK?</span>
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" custom={1}
              viewport={{ once: true }}
              className="text-slate-500 text-sm leading-relaxed md:pt-10">
              Güvenlik, uyum ve entegrasyon — kurumsal dijital iletişimin tüm
              gereksinimlerini tek çatı altında sunuyoruz.
            </motion.p>
          </div>

          {/* Bento grid – 10 kolon */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '14px' }}>
            {nedenCards.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <motion.div
                  key={c.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={idx * 0.5}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 flex flex-col justify-between"
                  style={{
                    background: c.bg,
                    gridColumn: `span ${c.span}`,
                    minHeight: 200,
                  }}
                >
                  {/* İkon – üst sol */}
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-6 flex-shrink-0"
                    style={{ background: c.iconBg }}>
                    <IconComp className="w-4 h-4" style={{ color: c.iconColor }} />
                  </div>

                  {/* Başlık + açıklama – alt */}
                  <div>
                    <h3 className={`font-bold text-slate-900 mb-2 leading-snug ${c.wide ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                      {c.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
                    {c.wide && (
                      <div className="mt-4 w-8 h-0.5 rounded-full" style={{ background: c.iconColor }} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobil: 2 kolon */}
          <style>{`
            @media (max-width: 767px) {
              .bento-10 > div { grid-column: span 5 !important; }
            }
          `}</style>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          ULUSLARARASI BAŞARI – sol beyaz, sağ koyu
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left – beyaz arkaplan, siyah + mavi başlık */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest text-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#184A97]" />
                ULUSLARARASI BAŞARI
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-5 text-slate-900">
                Türkiye'yi Global İnovasyon{' '}
                <span className="text-[#184A97]">Sahnesinde Temsil Ettik</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                PEYK, International Association of Science Parks and Areas of Innovation (IASP)
                tarafından inovatif ürün olarak seçilerek Türkiye'yi temsil etmiştir.
              </p>

              {/* IASP kart */}
              <div className="inline-flex items-center gap-3 bg-[#E2ECFF] rounded-2xl px-5 py-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#184A97]/60 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src={iaspLogo} alt="IASP" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-[#08142E] font-bold text-sm leading-tight">IASP Seçilmiş Ürün</p>
                  <p className="text-[#9DAFC2] text-xs mt-0.5">International Association of Science Parks</p>
                </div>
              </div>
            </motion.div>

            {/* Right – koyu mavi kutu + globe */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.65 }}
              className="relative rounded-3xl overflow-hidden  min-h-[340px] flex items-center justify-center  p-8"
            >
              {/* radial glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 55% 45%, rgba(12,242,93,0.25) 0%, transparent 60%)' }} />

              {/* Globe */}
              <img
                src={globeImg}
                alt="Dünya haritası"
                className="relative z-10 w-4/5 max-w-[450px] rounded-xl"
              />

              {/* Green dot */}
              <div className="absolute z-20" style={{ top: '42%', left: '53%' }}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0CF25D] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0CF25D]" />
                </span>
              </div>

              {/* Alt bilgi kartı */}
       
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BAŞVURU FORMU
      ══════════════════════════════════════════ */}
      <section id="basvuru" className="py-20 bg-[#EEF2FF]">
        <div className="container-wide">

          {/* Başlık – ortalanmış */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#184A97]" /> BAŞVURU
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              PEYK'e Başvurun,<br />
              <span className="text-[#184A97]">Uzmanlarımız Sizi Arasın</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-7">
              Kurumunuzun dijital bildirim ve çalışan iletişim ihtiyaçları için formu doldurun.
            </p>
            {/* Özellik pilleri */}
            <div className="flex flex-wrap justify-center gap-3">
              {['KVKK Uyumlu', '24s İçinde Geri Dönüş', 'Uzman Ekip', 'Güvenli Süreç'].map(tag => (
                <span key={tag}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#184A97]" /> {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* İki kolon: form + sağ — %70 genişlik, ortalanmış */}
          <div className="w-[70%] mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">

            {/* Sol – Form kartı */}
            <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              onSubmit={e => e.preventDefault()}
              className="bg-white rounded-3xl p-8 shadow-sm space-y-5">

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Firma Adı *</label>
                <input type="text" value={form.firmaAdi} onChange={e => setForm(p => ({ ...p, firmaAdi: e.target.value }))}
                  placeholder="Şirketinizin adı"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#184A97] transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Çalışan Sayısı *</label>
                <select value={form.calisanSayisi} onChange={e => setForm(p => ({ ...p, calisanSayisi: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-400 focus:outline-none focus:border-[#184A97] transition-colors appearance-none">
                  <option value="">Seçiniz</option>
                  <option>1–50</option><option>51–200</option><option>201–500</option><option>500+</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Telefon *</label>
                  <input type="tel" value={form.telefon} onChange={e => setForm(p => ({ ...p, telefon: e.target.value }))}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#184A97] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">E-posta *</label>
                  <input type="email" value={form.eposta} onChange={e => setForm(p => ({ ...p, eposta: e.target.value }))}
                    placeholder="ornek@firma.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#184A97] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mesaj</label>
                <textarea rows={4} value={form.aciklama} onChange={e => setForm(p => ({ ...p, aciklama: e.target.value }))}
                  placeholder="Kurumunuzun ihtiyaçlarını kısaca açıklayın..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#184A97] transition-colors resize-none" />
              </div>

              {/* KVKK */}
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded accent-[#184A97] flex-shrink-0" />
                <span className="text-xs text-slate-500 leading-relaxed">
                  <span className="text-[#184A97] font-semibold cursor-pointer hover:underline">KVKK Aydınlatma Metni</span>'ni okudum ve onaylıyorum.
                </span>
              </label>

              <button type="submit"
                className="w-full py-3.5 bg-[#184A97] hover:bg-[#1446b8] text-white font-bold text-sm rounded-2xl transition-colors">
                Başvuru Gönder
              </button>
            </motion.form>

            {/* Sağ – network görseli + portal kartı */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1}
              viewport={{ once: true }}
              className="flex flex-col gap-4">

              {/* Network görsel kartı */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="/assets/peyk/peyk-network.png"
                  alt="PEYK Ağ Yapısı"
                  className="w-full object-cover"
                />
              </div>

              {/* Portal CTA kartı */}
              <div className="bg-[#0d1b4b] rounded-3xl px-7 py-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-1">
                    ZATEN PEYK KULLANIYOR MUSUNUZ?
                  </p>
                  <p className="text-white font-bold text-base">Portale giriş yapın</p>
                </div>
                <a href="https://peyk.com.tr" target="_blank" rel="noopener noreferrer"
                  className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0CF25D] hover:bg-[#0adb52] text-slate-900 font-bold text-sm rounded-xl transition-colors whitespace-nowrap">
                  PEYK Portal <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </div>
          </div>
        </div>
      </section>

    </div>
  );
}
