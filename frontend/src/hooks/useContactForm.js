import { useState, useCallback } from 'react'

// Validation rules
const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/,
    message: 'Name must be 2-50 characters and contain only letters and spaces'
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100,
    message: 'Subject must be 5-100 characters'
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    message: 'Message must be 10-1000 characters'
  }
}

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Validate individual field
  const validateField = useCallback((name, value) => {
    const rule = validationRules[name]
    if (!rule) return null

    // Required check
    if (rule.required && (!value || value.trim() === '')) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') return null

    // Min length check
    if (rule.minLength && value.length < rule.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${rule.minLength} characters`
    }

    // Max length check
    if (rule.maxLength && value.length > rule.maxLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} must be no more than ${rule.maxLength} characters`
    }

    // Pattern check
    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message
    }

    return null
  }, [])

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {}
    let isValid = true

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field])
      if (error) {
        newErrors[field] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }, [formData, validateField])

  // Handle input change
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }))
    }

    // Clear submit status when user makes changes
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }, [errors, submitStatus])

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5001' : 'https://karki-resume-backend.onrender.com')

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
      } else {
        const errorData = await response.json()
        setSubmitStatus('error')
        console.error('Server error:', errorData.message)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm])

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setSubmitStatus(null)
    setIsSubmitting(false)
  }, [])

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateField
  }
}
