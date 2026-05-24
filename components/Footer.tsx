import { Github, Linkedin, Mail, MapPin, GraduationCap } from 'lucide-react';
import { socialLinks } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm md:text-base">FD</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">Frontend Developer</h3>
                <p className="text-xs md:text-sm text-gray-400">Portfolio</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Siswa SMK Telkom Malang jurusan RPL yang berfokus pada pengembangan frontend modern.
            </p>
            
            <div className="flex items-center space-x-2 text-xs md:text-sm">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-400 flex-shrink-0" />
              <span>Malang, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-4">Navigasi</h4>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-4">Pendidikan</h4>
            <div className="flex items-start space-x-2 md:space-x-3">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-white text-sm md:text-base">SMK Telkom Malang</p>
                <p className="text-xs md:text-sm text-gray-400">Rekayasa Perangkat Lunak</p>
                <p className="text-xs md:text-sm text-gray-400">Kelas 11</p>
              </div>
            </div>
            
            <div className="mt-3 md:mt-4">
              <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full mr-1.5 md:mr-2"></div>
                <span className="text-xs md:text-sm text-blue-300">Available for Internship</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-4">Kontak</h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:nabilrisky390@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <span className="text-xs md:text-sm break-words group-hover:text-white transition-colors">
                  nabilrisky390@gmail.com
                </span>
              </a>
              
              <div className="flex space-x-2 md:space-x-3 pt-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 md:p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href={socialLinks.email}
                  className="p-1.5 md:p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 md:my-8 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="order-2 md:order-1 mt-4 md:mt-0">
            <p className="text-gray-400 text-xs md:text-sm">
              &copy; {currentYear} Portfolio. Dibuat dengan Next.js & Tailwind CSS.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Siswa SMK Telkom Malang - Jurusan RPL
            </p>
          </div>
          
          {/* Back to top button for mobile */}
          <div className="order-1 md:order-2">
            <a
              href="#home"
              className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200 mb-4 md:mb-0"
              aria-label="Kembali ke atas"
            >
              <svg 
                className="w-4 h-4 md:w-5 md:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;