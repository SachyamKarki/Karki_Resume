import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import profileData from '../data/profile'
import { useI18n } from '../i18n/i18nContext'
import './Contact.css'

const ContactInfo = () => {
  const { t } = useI18n()

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: t('contact.email'),
      value: profileData.personal.email,
      link: `mailto:${profileData.personal.email}`,
      ariaLabel: `Send email to ${profileData.personal.email}`
    },
    {
      icon: <FaMapMarkerAlt />,
      title: t('contact.location'),
      value: profileData.personal.location,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profileData.personal.location)}`,
      ariaLabel: `View location on Google Maps: ${profileData.personal.location}`
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: t('contact.social.github'),
      url: profileData.social.github,
      color: "#333",
      ariaLabel: `Visit GitHub profile`
    },
    {
      icon: <FaLinkedin />,
      name: t('contact.social.linkedin'),
      url: profileData.social.linkedin,
      color: "#0077b5",
      ariaLabel: `Visit LinkedIn profile`
    },
    {
      icon: <FaEnvelope />,
      name: t('contact.social.email'),
      url: `mailto:${profileData.personal.email}`,
      color: "#ea4335",
      ariaLabel: `Send email to ${profileData.personal.email}`
    }
  ]

  return (
    <motion.div
      className="contact-info"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3>{t('contact.getInTouch')}</h3>
      <p>{t('contact.description')}</p>

      <div className="contact-details">
        {contactInfo.map((item, index) => (
          <motion.div
            key={index}
            className="contact-item"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="contact-icon" aria-hidden="true">
              {item.icon}
            </div>
            <div className="contact-text">
              <h4>{item.title}</h4>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
              >
                {item.value}
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="social-links">
        <div className="social-icons" role="list" aria-label="Social media links">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={link.ariaLabel}
              role="listitem"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo
