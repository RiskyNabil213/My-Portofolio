'use client';

import { projects } from '@/lib/constants';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => activeFilter === 'featured' ? p.featured : !p.featured);

  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proyek <span className="text-gradient">Portofolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Koleksi proyek yang menunjukkan kemampuan saya dalam pengembangan frontend modern
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'featured', 'other'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter === 'all' ? 'Semua' : filter === 'featured' ? 'Featured' : 'Lainnya'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover-lift"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                {project.image ? (
                  // Jika ada gambar, tampilkan gambar
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  // Fallback: jika tidak ada gambar, tampilkan placeholder
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-5xl">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-bold rounded-full z-10">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                    {project.technologies[0]}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-medium">
              Ingin melihat lebih banyak? Kunjungi GitHub saya
            </span>
            <a
              href="https://github.com/RiskyNabil213"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-1 bg-gray-800 text-white rounded-full hover:bg-black transition-colors duration-300 flex items-center"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;