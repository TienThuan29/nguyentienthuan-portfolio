export const portfolioLinks = {
  email: "mailto:nguyentienthuan9595@gmail.com",
  cv: "/api/cv",
  github: "https://github.com/tienthuan29",
  linkedin: "https://www.linkedin.com/in/tien-thuan-nguyen-23112b3b7",
  facebook: "https://www.facebook.com/nguyen.tienthuan.35/",
  palmPrintRepository: "https://github.com/VKev/Palm-Print-Identification-System",
  diffusionIadRepository: "https://github.com/TienThuan29/Diffusion-IAD",
  eduAcasRepository: "https://github.com/TienThuan29/Capstone-Sp26-EduACAS",
  freelanceItRepository: "https://github.com/TienThuan29/FreelanceIT-App",
  ticketResellFrontend: "https://github.com/Arexmarx/ResellTicket_PlatformUi",
  ticketResellBackend: "https://github.com/TienThuan29/ticket-resell-platform-backend-v2",
  jungleRunGame: "https://github.com/TienThuan29/JungleRunGame",
} as const;

export const linkLabels = {
  github: "github.com/tienthuan29",
  facebook: "facebook.com/nguyen.tienthuan.35",
} as const;

export const pageAnchors = {
  top: "#top",
  about: "#about",
  work: "#work",
  experience: "#experience",
  papers: "#accepted-papers",
  credentials: "#credentials",
} as const;

export const profile = {
  name: "Nguyễn Tiến Thuận",
  initials: "NT",
  role: "Junior AI Engineer",
  headline: "I build full-stack products around practical AI research.",
  summary:
    "Graduating Software Engineering student at FPT University with strengths in web development, computer vision research, and turning models into usable software.",
  location: "Vietnam",
  email: "nguyentienthuan9595@gmail.com",
  phone: "0365-5656-92",
  github: portfolioLinks.github,
  linkedin: portfolioLinks.linkedin,
  facebook: portfolioLinks.facebook,
};

export const navItems = [
  { label: "About", href: pageAnchors.about },
  { label: "Work", href: pageAnchors.work },
  { label: "Experience", href: pageAnchors.experience },
  { label: "Papers", href: pageAnchors.papers },
  { label: "Credentials", href: pageAnchors.credentials },
];

export const heroMetrics = [
  {
    value: "2",
    label: "accepted AI papers",
    detail: "SSPS 2025 and ICAISE 2026",
  },
  {
    value: "3.55",
    label: "GPA / 4.0",
    detail: "Software Engineering at FPTU",
  },
  {
    value: "2026",
    label: "Azure AI training",
    detail: "AI-102 and AB-900 courses",
  },
];

export const focusCards = [
  {
    title: "Computer vision research",
    description:
      "Palm print recognition and image anomaly detection with PyTorch-driven experimentation.",
  },
  {
    title: "Full-stack delivery",
    description:
      "From relational database design to production-facing interfaces with Next.js, React, Spring, and MySQL.",
  },
  {
    title: "AI product integration",
    description:
      "Connecting research models, backend services, and user workflows into complete applications.",
  },
];

export const skills = [
  {
    title: "Programming",
    items: ["Java", "C#", "TypeScript", "Python", "HTML", "CSS", "GitHub"],
  },
  {
    title: "Frameworks",
    items: [
      "Spring Framework",
      "ASP.NET",
      ".NET 9",
      "Node.js/Express",
      "Next.js",
      "React",
      "NestJS",
      "Flutter",
      "PyTorch",
    ],
  },
  {
    title: "Database & cloud",
    items: [
      "MySQL",
      "SQL Server",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
      "RabbitMQ",
      "AWS S3",
      "Pinecone",
      "AWS",
      "Docker",
    ],
  },
  {
    title: "AI & research",
    items: [
      "Computer Vision",
      "Diffusion Models",
      "Image Anomaly Detection",
      "AI-assisted grading",
      "Semantic matching",
    ],
  },
];

