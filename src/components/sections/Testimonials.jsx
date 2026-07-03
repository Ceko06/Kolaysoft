import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState } from 'react';

import etiBakirLogo from '../../assets/references/etibakirb.png';
import mitasLogo from '../../assets/references/mitas-2.webp';
import interpressLogo from '../../assets/references/interpress.webp';
import ikeaLogo from '../../assets/references/ikea.webp';

const row1 = [
  {
    quote: 'Zaten kolay bir uygulama. Zaman tasarrufu, kağıt israfı gibi konularda ve hukuki yönden bordroyla ilgili mütabakatı sağlamak adına PEYK programını kullanmalarını tavsiye ederim.',
    name: 'Selehattin Er',
    title: 'İnsan Kaynakları Yöneticisi · Eti Bakır',
    companyName: 'Eti Bakır',
    initials: 'EB',
    avatarBg: '#b45309',
    tags: ['PEYK', 'İnsan Kaynakları'],
    thumbnail: '/basari-hikayeleri-thumbnail/peyk.jpg',
    logo: etiBakirLogo,
    videoUrl: 'https://www.instagram.com/p/COF4bPgg0_5/embed/',
    originalUrl: 'https://www.instagram.com/p/COF4bPgg0_5/',
    isInstagram: true,
  },
  {
    quote: 'Bölgemizde EczacıPOS cihazını ilk alanlardanım. Bize ciddi kolaylıklar sağladı. Hastalarım işlem hızına çok şaşırıyordu. Nöbetlerimiz yoğun geçiyor ama tek cihaz tüm nöbete yetiyor.',
    name: 'Seyfi Özdemir',
    title: 'Eczacı · Şırnak Eczacı Odası Başkanı',
    companyName: 'Şırnak Eczacı Odası',
    initials: 'ŞE',
    avatarBg: '#1e3a5f',
    tags: ['EczacıPOS', 'Sağlık'],
    thumbnail: '/basari-hikayeleri-thumbnail/kolaycare.webp',
    videoUrl: 'https://www.instagram.com/p/DWyfPvJjFV9/',
    isInstagram: true,
  },
  {
    quote: 'Bizim büyüklüğümüzde kurumsal firmalar için PEYK hem KVKK açısından hem yasal yükümlülüklerimizi işveren işçi arasındaki tebliğ süreçlerinde ideal bir çözüm.',
    name: 'Selda Meral Yıldırım',
    title: 'Endüstriyel İlişkiler Takım Lideri · Mitaş',
    companyName: 'Mitaş',
    initials: 'MT',
    avatarBg: '#2d6a4f',
    tags: ['PEYK', 'İnsan Kaynakları'],
    thumbnail: '/basari-hikayeleri-thumbnail/peyk.jpg',
    logo: mitasLogo,
    videoUrl: 'https://www.instagram.com/p/DHS-8D4I8eq/embed/',
    originalUrl: 'https://www.instagram.com/p/DHS-8D4I8eq/',
    isInstagram: true,
  },
  {
    quote: 'Bütün İhtiyaçlarımızı karşılayabilecek bir programdı',
    name: 'Pelşin Esen',
    title: 'Eczacı · Mardin Eczacı Odası Üyesi',
    companyName: 'Mardin Eczacı Odası',
    initials: 'HE',
    avatarBg: '#7b2d8b',
    tags: ['EczacıPOS', 'Sağlık'],
    thumbnail: '/basari-hikayeleri-thumbnail/kolaycare.webp',
    videoUrl: 'https://www.youtube.com/embed/cDbpvZT6Alc',
  },
];

