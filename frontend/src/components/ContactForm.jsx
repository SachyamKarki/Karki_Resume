import React from 'react'
import { motion } from 'framer-motion'
import { FaExclamationCircle, FaCheckCircle, FaSpinner } from 'react-icons/fa'
import { useContactForm } from '../hooks/useContactForm'
import { useI18n } from '../i18n/i18nContext'
import './Contact.css'

const ContactForm = () => {
  const { t } = useI18n()
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit
  } = useContactForm()

  const formFields = [
    {
      name: 'name',
      type: 'text',
      label: t('contact.form.name'),
      placeholder: t('contact.form.namePlaceholder')
    },
    {
      name: 'email',
      type: 'email',
      label: t('contact.form.email'),
      placeholder: t('contact.form.emailPlaceholder')
    },
    {
      name: 'subject',
      type: 'text',
      label: t('contact.form.subject'),
      placeholder: t('contact.form.subjectPlaceholder')
    }
  ]

  return (
    <motion.div
      className="contact-form-container"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        {formFields.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleInputChange}
              placeholder={field.placeholder}
              className={errors[field.name] ? 'error' : ''}
              disabled={isSubmitting}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              aria-invalid={errors[field.name] ? 'true' : 'false'}
            />
            {errors[field.name] && (
              <div 
                id={`${field.name}-error`}
                className="error-message"
                role="alert"
                aria-live="polite"
              >
                <FaExclamationCircle />
                {errors[field.name]}
              </div>
            )}
          </div>
        ))}

        <div className="form-group">
          <label htmlFor="message">{t('contact.form.message')}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('contact.form.messagePlaceholder')}
            className={errors.message ? 'error' : ''}
            disabled={isSubmitting}
            aria-describedby={errors.message ? 'message-error' : undefined}
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <div 
              id="message-error"
              className="error-message"
              role="alert"
              aria-live="polite"
            >
              <FaExclamationCircle />
              {errors.message}
            </div>
          )}
        </div>

        <motion.button
          type="submit"
          className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          aria-describedby="submit-status"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" />
              {t('contact.form.sending')}
            </>
          ) : (
            <>
              {t('contact.form.send')}
              <span className="btn-arrow">→</span>
            </>
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            id="submit-status"
            className="status-message success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            aria-live="polite"
          >
            <FaCheckCircle />
            {t('contact.form.success')}
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            id="submit-status"
            className="status-message error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            role="alert"
            aria-live="polite"
          >
            <FaExclamationCircle />
            {t('contact.form.error')}
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}

export default ContactForm
