import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Globe, Zap, TrendingUp, Mail, Phone, Send, ChevronRight } from 'lucide-react';
const kariyerHeader = '/assets/headers/kariyer-header.png';

/* ── animated counter – RAF + ease-out ── */
function Counter({ target, suffix = '+', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  const frameRef = useRef(null);

  useEffect(() => {
    if (!inView || !target) return;
    let startTime = null;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function tick(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedValue = Math.round(easeOutQuart(progress) * target);
      setCount(easedValue);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

/* ── kariyer fotoğrafları ── */
const kariyerImages = [
  '/assets/career/kariyer (1).jpeg',
  '/assets/career/kariyer (2).jpeg',
  '/assets/career/kariyer (3).jpeg',
  '/assets/career/kariyer (4).jpeg',
  '/assets/career/kariyer (5).jpeg',
  '/assets/career/kariyer (6).jpeg',
  '/assets/career/kariyer (7).jpeg',
  '/assets/career/kariyer (8).jpeg',
  '/assets/career/kariyer (9).jpeg',
  '/assets/career/kariyer (10).jpeg',
  '/assets/career/kariyer (11).jpeg',
  '/assets/career/kariyer (12).jpeg',
  '/assets/career/kariyer (13).jpeg',
  '/assets/career/kariyer (14).jpeg',
  '/assets/career/kariyer (15).jpeg',
  '/assets/career/kariyer (16).jpeg',
  '/assets/career/kariyer (17).jpeg',
];

/* ── dikey sonsuz kaydırma kolonları ── */
function TickerColumn({ images: imgs, direction = 'up' }) {
  const trackRef = useRef(null);
  const doubled = [...imgs, ...imgs];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame;
    let pos = direction === 'up' ? 0 : -(track.scrollHeight / 2);
    const step = direction === 'up' ? -0.45 : 0.45;
    const half = track.scrollHeight / 2;
    function animate() {
      pos += step;
      if (direction === 'up' && pos <= -half) pos = 0;
      if (direction === 'down' && pos >= 0) pos = -half;
      track.style.transform = `translateY(${pos}px)`;
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [direction]);

  return (
    <div className="relative overflow-hidden" style={{ height: '520px' }}>
      {/* fade top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10"
        style={{ height: 72, background: 'linear-gradient(to bottom, #f8fafc 0%, transparent 100%)' }} />
      {/* fade bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ height: 72, background: 'linear-gradient(to top, #f8fafc 0%, transparent 100%)' }} />
      <div ref={trackRef} className="flex flex-col gap-3 will-change-transform">
        {doubled.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl flex-shrink-0"
            style={{ height: i % 3 === 0 ? '190px' : i % 3 === 1 ? '155px' : '175px' }}>
            <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Kariyer() {
  return (
    <div className="bg-white">

      {/* ══════════════════════════════════════════════
          HEADER – Diğer sayfalarla aynı pattern
      ══════════════════════════════════════════════ */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img
          src={kariyerHeader}
          alt="Kolaysoft Kariyer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay – aynı referanslar sayfasındaki renk */}
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />

        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Çalışma Hayatı</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Birlikte Geleceği Geliştiriyoruz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl"
          >
            Kolaysoft Teknoloji'de yalnızca yazılım üretmiyoruz; milyonlarca insanın günlük
            hayatına dokunan teknolojiler geliştiriyoruz.
          </motion.p>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          SECTION 1 – Birlikte Geleceği Geliştiriyoruz
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0CF25D]/15 text-[#0a9e3c] text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CF25D]" />
              KARİYER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Birlikte Geleceği{' '}
              <span className="text-[#184A97]">Geliştiriyoruz</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Kolaysoft Teknoloji'de yalnızca yazılım üretmiyoruz; milyonlarca insanın günlük
              hayatına dokunan teknolojiler geliştiriyoruz. Yapay zekadan e-Dönüşüm'e, sağlık
              teknolojilerinden insan kaynakları çözümlerine kadar birçok alanda geleceği
              şekillendiren projeler üzerinde çalışıyoruz.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=480&fit=crop"
                alt="Kolaysoft ekibi"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 – Çalışma Hayatımız
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184A97]/10 text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-6">
              + KÜLTÜR & YAŞAM
            </span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-4">
              Çalışma<br />
              <span className="text-[#184A97]">Hayatımız</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Güçlü bir ekip ruhu, sürekli gelişim ve iş-yaşam dengesiyle şekillenen bir çalışma
              kültürü inşa ediyoruz. Yapay zekâ atölyelerinden spor etkinliklerine, kutlamalardan
              gönüllülük projelerine kadar birlikte büyüyoruz.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Yapay Zekâ & Teknoloji Atölyeleri',
                'Gönüllülük ve Sosyal Sorumluluk',
                'Spor Faaliyetleri & Sağlıklı Yaşam',
                'Şirket İçi Etkinlikler & Kutlamalar',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#0CF25D] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/kolaysoft-kariyer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#184A97] text-white text-sm font-semibold hover:bg-[#1446b8] transition-colors"
            >
              Ekibimize Katılın <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Ticker columns */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="order-1 md:order-2 grid grid-cols-2 gap-3"
          >
            <TickerColumn images={kariyerImages.filter((_, i) => i % 2 === 0)} direction="up" />
            <TickerColumn images={kariyerImages.filter((_, i) => i % 2 !== 0)} direction="down" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 – Neden Kolaysoft?
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0CF25D]/10 text-[#0CF25D] text-xs font-semibold uppercase tracking-widest mb-4">
              + AVANTAJLARIMIZ
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Neden <span className="text-[#184A97]">Kolaysoft?</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md">
              Teknoloji liderliği, kariyer gelişimi ve güçlü bir ekip kültürünü bir arada sunan bir
              çalışma ortamı yaratıyoruz.
            </p>
          </motion.div>

          {/* Timeline list */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[24px] top-6 bottom-6 w-[2px] bg-[#184A97]/20" />

            <div className="space-y-6">
            {[
              {
                icon: Zap,
                title: 'Teknolojiye Yön Veren Projeler',
                desc: "Türkiye'nin dijital dönüşümüne katkı sağlayan ürünler geliştiriyoruz.",
              },
              {
                icon: TrendingUp,
                title: 'Sürekli Gelişim Kültürü',
                desc: 'Eğitimler, sertifika programları ve yapay zekâ atölyeleriyle ekiplerimizin gelişimini destekliyoruz.',
              },
              {
                icon: Users,
                title: 'Güçlü Ekip Ruhu',
                desc: 'Farklı disiplinlerden uzmanların birlikte ürettiği dinamik bir çalışma ortamı sunuyoruz.',
              },
              {
                icon: Globe,
                title: 'Uluslararası Vizyon',
                desc: "Türkiye'den dünyaya açılan projeler ve global iş birlikleri geliştiriyoruz.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="flex items-center gap-6"
              >
                {/* Circle icon on timeline */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#184A97] flex items-center justify-center shadow-lg shadow-[#184A97]/30">
                  <Icon className="w-5 h-5 text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm hover:shadow-glow-green transition-shadow">
                  <h3 className="text-base font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 – Rakamlarla Kolaysoft'ta Yaşam
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#184A97]/10 text-[#184A97] text-xs font-semibold uppercase tracking-widest mb-4">
              + RAKAMLARLA
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Kolaysoft'ta <span className="text-[#184A97]">Yaşam</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-sm mx-auto">
              Rakamlar, Kolaysoft'un teknoloji alanındaki büyümesini ve küresel etkisini yansıtıyor.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 200, suffix: '+', label: 'Uzman Çalışan', isText: false },
              { value: 7,   suffix: '+', label: 'Ofis Lokasyonu', isText: false },
              { value: 20,  suffix: '+', label: 'Teknoloji Markası', isText: false },
              { value: null, display: 'Milyonlarca', label: 'Kullanıcıya Ulaşan Çözümler', isText: true },
            ].map(({ value, suffix, label, display, isText }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-extrabold text-[#184A97] mb-2 leading-tight">
                  {isText ? display : <Counter target={value} suffix={suffix} />}
                </div>
                <p className="text-slate-500 text-sm">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 5 – CTA / Özgeçmiş Gönder
      ══════════════════════════════════════════════ */}
      <section id="basvur" className="py-24 bg-[#0d1b4b] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#184A97]/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#0CF25D]/10 blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-widest mb-6">
              + KARİYER FIRSATLARI
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Kariyer Yolculuğunuza{' '}
              <span className="text-white">Kolaysoft'ta Devam Edin</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Farklı uzmanlık alanlarında sürekli büyüyen organizasyonumuz için yetenek
              havuzumuzu güçlendiriyoruz. Kariyer fırsatlarımız hakkında bilgi almak ve
              özgeçmişinizi değerlendirmek üzere bizimle iletişime geçebilirsiniz.
            </p>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@kolaysoft.com.tr
              </span>
              <span className="hidden sm:block">·</span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +90 850 259 07 46
              </span>
            </div>

            <a
              href="genel-basvuru"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0CF25D] hover:bg-[#0adb52] text-slate-900 font-semibold text-base transition-colors shadow-lg shadow-[#0CF25D]/30"
              style={{ borderRadius: 14 }}
            >
              <Send className="w-4 h-4" />
              Özgeçmiş Gönder
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
