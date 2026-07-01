import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Building2, MapPin, Briefcase, LayoutGrid, Search, Check, FileText, UserCheck, Users, LogIn, Code2, TrendingUp, Target, ChevronRight } from 'lucide-react';
import { ilanlar } from '../data/ilanlar';

/* ── Başvuru Formu Bileşeni ── */
function BaşvuruFormu() {
  const [form, setForm] = useState({ ad: '', email: '', telefon: '', pozisyon: '', mesaj: '' });
  const [dosya, setDosya] = useState(null);
  const [durum, setDurum] = useState('idle'); // idle | gonderiyor | basarili | hata
  const [hata, setHata] = useState('');
  const fileRef = useState(null);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleDosya = (e) => {
    const f = e.target.files?.[0];
    if (f) setDosya(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) setDosya(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.ad || !form.email) { setHata('Ad ve e-posta zorunludur.'); return; }
    setDurum('gonderiyor');
    setHata('');

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (dosya) fd.append('cv', dosya);

    try {
      const res = await fetch('http://localhost:3001/api/basvuru', { method: 'POST', body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Hata');
      setDurum('basarili');
    } catch (err) {
      setHata(err.message);
      setDurum('hata');
    }
  };

  if (durum === 'basarili') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative pt-6 pb-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#0CF25D] flex items-center justify-center shadow-lg">
            <Check className="w-8 h-8 text-slate-900" strokeWidth={3} />
          </div>
          <h3 className="text-lg font-bold text-slate-800">Başvurun alındı!</h3>
          <p className="text-slate-500 text-sm">Ekibimiz en kısa sürede seninle iletişime geçecek.</p>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-lg">
          <Check className="w-3.5 h-3.5 text-[#0CF25D]" strokeWidth={3} />
          <span className="text-xs font-semibold text-slate-700">Hızlı yanıt garantisi</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.65 }}
      className="relative pt-6 pb-8"
    >
      {/* Floating badge – sağ üst */}
      <div className="absolute top-0 right-0 z-20 inline-flex items-center gap-2 bg-[#0CF25D] rounded-2xl px-4 py-2 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-slate-900" />
        <span className="text-xs font-bold text-slate-900">Havuz Başvurusu</span>
      </div>

      {/* Form kartı */}
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4">
        {/* Başlık */}
        <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
            <FileText className="w-5 h-5 text-[#184A97]" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">CV Yükle</p>
            <p className="text-xs text-slate-400">PDF / DOCX</p>
          </div>
        </div>

        {/* Ad Soyad + E-posta */}
        <div className="grid grid-cols-2 gap-3">
          <input
            name="ad" value={form.ad} onChange={handleChange} placeholder="Ad Soyad *"
            className="col-span-1 text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#184A97] transition-colors"
          />
          <input
            name="email" type="email" value={form.email} onChange={handleChange} placeholder="E-posta *"
            className="col-span-1 text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#184A97] transition-colors"
          />
        </div>

        {/* Telefon + Pozisyon */}
        <div className="grid grid-cols-2 gap-3">
          <input
            name="telefon" value={form.telefon} onChange={handleChange} placeholder="Telefon"
            className="text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#184A97] transition-colors"
          />
          <input
            name="pozisyon" value={form.pozisyon} onChange={handleChange} placeholder="Başvurduğunuz pozisyon"
            className="text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#184A97] transition-colors"
          />
        </div>

        {/* CV yükleme alanı */}
        <label
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="border-2 border-dashed border-slate-200 rounded-2xl p-5 flex flex-col items-center gap-1.5 bg-slate-50 cursor-pointer hover:border-[#184A97] transition-colors"
        >
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleDosya} className="hidden" />
          <div className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
            <Upload className="w-4 h-4 text-[#184A97]" />
          </div>
          {dosya
            ? <p className="text-sm font-semibold text-[#184A97]">{dosya.name}</p>
            : <>
                <p className="text-sm font-semibold text-[#184A97]">Dosyayı sürükle &amp; bırak</p>
                <p className="text-xs text-slate-400">veya tıkla, bilgisayarından seç</p>
                <p className="text-xs text-slate-400">PDF, DOCX — Max 10 MB</p>
              </>
          }
        </label>

        {/* Not */}
        <textarea
          name="mesaj" value={form.mesaj} onChange={handleChange}
          placeholder="Kısa not (isteğe bağlı)"
          rows={2}
          className="text-sm border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-[#184A97] transition-colors resize-none"
        />

        {hata && <p className="text-xs text-red-500">{hata}</p>}

        <button
          type="submit"
          disabled={durum === 'gonderiyor'}
          className="w-full flex items-center justify-center gap-2 bg-[#0CF25D] hover:bg-[#0adb52] disabled:opacity-60 text-slate-900 font-bold text-sm py-3 rounded-xl transition-colors"
        >
          {durum === 'gonderiyor'
            ? <span className="animate-pulse">Gönderiliyor…</span>
            : <><Upload className="w-4 h-4" /> Başvuruyu Gönder</>
          }
        </button>
      </form>

      {/* Floating badge – alt */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-lg">
        <Check className="w-3.5 h-3.5 text-[#0CF25D]" strokeWidth={3} />
        <span className="text-xs font-semibold text-slate-700">Hızlı yanıt garantisi</span>
      </div>
    </motion.div>
  );
}

