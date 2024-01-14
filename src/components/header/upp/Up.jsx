
import "./up.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Up = () => {
  const {  i18n } = useTranslation();
  const [btn,setBtn] = useState(true)

  const clickHandle =async (lang) => {
    setBtn(!btn)
    await i18n.changeLanguage(lang);
  }


  return (
    <div className='up'>
      <div className='up-left'>
        <div className="email-icon">
          <i className='u-icon fa-lg'><FontAwesomeIcon icon={faEnvelope} /></i>
          <span>danismanlik@gmail.com</span>
        </div>
        <div className="phone-icon">
          <i className='u-icon fa-lg '><FontAwesomeIcon icon={faPhone} /></i>
          <span>+41 656 552 25 35</span>
        </div>
      </div>
      <div className="up-right">
        <button className="lang-btn" onClick={()=>clickHandle(btn ? "fr" : "tr")}>{btn ? "FR" : "TR"}</button>
      </div>
    </div>
  )
}

export default Up;
