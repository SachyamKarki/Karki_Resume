import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaFilePdf } from 'react-icons/fa'
import { useI18n } from '../i18n/i18nContext'
import LanguageSelector from './LanguageSelector'
import logoImage from '../assets/images/logo.jpg'
import resumePdf from '../assets/images/ShakshamKarkiResume.pdf'

const Header = () => {
  const { t } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header-content">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="logo"
        >
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home') }}>
            <img src={logoImage} alt="Shaksham Karki" className="logo-image" />
          </a>
        </motion.div>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href) }}
                  className="nav-link"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="header-actions">
            <LanguageSelector />
            <motion.button
              onClick={() => window.open(resumePdf, '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="resume-btn"
              aria-label="View Resume"
            >
              <FaFilePdf />
              <span>View Resume</span>
            </motion.button>
          </div>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
          height: 80px;
        }

        .header.scrolled {
          background: rgba(0, 0, 0, 0.98);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          gap: 2rem;
        }

        .logo {
          flex-shrink: 0;
        }

        .logo a {
          display: block;
          text-decoration: none;
        }

        .logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(59, 130, 246, 0.3);
          transition: border-color 0.3s ease;
        }

        .logo a:hover .logo-image {
          border-color: rgba(59, 130, 246, 0.6);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex: 1;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: rgba(59, 130, 246, 1);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .resume-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(59, 130, 246, 0.1);
          color: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 0.65rem 1.25rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .resume-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.5);
        }

        .menu-toggle {
          display: none;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.9);
          cursor: pointer;
          padding: 0.5rem;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .header {
            height: 70px;
          }

          .header-content {
            padding: 0 1.5rem;
          }

          .nav-list {
            gap: 1.5rem;
          }

          .nav-link {
            font-size: 0.9rem;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .header {
            height: 60px;
          }

          .header-content {
            padding: 0 1rem;
          }

          .logo-image {
            width: 40px;
            height: 40px;
          }

          .menu-toggle {
            display: flex;
          }

          .nav {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 1.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            max-height: calc(100vh - 60px);
            overflow-y: auto;
            gap: 2rem;
          }

          .nav.nav-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-list {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }

          .nav-link {
            display: block;
            padding: 0.875rem 1rem;
            text-align: center;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 0.5rem;
            font-size: 1rem;
          }

          .nav-link:hover {
            background: rgba(59, 130, 246, 0.1);
          }

          .header-actions {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }

          .language-selector {
            width: 100%;
          }

          .resume-btn {
            width: 100%;
            justify-content: center;
            padding: 0.875rem;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .header-content {
            padding: 0 0.75rem;
          }

          .logo-image {
            width: 36px;
            height: 36px;
          }

          .menu-toggle {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </motion.header>
  )
}

export default Header