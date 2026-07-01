import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Truck, CheckSquare, Shield, ArrowRight, Sparkles, Pill, Paperclip, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'e-Dönüşüm',
    desc: 'Gelir İdaresi Başkanlığı lisanslı özel entegratör altyapısıyla işletmenizin tüm e-belge süreçlerini tek platformdan güvenle yönetin. e-Fatura\'dan e-Defter\'e, e-İrsaliye\'den sektörel e-belgelere kadar tüm süreçler tek merkezde yönetilsin.',
    color: 'cyan',
    tag: null,
    href: '/cozumler/e-donusum',
  },
  {
    icon: CheckSquare,
    title: 'KolaysoftPOS',
    desc: 'İşletmelerin ödeme alma ve belge düzenleme süreçlerini tek platformda birleştiren, mevzuata uyumlu yeni nesil POS çözümleri sunuyoruz. Ödeme işlemlerini hızlandırırken elektronik belge süreçlerinin güvenli ve kesintisiz yönetilmesini sağlıyoruz.',
    color: 'purple',
    tag: null,
  },
  {
    icon: Pill,
    title: 'KolayCare',
    desc: 'Eczaneden optiğe, saha operasyonlarından büyük ölçekli kurumsal yapılara kadar farklı sektörlerin ihtiyaçlarına özel yazılım, ödeme sistemleri, e-dönüşüm ve yapay zekâ çözümleri geliştiriyoruz.',
    color: 'cyan',
    tag: null,
  },
  {
    icon: Paperclip,
    title: 'Peyk',
    desc: 'PEYK, kurumların çalışanlarıyla yürüttüğü bildirim, onay, izin ve belge süreçlerini dijital ortama taşıyan teknoloji çözümleri geliştirir.',
    color: 'purple',
    tag: null,
    href: '/cozumler/peyk',
  },
  {
    icon: Sparkles,
    title: 'Deep Black',
    desc: 'Yapay zekâ ve veri teknolojileri alanındaki yetkinliğimizle, kurumların dijital dönüşüm yolculuğunu hızlandıran yenilikçi çözümler geliştiriyoruz. Veriyi anlamlı içgörülere dönüştürerek daha akıllı karar süreçleri oluşturuyoruz.',
    color: 'cyan',
    tag: null,
  },
  {
    icon: Shield,
    title: 'Kırmızı Kurumsal',
    desc: 'Akaryakıttan giyime, teknolojiden beyaz eşyaya kadar binlerce markada avantaj sağlayan dijital platformlar geliştiriyoruz. Kurumların çalışanlarına ve müşterilerine özel indirim, kampanya ve ödül programları sunarak memnuniyet ve bağlılığı artırıyoruz.',
    color: 'purple',
    tag: null,
  },
  {
    icon: Truck,
    title: 'Fixxit',
    desc: 'Araç sahiplerini yerinde hizmet veren profesyonel servislerle buluşturuyoruz. Kullanıcılar araç bilgilerini sisteme girerek bakım, lastik değişimi ve diğer servis ihtiyaçları için hızlıca teklif alabiliyor, hizmet süreçlerini dijital olarak yönetebiliyor.',
    color: 'orange',
    tag: null,
  },
];

const colorMap = {
  cyan: {
    icon: 'text-blue-900',
    gradient: 'from-white/10 to-transparent',
    badge: 'bg-white/20 text-slate-900 border-white/40',
    title: 'text-blue-900 font-bold',
    desc: 'text-slate-700',
  },
  purple: {
    icon: 'text-blue-900',
    gradient: 'from-white/10 to-transparent',
    badge: 'bg-white/20 text-slate-900 border-white/40',
    title: 'text-blue-900 font-bold',
    desc: 'text-slate-700',
  },
  orange: {
    icon: 'text-blue-900',
    gradient: 'from-white/10 to-transparent',
    badge: 'bg-white/20 text-slate-900 border-white/40',
    title: 'text-blue-900 font-bold',
    desc: 'text-slate-700',
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  // Ekran genişliğine göre görünen kart sayısı
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = services.length - visible;
  const timerRef = useRef(null);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), 3000);
  };

  useEffect(() => {
    setCurrent(0);
  }, [visible]);

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), 3000);
    return () => clearInterval(timerRef.current);
  }, [maxIndex]);

  // translateX % is relative to the track element itself, not the container.
  // track width = (services.length / visible) * container => 1 card = 100/services.length % of track
  const stepPct = 100 / services.length;

  return (
    <section id="solutions" className="py-10 relative overflow-hidden bg-white">
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-cabin font-700 text-slate-900 mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>
            Dijitalleşmeniz İçin{' '}
            <span className="text-slate-900">Her Şey</span>
          </h2>
          <p className="text-slate-700 leading-relaxed">
            GİB onaylı, güvenli ve ölçeklenebilir altyapımızla tüm yasal gereksinimlerinizi
            zahmetsizce karşılayın.
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Decorative boomerang */}
          <img
            src="/assets/bumerang-mavi.png"
            alt=""
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 object-contain pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />

          {/* Carousel viewport */}
          <div className="relative" style={{ zIndex: 1, overflow: 'hidden', padding: '16px 4px', margin: '-16px -4px' }}>
            <motion.div
              className="flex"
              animate={{ x: `-${current * stepPct}%` }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ width: `${(services.length / visible) * 100}%` }}
            >
              {services.map(({ icon: Icon, title, desc, color, tag, href }) => {
                const c = colorMap[color];
                return (
                  <div
                    key={title}
                    className="px-1.5"
                    style={{ width: `${100 / services.length}%` }}
                  >
                    <div
                      className="group relative rounded-xl p-6 backdrop-blur-md cursor-pointer overflow-hidden transition-all duration-300 hover:bg-white/[0.15] hover:shadow-[0_0_0_1px_#0CF25D,0_0_24px_rgba(12,242,93,0.25)] h-full"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.15)',
                        paddingBottom: '50px',
                      }}
                    >
                      {href && (
                        <Link to={href} className="absolute inset-0 z-10" aria-label={title} />
                      )}
                      {tag && (
                        <span className={`absolute top-4 right-4 text-[10px] font-700 uppercase tracking-wide px-2.5 py-1 rounded-full border ${c.badge}`}>
                          {tag}
                        </span>
                      )}

                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-12 h-12 ${c.icon}`} style={{ padding: '3px' }} />
                        <h3 className={`font-cabin font-900 text-xl ${c.title}`}>{title}</h3>
                      </div>
                      <p className={`text-sm ${c.desc} leading-relaxed mb-4`}>{desc}</p>

                      <div className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: '#1e40af' }}>
                        <span>Detaylar</span> <ArrowRight className="w-3.5 h-3.5" />
                      </div>

                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8" style={{ zIndex: 1, position: 'relative' }}>
            <button
              onClick={() => { prev(); resetTimer(); }}
              disabled={current === 0}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4 text-blue-700" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); resetTimer(); }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-blue-700' : 'w-2 h-2 bg-blue-200'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); resetTimer(); }}
              disabled={current === maxIndex}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4 text-blue-700" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all text-sm"
            style={{
              background: '#1e40af',
              border: '1px solid #1e40af',
              backdropFilter: 'blur(8px)',
            }}
          >
            Tüm Çözümler
          </a>
        </motion.div>
      </div>
    </section>
  );
}