const adimlar = [
  { no: '01', baslik: 'İlanı Keşfet',       aciklama: 'İlgi alanına uygun pozisyonu bul', Icon: Search     },
  { no: '02', baslik: 'Başvurunu Gönder',   aciklama: 'CV ve bilgilerini ilet',            Icon: FileText   },
  { no: '03', baslik: 'Ön Değerlendirme',   aciklama: 'İK ekibi incelemesi',               Icon: UserCheck  },
  { no: '04', baslik: 'Görüşme Süreci',     aciklama: 'Teknik ve yetenek görüşmeleri',     Icon: Users      },
  { no: '05', baslik: 'Ekibe Katılım',      aciklama: 'Hoş geldin Kolaysoft!',             Icon: LogIn      },
];


const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function KolaysoftaKatil() {
  const [aktifAdim, setAktifAdim] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAktifAdim((prev) => (prev + 1) % adimlar.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════
          HEADER – kariyer-header.png
      ══════════════════════════════════════════════ */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img
          src="/assets/headers/kariyer-header.png"
          alt="Kolaysoft Kariyer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Kolaysoft Kariyer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Geleceği Birlikte Geliştiriyoruz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl"
          >
            Kolaysoft ekibine katılın, teknoloji ile geleceği şekillendirin.
          </motion.p>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          SECTION 1 – Hero (Görselle birebir)
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 pt-28 pb-24">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#0CF25D]/8 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-14 items-center">

          {/* ── Sol: Metin ── */}
          <div>
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0CF25D]/15 text-[#0a9e3c] text-xs font-semibold uppercase tracking-widest mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              KOLAYSOFT KARİYER
            </motion.span>

            {/* Başlık */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.1] mb-6"
            >
              Geleceği Geliştiren{' '}
              <span className="text-[#0CF25D]">Ekibin</span>{' '}
              Bir Parçası Ol
            </motion.h1>

            {/* Açıklama */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-500 text-[15px] leading-relaxed mb-10 max-w-[400px]"
            >
              Yazılım, yapay zeka, e-Dönüşüm, sağlık teknolojileri ve kurumsal
              çözümler alanlarında yenilikçi projeler geliştiren Kolaysoft ekibine
              katılın.
            </motion.p>

            {/* Butonlar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#pozisyonlar"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#184a97] text-white text-sm font-semibold rounded-xl hover:bg-[#184A97] transition-colors shadow-md"
              >
                Açık Pozisyonları Gör <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/genel-basvuru"
                className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-slate-300 text-slate-700 text-sm font-semibold rounded-xl hover:border-[#184A97] hover:text-[#184A97] transition-colors"
              >
                <Upload className="w-4 h-4" />
                CV Gönder
              </a>
            </motion.div>
          </div>

          {/* ── Sağ: Fotoğraf kartı + floating badge'ler ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative mt-10 md:mt-0"
          >
            {/* Badge – sol üst */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="absolute -top-5 left-4 z-20 flex items-center gap-2 bg-white rounded-2xl shadow-lg px-4 py-2.5 border border-slate-100"
            >
              <Building2 className="w-4 h-4 text-[#184A97]" />
              <span className="text-sm font-semibold text-slate-800">Açık Pozisyonlar</span>
            </motion.div>

            {/* Badge – sağ üst */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="absolute -top-5 right-4 z-20 flex items-center gap-2 bg-[#0CF25D] rounded-2xl shadow-lg px-4 py-2.5"
            >
              <Upload className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-semibold text-slate-900">CV Gönder</span>
            </motion.div>

            {/* Ana görsel */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white">
              <img
                src="/assets/kariyer/hero-img.jpg"
                alt="Kolaysoft profesyonel ekibi"
                className="w-full h-72 md:h-[420px] object-cover"
              />
            </div>

            {/* Badge – sağ alt */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="absolute -bottom-5 right-4 z-20 flex items-center gap-2 bg-[#0CF25D] rounded-2xl shadow-lg px-4 py-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              <span className="text-sm font-semibold text-slate-900">Profesyonel Ekip</span>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 – Pozisyon Arama & Filtre
      ══════════════════════════════════════════════ */}
      <section id="pozisyonlar" className="bg-[#184A97] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Başlık */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Size Uygun Fırsatı Keşfedin
            </h2>
            <p className="text-white/70 text-sm">
              Açık pozisyonları, staj fırsatlarını ve yeni mezun ilanlarını kolayca filtreleyin.
            </p>
          </motion.div>

          {/* Filtre satırı */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 items-center"
          >
            {/* Arama input */}
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 flex-1 min-w-[220px]">
              <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Pozisyon, ekip veya anahtar kelime ara"
                className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none w-full"
              />
            </div>

            {/* Lokasyon dropdown */}
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors min-w-[148px]">
              <MapPin className="w-4 h-4 text-[#0CF25D] flex-shrink-0" />
              <span className="text-sm text-slate-700 flex-1">Lokasyon</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* İlan Tipi dropdown */}
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors min-w-[148px]">
              <Briefcase className="w-4 h-4 text-[#0CF25D] flex-shrink-0" />
              <span className="text-sm text-slate-700 flex-1">İlan Tipi</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Departman dropdown */}
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors min-w-[148px]">
              <LayoutGrid className="w-4 h-4 text-[#0CF25D] flex-shrink-0" />
              <span className="text-sm text-slate-700 flex-1">Departman</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Listele butonu */}
            <button className="flex items-center gap-2 bg-[#0CF25D] hover:bg-[#0adb52] text-slate-900 font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-md shadow-[#0CF25D]/20 whitespace-nowrap">
              İlanları Listele
            </button>
          </motion.div>

        </div>
      </section>

     

     

      {/* ══════════════════════════════════════════════
          SECTION 3 – Öne Çıkan İlanlar
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Başlık */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184A97] mb-3">
              Öne Çıkan İlanlar
            </h2>
            <p className="text-slate-500 text-sm">
              Kolaysoft'taki fırsatları keşfedin ve kariyerinizde bir adım öne çıkın.
            </p>
          </motion.div>

          {/* Kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {ilanlar.map((ilan, i) => (
              <motion.div
                key={ilan.baslik}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-glow-green hover:border-[#0CF25D]/60 transition-all duration-300"
              >
                {/* Üst: başlık + tip badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-[#184A97] leading-tight">{ilan.baslik}</h3>
                  <span className="flex-shrink-0 text-xs font-semibold text-[#184A97] bg-blue-50 px-2.5 py-1 rounded-lg">
                    {ilan.tip}
                  </span>
                </div>

                {/* Departman & Lokasyon */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    {ilan.departman}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {ilan.lokasyon}
                  </div>
                </div>

                {/* Açıklama */}
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {ilan.aciklama}
                </p>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-2">
                  {ilan.etiketler.map((e) => (
                    <span key={e} className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg font-medium">
                      {e}
                    </span>
                  ))}
                </div>

                {/* Detay butonu */}
                <Link
                  to={`/ilan/${ilan.id}`}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-blue-50 hover:text-[#184A97] text-slate-700 text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  Detayları Gör <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Tüm ilanlar butonu */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#184A97] text-[#184A97] font-semibold text-sm rounded-xl hover:bg-[#184A97] hover:text-white transition-colors">
              Tüm İlanları Gör <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>
 {/* ══════════════════════════════════════════════
          SECTION 4 – Başvuru Süreci Nasıl İlerler?
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          {/* Başlık */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184A97] mb-3">
              Başvuru Süreci Nasıl İlerler?
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              Şeffaf ve hızlı bir süreçle kariyer yolculuğunuza başlayın.
            </p>

            {/* Aktif adım badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm text-sm font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
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
          </motion.div>

          {/* Stepper */}
          <div className="relative flex items-start justify-between gap-0 mb-10">
            {adimlar.map((adim, i) => {
              const tamamlandi = i < aktifAdim;
              const aktif = i === aktifAdim;
              const { Icon } = adim;

              return (
                <div key={i} className="flex-1 flex flex-col items-center relative">
                  {/* Bağlantı çizgisi */}
                  {i < adimlar.length - 1 && (
                    <div className="absolute top-[28px] left-1/2 w-full h-[2px] bg-slate-200 z-0">
                      <motion.div
                        className="h-full bg-[#184A97]"
                        animate={{ width: tamamlandi ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}

                  {/* Node */}
                  <div className="relative z-10 mb-4">
                    {aktif && (
                      <span className="absolute inset-0 rounded-full bg-[#0CF25D]/30 animate-ping" />
                    )}
                    <motion.div
                      animate={{
                        backgroundColor: tamamlandi ? '#184A97' : aktif ? '#0CF25D' : '#e2e8f0',
                        scale: aktif ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                    >
                      {tamamlandi
                        ? <Check className="w-6 h-6 text-white" strokeWidth={3} />
                        : <Icon className={`w-6 h-6 ${aktif ? 'text-slate-900' : 'text-slate-400'}`} />
                      }
                    </motion.div>
                  </div>

                  {/* Metin */}
                  <div className="text-center px-1">
                    <p className={`text-[10px] font-semibold mb-0.5 ${aktif ? 'text-[#0CF25D]' : tamamlandi ? 'text-[#184A97]' : 'text-slate-400'}`}>
                      {adim.no}
                    </p>
                    <p className={`text-xs font-bold leading-tight mb-1 ${aktif || tamamlandi ? 'text-slate-900' : 'text-slate-400'}`}>
                      {adim.baslik}
                    </p>
                    <p className={`text-[11px] leading-tight ${aktif || tamamlandi ? 'text-slate-500' : 'text-slate-300'}`}>
                      {adim.aciklama}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2">
            {adimlar.map((_, i) => (
              <button
                key={i}
                onClick={() => setAktifAdim(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === aktifAdim ? 'w-6 bg-[#184A97]' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>

        </div>
      </section>
       {/* ══════════════════════════════════════════════
          SECTION 5 – Neden Kolaysoft'ta Kariyer?
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          {/* Başlık */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#184A97] mb-3">
              Neden Kolaysoft'ta Kariyer?
            </h2>
            <p className="text-slate-500 text-sm">Teknoloji, büyüme ve anlam bir arada.</p>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-3 grid-rows-2 gap-4">

            {/* Kart 1 – Teknoloji Odaklı Projeler (geniş, sol üst) */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}
              className="col-span-2 bg-blue-50 rounded-3xl p-8 flex flex-col gap-5 border border-transparent hover:border-[#0CF25D]/50 hover:shadow-glow-green transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[#184A97]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#184A97] mb-2">Teknoloji Odaklı Projeler</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Yapay zeka, e-Dönüşüm, sağlık BT ve kurumsal yazılım alanlarında Türkiye'nin öne gelen projelerinde yer alın.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AI', 'e-Dönüşüm', 'Sağlık BT', 'Kurumsal'].map((t) => (
                  <span key={t} className="text-xs text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Kart 2 – Güçlü Takım Kültürü (küçük, sağ üst) */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
              className="col-span-1 bg-green-50 rounded-3xl p-8 flex flex-col gap-4 border border-transparent hover:border-[#0CF25D]/50 hover:shadow-glow-green transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-emerald-700 mb-2">Güçlü Takım Kültürü</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Flat hiyerarşi, açık iletişim ve destekleyici bir ekip ortamında fikirlerinizi hayata geçirin.
                </p>
              </div>
            </motion.div>

            {/* Kart 3 – Gelişim Alanı (küçük, sol alt) */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
              className="col-span-1 bg-purple-50 rounded-3xl p-8 flex flex-col gap-4 border border-transparent hover:border-[#0CF25D]/50 hover:shadow-glow-green transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-purple-700 mb-2">Gelişim Alanı</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Eğitimler, sertifikasyon destekleri ve konferans katılımlarıyla sürekli öğrenin.
                </p>
              </div>
            </motion.div>

            {/* Kart 4 – Etki Yaratan İşler (geniş, sağ alt) */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}
              className="col-span-2 bg-amber-50 rounded-3xl p-8 flex flex-col gap-4 border border-transparent hover:border-[#0CF25D]/50 hover:shadow-glow-green transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-amber-700 mb-2">Etki Yaratan İşler</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Milyonlarca kullanıcının hayatına dokunan ürünler ve kamu dijitalleşmesine katkı sağlayan çözümler geliştirin.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION SON – Uygun İlanı Bulamadın mı?
      ══════════════════════════════════════════════ */}
      <section className="bg-[#1a3a8f] py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">

          {/* Sol: Metin */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0CF25D]/20 text-[#0CF25D] text-xs font-semibold uppercase tracking-widest mb-7">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              AÇIK BAŞVURU
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Uygun İlanı<br />Bulamadın mı?
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm">
              Özgeçmişini bizimle paylaş, sana uygun yeni fırsatlar oluştuğunda değerlendirme sürecine dahil ol.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Check className="w-3.5 h-3.5 text-[#0CF25D]" strokeWidth={3} />
              Hızlı yanıt garantisi
            </div>
          </motion.div>

          {/* Sağ: Başvuru formu */}
          <BaşvuruFormu />

        </div>
      </section>

    </div>
  );
}
