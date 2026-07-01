import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, Lock, Check, X, Calendar, Upload } from 'lucide-react';
import { useNews } from '../context/NewsContext';

const ADMIN_PASSWORD = 'kolaysoft2024';

const emptyForm = {
  title: '',
  image: '',
  category: 'Haberler',
  date: new Date().toISOString().split('T')[0],
  content: ''
};

export default function NewsAdminPage() {
  const { news, addNews, updateNews, deleteNews } = useNews();

  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setFormData(prev => ({ ...prev, image: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const categories = ['Haberler', 'Ödüller', 'Etkinlikler', 'Basın Bültenleri', 'Duyurular'];

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) setIsLoggedIn(true);
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setShowAddForm(false);
  };

  const handleSave = () => {
    if (!formData.title.trim() || !formData.content.trim()) return;
    if (editingId !== null) {
      updateNews(editingId, formData);
    } else {
      addNews(formData);
    }
    resetForm();
  };

  const handleEdit = (news) => {
    setFormData({
      title: news.title,
      image: news.image,
      category: news.category,
      date: news.date,
      content: news.content
    });
    setEditingId(news.id);
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu haberi silmek istediğinizden emin misiniz?')) {
      deleteNews(id);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
        >
          <div className="flex items-center justify-center mb-6">
            <Lock className="w-12 h-12 text-koc-navy" />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Admin Girişi</h2>
          <p className="text-gray-600 text-center mb-6">Haber yönetimi için şifre giriniz</p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Şifre</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koc-navy focus:border-transparent"
                placeholder="Şifreyi giriniz"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-koc-navy text-white py-2 px-4 rounded-lg hover:bg-koc-navy/90 transition-colors font-semibold"
            >
              Giriş Yap
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Eye className="w-6 h-6 text-koc-navy" />
              <h1 className="text-xl font-bold text-gray-900">Haber Yönetimi</h1>
              <span className="text-sm text-gray-500">({news.length} haber)</span>
            </div>
            <button
              onClick={() => { setShowAddForm(!showAddForm); setEditingId(null); setFormData(emptyForm); }}
              className="bg-koc-navy text-white px-4 py-2 rounded-lg hover:bg-koc-navy/90 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Haber Ekle</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {editingId !== null ? 'Haber Düzenle' : 'Yeni Haber Ekle'}
              </h2>
              <button onClick={resetForm} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Başlık *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koc-navy focus:border-transparent"
                    placeholder="Haber başlığını giriniz"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Görsel</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.image.startsWith('data:') ? '' : formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koc-navy focus:border-transparent text-sm"
                      placeholder={formData.image.startsWith('data:') ? 'Yerel dosya seçildi' : 'Görsel URL giriniz'}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex items-center gap-1.5 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:border-gray-400 transition-colors flex-shrink-0"
                    >
                      <Upload className="w-4 h-4" />
                      Gözat
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                  {formData.image && (
                    <img
                      src={formData.image}
                      alt="Önizleme"
                      className="mt-2 h-24 w-full object-cover rounded-lg"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koc-navy focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tarih</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koc-navy focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">İçerik *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={12}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-koc-navy focus:border-transparent"
                  placeholder="Haber içeriğini giriniz"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={resetForm}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                İptal
              </button>
              <button
                onClick={handleSave}
                disabled={!formData.title.trim() || !formData.content.trim()}
                className="px-4 py-2 bg-koc-navy text-white rounded-lg hover:bg-koc-navy/90 transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Check className="w-4 h-4" />
                <span>{editingId !== null ? 'Güncelle' : 'Ekle'}</span>
              </button>
            </div>
          </motion.div>
        )}

        <div className="bg-white rounded-xl shadow-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Mevcut Haberler ({news.length})</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className="p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-4 flex-1 min-w-0">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-14 object-cover rounded-lg flex-shrink-0"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <h3 className="text-base font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
                        <span className="px-2 py-0.5 text-xs font-medium bg-koc-navy text-white rounded-full flex-shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                      <p className="text-gray-500 text-sm line-clamp-2">{item.content}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Düzenle"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
