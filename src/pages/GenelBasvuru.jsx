import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, ArrowRight, Building2, Upload, Check, ChevronRight,
  Upload as UploadIcon, FileText, Users, Briefcase
} from 'lucide-react';

const kariyerHeader = '/assets/headers/kariyer-header.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.55 }
  }),
};

const alanlar = [
  'Yazılım Geliştirme',
  'Yapay Zeka & Veri Bilimi',
  'Ürün Yönetimi',
  'İnsan Kaynakları',
  'Satış & Pazarlama',
  'Finans & Muhasebe',
  'Operasyon',
  'Tasarım & UX',
  'Müşteri Hizmetleri',
  'Diğer',
];

export default function GenelBasvuru() {
  const [form, setForm] = useState({
    ad: '', email: '', telefon: '', linkedin: '', alan: '', mesaj: '',
  });
  const [dosya, setDosya] = useState(null);
  const [kvkk, setKvkk] = useState(false);
  const [durum, setDurum] = useState('idle');
  const [hata, setHata] = useState('');

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

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
    if (!kvkk) { setHata('KVKK onayı zorunludur.'); return; }
    setDurum('gonderiyor'); setHata('');

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append('pozisyon', 'Genel Başvuru');
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

  return (
    <div className="min-h-screen bg-slate-50 pb-20">

      {/* ── Header ── */}
      <header className="relative min-h-[200px] sm:h-72 overflow-hidden">
        <img
          src={kariyerHeader}
          alt="Genel Başvuru"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />
        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-5"
          >
            <Link to="/" className="text-white/70 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <Link to="/kolaysoft-kariyer" className="text-white/70 hover:text-white transition-colors">Kolaysoft Kariyer</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
            <span className="text-white font-medium">Genel Başvuru</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3"
          >
            Uygun İlanı Bulamadın Mı?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base max-w-xl"
          >
            Özgeçmişini bizimle paylaş, sana uygun yeni fırsatlar oluştuğunda değerlendirme sürecine dahil ol.
          </motion.p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col gap-4 pt-6">

        {/* Geri dön */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to="/kolaysoft-kariyer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#184A97] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> İlanlara Geri Dön
          </Link>
        </motion.div>

        {/* ── Üst Bilgi Kartı ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible"
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-[#184A97]" />
              </div>
              <span className="text-sm font-semibold text-slate-700">Kolaysoft Teknoloji</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              GENEL BAŞVURU
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-[#184A97] mb-2">Uygun İlanı Bulamadın Mı?</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">
            Özgeçmişini bizimle paylaş, sana uygun yeni fırsatlar oluştuğunda değerlendirme sürecine dahil ol.
          </p>

          <div className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
            <div className="w-5 h-5 rounded-full bg-[#184A97] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-[10px] font-bold">i</span>
            </div>
            <p className="text-sm text-slate-600">
              CV havuzuna yapılan başvurular İnsan Kaynakları ekibimiz tarafından değerlendirilir.
            </p>
          </div>
        </motion.div>

        {/* ── Genel Başvuru Formu ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          {durum === 'basarili' ? (
            <div className="flex flex-col items-center gap-4 text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#0CF25D] flex items-center justify-center shadow">
                <Check className="w-8 h-8 text-slate-900" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Başvurun alındı!</h3>
              <p className="text-slate-500 text-sm max-w-sm">
                Özgeçmişin İnsan Kaynakları ekibimize iletildi. Sana uygun bir pozisyon açıldığında seninle iletişime geçeceğiz.
              </p>
              <Link
                to="/kolaysoft-kariyer"
                className="inline-flex items-center gap-2 text-sm text-[#184A97] hover:underline mt-2"
              >
                <ArrowLeft className="w-4 h-4" /> İlanlara Geri Dön
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-xl font-bold text-[#184A97] mb-1">Genel Başvuru Formu</h2>
              <p className="text-slate-500 text-sm mb-7">Bilgilerini paylaş, seni uygun pozisyonlar için değerlendirelim.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Ad + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#184A97]">Ad Soyad</label>
                    <input
                      name="ad" value={form.ad} onChange={handleChange}
                      placeholder="Adınız ve soyadınız"
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#184A97]">E-posta</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="ornek@email.com"
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50"
                    />
                  </div>
                </div>

                {/* Telefon + LinkedIn */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#184A97]">Telefon</label>
                    <input
                      name="telefon" value={form.telefon} onChange={handleChange}
                      placeholder="+90 5XX XXX XX XX"
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#184A97]">LinkedIn / Portfolyo Linki</label>
                    <input
                      name="linkedin" value={form.linkedin} onChange={handleChange}
                      placeholder="linkedin.com/in/..."
                      className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50"
                    />
                  </div>
                </div>

                {/* Çalışmak İstediğin Alan */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#184A97]">Çalışmak İstediğin Alan</label>
                  <div className="relative">
                    <select
                      name="alan" value={form.alan} onChange={handleChange}
                      className="w-full appearance-none border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50 pr-10 text-slate-700"
                    >
                      <option value="">Alan seçin...</option>
                      {alanlar.map((a) => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Kısa Not */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#184A97]">Kısa Not</label>
                  <textarea
                    name="mesaj" value={form.mesaj} onChange={handleChange}
                    placeholder="Kısaca kendinizden ve motivasyonunuzdan bahsedin..."
                    rows={4}
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors resize-none bg-slate-50"
                  />
                </div>

                {/* CV Yükleme */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#184A97]">Özgeçmiş</label>
                  <label
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center gap-2 bg-slate-50 cursor-pointer hover:border-[#184A97] transition-colors"
                  >
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleDosya} className="hidden" />
                    <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                      <Upload className="w-5 h-5 text-[#184A97]" />
                    </div>
                    {dosya
                      ? <p className="text-sm font-semibold text-[#184A97]">{dosya.name}</p>
                      : <>
                          <p className="text-sm font-semibold text-[#184A97]">CV dosyanı yükle</p>
                          <p className="text-xs text-slate-400">PDF veya DOCX formatı</p>
                        </>
                    }
                  </label>
                </div>

                {/* KVKK */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox" checked={kvkk} onChange={(e) => setKvkk(e.target.checked)}
                    className="mt-0.5 accent-[#184A97]"
                  />
                  <span className="text-xs text-slate-500 leading-relaxed">
                    Kişisel verilerimin başvuru süreci kapsamında değerlendirilmesini kabul ediyorum.
                  </span>
                </label>

                {hata && <p className="text-xs text-red-500">{hata}</p>}

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={durum === 'gonderiyor'}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0CF25D] hover:bg-[#0adb52] disabled:opacity-60 text-slate-900 font-bold text-sm rounded-xl transition-colors"
                  >
                    {durum === 'gonderiyor'
                      ? <span className="animate-pulse">Gönderiliyor…</span>
                      : <><span>Başvuruyu Gönder</span> <ArrowRight className="w-4 h-4" /></>
                    }
                  </button>
                  <p className="text-xs text-slate-400">Başvurular İnsan Kaynakları ekibimiz tarafından değerlendirilir.</p>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>

      {/* ── Başvurun Sonrası Ne Olur? ── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 lg:px-10 mt-16"
      >
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#184A97] mb-2">Başvurun Sonrası Ne Olur?</h2>
          <p className="text-slate-500 text-sm">
            Genel başvurun, açık pozisyonlarla eşleşebilmek için İnsan Kaynakları sürecine dahil edilir.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              num: '01',
              icon: FileText,
              title: 'CV Havuzuna Eklenir',
              desc: 'Başvurun yetenek havuzumuzda değerlendirilmek üzere saklanır.',
            },
            {
              num: '02',
              icon: Briefcase,
              title: 'Uygun Pozisyonlarla Eşleştirilir',
              desc: 'Deneyimlerin ve ilgi alanların uygun fırsatlarla karşılaştırılır.',
            },
            {
              num: '03',
              icon: Users,
              title: 'Seninle İletişime Geçilir',
              desc: 'Uygun bir pozisyon oluştuğunda İnsan Kaynakları ekibimiz seninle iletişime geçer.',
            },
          ].map(({ num, icon: Icon, title, desc }, i) => (
            <motion.div
              key={num}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-2xl font-extrabold text-slate-100 leading-none select-none">
                {num}
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-[#184A97]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#184A97] mb-1">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0CF25D]" />
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}