export const featuredWork = [
  {
    title: "EduACAS - Educational Automated Computerized Assessment System",
    kicker: "Capstone platform",
    period: "Spring 2026",
    description:
      "A full-stack programming education platform for automated code assessment, exam and classroom management, analytics, real-time notifications, and mobile access.",
    impact: [
      "Built web and mobile learning surfaces for administrators, lecturers, and students.",
      "Integrated programming problem banks, code editor workflows, submissions, quizzes, exams, regrading, and academic analytics.",
      "Worked across a distributed architecture with Ocelot API Gateway, .NET 9 services, NestJS code runner, DynamoDB, Redis, RabbitMQ, SignalR, Firebase, Docker, and AWS.",
    ],
    tags: [
      "Next.js",
      ".NET 9",
      "NestJS",
      "Flutter",
      "DynamoDB",
      "Docker",
      "SignalR",
    ],
    links: [
      {
        label: "Repository",
        href: portfolioLinks.eduAcasRepository,
      },
    ],
  },
  {
    title: "Laboratories Website of FPTU",
    kicker: "Current product build",
    period: "January 2026 - Present",
    image: "/images/feature-work/feature-img-1.png",
    description:
      "A web portal for managing research projects, academic publications, and student recruitment for FPT University's laboratories.",
    impact: [
      "Analyzed requirements and planned the platform.",
      "Architected a MySQL relational database and Docker-based infrastructure.",
      "Engineered end-to-end features from backend logic to user interfaces.",
    ],
    tags: ["Next.js", "MySQL", "Docker", "Full-stack"],
    links: [],
  },
  {
    title: "FreelanceIT",
    kicker: "AI freelance marketplace",
    period: "November 2025",
    description:
      "A full-stack freelancing platform that connects customers and developers through project posting, AI-assisted matching, real-time collaboration, subscriptions, and payments.",
    impact: [
      "Built role-based customer, developer, and admin workflows for profiles, project posts, applications, ratings, products, and platform statistics.",
      "Implemented project rooms with Socket.IO chat, team management, file sharing, timeline tracking, NDA flows, and transaction history.",
      "Integrated Gemini embeddings, Pinecone vector search, DynamoDB, S3, Redis, Google OAuth, PayOS, Casso, Swagger, Docker Compose, and Nginx deployment.",
    ],
    tags: [
      "Next.js",
      "Express",
      "TypeScript",
      "DynamoDB",
      "Socket.IO",
      "Pinecone",
      "PayOS",
    ],
    links: [
      {
        label: "Repository",
        href: portfolioLinks.freelanceItRepository,
      },
    ],
  },
  {
    title: "Palm Print Identification System",
    kicker: "Accepted AI research",
    period: "Accepted January 2025",
    image: "/images/feature-work/feature-img-2.png",
    description:
      "A contactless palm print recognition system tailored for university identity verification and access control.",
    impact: [
      "Developed and trained the core model with real-world data.",
      "Built software for model integration in a university environment.",
      "Paper accepted at SSPS 2025.",
    ],
    tags: ["PyTorch", "Spring Framework", "Next.js", "Computer Vision"],
    links: [
      {
        label: "Repository",
        href: portfolioLinks.palmPrintRepository,
      },
    ],
  },
  {
    title: "Diffusion-IAD",
    kicker: "Industrial AI experiment",
    period: "Accepted March 2026",
    description:
      "Proof-of-concept AI solution for industrial image anomaly detection using feature-level diffusion modeling.",
    impact: [
      "Researched feature-level diffusion for anomaly detection.",
      "Built a PyTorch proof of concept for industrial imagery.",
      "Paper accepted at ICAISE 2026.",
    ],
    tags: ["PyTorch", "Diffusion", "Anomaly Detection"],
    links: [
      {
        label: "Repository",
        href: portfolioLinks.diffusionIadRepository,
      },
    ],
  },
  {
    title: "Ticket Resell Platform",
    kicker: "Full-stack project",
    period: "August 2024 - December 2024",
    description:
      "Third-party marketplace connecting ticket buyers and sellers with safer, more transparent transactions.",
    impact: [
      "Analyzed context and requirements.",
      "Designed database and platform architecture.",
      "Developed frontend and backend features.",
    ],
    tags: ["Spring Framework", "React", "SQL Server"],
    links: [
      {
        label: "Frontend",
        href: portfolioLinks.ticketResellFrontend,
      },
      {
        label: "Backend",
        href: portfolioLinks.ticketResellBackend,
      },
    ],
  },
];

