import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Building2, Users, Target, Rocket, Lightbulb, Award, Cpu } from 'lucide-react';
import headerImage from '../../assets/headers/kurumsalhd.png';

const corporatePages = [
  { path: '/kurumsal/biz-kimiz', label: 'Biz Kimiz', icon: Users },
  { path: '/kurumsal/hikayemiz', label: 'Hikayemiz', icon: Rocket },
  { path: '/kurumsal/degerlerimiz', label: 'Değerlerimiz', icon: Award },
  { path: '/kurumsal/teknoloji', label: 'Teknoloji', icon: Cpu },
  { path: '/kurumsal/faaliyetler', label: 'Faaliyetler', icon: Lightbulb },
  { path: '/kurumsal/basarilarimiz', label: 'Başarılarımız', icon: Award },
];

export default function CorporateLayout() {
  const location = useLocation();
  const currentPage = corporatePages.find(p => p.path === location.pathname);

  return (
    <div className="bg-white min-h-screen">
<header className="pt-28 pb-16 relative overflow-hidden" style={{backgroundImage: `url(${headerImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="absolute inset-0 bg-koc-navy opacity-50" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tech-cyan rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-tech-purple rounded-full blur-[120px]" />
        </div>
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm mb-6"
          >
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <Link to="/kurumsal" className="text-slate-400 hover:text-white transition-colors">Kurumsal</Link>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <span className="text-[#FFFFFF] font-medium">{currentPage?.label || 'Sayfa'}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cabin font-800 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          >
            Kurumsal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg max-w-2xl"
          >
            Teknolojiyi yalnızca geliştiren değil, sektörlere yön veren bir yapı kuruyoruz.
          </motion.p>
        </div>
      </header>

      <div className="container-wide py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            {/* Mobile: yatay kaydırmalı nav */}
            <nav className="lg:hidden flex overflow-x-auto gap-2 pb-2 mb-4 scrollbar-none">
              {corporatePages.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl whitespace-nowrap text-sm transition-all duration-200 flex-shrink-0 ${
                    location.pathname === path
                      ? 'bg-tech-cyan text-white shadow-lg shadow-tech-cyan/20'
                      : 'text-slate-600 bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-semibold">{label}</span>
                </Link>
              ))}
            </nav>
            {/* Desktop: dikey sticky nav */}
            <nav className="hidden lg:block sticky top-28 space-y-1">
              {corporatePages.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    location.pathname === path
                      ? 'bg-tech-cyan text-white shadow-lg shadow-tech-cyan/20'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{label}</span>
                </Link>
              ))}
            </nav>
          </aside>

          <main className="lg:col-span-3">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
