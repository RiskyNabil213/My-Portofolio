export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Tentang', href: '#about' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Proyek', href: '#projects' },
  { name: 'Pengalaman', href: '#experience' },
  { name: 'Kontak', href: '#contact' },
];

export const skills = {
  frontend: [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'Next.js', level: 85, icon: '▲' },
    { name: 'TypeScript', level: 80, icon: '📘' },
    { name: 'JavaScript', level: 88, icon: '📜' },
    { name: 'Tailwind CSS', level: 92, icon: '🎨' },
    { name: 'HTML5', level: 95, icon: '📄' },
    { name: 'CSS3', level: 90, icon: '🎨' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85, icon: '🐙' },
    { name: 'VS Code', level: 90, icon: '💻' },
    { name: 'Figma', level: 75, icon: '🎨' },
    { name: 'Vercel', level: 80, icon: '▲' },
    { name: 'npm/yarn', level: 85, icon: '📦' },
  ],
  learning: [
    { name: 'React Native', level: 65, icon: '📱' },
    { name: 'Node.js', level: 70, icon: '⚙️' },
    { name: 'GraphQL', level: 60, icon: '🔷' },
    { name: 'Testing', level: 70, icon: '🧪' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'Web Development Competition',
    description: 'Sebuah kompetisi pengembangan web yang menantang peserta untuk membuat aplikasi web interaktif menggunakan teknologi terbaru dengan subtema melestarikan budaya.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'React Query'],
    image: '/images/projects/web-competition.jpg',
    screenshots: [
      '/images/projects/iitc-1.jpg',
      '/images/projects/iitc-2.jpg',
      '/images/projects/iitc-3.jpg'
    ],
    github: 'https://github.com/RiskyNabil213/Website-IITC',
    live: 'https://website-iitc.vercel.app/',
    featured: true,
    role: 'Frontend Developer & Team Lead',
    duration: '2 Bulan',
    teamSize: '5 Orang',
    highlights: [
      'Juara 3 Web Development Competition',
      'Implementasi teknologi modern',
      'Design system yang konsisten'
    ],
    category: 'Competition'
  },
  {
    id: 2,
    title: 'Last Project Frontend Development',
    description: 'Sebuah proyek terakhir yang menunjukkan kemampuan saya dalam pengembangan frontend modern dipadukan dengan mata pelajaran kewirausahaan.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'React Query'],
    image: '/images/projects/bromo-project.jpg',
    screenshots: [
      '/images/projects/bromo-1.jpg',
      '/images/projects/bromo-2.jpg',
      '/images/projects/bromo-3.jpg'
    ],
    github: 'https://github.com/RiskyNabil213/WebBromo',
    live: 'https://web-bromo.vercel.app',
    featured: false,
    role: 'Fullstack Developer',
    duration: '1 Bulan',
    teamSize: 'Individu',
    highlights: [
      'Integrasi dengan API',
      'Responsive design',
      'Performance optimization'
    ],
    category: 'Academic'
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description: 'Website portofolio personal yang dibangun dengan teknologi modern untuk showcase skill dan proyek.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/images/projects/portfolio.jpg',
    screenshots: [
      '/images/projects/portfolio-1.jpg',
      '/images/projects/portfolio-2.jpg',
      '/images/projects/portfolio-3.jpg'
    ],
    github: 'https://github.com/RiskyNabil213',
    live: 'https://yourportfolio.vercel.app',
    featured: true,
    role: 'Solo Developer',
    duration: '2 Minggu',
    teamSize: 'Individu',
    highlights: [
      '100% Lighthouse Score',
      'SEO Optimized',
      'Mobile First Design'
    ],
    category: 'Personal'
  }
];

export const experiences = [
  {
    id: 1,
    title: 'Siswa SMK Telkom Malang',
    company: 'Jurusan Rekayasa Perangkat Lunak',
    period: '2023 - Sekarang',
    description: 'Fokus pada pengembangan web modern, algoritma, dan struktur data. Aktif dalam kegiatan ekstrakurikuler pengembangan software.',
    achievements: [
      'Mempelajari dasar-dasar pemrograman web',
      'Mengembangkan proyek-proyek fullstack',
      'Berpartisipasi dalam kompetisi coding',
    ],
    image: '/images/experiences/smk-telkom.jpg',
    logo: '/images/experiences/smk-telkom-logo.png',
    location: 'Malang, Jawa Timur',
    skillsLearned: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    type: 'Education'
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2023 - Sekarang',
    description: 'Membangun website dan aplikasi web untuk klien lokal dengan teknologi modern.',
    achievements: [
      'Mengembangkan 5+ website untuk UMKM',
      'Meningkatkan performa website hingga 40%',
      'Implementasi responsive design',
    ],
    image: '/images/experiences/freelance.jpg',
    logo: '/images/experiences/freelance-logo.png',
    location: 'Remote',
    skillsLearned: ['Client Communication', 'Project Management', 'UI/UX Design'],
    type: 'Work'
  },
  {
    id: 3,
    title: 'Web Development Competition Participant',
    company: 'IITC Competition',
    period: '2024',
    description: 'Berpartisipasi dalam kompetisi pengembangan web tingkat nasional dengan tema pelestarian budaya.',
    achievements: [
      'Juara 3 Web Development Competition',
      'Mengembangkan website dengan teknologi modern',
      'Bekerja dalam tim 5 orang',
    ],
    image: '/images/experiences/competition.jpg',
    logo: '/images/experiences/competition-logo.png',
    location: 'Online Competition',
    skillsLearned: ['Team Collaboration', 'Time Management', 'Technical Presentation'],
    type: 'Achievement'
  }
];

export const socialLinks = {
  github: 'https://github.com/RiskyNabil213',
  linkedin: 'https://linkedin.com/in/nabil-risky',
  instagram: 'https://instagram.com/nabilrisky_',
  email: 'mailto:nabilrisky390@gmail.com',
  whatsapp: 'https://wa.me/6281234567890'
};

export const personalInfo = {
  name: 'Nabil Risky',
  title: 'Frontend Developer',
  location: 'Malang, Indonesia',
  education: 'SMK Telkom Malang - RPL',
  profileImage: '/images/profile/profile.jpg',
  coverImage: '/images/profile/cover.jpg',
  resume: '/documents/resume.pdf',
  aboutImages: [
    '/images/about/about-1.jpg',
    '/images/about/about-2.jpg',
    '/images/about/about-3.jpg',
  ],
  quotes: [
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
  ]
};