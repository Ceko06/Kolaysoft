import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Users, Code, Globe, Rocket, TrendingUp, Shield, Building2, CreditCard, Cpu, Wallet, Eye, Target } from 'lucide-react';
import ydaImage from "../../assets/yda.png";

const stats = [
  { value: '2016', label: 'Kuruluş Yılı', icon: Rocket },
  { value: '200+', label: 'Uzman Mühendis', icon: Users },
  { value: '4', label: 'Grup Şirketi', icon: Building2 },
  { value: '%99.9', label: 'Müşteri Memnuniyeti', icon: TrendingUp },
];

const features = [
  {
    icon: Globe,
    title: "e-Dönüşüm Çözümleri",
    desc: "GİB onaylı e-fatura, e-defter, e-arşiv ve daha fazlası ile işletmenizin dijital dönüşümünü tamamlıyoruz.",
  },
  {
    icon: Code,
    title: "Sektörel Yazılımlar",
    desc: "Her sektöre özel geliştirdiğimiz yazılımlarla iş süreçlerinizi optimize ediyoruz.",
  },
  {
    icon: Shield,
    title: "Ödeme Sistemleri",
    desc: "Güvenli ve hızlı ödeme altyapıları ile işinizi büyütmenize destek oluyoruz.",
  },
  {
    icon: Sparkles,
    title: "Yapay Zeka Çözümleri",
    desc: "Geleceğin teknolojisini bugünden kullanmanızı sağlayan AI entegrasyonları sunuyoruz.",
  },
];

export default function WhoWeAre() {
  return (
    <div className="space-y-20">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h1 className="font-cabin font-800 text-slate-900 text-4xl md:text-5xl leading-tight mb-8">
          BİZ KİMİZ?
        </h1>
        
        <h2 className="font-cabin font-700 text-slate-900 text-2xl md:text-3xl leading-tight mb-8">
          TEKNOLOJİYİ YALNIZCA GELİŞTİREN DEĞİL,<br />
          <span className="text-tech-cyan">SEKTÖRLERE YÖN VEREN</span> BİR YAPI KURUYORUZ.
        </h2>

        <div className="prose prose-lg text-slate-600 max-w-3xl">
          <p>
            Kolaysoft Teknoloji, farklı sektörlerin ihtiyaçlarına yönelik dijital çözümler geliştiren ve her biri kendi
            alanında uzmanlaşmış yapılardan oluşan bir teknoloji grubudur.
          </p>
          <p>
            2016 yılında başlayan yolculuğumuzda, dijital dönüşüm alanında edindiğimiz güçlü deneyimi; zamanla
            farklı sektörlere özel çözümler geliştirerek genişlettik. Bugün, e-dönüşümden sektörel yazılımlara,
            ödeme sistemlerinden yapay zeka çözümlerine uzanan geniş bir yelpazede faaliyet gösteriyoruz.
          </p>
          <p>
            Geliştirdiğimiz çözümler yalnızca teknolojik ürünler değil; aynı zamanda sektörlerin iş yapış biçimlerini
            dönüştüren, verimlilik sağlayan ve sürdürülebilir büyümeyi destekleyen yapılardır. Bu yaklaşımımız
            sayesinde, farklı alanlarda geliştirdiğimiz çözümleri zamanla kendi odağında büyüyen yapılara
            dönüştürerek bir grup yapısı oluşturduk.
          </p>
          <p className="font-semibold text-slate-800">
            Kolaysoft Teknoloji olarak; her biri kendi uzmanlık alanında derinleşen, yenilikçi bakış açısıyla değer
            üreten ve birlikte büyüyen bir ekosistem inşa ediyoruz.
          </p>
          <p>
            Bugün geldiğimiz noktada, güçlü teknik altyapımız, sektörel uzmanlığımız ve sürekli gelişimi odağına
            alan yaklaşımımızla; yalnızca bugünün ihtiyaçlarına değil, geleceğin dönüşümüne de yön veriyoruz.
          </p>
        </div>
      </motion.section>


<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20"
>
  <h2 className="text-3xl font-bold text-slate-900 mb-10">
    Neler Yapıyoruz?
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 items-stretch">
    {/* SOL BÜYÜK KART */}
    <div className="relative overflow-hidden rounded-3xl min-h-[560px]">
      <img
        src={ydaImage}
        alt="Birlikte Büyüyen Bir Ekosistem"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />

      <div className="absolute bottom-0 left-0 p-8">
        <h3 className="text-white text-3xl md:text-4xl font-bold mb-3 max-w-md">
          Birlikte Büyüyen Bir Ekosistem
        </h3>

        <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed">
          Her biri kendi alanında uzmanlaşmış yapılar ile güçlü ve
          sürdürülebilir bir teknoloji ekosistemi oluşturuyoruz.
        </p>
      </div>
    </div>

    {/* SAĞ BENTO */}
   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {features.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-glow-green transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-[#164194] flex items-center justify-center mb-4">
            <Icon className="w-5 h-5 text-white" />
          </div>

          <h4 className="font-semibold text-slate-900 mb-2">
            {title}
          </h4>

          <p className="text-sm text-slate-600 leading-relaxed">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</motion.section>



      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="mt-24">
    <h2 className="text-3xl font-bold text-slate-900 mb-16">
      Vizyon & Misyon
    </h2>

    <div className="relative max-w-4xl">
      
      {/* Dikey çizgi */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-[#164194]" />

      {/* VİZYON */}
      <div className="relative flex gap-8 mb-16">
        <div className="relative z-10 w-12 h-12 rounded-full bg-[#164194] flex items-center justify-center flex-shrink-0">
          <Eye className="w-5 h-5 text-white" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Vizyonumuz
          </h3>

          <p className="text-slate-600 leading-8">
            Dijital dönüşümü herkes için erişilebilir, sürdürülebilir ve
            kolay hale getiren; geliştirdiği teknolojilerle iş dünyasına yön
            veren global bir teknoloji markası olmak.
          </p>
        </div>
      </div>

      {/* MİSYON */}
      <div className="relative flex gap-8">
        <div className="relative z-10 w-12 h-12 rounded-full bg-[#164194] flex items-center justify-center flex-shrink-0">
          <Target className="w-5 h-5 text-white" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4 justify-left">
            Misyonumuz
          </h3>

          <p className="text-slate-600 leading-8">
            İmkansızı mümkün, mümkünü kolay, kolayı zevkli hale dönüştürmek.
            Kolaysoft Teknoloji için teknoloji yalnızca bir araç değil,
            hayatı ve iş süreçlerini kolaylaştıran bir deneyimdir.
          </p>
        </div>
      </div>
    </div>
  </div>
      </motion.section>
    </div>
  );
}
