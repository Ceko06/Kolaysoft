import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, BookOpen, Archive, Truck, CheckSquare, Shield, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'e-Fatura',
    desc: 'GİB portalı ile tam entegrasyon. Toplu fatura gönderimi, otomatik hata kontrolü ve anlık durum takibi.',
    color: 'cyan',
    tag: 'En Popüler',
  },
  {
    icon: BookOpen,
    title: 'e-Defter',
    desc: 'Yevmiye ve kebir defterlerinizi yasal standartlara uygun dijital ortamda tutun ve GİB\'e gönderin.',
    color: 'purple',
    tag: null,
  },
  {
    icon: Archive,
    title: 'e-Arşiv',
    desc: '10 yıllık yasal saklama zorunluluğunu karşılayan güvenli bulut arşiv. Anlık erişim, sınırsız depo.',
    color: 'purple',
    tag: null,
  },
  {
    icon: Truck,
    title: 'e-İrsaliye',
    desc: 'Mal sevkiyatlarınızı dijital irsaliye ile belgeleyin. ERP ve depo sistemlerinizle otomatik entegrasyon.',
    color: 'cyan',
    tag: null,
  },
  {
    icon: CheckSquare,
    title: 'e-Mutabakat',
    desc: 'Tedarikçi ve müşterilerinizle cari hesap mutabakatlarını dijital ortamda hızlıca gerçekleştirin.',
    color: 'orange',
    tag: 'Yeni',
  },
  {
    icon: Shield,
    title: 'e-İmza & Mali Mühür',
    desc: 'Nitelikli elektronik imza ve mali mühür hizmetleriyle belgelerinizi yasal geçerlilikle imzalayın.',
    color: 'purple',
    tag: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const colorMap = {
  cyan: { 
    bg: 'bg-[#184a97]', 
    icon: 'text-white', 
    border: 'hover:border-[#0CF25D]',
    glow: 'hover:shadow-glow-green',
    gradient: 'from-tech-cyan/30 to-transparent',
    badge: 'bg-tech-cyan/20 text-tech-cyan border-tech-cyan/40',
    text: 'text-slate-800',
    textLight: 'text-slate-600',
  },
  purple: { 
    bg: 'bg-[#184a97]', 
    icon: 'text-white', 
    border: 'hover:border-[#0CF25D]',
    glow: 'hover:shadow-glow-green',
    gradient: 'from-tech-purple/30 to-transparent',
    badge: 'bg-tech-purple/20 text-tech-purple border-tech-purple/40',
    text: 'text-slate-800',
    textLight: 'text-slate-600',
  },
  orange: { 
    bg: 'bg-[#184a97]', 
    icon: 'text-white', 
    border: 'hover:border-[#0CF25D]',
    glow: 'hover:shadow-glow-green',
    gradient: 'from-accent-500/30 to-transparent',
    badge: 'bg-accent-500/20 text-accent-500 border-accent-500/40',
    text: 'text-slate-800',
    textLight: 'text-slate-600',
  },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
<section id="solutions" className="section-pad bg-[#184a97] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,58,138,0.4)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(147,51,234,0.15)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-tech-cyan/30 to-transparent" />
      
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Çözümlerimiz
          </div>
          <h2 className="font-cabin font-700 text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>
            e-Dönüşümünüz İçin{' '}
            <span className="text-white">Her Şey</span>
          </h2>
          <p className="text-white/80 leading-relaxed">
            GİB onaylı, güvenli ve ölçeklenebilir altyapımızla tüm yasal gereksinimlerinizi
            zahmetsizce karşılayın.
          </p>
        </motion.div>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-tech-cyan/50 to-transparent mx-auto mb-12" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map(({ icon: Icon, title, desc, color, tag }) => {
            const c = colorMap[color];
            return (
<motion.div
                key={title}
                variants={cardVariants}
                className={`group relative rounded-xl p-6 border border-slate-200 bg-white shadow-card hover:shadow-glow-green ${c.border} transition-all duration-300 cursor-pointer`}
              >
                {tag && (
                  <span className={`absolute top-4 right-4 text-[10px] font-700 uppercase tracking-wide px-2.5 py-1 rounded-full border ${c.badge}`}>
                    {tag}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${c.icon}`} />
                </div>
                <h3 className="font-cabin font-900 text-lg text-[#184a97] mb-2">{title}</h3>
                <p className={`text-sm ${c.textLight} leading-relaxed mb-4`}>{desc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-tech-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>Detaylar</span> <ArrowRight className="w-3.5 h-3.5" />
                </div>

                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
<a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#184a97] font-semibold rounded-xl hover:bg-white/90 transition-all text-sm"
          >
            Tüm Çözümler <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
