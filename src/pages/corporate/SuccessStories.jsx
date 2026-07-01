import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    year: '2025',
    category: 'Bilişim 500 Araştırması',
    title: 'Bilişim 500',
    description:
      "Kolaysoft Teknoloji, üst üste 4.'cü kez kendi kategorisinde birinci olarak başarısını taçlandırdı.",
    detail:
      'Binlerce firmanın tercihi olmamızın temelinde, mevzuata tam uyum, kullanıcı dostu arayüzler, hızlı teknik destek ve sektöre özel hizmet modeli yer alıyor.',
    accent: '#64b449',
    tag: '4. BİRİNCİLİK',
    image: '/assets/awards/Bilisim500-2025.jpg',
  },
  {
    year: '2024',
    category: 'Bilişim 500 Araştırması',
    title: 'Bilişim 500',
    description:
      "Kolaysoft Teknoloji, İlk Beş Yüz Bilişim Şirketi Araştırması – Bilişim 500'de, bu yıl da zirveyi bırakmadı.",
    detail:
      '"Sistem Entegratörü İş Ortağı" başlığında, "Yılın e-Fatura, e-Defter, e-Arşiv / e-Dönüşüm" kategorisinde birincilik ödülüne layık görüldü.',
    accent: '#1a6fa8',
    tag: 'BİRİNCİLİK',
    image: '/assets/awards/Bilisim500-2024.jpg',
  },
  {
    year: '2024',
    category: 'Mastercard PSM Awards',
    title: 'PSM Awards Altın Ödül',
    description:
      "Kolaysoft Teknoloji ve Pavo iş birliğiyle geliştirilen EczacıPOS Projesi, Mastercard PSM Awards kapsamında 'Ekosistem Geliştiren İş Birlikleri' kategorisinde Altın Ödül kazandı.",
    detail:
      'Bu ödül, geliştirdiğimiz yenilikçi çözümlerin sektörde yarattığı değerin güçlü bir göstergesi oldu.',
    accent: '#64b449',
    tag: 'ALTIN ÖDÜL',
    image: '/assets/awards/PSM_Awards.png',
  },
  {
    year: '2023',
    category: 'Bilişim 500 Araştırması',
    title: 'Bilişim 500',
    description:
      'Kolaysoft Teknoloji, Bilişim 500 Araştırması kapsamında Sistem Entegratörlüğü ve İş Ortağı kategorilerinde önemli başarılar elde etti.',
    detail:
      'E-Fatura, E-Defter ve E-Arşiv hizmetleri alanındaki lider konumu bir kez daha tescillendi.',
    accent: '#1a6fa8',
    tag: '1. SIRA — E-FATURA KATEGORİSİ',
    image: '/assets/awards/Bilisim500-2023.jpeg',
  },
  {
    year: '2021',
    category: 'Bilişim 500 Araştırması',
    title: 'Bilişim 500',
    description:
      "Türkiye'nin en kapsamlı bilişim araştırmalarından biri olan İlk 500 Bilişim Şirketi Araştırması kapsamında Kolaysoft Teknoloji, e-Dönüşüm hizmetleri kategorisinde Türkiye'nin önde gelen şirketleri arasında yer aldı.",
    detail:
      'Bu başarı, teknoloji alanındaki büyüme yolculuğumuzun önemli dönüm noktalarından biri oldu.',
    accent: '#64b449',
    tag: 'İLK 500 BİLİŞİM ŞİRKETİ',
    image: '/assets/awards/Bilisim500-2021.jpg',
  },
  {
    year: '2020',
    category: 'IASP International',
    title: 'IASP COVID-19 Initiative',
    description:
      'PEYK, Uluslararası Teknoparklar Birliği Derneği (IASP) tarafından Covid-19 sürecinde işveren ve çalışanlara değer katan yenilikçi çözümler arasında gösterildi.',
    detail: 'Bu başarı sayesinde Türkiye uluslararası platformda temsil edildi.',
    accent: '#1a6fa8',
    tag: 'ULUSLARARASI ÖDÜL',
    image: '/assets/awards/IASP.png',
  },
];

export default function SuccessStories() {
  return (
    <div className="space-y-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="py-6"
      >
        <h1
          className="font-display font-800 text-slate-900 leading-tight mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Başarılarımız Bir Yolculuğun Parçası
        </h1>
        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#64b449] to-[#1a6fa8] mb-5" />
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          Kurulduğumuz günden bu yana attığımız her adım, yalnızca büyümemize değil, sektörlere
          değer katmamıza da katkı sağladı. Aldığımız ödüller ve elde ettiğimiz başarılar, bu
          yolculuğun önemli kilometre taşlarını oluşturuyor.
        </p>
      </motion.div>

      <div>
        {awards.map((award, index) => {
          const imageLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="sticky"
              style={{ top: `${100 + index * 12}px`, zIndex: index + 1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl border overflow-hidden mb-16 flex flex-col md:flex-row"
                style={{
                  borderColor: `${award.accent}35`,
                  boxShadow: `0 8px 40px 0 ${award.accent}15, 0 2px 8px 0 rgba(0,0,0,0.06)`,
                }}
              >
                <div
                  className={`md:w-[40%] shrink-0 bg-slate-100 ${imageLeft ? 'md:order-first' : 'md:order-last'} order-first h-56 md:h-auto`}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center px-6 py-8 md:px-10 md:py-10">
                  <p
                    className="font-black leading-none mb-1"
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                      color: award.accent,
                      opacity: 0.3,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {award.year}
                  </p>

                  <p
                    className="text-[10px] font-bold tracking-widest uppercase mb-3"
                    style={{ color: award.accent }}
                  >
                    {award.category}
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-3">
                    {award.title}
                  </h3>

                  <div className="w-10 h-0.5 mb-4 rounded-full" style={{ background: award.accent }} />

                  <p className="text-slate-500 text-sm leading-relaxed mb-3">
                    {award.description}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: award.accent }}>
                    {award.detail}
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
