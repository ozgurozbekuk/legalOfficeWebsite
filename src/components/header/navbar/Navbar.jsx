import React , { useState } from 'react'
import "./navbar.css"
import { useTranslation } from 'react-i18next';
import Logo from "../../../img/logo.png";


const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    const { t } = useTranslation();
  return (
    <div className='navbar'>
      
      <div className={`navbar-toggle ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
      <img src={Logo} alt="" />
        <ul>
          <li><a href='#anasayfa'>{t("Anasayfa")}</a></li>
          <li><a href='#services'>{t('Hizmetlerimiz')}</a></li>
          <li><a href='#education'>{t('Eğitim')}</a></li>
          <li><a href='#contact'>{t('İletişim')}</a></li>
        </ul>
      </div>
      </div>
  )
}

export default Navbar