const row2 = [
  {
    quote: 'Dosyalama maliyetleriniz, buna ayıracağınız personel maliyetleriniz ve ciddi zaman. PEYK bunu oldukça kaliteli bir şekilde yapmaktadır. Hem müşteri hizmetlerinin 7/24 destek vermesi bizi gayet memnun etmektedir.',
    name: 'Recep Can',
    title: 'Genel Müdür Yardımcısı · Interpress',
    companyName: 'Interpress',
    initials: 'IP',
    avatarBg: '#0f766e',
    tags: ['PEYK', 'Lojistik'],
    thumbnail: '/basari-hikayeleri-thumbnail/peyk.jpg',
    logo: interpressLogo,
    videoUrl: 'https://www.instagram.com/p/CNZe1CSgf7H/embed/',
    originalUrl: 'https://www.instagram.com/p/CNZe1CSgf7H/',
    isInstagram: true,
  },
  {
    quote: 'Yazılı belgelerin binlerce çalışanla hızlıca paylaşılması ve arşivlenmesi PEYK\'i tercih etmemizin temel sebebi. Manuel imzalama büyük bir iş yüküydü, PEYK ile hepsinin üstesinden geldik.',
    name: 'Nagehan Üstünel Coşkun',
    title: 'Bordro ve Raporlama Grup Lideri · İKEA',
    companyName: 'İKEA',
    initials: 'İK',
    avatarBg: '#0058a3',
    tags: ['PEYK', 'Perakende'],
    thumbnail: '/basari-hikayeleri-thumbnail/peyk.jpg',
    logo: ikeaLogo,
    videoUrl: 'https://www.instagram.com/p/CN6ziQDA8vq/embed/',
    originalUrl: 'https://www.instagram.com/p/CN6ziQDA8vq/',
    isInstagram: true,
  },
  {
    quote: 'Projeyi çok beğendim, açıkçası. Özellikle karekod okuma sistemi nöbetlerde eczacıya çok yardım edecek.',
    name: 'Barış Menekşe',
    title: 'Eczacı · Eskişehir Eczacı Odası',
    companyName: 'Eskişehir Eczacı Odası',
    initials: 'DE',
    avatarBg: '#c0392b',
    tags: ['EczacıPOS', 'Sağlık'],
    thumbnail: '/basari-hikayeleri-thumbnail/kolaycare.webp',
    videoUrl: 'https://www.youtube.com/embed/w1gf_MKLypQ',
  },
  {
    quote: 'İsminiz de olduğu gibi işlerimizi kolaylaştırıyorsunuz. EczacıPOS eczacılarımızın ihtiyaç duyduğu bir şeydi. Teşekkür ediyoruz.',
    name: 'Kadri Çalım',
    title: 'Eczacı · Mardin Eczacı Odası Üyesi',
    companyName: 'Mardin Eczacı Odası',
    initials: 'KÇ',
    avatarBg: '#b45309',
    tags: ['EczacıPOS', 'Sağlık'],
    thumbnail: '/basari-hikayeleri-thumbnail/kolaycare.webp',
    videoUrl: 'https://www.youtube.com/embed/J4zxOUr7-50',
  },
  {
    quote: '2018 yılından beri şöyle bir kanun vardı: Eczane yazılımı ile POS cihazı arasında bir bağlantı olmak zorundaydı. Entegrasyonu olmayan eczacılara 7.500 ₺\'lık cezalar kesildi. Bu sorunu en az maliyetle çözen siz oldunuz.',
    name: 'Sinan Erdem',
    title: 'Mali Müşavir · Şanlıurfa',
    companyName: 'Mali Müşavir',
    initials: 'SE',
    avatarBg: '#7c3aed',
    tags: ['EczacıPOS', 'Mali Müşavirlik'],
    thumbnail: '/basari-hikayeleri-thumbnail/kolaycare.webp',
    videoUrl: 'https://www.youtube.com/embed/yIvl1MLL_6E',
  },
];

