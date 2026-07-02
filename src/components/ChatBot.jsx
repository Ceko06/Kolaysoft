import { useState, useRef, useEffect } from 'react';
import { X, Send, Plus, MessageSquare, Sparkles } from 'lucide-react';

const NEON = '#39FF14';
const NAVY = '#0A1628';
const GREEN = '#16a34a';
const CARD = '#ffffff';
const SIDEBAR = '#f7f8fa';
const PANEL = '#ffffff';
const BOT_BUBBLE = '#f1f3f5';
const BORDER = '#e5e7eb';

const SUGGESTIONS = [
  { title: 'Çözümleriniz neler?', desc: 'Kolaysoft ürünleri hakkında bilgi al' },
  { title: 'E-Dönüşüm süreci', desc: 'E-fatura ve e-arşiv nasıl işliyor?' },
  { title: 'Demo talebi', desc: 'Bir ürün için demo planlamak istiyorum' },
  { title: 'İletişime geç', desc: 'Ekiple nasıl iletişim kurarım?' },
];

function botReply(text) {
  const t = text.toLowerCase();
  if (t.includes('demo'))
    return 'Demo talebiniz için sizi ekibimize yönlendireceğim. Hangi ürünle ilgileniyorsunuz?';
  if (t.includes('dönüşüm') || t.includes('fatura') || t.includes('arşiv'))
    return 'E-Dönüşüm çözümlerimiz e-fatura, e-arşiv ve e-defter süreçlerini uçtan uca yönetir. Detaylı bilgi ister misiniz?';
  if (t.includes('çözüm') || t.includes('ürün'))
    return 'Kolaysoft; Peyk, E-Dönüşüm, KolayCare, Kolaysoft POS ve daha fazlası gibi çözümler sunuyor. Hangisini merak ediyorsunuz?';
  if (t.includes('iletişim') || t.includes('telefon') || t.includes('mail'))
    return 'İletişim sayfamızdan bize ulaşabilir veya buradan mesaj bırakabilirsiniz. Yardımcı olayım mı?';
  return 'Mesajınız için teşekkürler! En kısa sürede sizinle ilgileneceğiz. Başka bir sorunuz var mı?';
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const hasChat = messages.length > 0;

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, typing]);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('open-koala', openHandler);
    return () => window.removeEventListener('open-koala', openHandler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const esc = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
    return () => {
      window.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
    };
  }, [open]);

  const pushAndReply = (text) => {
    setMessages((prev) => [...prev, { from: 'user', text }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: botReply(text) }]);
    }, 1300);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput('');
    pushAndReply(text);
  };

  const newChat = () => {
    setMessages([]);
    setInput('');
    setTyping(false);
    setSidebarOpen(false);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
  };

  if (!open) return null;

  const Avatar = ({ size = 32, bordered = true }) => (
    <video
      src="/chat-bot.mp4"
      autoPlay
      loop
      muted
      playsInline
      className={(bordered ? 'rounded-lg object-cover ' : 'object-contain ') + 'shrink-0'}
      style={{
        height: size,
        width: size,
        border: bordered ? `1.5px solid ${NEON}` : 'none',
        overflow: bordered ? 'hidden' : 'visible',
      }}
    />
  );

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-0 sm:p-4 animate-[koFade_0.2s_ease-out]"
      style={{ backgroundColor: 'rgba(10,22,40,0.45)', backdropFilter: 'blur(4px)' }}
      onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        className="relative flex h-full w-full sm:h-[85vh] sm:max-h-[760px] sm:w-[min(920px,95vw)] overflow-hidden sm:rounded-2xl animate-[koRise_0.25s_ease-out]"
        style={{ backgroundColor: CARD, border: `1px solid ${NEON}66`, boxShadow: `0 0 60px -6px ${NEON}80, 0 0 24px -4px ${NEON}55` }}
      >
        <aside
          className={(sidebarOpen ? 'flex ' : 'hidden ') + 'md:flex absolute md:static inset-y-0 left-0 z-20 w-64 flex-col p-3 gap-2'}
          style={{ backgroundColor: SIDEBAR, borderRight: `1px solid ${BORDER}` }}
        >
          <button
            onClick={newChat}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: NEON, color: NAVY }}
          >
            <Plus size={16} /> Yeni sohbet
          </button>
          <div className="mt-2 text-[11px] uppercase tracking-wide px-1" style={{ color: '#94a3b8' }}>Sohbetler</div>
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm" style={{ backgroundColor: '#eef1f4', color: NAVY }}>
            <MessageSquare size={15} style={{ color: GREEN }} />
            <span className="truncate">{hasChat ? (messages[0].text || 'Sohbet') : 'Yeni sohbet'}</span>
          </div>
          <div className="mt-auto flex items-center gap-2 px-1 pt-3 text-xs" style={{ color: '#94a3b8' }}>
            <Sparkles size={13} style={{ color: GREEN }} /> Koala.ai - Kolaysoft
          </div>
        </aside>

        <div className="flex flex-1 flex-col min-w-0">
          <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: `1px solid ${BORDER}` }}>
            <button
              onClick={() => setSidebarOpen((s) => !s)}
              className="md:hidden"
              style={{ color: '#64748b' }}
              aria-label="Menü"
            >
              <MessageSquare size={20} />
            </button>
            <Avatar size={40} />
            <div className="flex-1 leading-tight">
              <p className="text-base font-bold" style={{ color: NAVY }}>Koala.ai</p>
              <p className="text-[11px] font-medium" style={{ color: GREEN }}>● Çevrimiçi</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Kapat"
              className="transition-colors hover:opacity-70"
              style={{ color: '#64748b' }}
            >
              <X size={22} />
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto" style={{ backgroundColor: PANEL }}>
            {!hasChat && !typing ? (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <Avatar size={180} bordered={false} />
                <h2 className="mt-4 text-xl font-bold" style={{ color: NAVY }}>Size nasıl yardımcı olabilirim?</h2>
                <p className="mt-1 text-sm" style={{ color: '#64748b' }}>Kolaysoft asistanı Koala.ai'ye bir şey sorun</p>
                <div className="mt-6 grid w-full max-w-lg grid-cols-1 sm:grid-cols-2 gap-3">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s.title}
                      onClick={() => pushAndReply(s.title)}
                      className="rounded-xl px-4 py-3 text-left transition-colors hover:bg-slate-50"
                      style={{ backgroundColor: '#fff', border: `1px solid ${BORDER}` }}
                    >
                      <p className="text-sm font-semibold" style={{ color: NAVY }}>{s.title}</p>
                      <p className="mt-0.5 text-xs" style={{ color: '#64748b' }}>{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mx-auto w-full max-w-2xl space-y-5 px-4 py-6">
                {messages.map((m, i) => (
                  <div key={i} className={'flex gap-3 ' + (m.from === 'user' ? 'flex-row-reverse' : '')}>
                    {m.from === 'bot' ? (
                      <Avatar size={32} />
                    ) : (
                      <div
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-bold"
                        style={{ backgroundColor: NEON, color: NAVY }}
                      >
                        Siz
                      </div>
                    )}
                    <div
                      className="max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                      style={
                        m.from === 'user'
                          ? { backgroundColor: NAVY, color: '#fff', borderBottomRightRadius: 4, fontWeight: 500 }
                          : { backgroundColor: BOT_BUBBLE, color: NAVY, borderBottomLeftRadius: 4, border: `1px solid ${BORDER}` }
                      }
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                {typing && (
                  <div className="flex gap-3">
                    <Avatar size={32} />
                    <div className="flex gap-1 rounded-2xl px-4 py-3.5" style={{ backgroundColor: BOT_BUBBLE, border: `1px solid ${BORDER}` }}>
                      <span className="h-2 w-2 rounded-full animate-bounce [animation-delay:-0.3s]" style={{ backgroundColor: GREEN }} />
                      <span className="h-2 w-2 rounded-full animate-bounce [animation-delay:-0.15s]" style={{ backgroundColor: GREEN }} />
                      <span className="h-2 w-2 rounded-full animate-bounce" style={{ backgroundColor: GREEN }} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="px-4 py-3" style={{ borderTop: `1px solid ${BORDER}` }}>
            <div
              className="mx-auto flex w-full max-w-2xl items-end gap-2 rounded-2xl px-3 py-2"
              style={{ backgroundColor: '#f7f8fa', border: `1px solid ${BORDER}` }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) handleSend(e);
                }}
                rows={1}
                placeholder="Koala.ai'ye mesaj yazın..."
                className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none max-h-32"
                style={{ color: NAVY }}
              />
              <button
                type="submit"
                aria-label="Gönder"
                disabled={!input.trim()}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full transition-transform hover:scale-105 disabled:opacity-40"
                style={{ backgroundColor: NEON, color: NAVY }}
              >
                <Send size={16} />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px]" style={{ color: '#94a3b8' }}>Koala.ai hata yapabilir. Önemli bilgileri doğrulayın.</p>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes koFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes koRise { from { opacity: 0; transform: translateY(12px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
      `}</style>
    </div>
  );
}
