import { motion } from 'framer-motion';
import { CheckCircle, Rocket } from 'lucide-react';
import { useInView } from 'framer-motion';

const milestones = [
  {
    year: 'Yarın',
    subtitle: 'Gelecek',
    title: 'Yarın — Gelecek',
    desc: 'Yapay zeka, veri ve yeni nesil teknolojilerle daha geniş bir etki alanı oluşturuyoruz.',
    impact: 'Sadece bugünü değil, geleceği inşa ediyoruz.',
    image: '/assets/hikayemiz/gelecek.jpg',
  },
  {
    year: 'Bugün',
    subtitle: 'Dönüşüm',
    title: 'Bugün — Dönüşüm',
    desc: 'Artık farklı sektörlerde değer üreten, çok katmanlı bir teknoloji grubuyuz.',
    impact: 'Teknoloji geliştiren değil, ekosistem kuran bir yapı olduk.',
    image: '/assets/hikayemiz/donusum.jpg',
  },
  {
    year: '2024',
    subtitle: 'Güçlenme',
    title: '2024 — Güçlenme',
    desc: 'Sektördeki konumumuzu güçlendiren ödüller ve yeni yatırımlarla büyümemizi hızlandırdık.',
    impact: 'Türkiye\'nin güçlü teknoloji oyuncularından biri haline geldik.',
    image: '/assets/hikayemiz/buyume.jpg',
  },
  {
    year: '2022',
    subtitle: 'Markalaşma',
    title: '2022 — Markalaşma',
    desc: 'Geliştirdiğimiz çözümler kendi alanlarında büyüyerek ayrı yapılar haline gelmeye başladı.',
    impact: 'Ürünlerimiz markalara dönüştü.',
    image: '/assets/hikayemiz/urunler.png',
  },
  {
    year: '2020',
    subtitle: 'Genişleme',
    title: '2020 — Genişleme',
    desc: 'E-dönüşümün ötesine geçerek, ödeme sistemleri ve sektörel yazılımlar geliştirmeye başladık.',
    impact: 'Tek ürün değil, çoklu çözüm yapısı oluşturduk.',
    image: '/assets/hikayemiz/genisleme.jpg',
  },
  {
    year: '2018',
    subtitle: 'Derinleşme',
    title: '2018 — Derinleşme',
    desc: 'Farklı sektörlerle çalıştıkça, her alanın kendine özgü ihtiyaçları olduğunu gördük.',
    impact: 'Standart çözümlerden, sektöre özel çözümlere yöneldik.',
    image: '/assets/hikayemiz/2018.jpeg',
  },
  {
    year: '2016',
    subtitle: 'Başlangıç',
    title: '2016 — Başlangıç',
    desc: 'Dijital dönüşümün henüz yeni konuşulduğu bir dönemde, işletmelerin süreçlerini kolaylaştırmak için yola çıktık.',
    impact: 'Temellerimizi güven ve sürdürülebilirlik üzerine kurduk.',
    image: '/assets/hikayemiz/2016-2.jpeg',
  },
];

export default function History() {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-cabin font-800 text-slate-900 text-4xl md:text-5xl leading-tight mb-6">
          Hikayemiz
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl">
          2016 yılından bu yana teknoloji ve yenilikçilik odaklı büyüme yolculuğumuz.
        </p>
      </motion.section>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-cyan via-tech-purple to-tech-cyan hidden md:block -translate-x-1/2" />
        
        <div className="space-y-12">
          {milestones.map(({ year, subtitle, title, desc, impact, image }, i) => (
            <motion.div
              key={year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col items-stretch ${
                i % 2 === 0 ? 'md:flex-row md:items-center' : 'md:flex-row-reverse md:items-center'
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-card hover:shadow-glow-green transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-tech-cyan font-bold text-xl">{year}</span>
                      {subtitle && (
                        <span className="text-slate-400 text-sm">— {subtitle}</span>
                      )}
                    </div>
                    <h3 className="font-cabin font-700 text-slate-900 text-xl mt-1 mb-2">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                    {impact && (
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Etkisi</p>
                        <p className="text-sm font-semibold text-slate-700">{impact}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tech-cyan border-4 border-white shadow-lg hidden md:block z-10" />
              
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-tech-cyan to-tech-blue rounded-2xl p-8 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tech-cyan to-tech-blue flex items-center justify-center mx-auto mb-4">
          <Rocket className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-cabin font-700 text-white text-2xl mb-2">Hikayemiz Devam Ediyor</h3>
        <p className="text-white/80 max-w-xl mx-auto">
          Her yıl yeni hedeflerle büyümeye devam ediyoruz. Siz de bu yolculuğun bir parçası olun.
        </p>
      </motion.div>
    </div>
  );
}