// KolaysoftPOS sayfası için ek POS hikayeleri (anasayfada gösterilmez).
const optikStories = [
  {
    quote: 'Temassız ve QR ödeme seçenekleri ekledikten sonra kasadaki bekleme süresi neredeyse ortadan kalktı. Müşterilerimiz ödeme kolaylığından çok memnun.',
    name: 'Yahya Aydın',
    title: 'Başkan · Hatay Optisyen ve Gözlükçüler Odası',
    companyName: 'Hatay Optisyen ve Gözlükçüler Odası',
    initials: 'YA',
    avatarBg: '#184A97',
    tags: ['OptikPOS', 'Ödeme Çözümleri'],
    thumbnail: '/assets/optik-teknolojileri/optik-magaza.jpg',
    videoUrl: 'https://www.instagram.com/p/DRj2xtOCPah/embed/',
    originalUrl: 'https://www.instagram.com/p/DRj2xtOCPah/',
    isInstagram: true,
  },
];

function VideoModal({ testimonial, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-black flex flex-col"
        style={{
          width: testimonial.isInstagram ? '420px' : '100%',
          maxWidth: testimonial.isInstagram ? '420px' : '800px',
          maxHeight: '90vh',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black bg-opacity-60 text-white rounded-full p-1.5 hover:bg-opacity-90 transition"
        >
          <X className="w-4 h-4" />
        </button>

        {testimonial.isInstagram ? (
          <iframe
            src={testimonial.videoUrl}
            allow="autoplay; fullscreen"
            allowFullScreen
            scrolling="no"
            style={{ width: '100%', height: '500px', border: 'none', display: 'block' }}
          />
        ) : (
          <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src={`${testimonial.videoUrl}?autoplay=1`}
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        )}

        <div className="bg-white px-5 py-4 flex items-center gap-3 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
            style={{ backgroundColor: testimonial.avatarBg }}
          >
            {testimonial.initials}
          </div>
          <div>
            <p className="font-semibold text-koc-dark text-sm">{testimonial.name}</p>
            <p className="text-xs text-slate-400">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, onPlay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-80 sm:w-96 mx-4 rounded-2xl overflow-hidden shadow-sm testimonial-card"
      style={{ height: '300px', border: '1px solid #e2e8f0', position: 'relative', cursor: 'default' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* --- NORMAL GÖRÜNÜM --- */}
      <div
        className="absolute inset-0 bg-white flex flex-col justify-between p-6 transition-all duration-300 overflow-hidden"
        style={{ opacity: hovered ? 0 : 1, pointerEvents: hovered ? 'none' : 'auto' }}
      >
        <div>
          <div className="flex items-center justify-between mb-5">
            <span className="font-semibold text-koc-dark text-sm">{testimonial.companyName}</span>
            <div className="flex gap-1 flex-wrap justify-end">
              {testimonial.tags.map((tag, i) => (
                <span key={i} className="text-xs font-medium px-2 py-1 rounded-full border border-slate-200 text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-koc-gray leading-relaxed text-sm">"{testimonial.quote}"</p>
        </div>
        <div className="flex items-end justify-between mt-6">
          <div>
            <p className="font-semibold text-koc-dark text-sm">{testimonial.name}</p>
            <p className="text-xs text-slate-400 mt-0.5">{testimonial.title}</p>
          </div>
          <button
            onClick={() => onPlay(testimonial)}
            className="flex items-center gap-2 text-xs font-semibold text-koc-navy border border-slate-200 rounded-full px-4 py-2 hover:border-koc-navy transition-colors flex-shrink-0"
          >
            <Play className="w-3 h-3 fill-koc-navy" />
            Hikâyeyi Gör
          </button>
        </div>
      </div>

      {/* --- HOVER / VİDEO GÖRÜNÜM --- */}
      <div
        className="absolute inset-0 flex flex-col justify-between transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0, pointerEvents: hovered ? 'auto' : 'none' }}
      >
        <div className="relative" style={{ height: 'calc(100% - 64px)' }}>
          {testimonial.logo ? (
            <div className="w-full h-full flex items-center justify-center bg-white p-3">
              <img
                src={testimonial.logo}
                alt={testimonial.companyName}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ) : (
            <img
              src={testimonial.thumbnail}
              alt={testimonial.companyName}
              className="w-full h-full object-cover"
            />
          )}
          <div
            className="absolute inset-0"
            style={{ background: testimonial.logo ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.35)' }}
          />
          <button
            onClick={() => onPlay(testimonial)}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: '#1a6fd4', boxShadow: '0 0 0 6px rgba(26,111,212,0.25)' }}
            >
              <Play className="w-6 h-6 fill-white text-white ml-1" />
            </div>
          </button>
        </div>

        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ height: '64px', backgroundColor: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(8px)' }}
        >
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ backgroundColor: testimonial.avatarBg }}
            >
              {testimonial.initials}
            </div>
            <div>
              <p className="font-semibold text-white text-sm leading-tight">{testimonial.name}</p>
              <p className="text-xs text-slate-400 leading-tight">{testimonial.companyName}</p>
            </div>
          </div>
          <button
            onClick={() => onPlay(testimonial)}
            className="flex items-center gap-2 text-xs font-semibold text-white rounded-full px-4 py-2 flex-shrink-0 transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#1a6fd4' }}
          >
            <Play className="w-3 h-3 fill-white" />
            Videoyu İzle
          </button>
        </div>
      </div>
    </div>
  );
}

function TickerRow({ items, direction, onPlay }) {
  const loopItems = [...items, ...items, ...items, ...items];
  const animName = direction === 'reverse' ? 'ticker-scroll-reverse' : 'ticker-scroll';

  return (
    <div
      className="flex"
      style={{
        width: 'max-content',
        animation: `${animName} 32s linear infinite`,
        willChange: 'transform',
      }}
      onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
      onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
    >
      {loopItems.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} onPlay={onPlay} />
      ))}
    </div>
  );
}

