import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';
import ydaimg02 from '../../assets/ydaimg02.jpg';

const contactInfo = [
  { icon: Phone, label: 'Telefon', value: '0850 259 90 90', sub: 'Pazartesi – Cuma, 09:00 – 18:00' },
  { icon: Mail, label: 'E-posta', value: 'info@kolaysoft.com.tr', sub: 'Ortalama 2 saat içinde yanıt' },
  { icon: MapPin, label: 'Merkez', value: 'YDA Center, Dumlupınar Bulvarı No:9/A567', sub: 'Çankaya / Ankara' },
  { icon: Send, label: 'Faks', value: '0850 259 91 91', sub: '7/24 faks hattı' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', service: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
<section id="contact" className="section-pad relative overflow-hidden bg-white">
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-tech-cyan/5 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-tech-purple/5 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:col-span-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tech-cyan/10 border border-tech-cyan/20 text-tech-cyan text-xs font-semibold mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" /> İletişim
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="font-cabin font-800 text-slate-900 leading-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Bize Ulaşın
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 leading-relaxed mb-10"
            >
          
            </motion.p>

            <div className="space-y-5 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <motion.div 
                  key={label} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0 border border-slate-200">
                    <Icon className="w-5 h-5 text-tech-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="font-semibold text-slate-800">{value}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden h-48 glass-card border border-slate-200 relative">
              <img
                src={ydaimg02}
                alt="YDA Center"
                className="w-full h-full object-cover opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-xl px-4 py-2.5 flex items-center gap-2 border border-slate-200">
                  <MapPin className="w-4 h-4 text-tech-cyan" />
                  <span className="text-sm font-semibold text-slate-800">Çankaya, Ankara</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex items-center justify-center">
            <img
              src="/assets/bumerang-yeşil.png"
              alt=""
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
