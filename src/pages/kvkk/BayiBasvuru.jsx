import { LegalDoc, P, H2, List, Table } from './LegalDoc';

export default function BayiBasvuru() {
  return (
    <LegalDoc title="KOLAYSOFT TEKNOLOJİ ANONİM ŞİRKETİ BAYİ BAŞVURU KVKK AYDINLATMA METNİ">
      <P>
        Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) 10. maddesi ile Aydınlatma
        Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında, Smart Dönüşüm Bayilerine
        yönelik, Kolaysoft Teknoloji Anonim Şirketi (KOLAYSOFT) tarafından hazırlanmıştır.
      </P>

      <H2>1. VERİ SORUMLUSUNUN KİMLİĞİ</H2>
      <Table
        head={['', '']}
        rows={[
          [<strong>Unvan</strong>, 'Kolaysoft Teknoloji Anonim Şirketi'],
          [<strong>MERSİS No</strong>, '0575046400200014'],
          [<strong>Adres</strong>, 'YDA Center Kızılırmak Mahallesi Dumlupınar Bulvarı No:9/A567 Çankaya / Ankara'],
          [<strong>E-Posta</strong>, 'info@kolaysoft.com.tr'],
        ]}
      />

      <H2>2. İŞLENEN KİŞİSEL VERİLER, İŞLEME AMAÇLARI, HUKUKİ SEBEPLERİ</H2>
      <P>
        KOLAYSOFT e dönüşüm uygulamaları bayilik başvurusu kapsamında, aşağıdaki kişisel verileriniz işleme amacı ve hukuki
        sebeplere bağlı olarak işlemektedir:
      </P>
      <Table
        head={['Veri Kategorisi', 'İşlenen Kişisel Veriler', 'İşleme Amacı', 'Hukuki Sebep (KVKK)']}
        rows={[
          ['Kimlik', 'Ad, soyad, TCKN/VKN', 'Başvuru işlemleri, bayilik değerlendirmesi ve sözleşme hazırlık süreci', 'm.5/2-f (Meşru menfaat), m.5/2-c (Sözleşmenin kurulması veya ifası)'],
          ['İletişim', 'Telefon, e-posta, il, ilçe', 'Başvuru işlemleri, bayilik değerlendirmesi ve sözleşme hazırlık süreci', 'm.5/2-f (Meşru menfaat), m.5/2-c (Sözleşmenin kurulması veya ifası)'],
          ['Mesleki', 'Unvanı, sektörü', 'Başvuru işlemleri, bayilik değerlendirmesi ve sözleşme hazırlık süreci', 'm.5/2-f (Meşru menfaat), m.5/2-c (Sözleşmenin kurulması veya ifası)'],
          ['İşlem Güvenliği', 'IP adresi, log kayıtları, çerez ve oturum bilgileri', 'Sistem güvenliği, yetkisiz erişim engelleme', 'm.5/2-f (Meşru menfaat), m.5/2-a (Kanunlarda açıkça öngörülmesi), m.5/2-ç (Hukuki yükümlülük) ve m.5/2-f (Meşru menfaat)'],
        ]}
      />

      <H2>3. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMİ</H2>
      <P>Kişisel verileriniz aşağıdaki yöntemlerle toplanmaktadır:</P>
      <List items={[
        'Bayi başvuru formunun elektronik ortamda doldurularak sisteme iletilmesi.',
        'İnternet sitesi ve portal ziyareti sırasında otomatik yöntemlerle (çerezler, log kayıtları, IP adresi).',
      ]} />

      <H2>4. KİŞİSEL VERİLERİN AKTARILMA AMACI VE ALICI GRUPLARI</H2>
      <P>
        İşlenen kişisel verileriniz, KVKK’nın 8. maddesindeki kurallara uygun olarak, aşağıda belirtilen alıcı gruplarına
        aktarılabilmektedir:
      </P>
      <Table
        head={['Alıcı Grubu', 'Aktarım Amacı', 'Hukuki Dayanak (KVKK)']}
        rows={[
          ['İş ortakları ve tedarikçiler', 'Sistemlerin işletimi, teknik altyapı ve destek hizmetlerinin sağlanması. Yurt içi hizmet sağlayıcılar (barındırma, e-posta/SMS, CRM, IT destek, güvenlik hizmetleri)', 'm.5/2-f (meşru menfaat)'],
          ['Adli ve idari makamlar', 'Hukuki uyuşmazlıkların çözümü, yetkili mercilerin talebi', 'm.5/2-e (Hakkın tesisi, kullanılması veya korunması) ve m.5/2-ç (Hukuki yükümlülüğün yerine getirilmesi)'],
          ['Yetkili kamu kurum ve kuruluşları', 'Yasal yükümlülüklerin yerine getirilmesi ve resmi taleplere cevap verilmesi', 'm.5/2-ç (Hukuki yükümlülüğün yerine getirilmesi), m.5/2-e (Hakkın tesisi/korunması)'],
        ]}
      />

      <H2>5. KVKK KAPSAMINDAKİ HAKLARINIZ</H2>
      <P>
        Tarafımızca işlenen kişisel verilerinize ilişkin olarak KVKK’nın 11. maddesi kapsamındaki taleplerinizi; Veri
        Sorumlusu Başvuru Usul ve Esasları Hakkında Tebliğ’e uygun aşağıdaki şekilde iletebilirsiniz:
      </P>
      <List items={[
        'Islak imzalı dilekçe ile adresimize bizzat veya noter aracılığıyla.',
        'Kimliğinizi tespit edici belgelerle birlikte, şirketimizin posta adresine iadeli taahhütlü posta yoluyla.',
        'Sistemimizde kayıtlı e-posta adresinizi kullanarak adresine info@kolaysoft.com.tr e-posta ile.',
        'E-posta adresiniz sistemimizde kayıtlı değilse, e imzalı belge ile info@kolaysoft.com.tr',
      ]} />
      <P>
        Talepleriniz, niteliğine göre en geç 30 (otuz) gün içinde, kimlik doğrulaması yapıldıktan sonra sonuçlandırılır.
      </P>
      <P>
        Taleplerinizi daha kolay bildirmek isterseniz “Kişisel Veri Sahibi Başvuru Formu”nu doldurabilirsiniz.
      </P>
    </LegalDoc>
  );
}
