import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Users, FileText, Zap, Clock, TrendingUp, Shield } from 'lucide-react';

const stats = [
  { value: 10000, suffix: '+', label: 'Aktif Müşteri', sub: '7 yıldır büyüyen ağımız', icon: Users },
  { value: 148, suffix: 'M+', label: 'İşlenen Fatura', sub: 'Yıllık toplam işlem hacmi', icon: FileText },
  { value: 99.9, suffix: '%', label: 'Sistem Uptime', sub: 'SLA garantili altyapı', icon: Zap },
  { value: 4, suffix: 'dk', label: 'Ortalama Onay', sub: 'GİB yanıt süresi', icon: Clock },
];

const gradient = [
  'from-tech-cyan to-tech-blue',
  'from-tech-purple to-pink-500',
  'from-accent-500 to-orange-500',
  'from-emerald-400 to-teal-400',
];

function AnimatedNumber({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, value, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, value, motionVal]);

  const display = useTransform(motionVal, (v) => {
    if (value === 99.9) return v.toFixed(1);
    return Math.round(v).toLocaleString('tr-TR');
  });

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="section-pad bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-purple/30 to-transparent" />
      
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-tech-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-[10%] w-72 h-72 bg-tech-purple/5 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, suffix, label, sub, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0CF25D]/20 to-[#0CF25D]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass-card rounded-2xl p-6 border border-slate-200 hover:border-[#0CF25D]/80 hover:shadow-glow-green transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient[i]} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="font-cabin font-700 text-slate-800 leading-none mb-2"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                  <AnimatedNumber value={value} suffix={suffix} />
                </p>
                <p className="font-semibold text-slate-800 mb-1">{label}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
