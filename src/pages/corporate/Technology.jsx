import { motion } from 'framer-motion';
import { Brain, Link2, Cloud, Shield, Zap, Cpu } from 'lucide-react';

const technologies = [
  {
    icon: Brain,
    title: 'Yapay Zekâ',
    desc: 'Geliştirdiğimiz çözümlerde yapay zekâ teknolojilerini kullanarak süreçleri daha hızlı, daha verimli ve daha öngörülebilir hale getiriyoruz. ',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop'
  },
  {
    icon: Link2,
    title: 'Entegrasyon Gücü',
    desc: 'Gelir İdaresi Başkanlığı, Medula, ÜTS ve sektörel sistemlerle tam uyumlu çalışan altyapımızla tüm süreçleri tek noktadan yönetilebilir hale getiriyoruz. ',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
  },
  {
    icon: Cloud,
    title: 'Bulut Altyapı',
    desc: 'Tüm çözümlerimiz bulut tabanlı olarak geliştirilir. Bu sayede kullanıcılarımıza her yerden erişim, yüksek performans ve kesintisiz hizmet sunarız.',
    image: 'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=800&h=600&fit=crop'
  },
  {
    icon: Shield,
    title: 'Güvenlik',
    desc: 'Veri güvenliği en öncelikli konularımızdan biridir. Tüm sistemlerimiz, ulusal mevzuatlara ve güvenlik standartlarına uygun olarak geliştirilir ve korunur.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
  },
];

export default function Technology() {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-cabin font-800 text-slate-900 text-4xl md:text-5xl leading-tight mb-6">
          GÜÇLÜ TEKNOLOJİ ALTYAPIMIZ
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mb-8">
          Kolaysoft Teknoloji'nin geliştirdiği çözümlerin arkasında güçlü, ölçeklenebilir ve sürekli gelişen bir teknoloji altyapısı yer alır.
          İş süreçlerini kolaylaştıran bu altyapı; hız, güvenlik ve kesintisiz entegrasyon üzerine kuruludur.
        </p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-6">
        {technologies.map(({ icon: Icon, title, desc, image }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden h-80 shadow-card hover:shadow-glow-green transition-shadow"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(30, 64, 175, 0.9), rgba(0, 0, 0, 0)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 to-tech-blue/10"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <div>
                <h3 className="font-cabin font-bold text-white text-xl mb-3">{title}</h3>
                <p className="text-white/90 leading-relaxed">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center"
      >
        <Zap className="w-12 h-12 text-tech-cyan mx-auto mb-4" />
        <h3 className="font-cabin font-700 text-white text-2xl mb-3">Teknolojimiz, karmaşık süreçleri sadeleştirmek için var.</h3>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Çünkü biz teknolojiyi değil, kolaylığı büyütüyoruz.
        </p>
      </motion.div>
    </div>
  );
}
