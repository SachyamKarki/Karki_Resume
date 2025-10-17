import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobile, FaLaptop } from 'react-icons/fa'
import profileData from '../data/profile'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = profileData.projects

  const categories = [
    { id: 'all', name: 'All Projects', icon: FaCode, count: projects.length },
    { id: 'frontend', name: 'Frontend', icon: FaLaptop, count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: FaServer, count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Fullstack', icon: FaCode, count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', name: 'Mobile', icon: FaMobile, count: projects.filter(p => p.category === 'mobile').length }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div ref={ref} className="projects-layout">
          {}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="projects-sidebar"
          >
            <div className="filter-section">
              <h3 className="filter-title">Filter by Category</h3>
              <div className="filter-buttons">
                {categories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => {
                        console.log('Filter button clicked:', category.id)
                        setActiveFilter(category.id)
                      }}
                      className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <IconComponent className="filter-icon" />
                      <span className="filter-text">{category.name}</span>
                      <span className="filter-count">{category.count}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="projects-content"
          >
            {}
            {activeFilter === 'all' && (
              <div className="featured-section">
                <h3 className="content-section-title">Featured Projects</h3>
                <div className="featured-projects">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.2, delay: index * 0.02 }}
                      className="featured-project"
                    >
                      <div className="project-image">
                        <div className="image-placeholder">
                          <span>{project.title.charAt(0)}</span>
                        </div>
                        <div className="project-overlay">
                          <div className="project-links">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="project-link"
                            >
                              <FaGithub />
                            </motion.a>
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="project-link"
                            >
                              <FaExternalLinkAlt />
                            </motion.a>
                          </div>
                        </div>
                      </div>

                      <div className="project-content">
                        <div className="project-category">
                          <span className="category-badge">{project.category}</span>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>

                        <div className="project-technologies">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {}
            <div className="all-projects-section">
              <h3 className="content-section-title">
                {activeFilter === 'all' ? 'All Projects' : `${categories.find(c => c.id === activeFilter)?.name} Projects`}
                <span className="project-count">({filteredProjects.length})</span>
              </h3>

              <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }}
                    className="project-card"
                  >
                    <div className="card-image">
                      <div className="image-placeholder">
                        <span>{project.title.charAt(0)}</span>
                      </div>
                      <div className="card-overlay">
                        <div className="card-links">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="card-link"
                          >
                            <FaGithub />
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="card-link"
                          >
                            <FaExternalLinkAlt />
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    <div className="card-content">
                      <div className="card-category">
                        <span className="category-badge">{project.category}</span>
                      </div>
                      <h4 className="card-title">{project.title}</h4>
                      <p className="card-description">{project.description}</p>

                      <div className="card-technologies">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="tech-tag">+{project.technologies.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .projects-section {
          background: var(--bg-primary);
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .projects-layout {
            grid-template-columns: 300px 1fr;
            gap: 4rem;
          }
        }

        .projects-sidebar {
          order: 2;
        }

        @media (min-width: 1024px) {
          .projects-sidebar {
            order: 1;
          }
        }

        .filter-section {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
          position: sticky;
          top: 2rem;
        }

        .filter-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .filter-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 1024px) {
          .filter-buttons {
            gap: 0.5rem;
          }
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: left;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .filter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .filter-button:hover::before {
          left: 100%;
        }

        .filter-button:hover {
          background: var(--bg-dark);
          border-color: var(--accent-color);
          color: var(--text-primary);
          transform: translateX(6px) scale(1.02);
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        .filter-button.active {
          background: var(--accent-color);
          border-color: var(--accent-color);
          color: white;
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
          transform: translateX(2px);
        }

        .filter-button.active:hover {
          transform: translateX(6px) scale(1.02);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
        }

        .filter-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-button:hover .filter-icon {
          transform: scale(1.1) rotate(5deg);
          color: var(--accent-color);
        }

        .filter-text {
          flex: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-button:hover .filter-text {
          transform: translateX(2px);
        }

        .filter-count {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-button:hover .filter-count {
          background: rgba(59, 130, 246, 0.2);
          transform: scale(1.05);
        }

        .filter-button.active .filter-count {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .projects-content {
          order: 1;
        }

        @media (min-width: 1024px) {
          .projects-content {
            order: 2;
          }
        }

        .content-section-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-count {
          background: var(--bg-secondary);
          color: var(--text-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .featured-section {
          margin-bottom: 3rem;
        }

        .featured-projects {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .featured-projects {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .featured-project {
          background: 
            linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%),
            linear-gradient(135deg, rgba(64, 64, 64, 0.3) 0%, rgba(32, 32, 32, 0.2) 100%);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 32px rgba(128, 128, 128, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(128, 128, 128, 0.2);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .featured-project::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(128, 128, 128, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(96, 96, 96, 0.03) 0%, transparent 50%);
          pointer-events: none;
          animation: projectGlow 8s ease-in-out infinite;
        }

        @keyframes projectGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .featured-project:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 25px 70px rgba(0, 0, 0, 0.5),
            0 12px 40px rgba(128, 128, 128, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .project-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .project-image {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .project-image {
            height: 150px;
          }
        }

        .image-placeholder {
          width: 120px;
          height: 120px;
          background: 
            radial-gradient(circle at 30% 30%, rgba(128, 128, 128, 0.3), rgba(64, 64, 64, 0.8)),
            radial-gradient(circle at 70% 70%, rgba(96, 96, 96, 0.2), rgba(32, 32, 32, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          margin: 0 auto;
          position: relative;
          cursor: grab;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(128, 128, 128, 0.2),
            inset 0 2px 8px rgba(255, 255, 255, 0.1);
          animation: placeholderFloat 6s ease-in-out infinite;
        }

        .image-placeholder:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 
            0 12px 40px rgba(0, 0, 0, 0.7),
            0 0 50px rgba(128, 128, 128, 0.3),
            inset 0 2px 12px rgba(255, 255, 255, 0.2);
        }

        .image-placeholder:active {
          cursor: grabbing;
          transform: scale(0.95);
        }

        @keyframes placeholderFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(2deg);
          }
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .featured-project:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
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
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .project-link:nth-child(1):hover {
          background: var(--bg-dark);
          border-color: #333;
          box-shadow: 0 4px 12px rgba(51, 51, 51, 0.3);
        }

        .project-link:nth-child(2):hover {
          background: var(--accent-color);
          border-color: #0077b5;
          box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-category {
          margin-bottom: 0.75rem;
        }

        .category-badge {
          background: var(--bg-secondary);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          text-transform: capitalize;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-technologies {
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

        .all-projects-section {
          margin-top: 2rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1023px) {
          .projects-layout {
            gap: 1.5rem;
          }

          .filter-section {
            padding: 1.25rem;
            position: static;
            margin-bottom: 1rem;
            overflow: visible;
          }

          .filter-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .filter-buttons {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 0.5rem;
          }

          .filter-button {
            padding: 0.6rem 0.8rem;
            font-size: 0.8rem;
            justify-content: center;
            text-align: center;
            flex-direction: column;
            gap: 0.3rem;
            min-height: 60px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.2);
          }

          .filter-button.active {
            transform: translateY(-1px);
          }

          .filter-button.active:hover {
            transform: translateY(-3px) scale(1.02);
          }

          .filter-icon {
            font-size: 1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-icon {
            transform: scale(1.15) rotate(8deg);
          }

          .filter-text {
            font-size: 0.75rem;
            line-height: 1.2;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-text {
            transform: translateY(-1px);
          }

          .filter-count {
            font-size: 0.7rem;
            padding: 0.2rem 0.4rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-count {
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .projects-layout {
            gap: 1rem;
          }

          .filter-section {
            padding: 1rem;
            border-radius: 0.75rem;
            overflow: visible;
          }

          .filter-title {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          .filter-buttons {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.4rem;
          }

          .filter-button {
            padding: 0.5rem 0.6rem;
            font-size: 0.75rem;
            min-height: 50px;
            border-radius: 0.5rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover {
            transform: translateY(-2px) scale(1.03);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.25);
          }

          .filter-button.active {
            transform: translateY(-1px);
          }

          .filter-button.active:hover {
            transform: translateY(-2px) scale(1.03);
          }

          .filter-icon {
            font-size: 0.9rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-icon {
            transform: scale(1.2) rotate(10deg);
          }

          .filter-text {
            font-size: 0.7rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-text {
            transform: translateY(-1px);
          }

          .filter-count {
            font-size: 0.65rem;
            padding: 0.15rem 0.3rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-count {
            transform: scale(1.15);
          }

          .content-section-title {
            font-size: 1.1rem;
            margin-bottom: 1rem;
          }

          .featured-projects {
            gap: 1rem;
          }

          .projects-grid {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .projects-layout {
            gap: 0.75rem;
          }

          .filter-section {
            padding: 0.75rem;
            margin-bottom: 0.75rem;
            overflow: visible;
          }

          .filter-title {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }

          .filter-buttons {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.3rem;
          }

          .filter-button {
            padding: 0.4rem 0.5rem;
            font-size: 0.7rem;
            min-height: 45px;
            gap: 0.2rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover {
            transform: translateY(-1px) scale(1.02);
            box-shadow: 0 3px 12px rgba(59, 130, 246, 0.3);
          }

          .filter-button.active {
            transform: translateY(-0.5px);
          }

          .filter-button.active:hover {
            transform: translateY(-1px) scale(1.02);
          }

          .filter-icon {
            font-size: 0.8rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-icon {
            transform: scale(1.25) rotate(12deg);
          }

          .filter-text {
            font-size: 0.65rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-text {
            transform: translateY(-0.5px);
          }

          .filter-count {
            font-size: 0.6rem;
            padding: 0.1rem 0.25rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .filter-button:hover .filter-count {
            transform: scale(1.2);
          }

          .content-section-title {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          .project-count {
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
          }

          .featured-projects {
            gap: 0.75rem;
          }

          .projects-grid {
            gap: 0.75rem;
          }
        }

        .project-card {
          background: 
            linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%),
            linear-gradient(135deg, rgba(64, 64, 64, 0.3) 0%, rgba(32, 32, 32, 0.2) 100%);
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 8px 32px rgba(128, 128, 128, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(128, 128, 128, 0.2);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at 20% 20%, rgba(128, 128, 128, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(96, 96, 96, 0.03) 0%, transparent 50%);
          pointer-events: none;
          animation: projectGlow 8s ease-in-out infinite;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 25px 70px rgba(0, 0, 0, 0.5),
            0 12px 40px rgba(128, 128, 128, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .card-image {
          position: relative;
          height: 250px;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .card-image {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .card-image {
            height: 150px;
          }
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .card-links {
          display: flex;
          gap: 1rem;
        }

        .card-link {
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
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .card-link:hover {
          background: var(--accent-color);
          color: white;
          border-color: var(--accent-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .card-link:nth-child(1):hover {
          background: var(--bg-dark);
          border-color: #333;
          box-shadow: 0 4px 12px rgba(51, 51, 51, 0.3);
        }

        .card-link:nth-child(2):hover {
          background: var(--accent-color);
          border-color: #0077b5;
          box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-category {
          margin-bottom: 0.75rem;
        }

        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .card-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .card-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .card-content {
            padding: 1.25rem;
          }

          .card-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            line-height: 1.3;
          }

          .card-description {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }

          .card-technologies {
            gap: 0.3rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
          }

          .category-badge {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .card-content {
            padding: 1rem;
          }

          .card-title {
            font-size: 1rem;
            margin-bottom: 0.4rem;
            line-height: 1.2;
          }

          .card-description {
            font-size: 0.75rem;
            line-height: 1.3;
            margin-bottom: 0.6rem;
          }

          .card-technologies {
            gap: 0.25rem;
          }

          .tech-tag {
            font-size: 0.7rem;
            padding: 0.15rem 0.4rem;
          }

          .category-badge {
            font-size: 0.7rem;
            padding: 0.15rem 0.5rem;
          }
        }

        @media (max-width: 768px) {
          .project-content {
            padding: 1.25rem;
          }

          .project-title {
            font-size: 1.3rem;
            margin-bottom: 0.75rem;
            line-height: 1.3;
          }

          .project-description {
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }

          .project-technologies {
            gap: 0.4rem;
          }

          .project-technologies .tech-tag {
            font-size: 0.8rem;
            padding: 0.25rem 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            line-height: 1.2;
          }

          .project-description {
            font-size: 0.8rem;
            line-height: 1.4;
            margin-bottom: 0.75rem;
          }

          .project-technologies {
            gap: 0.3rem;
          }

          .project-technologies .tech-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
