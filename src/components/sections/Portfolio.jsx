import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import pic01 from '../../assets/mediacenter/media1.png';

// ─── Load all images from mediacenter folder (Vite glob import) ───────────────
// Falls back gracefully if folder is empty or path differs
const globImages = import.meta.glob(
  '../../assets/mediacenter/*.{jpg,jpeg,png,webp,gif,svg}',
  { eager: true, query: '?url', import: 'default' }
);

const localImages = Object.values(globImages);

// Fallback images (used when local assets aren't available / for preview)


const images = localImages.length >= 6 ? localImages : fallbackImages;

// Distribute images into two columns
function splitColumns(imgs) {
  const col1 = imgs.filter((_, i) => i % 2 === 0);
  const col2 = imgs.filter((_, i) => i % 2 !== 0);
  return [col1, col2];
}

// Infinite ticker column
function TickerColumn({ images: imgs, direction = 'up', speed = 28 }) {
  const trackRef = useRef(null);
  // Duplicate for seamless loop
  const doubled = [...imgs, ...imgs];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame;
    let pos = direction === 'up' ? 0 : -(track.scrollHeight / 2);
    const step = direction === 'up' ? -0.4 : 0.4;
    const half = track.scrollHeight / 2;

    function animate() {
      pos += step;
      if (direction === 'up' && pos <= -half) pos = 0;
      if (direction === 'down' && pos >= 0) pos = -half;
      track.style.transform = `translateY(${pos}px)`;
      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden h-[420px] lg:h-screen">
      {/* Top & bottom fade masks */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10"
        style={{ height: '80px', background: 'linear-gradient(to bottom, white 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
        style={{ height: '80px', background: 'linear-gradient(to top, white 0%, transparent 100%)' }}
      />

      <div ref={trackRef} className="flex flex-col gap-3 will-change-transform">
        {doubled.map((src, i) => (
<div key={i} className="w-full h-[180px] sm:h-[240px] lg:h-[305px] overflow-hidden flex-shrink-0">
  <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy"/>
</div>
        ))}
      </div>
    </div>
  );
}

export default function MediaCenter() {
  const [col1, col2] = splitColumns(images);

  return (
    <section id="medya-merkezi"  className="bg-white overflow-hidden mt-0 lg:mt-[-80px]">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text content ─────────────────────────────── */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-koc-navy mb-4"
            >
              Basın & İletişim
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-cabin font-800 text-koc-dark leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Medya{' '}
              <span className="text-koc-navy">Merkezi</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-base text-koc-dark/60 leading-relaxed max-w-sm mb-8"
            >
              KolaysoftGrup ve şirketleri hakkındaki tüm gelişmeleri takip edin.
            </motion.p>

            <motion.a
              href="/medya-merkezi"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-lg text-sm font-semibold text-white duration-200"
              style={{ background: '#1e40af' }}
            >
              Medya Merkezi <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* ── RIGHT: Two-column vertical ticker ─────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="grid grid-cols-2 gap-3"
          >
            <TickerColumn images={col1} direction="up" />
            <TickerColumn images={col2} direction="down" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
