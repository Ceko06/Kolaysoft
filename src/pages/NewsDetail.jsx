import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { useNews } from '../context/NewsContext';

const categoryColors = {
  'Haberler':        'bg-sky-500',
  'Ödüller':         'bg-amber-500',
  'Etkinlikler':     'bg-violet-500',
  'Basın Bültenleri':'bg-slate-600',
  'Duyurular':       'bg-emerald-500',
};

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { news, getNewsById } = useNews();

  const post = getNewsById(id);

  if (!post) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="container-wide pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Haber bulunamadı</h1>
          <p className="text-slate-500 mb-8">Aradığınız haber mevcut değil veya kaldırılmış olabilir.</p>
          <Link
            to="/medyamerkezi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-koc-navy text-white rounded-xl font-semibold hover:bg-koc-navy/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Medya Merkezine Dön
          </Link>
        </div>
      </div>
    );
  }

  // İlgili diğer haberler (aynı kategori, kendisi hariç, max 2)
  const related = news
    .filter(n => n.id !== post.id && n.category === post.category)
    .slice(0, 2);

  const otherNews = related.length > 0
    ? related
    : news.filter(n => n.id !== post.id).slice(0, 2);

  const badgeColor = categoryColors[post.category] || 'bg-slate-500';

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* ── Header (medya merkezi ile aynı stil) ── */}
      <header className="relative min-h-[240px] sm:h-96 overflow-hidden">
        <img
          src="/assets/headers/medya-header.png"
          alt="Haber Detayı"
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
            <Link to="/medyamerkezi" className="text-white/80 hover:text-white transition-colors">Medya Merkezi</Link>
            <ChevronRight className="w-4 h-4 text-white/60" />
            <span className="text-white font-medium">Haber Detayı</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className={`inline-block px-3 py-1 rounded text-[11px] font-bold tracking-wider uppercase text-white mb-3 ${badgeColor}`}>
              {post.category}
            </span>
            <h1 className="font-cabin font-800 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 max-w-3xl">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1.5 text-white/80 text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </motion.div>
        </div>
      </header>

      {/* ── İçerik ── */}
      <div className="container-wide py-16">
        <div className="max-w-4xl mx-auto">
          {/* Araçlar */}
          <div className="flex items-center gap-6 mb-8 text-sm text-slate-500">
            <button
              className="flex items-center gap-1.5 hover:text-slate-700 transition-colors"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
            >
              <Share2 className="w-4 h-4" />
              <span>Paylaş</span>
            </button>
            <button className="flex items-center gap-1.5 hover:text-slate-700 transition-colors">
              <Bookmark className="w-4 h-4" />
              <span>Kaydet</span>
            </button>
          </div>

          {/* Ana içerik */}
          <div className="prose prose-lg prose-slate max-w-none">
            {post.content.split('\n').map((paragraph, i) =>
              paragraph.trim() ? (
                <p key={i} className="text-slate-700 text-base leading-relaxed mb-6">
                  {paragraph}
                </p>
              ) : null
            )}
          </div>

          {/* ── Diğer haberler ── */}
          {otherNews.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-100">
              <h3 className="font-cabin font-700 text-xl text-slate-900 mb-8">Diğer Haberler</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {otherNews.map(n => (
                  <div key={n.id} className="group">
                    <div className="relative h-48 overflow-hidden rounded-xl bg-slate-100 mb-4">
                      {n.image && (
                        <img
                          src={n.image}
                          alt={n.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <h4 className="font-cabin font-700 text-lg text-slate-800 mb-2 group-hover:text-koc-navy transition-colors line-clamp-2">
                      {n.title}
                    </h4>
                    <p className="text-slate-500 text-sm mb-3">{n.date}</p>
                    <p className="text-slate-600 text-base leading-relaxed line-clamp-2">
                      {n.content}
                    </p>
                    <Link
                      to={`/medyamerkezi/${n.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#64b449] hover:text-koc-navy transition-colors mt-3"
                    >
                      Devamını Oku <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
