import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, ChevronRight, Zap, Shield, Globe, FileText, BookOpen, Paperclip, Archive, Pill } from 'lucide-react';

const companies = [
  {
    name: 'KolayCare',
    description: 'Eczane ve sağlık sektörü için dijital çözümler',
    icon: Pill,
    logo: '/assets/our-companies/kolaycare-placeholder.svg',
    color: 'cyan',
    tag: null
  },
  {
    name: 'FİXXİT',
    description: 'Finansal teknoloji ve ödeme sistemleri',
    icon: Shield,
    logo: '/assets/our-companies/fixxit.png',
    color: 'purple',
    tag: null
  },
  {
    name: 'Kırmızı Kurumsal',
    description: 'Kurumsal yazılım ve danışmanlık',
    icon: Building2,
    logo: '/assets/our-companies/kırmızı-kurumsal.png',
    color: 'purple',
    tag: null
  }
];

const colorMap = {
  cyan: {
    bg: 'bg-white/10',
    icon: 'text-blue-900',
    gradient: 'from-white/10 to-transparent',
    badge: 'bg-white/20 text-slate-900 border-white/40',
    title: 'text-blue-900 font-bold',
    desc: 'text-slate-700',
  },
  purple: {
    bg: 'bg-white/10',
    icon: 'text-blue-900',
    gradient: 'from-white/10 to-transparent',
    badge: 'bg-white/20 text-slate-900 border-white/40',
    title: 'text-blue-900 font-bold',
    desc: 'text-slate-700',
  },
};

export default function Companies() {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img
          src="/assets/headers/sirketler-header.png"
          alt="Kolaysoft Şirketler"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />
        
        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Şirketler</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Kolaysoft Şirketlerimiz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl"
          >
            Teknoloji, yazılım ve danışmanlık alanlarında hizmet veren grup şirketlerimiz
          </motion.p>
        </div>
      </header>

      <div className="container-wide py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cabin font-700 text-slate-900 text-3xl mb-4">Kolaysoft Grup Şirketleri</h2>
          <p className="text-slate-600">Dijital dönüşümün öncüsü olarak farklı sektörlerde hizmet veren şirketlerimiz</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((company, index) => {
            const Icon = company.icon;
            const c = colorMap[company.color];
            return (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-glow-green hover:border-[#0CF25D]/60 transition-all group flex flex-col items-center justify-center gap-4 min-h-[160px]"
              >
                <div className="w-full flex items-center justify-center h-20">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-16 max-w-full object-contain transition-all duration-300"
                    />
                  ) : (
                    <Icon className={`w-10 h-10 ${c.icon} group-hover:text-tech-cyan transition-colors`} />
                  )}
                </div>
                <p className="text-center text-sm font-semibold text-slate-600 group-hover:text-blue-900 transition-colors leading-tight">
                  {company.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
