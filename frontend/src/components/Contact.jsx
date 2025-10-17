import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '../i18n/i18nContext'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import './Contact.css'

const Contact = () => {
  const { t } = useI18n()

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="contact-content">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact