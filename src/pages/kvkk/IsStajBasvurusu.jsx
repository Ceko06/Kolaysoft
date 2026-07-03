import { LegalDoc, P, H2, Info, List } from './LegalDoc';

export default function IsStajBasvurusu() {
  return (
    <LegalDoc title="KOLAYSOFT TEKNOLOJİ A.Ş. – İŞ VE STAJ BAŞVURUSU AYDINLATMA METNİ">
      <P>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde
        Uyulacak Usul ve Esaslar Hakkında Tebliğ kapsamında, “İş Başvurusu veya Staj Başvurusu” formunu doldurarak
        tarafımızla paylaştığınız kişisel verileriniz ile ilgili olarak veri sorumlusu sıfatıyla sizleri bilgilendirmek
        isteriz.
      </P>

      <Info rows={[
        <span><strong>MERSİS Numarası:</strong> 0575046400200017</span>,
        <span><strong>Adresi:</strong> YDA Center Kızılırmak Mahallesi Dumlupınar Bulvarı No:9/A567 Çankaya / Ankara</span>,
        <span><strong>Telefon:</strong> 850 259 90 90 &nbsp; <strong>E-mail:</strong> info@kolaysoft.com.tr</span>,
      ]} />

      <H2>1. Veri Sorumlusunun Kimliği</H2>
      <P>
        Kişisel verileriniz, veri sorumlusu sıfatıyla Kolaysoft Teknoloji A.Ş. (“Şirket”) tarafından Kanun’a uygun olarak
        aşağıda açıklanan kapsamda işlenebilecektir.
      </P>

      <H2>2. Kişisel Verilerin Hangi Amaçla İşleneceği</H2>
      <P>
        Web sitemizde yer alan ilgili başvuru formu ve (eğer yükleniyorsa) özgeçmişiniz aracılığıyla elde edilen Kimlik
        (ad, soyad, doğum yeri ve tarihi T.C. kimlik numarası vb.), İletişim (telefon numarası, e-posta adresi), CV dosyası
        ile eklenen mesleki deneyim (eğitim bilgileri, önceki iş deneyimleri) ve diğer özlük verileriniz;
      </P>
      <List items={[
        'Çalışan adayı ve stajyer seçme ve yerleştirme süreçlerinin yürütülmesi,',
        'Çalışan adaylarının başvuru süreçlerinin değerlendirilmesi ve yürütülmesi,',
        'İnsan kaynakları operasyonlarının ve planlama süreçlerinin yürütülmesi,',
        'İleride doğabilecek açık pozisyonlar için sizinle iletişime geçilebilmesi',
      ]} />
      <P>amaçlarıyla işlenmektedir.</P>

      <H2>3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</H2>
      <P>
        Kişisel verileriniz, internet sitemiz üzerinde yer alan formun elektronik ortamda doldurulması ve tarafımıza
        iletilmesi suretiyle tamamen veya kısmen otomatik yollarla toplanmaktadır.
      </P>
      <P>Bu kişisel verileriniz, Kanun’un 5. maddesinin 2. fıkrasında yer alan;</P>
      <List items={[
        <span>İş veya staj sözleşmesinin kurulmasına yönelik adımların atılması kapsamında <strong>“Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması”</strong>,</span>,
        <span>İşe alım sürecinin değerlendirilebilmesi ve şirket prensiplerine uygunluğun tespit edilebilmesi kapsamında <strong>“İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması”</strong></span>,
      ]} />
      <P>hukuki sebeplerine dayanılarak işlenmektedir.</P>

      <H2>4. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</H2>
      <P>
        Bu form aracılığıyla elde edilen kişisel verileriniz kural olarak üçüncü kişilerle paylaşılmamaktadır. Ancak
        Kanun’un 8. maddesinde belirtilen şartlar dahilinde; hukuki uyuşmazlıkların giderilmesi, yetkili kişi, kurum ve
        kuruluşlara bilgi verilmesi amaçlarıyla sınırlı olmak üzere yasal mercilerle, yasal yükümlülüklerimizin ifası
        kapsamında paylaşılabilecektir.
      </P>

      <H2>5. İlgili Kişinin Kanun’un 11. Maddesinde Sayılan Hakları</H2>
      <P>
        Tarafımızca işlenen kişisel verilerinize ilişkin olarak Kanunun 11. maddesi kapsamındaki taleplerinizi; Veri
        Sorumlusu Başvuru Usul ve Esasları Hakkında Tebliğ’e uygun aşağıdaki şekilde iletebilirsiniz:
      </P>
      <List items={[
        'Islak imzalı dilekçe ile adresimize bizzat veya noter aracılığıyla.',
        'Kimliğinizi tespit edici belgelerle birlikte, şirketimizin posta adresine iadeli taahhütlü posta yoluyla.',
        'Sistemimizde kayıtlı e-posta adresinizi kullanarak info@kolaysoft.com.tr adresine e-posta ile.',
        'E-posta adresiniz sistemimizde kayıtlı değilse, e imzalı belge ile info@kolaysoft.com.tr adresine.',
      ]} />
      <P>
        Talepleriniz, niteliğine göre en geç 30 (otuz) gün içinde, kimlik doğrulaması yapıldıktan sonra sonuçlandırılır.
      </P>
      <P>
        Taleplerinizi daha kolay bildirmek isterseniz “Kişisel Veri Sahibi Başvuru Formu”nu doldurabilirsiniz.
      </P>
      <P><strong>Kolaysoft Teknoloji Anonim Şirketi</strong></P>
    </LegalDoc>
  );
}
