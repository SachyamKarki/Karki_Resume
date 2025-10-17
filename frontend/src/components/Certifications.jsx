import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCertificate, FaAward, FaGraduationCap, FaCode, FaCloud, FaDatabase } from 'react-icons/fa'
import profileData from '../data/profile'
import { useI18n } from '../i18n/i18nContext'

const Certifications = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })

  const certifications = profileData.certifications || []

  const getIcon = (type) => {
    switch (type) {
      case 'programming':
        return <FaCode />
      case 'cloud':
        return <FaCloud />
      case 'database':
        return <FaDatabase />
      case 'academic':
        return <FaGraduationCap />
      default:
        return <FaCertificate />
    }
  }

  return (
    <section id="certifications" className="section section-alt certifications-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Professional certifications and notable achievements
          </p>
        </motion.div>

        <div ref={ref} className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="certification-card"
            >
              <div className="cert-icon">
                {getIcon(cert.type)}
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.description && (
                  <p className="cert-description">{cert.description}</p>
                )}
                {cert.credentialId && (
                  <p className="cert-credential">
                    <span className="credential-label">Credential ID:</span> {cert.credentialId}
                  </p>
                )}
                {cert.verificationUrl && (
                  <a 
                    href={cert.verificationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-verify"
                  >
                    <FaAward />
                    Verify Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="no-certifications"
          >
            <FaCertificate />
            <p>Certifications will be displayed here</p>
            <small>Add certifications to profile data to see them here</small>
          </motion.div>
        )}
      </div>

      <style>{`
        .certifications-section {
          background: var(--bg-secondary);
          padding: 4rem 0;
        }

        .container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 0.5rem;
        }

        @media (min-width: 768px) {
          .container {
            padding: 0 2rem;
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          text-align: center;
          background: linear-gradient(135deg, var(--text-primary), var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .certifications-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .certifications-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .certifications-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .certification-card {
          background: linear-gradient(145deg, var(--bg-primary), var(--bg-dark));
          border-radius: 1.5rem;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .certification-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl);
          border-color: var(--accent-color);
        }

        .cert-icon {
          font-size: 3rem;
          color: var(--accent-color);
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--bg-secondary), var(--bg-dark));
          border-radius: 50%;
          border: 2px solid var(--accent-color);
        }

        .cert-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cert-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .cert-issuer {
          font-size: 1rem;
          color: var(--accent-color);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .cert-date {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .cert-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }

        .cert-credential {
          font-size: 0.8rem;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .credential-label {
          font-weight: 500;
          color: var(--text-secondary);
        }

        .cert-verify {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--accent-color), var(--primary-dark));
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .cert-verify:hover {
          background: linear-gradient(135deg, var(--primary-dark), var(--accent-color));
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .no-certifications {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .no-certifications svg {
          font-size: 4rem;
          color: var(--text-light);
          margin-bottom: 1rem;
        }

        .no-certifications p {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .no-certifications small {
          font-size: 0.875rem;
          color: var(--text-light);
        }
      `}</style>
    </section>
  )
}

export default Certifications