export const experience = [
  {
    role: "Student Researcher",
    org: "University Laboratory",
    period: "April 2024 - Present",
    location: "FPT University",
    summary:
      "Researching practical computer vision systems and translating accepted paper work into software prototypes.",
    details: [
      "Accepted AI research papers in palm print recognition and image anomaly detection.",
      "Developed models, software integrations, and proof-of-concept AI workflows.",
    ],
    skills: ["PyTorch", "Computer Vision", "Next.js", "Spring Framework"],
  },
  {
    role: "Full-stack Developer",
    org: "Laboratories Website of FPTU Project",
    period: "January 2026 - Present",
    location: "Vietnam",
    summary:
      "Building an academic laboratory portal for project management, publication tracking, and student recruitment.",
    details: [
      "Built a research management portal for projects, publications, and recruitment.",
      "Designed MySQL database architecture and containerized infrastructure with Docker.",
    ],
    skills: ["Next.js", "MySQL", "Docker", "Full-stack Architecture"],
  },
  {
    role: "Salesforce Developer Intern",
    org: "FPT Software Company",
    period: "January 2025 - April 2025",
    location: "Vietnam",
    summary:
      "Joined enterprise Salesforce training and requirements work for a B2B project environment.",
    details: [
      "Joined the requirements phase of a B2B Salesforce project.",
      "Completed Salesforce development training covering LWC, Apex, and SOQL.",
    ],
    skills: ["Salesforce", "Lightning Web Components", "Apex", "SOQL"],
  },
];

export const researchPapers = [
  {
    title:
      "Enhance an Efficient Contactless Palm Print Recognition System Tailored for University Environment",
    conference:
      "2025 7th International Symposium on Signal Processing Systems (SSPS 2025)",
    accepted: "24 January 2025",
    authors:
      "Huynh Vuong Khang, Nguyen Tien Thuan, Dr. Huynh Cong Viet Ngu",
    description:
      "Palm print recognition for student identity verification, access control, and prevention of unauthorized entry.",
    contributions: [
      "Developed and trained the core recognition model with real-world data.",
      "Built software integration around the model for university identity verification workflows.",
      "Worked with authors on system design, evaluation, and paper preparation.",
    ],
    role: "Author and model/application developer",
    tags: ["PyTorch", "Spring Framework", "Next.js"],
    href: portfolioLinks.palmPrintRepository,
  },
  {
    title:
      "Feature-Level Diffusion Convolutional Networks for Image Anomaly Detection",
    conference: "International Conference on AI in Systems Engineering (ICAISE'2026)",
    accepted: "24 March 2026",
    authors: "Nguyen Tien Thuan, Dr. Huynh Cong Viet Ngu",
    description:
      "Feature-level diffusion model research for industrial image anomaly detection.",
    contributions: [
      "Researched feature-level diffusion modeling for industrial anomaly detection.",
      "Implemented a PyTorch proof of concept for visual anomaly detection experiments.",
      "Prepared research material with the corresponding author for ICAISE 2026.",
    ],
    role: "Author and AI research developer",
    tags: ["PyTorch", "Computer Vision", "Diffusion"],
    href: portfolioLinks.diffusionIadRepository,
  },
];

export const education = [
  {
    school: "FPT University (FPTU)",
    degree: "Bachelor of Software Engineering",
    period: "September 2022 - Present",
    details: [
      "GPA: 3.55/4.0",
      "Relevant coursework: C Programming, OOP with Java, Database Management, Algorithms and Data Structures, Software Requirements, Software Architecture.",
    ],
  },
];

export const certificates = [
  {
    title: "Develop AI solutions in Azure",
    period: "April 2026 - May 2026",
    details: [
      "Completed Course AI-102T00-A.",
      "Covered generative AI apps, AI agents, natural language, computer vision, and information extraction on Azure.",
    ],
  },
  {
    title: "Introduction to Microsoft 365 and AI administration",
    period: "April 2026 - May 2026",
    details: [
      "Completed Course AB-900T00-A.",
      "Covered Microsoft 365 administration, Copilot, and agent administration.",
    ],
  },
];

export const awards = [
  {
    title: "Golden Toad Award",
    period: "April 2024",
    details: [
      "Recognized as the most outstanding student of the semester.",
      "Semester GPA: 3.9/4 at FPT University, Ho Chi Minh City.",
    ],
  },
  {
    title: "University Scholarship",
    period: "September 2022",
    details: [
      "Received FPT University entrance scholarship for four years of undergraduate study.",
    ],
  },
];

export const sideProjects = [
  {
    title: "Jungle Run Game",
    period: "March 2023 - April 2023",
    description:
      "2D obstacle course game built with C and SDL, including collision detection, game states, and input handling.",
    tags: ["C", "SDL"],
    href: portfolioLinks.jungleRunGame,
  },
];
