import React from 'react'
import "./education.css"
import { useTranslation } from 'react-i18next';
import Classroom from "../../img/class.jpg"

const Education = () => {

    const { t } = useTranslation();

  return (
    <div className='education' id='education'>
      <div className="education-card">
        <div className="educardbody">
            <h2>{t("Eğitim Programlarımız")}:</h2>
            <h4>-{t("Türkiye Yargı Sistemi ve Yapılanması")}</h4>
            <h4>-{t("Kadına Şiddetin İsviçre Hukukundaki Yeri ve Bunların Failleri/Mağdurların Oturum İznine Olan Etkileri")}</h4>
            <p>{t("Bu eğitim programları, her iki ülkenin hukuk sistemlerini daha iyi anlamak ve bu önemli konularda farkındalık yaratmak için tasarlanmıştır.")} </p>
            <p>{t("İlgilenen bireyler ve kurumlar için bu eğitimler,hem teorik hemde pratik bilgileri kapsamlı bir şekilde sunmakta,katılımcıların konu hakkında kapsamlı bir perspektif sağlamalarını sağlamaktadır.Eğitimlerimiz hakkında daha fazla bilgi almak veya kayıt olmak isterseniz,lütfen web sitemizin iletişim bölümünden bizimle irtibata geçin.")}</p>
        </div>
      </div>
      <div className="education-img">
        <img src={Classroom} alt="" />
      </div>
    </div>
  )
}

export default Education
