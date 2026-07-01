import { useRef, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Building2, MapPin, Briefcase, Clock, ChevronDown,
  Check, Upload, FileText, ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';
import { ilanlar } from '../data/ilanlar';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55 } }),
};

/* ── Başvuru Formu ── */
function BasvuruFormu({ pozisyon }) {
  const [form, setForm] = useState({ ad: '', email: '', telefon: '', linkedin: '', mesaj: '' });
  const [dosya, setDosya] = useState(null);
  const [kvkk, setKvkk] = useState(false);
  const [durum, setDurum] = useState('idle');
  const [hata, setHata] = useState('');

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleDosya = (e) => { const f = e.target.files?.[0]; if (f) setDosya(f); };
  const handleDrop = (e) => { e.preventDefault(); const f = e.dataTransfer.files?.[0]; if (f) setDosya(f); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.ad || !form.email) { setHata('Ad ve e-posta zorunludur.'); return; }
    if (!kvkk) { setHata('KVKK onayı zorunludur.'); return; }
    setDurum('gonderiyor'); setHata('');

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append('pozisyon', pozisyon);
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
      <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4 text-center border border-slate-200">
        <div className="w-16 h-16 rounded-full bg-[#0CF25D] flex items-center justify-center shadow">
          <Check className="w-8 h-8 text-slate-900" strokeWidth={3} />
        </div>
        <h3 className="text-lg font-bold text-slate-800">Başvurun alındı!</h3>
        <p className="text-slate-500 text-sm">İnsan Kaynakları ekibimiz en kısa sürede seninle iletişime geçecek.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8">
      <h2 className="text-xl font-bold text-[#184A97] mb-1">Bu İlana Başvur</h2>
      <p className="text-slate-500 text-sm mb-7">Bilgilerini paylaş, İnsan Kaynakları ekibimiz başvurunu değerlendirsin.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Ad + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">Ad Soyad</label>
            <input
              name="ad" value={form.ad} onChange={handleChange}
              placeholder="Adınız ve soyadınız"
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">E-posta</label>
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
            <label className="text-xs font-semibold text-slate-700">Telefon</label>
            <input
              name="telefon" value={form.telefon} onChange={handleChange}
              placeholder="+90 5XX XXX XX XX"
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-700">LinkedIn / Portfolyo Linki</label>
            <input
              name="linkedin" value={form.linkedin} onChange={handleChange}
              placeholder="linkedin.com/in/..."
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors bg-slate-50"
            />
          </div>
        </div>

        {/* Kısa Not */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Kısa Not</label>
          <textarea
            name="mesaj" value={form.mesaj} onChange={handleChange}
            placeholder="Kısaca kendinizden ve motivasyonunuzdan bahsedin..."
            rows={4}
            className="border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#184A97] transition-colors resize-none bg-slate-50"
          />
        </div>

        {/* CV Yükleme */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-slate-700">Özgeçmiş</label>
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
    </div>
  );
}

/* ── Ana Sayfa ── */
export default function IlanDetay() {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const ilan = ilanlar.find((i) => i.id === id);
  const digerIlanlar = ilanlar.filter((i) => i.id !== id).slice(0, 3);

  if (!ilan) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500">İlan bulunamadı.</p>
        <Link to="/kolaysoft-kariyer" className="text-[#184A97] underline text-sm">İlanlara Geri Dön</Link>
      </div>
    );
  }

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">

      {/* ── Header ── */}
      <header className="relative min-h-[200px] sm:h-72 overflow-hidden">
        <img
          src="/assets/headers/kariyer-header.png"
          alt="İlan Detayı"
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
            <span className="text-white font-medium">{ilan.baslik}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3"
          >
            {ilan.baslik}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
              <Briefcase className="w-3.5 h-3.5" /> {ilan.departman}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" /> {ilan.lokasyon}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/80 bg-white/10 px-3 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5" /> {ilan.tip}
            </span>
          </motion.div>
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

        {/* ── Başlık Kartı ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible"
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Sol */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-[#184A97]" />
                </div>
                <span className="text-sm font-semibold text-slate-600">Kolaysoft Teknoloji</span>
              </div>
              <h1 className="text-3xl font-extrabold text-[#184A97] mb-4">{ilan.baslik}</h1>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Briefcase className="w-3.5 h-3.5" /> {ilan.departman}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                  <MapPin className="w-3.5 h-3.5" /> {ilan.lokasyon}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5" /> {ilan.tip}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-lg">{ilan.aciklama}</p>
            </div>

            {/* Sağ: meta panel */}
            <div className="flex flex-col gap-3 min-w-[160px]">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-4">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Başvuru Durumu</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Aktif İlan
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Çalışma Modeli</p>
                  <span className="inline-flex text-xs font-semibold text-[#184A97] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {ilan.calismaModeli}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Lokasyon</p>
                  <span className="inline-flex text-xs font-semibold text-[#184A97] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                    {ilan.sehir}
                  </span>
                </div>
              </div>
              <button
                onClick={scrollToForm}
                className="w-full flex items-center justify-center gap-2 bg-[#184A97] hover:bg-[#1446b8] text-white font-bold text-sm py-3 rounded-xl transition-colors"
              >
                Başvur <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Pozisyon Hakkında ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <h2 className="text-base font-bold text-[#184A97] mb-3">Pozisyon Hakkında</h2>
          <p className="text-slate-600 text-sm leading-relaxed">{ilan.pozisyonHakkinda}</p>
        </motion.div>

        {/* ── Aranan Nitelikler ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <h2 className="text-base font-bold text-[#184A97] mb-4">Aranan Nitelikler</h2>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {ilan.nitelikler.map((n) => (
              <div key={n} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#0CF25D] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600">{n}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Görev ve Sorumluluklar ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={3} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <h2 className="text-base font-bold text-[#184A97] mb-4">Görev ve Sorumluluklar</h2>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {ilan.gorevler.map((g) => (
              <div key={g} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#184A97] flex-shrink-0 mt-1.5" />
                <span className="text-sm text-slate-600">{g}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Etiketler ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={4} viewport={{ once: true }}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8"
        >
          <h2 className="text-base font-bold text-[#184A97] mb-4">Etiketler</h2>
          <div className="flex flex-wrap gap-2">
            {ilan.etiketler.map((e) => (
              <span key={e} className="text-xs text-slate-600 border border-slate-200 px-3 py-1.5 rounded-full font-medium">
                {e}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Başvuru Formu ── */}
        <div ref={formRef} className="scroll-mt-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={5} viewport={{ once: true }}>
            <BasvuruFormu pozisyon={ilan.baslik} />
          </motion.div>
        </div>

        {/* ── Diğer İlanlar ── */}
        {digerIlanlar.length > 0 && (
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={6} viewport={{ once: true }}
            className="pt-4"
          >
            <h2 className="text-lg font-bold text-[#184A97] mb-1">Diğer İlanları Görüntüle</h2>
            <p className="text-slate-500 text-sm mb-5">Kolaysoft'ta sana uygun olabilecek diğer fırsatları da inceleyebilirsin.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {digerIlanlar.map((d) => (
                <div key={d.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-[#184A97]">{d.baslik}</h3>
                    <span className="text-[10px] font-semibold text-[#184A97] bg-blue-50 px-2 py-0.5 rounded-lg flex-shrink-0">{d.tip}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Briefcase className="w-3 h-3" />{d.departman}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3" />{d.lokasyon}
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{d.aciklama}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.etiketler.slice(0, 2).map((e) => (
                      <span key={e} className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-lg">{e}</span>
                    ))}
                  </div>
                  <Link
                    to={`/ilan/${d.id}`}
                    className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-blue-50 hover:text-[#184A97] text-slate-600 text-xs font-semibold py-2 rounded-xl transition-colors"
                  >
                    Detayları Gör <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Alt CTA Banner ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={7} viewport={{ once: true }}
          className="bg-[#184A97] rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
        >
          <div>
            <p className="text-white font-bold text-sm">Uygun ilanı bulamadın mı?</p>
            <p className="text-white/60 text-xs">Genel başvuru için özgeçmişini bizimle paylaşabilirsin.</p>
          </div>
          <Link
            to="/kolaysoft-kariyer#pozisyonlar"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#0CF25D] hover:bg-[#0adb52] text-slate-900 font-bold text-xs px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            Genel Başvuru Yap <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
