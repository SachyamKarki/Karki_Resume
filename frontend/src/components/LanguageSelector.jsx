import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { FaGlobe, FaChevronDown } from 'react-icons/fa'
import { useI18n } from '../i18n/i18nContext'

const LanguageSelector = () => {
  const { language, changeLanguage, availableLanguages } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 })
  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)

  const currentLanguage = availableLanguages.find(lang => lang.code === language) || availableLanguages[0]

  const handleLanguageChange = (selectedLang) => {
    changeLanguage(selectedLang.code)
    setIsOpen(false)
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {

      setTimeout(updateDropdownPosition, 0)
    }
  }

  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const dropdownHeight = 400 

      const spaceBelow = viewportHeight - rect.bottom
      const spaceAbove = rect.top

      let top, right

      if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {

        top = rect.bottom + 8
      } else {

        top = rect.top - dropdownHeight - 8
      }

      right = window.innerWidth - rect.right

      setDropdownPosition({ top, right })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target) &&
          dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    const handleScroll = () => {
      if (isOpen) {
        updateDropdownPosition()
      }
    }

    const handleResize = () => {
      if (isOpen) {
        updateDropdownPosition()
      }
    }

    if (isOpen) {
      updateDropdownPosition()
      document.addEventListener('mousedown', handleClickOutside)
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll, { passive: true })

      document.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isOpen])

  return (
    <>
      <div className="language-selector">
        <button
          ref={buttonRef}
          className="language-button"
          onClick={handleButtonClick}
        >
          <FaGlobe />
          <span>{currentLanguage.name}</span>
          <FaChevronDown style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease'
          }} />
        </button>
      </div>

      {isOpen && createPortal(
        <div 
          ref={dropdownRef}
          className="language-dropdown"
          style={{
            position: 'fixed',
            top: dropdownPosition.top,
            right: dropdownPosition.right,
            zIndex: 100002
          }}
        >
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${language === lang.code ? 'selected' : ''}`}
              onClick={() => handleLanguageChange(lang)}
            >
              <span className="flag">{lang.flag}</span>
              <span className="name">{lang.name}</span>
            </button>
          ))}
        </div>,
        document.body
      )}

      <style>{`
        .language-selector {
          position: relative;
          display: inline-block;
          z-index: 100001;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05));
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 0.75rem;
          color: rgba(255, 255, 255, 0.95);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          white-space: nowrap;
          min-width: 180px;
          max-width: 200px;
          justify-content: space-between;
          flex-shrink: 0;
          min-height: 48px;
          letter-spacing: 0.025em;
        }

        .language-button:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1));
          border-color: rgba(59, 130, 246, 0.6);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(59, 130, 246, 0.3);
        }

        .language-button svg:first-child {
          color: var(--accent-color);
          font-size: 1.1rem;
        }

        .language-button svg:last-child {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .language-dropdown {
          background: var(--bg-dark);
          border: 2px solid var(--border-color);
          border-radius: 0.6rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          min-width: 200px;
          max-width: 250px;
          max-height: 400px;
          overflow-y: auto;
          overflow-x: hidden;
          backdrop-filter: blur(10px);
          z-index: 100002 !important;
          position: fixed !important;
        }

        .language-option {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 1rem 1.2rem;
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          white-space: nowrap;
        }

        .language-option:hover {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-color);
          transform: translateX(5px);
        }

        .language-option.selected {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-color);
          border-left: 3px solid var(--accent-color);
        }

        .flag {
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .name {
          font-weight: 600;
        }

        .language-dropdown::-webkit-scrollbar {
          width: 6px;
        }

        .language-dropdown::-webkit-scrollbar-track {
          background: var(--bg-darker);
          border-radius: 3px;
        }

        .language-dropdown::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 3px;
        }

        .language-dropdown::-webkit-scrollbar-thumb:hover {
          background: var(--accent-color);
        }

        @media (max-width: 1024px) {
          .language-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            min-width: 130px;
            max-width: 160px;
          }

          .language-dropdown {
            min-width: 200px;
            max-width: 250px;
            right: 0;
            left: auto;
          }
        }

        @media (max-width: 768px) {
          .language-button {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            min-width: 120px;
            max-width: 140px;
          }

          .language-button span {
            display: none;
          }

          .language-dropdown {
            right: 0;
            left: auto;
            min-width: 100%;
            max-width: 100%;
            max-height: 350px;
          }
        }

        @media (max-width: 480px) {
          .language-button {
            padding: 0.3rem 0.6rem;
            font-size: 0.75rem;
            min-width: 100px;
            max-width: 120px;
          }

          .language-dropdown {
            min-width: 100%;
            max-width: 100%;
            max-height: 300px;
          }
        }

        @media (max-width: 1600px) {
          .language-button {
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
            min-height: 44px;
            min-width: 170px;
            max-width: 190px;
          }
        }

        @media (max-width: 1024px) {
          .language-button {
            padding: 0.5rem 0.8rem;
            font-size: 0.85rem;
            min-height: 40px;
            min-width: 140px;
            max-width: 160px;
          }
        }

        @media (max-width: 1100px) {
          .language-button {
            padding: 0.4rem 0.7rem;
            font-size: 0.8rem;
            min-height: 38px;
            min-width: 130px;
            max-width: 150px;
          }
        }

        @media (max-width: 1200px) {
          .language-button {
            font-size: 0.8rem;
            padding: 0.4rem 0.7rem;
            min-height: 38px;
            min-width: 120px;
            max-width: 140px;
          }
        }

        @media (max-width: 900px) {
          .language-button {
            padding: 0.5rem 0.9rem;
            font-size: 0.8rem;
            min-height: 40px;
            min-width: 110px;
            max-width: 130px;
          }
        }

        @media (max-width: 768px) {
          .language-button {
            width: 100%;
            max-width: 100%;
            justify-content: center;
            padding: 0.8rem 1.6rem;
            font-size: 1rem;
            font-weight: 600;
            min-height: 48px;
            min-width: auto;
          }
        }

        @media (max-width: 480px) {
          .language-button {
            max-width: 100%;
            padding: 0.7rem 1.3rem;
            font-size: 0.9rem;
            min-height: 44px;
          }
        }

        @media (max-width: 360px) {
          .language-button {
            max-width: 100%;
            padding: 0.6rem 1.1rem;
            font-size: 0.85rem;
            min-height: 40px;
          }
        }
      `}</style>
    </>
  )
}

export default LanguageSelector