export default function Testimonials({ filterTag = null }) {
  const [activeVideo, setActiveVideo] = useState(null);

  // filterTag verilirse (ör. KolaysoftPOS sayfası) yalnızca o ürüne ait
  // hikayeler gösterilir; verilmezse anasayfadaki tam liste kullanılır.
  const filterTags = filterTag
    ? (Array.isArray(filterTag) ? filterTag : [filterTag])
    : null;
  const filtered = filterTags
    ? [...row1, ...row2, ...optikStories].filter(t =>
        t.tags.some(tag => filterTags.includes(tag))
      )
    : null;
  const displayRow1 = filtered ? filtered.filter((_, i) => i % 2 === 0) : row1;
  const displayRow2 = filtered ? filtered.filter((_, i) => i % 2 === 1) : row2;

  function handlePlay(testimonial) {
    if (testimonial.isInstagram) {
      window.open(testimonial.originalUrl || testimonial.videoUrl, '_blank', 'noopener,noreferrer');
    } else {
      setActiveVideo(testimonial);
    }
  }

  return (
    <section className="section-pad bg-white overflow-hidden">
      {activeVideo && (
        <VideoModal testimonial={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <div className="container-wide">
        <div className="text-left mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-koc-navy mb-3"
          >
            Başarı Hikayelerimiz
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cabin font-800 text-koc-dark mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
          >
            Müşterilerimizin Deneyimlerini Dinleyin
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-koc-gray text-base max-w-xl"
          >
            Kolaysoft çözümlerinin farklı sektörlerde iş süreçlerine nasıl değer kattığını müşterilerimizin anlatımıyla keşfedin.
          </motion.p>
        </div>
      </div>

      <div className="container-wide" style={{ overflowX: 'clip', overflowY: 'visible', position: 'relative' }}>
        {/* Sol fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, white, transparent)' }}
        />
        {/* Sağ fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, white, transparent)' }}
        />

        {/* 1. Satır — sola */}
        <div style={{ padding: '12px 0' }}>
          <TickerRow items={displayRow1} direction="forward" onPlay={handlePlay} />
        </div>

        {/* 2. Satır — sağa (ters) */}
        {displayRow2.length > 0 && (
          <div style={{ padding: '12px 0' }}>
            <TickerRow items={displayRow2} direction="reverse" onPlay={handlePlay} />
          </div>
        )}
      </div>


      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        @keyframes ticker-scroll-reverse {
          0%   { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }

        .testimonial-card {
          transition: box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}
