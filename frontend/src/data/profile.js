const profileData = {
  personal: {
    name: "Shaksham Karki",
    title: "Mobile App Full-Stack Developer",
    location: "Sunakothi, Lalitpur, Nepal",
    email: "sachyamkarki@gmail.com",
    summary: "Passionate Mobile App Full-Stack Developer with hands-on experience in building cross-platform mobile applications and backend services. Skilled in React Native development with growing expertise in server-side technologies and database management. Currently pursuing Computer Science degree while expanding knowledge in full-stack development.",
    availability: "Available for opportunities"
  },

  social: {
    linkedin: "https://www.linkedin.com/in/shaksham-karki/",
    github: "https://github.com/shakshamkarki",
    email: "mailto:sachyamkarki@gmail.com"
  },

  experience: [
    {
      title: "Mobile App Developer",
      company: "Tridev Innovation",
      location: "Lalitpur, Nepal",
      period: "June 2024 - Present",
      description: "Developed mobile applications using React Native with focus on user-friendly interfaces and smooth performance. Implemented secure user authentication, real-time features, and third-party API integrations.",
      achievements: [
        "Built backend services using Node.js to support mobile app functionality and data management",
        "Worked on advanced mobile features including push notifications, Face ID authentication, and complex navigation systems",
        "Collaborated with team members using Git and GitHub for version control and project management",
        "Delivered projects on time while maintaining code quality and following best practices"
      ],
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase", "Git"]
    }
  ],

  education: [
    {
      degree: "BS in Computer and Information Science",
      institution: "University of West Georgia",
      location: "Online",
      period: "July 2025 - Present",
      description: "Coursework: Computer Architecture, Algorithms, Computational Theory, Database Systems. Focus on software development principles and full-stack web technologies.",
      gpa: "3.51/4.0"
    },
    {
      degree: "Exchange Student with GRSP",
      institution: "University of North Georgia",
      location: "Georgia, USA",
      period: "Aug 2024 - May 2025",
      description: "Coursework: Python Programming, Java, Calculus I & II, Elementary Portuguese. Cultural ambassador representing Nepal among international students.",
      gpa: "3.51/4.0"
    },
    {
      degree: "High School Diploma",
      institution: "Prasadi Academy",
      location: "Nepal",
      period: "March 2021 - June 2023",
      description: "Strong foundation in mathematics and science with focus on STEM subjects.",
      gpa: "3.51/4.0"
    }
  ],

  leadership: [
    {
      title: "Georgia Rotary Student Program Scholar",
      organization: "GRSP 2024-2025",
      period: "2024 - 2025",
      description: "Cultural ambassador representing Nepal among 39 students from 22 countries, developing leadership and cross-cultural communication skills."
    },
    {
      title: "Active Member",
      organization: "Rotaract Club of Patan Heritage",
      period: "2023 - Present",
      description: "Participating in community service projects, fundraising events, and cultural preservation initiatives in Lalitpur."
    },
    {
      title: "Former Member",
      organization: "Leo Club of Kathmandu Manasalu",
      period: "2021 - 2023",
      description: "Engaged in social work and leadership development activities for community betterment."
    }
  ],

  languages: [
    { name: "Nepali", level: "Native fluency" },
    { name: "English", level: "Professional fluent (IELTS: 7 band)" },
    { name: "Hindi", level: "Professional fluent" },
    { name: "Spanish", level: "Elementary" },
    { name: "Portuguese", level: "Elementary" }
  ],

  skills: {
    frontend: [
      { name: "React Native", level: 90 },
      { name: "Expo", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "NativeWind", level: 75 },
      { name: "HTML5", level: 85 },
      { name: "CSS3", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "RESTful APIs", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase Firestore", level: 85 },
      { name: "SQLite", level: 75 },
      { name: "MySQL", level: 65 }
    ],
    mobile: [
      { name: "iOS Development", level: 80 },
      { name: "Android Development", level: 80 },
      { name: "Push Notifications", level: 85 }
    ],
    tools: [
      { name: "GitHub", level: 90 },
      { name: "Android Studio", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "AWS", level: 60 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Online Shopping Mobile App",
      description: "Built a full-stack e-commerce mobile application with product browsing, cart management, and order tracking. Developed backend API using Node.js and Express.js to handle user authentication and order management.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Node.js", "Express.js", "MongoDB", "Firebase"],
      category: "fullstack",
      github: "https://github.com/shakshamkarki",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Created a productivity app for task organization with categories, deadlines, and priority levels. Built RESTful API backend for task CRUD operations and user data synchronization.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Node.js", "SQLite", "Firebase Cloud Messaging"],
      category: "mobile",
      github: "https://github.com/shakshamkarki",
      live: "https://example.com",
      featured: true
    },
    {
      id: 3,
      title: "Image Gallery App",
      description: "Developed mobile app for image management with gallery features and basic editing tools. Integrated image upload functionality with backend storage and retrieval system.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Expo", "Node.js", "Firebase Storage"],
      category: "mobile",
      github: "https://github.com/shakshamkarki",
      live: "https://example.com",
      featured: false
    },
    {
      id: 4,
      title: "Banking System Simulator",
      description: "Built a Java-based ATM simulator with core banking operations like deposit, withdrawal, and transfers. Implemented secure user authentication and transaction history tracking.",
      image: "/api/placeholder/400/300",
      technologies: ["Java", "Object-Oriented Programming", "File I/O"],
      category: "backend",
      github: "https://github.com/shakshamkarki",
      live: "https://example.com",
      featured: false
    }
  ],

  education: [
    {
      degree: "BS in Computer and Information Science",
      institution: "University of West Georgia",
      location: "Online",
      period: "July 2025 - Present",
      description: "Coursework: Computer Architecture, Algorithms, Computational Theory, Database Systems. Focus on software development principles and full-stack web technologies."
    },
    {
      degree: "Exchange Student with GRSP",
      institution: "University of North Georgia",
      location: "Georgia, USA",
      period: "Aug 2024 - May 2025",
      description: "Coursework: Python Programming, Java, Calculus I & II, Elementary Portuguese. Cultural ambassador representing Nepal among international students."
    },
    {
      degree: "High School Diploma",
      institution: "Prasadi Academy",
      location: "Nepal",
      period: "March 2021 - June 2023",
      description: "GPA: 3.51/4.0. Strong foundation in mathematics and science."
    }
  ],

  certifications: [
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credential: "Certificate"
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp", 
      date: "2023",
      credential: "Certificate"
    },
    {
      name: "React Development",
      issuer: "Online Platform",
      date: "2023",
      credential: "Certificate"
    }
  ],

  interests: [
    "Mobile App Development",
    "Cross-platform Development", 
    "Backend Services",
    "Database Management",
    "User Experience Design",
    "Problem Solving"
  ],

  languages: [
    { name: "Nepali", level: "Native fluency" },
    { name: "English", level: "Professional fluent (IELTS: 7 band)" },
    { name: "Hindi", level: "Professional fluent" },
    { name: "Spanish", level: "Elementary" },
    { name: "Portuguese", level: "Elementary" }
  ],

  leadership: [
    {
      title: "Georgia Rotary Student Program Scholar",
      organization: "GRSP 2024-2025",
      description: "Cultural ambassador representing Nepal among 39 students from 22 countries, developing leadership and cross-cultural communication skills"
    },
    {
      title: "Active Member",
      organization: "Rotaract Club of Patan Heritage",
      description: "Participating in community service projects, fundraising events, and cultural preservation initiatives in Lalitpur"
    },
    {
      title: "Former Member",
      organization: "Leo Club of Kathmandu Manasalu",
      description: "Engaged in social work and leadership development activities for community betterment"
    }
  ],

  certifications: [
    {
      id: 1,
      title: "React Native Development",
      issuer: "Meta (Facebook)",
      date: "2024",
      type: "programming",
      description: "Comprehensive course covering React Native fundamentals, navigation, state management, and deployment.",
      credentialId: "RN-2024-001",
      verificationUrl: "https://example.com",
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      type: "cloud",
      description: "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      credentialId: "AWS-CLF-2024-002"
    },
    {
      id: 3,
      title: "MongoDB Developer",
      issuer: "MongoDB University",
      date: "2023",
      type: "database",
      description: "Database design, querying, indexing, and performance optimization using MongoDB.",
      credentialId: "MDB-DEV-2023-003"
    }
  ]
};

export default profileData;
