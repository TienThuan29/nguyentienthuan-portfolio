/** Prefix for raw `/public` paths (next/image and plain <a> don't add basePath themselves). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const portfolioLinks = {
  email: "mailto:nguyentienthuan9595@gmail.com",
  cv: `${basePath}/Nguyen_Tien_Thuan_CV.pdf`,
  github: "https://github.com/tienthuan29",
  linkedin: "https://www.linkedin.com/in/tien-thuan-nguyen-23112b3b7",
  facebook: "https://www.facebook.com/nguyen.tienthuan.35/",
  palmPrintRepository: "https://github.com/VKev/Palm-Print-Identification-System",
  diffusionIadRepository: "https://github.com/TienThuan29/Diffusion-IAD",
} as const;

export const pageAnchors = {
  top: "#top",
  about: "#about",
  experience: "#experience",
  certifications: "#certifications",
  research: "#research",
  education: "#education",
  contact: "#contact",
} as const;

export const profile = {
  name: "Nguyễn Tiến Thuận",
  role: "AI Engineer & Presales",
  currentOrg: "SoftwareOne Vietnam",
  headline: "AI Engineer & Presales building agents, AI platforms, and the full-stack products around them.",
  /** About § 01: a self-introduction, deliberately free of achievements (those live in Experience/Research/hero). */
  about: [
    "Based in Ho Chi Minh City, I'm Thuận, an AI engineer working in AI presales at SoftwareOne Vietnam, where my job sits between what AI can actually do and what a business actually needs.",
    "I like to work in small, honest steps: build a quick prototype, put it in front of real users, and let what we learn shape the next version. I'd rather explain a system in plain words than hide it behind jargon.",
    "What keeps me going is watching an idea turn into something people use every day, and helping teams feel confident enough to adopt it themselves.",
  ],
  location: "Ho Chi Minh City, Vietnam",
  email: "nguyentienthuan9595@gmail.com",
  github: portfolioLinks.github,
  linkedin: portfolioLinks.linkedin,
  facebook: portfolioLinks.facebook,
};

export const navItems = [
  { label: "About", href: pageAnchors.about },
  { label: "Experience", href: pageAnchors.experience },
  { label: "Certifications", href: pageAnchors.certifications },
  { label: "Research", href: pageAnchors.research },
  { label: "Education", href: pageAnchors.education },
  { label: "Contact", href: pageAnchors.contact },
];

export const heroFacts = [
  { label: "Currently", value: "Presales AI, SoftwareOne Vietnam" },
  { label: "Previously", value: "Tech Lead, FPTU Laboratories" },
  { label: "Research", value: "Computer vision | 2 international papers" },
  { label: "Certified", value: "3× Microsoft | Azure AI & Agentic AI" },
];

export const heroMetrics = [
  { value: "02", label: "International papers", detail: "SSPS 2025 | ICAISE 2026" },
  { value: "03", label: "Microsoft certifications", detail: "Including one Expert level" },
];

export const skills = [
  { title: "AI", items: ["LLM", "Agentic AI", "Computer Vision", "Traditional AI", "PyTorch"] },
  { title: "Languages", items: ["Python", "TypeScript", "Java", "C#", "C/C++", "HTML", "CSS"] },
  {
    title: "Frameworks & tools",
    items: ["Next.js", "React", "Spring Framework", "ASP.NET", "Microsoft Agent Framework", "Docker", "Git/GitHub"],
  },
  { title: "Data & cloud", items: ["Azure", "PostgreSQL", "MySQL", "SQL Server"] },
  {
    title: "Communication",
    items: ["Client demos", "Workshops & training", "Lab instruction", "Mentoring"],
  },
];

