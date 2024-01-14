import React from 'react';
import "./contact.css"
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { t, i18n } = useTranslation();

  return (
    <div className='contact' id='contact'>
      <div className="contact-info">
        <h2>{t("Tarifeler")}:</h2>
        <p>{t("Hukuki danışmanlık ve hizmetlerimiz için saat başına ücret CHF 150'dir.-Talep edenler için 45 dk CHF 70'dir.Hukuki danışmanlık ve hizmetler için ödeme,randevu öncesinde veya randevu sırasında nakit yada TWINT/Hesap üzeriden yapılmaktadır.")} </p>
        <h2>{t("Randevu")}:</h2>
        <p>{t("Lütfen unutmayın,sekreterliğimiz hukuki sorularınıza doğrudan yanıt verememektedir.Onlar,sadece sizin için bir hukukçu ile randevu ayarlamaya yetkilidir.")} </p>
        <div className="email-icon">
          <i className='c-icon fa-xl'><FontAwesomeIcon icon={faEnvelope} /></i>
          <span>danismanlik@gmail.com</span>
        </div>
        <div className="phone-icon">
          <i className='c-icon fa-xl '><FontAwesomeIcon icon={faPhone} /></i>
          <span>+41 656 552 25 35</span>
        </div>
      </div>
      <div className="contact-form">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">{t("Adınız")}:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">{t("E-posta")}:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="subject">{t("Konu")}:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">{t("Mesajınız")}:</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button className='f-btn' type="submit">{t("Gönder")}</button>
    </form>
      </div>
    </div>
  )
}

export default Contact
