import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Instagram SVG ikonu (lucide-react'te mevcut değil)
function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// ─── Behold.so Widget Kurulumu ─────────────────────────────────────────────
// 1. https://behold.so adresine gidin ve ücretsiz hesap oluşturun
// 2. Instagram hesabınızı (@kolaysoft) bağlayın
// 3. Bir feed widget oluşturun ve Widget ID'yi alın
// 4. Aşağıdaki BEHOLD_WIDGET_ID değerini aldığınız ID ile değiştirin
// ──────────────────────────────────────────────────────────────────────────
const BEHOLD_WIDGET_ID = 'BEHOLD_WIDGET_ID_BURAYA'; // ← Behold.so'dan aldığınız ID

// Placeholder veriler — Behold.so aktif edilene kadar gösterilir
const PLACEHOLDER_POSTS = [
  {
    id: 1,
    date: '23 Haziran 2025',
    title: 'Kolaysoft etkinliklerinden güncel kareler.',
    gradient: 'linear-gradient(160deg, #1a3a6b 0%, #0A1628 60%, #0d2a50 100%)',
  },
  {
    id: 2,
    date: '21 Haziran 2026',
    title: 'Dijital dönüşüm yolculuğumuzdan öne çıkan anlar.',
    gradient: 'linear-gradient(160deg, #1e4080 0%, #0A1628 60%, #0f2d55 100%)',
  },
  {
    id: 3,
    date: '19 Haziran 2026',
    title: 'Kolaysoft ekibinden ofis yaşamına dair kareler.',
    gradient: 'linear-gradient(160deg, #163a72 0%, #0A1628 60%, #0c2848 100%)',
  },
  {
    id: 4,
    date: '17 Haziran 2026',
    title: 'Teknoloji, ekip kültürü ve etkinliklerden güncel paylaşımlar.',
    gradient: 'linear-gradient(160deg, #1a4488 0%, #0A1628 60%, #102e58 100%)',
  },
];

export default function InstagramFeed() {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const isConfigured = BEHOLD_WIDGET_ID !== 'BEHOLD_WIDGET_ID_BURAYA';

  useEffect(() => {
    if (!isConfigured) return;

    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://w.behold.so/widget.js';
      document.head.appendChild(script);
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      const widget = document.createElement('behold-widget');
      widget.setAttribute('feed-id', BEHOLD_WIDGET_ID);
      containerRef.current.appendChild(widget);
    }
  }, [isConfigured]);

  return (
    <section className="py-16 bg-[#f5f8fa] overflow-hidden">
      <div className="container-wide">

        {/* ── Başlık ── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2"
            >
              Sosyal Medya
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-cabin font-800 text-3xl sm:text-4xl text-koc-dark leading-tight mb-3"
            >
              Sosyal Medyada Kolaysoft
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-500 text-sm leading-relaxed max-w-lg"
            >
              Etkinliklerimizden, ekip kültürümüzden ve dijital dönüşüm yolculuğumuzdan güncel kareler Instagram hesabımızdan takip edilebilir.
            </motion.p>
          </div>

          <motion.a
            href="https://www.instagram.com/kolaysoft/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0cf25d] text-white text-sm font-semibold hover:bg-[#0ac04d] transition-colors self-start sm:self-auto whitespace-nowrap shadow-sm"
          >
            <InstagramIcon className="w-4 h-4" />
            Instagram'da Takip Et
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* ── Feed alanı ── */}
        {isConfigured ? (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          />
        ) : (
          <>
            {/* Kart grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
            >
              {PLACEHOLDER_POSTS.map((post, i) => (
                <motion.a
                  key={post.id}
                  href="https://www.instagram.com/kolaysoft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="group block"
                >
                  {/* Kart görseli */}
                  <div
                    className="relative w-full rounded-xl overflow-hidden mb-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lift bg-white border border-slate-100"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {/* Üst sağ köşede Instagram ikonu */}
                    <div className="absolute top-3 right-3 opacity-20 group-hover:opacity-50 transition-opacity">
                      <InstagramIcon className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>

                  {/* Kart alt bilgi */}
                  <div className="px-0.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {post.date}
                    </div>

                    <p className="text-sm font-semibold text-slate-800 leading-snug mb-2 line-clamp-2 group-hover:text-koc-navy transition-colors">
                      {post.title}
                    </p>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0cf25d] group-hover:text-koc-navy transition-colors">
                      Instagram'da Bkz <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Sayfa noktalı navigation */}
            <div className="flex items-center justify-center gap-2">
              {[0, 1].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentPage(dot)}
                  className={`rounded-full transition-all duration-300 ${
                    currentPage === dot
                      ? 'w-6 h-2 bg-koc-navy'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}
