import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useI18n } from '../i18n/i18nContext'

const Experience = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })

  const experienceData = t('experience.data.mobileAppDeveloper')

  return (
    <section id="experience" className="section experience-section">
      <div className="experience-background">
        <div className="experience-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <h2 className="section-title">{t('experience.title')}</h2>
          <p className="section-subtitle">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div ref={ref} className="experience-timeline">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="timeline-item left"
          >
            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-icon">
                  <FaBriefcase />
                </div>
                <div className="timeline-meta">
                  <h3 className="job-title">{experienceData.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{experienceData.company}</span>
                    <div className="job-details">
                      <span className="job-period">
                        <FaCalendarAlt /> {experienceData.period}
                      </span>
                      <span className="job-location">
                        <FaMapMarkerAlt /> {experienceData.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="job-description">{experienceData.description}</p>

              <div className="job-achievements">
                <h4>{t('experience.achievements')}</h4>
                <ul>
                  {experienceData.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="job-technologies">
                <h4>{t('experience.technologies')}</h4>
                <div className="tech-tags">
                  {experienceData.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .experience-section {
          background: linear-gradient(135deg, #000000 0%, #111111 25%, #1a1a1a 50%, #0a0a0a 75%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .experience-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .experience-shapes {
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
          width: 80px;
          height: 80px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          top: 30%;
          right: 8%;
          animation-delay: 1s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 10%;
          animation-delay: 2s;
        }

        .shape-4 {
          width: 70px;
          height: 70px;
          top: 60%;
          right: 15%;
          animation-delay: 0.8s;
        }

        .shape-5 {
          width: 50px;
          height: 50px;
          bottom: 40%;
          right: 5%;
          animation-delay: 1.5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .experience-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .experience-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-color);
          transform: translateX(-50%);
        }

        @media (max-width: 768px) {
          .experience-timeline::before {
            left: 2rem;
          }
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 50%;
        }

        @media (max-width: 768px) {
          .timeline-item {
            width: 100%;
            padding-left: 4rem;
          }
        }

        .timeline-item.left {
          left: 0;
          padding-right: 2rem;
        }

        .timeline-item.right {
          left: 50%;
          padding-left: 2rem;
        }

        @media (max-width: 768px) {
          .timeline-item.left,
          .timeline-item.right {
            left: 0;
            padding-right: 0;
            padding-left: 4rem;
          }
        }

        .timeline-content {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
          position: relative;
          transition: all 0.3s ease;
        }

        .timeline-content:hover {
          box-shadow: var(--shadow-xl);
          transform: translateY(-5px);
        }

        .timeline-content::before {
          content: '';
          position: absolute;
          top: 2rem;
          width: 0;
          height: 0;
          border: 15px solid transparent;
        }

        .timeline-item.left .timeline-content::before {
          right: -30px;
          border-left-color: white;
        }

        .timeline-item.right .timeline-content::before {
          left: -30px;
          border-right-color: white;
        }

        @media (max-width: 768px) {
          .timeline-content::before {
            left: -30px;
            right: auto;
            border-right-color: white;
            border-left-color: transparent;
          }
        }

        .timeline-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .timeline-icon {
          width: 3rem;
          height: 3rem;
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.25rem;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-icon {
          border-color: var(--accent-color);
          background: var(--bg-dark);
          color: var(--text-primary);
          transform: scale(1.05);
        }

        .timeline-meta {
          flex: 1;
        }

        .job-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .company-name {
          font-size: 1.125rem;
          font-weight: 500;
          color: var(--primary-color);
        }

        .job-details {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-top: 0.5rem;
        }

        .job-period,
        .job-location {
          font-size: 0.875rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .job-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .job-achievements {
          margin-bottom: 1.5rem;
        }

        .job-achievements h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .job-achievements ul {
          list-style: none;
          padding: 0;
        }

        .job-achievements li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .job-achievements li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        .job-technologies h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--bg-secondary);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid var(--border-color);
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          top: 2rem;
          width: 1rem;
          height: 1rem;
          background: var(--primary-color);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px var(--primary-color);
        }

        .timeline-item.left::after {
          right: -0.5rem;
        }

        .timeline-item.right::after {
          left: -0.5rem;
        }

        @media (max-width: 768px) {
          .timeline-item::after {
            left: 1.5rem;
            right: auto;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience
