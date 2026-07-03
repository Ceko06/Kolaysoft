import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Send, CheckCircle,
  Navigation, Shield, Clock, Users, Zap, ExternalLink, ChevronRight,
} from 'lucide-react';

const offices = [
  {
    id: '01',
    type: 'GENEL MERKEZ',
    name: 'Ankara YDA Center',
    address: 'YDA Center Kızılırmak Mahallesi Dumlupınar Bulvarı No:9/A567 Çankaya / Ankara',
    phone: '+90 850 259 90 90',
    email: 'ydacenter@kolaysoft.com.tr',
    image: '/iletişim-görsel/ImageWithFallback (2).png',
    mapsUrl: 'https://maps.google.com/?q=YDA+Center+Ankara',
  },
  {
    id: '02',
    type: 'AR-GE MERKEZİ',
    name: 'Ankara Bilkent Cyberpark',
    address: 'A.T.G.B Üniversiteler Mah. 1605.Cad. No:3 / 201-204 Cyberpark Vakıf Binası, 06800, Bilkent Çankaya / Ankara',
    phone: '+90 850 259 90 90',
    email: 'bilkent@kolaysoft.com.tr',
    image: '/iletişim-görsel/ImageWithFallback (3).png',
    mapsUrl: 'https://maps.google.com/?q=Bilkent+Cyberpark+Ankara',
  },
  {
    id: '03',
    type: 'OPERASYON MERKEZİ',
    name: 'Ankara Farılya Business Center',
    address: 'Kızılırmak Mah. Ufuk Üniversitesi Cad. Farilya Business Center No:8/2 Çankaya / Ankara',
    phone: '+90 850 259 90 90',
    email: 'farliya@kolaysoft.com.tr',
    image: '/iletişim-görsel/ImageWithFallback (4).png',
    mapsUrl: 'https://maps.google.com/?q=Farilya+Business+Center+Ankara',
  },
  {
    id: '04',
    type: 'BÖLGE OFİSİ',
    name: 'Malatya Ofisi',
    address: 'Bulgurlu Mahallesi Kanyon Caddesi Malatya Teknokent Binası Z/6 Battalgazi / Malatya',
    phone: '+90 850 259 90 90',
    email: 'malatya@kolaysoft.com.tr',
    image: '/iletişim-görsel/ImageWithFallback (5).png',
    mapsUrl: 'https://maps.google.com/?q=Malatya+Teknokent',
  },
  {
    id: '05',
    type: 'ULUSLARARASI OFİS',
    name: 'İngiltere Ofisi',
    address: '1st Floor 25-27 Passey Place, London, England, SE9 5DA',
    phone: '+44 20 0000 0000',
    email: 'uk@kolaysoft.com',
    image: '/iletişim-görsel/ImageWithFallback (6).png',
    mapsUrl: 'https://maps.google.com/?q=London+UK',
  },
  {
    id: '06',
    type: 'ULUSLARARASI OFİS',
    name: 'Irak Ofisi',
    address: 'Al-Jumhuriya St., Kirkuk Centrum Mall, Kirkuk, Kirkuk IQ',
    phone: '+964 750 000 00 00',
    email: 'iraq@kolaysoft.com',
    image: '/iletişim-görsel/ImageWithFallback (7).png',
    mapsUrl: 'https://maps.google.com/?q=Kurdistan+Iraq',
  },
];

const mapOffices = [
  { name: 'Ankara YDA Center', address: 'Dumlupınar Bulvarı No:9/A567, Çankaya / Ankara', main: true, query: 'YDA Center Kızılırmak Mahallesi Dumlupınar Bulvarı No:9 Çankaya Ankara', zoom: 16 },
  { name: 'Bilkent Cyberpark', address: '1605.Cad. No:3/201-204, Bilkent, Ankara', query: 'Bilkent Cyberpark Vakıf Binası Üniversiteler Mahallesi Çankaya Ankara', zoom: 16 },
  { name: 'Farilya Business Center', address: 'Ufuk Üni. Cad. No:8/2, Çankaya / Ankara', query: 'Farilya Business Center Kızılırmak Mahallesi Ufuk Üniversitesi Caddesi Çankaya Ankara', zoom: 16 },
  { name: 'Malatya Ofisi', address: 'Kanyon Cad. Teknokent Z/6, Battalgazi / Malatya', query: 'Malatya Teknokent Bulgurlu Mahallesi Battalgazi Malatya', zoom: 16 },
  { name: 'İngiltere Ofisi', address: '1st Floor 25-27 Passey Place, London SE9 5DA', query: '25-27 Passey Place London SE9 5DA', zoom: 16 },
  { name: 'Irak Ofisi', address: 'Al-Jumhuriya St., Kirkuk Centrum Mall, Kirkuk IQ', query: 'Kirkuk Centrum Mall Al-Jumhuriya Street Kirkuk Iraq', zoom: 15 },
];

