import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const partners = [
  {
    name: 'Türk Eczacıları Birliği',
    logo: '/assets/partner-logos/Türk Eczacıları Birliği.png',
  },
  {
    name: 'Türk Optisyen ve Gözlükçüler Birliği',
    logo: '/assets/partner-logos/Türk Optisyen ve Gözlükçüler Birliği.png',
  },
  {
    name: 'TEB Bankası',
    logo: '/assets/partner-logos/TEB Bankası.png',
  },
  {
    name: 'Şekerbank',
    logo: '/assets/partner-logos/Şekerbank.png',
  },
  {
    name: 'Pavo',
    logo: '/assets/partner-logos/pavo.png',
  },
  {
    name: 'Selçuk Ecza Deposu',
    logo: '/assets/partner-logos/Selçuk Ecza Deposu.png',
  },
  {
    name: 'Nevzat Ecza Deposu',
    logo: '/assets/partner-logos/Nevzat Ecza Deposu.png',
  },
  {
    name: 'As Ecza Deposu',
    logo: '/assets/partner-logos/As Ecza Deposu.png',
  },
  {
    name: 'Bursa Ecza Koop',
    logo: '/assets/partner-logos/Bursa Ecza Koop.png',
  },
  {
    name: 'Rubik Para',
    logo: '/assets/partner-logos/rubikpara.png',
  },
  {
    name: 'Vakıf Bank',
    logo: '/assets/partner-logos/vakıfbank.png',
  },
];

export default function Partners() {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img
          src="/assets/headers/faaliyetler-header.png"
          alt="Kolaysoft İş Ortaklarımız"
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
            <span className="text-white font-medium">İş Ortaklarımız</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Kolaysoft İş Ortaklarımız
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl"
          >
            Güçlü iş birlikleri ve stratejik ortaklıklarımız
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
          <h2 className="font-cabin font-700 text-slate-900 text-3xl mb-4">Kolaysoft İş Ortaklarımız</h2>
          <p className="text-slate-600">Sektör liderleri ve stratejik ortaklarımız</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-glow-green hover:border-[#0CF25D]/60 transition-all group flex flex-col items-center justify-center gap-4 min-h-[160px]"
            >
              <div className="w-full flex items-center justify-center h-20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-center text-sm font-semibold text-slate-600 group-hover:text-blue-900 transition-colors leading-tight">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
