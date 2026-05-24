'use client';

import { useState } from 'react';
import { 
  Code, 
  Palette, 
  Wrench, 
  ExternalLink, 
  TrendingUp,
  Zap,
  Cpu,
  Layout,
  GitBranch,
  Terminal,
  Smartphone,
  Server,
  Database
} from 'lucide-react';
import Image from 'next/image';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'tools' | 'learning'>('frontend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { 
      id: 'frontend' as const, 
      label: 'Frontend Development', 
      icon: <Layout className="w-5 h-5" />,
      description: 'Teknologi untuk membangun UI/UX modern'
    },
    { 
      id: 'tools' as const, 
      label: 'Development Tools', 
      icon: <Terminal className="w-5 h-5" />,
      description: 'Alat-alat produktivitas developer'
    },
    { 
      id: 'learning' as const, 
      label: 'Sedang Dipelajari', 
      icon: <TrendingUp className="w-5 h-5" />,
      description: 'Teknologi yang sedang saya dalami'
    },
  ];

  const skillsData = {
    frontend: [
      { 
        name: 'React', 
        level: 90,
        description: 'Library JavaScript untuk membangun UI',
        experience: '1 tahun pengalaman',
        projects: '4+ proyek',
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-10">
              <Image
                src="/images/react.webp"
                alt="React"
                width={36}
                height={36}
                className="object-contain"
                onError={(e) => {
                  // Fallback jika gambar tidak ada
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '⚛️';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/react.svg',
        gradient: 'from-cyan-500 to-blue-600',
        color: '#61DAFB'
      },
      { 
        name: 'Next.js', 
        level: 85,
        description: 'React framework untuk produksi',
        experience: 'Framework utama',
        projects: '4+ proyek',
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br  rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-10">
              <Image
                src="/images/next.png"
                alt="Next.js"
                width={48}
                height={48}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl font-bold text-gray-900';
                    fallback.textContent = '▲';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/nextjs.svg',
        gradient: 'from-gray-900 to-black',
        color: '#000000'
      },
      { 
        name: 'TypeScript', 
        level: 80,
        description: 'JavaScript dengan sintaks tipe',
        experience: 'Type safety expert',
        projects: '3 proyek',
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br  rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-10">
              <Image
                src="/images/ts.jpg"
                alt="TypeScript"
                width={48}
                height={48}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-lg font-bold text-blue-700';
                    fallback.textContent = 'TS';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/images/ts.jpg',
        gradient: 'from-blue-600 to-indigo-700',
        color: '#3178C6'
      },
      { 
        name: 'Tailwind CSS', 
        level: 92,
        description: 'Framework CSS utility-first',
        experience: 'Styling utama',
        projects: '5+ proyek',
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br  rounded-xl flex items-center justify-center">
            <div className="relative w-12 h-12">
              <Image
                src="/images/tail.png"
                alt="Tailwind CSS"
                width={58}
                height={58}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/tailwind.svg',
        gradient: 'from-teal-500 to-cyan-600',
        color: '#06B6D4'
      },
      { 
        name: 'JavaScript', 
        level: 88,
        description: 'Bahasa pemrograman web',
        experience: 'Fundamental kuat',
        projects: '5+ proyek',
        icon: (
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-10">
              <Image
                src="/images/js.png"
                alt="JavaScript"
                width={48}
                height={48}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-lg font-bold text-yellow-700';
                    fallback.textContent = 'JS';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/javascript.svg',
        gradient: 'from-yellow-500 to-orange-600',
        color: '#F7DF1E'
      },
      { 
        name: 'HTML5 & CSS3', 
        level: 95,
        description: 'Dasar pengembangan web',
        experience: 'Expert level',
        projects: 'Semua proyek',
        icon: (
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/html.png"
                  alt="HTML5"
                  width={48}
                  height={48}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-lg font-bold text-orange-700';
                      fallback.textContent = 'H5';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div className="relative w-10 h-11">
                <Image
                  src="/images/css.png"
                  alt="CSS3"
                  width={31}
                  height={31}
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-lg font-bold text-blue-700';
                      fallback.textContent = 'C3';
                      parent.appendChild(fallback);
                    }
                  }
                  
                }
                />
              </div>
            </div>
          </div>
        ),
        htmlLogo: '/logos/html5.svg',
        cssLogo: '/logos/css3.svg',
        gradient: 'from-orange-500 to-red-600',
        color: '#E34F26'
      },
    ],
    tools: [
      { 
        name: 'Git & GitHub', 
        level: 85,
        description: 'Version control & collaboration',
        experience: 'Workflow professional',
        projects: 'Kolaborasi tim',
        icon: (
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-10">
              <Image
                src="/images/gitHub.png"
                alt="GitHub"
                width={48}
                height={48}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '🐙';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/github.svg',
        gradient: 'from-gray-800 to-purple-900',
        color: '#181717'
      },
      { 
        name: 'VS Code', 
        level: 90,
        description: 'Code editor utama',
        experience: 'Custom workflow',
        projects: 'Development sehari-hari',
        icon: (
          <div className="w-10 h-10  rounded-xl flex items-center justify-center">
            <div className="relative w-12 h-9">
              <Image
                src="/images/vs.jpg"
                alt="VS Code"
                width={84}
                height={84}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '💻';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/vscode.svg',
        gradient: 'from-blue-600 to-cyan-700',
        color: '#007ACC'
      },
      { 
        name: 'Figma', 
        level: 75,
        description: 'Design & prototyping',
        experience: 'UI/UX design basic',
        projects: 'Prototyping',
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-6">
              <Image
                src="/images/figma'.png"
                alt="Figma"
                width={88}
                height={88}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '🎨';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/images/figma.svg',
        gradient: 'from-orange-500 to-pink-600',
        color: '#F24E1E'
      },
      { 
        name: 'Vercel', 
        level: 80,
        description: 'Deployment platform',
        experience: 'CI/CD automatic',
        projects: 'Semua proyek Next.js',
        icon: (
          <div className="w-10 h-10  rounded-xl flex items-center justify-center">
            <div className="relative w-8 h-8">
              <Image
                src="/images/vercel.png"
                alt="Vercel"
                width={48}
                height={48}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl font-bold text-white';
                    fallback.textContent = '▲';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/vercel.svg',
        gradient: 'from-black to-gray-800',
        color: '#000000'
      },
      { 
        name: 'npm', 
        level: 85,
        description: 'Package management',
        experience: 'Dependency management',
        projects: 'Semua proyek',
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
            <div className="relative w-8 h-2">
              <Image
                src="/images/npm.png"
                alt="npm"
                width={148}
                height={148}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-lg font-bold text-red-700';
                    fallback.textContent = 'npm';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/npm.svg',
        gradient: 'from-red-500 to-pink-600',
        color: '#CB3837'
      },
    ],
    learning: [
      { 
        name: 'React Native', 
        level: 65,
        description: 'Mobile app development',
        experience: 'Dalam pembelajaran',
        projects: 'Proyek eksperimen',
        icon: (
          <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-8">
              <Image
                src="/images/native.png"
                alt="React Native"
                width={69}
                height={69}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '📱';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/react.svg',
        gradient: 'from-blue-400 to-cyan-500',
        color: '#61DAFB'
      },
      { 
        name: 'Node.js', 
        level: 70,
        description: 'JavaScript runtime',
        experience: 'Backend dasar',
        projects: 'API development',
        icon: (
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-9">
              <Image
                src="/images/node.png"
                alt="Node.js"
                width={69}
                height={69}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-lg font-bold text-green-700';
                    fallback.textContent = 'NJS';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/nodejs.svg',
        gradient: 'from-green-500 to-emerald-600',
        color: '#339933'
      },
      { 
        name: 'MongoDB', 
        level: 60,
        description: 'NoSQL database',
        experience: 'Database operations',
        projects: 'Fullstack apps',
        icon: (
          <div className="w-10 h-10  rounded-xl flex items-center justify-center">
            <div className="relative w-14 h-8">
              <Image
                src="/images/mango.png"
                alt="MongoDB"
                width={74}
                height={74}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '🍃';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/mongodb.svg',
        gradient: 'from-green-400 to-teal-500',
        color: '#47A248'
      },
      { 
        name: 'GraphQL', 
        level: 60,
        description: 'Query language for APIs',
        experience: 'Dalam pembelajaran',
        projects: 'API modern',
        icon: (
          <div className="w-10 h-10 rounded-xl flex items-center justify-center">
            <div className="relative w-10 h-8">
              <Image
                src="/images/graph.png"
                alt="GraphQL"
                width={69}
                height={69}
                className="object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-2xl';
                    fallback.textContent = '🔷';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
        ),
        logo: '/logos/graphql.svg',
        gradient: 'from-pink-500 to-purple-600',
        color: '#E10098'
      },
    ],
  };

  const currentSkills = skillsData[activeCategory];

  // Fungsi untuk mengecek apakah file ada
  const checkFileExists = async (url: string) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  };

  return (
    <section id="skills" className="section-spacing bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6">
            <Cpu className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tech Stack & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Keahlian</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kumpulan teknologi modern yang saya kuasai untuk membangun aplikasi web yang scalable dan performant
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex flex-col items-center px-8 py-6 rounded-2xl border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-blue-500 bg-white shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              <div className={`mb-4 p-3 rounded-xl ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50'
              }`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{category.label}</h3>
              <p className="text-sm text-gray-500 text-center max-w-xs">{category.description}</p>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSkills.map((skill, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-500 ${
                hoveredSkill === skill.name 
                  ? 'border-blue-400 shadow-2xl transform -translate-y-2' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  {skill.icon}
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">{skill.name}</h3>
                    <p className="text-sm text-gray-500">{skill.description}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{skill.level}%</div>
                  <div className="text-sm text-gray-500">Proficiency</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Pengalaman</span>
                  <span className="font-medium text-gray-900">{skill.experience}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-600">Proyek Terimplementasi</span>
                  <span className="font-medium text-blue-700">{skill.projects}</span>
                </div>
              </div>

              {/* Official Documentation Link */}
              <a
                href={skill.name === 'HTML5 & CSS3' ? 'https://developer.mozilla.org/en-US/docs/Web' : 
                      skill.name === 'Tailwind CSS' ? 'https://tailwindcss.com/docs' :
                      skill.name === 'React' ? 'https://react.dev' :
                      skill.name === 'Next.js' ? 'https://nextjs.org/docs' :
                      skill.name === 'TypeScript' ? 'https://www.typescriptlang.org/docs' :
                      skill.name === 'JavaScript' ? 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' :
                      skill.name === 'Git & GitHub' ? 'https://docs.github.com' :
                      skill.name === 'VS Code' ? 'https://code.visualstudio.com/docs' :
                      skill.name === 'Figma' ? 'https://help.figma.com' :
                      skill.name === 'Vercel' ? 'https://vercel.com/docs' :
                      skill.name === 'npm' ? 'https://docs.npmjs.com' :
                      skill.name === 'React Native' ? 'https://reactnative.dev/docs' :
                      skill.name === 'Node.js' ? 'https://nodejs.org/docs' :
                      skill.name === 'MongoDB' ? 'https://docs.mongodb.com' :
                      'https://graphql.org/learn/'}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 group"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">Official Documentation</span>
              </a>

              {/* Hover Effect Indicator */}
              <div className={`mt-4 h-1 w-full rounded-full bg-gradient-to-r ${skill.gradient} transition-opacity duration-300 ${
                hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Tech Logo Showcase */}
        <div className="mt-20 bg-white rounded-3xl p-12 border border-gray-200 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Official Tech <span className="text-blue-600">Logos</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Logo resmi teknologi yang saya gunakan dalam pengembangan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'HTML ', logo: '/images/html.png', color: '#E34F26' },
              { name: 'CSS ', logo: '/images/css.png', color: '#1572B6' },
              { name: 'Tailwind', logo: '/images/tail.png', color: '#06B6D4' },
              { name: 'React', logo: '/images/react.webp', color: '#61DAFB' },
              { name: 'Next.js', logo: '/images/next.png', color: '#000000' },
              { name: 'TypeScript', logo: '/images/ts.jpg', color: '#3178C6' },
            ].map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <div className="relative w-12 h-12">
                    <Image
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-12 h-12 flex items-center justify-center text-2xl font-bold';
                          fallback.style.color = tech.color;
                          fallback.textContent = tech.name.charAt(0);
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  </div>
                </div>
                <span 
                  className="font-bold text-gray-900 text-lg"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </span>
                <div 
                  className="mt-4 h-1 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: tech.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Journey sebagai <span className="text-blue-400">Siswa RPL</span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Sebagai siswa SMK Telkom Malang jurusan Rekayasa Perangkat Lunak, 
                saya terus mengembangkan keahlian melalui proyek nyata dan pembelajaran mandiri.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-gray-200">Kurikulum berbasis industri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-gray-200">Project-based learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-gray-200">Teknologi terbaru</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-6 text-center">Development Focus 2026</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Performance', value: '95%', color: 'from-cyan-500 to-blue-500' },
                  { label: 'Code Quality', value: '90%', color: 'from-green-500 to-emerald-500' },
                  { label: 'UI/UX', value: '85%', color: 'from-purple-500 to-pink-500' },
                  { label: 'Best Practices', value: '88%', color: 'from-orange-500 to-red-500' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl bg-white/5">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;