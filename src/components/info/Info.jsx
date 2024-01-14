import React from 'react'
import "./info.css";
import { useTranslation } from 'react-i18next'


const Info = () => {

    const { t, i18n } = useTranslation();
  return (
    <div className='info' id='anasayfa'>
        <div className='info1'>
            <div className="info-text">
                <h1>{t('Azad Danışmanlık Ofisi')}</h1>
                <p>{t('İsviçre ve Türkiye hukuk sistemlerine hakimiyetimiz lle, aşağıda detaylandırdığımız alanlarda özelleştirilmiş, etkin ve güvenilir hukuki danışmanlık hizmetleri sunuyoruz.')}</p>
            </div>
            
        </div>
    </div>
  )
}

export default Info
