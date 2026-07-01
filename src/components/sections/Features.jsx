import { motion } from 'framer-motion';
import { Zap, Lock, HeadphonesIcon, RefreshCw, BarChart3, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Hızlı Entegrasyon',
    desc: 'Mevcut ERP ve muhasebe yazılımlarınıza ortalama 3 günde entegre olun. REST API ve hazır bağlayıcılar.',
  },
  {
    icon: Lock,
    title: 'Banka Güvenliği',
    desc: 'AES-256 şifreleme, ISO 27001 sertifikalı veri merkezleri ve çok faktörlü kimlik doğrulama.',
  },
  {
    icon: HeadphonesIcon,
    title: '7/24 Destek',
    desc: 'Mevzuat güncellemelerinde proaktif bilgilendirme. Uzman ekibimiz her zaman yanınızda.',
  },
  {
    icon: RefreshCw,
    title: 'Otomatik Güncelleme',
    desc: 'GİB mevzuat değişiklikleri sistemlerinize otomatik yansır. Manuel müdahale gerekmez.',
  },
  {
    icon: BarChart3,
    title: 'Gelişmiş Raporlama',
    desc: 'Fatura bazlı analizler, trend raporları ve özelleştirilebilir dashboard. Karar vermeyi kolaylaştırın.',
  },
  {
    icon: Layers,
    title: 'Çoklu Entegrasyon',
    desc: 'SAP, Logo, Mikro, Netsis, Nebim ve 50+ ticari yazılımla hazır entegrasyon. API ile sınırsız bağlantı.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad bg-[#184a97] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(30,58,138,0.5)_0%,_transparent_60%)]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-tech-cyan/5 blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky heading */}
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-white mb-3"
            >
              Neden Kolaysoft?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-cabin font-800 text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Rakiplerimizden fark yaratan{' '}
              <span className="text-white">6 temel avantaj</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 leading-relaxed mb-8"
            >
              Teknoloji, hız ve güven üzerine kurulu altyapımız; mevzuat uyumunu
              zahmetsiz, operasyonu verimli kılar.
            </motion.p>

            {/* Mini visual */}
            <div className="bg-white/5 rounded-2xl border border-white/10 shadow-soft p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-white">Sistem Durumu: Aktif</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: 'e-Fatura Servisi', pct: 99 },
                  { label: 'e-Defter Servisi', pct: 100 },
                  { label: 'GİB Bağlantısı', pct: 97 },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">{label}</span>
                      <span className="font-semibold text-white">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-koc-navy rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: feature list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="space-y-5"
          >
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="flex gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/20 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-tech-cyan group-hover:border-tech-cyan transition-all duration-300">
                  <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-cabin font-700 text-white mb-1">{title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

