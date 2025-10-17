import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa'
import profileData from '../data/profile'
import { useI18n } from '../i18n/i18nContext'

const Footer = () => {
  const { t } = useI18n()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: profileData.social.github,
      ariaLabel: 'Visit GitHub profile'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: profileData.social.linkedin,
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      url: `mailto:${profileData.personal.email}`,
      ariaLabel: 'Send an email'
    }
  ]

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Grid */}
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-section">
              <h3 className="footer-brand">{profileData.personal.name}</h3>
              <p className="footer-tagline">{t('footer.tagline')}</p>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">{t('footer.quickLinks')}</h4>
              <ul className="footer-links">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div className="footer-section">
              <h4 className="footer-heading">{t('footer.connect')}</h4>
              
              {/* Social Links */}
              <div className="social-links">
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
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="contact-info">
                <p>
                  <FaEnvelope className="icon" />
                  <span>{profileData.personal.email}</span>
                </p>
                <p>
                  <FaMapMarkerAlt className="icon" />
                  <span>{profileData.personal.location}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              <p>
                © {currentYear} {profileData.personal.name}. {t('footer.copyright')}
              </p>
              <p className="trademark">™ {t('footer.trademark')}</p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="scroll-to-top"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: linear-gradient(180deg, #0a0a0a 0%, #000000 100%);
          color: #ffffff;
          padding: 4rem 0 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-brand {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #64b5f6, #2196f3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
        }

        .footer-tagline {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin: 0;
        }

        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: #64b5f6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: rgba(100, 181, 246, 0.1);
          border-color: #64b5f6;
          color: #64b5f6;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-info p {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          font-size: 0.95rem;
        }

        .contact-info .icon {
          flex-shrink: 0;
          color: #64b5f6;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .copyright {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .copyright p {
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
          font-size: 0.9rem;
        }

        .trademark {
          font-size: 0.75rem;
          opacity: 0.6;
        }

        .scroll-to-top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #64b5f6, #2196f3);
          border: none;
          color: #ffffff;
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(100, 181, 246, 0.2);
        }

        .scroll-to-top:hover {
          box-shadow: 0 6px 16px rgba(100, 181, 246, 0.3);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 0 1.5rem;
          }

          .container {
            padding: 0 1.5rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .social-links {
            justify-content: flex-start;
          }

          .scroll-to-top {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 2.5rem 0 1.5rem;
          }

          .container {
            padding: 0 1rem;
          }

          .footer-brand {
            font-size: 1.3rem;
          }

          .footer-heading {
            font-size: 1rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }

          .scroll-to-top {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer