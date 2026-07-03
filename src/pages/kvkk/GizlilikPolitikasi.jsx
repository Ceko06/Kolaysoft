import { LegalDoc, P, H2, Info, List, Table } from './LegalDoc';

export default function GizlilikPolitikasi() {
  return (
    <LegalDoc title="KOLAYSOFT TEKNOLOJİ ANONİM ŞİRKETİ WEB SİTESİ GİZLİLİK ve GÜVENLİK POLİTİKASI">
      <P>
        Bu Politika, web sitesi ziyaretiniz sırada elde edilen kişisel verileri ve diğer bilgiler bakımından, 6698 sayılı
        Kişisel Verilerin Korunması Kanununun (“Kanun”) 10. maddesi kapsamında bilgilendirmek amacıyla, Kolaysoft Teknoloji
        Anonim Şirketi tarafından hazırlanmıştır.
      </P>
      <P>Web sitesi ziyaret bilgilerinizi, Kanuni amacına bağlı işlemekte ve gizli tutmaktayız.</P>

      <Info rows={[
        <span><strong>Adresi:</strong> YDA Center Kızılırmak Mahallesi Dumlupınar Bulvarı No:9/A567 Çankaya / Ankara</span>,
        <span><strong>Telefon:</strong> 879 259 90 90 &nbsp; <strong>E-mail:</strong> info@kolaysoft.com.tr</span>,
      ]} />

      <H2>1. EDİNİLEN BİLGİLER</H2>
      <P>
        Web sitemizde bulunan formlar üzerinden kişisel veriler otomatik yolla elde edilmekte, ilgili kişilere yönelik
        faaliyetlerimizde işlemekteyiz. Bu kişisel verilerinizin işlenmesine ilişkin bilgilendirme ilgili alan altında
        “<strong>Aydınlatma Metni</strong>” ile yapmaktayız. Web sitemizde bulunan formlarla sadece kendinize/şirketinize
        ait verileri iletmenizi bekliyoruz.
      </P>
      <P>
        5651 sayılı İnternet Ortamında Yapılan Yayınların Düzenlenmesi Hakkında Kanun (5651 s. Kanun) ve ilgili
        yönetmelikler kapsamındaki yükümlülüklerimiz gereği işlediğimiz: İnternet Protokol adresi (IP), ziyaret trafiği
        verilerini otomatik yolla işlemekteyiz.
      </P>
      <P>
        Web sitemizde çerezler bulunmaktadır. Çerezler, web sitesi kullanıcısının bilgisayarına bilgi yükleyerek, web
        sitesine bu bilgisayardan yapılacak ziyaretlerin tanınmasını sağlar, sitenin kullanımını ve uygunluğunu arttırır.
        Bu konuda bilgilendirme açılış sayfamızın altında çerez uyarısı alanında bulunan{' '}
        <strong>Çerez Aydınlatma Metni’mizi</strong> tıklayarak ulaşabilirsiniz
      </P>

      <H2>2. ÇOCUKLARIN MAHREMİYETİNİN KORUNMASI</H2>
      <P>
        Özellikle web sitemizde çocukların mahremiyetinin korunmasına önem verilmektedir. 18 yaşından küçüklere ait
        bilgiler, işleme amacıyla toplanması ve saklanması gerekli olması hallerinde istenmektedir.
      </P>

      <H2>3. BİLGİLERİN NASIL KULLANILACAĞI</H2>
      <P>Bu web sitesi üzerinden işlediğimiz kişisel verileri aşağıdaki amaçlarla kullanabiliriz:</P>
      <List items={[
        'Bilgi Güvenliği Süreçlerinin Yürütülmesi',
        'Erişim Yetkilerinin Yürütülmesi',
        'Faaliyetlerin Mevzuata Uygun Yürütülmesi',
        'Hukuk İşlerinin Takibi ve Yürütülmesi',
        'Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi',
        'Müşteri Memnuniyetine Yönelik Aktivitelerin Yürütülmesi',
        'Ürün Satış Süreçlerinin Yürütülmesi',
        'Organizasyon ve Etkinlik Yönetimi',
        'Saklama ve Arşiv Faaliyetlerinin Yürütülmesi',
        'Talep / Şikayetlerin Takibi',
        'Yetkili Kişi, Kurum ve Kuruluşlara Bilgi Verilmesi',
      ]} />

      <H2>4. İŞLENME AMAÇLARI VE HUKUKİ SEBEPLERİ</H2>
      <Table
        head={['İşlenen Kişisel Verileriniz', 'İşlenme Amaçları', 'Hukuki Sebepleri']}
        rows={[
          ['Ad, Soyadı, E-Posta, E-Posta Notları', 'Ürün satışının ifası amacı ile', 'Kanun 5/2 a ve 2 c'],
          ['Ad, Soyadı, E-Posta, E-Posta Notları', 'İletişim kurmak isteyen ziyaretçilerin bilgilerinin saklanması amacı ile', 'Kanun md. 5/1'],
          ['Bağlantı Zamanı, Bağlantı Bitiş Zamanı, IP Adresi, Kullanılan IP Protokolü ve Aktarılan Veri Miktarı', ' 5651 s. Kanun’da md. 4 “Yer Sağlayıcının Sorumluluğu” hükmü uyarınca açıkça veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi amacı ile', 'Kanun md.5/2 ç'],
          ['Ziyaret Edilen Sayfalarınızın Bilgisi', 'Şartları sağlayan meşru menfaatlerimiz sebebiyle', 'Kanun md. 5/2 f'],
        ]}
      />

      <H2>5. KİMLERE VE HANGİ AMAÇLA AKTARILACAĞI</H2>
      <P>
        Web sitemiz, kişisel veri ve diğer bilgilerinizi, bu verileri kullanılarak elde ettiği verileri başta iletişim
        taleplerini karşılayabilmek, yasal yükümlülüklerimizi ifa edebilmek, sözleşme gerekelrini yerine getirmek, kullanıcı
        deneyimini geliştirmek, kullanıcıların güvenliğini sağlamak, elektronik ortamında işleme dayanak olacak tüm kayıt
        ve belgeleri düzenlemek, mevzuat ve ilgili otoritelerce öngörülen bilgi saklama, raporlama, bilgilendirme
        yükümlülüklerine uymak, talep edilen ürün ve hizmetleri sunabilmek, web site yönetim politikalarımızı
        uygulayabilmek, kullanıcı kimliklerini doğrulamak, sistem performansını geliştirmek olmak üzere yukarıda işleme
        amaçları kısmında belirtilen amaçlarını gerçekleştirebilmek için, şikayet yönetimi ve güvenliğin sağlanmasına
        ilişkin yazılım şirketleri ve yasal zorunluluklar kapsamında yetkili kurum, kuruluş, merci, idari ve yargı organları
        ile paylaşabilecektir.
      </P>

      <H2>6. DİĞER KONULAR</H2>
      <P>
        Web sitemiz kişisel olmayan bilgileri kullanarak, kullanıcı istatistikleri ve web sitesi kullanımı ile ilgili bilgi
        takibi raporları oluşturabilir ve bu raporları başkalarıyla paylaşabilir. Rapordaki hiçbir bilgi, kimlik ve diğer
        kişisel verilere bağlı olmamaktadır.
      </P>
      <P>
        Veri ihlallerine karşı, bilgisayar ağı, uygulamaları ve veri tabanının güvenli olması ve yetkisiz girişlere ve
        kullanıma kapalı olması için önlemler alıyoruz. Kişisel verileriniz ile ilgili güvenlik kaygınız var ise, bu
        bilgileri e posta yoluyla gönderiniz.
      </P>
      <P>
        Web sitemiz diğer web sitelerine veya internet kaynaklarına bağlantı verebilir. Bu bağlantılardan birine
        girdiğinizde başka bir web sitesine veya internet kaynağına geçiş yapmış olursunuz. Bu kaynak, isteğiniz doğrultuda
        veya “cookies” veya diğer araçlarla sizden bilgi alabilir. Web sitemizin bu web siteler veya internet kaynakları
        veya bunların bilginizi toplaması, kullanması veya ifşa etmesi ile ilgili bir sorumluluk, yükümlülük veya kontrolü
        yoktur. Diğer web sitesi ve internet kaynaklarının gizlilik politikalarını gözden geçirmeniz ve bilgilerinizi nasıl
        toplayıp kullandığı konusunu anlamanız gerekir.
      </P>

      <H2>7. İLGİLİ KİŞİ HAKLARI</H2>
      <P>
        Kanunun “İlgili kişinin hakları”nı düzenleyen 11. maddesi kapsamındaki taleplerinizi, Veri Sorumlusu Başvuru Usul
        ve Esasları Hakkında Tebliğ’e uygun aşağıdaki şekilde iletebilirsiniz:
      </P>
      <List items={[
        'Islak imzalı dilekçe ile adresimize bizzat veya noter aracılığıyla.',
        'Kimliğinizi tespit edici belgelerle birlikte, şirketimizin posta adresine iadeli taahhütlü posta yoluyla.',
        'Sistemimizde kayıtlı e-posta adresinizi kullanarak info@kolaysoft.com.tr adresine e-posta ile.',
        'E-posta adresiniz sistemimizde kayıtlı değilse, e imzalı belge ile info@kolaysoft.com.tr',
      ]} />
      <P>
        Talepleriniz, niteliğine göre en geç 30 (otuz) gün içinde, kimlik doğrulaması yapıldıktan sonra sonuçlandırılır.
      </P>
      <P>
        Taleplerinizi daha kolay bildirmek isterseniz “Kişisel Veri Sahibi Başvuru Formu”nu doldurabilirsiniz.
      </P>

      <H2>8. YÜRÜRLÜK</H2>
      <P>
        Web sitemizde, zaman içinde bu Gizlilik Beyanında değişiklik veya ekleme yapabilir. Yapılacak değişiklik, web
        sitesinde yayınlandığı tarihten itibaren geçerli olur.
      </P>
      <P><strong>Kolaysoft Teknoloji Anonim Şirketi</strong></P>
    </LegalDoc>
  );
}
