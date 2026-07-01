import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, ArrowUpRight, ChevronLeft } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import InstagramFeed from '../components/sections/InstagramFeed';

const categories = ['Tümü', 'Basın Bültenleri', 'Haberler', 'Ödüller', 'Etkinlikler', 'Duyurular'];

const ITEMS_PER_PAGE = 9;

const categoryColors = {
  'Haberler':        { bg: 'bg-sky-500',     text: 'text-white' },
  'Ödüller':         { bg: 'bg-amber-500',   text: 'text-white' },
  'Etkinlikler':     { bg: 'bg-violet-500',  text: 'text-white' },
  'Basın Bültenleri':{ bg: 'bg-slate-600',   text: 'text-white' },
  'Duyurular':       { bg: 'bg-emerald-500', text: 'text-white' },
};

export default function MedyaMerkeziPage() {
  const { news: blogPosts } = useNews();
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [page, setPage] = useState(1);

  const filtered = activeCategory === 'Tümü'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  return (
    <div className="bg-white min-h-screen">
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img
          src="/assets/headers/medya-header.png"
          alt="Medya Merkezi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-koc-navy/90 via-slate-900/80 to-koc-navy/90" />
        
        <div className="container-wide relative z-10 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="text-white/80 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Medya Merkezi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Medya Merkezi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl"
          >
            Kolaysoft Grup Şirketlerinden en son haberler.
          </motion.p>
        </div>
      </header>

      {/* ── Hero: sol metin + sağ görsel ── */}
      <div className="container-wide py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sol */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-cabin font-800 text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
              Medya Merkezi
            </h2>
            <p className="text-slate-500 text-base leading-relaxed max-w-sm">
              Dijital dönüşümü herkes için erişilebilir, sürdürülebilir ve kolay
              hale getiren; geliştirdiği teknolojilerle iş dünyasına yön veren
              global bir teknoloji markası olmak.
            </p>
          </motion.div>

          {/* Sağ: görsel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden h-56 lg:h-64"
          >
            <img
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&h=500&fit=crop"
              alt="Medya Merkezi"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Filtre bar ── */}
      <div className="container-wide pb-4">
        <div className="flex items-center gap-2 flex-wrap py-4 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-koc-navy text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Haber sayısı */}
        <p className="text-sm text-[#0cf25d] font-semibold mt-4 mb-6">
          {filtered.length} Haber
        </p>

        {/* ── Kart grid ── */}
        <motion.div
          key={activeCategory + page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {paged.map((post, i) => {
            const color = categoryColors[post.category] || { bg: 'bg-slate-500', text: 'text-white' };
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:border-slate-200 hover:shadow-glow-green transition-all duration-300"
              >
                {/* Görsel */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold tracking-wider uppercase ${color.bg} ${color.text}`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>

                  <h2 className="font-cabin font-700 text-sm text-slate-800 leading-snug mb-4 line-clamp-2 group-hover:text-koc-navy transition-colors">
                    {post.title}
                  </h2>

                  <Link
                    to={`/medyamerkezi/${post.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0cf25d] hover:text-koc-navy transition-colors"
                  >
                    Devamını Oku <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pb-16">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Önceki
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                  page === n
                    ? 'bg-koc-navy text-white shadow-sm'
                    : 'border border-slate-200 text-slate-600 hover:border-slate-400'
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Sonraki <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* ── Instagram Akışı ── */}
      <InstagramFeed />
    </div>
  );
}
