import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Quote, Star, ChevronRight } from 'lucide-react';
import halkbankPng from '../assets/references/halkbank.png';
import referanslarHeader from '/assets/headers/referanslar-header.png';

const baseUrl = 'https://www.kolaysoft.com.tr/wp-content/uploads/2023/01/';

const references = [
  { name: '61 Medya', logo: `${baseUrl}61-medya.png`, sector: 'Medya' },
  { name: 'Afyonkarahisar Barosu', logo: `${baseUrl}afyonkarahisar.webp`, sector: 'Baro' },
  { name: 'AGT', logo: `${baseUrl}agt.png`, sector: 'Üretim' },
  { name: 'Ak Gıda', logo: `${baseUrl}Ak_gida-logo2.png`, sector: 'Gıda' },
  { name: 'Altur', logo: `${baseUrl}altur.webp`, sector: 'Lojistik' },
  { name: 'Aktif Bank', logo: `${baseUrl}aktif-bank-1.webp`, sector: 'Banka' },
  { name: 'Akar Tekstil', logo: `${baseUrl}akar-tekstil-logo-1.png`, sector: 'Tekstil' },
  { name: 'Alimar', logo: `${baseUrl}alimar.png`, sector: 'Gıda' },
  { name: 'Armco', logo: `${baseUrl}armco-1.png`, sector: 'Üretim' },
  { name: 'Armin Elektrik', logo: `${baseUrl}armin-elektrik-logo-web.png`, sector: 'Elektrik' },
  { name: 'Andeva', logo: `${baseUrl}andeva.png`, sector: 'Gıda' },
  { name: 'Ankara Barosu', logo: `${baseUrl}ankara_barosu-logo.webp`, sector: 'Baro' },
  { name: 'Arslanlı', logo: `${baseUrl}arslanli.png`, sector: 'Gıda' },
  { name: 'Ateş Çelik', logo: `${baseUrl}ates-celik.png`, sector: 'Üretim' },
  { name: 'Aytemiz', logo: `${baseUrl}aytemiz.png`, sector: 'Enerji' },
  { name: 'Bilkent Holding', logo: `${baseUrl}bilkent-holding.png`, sector: 'Holding' },
  { name: 'Borovali', logo: `${baseUrl}borovali.png`, sector: 'Üretim' },
  { name: 'Cengiz', logo: `${baseUrl}cengiz.webp`, sector: 'İnşaat' },
  { name: 'BP Danışmanlık', logo: `${baseUrl}bp-danismanlik.png`, sector: 'Danışmanlık' },
  { name: 'Cargo Partner', logo: `${baseUrl}cargo-partner-logo.png`, sector: 'Lojistik' },
  { name: 'Çanakkale', logo: `${baseUrl}canakkale.png`, sector: 'Gıda' },
  { name: 'Çakır', logo: `${baseUrl}Cakir.png`, sector: 'Gıda' },
  { name: 'Çiçek Sepeti', logo: `${baseUrl}cicek-sepeti-logo.webp`, sector: 'E-Ticaret' },
  { name: 'Ege Tarımsal', logo: `${baseUrl}ege-tarimsal.png`, sector: 'Tarım' },
  { name: 'Doğan Tel Org', logo: `${baseUrl}dogan-tel-orgu.png`, sector: 'Üretim' },
  { name: 'Domino Tekstil', logo: `${baseUrl}domino-tekstil.png`, sector: 'Tekstil' },
  { name: 'Eker', logo: `${baseUrl}eker.webp`, sector: 'Gıda' },
  { name: 'Eti Bakır', logo: `${baseUrl}etibakirb.png`, sector: 'Maden' },
  { name: 'Faurecia', logo: `${baseUrl}faurecia-vector-logo-1.webp`, sector: 'Otomotiv' },
  { name: 'Filmon', logo: `${baseUrl}filmon.webp`, sector: 'Medya' },
  { name: 'Fimaks', logo: `${baseUrl}fimaks.png`, sector: 'Gıda' },
  { name: 'Foreks', logo: `${baseUrl}foreks-logo.png`, sector: 'Finans' },
  { name: 'Halkbank', logo: halkbankPng, sector: 'Banka' },
  { name: 'Hasvet', logo: `${baseUrl}hasvet.png`, sector: 'Üretim' },
  { name: 'Hatay Barosu', logo: `${baseUrl}hataybarosu.webp`, sector: 'Baro' },
  { name: 'Göztepe', logo: `${baseUrl}Goztepe.png`, sector: 'Gıda' },
  { name: 'İGA', logo: `${baseUrl}iga.webp`, sector: 'İnşaat' },
  { name: 'IKEA', logo: `${baseUrl}ikea.webp`, sector: 'Perakende' },
  { name: 'Haus Makina', logo: `${baseUrl}haus-makina.png`, sector: 'Makine' },
  { name: 'Interpress', logo: `${baseUrl}interpress.webp`, sector: 'Medya' },
  { name: 'İstikamet', logo: `${baseUrl}istikamet.png`, sector: 'Gıda' },
  { name: 'Ipsos', logo: `${baseUrl}Ipsos.png`, sector: 'Danışmanlık' },
  { name: 'İSİTSAD', logo: `${baseUrl}isitsad-1.webp`, sector: 'Dernek' },
  { name: 'İzdoğa', logo: `${baseUrl}izdoga.webp`, sector: 'Gıda' },
  { name: 'Kolarc', logo: `${baseUrl}kolarc.png`, sector: 'Otomotiv' },
  { name: 'Kaltun', logo: `${baseUrl}kaltun-logo.png`, sector: 'Gıda' },
  { name: 'Kurmay Yayınları', logo: `${baseUrl}kurmay-yayinlari-logo.png`, sector: 'Yayıncılık' },
  { name: 'Limak', logo: `${baseUrl}limak.webp`, sector: 'İnşaat' },
  { name: 'Kuzey Shipyard', logo: `${baseUrl}kuzey-shipyard.png`, sector: 'Gemi' },
  { name: 'Maxx Royal', logo: `${baseUrl}maxx-royal.webp`, sector: 'Otel' },
  { name: 'Maya', logo: `${baseUrl}maya.png`, sector: 'Gıda' },
  { name: 'Majorel', logo: `${baseUrl}Majorel.png`, sector: 'Çağrı Merkezi' },
  { name: 'Midpoint', logo: `${baseUrl}midpoint-2.webp`, sector: 'Otel' },
  { name: 'MCG', logo: `${baseUrl}mcglogo.png`, sector: 'Danışmanlık' },
  { name: 'Mitas', logo: `${baseUrl}mitas-2.webp`, sector: 'Üretim' },
  { name: 'Nemport', logo: `${baseUrl}nemport-1.webp`, sector: 'Lojistik' },
  { name: 'Sanayi', logo: `${baseUrl}sanayi-1.webp`, sector: 'Üretim' },
  { name: 'Özgün Gıda', logo: `${baseUrl}ozgun-gida-logo.png`, sector: 'Gıda' },
  { name: 'Nevşehir Barosu', logo: `${baseUrl}nevsehir_barosu.webp`, sector: 'Baro' },
  { name: 'Secil', logo: `${baseUrl}secil.webp`, sector: 'Gıda' },
  { name: 'Samsun Avdan', logo: `${baseUrl}Samsun-Avdan.jpg`, sector: 'Gıda' },
  { name: 'Öztürk Enerji', logo: `${baseUrl}ozturk-enerji.png`, sector: 'Enerji' },
  { name: 'Rigips', logo: `${baseUrl}Rigips_Logo.png`, sector: 'Üretim' },
  { name: 'Sifar İlaç', logo: `${baseUrl}Sifar-Ilac.png`, sector: 'Sağlık' },
  { name: 'Sefine Shipyard', logo: `${baseUrl}sefine-shipyard.png`, sector: 'Gemi' },
  { name: 'Seher Gıda', logo: `${baseUrl}Seher-Gida-1.png`, sector: 'Gıda' },
  { name: 'Solarkol', logo: `${baseUrl}solarkol.png`, sector: 'Enerji' },
  { name: 'Tarım ve Orman Bakanlığı', logo: `${baseUrl}tarim-ve-orman-bakanligi.png`, sector: 'Kamu' },
  { name: 'SMYLO Çağrı Merkezi', logo: `${baseUrl}SMYLO-Cagri-Merkezi.png`, sector: 'Çağrı Merkezi' },
  { name: 'TDV', logo: `${baseUrl}TDV.png`, sector: 'Vakıf' },
  { name: 'Teleperformance', logo: `${baseUrl}teleperformance.png`, sector: 'Çağrı Merkezi' },
  { name: 'Tepe Servis Card', logo: `${baseUrl}tepe-servis-card.png`, sector: 'Kart' },
  { name: 'Tepe Servis', logo: `${baseUrl}tepe-servis.png`, sector: 'Hizmet' },
  { name: 'Teos Marina', logo: `${baseUrl}Teos-Marina.png`, sector: 'Marina' },
  { name: 'Tepe Savunma', logo: `${baseUrl}tepe-savunma-1.png`, sector: 'Savunma' },
  { name: 'Tersan', logo: `${baseUrl}tersan-1.png`, sector: 'Gemi' },
  { name: 'Vodafone', logo: `${baseUrl}Vodafone-Logo-675x380-2.png`, sector: 'Telekom' },
];

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'CFO',
    company: 'Beko',
    text: 'Kolaysoft ile e-fatura entegrasyonumuz sayesinde fatura süreçlerimiz %80 oranında hızlandı. Ekibin profesyonel yaklaşımı ve teknik desteği takdire şayan.',
    stars: 5,
  },
  {
    name: 'Mehmet Kaya',
    role: 'Bilişim Direktörü',
    company: 'LC Waikiki',
    text: 'e-Defter ve e-Arşiv çözümleri ile hem zamandan hem de iş gücünden önemli tasarruf sağladık. Sistem kesintisiz çalışıyor.',
    stars: 5,
  },
  {
    name: 'Ayşe Demir',
    role: 'Muhasebe Müdürü',
    company: 'Arçelik',
    text: 'Kolaysoftun sunduğu e-irsaliye modülü ile sevk süreçlerimiz tamamen dijitalleşti. ERP entegrasyonu sorunsuz çalışıyor.',
    stars: 5,
  },
];

export default function References() {
  return (
    <div className="bg-white min-h-screen">
<header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img
          src={referanslarHeader}
          alt="Kolaysoft Referanslar"
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
            <span className="text-white font-medium">Referanslar</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Referanslarımız
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl"
          >
            Binlerce başarılı projede yanınızdayız. Sektörün öncü firmaları Kolaysoft çözümlerini tercih ediyor.
          </motion.p>
        </div>
      </header>

      <div className="container-wide py-16 space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {references.map((ref, i) => (
              <motion.div
                key={ref.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-glow-green hover:border-[#0CF25D]/60 transition-all group flex flex-col items-center justify-center min-h-[200px]"
              >
                <div className="w-full h-24 flex items-center justify-center mb-3">
                  <img 
                    src={ref.logo} 
                    alt={ref.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-semibold text-slate-800 text-center text-base">{ref.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{ref.sector}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          
          
         
        </motion.section>

       
      </div>
    </div>
  );
}
