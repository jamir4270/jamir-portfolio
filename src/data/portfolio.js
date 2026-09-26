export const profile = {
  name: 'Jamir Oasis M. Andrade',
  location: 'Ormoc City, Leyte, Philippines',
  roles: 'Full-Stack Developer / Technical Lead / Mentor',
  email: 'jamirandrade4270@gmail.com',
  cvUrl: '/Andrade_Resume.pdf',
  badge: 'DOST Scholar · Since 2023',
  photo: '/images/profile.jpg',
}

export const aboutLong = [
  [
    ['I am a Computer Science student at Visayas State University and a proud ', ''],
    ['DOST Undergraduate Scholar', 'b'],
    ['. My work centers on a simple idea: ', ''],
    ['build systems that create lasting impact, and build teams that can sustain them.', 'i'],
  ],
  [
    ['As a full-stack developer and technical lead, I build web and mobile applications across election platforms, POS and inventory systems, campus tools, and mobile utilities. My recent professional experience includes backend development with ASP.NET Core MVC and technical leadership in the Alliance Summer Bridge Training Program — covering CI pipelines, QA testing, and enterprise SDLC practices.', ''],
  ],
  [
    ['Beyond shipping, I lead as President of the Computer Science Students’ Society, mentor juniors in programming fundamentals, and use AI-assisted workflows to deliver faster without cutting quality.', ''],
  ],
]

export const navItems = [
  ['About', '#about'],
  ['Stack', '#stack'],
  ['Work', '#projects'],
  ['Education', '#education'],
  ['Experience', '#experience'],
  ['Thesis', '#thesis'],
  ['Leadership', '#leadership'],
  ['Contact', '#contact'],
]

export const projects = [
  {
    title: 'Oreo Finance', year: '2026',
    description: 'Built as a personal full-stack project — multi-currency accounts with auto cross-currency transfers, rollover budgets per category, realtime sync across devices, installable PWA, and an analytics dashboard.',
    role: 'FULL-STACK DEV',
    stack: 'NEXT.JS + SUPABASE',
    image: '/images/projects/oreo.png',
    githubUrl: 'https://github.com/jamir4270/oreo-finance',
    demoUrl: 'https://oreo-finance.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    title: 'Project Minerva', year: '2026',
    description: 'Technical lead and backend developer for Alliance Summer Bridge — led team workflow and built the borrowing/fines engine, role-based access, audit trail, PDF reports, and Mailtrap SMTP notifications with EF Core and SQL Server.',
    role: 'TECHNICAL LEAD & BACKEND DEV',
    stack: 'ASP.NET CORE MVC + SQL SERVER',
    image: '/images/projects/minerva.jpg',
    githubUrl: 'https://github.com/Sharp-Mindz/asi-basecode/tree/release/PM.1.1.4',
    demoUrl: null,
    demoLabel: 'Live Demo',
  },
  {
    title: 'USSC Connect', year: '2026',
    description: 'QA contributor on the student portal for USSC Connect — multi-tenant organization management for VSU student orgs (USSC-focused iteration toward fast, transparent campus services); continued as Backend Developer & QA on Veris, its successor system now in active development.',
    role: 'QA',
    stack: 'NEXT.JS + FIREBASE + VERCEL',
    image: '/images/projects/ussc-connect.png',
    githubUrl: null,
    demoUrl: 'https://coral-ussc-bay.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    title: 'Student Organization Election System', year: '2026',
    description: 'Secure and transparent student election platform, led end-to-end.',
    role: 'TECHNICAL LEAD & DEV',
    stack: 'NEXT.JS + SUPABASE',
    image: '/images/projects/election-system.png',
    githubUrl: 'https://github.com/Shinkrbs/agora',
    demoUrl: 'https://www.soes-election.online/landing',
    demoLabel: 'Live Demo',
  },
  {
    title: 'AUJ Store Management System', year: '2025',
    description: 'POS and inventory tracking web application for daily store operations.',
    role: 'LEAD DEV',
    stack: 'REACT + MYSQL',
    image: '/images/projects/auj-store.png',
    githubUrl: 'https://github.com/jamir4270/auj-store',
    demoUrl: 'https://auj-store.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    title: 'VSU Nursing Conduct System', year: '2025',
    description: 'Campus behavior tracking with secure dashboards for students, faculty, and administrators.',
    role: 'FULL-STACK DEV',
    stack: 'NEXT.JS + SUPABASE',
    image: '/images/projects/nursing-conduct.png',
    githubUrl: 'https://github.com/CSci-153-Web-Systems-and-Technologies/batch-2025-vsu-ncs-web',
    demoUrl: 'https://vsu-ncs-real.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    title: 'Hippocrates’ Tool', year: '2025',
    description: 'Interactive academic symptom-checking web app for respiratory concerns. Educational use only.',
    role: 'FRONTEND DEV',
    stack: 'REACT + TAILWIND',
    image: '/images/projects/hippocrates-tool.png',
    githubUrl: 'https://github.com/jamir4270/hippocrates-tool-2',
    demoUrl: 'https://hippocratestool.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    title: 'RoboArm Controller', year: '2025',
    description: 'Mobile app for real-time wireless control of a 4-axis robotic arm. 120+ downloads on Uptodown.',
    role: 'MOBILE DEV',
    stack: 'FLUTTER',
    image: '/images/projects/roboarm.webp',
    githubUrl: 'https://github.com/jamir4270/roboarm_controller_app',
    demoUrl: 'https://roboarm-controller.en.uptodown.com/android',
    demoLabel: 'Uptodown',
  },
  {
    title: 'GWACalc', year: '2025',
    description: 'Offline-first mobile app for calculating and storing General Weighted Average.',
    role: 'MOBILE DEV',
    stack: 'FLUTTER',
    image: '/images/projects/gwacalc.jpg',
    githubUrl: 'https://github.com/jamir4270/grade_calculator_app',
    demoUrl: 'https://drive.google.com/drive/u/1/folders/1NX3kSLhHYm9qzO72HOpNAWMdi6gm6j_l',
    demoLabel: 'APK',
  },
]

