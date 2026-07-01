import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import eczacilik from '../../assets/activities/eczacilik.png'
import optik from '../../assets/activities/optik.png'
import ik from '../../assets/activities/ik.png'
import kamu from '../../assets/activities/kamu.png'
import finans from '../../assets/activities/finans.png'
import perakende from '../../assets/activities/perakende.png'
import kurumsal from '../../assets/activities/kurumsal.png'
import saha from '../../assets/activities/saha.png'

const sectors = [
  {
    title: 'Optik ve Görme Teknolojileri',
    desc: 'Optik sektörüne özel satış, stok, ödeme ve reçete süreçlerini tek platformda yöneten çözümler sunuyoruz.',
    img: optik,
  },
  {
    title: 'Finansal Teknolojiler ve Ödeme Sistemleri',
    desc: 'Yeni nesil ödeme altyapıları ve mobil POS teknolojileriyle hızlı ve güvenli tahsilat deneyimleri sağlıyoruz.',
    img: finans,
  },
  {
    title: 'Kurumsal e-Dönüşüm Sistemleri',
    desc: 'Şirketlerin yüksek hacimli dijital belge ve entegrasyon süreçlerini güvenli altyapılarla yönetiyoruz.',
    img: kurumsal,
  },
  {
    title: 'İnsan Kaynakları ve Dijital Belge Yönetimi',
    desc: 'İK operasyonlarını dijitalleştiren yasal uyumlu belge ve çalışan süreçleri geliştiriyoruz.',
    img: ik,
  },
  {
    title: 'Saha Operasyon ve Servis Teknolojileri',
    desc: 'Yerinde hizmet veren ekiplerin operasyon süreçlerini mobil ve entegre sistemlerle yönetiyoruz.',
    img: saha,
  },
  {
    title: 'Sağlık ve Eczacılık Teknolojileri',
    desc: 'Eczanelerin ödeme, finans, e-belge ve operasyon süreçlerini dijitalleştiren entegre teknolojiler geliştiriyoruz.',
    img: eczacilik,
  },
  {
    title: 'Büyük Ölçekli Dijital Dönüşüm Projeleri',
    desc: 'Enerji, şehircilik ve kamu operasyonlarına yönelik yüksek ölçekli teknoloji projeleri geliştiriyoruz.',
    img: kamu,
  },
  {
    title: 'Perakende ve Müşteri Deneyimi Teknolojileri',
    desc: 'Müşteri deneyimini güçlendiren, sadakat ve kampanya süreçlerini dijitalleştiren teknoloji çözümleri geliştiriyoruz.',
    img: perakende,
  },
];

export default function Activities() {
  return (
    <div className="space-y-10">

      {/* Başlık */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
       
        <h1
          className="font-display font-800 text-slate-900 leading-tight mb-3"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Faaliyet Alanlarımız
        </h1>
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-tech-cyan to-tech-purple mb-5" />
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          Eczaneden optiğe, saha operasyonlarından büyük ölçekli kurumsal yapılara kadar
          farklı sektörlerin ihtiyaçlarına özel yazılım, ödeme sistemleri, e-dönüşüm ve
          yapay zekâ çözümleri geliştiriyoruz.
        </p>
      </motion.div>

      {/* Sektör Listesi */}
      <div className="space-y-16">
        {sectors.map(({ title, desc, img }, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0`}
            >
              {/* Fotoğraf */}
              <div className="md:w-1/2 relative mt-6 md:mt-[120px]">
                {/* Mavi kare: yarısı dışarıda, yarısı fotoğrafın arkasında */}

                <div className="relative z-10 h-72 md:h-80 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 "
                  />
                  
                </div>
              </div>

              {/* Metin */}
              <div className={`md:w-1/2 flex items-center bg-white`}>
                <div className={`px-8 py-10 md:py-12 ${isEven ? 'md:pl-10 md:pr-6' : 'md:pr-10 md:pl-6'}`}>
                  <h2
                    className="font-display font-700 text-slate-900 leading-tight mb-4"
                    style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
                  >
                    {title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6">{desc}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#184a97] text-white text-sm font-semibold rounded-lg hover:bg-[#184a97]/80 transition-all duration-200 group/btn"
                  >
                    Detaylı İncele
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
