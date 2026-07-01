import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#ffffff] overflow-hidden py-20 lg:py-32"
    >
      {/* Ortadaki mavi bant */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[320px] bg-[#1f559d]" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[0.925fr_620px] items-center">

          {/* Sol Alan */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="px-4 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20"
          >
            <h2
              className="font-cabin font-700 text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Biz Kimiz?
            </h2>

            <p className="font-cabin text-white/95 text-sm leading-relaxed max-w-[500px] mb-10">
              Kolaysoft Teknoloji, 2016 yılında e-Dönüşüm alanındaki yasal
              boşluğu doldurmak amacıyla kuruldu. Bugün, 4 grup şirketi ve
              200'ü aşkın uzmanıyla Türkiye'nin en büyük bağımsız e-Dönüşüm
              teknoloji grubu haline geldik.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-[#1f559d] font-cabin font-semibold px-10 py-4 rounded-md hover:bg-slate-100 transition-all"
            >
              Daha Fazlasını Gör
            </a>
          </motion.div>

          {/* Sağ Kart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-white "
          >
            {/* Görsel */}
            <div className="relative mt-0 lg:-mt-40">
              <img
                src="assets/YDA-Center-05.jpg"
                alt="Kolaysoft"
                className="w-full h-[320px] lg:h-[420px] object-cover"
              />

              <div className="absolute bottom-6 left-6">
                <span className="text-white text-4xl font-bold tracking-wide">
                  KOLAYSOFT
                </span>
              </div>
            </div>

            {/* İçerik */}
            <div className="p-8 lg:p-10">
              <p className="font-cabin text-slate-700 leading-relaxed text-sm mb-8">
                KOBİ'lerden büyük holdinglere kadar her ölçekteki işletmeye
                özelleştirilmiş çözümler sunuyor, müşterilerimizin mevzuata
                uyumunu garantiliyoruz.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-4 text-slate-900 font-cabin font-semibold group"
              >
                Daha fazlası

                <span className="w-12 h-[2px] bg-[#0CF25D] transition-all duration-300 group-hover:w-20" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}