export const skills = {
  Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Flutter'],
  'Backend & Cloud': ['Supabase', 'Firebase', 'Express', 'MySQL', 'MS SQL Server', 'ASP.NET Core MVC', 'Git'],
  Languages: ['C/C++', 'C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'SQL', 'R'],
}

export const education = {
  school: 'Visayas State University',
  degree: 'BS in Computer Science',
  period: '2023 — Present',
  location: 'Baybay City, Leyte',
  headline: 'DOST Scholar',
  subline: 'Undergraduate Scholar since 2023 · Class of 2027',
  highlights: ['DOST Undergraduate Scholar', 'College Honors 2023–2024', 'CS Students’ Society President'],
}

export const experience = [
  {
    role: 'Backend Developer & QA',
    org: 'Veris — Active',
    year: '2026–Present',
  },
  {
    role: 'Technical Lead · Backend Developer Intern',
    org: 'Alliance Software Inc. — Summer Bridge',
    year: '2026',
  },
  {
    role: 'President',
    org: 'Computer Science Students’ Society, VSU',
    year: '2025–Present',
  },
  {
    role: 'Committee on Education Head',
    org: 'CS3, VSU',
    year: '2025',
  },
  {
    role: 'CS3 Mentor',
    org: 'Dept. of Computer Science and Technology, VSU',
    year: '2024–Present',
  },
  {
    role: 'Hello World!',
    org: 'Wrote my first line of code',
    year: '2023',
  },
]

export const thesis = {
  title: 'Mobile-Based Copra Visual Quality Classifier Using Hybrid Computer Vision and Rule-Based Framework',
  description:
    'On-device visual quality grading for copra (dried coconut kernel) combining a lightweight image classifier with an interpretable rule-based layer for buying-station workflows. Designed for offline use in low-connectivity field settings.',
  status: 'In Progress',
}

export const leadership = [
  {
    role: 'Computer Science Students’ Society President', org: 'Computer Science Students’ Society (CS3)', year: '2025–Present',
    points: ['Departmental events', 'Delegation', 'Student officer leadership', 'Mentorship initiatives'],
  },
  {
    role: 'Committee on Education Head', org: 'Computer Science Students’ Society (CS3)', year: '2025',
    points: ['Academic study groups', 'Tutoring support', 'Student/faculty liaison work'],
  },
  {
    role: 'CS3 Mentor', org: 'Department of Computer Science and Technology, VSU', year: '2024–Present',
    points: ['Object-Oriented Programming', 'Fundamentals of Programming', 'One-on-one tutoring', 'Hands-on coding sessions'],
  },
]

export const recommendations = [
  {
    quote:
      'Jamir is a great and dedicated student. He was one of the first people I had the opportunity to mentor in our dorm, and he was always one of the quickest to answer my questions and complete the tasks I provided. Jamir also participates in competitive programming and hackathons. One thing that separates Jamir from his batchmates is his ability to communicate well; the way he articulates his ideas is truly commendable and amazing. Every time we engage in discourse, he can easily match my ability to speak and think, and that is something I highly commend about him. Furthermore, he is the President of our organization in the department, and I have been amazed by his management skills as he was able to successfully lead projects and programs. Jamir is undoubtedly one of the best in his batch. He has an innovative mindset and is highly eloquent. I am proud of what he has become and confident that he will be a great professional in the future',
    name: 'John Rhuel Laurente',
    title: 'Java Cloud Engineer at Rocket Partners',
    initials: 'JRL',
    image: '/images/gallery/mentor.png',
    linkedin: 'https://www.linkedin.com/in/jrlaurente/',
  },
]

export const certifications = [
  { title: 'Introduction to Data Science', org: 'CISCO Networking Academy', href: 'https://www.credly.com/badges/7b05682c-0d96-4ea5-bc12-d4d6272f45e7' },
  { title: 'Data Literacy', org: 'DataCamp', href: 'https://www.datacamp.com/skill-verification/DL0038401423097' },
]

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jamir4270/' },
  { label: 'GitHub', href: 'https://github.com/jamir4270' },
  { label: 'Email', href: 'mailto:jamirandrade4270@gmail.com' },
]

export const achievements = [
  { title: 'Champion — CS Week Hackathon', year: '2025' },
  { title: 'Champion — CS Week Quiz Bee', year: '2025' },
  { title: 'Finalist — ByteForward Hackathon Visayas Leg', year: '2025' },
  { title: 'Top 5 — DICT StartUp Challenge Region VIII', year: '2025' },
  { title: 'Top 10 of 200 teams — TrendAI UCTF', year: '2025' },
  { title: 'College Honors — VSU Honors Convocation', year: '2023–2024' },
  { title: 'DOST Undergraduate Scholarship Passer', year: '2023' },
]

export const gallery = [
  { title: 'Alliance Summer Bridge', hint: 'Internship — Tech Lead & Backend', image: '/images/gallery/alliance.jpg' },
  { title: 'ByteForward Visayas Leg', hint: 'Finalist — Converge SME', image: '/images/gallery/converge-sme.jpg' },
  { title: 'DICT Startup Challenge VIII', hint: 'Top 5 — Region VIII', image: '/images/gallery/dictx.jpg' },
  { title: 'TrendAI UCTF', hint: 'Top 10 of 200 teams', image: '/images/gallery/trendUCTF.jpg' },
  { title: 'Veris Team', hint: 'Backend Developer & QA — Active', image: '/images/gallery/veris.jpg' },
]
