import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaAws,
  FaDatabase,
  FaMobile,
  FaServer
} from 'react-icons/fa'
import profileData from '../data/profile'
import { useI18n } from '../i18n/i18nContext'
import './Skills.css'

const Skills = () => {
  const { t } = useI18n()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  
  const [balls, setBalls] = useState([])
  const [isActive, setIsActive] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isInteracting, setIsInteracting] = useState(false)
  const [particles, setParticles] = useState([])
  const [stars, setStars] = useState([])
  const [dimensions, setDimensions] = useState({
    ballRadius: 50,
    containerWidth: window.innerWidth,
    containerHeight: 600,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
  })
  const containerRef = useRef(null)
  const summaryRef = useRef(null)
  const animationRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragBall, setDragBall] = useState(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [originalPositions, setOriginalPositions] = useState({})
  const [isPullingDown, setIsPullingDown] = useState(false)
  const [freefallBalls, setFreefallBalls] = useState(new Set())

  // Enhanced physics constants for upward anti-gravity movement
  const GRAVITY_CENTER = { x: 0, y: 0 } // Will be set to container center
  const GRAVITY_FORCE = 0.1
  const ANTI_GRAVITY_FORCE = 0.5 // Increased for stronger return force
  const UPWARD_FORCE = 0.4 // Force that pushes balls upward
  const UPWARD_RESISTANCE = 0.7 // Resistance when trying to pull down
  const BOUNCE_DAMPING = 0.8 // Improved bounce
  const FRICTION = 0.98 // Reduced friction for smoother movement
  const MAX_SPEED = 12 // Increased max speed
  const HORIZONTAL_BOUNCE_FORCE = 0.5 // Enhanced horizontal movement
  const REPULSION_FORCE = 1.0 // Stronger repulsion
  const MIN_DISTANCE = 200 // Increased minimum distance to prevent surface touching
  const DRAG_SENSITIVITY = 1.5 // Enhanced drag sensitivity
  const RETURN_FORCE = 0.25 // Force to return to original position
  const UPWARD_THRESHOLD = 40 // Distance from top to trigger upward force
  const DRAG_PHYSICS_FORCE = 0.3 // Physics force during dragging
  const MOMENTUM_TRANSFER = 0.8 // Momentum transfer between balls
  const FREEFALL_GRAVITY = 0.2 // Gravity effect when outside component
  const FREEFALL_DRAG = 0.99 // Air resistance during freefall
  const RETURN_ATTRACTION = 0.1 // Attraction force back to component

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 768
      const isTablet = window.innerWidth < 1024
      
      setDimensions({
        ballRadius: isMobile ? 35 : isTablet ? 40 : 50,
        containerWidth: window.innerWidth,
        containerHeight: isMobile ? 400 : isTablet ? 500 : 600,
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Initialize star field
  const initializeStars = useCallback(() => {
    const starCount = 200
    return Array.from({ length: starCount }, (_, i) => ({
      id: `star-${i}`,
      x: Math.random() * dimensions.containerWidth,
      y: Math.random() * dimensions.containerHeight,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.5 + 0.1,
      twinklePhase: Math.random() * Math.PI * 2
    }))
  }, [dimensions.containerWidth, dimensions.containerHeight])

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: <FaReact />,
      skills: profileData.skills.frontend.map(skill => ({
        ...skill,
        icon: skill.name === 'React' ? <FaReact /> : 
              skill.name === 'JavaScript' ? <FaJs /> :
              skill.name === 'HTML5' ? <FaHtml5 /> :
              skill.name === 'CSS3' ? <FaCss3Alt /> :
              <FaJs />
      }))
    },
    {
      title: t('skills.backend'), 
      icon: <FaServer />,
      skills: profileData.skills.backend.map(skill => ({
        ...skill,
        icon: skill.name === 'Node.js' ? <FaNodeJs /> :
              skill.name === 'Python' ? <FaPython /> :
              skill.name === 'MongoDB' ? <FaDatabase /> :
              <FaServer />
      }))
    },
    {
      title: t('skills.mobile'),
      icon: <FaMobile />,
      skills: profileData.skills.mobile.map(skill => ({
        ...skill,
        icon: <FaMobile />
      }))
    },
    {
      title: t('skills.tools'),
      icon: <FaGitAlt />,
      skills: profileData.skills.tools.map(skill => ({
        ...skill,
        icon: skill.name === 'GitHub' ? <FaGitAlt /> :
              skill.name === 'AWS' ? <FaAws /> :
              skill.name === 'Firebase' ? <FaDatabase /> :
              <FaGitAlt />
      }))
    }
  ]

  const initializeParticles = () => {
    const particleCount = 100
    return Array.from({ length: particleCount }, (_, i) => ({
      id: `particle-${i}`,
      x: Math.random() * dimensions.containerWidth,
      y: Math.random() * dimensions.containerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      twinklePhase: Math.random() * Math.PI * 2
    }))
  }

  const initializeBalls = useCallback(() => {
    try {
      if (!skillCategories || skillCategories.length === 0) {
        console.warn('No skill categories available')
        return []
      }

      const allSkills = skillCategories.flatMap(category => {
        if (!category || !category.skills) return []
        return category.skills.map(skill => ({ ...skill, category }))
      })
      
      if (allSkills.length === 0) {
        console.warn('No skills available')
        return []
      }
      
      const newBalls = []
      const minDistance = dimensions.ballRadius * 2 + 60 // Increased minimum distance to prevent surface touching
      const maxAttempts = 150 // Increased attempts to find valid positions
      
      allSkills.forEach((skill) => {
        if (!skill || !skill.name) return
        
        let attempts = 0
        let validPosition = false
        let x, y
        
        // Try to find a position that doesn't overlap with existing balls
        while (!validPosition && attempts < maxAttempts) {
          x = Math.random() * (dimensions.containerWidth - dimensions.ballRadius * 2) + dimensions.ballRadius
          y = Math.random() * (dimensions.containerHeight - dimensions.ballRadius * 2) + dimensions.ballRadius
          
          // Check if this position overlaps with any existing ball
          validPosition = true
          for (const existingBall of newBalls) {
            const dx = x - existingBall.x
            const dy = y - existingBall.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < minDistance) {
              validPosition = false
              break
            }
          }
          
          attempts++
        }
        
        // If we couldn't find a valid position, use the last attempted position
        // The physics system will handle separation
        if (!validPosition) {
          x = Math.random() * (dimensions.containerWidth - dimensions.ballRadius * 2) + dimensions.ballRadius
          y = Math.random() * (dimensions.containerHeight - dimensions.ballRadius * 2) + dimensions.ballRadius
        }
        
        newBalls.push({
          id: skill.name,
          x,
          y,
          vx: (Math.random() - 0.5) * 4, // Reduced initial velocity
          vy: (Math.random() - 0.5) * 4,
          skill,
          radius: dimensions.ballRadius,
          isDragging: false
        })
      })
      
      // Store original positions
      const positions = {}
      newBalls.forEach(ball => {
        if (ball && ball.id) {
          positions[ball.id] = { x: ball.x, y: ball.y }
        }
      })
      setOriginalPositions(positions)
      
      return newBalls
    } catch (error) {
      console.error('Error initializing balls:', error)
      return []
    }
  }, [skillCategories, dimensions])

  // Animate stars
  useEffect(() => {
    if (!isActive || stars.length === 0) return

    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => {
          let newX = star.x + star.speed
          let newY = star.y

          // Wrap horizontally
          if (newX > dimensions.containerWidth) {
            newX = 0
          }

        const time = Date.now() / 1000
          const twinkleOpacity = star.opacity * (0.3 + 0.7 * Math.sin(time * 3 + star.twinklePhase))
        
        return {
            ...star,
            x: newX,
            opacity: twinkleOpacity
        }
      })
    )
  }

    const interval = setInterval(animateStars, 50)
    return () => clearInterval(interval)
  }, [isActive, stars.length, dimensions])

  // Main space physics animation
  useEffect(() => {
    if (!isActive || balls.length === 0) return

    let animationId
    const animateBalls = () => {
      try {
        setBalls(prevBalls => {
          if (!prevBalls || prevBalls.length === 0) return prevBalls
          
          // First pass: calculate forces and update positions
          const updatedBalls = [...prevBalls].map(ball => {
            if (ball.isDragging) return ball

            let { x, y, vx, vy } = ball

            // Enhanced anti-gravity force toward original position
            const originalPos = originalPositions[ball.id]
            if (originalPos) {
              const dx = originalPos.x - x
              const dy = originalPos.y - y
              const distance = Math.sqrt(dx * dx + dy * dy)
              
              if (distance > 0) {
                // Stronger force when further away, gentler when close
                const force = ANTI_GRAVITY_FORCE * (1 + distance * 0.01) / (distance * 0.003 + 1)
                vx += (dx / distance) * force
                vy += (dy / distance) * force
                
                // Additional return force for smoother movement
                if (distance > 100) {
                  const returnForce = RETURN_FORCE * (distance - 100) / 100
                  vx += (dx / distance) * returnForce
                  vy += (dy / distance) * returnForce
                }
              }
            }

            // Upward anti-gravity force - only applies within skills section
            if (x >= 0 && x <= dimensions.viewportWidth && 
                y >= 0 && y <= dimensions.containerHeight) {
              // Remove from freefall when back in skills section
              setFreefallBalls(prev => {
                const newSet = new Set(prev)
                newSet.delete(ball.id)
                return newSet
              })
              
              const distanceFromTop = y - ball.radius
              if (distanceFromTop > UPWARD_THRESHOLD) {
                // Apply upward force when balls are below threshold
                const upwardForce = UPWARD_FORCE * (1 - distanceFromTop / dimensions.containerHeight)
                vy -= upwardForce
              }

              // Enhanced upward force when balls are in the lower half
              if (y > dimensions.containerHeight / 2) {
                const lowerHalfForce = UPWARD_FORCE * 0.5
                vy -= lowerHalfForce
              }
            } else {
              // Freefall effect when outside the skills section
              // Apply gravity downward
              vy += FREEFALL_GRAVITY
              
              // Add air resistance
              vx *= FREEFALL_DRAG
              vy *= FREEFALL_DRAG
              
              // Attraction force back to the component center
              const componentCenterX = dimensions.viewportWidth / 2
              const componentCenterY = dimensions.containerHeight / 2
              const attractionX = (componentCenterX - x) * RETURN_ATTRACTION
              const attractionY = (componentCenterY - y) * RETURN_ATTRACTION
              
              vx += attractionX
              vy += attractionY
              
              // Mark ball as in freefall
              setFreefallBalls(prev => new Set(prev).add(ball.id))
            }

            // Enhanced repulsion force from other balls with momentum transfer
            for (let otherBall of prevBalls) {
              if (otherBall.id !== ball.id && !otherBall.isDragging) {
                const dx = ball.x - otherBall.x
                const dy = ball.y - otherBall.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                
                if (distance < MIN_DISTANCE && distance > 0) {
                  // Much stronger repulsion when closer - exponential force
                  const normalizedDistance = distance / MIN_DISTANCE
                  const repulsionForce = REPULSION_FORCE * Math.pow(1 - normalizedDistance, 5) // Increased power
                  vx += (dx / distance) * repulsionForce
                  vy += (dy / distance) * repulsionForce
                  
                  // Additional separation force for very close balls
                  if (distance < MIN_DISTANCE * 0.6) {
                    const separationForce = REPULSION_FORCE * 3.0 // Increased force
                    vx += (dx / distance) * separationForce
                    vy += (dy / distance) * separationForce
                  }
                  
                  // Emergency separation for balls getting too close to touching
                  if (distance < (ball.radius + otherBall.radius) * 1.5) {
                    const emergencyForce = REPULSION_FORCE * 5.0 // Much stronger emergency force
                    vx += (dx / distance) * emergencyForce
                    vy += (dy / distance) * emergencyForce
                  }
                  
                  // Critical separation for balls that are almost touching
                  if (distance < (ball.radius + otherBall.radius) * 1.1) {
                    const criticalForce = REPULSION_FORCE * 8.0 // Critical force to prevent touching
                    vx += (dx / distance) * criticalForce
                    vy += (dy / distance) * criticalForce
                  }
                  
                  // Enhanced momentum transfer for more realistic physics
                  const momentumX = (otherBall.vx - ball.vx) * MOMENTUM_TRANSFER * 0.2
                  const momentumY = (otherBall.vy - ball.vy) * MOMENTUM_TRANSFER * 0.2
                  
                  vx += momentumX
                  vy += momentumY
                  
                  // Add opposite direction force to prevent sticking
                  const oppositeForce = 1.0 // Increased opposite force
                  vx += (dx / distance) * oppositeForce
                  vy += (dy / distance) * oppositeForce
                }
              }
            }

            // Apply friction
            vx *= FRICTION
            vy *= FRICTION

            // Limit speed
            const speed = Math.sqrt(vx * vx + vy * vy)
            if (speed > MAX_SPEED) {
              vx = (vx / speed) * MAX_SPEED
              vy = (vy / speed) * MAX_SPEED
            }

            // Update position
            x += vx
            y += vy

            // Enhanced boundary detection to prevent cutoffs
            // Always ensure balls stay within visible bounds
            if (x < ball.radius) {
              x = ball.radius
              vx = Math.abs(vx) * BOUNCE_DAMPING
              vx += HORIZONTAL_BOUNCE_FORCE
            } else if (x > dimensions.viewportWidth - ball.radius) {
              x = dimensions.viewportWidth - ball.radius
              vx = -Math.abs(vx) * BOUNCE_DAMPING
              vx -= HORIZONTAL_BOUNCE_FORCE
            }

            // Vertical boundary detection
            if (y < ball.radius) {
              y = ball.radius
              vy = Math.abs(vy) * BOUNCE_DAMPING
            } else if (y > dimensions.containerHeight - ball.radius) {
              y = dimensions.containerHeight - ball.radius
              vy = -Math.abs(vy) * BOUNCE_DAMPING
            }

            return { ...ball, x, y, vx, vy }
          })

          // Second pass: handle ball-to-ball collisions
          for (let i = 0; i < updatedBalls.length; i++) {
            for (let j = i + 1; j < updatedBalls.length; j++) {
              const ball1 = updatedBalls[i]
              const ball2 = updatedBalls[j]

              if (ball1.isDragging || ball2.isDragging) continue
              
              const dx = ball2.x - ball1.x
              const dy = ball2.y - ball1.y
              const distance = Math.sqrt(dx * dx + dy * dy)
              const minDistance = ball1.radius + ball2.radius + 80 // Much larger buffer to prevent surface touching

              if (distance < minDistance && distance > 0) {
                // Calculate overlap amount
                const overlap = minDistance - distance
                const separationForce = Math.min(overlap * 2.0, 60) // Increased maximum separation force
                
                // Calculate separation direction
                const separationX = (dx / distance) * separationForce
                const separationY = (dy / distance) * separationForce
                
                // Apply separation to both balls
                ball1.x -= separationX
                ball1.y -= separationY
                ball2.x += separationX
                ball2.y += separationY
                
                // Enhanced opposite direction bouncing
                const bounceForce = 3.0 // Increased bounce force
                const bounceX = (dx / distance) * bounceForce
                const bounceY = (dy / distance) * bounceForce
                
                // Apply opposite velocity to create bouncing effect
                ball1.vx -= bounceX
                ball1.vy -= bounceY
                ball2.vx += bounceX
                ball2.vy += bounceY
                
                // Emergency separation for balls getting close to touching
                if (distance < (ball1.radius + ball2.radius) * 1.2) {
                  const emergencySeparation = 80 // Increased emergency separation
                  const emergencyX = (dx / distance) * emergencySeparation
                  const emergencyY = (dy / distance) * emergencySeparation
                  
                  ball1.x -= emergencyX
                  ball1.y -= emergencyY
                  ball2.x += emergencyX
                  ball2.y += emergencyY
                  
                  // Much stronger bounce for emergency separation
                  const emergencyBounce = 5.0 // Increased emergency bounce
                  ball1.vx -= (dx / distance) * emergencyBounce
                  ball1.vy -= (dy / distance) * emergencyBounce
                  ball2.vx += (dx / distance) * emergencyBounce
                  ball2.vy += (dy / distance) * emergencyBounce
                }
                
                // Critical separation for balls that are almost touching
                if (distance < (ball1.radius + ball2.radius) * 1.05) {
                  const criticalSeparation = 120 // Critical separation force
                  const criticalX = (dx / distance) * criticalSeparation
                  const criticalY = (dy / distance) * criticalSeparation
                  
                  ball1.x -= criticalX
                  ball1.y -= criticalY
                  ball2.x += criticalX
                  ball2.y += criticalY
                  
                  // Maximum bounce for critical separation
                  const criticalBounce = 8.0 // Maximum bounce force
                  ball1.vx -= (dx / distance) * criticalBounce
                  ball1.vy -= (dy / distance) * criticalBounce
                  ball2.vx += (dx / distance) * criticalBounce
                  ball2.vy += (dy / distance) * criticalBounce
                }
                
                // Enhanced elastic collision with repulsion
                const normalX = dx / distance
                const normalY = dy / distance

                const relativeVx = ball2.vx - ball1.vx
                const relativeVy = ball2.vy - ball1.vy
                
                const relativeSpeed = relativeVx * normalX + relativeVy * normalY
                
                if (relativeSpeed < 0) continue

                const impulse = relativeSpeed * 2.0 // Much increased impulse
                ball1.vx += impulse * normalX
                ball1.vy += impulse * normalY
                ball2.vx -= impulse * normalX
                ball2.vy -= impulse * normalY

                // Additional repulsion force
                const repulsionStrength = 1.5 // Much increased repulsion
                ball1.vx += normalX * repulsionStrength
                ball1.vy += normalY * repulsionStrength
                ball2.vx -= normalX * repulsionStrength
                ball2.vy -= normalY * repulsionStrength
              }
            }
          }

          return updatedBalls
        })
      } catch (error) {
        console.error('Animation error:', error)
      }
      
      animationId = requestAnimationFrame(animateBalls)
    }

    animationId = requestAnimationFrame(animateBalls)
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isActive, balls.length, dimensions, originalPositions])

  useEffect(() => {
    if (isInView && !isActive) {
      setIsActive(true)
      setBalls(initializeBalls())
      setStars(initializeStars())
    }
  }, [isInView, isActive, initializeBalls, initializeStars])

  // Global event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
      
      // Disable button interactions when dragging
      document.addEventListener('click', preventButtonClicks, true)
      document.addEventListener('mousedown', preventButtonClicks, true)
      document.addEventListener('touchstart', preventButtonClicks, true)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
      
      // Re-enable button interactions
      document.removeEventListener('click', preventButtonClicks, true)
      document.removeEventListener('mousedown', preventButtonClicks, true)
      document.removeEventListener('touchstart', preventButtonClicks, true)
    }
  }, [isDragging, dragBall, dragOffset, dimensions])


  // Prevent button clicks when dragging
  const preventButtonClicks = (e) => {
    if (isDragging && dragBall) {
      // Check if the target is a button or interactive element
      const target = e.target
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.tagName === 'INPUT' || 
                           target.tagName === 'SELECT' || 
                           target.tagName === 'TEXTAREA' ||
                           target.closest('button') ||
                           target.closest('a') ||
                           target.closest('[role="button"]') ||
                           target.closest('[onclick]')
      
      if (isInteractive) {
        e.preventDefault()
        e.stopPropagation()
        e.stopImmediatePropagation()
        return false
      }
    }
  }

  // Global drag and throw functionality
  const handleMouseDown = (e, ballId) => {
    try {
      e.preventDefault()
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      const targetBall = balls.find(b => b.id === ballId)
      if (!targetBall) {
        console.warn('Ball not found:', ballId)
        return
      }
      
      // Get the ball's current screen position
      const ballElement = e.target.closest('.planet-skill')
      if (ballElement) {
        const rect = ballElement.getBoundingClientRect()
        const ballCenterX = rect.left + rect.width / 2
        const ballCenterY = rect.top + rect.height / 2
        
        setBalls(prevBalls => 
          prevBalls.map(ball => 
            ball.id === ballId 
              ? { ...ball, isDragging: true }
              : ball
          )
        )
        
        setDragBall(ballId)
        setDragOffset({
          x: mouseX - ballCenterX,
          y: mouseY - ballCenterY
        })
        setIsDragging(true)
      }
    } catch (error) {
      console.error('Error in handleMouseDown:', error)
    }
  }

  const handleGlobalMouseMove = (e) => {
    try {
      if (isDragging && dragBall) {
        const mouseX = e.clientX
        const mouseY = e.clientY
        
        setMousePosition({ x: mouseX, y: mouseY })
        
        setBalls(prevBalls => 
          prevBalls.map(ball => {
            if (ball.id === dragBall) {
              // Calculate new position based on mouse position and offset
              let newX = mouseX - dragOffset.x
              let newY = mouseY - dragOffset.y
              
              // Calculate velocity for smooth physics
              const deltaX = newX - ball.x
              const deltaY = newY - ball.y
              const velocityX = deltaX * DRAG_PHYSICS_FORCE
              const velocityY = deltaY * DRAG_PHYSICS_FORCE
              
              // Allow free movement throughout the entire website
              // No boundary restrictions when dragging
              
              // Only apply upward resistance when within the skills section area
              const originalPos = originalPositions[ball.id]
              if (originalPos && newY > originalPos.y && 
                  newX >= 0 && newX <= dimensions.viewportWidth &&
                  newY >= 0 && newY <= dimensions.containerHeight) {
                // Calculate resistance based on how far down we're trying to pull
                const pullDownDistance = newY - originalPos.y
                const resistance = Math.min(UPWARD_RESISTANCE, pullDownDistance * 0.01)
                newY = originalPos.y + (pullDownDistance * (1 - resistance))
                
                // Set visual feedback for pulling down
                setIsPullingDown(true)
              } else {
                setIsPullingDown(false)
              }
              
              return { 
                ...ball, 
                x: newX,
                y: newY,
                vx: velocityX, // Apply calculated velocity for smooth movement
                vy: velocityY
              }
            }
            return ball
          })
        )
      }
    } catch (error) {
      console.error('Error in handleGlobalMouseMove:', error)
    }
  }

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      setMousePosition({ x: mouseX, y: mouseY })
      
      if (isDragging && dragBall) {
        setBalls(prevBalls => 
          prevBalls.map(ball => 
            ball.id === dragBall 
              ? { 
                  ...ball, 
                  x: Math.max(ball.radius, Math.min(dimensions.viewportWidth - ball.radius, mouseX - dragOffset.x)),
                  y: Math.max(ball.radius, Math.min(dimensions.containerHeight - ball.radius, mouseY - dragOffset.y))
                }
              : ball
          )
        )
      }
    }
  }

  const handleGlobalMouseUp = (e) => {
    try {
      if (isDragging && dragBall) {
        // Enhanced return to original position with upward momentum
        const originalPos = originalPositions[dragBall]
        if (originalPos) {
          setBalls(prevBalls => 
            prevBalls.map(ball => {
              if (ball.id === dragBall) {
                // Calculate return velocity based on distance from original position
                const distanceX = originalPos.x - ball.x
                const distanceY = originalPos.y - ball.y
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
                
                // Stronger return force for balls that are far from original position
                const returnStrength = Math.min(0.3, distance * 0.001)
                let returnVx = distanceX * returnStrength
                let returnVy = distanceY * returnStrength
                
                // Add upward momentum when releasing
                if (ball.y > originalPos.y) {
                  // If ball was pulled down, add extra upward force
                  returnVy -= UPWARD_FORCE * 0.5
                } else {
                  // If ball was pulled up, add gentle upward momentum
                  returnVy -= UPWARD_FORCE * 0.2
                }
                
                // Ensure minimum return velocity for distant balls
                if (distance > 200) {
                  const minReturnForce = 0.15
                  returnVx = Math.max(minReturnForce, Math.abs(returnVx)) * Math.sign(returnVx)
                  returnVy = Math.max(minReturnForce, Math.abs(returnVy)) * Math.sign(returnVy)
                }
                
                return { 
                  ...ball, 
                  isDragging: false, 
                  vx: returnVx,
                  vy: returnVy
                }
              }
              return ball
            })
          )
        }
      }
      
      setIsDragging(false)
      setDragBall(null)
    } catch (error) {
      console.error('Error in handleGlobalMouseUp:', error)
      setIsDragging(false)
      setDragBall(null)
    }
  }

  const handleMouseUp = (e) => {
    if (isDragging && dragBall) {
      // Make ball return to original position with smooth animation
      const originalPos = originalPositions[dragBall]
      if (originalPos) {
        setBalls(prevBalls => 
          prevBalls.map(ball => 
            ball.id === dragBall 
              ? { 
                  ...ball, 
                  isDragging: false, 
                  vx: (originalPos.x - ball.x) * 0.15, 
                  vy: (originalPos.y - ball.y) * 0.15 
                }
              : ball
          )
        )
      }
    }
    
    setIsDragging(false)
    setDragBall(null)
  }

  const handleTouchStart = (e, ballId) => {
    try {
      e.preventDefault()
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const touchX = touch.clientX
        const touchY = touch.clientY
        
        const targetBall = balls.find(b => b.id === ballId)
        if (!targetBall) {
          console.warn('Ball not found for touch:', ballId)
          return
        }
        
        // Get the ball's current screen position
        const ballElement = e.target.closest('.planet-skill')
        if (ballElement) {
          const rect = ballElement.getBoundingClientRect()
          const ballCenterX = rect.left + rect.width / 2
          const ballCenterY = rect.top + rect.height / 2
          
          setBalls(prevBalls => 
            prevBalls.map(ball => 
              ball.id === ballId 
                ? { ...ball, isDragging: true }
                : ball
            )
          )
          
          setDragBall(ballId)
          setDragOffset({
            x: touchX - ballCenterX,
            y: touchY - ballCenterY
          })
          setIsDragging(true)
        }
      }
    } catch (error) {
      console.error('Error in handleTouchStart:', error)
    }
  }

  const handleTouchMove = (e) => {
    try {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const touchX = touch.clientX
        const touchY = touch.clientY
        
        setMousePosition({ x: touchX, y: touchY })
        
        if (isDragging && dragBall) {
          setBalls(prevBalls => 
            prevBalls.map(ball => {
              if (ball.id === dragBall) {
                // Calculate new position based on touch position and offset
                let newX = touchX - dragOffset.x
                let newY = touchY - dragOffset.y
                
                // Calculate velocity for smooth physics
                const deltaX = newX - ball.x
                const deltaY = newY - ball.y
                const velocityX = deltaX * DRAG_PHYSICS_FORCE
                const velocityY = deltaY * DRAG_PHYSICS_FORCE
                
                // Allow free movement throughout the entire website
                // No boundary restrictions when dragging
                
                // Only apply upward resistance when within the skills section area
                const originalPos = originalPositions[ball.id]
                if (originalPos && newY > originalPos.y && 
                    newX >= 0 && newX <= dimensions.viewportWidth &&
                    newY >= 0 && newY <= dimensions.containerHeight) {
                  // Calculate resistance based on how far down we're trying to pull
                  const pullDownDistance = newY - originalPos.y
                  const resistance = Math.min(UPWARD_RESISTANCE, pullDownDistance * 0.01)
                  newY = originalPos.y + (pullDownDistance * (1 - resistance))
                  
                  // Set visual feedback for pulling down
                  setIsPullingDown(true)
                } else {
                  setIsPullingDown(false)
                }
                
                return { 
                  ...ball, 
                  x: newX,
                  y: newY,
                  vx: velocityX, // Apply calculated velocity for smooth movement
                  vy: velocityY
                }
              }
              return ball
            })
          )
        }
      }
    } catch (error) {
      console.error('Error in handleTouchMove:', error)
    }
  }

  const handleTouchEnd = (e) => {
    try {
      if (isDragging && dragBall) {
        // Enhanced return to original position with distance-based velocity
        const originalPos = originalPositions[dragBall]
        if (originalPos) {
          setBalls(prevBalls => 
            prevBalls.map(ball => {
              if (ball.id === dragBall) {
                // Calculate return velocity based on distance from original position
                const distanceX = originalPos.x - ball.x
                const distanceY = originalPos.y - ball.y
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
                
                // Stronger return force for balls that are far from original position
                const returnStrength = Math.min(0.3, distance * 0.001)
                let returnVx = distanceX * returnStrength
                let returnVy = distanceY * returnStrength
                
                // Add upward momentum when releasing
                if (ball.y > originalPos.y) {
                  returnVy -= UPWARD_FORCE * 0.5
                } else {
                  returnVy -= UPWARD_FORCE * 0.2
                }
                
                // Ensure minimum return velocity for distant balls
                if (distance > 200) {
                  const minReturnForce = 0.15
                  returnVx = Math.max(minReturnForce, Math.abs(returnVx)) * Math.sign(returnVx)
                  returnVy = Math.max(minReturnForce, Math.abs(returnVy)) * Math.sign(returnVy)
                }
                
                return { 
                  ...ball, 
                  isDragging: false, 
                  vx: returnVx,
                  vy: returnVy
                }
              }
              return ball
            })
          )
        }
      }
      
      setIsDragging(false)
      setDragBall(null)
    } catch (error) {
      console.error('Error in handleTouchEnd:', error)
      setIsDragging(false)
      setDragBall(null)
    }
  }

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        {/* Professional Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <p className="section-subtitle">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Professional Interactive Skills Container */}
        <motion.div
          ref={containerRef}
          className="professional-skills-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            height: dimensions.containerHeight + 'px'
          }}
        >
          {/* Star Field Background */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="space-star"
              style={{
                position: 'absolute',
                left: star.x + 'px',
                top: star.y + 'px',
                width: star.size + 'px',
                height: star.size + 'px',
                opacity: star.opacity
                }}
              />
            ))}

          {/* Interactive Skill Planets */}
          {balls && balls.length > 0 && balls.map((ball) => {
            if (!ball || !ball.id || !ball.skill) {
              console.warn('Invalid ball data:', ball)
              return null
            }
            
            return (
              <motion.div
                key={ball.id}
                className={`planet-skill ${ball.isDragging ? 'dragging' : ''} ${ball.isDragging && isPullingDown ? 'downward' : ''} ${freefallBalls.has(ball.id) ? 'freefall' : ''}`}
                style={{ 
                  position: ball.isDragging ? 'fixed' : 'absolute',
                  left: (ball.x - ball.radius) + 'px',
                  top: (ball.y - ball.radius) + 'px',
                  width: ball.radius * 2 + 'px',
                  height: ball.radius * 2 + 'px',
                  cursor: ball.isDragging ? 'grabbing' : 'grab',
                  zIndex: ball.isDragging ? 999999 : 99999
                }}
                onMouseDown={(e) => handleMouseDown(e, ball.id)}
                onTouchStart={(e) => handleTouchStart(e, ball.id)}
                whileHover={{ scale: ball.isDragging ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="planet-content">
                  <div className="planet-icon">{ball.skill.icon}</div>
                  <span className="planet-name">{ball.skill.name}</span>
                </div>
              </motion.div>
            )
          })}

          {/* Center Gravity Point */}
          <div
            className="gravity-center"
            style={{
              position: 'absolute',
              left: dimensions.containerWidth / 2 - 20 + 'px',
              top: dimensions.containerHeight / 2 - 20 + 'px',
              width: '40px',
              height: '40px'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills