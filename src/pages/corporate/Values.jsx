import { motion } from 'framer-motion';
import { Shield, BadgeCheck, Target, Lightbulb, Rocket, Users, Leaf } from 'lucide-react';

const values = [
  {
    id: 'guvenilirlik',
    icon: Shield,
    title: 'Güvenilirlik',
    desc: 'İş ortaklarımızın ve müşterilerimizin bize duyduğu güvenin sorumluluğunu taşırız. Geliştirdiğimiz her çözümde süreklilik, şeffaflık ve veri güvenliği önceliğimizdir.',
  },
  {
    id: 'durustluk',
    icon: BadgeCheck,
    title: 'Dürüstlük',
    desc: 'Tüm süreçlerimizde açık, net ve şeffaf bir iletişim kurarız. Uzun vadeli ilişkilerin temelinin doğruluk olduğuna inanırız.',
  },
  {
    id: 'sonuc',
    icon: Target,
    title: 'Sonuç Odaklılık',
    desc: 'Sadece çözüm üretmeyiz, sonuç üretiriz. Müşterilerimizin iş süreçlerinde gerçek fayda sağlayan, ölçülebilir çıktılar sunarız.',
  },
  {
    id: 'yenilikcilik',
    icon: Lightbulb,
    title: 'Yenilikçilik',
    desc: 'Teknolojiyi yakından takip eder, sürekli geliştiririz. Yapay zekâdan sektörel çözümlere kadar her alanda yenilikçi bakış açısıyla ilerleriz.',
  },
  {
    id: 'karlilik',
    icon: Rocket,
    title: 'Kararlılık',
    desc: 'Zorluklar karşısında çözüm üretmekten vazgeçmeyiz. Her projede sürdürülebilir başarıyı hedefleriz.',
  },
  {
    id: 'musteri',
    icon: Users,
    title: 'Müşteri Odaklılık',
    desc: 'Geliştirdiğimiz her ürünün merkezine kullanıcıyı koyarız. İhtiyacı anlar, süreci kolaylaştıran çözümler üretiriz.',
  },
  {
    id: 'sorumluluk',
    icon: Leaf,
    title: 'Sorumluluk',
    desc: 'Topluma, çevreye ve iş ortaklarımıza karşı sorumluluğumuzun bilincindeyiz. Sürdürülebilir ve etik bir yaklaşım benimsiyoruz.',
  },
];

const cardBase =
  'bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-glow-green hover:border-[#0CF25D]/60 transition-all group';

const iconBox =
  'w-12 h-12 rounded-xl bg-tech-blue flex items-center justify-center mb-4 flex-shrink-0';

export default function Values() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-cabin font-800 text-slate-900 text-4xl md:text-5xl leading-tight mb-4">
          DEĞERLERİMİZ
        </h1>
        <h2 className="font-cabin font-700 text-xl text-tech-cyan mb-6">
          KURUMSAL DEĞERLERİMİZ
        </h2>
        <div className="text-slate-600 text-lg max-w-3xl space-y-4">
          <p>
            Kolaysoft Teknoloji olarak geliştirdiğimiz her ürünün, kurduğumuz her iş ortaklığının
            ve attığımız her adımın temelinde değerlerimiz yer alır.
          </p>
          <p>Bu değerler, yalnızca söylediklerimiz değil; her gün iş yapış biçimimizdir.</p>
          <p className="font-medium text-slate-800">
            Kolaysoft Teknoloji'de değerler, sadece tanımlanan kavramlar değil; her gün yeniden
            üretilen bir çalışma kültürüdür.
          </p>
        </div>
      </motion.section>

      {/* ── ROW 1: Güvenilirlik (tall) | Dürüstlük + Sonuç Odaklılık stacked ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Güvenilirlik — spans 1 col, 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.5 }}
          className={`${cardBase} p-6 lg:row-span-2`}
        >
          <div className={iconBox}>
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-lg mb-2">Güvenilirlik</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            İş ortaklarımızın ve müşterilerimizin bize duyduğu güvenin sorumluluğunu taşırız.
            Geliştirdiğimiz her çözümde süreklilik, şeffaflık ve veri güvenliği önceliğimizdir.
          </p>
        </motion.div>

        {/* Dürüstlük */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className={`${cardBase} p-6`}
        >
          <div className={iconBox}>
            <BadgeCheck className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-lg mb-2">Dürüstlük</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Tüm süreçlerimizde açık, net ve şeffaf bir iletişim kurarız. Uzun vadeli ilişkilerin
            temelinin doğruluk olduğuna inanırız.
          </p>
        </motion.div>

        {/* Sonuç Odaklılık */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`${cardBase} p-6`}
        >
          <div className={iconBox}>
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-lg mb-2">Sonuç Odaklılık</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Sadece çözüm üretmeyiz, sonuç üretiriz. Müşterilerimizin iş süreçlerinde gerçek fayda
            sağlayan, ölçülebilir çıktılar sunarız.
          </p>
        </motion.div>

        {/* Yenilikçilik — spans 2 cols on right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`${cardBase} p-6 lg:col-span-2`}
        >
          <div className={iconBox}>
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-lg mb-2">Yenilikçilik</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Teknolojiyi yakından takip eder, sürekli geliştiririz. Yapay zekâdan sektörel
            çözümlere kadar her alanda yenilikçi bakış açısıyla ilerleriz.
          </p>
        </motion.div>
      </div>

      {/* ── ROW 2: Kararlılık (1 col) | Müşteri Odaklılık (2 col) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0, duration: 0.5 }}
          className={`${cardBase} p-6`}
        >
          <div className={iconBox}>
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-lg mb-2">Kararlılık</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Zorluklar karşısında çözüm üretmekten vazgeçmeyiz. Her projede sürdürülebilir başarıyı
            hedefleriz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className={`${cardBase} p-6 lg:col-span-2`}
        >
          <div className={iconBox}>
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-lg mb-2">Müşteri Odaklılık</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Geliştirdiğimiz her ürünün merkezine kullanıcıyı koyarız. İhtiyacı anlar, süreci
            kolaylaştıran çözümler üretiriz.
          </p>
        </motion.div>
      </div>

      {/* ── ROW 3: Sorumluluk — full width, horizontal layout ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 0.5 }}
        className={`${cardBase} p-6 flex flex-col sm:flex-row sm:items-center gap-6`}
      >
        <div className="flex flex-col items-start gap-3 sm:w-48 flex-shrink-0">
          <div className={iconBox}>
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-cabin font-700 text-slate-900 text-lg">Sorumluluk</h3>
        </div>
        <div className="sm:border-l sm:border-slate-200 sm:pl-6">
          <p className="text-slate-600 text-sm leading-relaxed">
            Topluma, çevreye ve iş ortaklarımıza karşı sorumluluğumuzun bilincindeyiz.
            Sürdürülebilir ve etik bir yaklaşım benimsiyoruz.
          </p>
        </div>
      </motion.div>

      {/* ── Footer banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-tech-cyan to-tech-blue rounded-2xl p-8 text-center"
      >
        <p className="text-white text-lg font-medium">
          Kolaysoft Teknoloji'de değerler, sadece tanımlanan kavramlar değil;
          <br />
          her gün yeniden üretilen bir çalışma kültürüdür.
        </p>
      </motion.div>
    </div>
  );
}