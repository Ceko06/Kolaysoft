import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import nodemailer from 'nodemailer';
import multer from 'multer';
import 'dotenv/config';

const __dirname = dirname(fileURLToPath(import.meta.url));
const NEWS_FILE = join(__dirname, 'news.json');
const PUBLIC_NEWS_FILE = join(__dirname, 'public', 'news.json');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// ── Multer: CV dosyasını memory'de tut ──
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (_, file, cb) => {
    const allowed = ['application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword'];
    cb(null, allowed.includes(file.mimetype));
  },
});

// ── Nodemailer transporter ──
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ── POST /api/basvuru ──
app.post('/api/basvuru', upload.single('cv'), async (req, res) => {
  const { ad, email, telefon, pozisyon, mesaj, alan } = req.body;

  if (!ad || !email) {
    return res.status(400).json({ error: 'Ad ve e-posta zorunludur.' });
  }

  const attachments = [];
  if (req.file) {
    attachments.push({
      filename: req.file.originalname,
      content: req.file.buffer,
      contentType: req.file.mimetype,
    });
  }

  const isGenelBasvuru = pozisyon === 'Genel Başvuru';

  const html = `
    <h2 style="color:#184A97">${isGenelBasvuru ? 'Yeni Genel Başvuru' : 'Yeni Kariyer Başvurusu'}</h2>
    <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Ad Soyad</b></td><td>${ad}</td></tr>
      <tr><td><b>E-posta</b></td><td>${email}</td></tr>
      <tr><td><b>Telefon</b></td><td>${telefon || '—'}</td></tr>
      <tr><td><b>Pozisyon</b></td><td>${pozisyon || 'Genel Başvuru'}</td></tr>
      ${alan ? `<tr><td><b>Çalışmak İstediği Alan</b></td><td>${alan}</td></tr>` : ''}
      <tr><td><b>LinkedIn / Portfolyo</b></td><td>${req.body.linkedin || '—'}</td></tr>
      <tr><td><b>Not</b></td><td>${mesaj || '—'}</td></tr>
    </table>
    ${req.file ? `<p>📎 CV eki mevcut: <b>${req.file.originalname}</b></p>` : '<p>CV eki gönderilmedi.</p>'}
  `;

  try {
    await transporter.sendMail({
      from: `"Kolaysoft Kariyer" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || 'ik@kolaysoft.com.tr',
      replyTo: email,
      subject: `Kariyer Başvurusu – ${ad}${pozisyon ? ' / ' + pozisyon : ''}`,
      html,
      attachments,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail gönderilemedi:', err.message);
    res.status(500).json({ error: 'Mail gönderilemedi. SMTP ayarlarını kontrol edin.' });
  }
});

function readNews() {
  if (!existsSync(NEWS_FILE)) return [];
  try {
    return JSON.parse(readFileSync(NEWS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeNews(data) {
  const json = JSON.stringify(data, null, 2);
  writeFileSync(NEWS_FILE, json, 'utf-8');
  // public/news.json'ı da güncelle (sunucu kapalıyken fallback için)
  try { writeFileSync(PUBLIC_NEWS_FILE, json, 'utf-8'); } catch {}
}

// Tüm haberleri getir
app.get('/api/news', (req, res) => {
  res.json(readNews());
});

// Tüm haberleri kaydet (toplu güncelleme)
app.post('/api/news', (req, res) => {
  const news = req.body;
  if (!Array.isArray(news)) return res.status(400).json({ error: 'Dizi bekleniyor' });
  writeNews(news);
  res.json({ ok: true });
});

// Tek haber ekle
app.post('/api/news/add', (req, res) => {
  const news = readNews();
  const item = { ...req.body, id: Date.now() };
  news.unshift(item);
  writeNews(news);
  res.json(item);
});

// Haber güncelle
app.put('/api/news/:id', (req, res) => {
  const id = Number(req.params.id);
  let news = readNews();
  const idx = news.findIndex(n => n.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Haber bulunamadı' });
  news[idx] = { ...news[idx], ...req.body };
  writeNews(news);
  res.json(news[idx]);
});

// Haber sil
app.delete('/api/news/:id', (req, res) => {
  const id = Number(req.params.id);
  let news = readNews();
  news = news.filter(n => n.id !== id);
  writeNews(news);
  res.json({ ok: true });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Haber API sunucusu çalışıyor: http://localhost:${PORT}`);
});
