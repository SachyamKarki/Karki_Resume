import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaAward, FaGlobe, FaUsers } from 'react-icons/fa'
import { useI18n } from '../i18n/i18nContext'
import profileData from '../data/profile'

const Education = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })

  const educationData = [
    t('education.data.universityWestGeorgia'),
    t('education.data.universityNorthGeorgia'),
    t('education.data.highSchool')
  ]

  const leadershipData = [
    t('education.leadershipData.grspScholar'),
    t('education.leadershipData.rotaractMember'),
    t('education.leadershipData.leoMember')
  ]

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          className="section-header"
        >
          <h2 className="section-title">{t('education.title')}</h2>
          <p className="section-subtitle">{t('education.subtitle')}</p>
        </motion.div>

        <div className="education-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="education-column"
          >
            <div className="education-header">
              <FaGraduationCap className="section-icon" />
              <h3>{t('education.academic')}</h3>
            </div>
            <div className="education-timeline">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.2, delay: 0.1 + index * 0.02 }}
                  className="education-item"
                >
                  <div className="education-content">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.institution}</h5>
                    <p className="education-location">{edu.location}</p>
                    <p className="education-period">{edu.period}</p>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="education-column"
          >
            <div className="education-header">
              <FaUsers className="section-icon" />
              <h3>{t('education.leadership')}</h3>
            </div>
            <div className="leadership-timeline">
              {leadershipData.map((lead, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.2, delay: 0.1 + index * 0.02 }}
                  className="leadership-item"
                >
                  <div className="leadership-content">
                    <h4>{lead.title}</h4>
                    <h5>{lead.organization}</h5>
                    <p className="leadership-period">{lead.period}</p>
                    <p className="leadership-description">{lead.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="languages-section"
        >
          <div className="languages-header">
            <FaGlobe className="section-icon" />
            <h3>{t('education.languages')}</h3>
          </div>
          <div className="languages-grid">
            {profileData.languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2, delay: 0.1 + index * 0.02 }}
                className="language-item"
              >
                <h4>{lang.name}</h4>
                <p>{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .education-section {
          padding: 5rem 0;
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 800px;
          margin: 0 auto;
        }

        .section-icon {
          font-size: 2rem;
          color: var(--accent-color);
          margin-right: 1rem;
        }

        .education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 1024px) {
          .education-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .education-column {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
        }

        .education-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--accent-color);
        }

        .education-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .education-timeline {
          position: relative;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent-color);
        }

        .education-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 3rem;
        }

        .education-item::before {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--accent-color);
          border-radius: 50%;
          border: 3px solid var(--bg-secondary);
        }

        .education-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .education-content h5 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }

        .education-location,
        .education-period {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .education-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .leadership-timeline {
          position: relative;
        }

        .leadership-timeline::before {
          content: '';
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--accent-color);
        }

        .leadership-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 3rem;
        }

        .leadership-item::before {
          content: '';
          position: absolute;
          left: 0.5rem;
          top: 0.5rem;
          width: 1rem;
          height: 1rem;
          background: var(--accent-color);
          border-radius: 50%;
          border: 3px solid var(--bg-secondary);
        }

        .leadership-content h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .leadership-content h5 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }

        .leadership-period {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }

        .leadership-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .languages-section {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
        }

        .languages-header {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--accent-color);
        }

        .languages-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .language-item {
          background: var(--bg-primary);
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .language-item:hover {
          border-color: var(--accent-color);
          transform: translateY(-2px);
        }

        .language-item h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .language-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
      `}</style>
    </section>
  )
}

export default Education
