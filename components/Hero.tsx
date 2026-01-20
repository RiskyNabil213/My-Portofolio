export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Build Portofolio And <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Experience Web</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Frontend developer passionate about creating beautiful and performant web applications with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              View My Work
            </button>
            <a href="#contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content - Interactive Code Preview */}
<div className="relative">
  <div className="relative w-full max-w-lg mx-auto">
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
    <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 group">
      {/* Browser Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-gray-700/50 rounded-lg px-3 py-1.5 text-center">
            <span className="text-gray-300 text-sm font-mono">portfolio.tsx</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center">
            <span className="text-gray-400 text-xs">▶</span>
          </div>
        </div>
      </div>
      
      {/* Code Editor */}
      <div className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 font-mono">
        {/* Line Numbers */}
        <div className="flex">
          {/* Line Numbers Column */}
          <div className="text-gray-500 text-sm pr-4 select-none text-right space-y-4">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="pr-2">{i + 1}</div>
            ))}
          </div>
          
          {/* Code Content */}
          <div className="flex-1 space-y-4">
            {/* Import Statements */}
            <div className="flex items-center">
              <span className="text-purple-400">import</span>
              <span className="text-blue-300 ml-2">React</span>
              <span className="text-gray-400 ml-2">from</span>
              <span className="text-yellow-300 ml-2">'react'</span>
              <span className="text-gray-400">;</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-purple-400">import</span>
              <span className="text-blue-300 ml-2">{'{ NextJS, TypeScript, Tailwind }'}</span>
              <span className="text-gray-400">;</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-purple-400">import</span>
              <span className="text-blue-300 ml-2">SMKTelkomMalang</span>
              <span className="text-gray-400 ml-2">from</span>
              <span className="text-yellow-300 ml-2">'education'</span>
              <span className="text-gray-400">;</span>
            </div>
            
            <div className="h-4"></div> {/* Spacer */}
            
            {/* Function Component */}
            <div className="flex items-center">
              <span className="text-purple-400">export default</span>
              <span className="text-gray-400 ml-2">function</span>
              <span className="text-green-400 ml-2">Portfolio</span>
              <span className="text-gray-300">()</span>
              <span className="text-gray-400">{' {'}</span>
            </div>
            
            <div className="ml-8">
              <div className="flex items-center">
                <span className="text-gray-400">return</span>
                <span className="text-gray-300">(</span>
              </div>
              
              <div className="ml-8">
                {/* JSX Structure */}
                <div className="flex items-center">
                  <span className="text-gray-400">&lt;</span>
                  <span className="text-pink-400">div</span>
                  <span className="text-blue-300 ml-2">className</span>
                  <span className="text-gray-300">=</span>
                  <span className="text-yellow-300">"portfolio-container"</span>
                  <span className="text-gray-400">&gt;</span>
                </div>
                
                <div className="ml-8 space-y-4">
                  {/* Hero Section */}
                  <div className="flex items-center">
                    <span className="text-gray-400">&lt;</span>
                    <span className="text-pink-400">Hero</span>
                    <span className="text-blue-300 ml-2">title</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-yellow-300">"Frontend Developer"</span>
                    <span className="text-gray-400">/&gt;</span>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="flex items-center">
                    <span className="text-gray-400">&lt;</span>
                    <span className="text-pink-400">Skills</span>
                    <span className="text-blue-300 ml-2">stack</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-yellow-300">{'{NextJS, TypeScript}'}</span>
                    <span className="text-gray-400">/&gt;</span>
                  </div>
                  
                  {/* Projects Section */}
                  <div className="flex items-center">
                    <span className="text-gray-400">&lt;</span>
                    <span className="text-pink-400">Projects</span>
                    <span className="text-blue-300 ml-2">count</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-yellow-300">5</span>
                    <span className="text-gray-400">/&gt;</span>
                  </div>
                  
                  {/* Education Badge */}
                  <div className="flex items-center">
                    <span className="text-gray-400">&lt;</span>
                    {/* <span className="text-pink-400">EducationBadge</span> */}
                    <span className="text-blue-300 ml-2">school</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-yellow-300">"SMK Telkom"</span>
                    <span className="text-blue-300 ml-2">major</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-yellow-300">"RPL"</span>
                    <span className="text-gray-400">/&gt;</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <span className="text-gray-400">&lt;/</span>
                  <span className="text-pink-400">div</span>
                  <span className="text-gray-400">&gt;</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-300">)</span>
                <span className="text-gray-400">;</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-gray-400">{'}'}</span>
            </div>
            
            {/* Cursor Blink Effect */}
            <div className="flex items-center">
              <span className="w-2 h-5 bg-blue-400 animate-pulse ml-1"></span>
              <span className="text-gray-500 ml-2 text-sm">// Ready for production 🚀</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Terminal Footer */}
      <div className="bg-gray-800 border-t border-gray-700 px-4 py-3">
        <div className="flex items-center text-sm">
          <span className="text-green-400 mr-2">➜</span>
          <span className="text-gray-300 mr-2">portfolio</span>
          <span className="text-gray-500">git:(</span>
          <span className="text-purple-400">main</span>
          <span className="text-gray-500">)</span>
          <span className="text-gray-300 ml-2">npm run build</span>
        </div>
        <div className="mt-2 text-sm text-green-400">
          ✓ Build successful: 100% optimized for production
        </div>
      </div>
    </div>
    
    {/* Floating Elements dengan Animasi */}
    <div className="absolute -bottom-6 -left-10 w-24 h-24 bg-linear-to-br from-blue-500 to-cyan-400 rounded-2xl rotate-15 shadow-xl animate-float">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg">React</span>
      </div>
    </div>
    
    <div className="absolute -top-6 -right-6 w-20 h-20 bg-linear-to-br from-purple-500 to-pink-400 rounded-2xl -rotate-12 shadow-xl animate-float" style={{animationDelay: '2s'}}>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm">Next.js</span>
      </div>
    </div>
    
    {/* Tech Badges */}
    <div className="absolute -bottom-4 right-8 flex space-x-2">
      <div className="px-3 py-1 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
        <span className="text-blue-300 text-sm font-medium">TypeScript</span>
      </div>
      <div className="px-3 py-1 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full">
        <span className="text-purple-300 text-sm font-medium">Tailwind</span>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}