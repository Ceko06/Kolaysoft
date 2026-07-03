import { LegalDoc, P, H2, List, Table } from './LegalDoc';

export default function IletisimFormu() {
  return (
    <LegalDoc title="KOLAYSOFT TEKNOLOJİ ANONİM ŞİRKETİ – KVKK İLETİŞİM FORMU AYDINLATMA METNİ">
      <P>
        Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun 10. maddesi ile Aydınlatma Yükümlülüğünün
        Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında, <strong>Kolaysoft Teknoloji Anonim
        Şirketi</strong> tarafından www.kolaysoft.com.tr/ web adresinde yer alan iletişim formunu dolduran ziyaretçilere
        sunulmaktadır.
      </P>

      <H2>1. Kişisel Veriler, İşleme Amaçları ve Hukuki Sebepler</H2>
      <P>
        İletişim formumuz aracılığıyla paylaştığınız kişisel verileriniz, aşağıdaki amaç ve hukuki sebeplere dayanılarak
        işlenmektedir:
      </P>
      <Table
        head={['Veri Kategorisi', 'Kişisel Veri', 'İşleme Amacı', 'Hukuki Sebep (KVKK m.5/2)']}
        rows={[
          [
            'KİMLİK', 'Ad Soyad',
            <List items={[
              'Talep, soru ve şikâyetlerin alınması, değerlendirilmesi ve yanıtlanması',
              'Müşteri ilişkileri yönetiminin yürütülmesi',
              'İletişim faaliyetlerinin yürütülmesi',
              'Hukuki uyuşmazlıklarda ispat yükümlülüğünün yerine getirilmesi',
            ]} />,
            '(e) Hakkın tesisi, kullanılması veya korunması / (f) Meşru menfaat',
          ],
          [
            'İLETİŞİM', 'Telefon Numarası',
            <List items={[
              'Talep sahibiyle telefon yoluyla iletişime geçilmesi',
              'Geri arama hizmetinin sunulması',
              'Sözleşme süreçlerinin yürütülmesi (hizmet alımı taleplerinde)',
            ]} />,
            '(c) Sözleşmenin kurulması veya ifası / (f) Meşru menfaat',
          ],
          [
            'İLETİŞİM', 'E-posta Adresi',
            <List items={[
              'E-posta yoluyla bilgilendirme ve yanıt iletilmesi',
              'Müşteri memnuniyeti takibinin yapılması',
              'İletişim faaliyetlerinin sürdürülmesi',
            ]} />,
            '(e) Hakkın tesisi, kullanılması veya korunması / (f) Meşru menfaat',
          ],
        ]}
      />

      <H2>2. Kişisel Veri Toplamanın Yöntemi</H2>
      <P>
        Kişisel verileriniz; <strong>www.kolaysoft.com.tr/</strong> internet sitesinde yer alan iletişim formunun
        tarafınızca doldurulup gönderilmesi suretiyle elektronik ortamda, tamamen veya kısmen otomatik yollarla elde
        edilmektedir.
      </P>

      <H2>3. Kişisel Verilerin Aktarılabileceği Taraflar</H2>
      <P>
        Kişisel verileriniz kural olarak üçüncü kişilerle paylaşılmamaktadır. Ancak aşağıdaki hallerde ve Kanun’un 8.
        maddesindeki şartlar çerçevesinde aktarılabilecektir:
      </P>
      <List items={[
        <span><strong>Yetkili kamu kurum ve kuruluşları ile adli makamlar:</strong> Yasal yükümlülük veya hukuki uyuşmazlık durumlarında.</span>,
        <span><strong>Altyapı ve e-posta hizmet sağlayıcıları (veri işleyenler):</strong> Şirketimiz adına teknik hizmet sunan, yurt içindeki iş ortaklarımıza.</span>,
      ]} />

      <H2>4. İlgili Kişi Olarak KVKK Madde 11 Kapsamındaki Haklarınız</H2>
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
        Taleplerinizi daha kolay bildirmek isterseniz “<strong>Kişisel Veri Sahibi Başvuru Formu</strong>”nu
        doldurabilirsiniz.
      </P>

      <H2>Veri Sorumlusuna İlişkin Bilgiler</H2>
      <Table
        head={['', '']}
        rows={[
          [<strong>Ticaret Unvanı</strong>, 'Kolaysoft Teknoloji Anonim Şirketi'],
          [<strong>MERSİS No</strong>, '0575046400200014'],
          [<strong>Adres</strong>, 'YDA Center Kızılırmak Mahallesi Dumlupınar Bulvarı No:9/A567 Çankaya / Ankara'],
          [<strong>Telefon</strong>, '879 259 90 90'],
          [<strong>E-posta</strong>, 'info@kolaysoft.com.tr'],
        ]}
      />
    </LegalDoc>
  );
}
