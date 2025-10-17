import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { useI18n } from '../i18n/i18nContext'
import profileData from '../data/profile'
import ResumeViewer from './ResumeViewer'
import logoImage from '../assets/images/logo.jpg'

const Profile = () => {
  const { t } = useI18n()
  const profileRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallax = scrolled * 0.5
      if (profileRef.current) {
        profileRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="profile">
      <div className="profile-background">
        <div className="profile-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="profile-content" ref={profileRef}>
          <div className="profile-grid">
            <div className="profile-text">

              <h1 className="profile-title">
                {t('hero.greeting')} <span className="highlight">{profileData.personal.name}</span>
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="profile-subtitle"
              >
                {t('hero.title')}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="profile-description"
              >
                {t('hero.summary')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="profile-buttons"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                >
                  {t('hero.getInTouch')}
                  <span className="btn-arrow">→</span>
                </motion.a>
                <ResumeViewer />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="profile-social"
              >
                <span className="social-label">{t('hero.socialLabel')}</span>
                <div className="social-links">
                  <motion.a
                    href={profileData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href={profileData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href={profileData.social.email}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                  >
                    <FaEnvelope />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="profile-image"
            >
              <div className="image-container">
                <div className="profile-photo-container">
                  <img 
                    src={logoImage} 
                    alt="Shaksham Karki - Professional Headshot"
                    className="profile-photo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-placeholder" style={{display: 'none'}}>
                    <span>SK</span>
                  </div>
                </div>
                <div className="floating-elements">
                  <motion.div 
                    className="floating-element element-1"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    React
                  </motion.div>
                  <motion.div 
                    className="floating-element element-2"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  >
                    Node.js
                  </motion.div>
                  <motion.div 
                    className="floating-element element-3"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  >
                    Python
                  </motion.div>
                  <motion.div 
                    className="floating-element element-4"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                  >
                    Design
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="scroll-indicator"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="scroll-arrow"
          >
            <FaArrowDown />
          </motion.div>
          <span>Scroll Down</span>
        </motion.div>
      </div>

      <style>{`
        .profile {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #000000 0%, #111111 25%, #1a1a1a 50%, #0a0a0a 75%, #000000 100%);
          padding: 40px 0 40px; 
        }

        @media (min-width: 480px) {
          .profile {
            padding: 25px 0 50px;
          }
        }

        @media (min-width: 768px) {
          .profile {
            padding: 30px 0 60px;
          }
        }

        @media (min-width: 1024px) {
          .profile {
            padding: 35px 0 px;
          }
        }

        .profile-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .profile-shapes {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .profile-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: -3rem 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .profile-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          max-width: 1600px;
          margin: -10 auto;
        }

        @media (min-width: 1024px) {
          .profile-grid {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 8rem;
          }
        }

        .profile-text {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        @media (min-width: 768px) {
          .profile-text {
            padding: 2.5rem 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-text {
            text-align: left;
            margin: 0;
            padding: -3rem -2rem;
          }
        }

        .profile-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 2.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        .profile-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) {
          .profile-title {
            font-size: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-title {
            font-size: 4.5rem;
          }
        }

        .highlight {
          background: linear-gradient(135deg, #b8860b, #daa520, #b8860b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .profile-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: -0.01em;
        }

        @media (min-width: 768px) {
          .profile-subtitle {
            font-size: 1.75rem;
          }
        }

        .profile-description {
          font-size: 1.25rem;
          line-height: 1.7;
          margin-bottom: 3.5rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          padding: 0 1rem;
        }

        @media (min-width: 1024px) {
          .profile-description {
            margin-left: 0;
            margin-right: 0;
            font-size: 1.375rem;
          }
        }

        .profile-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .profile-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-buttons {
            justify-content: flex-start;
          }
        }

        .profile-buttons .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .profile-social {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem 0 8rem 0;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .profile-social {
            padding: 2rem 0 6rem 0;
            margin-bottom: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .profile-social {
            flex-direction: row;
            align-items: center;
            gap: 2rem;
            padding: 2rem 0 8rem 0;
            margin-bottom: 4rem;
          }
        }

        .social-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-link {
          width: 3rem;
          height: 3rem;
          background: var(--bg-secondary);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--bg-dark);
          border-color: var(--accent-color);
          color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .social-link:nth-child(1):hover {
          color: #333;
          border-color: #333;
          box-shadow: 0 4px 12px rgba(51, 51, 51, 0.3);
        }

        .social-link:nth-child(2):hover {
          color: #0077b5;
          border-color: #0077b5;
          box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
        }

        .social-link:nth-child(3):hover {
          color: #ea4335;
          border-color: #ea4335;
          box-shadow: 0 4px 12px rgba(234, 67, 53, 0.3);
        }

        .profile-image {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          padding: 1rem;
          margin: 0 auto;
          max-width: 100%;
          padding-top: 0rem;
        }

        @media (max-width: 768px) {
          .profile-image {
            padding: 0.5rem;
            padding-top: 0rem;
          }
        }

        @media (max-width: 480px) {
          .profile-image {
            padding: 0.25rem;
            padding-top: 0rem;
          }
        }

        .image-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 0 auto;
          margin-top: -5rem;
          padding: 1.5rem;
        }

        @media (min-width: 480px) {
          .image-container {
            width: 320px;
            height: 320px;
            padding: 1.75rem;
            margin-top: -6rem;
          }
        }

        @media (min-width: 768px) {
          .image-container {
            width: 350px;
            height: 350px;
            padding: 2rem;
            margin-top: -7rem;
          }
        }

        @media (min-width: 1024px) {
          .image-container {
            width: 400px;
            height: 400px;
            padding: 2.5rem;
            margin-top: -8rem;
          }
        }

        .profile-photo-container {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.25),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
          border: 3px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .profile-photo-container:hover {
          transform: scale(1.02);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }

        .profile-photo-container:hover .profile-photo {
          transform: scale(1.05);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-color), var(--primary-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: 700;
          color: white;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.25rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
          z-index: 3;
        }

        .element-1 {
          top: 10%;
          right: -5%;
        }

        .element-2 {
          bottom: 20%;
          left: -10%;
        }

        .element-3 {
          top: 50%;
          right: -8%;
        }

        .element-4 {
          bottom: 10%;
          right: 10%;
        }

        @media (max-width: 768px) {
          .floating-element {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }

          .element-1 {
            top: 8%;
            right: -2%;
          }

          .element-2 {
            bottom: 18%;
            left: -5%;
          }

          .element-3 {
            top: 48%;
            right: -3%;
          }

          .element-4 {
            bottom: 8%;
            right: 8%;
          }
        }

        @media (max-width: 480px) {
          .floating-element {
            padding: 0.5rem 0.8rem;
            font-size: 0.75rem;
          }

          .element-1 {
            top: 5%;
            right: 0%;
          }

          .element-2 {
            bottom: 15%;
            left: -2%;
          }

          .element-3 {
            top: 45%;
            right: 0%;
          }

          .element-4 {
            bottom: 5%;
            right: 5%;
          }
        }

        @media (max-width: 360px) {
          .floating-element {
            padding: 0.4rem 0.6rem;
            font-size: 0.7rem;
          }

          .element-1 {
            top: 3%;
            right: 2%;
          }

          .element-2 {
            bottom: 12%;
            left: 0%;
          }

          .element-3 {
            top: 42%;
            right: 2%;
          }

          .element-4 {
            bottom: 3%;
            right: 3%;
          }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: white;
          cursor: pointer;
          z-index: 2;
        }

        .scroll-arrow {
          font-size: 1.5rem;
        }

        .scroll-indicator span {
          font-size: 0.875rem;
          opacity: 0.8;
        }
      `}</style>
    </section>
  )
}

export default Profile
