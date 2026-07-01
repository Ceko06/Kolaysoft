import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const logos = [
  'aytemiz.png','bilkent-holding.png','canakkale.png','cargo-partner-logo.png',
  'cengiz.png','cicek-sepeti-logo.png','eker.png','faurecia-vector-logo-1.png',
  'foreks-logo.png','halkbank.png','iga.png','ikea.png','interpress.png',
  'Ipsos.png','limak.png','Majorel.png','maxx-royal.png','Rigips_Logo.png',
  'sanayi-1.png','secil.png','tarim-ve-orman-bakanligi.png','TDV.png',
  'teleperformance.png','tepe-savunma-1.png','Vodafone-Logo-675x380-2.png',
];

const logoModules = import.meta.glob('../../assets/ticker-logos/*', { eager: true, query: '?url', import: 'default' });

function getLogoUrl(filename) {
  const url = logoModules[`../../assets/ticker-logos/${filename}`];
  return url || null;
}

export default function TrustStrip() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-10 overflow-hidden border-b border-slate-100">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8 px-4">
        10.000'den fazla işletme Kolaysoft'a güveniyor
      </p>
      <div className="relative">
        <motion.div
          className="flex items-center gap-0 w-max"
          animate={{ x: ['0px', '-50%'] }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        >
          {[...logos, ...logos].map((file, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-24 w-48 flex items-center justify-center cursor-pointer"
              onClick={() => navigate('/referanslar')}
            >
              <img
                src={getLogoUrl(file)}
                alt={file.replace(/\.[^.]+$/, '')}
                className="max-h-16 max-w-[200px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
