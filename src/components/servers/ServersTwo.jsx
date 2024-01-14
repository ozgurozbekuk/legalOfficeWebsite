import React from 'react'
import "./serverstwo.css";
import Lgl3 from "../../img/lgloffice3.png"
import { useTranslation } from 'react-i18next';

const ServersTwo = () => {

    const { t, i18n } = useTranslation();

  return (
    <div className='serverstwo'>
      <div className="card">
            <div className="cardbody">
                <h2>{t("İsviçre İltica Prosedürü")}</h2>
                <h4>**{t("İltica Başvuru Şartları")}:</h4><p>{t("İsviçre'de iltica başvurusu yapma süreci,gereklilikler ve uygun belgelerin hazırlanması.")}</p>
                <h4>**{t("Mülteci Statüsüne İlişkin Danışmanlık")}:</h4><p>{t("Mülteci statüsünün elde edilmesi için gerekli kriterler ve prosedürler hakkında bilgilendirme.")}</p>
                <h4>**{t("Hukuki Destek ve Temsil")}:</h4><p>{t("İltica sürecinde hukuki destek,temsil ve gerekli durumlarda itiraz işlemi.")}</p>
                <h4>**{t("SEM Mülakat Hazırlığı")}:</h4><p>{t("İltica başvurusu sürecinde gerçekleşecek röportaj ve mülakat hazırlık desteği.")}</p>
                <h4>**{t("Dublin Prosedürü Danışmanlığı")}:</h4><p>{t("Dublin 3 tüzüğü kapsamında,hangi Avrupa Birliği ülkesinin iltica başvurusunu değerlendireceğine dair prosedürler ve bu süreçteki haklarınız ve yükümlülükleriniz hakkında detaylı bilgi ve danışmanlık hizmeti.")}</p>
                <h4>**{t("Aile Birleşimi Başvuruları")}:</h4><p>{t("İltica sürecinde aile birleşimi ve aile üyelerinin durumu ile ilgili danışmanlık.")}</p>
                <h4>**{t("İdari ve Yasal Süreçler")}:</h4><p>{t("İltica başvurusunun idari ve yasal süreçlerine ilişkin detaylı bilgi ve destek.")}</p>
                <h4>**{t("Hukuki İtiraz ve Temyiz Süreçleri")}:</h4><p>{t("Oturum veya çalışma izni başvurularının reddedilmesi durumunda itiraz ve temyiz süreçlerinde hukuki destek.")}</p>
                <h4>**{t("Sosyal Haklar ve Entegrasyon")}:</h4><p>{t("İltica statüsü kazandıktan sonra sosyal haklar,entegrasyon ve uyum süreçlerine ilişkin rehberlik.")}</p>
            </div>
        </div>
        <div className='imgdiv'>
            <img src={Lgl3} alt="" />
        </div>
    </div>
  )
}

export default ServersTwo
