import { createContext, useContext, useState, useEffect } from 'react';

const API = 'http://localhost:3001/api/news';

const TR_MONTHS = {
  'ocak': 0, 'şubat': 1, 'mart': 2, 'nisan': 3, 'mayıs': 4, 'haziran': 5,
  'temmuz': 6, 'ağustos': 7, 'eylül': 8, 'ekim': 9, 'kasım': 10, 'aralık': 11
};

function parseDate(str) {
  if (!str) return 0;
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return new Date(str).getTime();
  const parts = str.trim().toLowerCase().split(' ');
  if (parts.length === 3) {
    const day = parseInt(parts[0]);
    const month = TR_MONTHS[parts[1]];
    const year = parseInt(parts[2]);
    if (!isNaN(day) && month !== undefined && !isNaN(year)) {
      return new Date(year, month, day).getTime();
    }
  }
  return 0;
}

function sortByDate(arr) {
  return [...arr].sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

const NewsContext = createContext(null);

export function NewsProvider({ children }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Önce API'den yükle, başarısız olursa public/news.json'dan yükle
  useEffect(() => {
    fetch(API)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(data => {
        setNews(sortByDate(data));
        setLoading(false);
      })
      .catch(() => {
        // API çalışmıyor — statik dosyadan yükle
        fetch('/news.json')
          .then(r => r.json())
          .then(data => {
            setNews(sortByDate(data));
            setLoading(false);
          })
          .catch(() => setLoading(false));
      });
  }, []);

  async function addNews(item) {
    const newItem = await fetch(`${API}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).then(r => r.json());
    setNews(prev => sortByDate([newItem, ...prev]));
  }

  async function updateNews(id, updates) {
    const updated = await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates)
    }).then(r => r.json());
    setNews(prev => sortByDate(prev.map(n => n.id === id ? updated : n)));
  }

  async function deleteNews(id) {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
    setNews(prev => prev.filter(n => n.id !== id));
  }

  function getNewsById(id) {
    return news.find(n => n.id === Number(id));
  }

  return (
    <NewsContext.Provider value={{ news: sortByDate(news), addNews, updateNews, deleteNews, getNewsById, loading }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const ctx = useContext(NewsContext);
  if (!ctx) throw new Error('useNews must be used within NewsProvider');
  return ctx;
}
