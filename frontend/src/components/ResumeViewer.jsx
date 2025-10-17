import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaTimes, FaEye, FaFilePdf } from 'react-icons/fa'
import { useI18n } from '../i18n/i18nContext'
import resumePdf from '../assets/images/ShakshamKarkiResume.pdf'

const ResumeViewer = () => {
  const { t } = useI18n()
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumePdf
    link.download = 'Shaksham_Karki_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="resume-button"
      >
        <FaFilePdf />
        <span>{t('hero.viewResume')}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="resume-overlay"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="resume-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-header">
                <h3>Shaksham Karki - Resume</h3>
                <div className="resume-actions">
                  <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="download-btn"
                  >
                    <FaDownload />
                    {t('hero.downloadResume')}
                  </motion.button>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="close-btn"
                  >
                    <FaTimes />
                  </motion.button>
                </div>
              </div>

              <div className="resume-content">
                <iframe
                  src={`${resumePdf}#toolbar=0&navpanes=0&scrollbar=1`}
                  className="pdf-viewer"
                  title={t('common.resumeTitle')}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .resume-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          border: none;
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .resume-button:hover {
          background: linear-gradient(135deg, var(--bg-darker), var(--bg-dark));
          transform: translateY(-1px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-color);
        }

        .resume-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(15px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
        }

        .resume-modal {
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          border-radius: 1.5rem;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px var(--border-color);
          width: 100%;
          max-width: 1100px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 2px solid var(--border-color);
        }

        .resume-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 2.5rem;
          background: linear-gradient(135deg, var(--bg-secondary), var(--bg-dark));
          color: var(--text-primary);
          border-bottom: 1px solid var(--border-color);
        }

        .resume-header h3 {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .resume-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .download-btn:hover {
          background: linear-gradient(135deg, var(--bg-darker), var(--bg-dark));
          border-color: var(--accent-color);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        .close-btn {
          background: linear-gradient(135deg, var(--bg-dark), var(--bg-darker));
          color: var(--text-primary);
          border: 2px solid var(--border-color);
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-sm);
        }

        .close-btn:hover {
          background: linear-gradient(135deg, var(--bg-darker), var(--bg-dark));
          border-color: var(--accent-color);
          box-shadow: var(--shadow-md);
          transform: translateY(-1px);
        }

        .resume-content {
          flex: 1;
          padding: 1.5rem;
          overflow: hidden;
          background: var(--bg-primary);
        }

        .pdf-viewer {
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 0.75rem;
          box-shadow: var(--shadow-lg);
          background: white;
          border: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .resume-overlay {
            padding: 1.5rem 1rem;
          }

          .resume-modal {
            height: 90vh;
            border-radius: 1rem;
          }

          .resume-header {
            padding: 1.5rem 1.5rem;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .resume-actions {
            width: 100%;
            justify-content: space-between;
          }

          .resume-header h3 {
            font-size: 1.25rem;
          }

          .resume-content {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default ResumeViewer
