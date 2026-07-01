import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const portfolio = [
  {
    title: 'Migros Ticaret A.Ş.',
    category: 'Perakende',
    desc: '2.000+ mağazanın tüm fatura akışı Kolaysoft altyapısıyla yönetiliyor.',
    img: 'https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=600&h=400&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Türk Sağlık Grubu',
    category: 'Sağlık',
    desc: 'Zincir hastane ağında GİB uyumlu e-Dönüşüm altyapısı kuruldu.',
    img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Lojistik Güç A.Ş.',
    category: 'Lojistik',
    desc: '500+ araç filosunun e-İrsaliye süreçleri otomatize edildi.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'İnşaat Holding',
    category: 'İnşaat & GYO',
    desc: 'Holding yapısında tüm grup şirketlerinin merkezi e-Dönüşüm yönetimi.',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=500&fit=crop',
    span: 'col-span-2 row-span-1',
  },
  {
    title: 'Üretim Fabrikaları',
    category: 'Üretim',
    desc: 'ERP entegrasyonlu üretim ve sevk süreçleri dijitalleştirildi.',
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    title: 'Global İhracat Ltd.',
    category: 'İhracat',
    desc: 'Uluslararası standartlarda fatura ve gümrük entegrasyonu.',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=400&fit=crop',
    span: 'col-span-1 row-span-1',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-white">
      <div className="container-wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-koc-navy mb-3"
            >
              Referanslar
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-cabin font-800 text-koc-dark leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Sektör liderlerine{' '}
              <span className="text-koc-navy">güvenilen çözümler</span>
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
          >
            Tüm Referanslar <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[240px]">
          {portfolio.map(({ title, category, desc, img, span }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className={`${span} relative overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                  {category}
                </span>
                <h3 className="font-cabin font-700 text-white text-lg leading-tight mb-1">{title}</h3>
                <p className="text-xs text-brand-200 leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {desc}
                </p>
                <div className="mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-koc-dark/90">
                    Vaka Çalışması <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

