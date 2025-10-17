import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa'
import profileData from '../data/profile'
import { useI18n } from '../i18n/i18nContext'
import logoImage from '../assets/images/logo.jpg'

const About = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    learning: 0
  })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStats({
          projects: profileData.projects.length,
          skills: Object.keys(profileData.skills).length * 5, 
          experience: 2, 
          learning: 100 
        })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const aboutPoints = [
    {
      icon: <FaCode />,
      title: t('about.features.cleanCode'),
      description: t('about.features.cleanCodeDesc')
    },
    {
      icon: <FaPalette />,
      title: t('about.features.creativeDesign'),
      description: t('about.features.creativeDesignDesc')
    },
    {
      icon: <FaRocket />,
      title: t('about.features.performance'),
      description: t('about.features.performanceDesc')
    },
    {
      icon: <FaUsers />,
      title: t('about.features.collaboration'),
      description: t('about.features.collaborationDesc')
    }
  ]

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="about-content"
        >
          <div className="about-text">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-image"
            >
              <img 
                src={logoImage} 
                alt="Shaksham Karki"
                className="about-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about-placeholder" style={{display: 'none'}}>
                <span>SK</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="section-title about-title"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="about-description"
            >
              {t('about.summary')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="about-description"
            >
              {t('about.location')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="about-stats"
            >
              <div className="stat-item">
                <div className="stat-number">{stats.projects}+</div>
                <div className="stat-label">{t('about.stats.projects')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{stats.skills}+</div>
                <div className="stat-label">{t('about.stats.skills')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{stats.experience}+</div>
                <div className="stat-label">{t('about.stats.experience')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{stats.learning}%</div>
                <div className="stat-label">{t('about.stats.learning')}</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-features"
          >
            {aboutPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="feature-card"
              >
                <div className="feature-icon">
                  {point.icon}
                </div>
                <h3 className="feature-title">{point.title}</h3>
                <p className="feature-description">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .about-section {
          background: var(--bg-secondary);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        @media (min-width: 480px) {
          .about-content {
            gap: 4rem;
            padding: 0 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .about-content {
            padding: 0 2rem;
          }
        }

        @media (min-width: 1024px) {
          .about-content {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 6rem;
            align-items: flex-start;
            padding: 0;
          }
        }

        .about-text {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-text {
            text-align: left;
            align-items: flex-start;
          }
        }

        .about-image {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          order: -1;
        }

        @media (min-width: 1024px) {
          .about-image {
            justify-content: flex-start;
            order: 0;
            margin-bottom: 2.5rem;
          }
        }

        .about-photo {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--border-color);
          transition: transform 0.3s ease;
        }

        @media (min-width: 480px) {
          .about-photo {
            width: 200px;
            height: 200px;
          }
        }

        @media (min-width: 1024px) {
          .about-photo {
            width: 220px;
            height: 220px;
          }
        }

        .about-photo:hover {
          transform: scale(1.05);
        }

        .about-placeholder {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-color), var(--primary-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--border-color);
        }

        @media (min-width: 480px) {
          .about-placeholder {
            width: 200px;
            height: 200px;
            font-size: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .about-placeholder {
            width: 220px;
            height: 220px;
            font-size: 3.5rem;
          }
        }

        .about-title {
          margin-bottom: 2rem;
          text-align: center;
        }

        @media (min-width: 1024px) {
          .about-title {
            text-align: left;
            margin-bottom: 2.5rem;
          }
        }

        .about-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          max-width: 100%;
        }

        @media (min-width: 1024px) {
          .about-description {
            max-width: 90%;
          }
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
          width: 100%;
        }

        @media (min-width: 640px) {
          .about-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .about-stats {
            max-width: 90%;
          }
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: var(--bg-secondary);
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        @media (min-width: 768px) {
          .about-features {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .about-features {
            padding-top: 1rem;
          }
        }

        .feature-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-5px);
        }

        .feature-icon {
          width: 4rem;
          height: 4rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--accent-color);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          border-color: var(--accent-color);
          background: var(--bg-dark);
          color: var(--text-primary);
          transform: scale(1.05);
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}

export default About
