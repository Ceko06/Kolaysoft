import { motion } from 'framer-motion';
import { Target, Eye, ArrowRight } from 'lucide-react';

export default function VisionMission() {
  return (
    <div className="space-y-16">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-cabin font-800 text-slate-900 text-4xl md:text-5xl leading-tight mb-2">
          VİZYON VE MİSYONUMUZ
        </h1>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-tech-cyan/10 to-transparent rounded-2xl p-8 border border-tech-cyan/20"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tech-cyan to-tech-blue flex items-center justify-center mb-6">
            <Eye className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-2xl mb-4">Vizyonumuz</h3>
          <p className="text-slate-600 leading-relaxed">
            Dijital dönüşümü herkes için erişilebilir, sürdürülebilir ve kolay hale getiren;
            geliştirdiği teknolojilerle iş dünyasına yön veren global bir teknoloji markası olmak.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-tech-purple/10 to-transparent rounded-2xl p-8 border border-tech-purple/20"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tech-purple to-tech-purple/80 flex items-center justify-center mb-6">
            <Target className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-2xl mb-4">Misyonumuz</h3>
          <p className="text-slate-600 leading-relaxed">
            İmkansızı mümkün, mümkünü kolay, kolayı zevkli hale dönüştürmektir.
            <br /><br />
            Kolaysoft Teknoloji için teknoloji yalnızca bir araç değil,
            hayatı ve iş süreçlerini kolaylaştıran bir deneyimdir.
          </p>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <a href="#contact" className="inline-flex items-center gap-2 text-tech-cyan font-semibold hover:gap-3 transition-all">
          Bizimle İletişime Geçin <ArrowRight className="w-5 h-5" />
        </a>
      </motion.section>
    </div>
  );
}
