import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Activity } from 'lucide-react';


const trust = ['GİB Onaylı', 'ISO 27001', '10.000+ Müşteri', '7/24 Destek'];

const floatVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-[var(--nav-height)] bg-slate-50">

      {/* ─── Arkaplan Videosu ─────────────────────────────────────── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ willChange: 'transform' }}
      >
        <source src="/Hero-Video3.mp4" type="video/mp4" />
      </video>

      {/* Video üstüne gradient overlay — içeriğin okunabilir kalması için */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent z-[1]" />
      {/* ──────────────────────────────────────────────────────────── */}

      {/* Orijinal gradient katmanları (z-[2]'ye taşındı) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(6,182,212,0.08)_0%,_transparent_50%)] z-[2]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(147,51,234,0.06)_0%,_transparent_50%)] z-[2]" />

      <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-tech-cyan/10 rounded-full blur-3xl animate-pulse-slow z-[2]" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-pulse-slow z-[2]" style={{ animationDelay: '2s' }} />

      <div className="container-wide relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 lg:py-20">
        <div className="lg:col-span-7">
          <motion.div
            custom={0}
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-cyan/10 border border-tech-cyan/20 text-white text-xs font-semibold tracking-wider">
              <Zap className="w-3.5 h-3.5" /> Türkiye'nin Lider e-Dönüşüm Grubu
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            className="font-cabin font-700 text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}
          >
            İşletmenizi{' '}Dijital{' '}<br></br>
            
           <span className="text-white font-bold"> Geleceğe Taşıyın</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            className="text-white leading-relaxed mb-8 max-w-xl"
            style={{ fontSize: 'clamp(1rem, 1.3vw, 1.125rem)' }}
          >
            e-Fatura, e-Defter, e-Arşiv ve daha fazlası. GİB onaylı entegrasyonlarla
            yasal uyumu sağlayın, operasyonel verimliliğinizi artırın.
          </motion.p>

          <motion.div
            custom={3}
            variants={floatVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="/kurumsal/biz-kimiz"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-tech-cyan hover:bg-tech-blue text-white font-semibold rounded-xl transition-all duration-200 text-sm shadow-glow-cyan hover:shadow-lg"
            >
              Daha Fazlası 
            </a>

          </motion.div>


        </div>

              </div>
    </section>
  );
}