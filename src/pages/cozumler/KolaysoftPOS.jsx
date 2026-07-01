import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, CreditCard, FileText, CheckSquare, LayoutGrid, ShieldCheck, ShoppingBag, Plus, Stethoscope, Briefcase, Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const VIDEO_SRC = '/assets/kolaysoftpos/basari-hikayesi.mp4';

export default function KolaysoftPOS() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img src="/assets/headers/cozumler-header.png" alt="KolaysoftPOS" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white/80">Çözümler</span>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">KolaysoftPOS</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            KolaysoftPOS
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl">
            Yeni Nesil Ödeme ve Belge Teknolojileri
          </motion.p>
        </div>
      </header>

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white">
        <div className="container-wide">
          <div
            className="grid md:grid-cols-2 items-center gap-8"
            style={{ minHeight: '620px' }}
          >

            {/* Sol — metin */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center py-16 md:pr-10 "
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-8 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
                <span className="text-xs font-semibold text-slate-600 tracking-wide">
                  Yeni Nesil Ödeme ve Belge Teknolojileri
                </span>
              </div>

              {/* Başlık */}
              <h1 className="font-extrabold leading-[1.15] mb-6 text-slate-900"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}>
                KolaysoftPOS ile Tüm<br />
                Süreçlerinizi{' '}
                <span className="text-[#184A97]">Tek<br />Platformda Yönetin</span>
              </h1>

              {/* Açıklama */}
              <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-[440px]">
                KolaysoftPOS, işletmelerin satış, ödeme ve elektronik belge
                süreçlerini tek platformda yönetmesini sağlayan yeni nesil bir
                teknolojidir. Sektörel ihtiyaçlara ve mevzuatsal gerekliliklere
                uyum sağlayan esnek yapısıyla işletmelerin operasyonlarını
                kolaylaştırır.
              </p>

              {/* CTA */}
              <a
                href="https://basvuru.kolaysoftpos.com/posbasvuru-home"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all shadow-lg shadow-[#184A97]/25 w-fit"
                style={{ backgroundColor: '#184A97' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1446b8')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#184A97')}
              >
                Hemen Başvur <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Sağ — görsel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center py-10 md:py-0   "
            >
              <img
                src="/assets/kolaysoftpos/pos-cihazı.png"
                alt="KolaysoftPOS Cihazı"
                className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-2xl rounded-t-[20px] mt-20"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HER İŞLETMEYE UYUM
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F8F9FC] ">
        <div className="container-wide">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto "
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide">
                İşletmeler İçin Tasarlandı
              </span>
            </div>

            {/* Başlık */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
              className="font-extrabold text-slate-900 leading-tight mb-5 "
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
            >
              Her İşletmeye Uyum Sağlayan Altyapı
            </motion.h2>

            {/* Açıklama */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
              className="text-slate-500 text-base leading-relaxed "
            >
              Her işletmenin satış süreçleri, vergi yapıları ve operasyonel ihtiyaçları farklıdır.
              KolaysoftPOS, farklı iş modellerine uyum sağlayan altyapısıyla ödeme ve belge
              süreçlerinin hızlı, güvenli ve mevzuata uygun şekilde yönetilmesini sağlar.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PLATFORMUN TEMEL YETENEKLERİ — BENTO GRID
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">

          {/* Başlık */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide">Neler Sunuyor?</span>
            </div>
            <h2 className="font-extrabold text-slate-900" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Platformun Temel Yetenekleri
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="flex flex-col gap-4">

            {/* Üst Sıra */}
            <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">

              {/* Kart 1 — Tek Noktadan Yönetim (pembe) */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl p-8 flex flex-col justify-between min-h-[200px]"
                style={{ backgroundColor: '#FFF0F3' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{ backgroundColor: '#FFD6DF', color: '#C0304A' }}>
                      Merkezi Yönetim
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3">Tek Noktadan Yönetim</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                      Satış, ödeme ve belge süreçlerini tek platform üzerinden yönetme imkânı.
                    </p>
                  </div>
                  {/* İkonlar */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {[CreditCard, FileText, CheckSquare].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#FFD6DF' }}>
                        <Icon className="w-4 h-4" style={{ color: '#C0304A' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Kart 2 — Esnek Kullanım (amber) */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1} viewport={{ once: true }}
                className="rounded-2xl p-8 flex flex-col justify-between min-h-[200px]"
                style={{ backgroundColor: '#FFFBEB' }}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#FEF3C7' }}>
                    <LayoutGrid className="w-5 h-5" style={{ color: '#D97706' }} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Esnek Kullanım Yapısı</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Farklı sektörlerin ihtiyaçlarına göre uyarlanabilen güçlü altyapı.
                  </p>
                </div>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold w-fit"
                  style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}>
                  Çoklu Cihaz
                </span>
              </motion.div>
            </div>

            {/* Alt Sıra */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Kart 3 — Mevzuata Uyumlu (mavi/indigo) */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="rounded-2xl p-8 flex flex-col justify-between min-h-[220px]"
                style={{ backgroundColor: '#EEF2FF' }}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#C7D2FE' }}>
                    <ShieldCheck className="w-5 h-5" style={{ color: '#4338CA' }} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Mevzuata Uyumlu Altyapı</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Sektörel vergi ve belge gerekliliklerine uygun çalışma yapısı.
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['GİB Uyumlu', 'Mali Mühür'].map(tag => (
                    <span key={tag} className="inline-flex px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: '#C7D2FE', color: '#4338CA' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Kart 4 — Güvenli Ödeme (yeşil) */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1} viewport={{ once: true }}
                className="rounded-2xl p-8 flex flex-col justify-between min-h-[220px]"
                style={{ backgroundColor: '#F0FDF4' }}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#BBF7D0' }}>
                    <CreditCard className="w-5 h-5" style={{ color: '#15803D' }} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Güvenli Ödeme Deneyimi</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Kartlı, temassız ve dijital ödeme yöntemleriyle hızlı tahsilat.
                  </p>
                </div>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold w-fit"
                  style={{ backgroundColor: '#BBF7D0', color: '#15803D' }}>
                  PCI DSS
                </span>
              </motion.div>

              {/* Kart 5 — Elektronik Belge (mor) */}
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="visible" custom={0.2} viewport={{ once: true }}
                className="rounded-2xl p-8 flex flex-col justify-between min-h-[220px]"
                style={{ backgroundColor: '#F5F3FF' }}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#DDD6FE' }}>
                    <FileText className="w-5 h-5" style={{ color: '#7C3AED' }} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2">Elektronik Belge Yönetimi</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    e-Fatura, e-Arşiv ve diğer elektronik belge süreçleriyle tam uyum.
                  </p>
                </div>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold w-fit"
                  style={{ backgroundColor: '#DDD6FE', color: '#7C3AED' }}>
                  e-Belge
                </span>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEKTÖRÜNÜZE GÖRE YAPILANDIRIN
      ══════════════════════════════════════════ */}
      <section className="py-20" style={{ backgroundColor: '#F7F9FF' }}>
        <div className="container-wide">

          {/* Başlık */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide">İşletmenizin İhtiyacına Uyum Sağlar</span>
            </div>
            <h2 className="font-extrabold text-slate-900 mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Sektörünüze Göre Yapılandırın
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-3xl">
              KolaysoftPOS, farklı vergi yapıları, ürün grupları ve operasyonel süreçlere sahip işletmeler için geliştirilmiştir. Esnek altyapısı sayesinde
              işletmelerin değişen ihtiyaçlarına kolayca uyum sağlar ve operasyonel verimliliği artırır.
            </p>
          </motion.div>

          {/* Timeline Listesi */}
          {(() => {
            const items = [
              { icon: ShoppingBag, title: 'Perakende İşletmeler', desc: 'Mağaza zincirleri ve bağımsız perakende noktaları için satış ve belge yönetimi.' },
              { icon: Plus,        title: 'Sağlık ve Optik',       desc: 'Klinik, optisyen ve muayenehane süreçlerine uyarlanmış özel iş akışları.' },
              { icon: Stethoscope, title: 'Medikal ve Tıbbi Malzeme', desc: 'Tıbbi cihaz ve malzeme satışında seri numarası takibi ve özel belge gereksinimleri.' },
              { icon: Briefcase,   title: 'Kurumsal İşletmeler',   desc: 'Çok şubeli ve çok kullanıcılı kurumsal yapılar için merkezi yönetim ve raporlama.' },
            ];
            return (
              <div className="flex flex-col max-w-4xl">
                {items.map(({ icon: Icon, title, desc }, i) => (
                  <div key={title} className="flex gap-6">
                    {/* Sol — ikon + bağlantı çizgisi */}
                    <div className="flex flex-col items-center flex-shrink-0" style={{ width: '48px' }}>
                      <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1}
                        viewport={{ once: true }}
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#184A97' }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      {i < items.length - 1 && (
                        <div className="w-px flex-1 my-1" style={{ backgroundColor: '#CBD5E1', minHeight: '20px' }} />
                      )}
                    </div>

                    {/* Sağ — kart */}
                    <motion.div
                      variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1 + 0.05}
                      viewport={{ once: true }}
                      className={`flex-1 bg-white rounded-2xl border border-slate-100 px-6 py-5 shadow-sm flex items-center${i < items.length - 1 ? ' mb-4' : ''}`}
                    >
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-base mb-1">{title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>

      {/* ══════════════════════════════════════════
          BAŞARI HİKAYELERİMİZ
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container-wide">

          {/* Başlık */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white shadow-sm mb-5">
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide">Müşteri Deneyimleri</span>
            </div>
            <h2 className="font-extrabold text-slate-900" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Başarı Hikayelerimiz
            </h2>
          </motion.div>

          {/* Video Thumbnail */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1} viewport={{ once: true }}
            className="relative mx-auto overflow-hidden rounded-2xl cursor-pointer group shadow-xl"
            style={{ maxWidth: '820px', aspectRatio: '16/9', backgroundColor: '#0B1A3B' }}
            onClick={() => setVideoOpen(true)}
          >
            {/* Thumbnail — videonun ilk karesi */}
            <video
              src={VIDEO_SRC}
              className="w-full h-full object-cover"
              preload="metadata"
              muted
              playsInline
            />

            {/* Karartma overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

            {/* Play butonu */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xl"
                style={{ backgroundColor: '#184A97' }}
              >
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{ maxWidth: '900px', aspectRatio: '16/9', backgroundColor: '#000' }}
              onClick={e => e.stopPropagation()}
            >
              <video
                src={VIDEO_SRC}
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
              {/* Kapat butonu */}
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.9)')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)')}
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════
          CTA — HER İŞLETMENİN İŞLEYİŞİ FARKLIDIR
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-28 flex flex-col items-center text-center">

        {/* Arka plan görseli */}
        <img
          src="/assets/kolaysoftpos/CTA-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="container-wide relative z-10 flex flex-col items-center">

          {/* Badge */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span className="w-2 h-2 rounded-full bg-[#0CF25D]" />
              <span className="text-sm font-semibold text-white tracking-wide">KolaysoftPOS</span>
            </div>
          </motion.div>

          {/* Başlık */}
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.1}
            viewport={{ once: true }}
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
          >
            Her İşletmenin<br />
            İşleyişi <span style={{ color: '#0CF25D' }}>Farklıdır.</span>
          </motion.h2>

          {/* Açıklama */}
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.2}
            viewport={{ once: true }}
            className="text-base leading-relaxed mb-10 max-w-lg"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            KolaysoftPOS, farklı sektörlerin satış, ödeme ve elektronik belge
            süreçlerine uyum sağlayan esnek altyapısıyla işletmenizin
            operasyonlarını tek platformda güvenle yönetmenizi sağlar.
          </motion.p>

          {/* CTA Butonu */}
          <motion.a
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.3}
            viewport={{ once: true }}
            href="https://basvuru.kolaysoftpos.com/posbasvuru-home"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-base transition-all mb-10"
            style={{ backgroundColor: '#0CF25D', color: '#0B1A3B' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00d94f')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0CF25D')}
          >
            Hemen Başvur <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Trust badge'leri */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.4}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {['GİB Onaylı', 'ISO 27001', '7/24 Destek'].map(tag => (
              <span key={tag} className="flex items-center gap-2 text-sm font-medium">
                <span style={{ color: '#0CF25D' }}>✓</span> {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
