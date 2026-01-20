import { Github, Linkedin, Mail, MapPin, GraduationCap, ArrowUp } from 'lucide-react';
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
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FD</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Frontend Developer</h3>
                <p className="text-sm text-gray-400">Portfolio</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Siswa SMK Telkom Malang jurusan RPL yang berfokus pada pengembangan frontend modern.
            </p>
            
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Malang, Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Pendidikan</h4>
            <div className="flex items-start space-x-3">
              <GraduationCap className="w-5 h-5 text-blue-400 mt-1" />
              <div>
                <p className="font-medium text-white">SMK Telkom Malang</p>
                <p className="text-sm text-gray-400">Rekayasa Perangkat Lunak</p>
                <p className="text-sm text-gray-400">Kelas 11</p>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm text-blue-300">Available for Internship</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>nabilrisky390@gmail.com</span>
              </a>
              
              <div className="flex space-x-4 pt-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.email}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Portfolio. Dibuat dengan Next.js & Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Siswa SMK Telkom Malang - Jurusan RPL
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;