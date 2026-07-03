import logo from '../../assets/kolay-logo yatay.svg';
import icon from '../../assets/icon.png';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Sparkles, Send, Globe, Code, Video } from 'lucide-react';

const footerLinks = {
  'Kurumsal': [
    { label: 'Biz Kimiz', to: '/kurumsal/biz-kimiz' },
    { label: 'Hikayemiz', to: '/kurumsal/hikayemiz' },
    { label: 'Değerlerimiz', to: '/kurumsal/degerlerimiz' },
    { label: 'Teknoloji', to: '/kurumsal/teknoloji' },
    { label: 'Faaliyetler', to: '/kurumsal/faaliyetler' },
    { label: 'Çalışma Hayatı', to: '/kariyer' },
    { label: 'İletişim', to: '/iletisim' },
  ],
  'Çözümler': [
    { label: 'e-Dönüşüm', to: '/cozumler/e-donusum' },
    { label: 'KolaysoftPOS', to: '#' },
    { label: 'KolayCare', to: '/cozumler/kolay-care' },
    { label: 'Peyk', to: '/cozumler/peyk' },
    { label: 'Deep Black', to: '#' },
    { label: 'Kırmızı Kurumsal', to: '#' },
    { label: 'Fixxit', to: '#' },
  ],
  'Şirketler': [
    { label: 'KolayCare', to: '#' },
    { label: 'PEYK', to: '#' },
    { label: 'FİXXİT', to: '#' },
    { label: 'Kırmızı Kurumsal', to: '#' },
    { label: 'Deep Black', to: '#' },
    { label: 'e-DÖNÜŞÜM', to: '#' },
  ],
  'KVKK': [
    { label: 'KVKK Çerez Aydınlatma Metni', to: '/kurumsal/kvkk/cerez-aydinlatma-metni' },
    { label: 'Gizlilik Politikası', to: '/kurumsal/kvkk/gizlilik-politikasi' },
    { label: 'Bayi Başvuru KVKK Aydınlatma Metni', to: '/kurumsal/kvkk/bayi-basvuru-aydinlatma-metni' },
    { label: 'KVKK İletişim Formu Aydınlatma Metni', to: '/kurumsal/kvkk/iletisim-formu-aydinlatma-metni' },
    { label: 'İş ve Staj Başvurusu Aydınlatma Metni', to: '/kurumsal/kvkk/is-staj-basvurusu-aydinlatma-metni' },
  ],
};

const socials = [
  { icon: Send, label: 'LinkedIn', href: '#' },
  { icon: Globe, label: 'X', href: '#' },
  { icon: Code, label: 'GitHub', href: '#' },
  { icon: Video, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Watermark ikon */}
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="absolute left-[-7rem] top-1/3 -translate-y-1/2 w-72 h-72 object-contain opacity-[0.20] pointer-events-none select-none"
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-cyan/30 to-transparent" />

      <div className="container-wide py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-200">
          <div className="flex flex-col items-start text-left">
            <img src={logo} alt="Kolaysoft" className="h-12 w-auto mb-5" />
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Türkiye'nin lider e-Dönüşüm teknoloji grubu. 10.000+ işletmeye
              güvenli ve ölçeklenebilir dijital dönüşüm çözümleri sunuyoruz.
            </p>
            <div className="space-y-3 text-sm w-full">
              <div className="flex items-center justify-left gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
                  <MapPin className="w-4 h-4 text-tech-cyan" />
                </div>
                <span className="text-slate-700">YDA Center, Çankaya / Ankara</span>
              </div>
              <div className="flex items-center justify-left gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
                  <Phone className="w-4 h-4 text-tech-cyan" />
                </div>
                <a href="tel:08502599090" className="text-slate-700 hover:text-tech-cyan">0850 259 90 90</a>
              </div>
              <div className="flex items-center justify-left gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200">
                  <Mail className="w-4 h-4 text-tech-cyan" />
                </div>
                <a href="mailto:info@kolaysoft.com.tr" className="text-slate-700 hover:text-tech-cyan">info@kolaysoft.com.tr</a>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col items-start text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-tech-cyan mb-4 flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> {category}
              </p>
              <ul className="space-y-2.5">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-slate-600 hover:text-tech-cyan transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 Kolaysoft Teknoloji Grubu. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-tech-cyan hover:border-tech-cyan/50 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
