import React from 'react';
import "./servers.css";
import Lgl from "../../img/lgloffice.jpg"
import { useTranslation } from 'react-i18next';


const Servers = () => {

    const { t, i18n } = useTranslation();

  return (
    <div className='servers' id='services'>
        <div className="card">
            <div className="cardbody">
                <h2>{t("İsviçre Yabancılar Hukuku")}</h2>
                <h4>**{t("Oturum/Yerleşim İzin Talepleri")}:</h4><p>{t("İsviçre'de ikamet veya yerleşim izni alımı veya yenileme süreçlerinde dosya yönetimi konusunda yardımcı oluyoruz.")}</p>
                <h4>**{t("Aile Birleşimi Prosedürleri")}:</h4><p>{t("Ailelerin İsviçre'de yeniden birleşmelerini kolaylaştıracak şekilde aile birleşimi için gerekli idari işlemlerde rehberlik ediyoruz.")}</p>
                <h4>**{t("Yabancılar Hukukunda İşlemleri Hızlandırmaya Yönelik Adımlar")}: </h4><p>{t("İsviçre yabancılar hukukundaki idari süreçleri hızlandırmaya yönelik stratejik tavsiyeler ve asistanlık sunuyoruz")}.</p>
            </div>
        </div>
        <div className='imgdiv'>
            <img src={Lgl} alt="" />
        </div>
    </div>

  )
}

export default Servers