export const experience = [
  {
    role: "Presales & Engineer AI",
    org: "SoftwareOne Vietnam",
    period: "May 2026 — Present",
    current: true,
    summary: "Enterprise AI solutions: internal AI platforms, AI agents, and the demos that sell them.",
    details: [
      "Prepare proofs of concept and demos, and present technical solutions to clients in clear, non-technical language.",
      "Run training sessions and workshops to help colleagues and clients get started with new AI technologies.",
    ],
    projects: [
      {
        name: "SoftwareOneHub",
        description: "Internal operations platform with integrated AI capabilities.",
        details: [
          "Develop and extend platform features that support internal business activities.",
          "Organize platform modules into business-aligned groups and redesign the home navigation.",
          "Integrate webinar and marketing workflows into the event module.",
          "Integrate AI-generated marketing content from the AI platform through API contracts.",
          "Integrate digital contract signing into the pricing workflow.",
        ],
      },
      {
        name: "AI Central Platform",
        description: "AI platform that helps organizations adopt AI solutions.",
        details: [
          "Build AI-powered platform features with Azure AI Foundry.",
          "Contribute to the design of platform capabilities.",
          "Build a standard AI workflow playbook for business analysis teams on the platform.",
          "Build AI agents, integrated into SoftwareOneHub, for contract review, document generation, and marketing content (images, videos, and social posts).",
        ],
      },
    ],
    skills: ["Python", "LLM", "Agentic AI", "Azure", "Azure AI Foundry", "Microsoft Agent Framework", "Full-stack"],
  },
  {
    role: "Tech Lead & Fullstack Developer",
    org: "FPTU Laboratories",
    period: "Jan 2026 — Apr 2026",
    current: false,
    summary:
      "Web portal for FPT University laboratories, streamlining how faculty and students manage research projects, publications, and recruitment.",
    details: [
      "Led development of the portal with Next.js, MySQL, and Docker.",
      "Analyzed requirements and planned the development roadmap, breaking the project into clear tasks and milestones.",
      "Designed the relational database in MySQL and containerized the infrastructure with Docker.",
      "Built features end to end, from backend logic to user interfaces.",
      "Managed the project end to end, tracking progress and delivering on schedule.",
      "Coordinated the team to align goals, assign tasks, and resolve blockers.",
    ],
    skills: ["Next.js", "MySQL", "Docker", "Team lead"],
  },
  {
    role: "Teaching Assistant",
    org: "FPT University",
    period: "Jan 2025 — Apr 2026",
    current: false,
    summary:
      "Courses: Introduction to Programming (Python, C/C++), Data Structures & Algorithms, OOP with Java, Introduction to Computer Science.",
    details: [
      "Led lab sessions, walking students through exercises and re-explaining key concepts in simpler terms.",
      "Gave one-on-one support in Q&A hours, helping students who had fallen behind rebuild their foundations.",
      "Graded assignments and tests with specific, constructive feedback.",
      "Designed practice exercises, examples, and materials to make abstract topics easier to understand.",
    ],
    skills: ["Python", "C/C++", "Java", "DSA"],
  },
  {
    role: "Salesforce Developer Intern",
    org: "FPT Software",
    period: "Jan 2025 — Apr 2025",
    current: false,
    summary: "Enterprise Salesforce training and requirements work in a B2B project environment.",
    details: [
      "Joined the requirements phase of a B2B Salesforce project.",
      "Completed a Salesforce development training program, from platform fundamentals to advanced topics.",
      "Built and customized user interfaces with Lightning Web Components (LWC).",
      "Implemented backend business logic and database queries with Apex and SOQL.",
    ],
    skills: ["Salesforce", "Lightning Web Components", "Apex", "SOQL"],
  },
];

export const researchPapers = [
  {
    title:
      "Enhancing an Efficient Contactless Palm Print Recognition System Tailored for University Environment",
    authors: ["Huynh Vuong Khang", "Nguyen Tien Thuan", "Huynh Cong Viet Ngu"],
    venue: "7th International Symposium on Signal Processing Systems (SSPS 2025)",
    status: "Published | Springer Nature",
    year: "2025",
    accepted: "24 Jan 2025",
    contributions: [
      "Palm print recognition for student identity verification, access control, and preventing unauthorized entry.",
      "Developed and trained the core recognition model on real-world data.",
      "Built the software that integrates the model into university identity verification.",
    ],
    tags: ["PyTorch", "Spring Framework", "Next.js"],
    href: portfolioLinks.palmPrintRepository,
  },
  {
    title: "Feature-Level Diffusion Convolutional Networks for Image Anomaly Detection",
    authors: ["Nguyen Tien Thuan", "Huynh Cong Viet Ngu"],
    venue: "International Conference on AI in Systems Engineering (ICAISE 2026)",
    status: "Accepted | 24 Mar 2026",
    year: "2026",
    contributions: [
      "Researched feature-level diffusion modeling for industrial anomaly detection.",
      "Implemented the PyTorch proof of concept and experiments.",
    ],
    tags: ["PyTorch", "Diffusion", "Anomaly Detection"],
    href: portfolioLinks.diffusionIadRepository,
  },
];

/** Author name as it appears in `researchPapers[].authors`, highlighted in citations. */
export const selfAuthorName = "Nguyen Tien Thuan";

export const education = [
  {
    school: "FPT University",
    degree: "Bachelor of Information Technology",
    period: "Sep 2022 — Apr 2026",
    details: ["GPA: 3.4/4.0"],
  },
];

type Certificate = {
  code: string;
  title: string;
  level: "Expert" | "Associate";
  /** PDF + WebP preview live in public/certs/<code>.{pdf,webp}. */
  pdf: string;
  image: string;
  /** Microsoft Learn share link (learn.microsoft.com/api/credentials/share/...). Shown as "Verify" when set. */
  verifyUrl?: string;
};

const cert = (code: string, title: string, level: Certificate["level"], verifyUrl?: string): Certificate => ({
  code,
  title,
  level,
  pdf: `${basePath}/certs/${code}.pdf`,
  image: `${basePath}/certs/${code}.webp`,
  verifyUrl,
});

const learnShare = (id: string) =>
  `https://learn.microsoft.com/api/credentials/share/en-us/ThuanNguyen-7261/${id}?sharingId=4D0AF739B22D1F74`;

export const certificates: Certificate[] = [
  cert("AB-100", "Agentic AI Business Solutions Architect", "Expert", learnShare("C3843927B7A83B06")),
  cert("AI-103", "Azure AI Apps and Agents Developer", "Associate", learnShare("89F4AC24124DF03D")),
  cert("AI-200", "Azure AI Cloud Developer", "Associate", learnShare("B227569F6AF96D52")),
];

export const awards = [
  {
    title: "Golden Toad Award",
    period: "April 2024",
    detail: "Most outstanding student of the semester (semester GPA 3.9/4.0), FPT University HCMC.",
  },
  {
    title: "University Scholarship",
    period: "September 2022",
    detail: "FPT University entrance scholarship covering four years of undergraduate study.",
  },
];
