import { Award, GraduationCap, Users, Target, Sparkles, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { 
      icon: <GraduationCap className="w-7 h-7" />, 
      value: 'Class 11', 
      label: 'SMK Telkom Malang',
      description: 'Jurusan RPL'
    },
    { 
      icon: <Target className="w-7 h-7" />, 
      value: '2+ Years', 
      label: 'Coding Experience',
      description: 'Full-Stack Focus'
    },
    { 
      icon: <Award className="w-7 h-7" />, 
      value: '2+', 
      label: 'Projects Completed',
      description: 'Web & Mobile Apps'
    },
    { 
      icon: <Users className="w-7 h-7" />, 
      value: '1+', 
      label: 'Happy Clients',
      description: 'Client Satisfaction'
    },
  ];

  const frontendStrengths = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Clean Code Architecture",
      description: "Menulis kode yang terstruktur, scalable, dan mudah dipelihara"
    },
    {
      icon: <Palette className="w-5 h-5" />,
      title: "UI/UX Implementation",
      description: "Mengubah desain menjadi pengalaman digital yang intuitif"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance Optimization",
      description: "Mengutamakan kecepatan dan responsivitas aplikasi"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">About Me</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Mengenal Lebih Dekat <span className="text-gradient">Profil Saya</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seorang siswa <span className="font-semibold text-blue-600">SMK Telkom Malang</span> dengan passion mendalam dalam pengembangan 
            web modern. Fokus pada frontend development dengan pendekatan kreatif dan teknis.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Content - Education & Philosophy */}
          <div className="space-y-12">
            {/* Education Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Latar Belakang Pendidikan</h3>
                  <p className="text-gray-600">Formal education & technical training</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-blue-500"></div>
                  <h4 className="font-bold text-gray-900 text-lg">SMK Telkom Malang</h4>
                  <p className="text-blue-600 font-medium">Rekayasa Perangkat Lunak • Kelas 11</p>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    Fokus pada pengembangan software, pemrograman web modern, dan praktikum intensif.
                    Aktif dalam proyek kolaborasi dan kompetisi coding.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">HTML/CSS</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full font-medium">JavaScript</span>
                  <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full font-medium">React.js</span>
                  <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full font-medium">UI/UX</span>
                </div>
              </div>
            </div>

            {/* Philosophy Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Filosofi Pembelajaran</h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Learning by Building",
                    description: "Percaya bahwa pengalaman terbaik didapat dari membangun solusi nyata",
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    title: "Clean Code Matters",
                    description: "Menulis kode yang readable, maintainable, dan scalable untuk jangka panjang",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    title: "User Experience First",
                    description: "Mengutamakan pengalaman pengguna yang intuitif dan menyenangkan",
                    color: "from-purple-500 to-pink-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Frontend Passion */}
          <div className="space-y-12">
            {/* Frontend Passion Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Passion dalam <span className="text-gradient">Frontend Development</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tertarik dengan frontend karena memberikan ruang untuk menggabungkan 
                  <span className="font-semibold text-blue-600"> kreativitas visual</span> dengan 
                  <span className="font-semibold text-purple-600"> logika pemrograman</span>. 
                  Membangun antarmuka yang tidak hanya berfungsi optimal tetapi juga 
                  memberikan pengalaman pengguna yang memorable.
                </p>
              </div>

              {/* Strengths Grid */}
              <div className="space-y-6">
                <h4 className="font-bold text-gray-800 text-lg">Area Keahlian</h4>
                <div className="grid gap-4">
                  {frontendStrengths.map((strength, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-transparent hover:from-blue-50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center group-hover:border-blue-300 transition-colors">
                        <div className="text-blue-600">
                          {strength.icon}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">{strength.title}</h5>
                        <p className="text-gray-600 text-sm mt-1">{strength.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="font-bold text-gray-900 text-lg mb-4">Sedang Fokus Belajar</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React.js", level: "Advanced" },
                  { name: "Next.js", level: "Intermediate" },
                  { name: "TypeScript", level: "Learning" },
                  { name: "Tailwind CSS", level: "Advanced" },
                  { name: "Framer Motion", level: "Learning" }
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="px-4 py-2 bg-white rounded-full border border-gray-200 hover:border-blue-300 transition-colors"
                  >
                    <span className="font-medium text-gray-800">{tech.name}</span>
                    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                      tech.level === 'Advanced' ? 'bg-green-100 text-green-700' :
                      tech.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Enhanced */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Progress & <span className="text-gradient">Pencapaian</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perjalanan pengembangan skill dan kontribusi dalam dunia programming
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {stat.value}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900">Learning Progress 2024</h4>
              <span className="text-sm font-medium text-blue-600">78% Complete</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                style={{ width: '78%' }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>HTML/CSS Mastery</span>
              <span>React Ecosystem</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;