const badges = [
  { icon: Shield, label: 'KVK Uyumlu' },
  { icon: Clock, label: '24s/7 Yanıt' },
  { icon: Users, label: 'Uzman Ekip' },
  { icon: Zap, label: 'Hızlı Çözüm' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const activeMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapOffices[activeOffice].query
  )}&z=${mapOffices[activeOffice].zoom}&hl=tr&output=embed`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    setSent(true);
  };

  return (
    <div className="bg-white min-h-screen">

      {/* ── PAGE HEADER ── */}
      <header className="pt-28 pb-16 relative overflow-hidden bg-koc-navy">
        {/* Video — sağa yaslanmış */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/iletişim-görsel/ofisler-tanitim.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Karartma katmanı — metin okunabilirliği için */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.5) 60%, rgba(10,22,40,0.3) 100%)',
          }}
        />
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tech-cyan rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-tech-purple rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <span className="text-white font-medium">İletişim</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-5xl md:text-6xl leading-tight mb-4"
          >
            İletişim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl"
          >
            Sorularınız, talepleriniz ve iş birliği önerileriniz için bize ulaşın.
            Uzman ekibimiz en kısa sürede size yanıt verecektir.
          </motion.p>
        </div>
      </header>

      {/* ── HERO (Bizimle İletişime Geçin) ── */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Sol: içerik */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a6fa8] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#64b449]" />
              Enterprise Technology Group
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-5">
              Bizimle <span className="text-[#1a6fa8]">İletişime</span> Geçin
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
              Dijital dönüşüm, sektöre özgü yazılım çözümleri, ödeme teknolojileri ve yapay
              zeka alanlarında küresel ölçekte hizmet sunan bir teknoloji grubu olarak size
              yardımcı olmaktan mutluluk duyarız.
            </p>
            <div className="space-y-4">
              <a href="tel:+90 850 259 90 90" className="flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-xl bg-[#1a6fa8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a6fa8]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#1a6fa8]" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Telefon</p>
                  <p className="text-sm font-bold text-slate-800">+90 850 259 90 90</p>
                </div>
              </a>
              <a href="mailto:info@kolaysoft.com.tr" className="flex items-center gap-4 group">
                <span className="w-10 h-10 rounded-xl bg-[#1a6fa8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1a6fa8]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#1a6fa8]" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">E-Posta</p>
                  <p className="text-sm font-bold text-slate-800">info@kolaysoft.com.tr</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-[#1a6fa8]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#1a6fa8]" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Konum</p>
                  <p className="text-sm font-bold text-slate-800">Ankara, Türkiye — Genel Merkez</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sağ: illüstrasyon */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center justify-center"
          >
            <img
              src="/iletişim-görsel/ImageWithFallback (1).png"
              alt="İletişim İllüstrasyon"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ── OFİSLERİMİZ ── */}
      <section className="px-6 md:px-16 lg:px-24 py-16 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto">

          {/* Başlık satırı */}
          <div className="grid md:grid-cols-2 gap-6 items-end mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Ofislerimiz</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Türkiye'nin kapsamlı coğrafyasından Londra ve Erbil'e uzanan küresel ağımız ile
              her lokasyonda yanınızda olarak iş birliğine hazırız.
            </p>
          </div>

          {/* Ofis kartları — sticky stack */}
          <div>
            {offices.map((office, i) => (
              <div
                key={office.id}
                className="sticky"
                style={{ top: `${120 + i * 12}px`, zIndex: i + 1 }}
              >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col md:flex-row mb-12"
              >
                {/* Numara */}
                <div className="hidden md:flex items-center justify-center w-14 shrink-0 border-r border-slate-100">
                  <span
                    className="text-2xl font-black tabular-nums"
                    style={{ color: '#1a6fa8', opacity: 0.18 }}
                  >
                    {office.id}
                  </span>
                </div>

                {/* Görsel */}
                <div className="md:w-[42%] shrink-0 h-52 md:h-auto overflow-hidden bg-slate-100">
                  <img
                    src={office.image}
                    alt={office.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Detaylar */}
                <div className="flex-1 px-7 py-6 flex flex-col justify-center gap-2">
                  {/* Tip etiketi */}
                  <span
                    className="inline-flex items-center gap-1.5 w-fit text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: '#1a6fa810', color: '#1a6fa8' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a6fa8]" />
                    {office.type}
                  </span>

                  {/* İsim */}
                  <h3 className="text-lg font-bold text-slate-900">{office.name}</h3>

                  {/* Adres / tel / mail */}
                  <div className="space-y-1.5 mt-1">
                    <div className="flex items-start gap-2 text-sm text-slate-500">
                      <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Phone className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-[#1a6fa8] transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Mail className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <a href={`mailto:${office.email}`} className="hover:text-[#1a6fa8] transition-colors">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  {/* Yol tarifi */}
                  <a
                    href={office.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#1a6fa8] hover:underline w-fit"
                  >
                    <Navigation className="w-3 h-3" />
                    Yol Tarifi
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KÜRESEL VARLIĞIMIZ ── */}
      <section className="px-6 md:px-16 lg:px-24 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 mb-10">Küresel Varlığımız</h2>
          <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">

            {/* Harita */}
            <div
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100"
              style={{ height: '420px' }}
            >
              <iframe
                title={`Kolaysoft — ${mapOffices[activeOffice].name}`}
                key={activeOffice}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={activeMapSrc}
              />
            </div>

            {/* Ofis listesi */}
            <div className="space-y-2">
              {mapOffices.map((o, i) => {
                const isActive = activeOffice === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveOffice(i)}
                    aria-pressed={isActive}
                    className={`w-full text-left rounded-xl border px-4 py-3 transition-all cursor-pointer hover:border-[#1a6fa8]/50 hover:shadow-sm ${
                      isActive
                        ? 'bg-white border-[#1a6fa8] shadow-md ring-1 ring-[#1a6fa8]/20'
                        : 'bg-[#f8f9fb] border-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <MapPin className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#64b449]' : 'text-[#1a6fa8]'}`} />
                      <span className="text-sm font-semibold text-slate-800">{o.name}</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-[22px]">{o.address}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto">

          {/* Başlık */}
          <div className="text-center mb-12">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#1a6fa8] mb-3">
              İletişim Formu
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Projenizi Birlikte Hayata Geçirelim
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
              Dijital dönüşüm, sektöre özgü yazılım çözümleri ve yapay zeka alanlarında küresel
              ölçekte hizmet sunan çözümler için formu doldurun, size 24 saat içinde dönüş yapalım.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-[#1a6fa8]" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

            {/* Form kartı */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#64b449] flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Mesajınız Alındı!</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    Uzman ekibimiz en kısa sürede sizinle iletişime geçecek.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm font-semibold text-[#1a6fa8] hover:underline mt-2"
                  >
                    Yeni form gönder
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Ad Soyad <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="İsim Soyisim"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a6fa8] focus:ring-2 focus:ring-[#1a6fa8]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Firma Adı</label>
                      <input
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        placeholder="Şirket Adı"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a6fa8] focus:ring-2 focus:ring-[#1a6fa8]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Telefon</label>
                      <input
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+90 5xx xxx xx xx"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a6fa8] focus:ring-2 focus:ring-[#1a6fa8]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">E-posta</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="ornek@firma.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a6fa8] focus:ring-2 focus:ring-[#1a6fa8]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Mesaj <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Projeniz veya ihtiyaçlarınız hakkında kısaca bilgi verin..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1a6fa8] focus:ring-2 focus:ring-[#1a6fa8]/10 transition-all resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={agreed}
                      onChange={e => setAgreed(e.target.checked)}
                      className="mt-0.5 accent-[#1a6fa8]"
                    />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      <Link
                        to="/kurumsal/kvkk/iletisim-formu-aydinlatma-metni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1a6fa8] hover:underline"
                      >
                        İletişim Formu Aydınlatma Metni
                      </Link>'ni
                      okudum ve kişisel verilerimin işlenmesine izin veriyorum. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white text-sm hover:opacity-90 transition-opacity"
                    style={{ background: 'linear-gradient(135deg, #1a6fa8 0%, #64b449 100%)' }}
                  >
                    <Send className="w-4 h-4" />
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>

            {/* Sağ: illüstrasyon + iletişim bilgisi */}
            <div className="flex flex-col gap-5">
              {/* Kolaysoft ekosistem diyagramı — beyaz arka plan, object-contain */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center p-4" style={{ minHeight: '240px' }}>
                <img
                  src="/iletişim-görsel/CC674F4C-2687-4555-A689-8A49A373E51B 1.png"
                  alt="Kolaysoft Ekosistem"
                  className="w-full object-contain"
                  style={{ maxHeight: '220px' }}
                />
              </div>

              {/* Doğrudan iletişim */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-3">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.18em]">Doğrudan Ulaşın</p>
                <a
                  href="tel:+903120000000"
                  className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-[#1a6fa8] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1a6fa8] shrink-0" />
                  +90 850 259 90 90
                </a>
                <a
                  href="mailto:info@kolaysoft.com.tr"
                  className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-[#1a6fa8] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1a6fa8] shrink-0" />
                  info@kolaysoft.com.tr
                </a>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <MapPin className="w-4 h-4 text-[#1a6fa8] shrink-0 mt-0.5" />
                  Ankara, Türkiye
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
