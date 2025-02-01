import React from 'react';
import { Heart, Star, Music, Camera, Coffee, Book, Github, Linkedin, Mail, Cloud, Palette, Sparkles, PencilLine as Dancing, Dumbbell, Brackets as Tennis, Wand2, Send, Rocket, Laptop, MessageCircle, Cake, Cat, Dog, PawPrint as Paw, Plane } from 'lucide-react';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-sky-50 to-purple-50">

      {/* Hero Section */}
      <header className="pt-20 pb-12 text-center relative">
        <div className="absolute top-10 left-10 text-pink-300 animate-bounce">
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-10 text-sky-300 animate-bounce delay-100">
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute bottom-0 left-10 text-pink-400 animate-bounce delay-200">
          <Cat className="w-10 h-10" />
        </div>
        <div className="absolute bottom-0 right-10 text-sky-400 animate-bounce delay-300">
          <Dog className="w-10 h-10" />
        </div>
        <div className="absolute top-1/3 left-1/4 text-pink-200 animate-pulse">
          <Paw className="w-6 h-6" />
        </div>
        <div className="absolute top-1/4 right-1/4 text-sky-200 animate-pulse delay-150">
          <Paw className="w-6 h-6" />
        </div>
        <div className="container mx-auto px-4">
          <div className="relative inline-block">
            <img 
              src="/1.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-lg ring-4 ring-pink-100"
            />
            <Sparkles className="absolute -right-4 -top-4 w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-pink-600 mb-3">Mia Yu</h1>
          <p className="text-lg text-sky-600 mb-6">Full stack Developer & Software Engineer</p>
          <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/iamycm" 
            className="text-pink-500 hover:text-pink-700 transition-transform hover:scale-110"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/chuanmiaoyu" 
            className="text-sky-500 hover:text-sky-700 transition-transform hover:scale-110"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:chuanmiaoy@gmail.com" 
            className="text-purple-500 hover:text-purple-700 transition-transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
          </div>
        </div>
      </header>


      {/* About Section */}
      <section className="py-12 bg-white/30 relative">
        <Cloud className="absolute left-10 top-10 text-sky-100 w-16 h-16" />
        <Cloud className="absolute right-10 bottom-10 text-sky-100 w-16 h-16" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-8 flex items-center justify-center gap-2">
            About Me <Heart className="inline-block w-6 h-6 text-pink-400 animate-pulse" />
          </h2>
          <p className="text-sky-700 text-center max-w-2xl mx-auto leading-relaxed">
          Hi there👋<br />
          I'm a final-year computer science student who loves building cool stuff with code💻
          <br />
          Currently leveling up to a perfect programmer🚀
          <br />
          When I'm not coding, you'll find me dancing to my favorite tunes🎶
          <br />
          or working on my biceps at the gym—this year's goal is to make them pop💪
          <br />
          Let's create something amazing together✨
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-12 flex items-center justify-center gap-2">
            My Projects <Wand2 className="inline-block w-6 h-6 text-purple-400" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a 
           
              href="https://github.com/iamycm/taxiGame.git" 

              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white/70 p-6 rounded-2xl shadow-md transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg relative">
                <div className="absolute -top-3 -right-3 bg-pink-400 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Github className="w-5 h-5" />
                </div>
                <div className="relative mb-4">
                  <img 
                    src="/2.webp"
                    alt="Project 1"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Rocket className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 transform group-hover:translate-y-1 transition-transform">
                    <Cat className="w-8 h-8 text-pink-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-pink-600 mb-2">Taxi Game</h3>
                <p className="text-sky-600 mb-4">A driving game where you pick up passengers, dodge attacks and obstacles, and race toward ultimate victory!</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">Java</span>
                </div>
              </div>
            </a>
            <a 
              href="https://github.com/iamycm/recommendationSystem.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-white/70 p-6 rounded-2xl shadow-md transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg relative">
                <div className="absolute -top-3 -right-3 bg-sky-400 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <Github className="w-5 h-5" />
                </div>
                <div className="relative mb-4">
                  <img 
                    src="/3.png"
                    alt="Project 2"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Laptop className="w-6 h-6 text-sky-400" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 transform group-hover:translate-y-1 transition-transform">
                    <Dog className="w-8 h-8 text-sky-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-sky-600 mb-2">Book Recommendation System</h3>
                <p className="text-sky-600 mb-4">A smart bookstore assistant that helps both bookstores and readers discover their next favorite books!</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">python</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      
       {/* Interests & Hobbies */}
       <section className="py-12 bg-white/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-12 flex items-center justify-center gap-2">
            Things I Love <Sparkles className="inline-block w-6 h-6 text-yellow-400" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 p-6 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
              <Music className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Dance</h3>
              <p className="text-sky-600">I love Kpop, Hip-hop, and Jazz! By the way, my favorite one is ENHYPEN's "No Doubt"🫶🏻</p>
            </div>
            <div className="bg-white/70 p-6 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
              <Dumbbell className="w-12 h-12 text-sky-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-sky-600 mb-2">Fitness</h3>
              <p className="text-sky-600">Staying active and keeping that healthy vibe going💪🏼✨</p>
            </div>
            <div className="bg-white/70 p-6 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
              <Tennis className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Tennis</h3>
              <p className="text-sky-600">Loving the sunshine and every swing of the racket🌞🎾 </p>
            </div>
            <div className="bg-white/70 p-6 rounded-2xl shadow-md text-center transform transition-transform hover:scale-105">
              <Plane className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Travel</h3>
              <p className="text-sky-600">Enjoy exploring new places and embracing adventures🌍✨</p>
            </div>
          </div>
        </div>
      </section>





      {/* Work Experience */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-12 flex items-center justify-center gap-2">
            Work Experience <Cake className="inline-block w-6 h-6 text-pink-400" />
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">

            <div className="bg-white/70 p-6 rounded-2xl shadow-md transform transition-transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Coffee className="w-8 h-8 text-pink-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-pink-600">Australian Education Assessment Services Part-Time Tutor</h3>
                    <p className="text-sky-600">SEDI Education • Nov 2023 - Present • Melbourne, Australia </p>
                  </div>
                </div>
                <p className="text-sky-700">
                - Teached primary and high school Science and English.
                </p>
            </div>

            <div className="bg-white/70 p-6 rounded-2xl shadow-md transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Coffee className="w-8 h-8 text-pink-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-pink-600">Full Stack Developer Intern</h3>
                  <p className="text-sky-600">Discintion Coding • Jan 2025 - Mar 2025 • Sydney, Australia</p>
                </div>
              </div>
              <p className="text-sky-700">
              - Developed and deployed web applications, ensuring smooth front-end and back-end integration. 
              <br />
              - Built dynamic user interfaces using React and Next.js. 
              <br />
              - Created scalable back-end services with C# and .NET, integrating APIs for real-time data. 
              <br />
              - Managed databases and performed CRUD operations to ensure data integrity. 
              <br />
              - Worked with teams to optimize features based on client feedback. 
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-2xl shadow-md transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Coffee className="w-8 h-8 text-pink-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-pink-600">Project Intern</h3>
                  <p className="text-sky-600">Capgemini • Nov 2024 - Dec 2024 • Melbourne, Australia</p>
                </div>
              </div>
              <p className="text-sky-700">
              - Supported the integration and troubleshooting of Multi-Factor Authentication (MFA) systems for clients, ensuring secure and seamless access to project platforms.
              <br />
              - Assisted in configuring and maintaining IT systems, providing technical support to enhance client productivity.
              <br />
              - Collaborated with the technical team to document processes, create scripts, and streamline the deployment of IT solutions.
              </p>
            </div>

            <div className="bg-white/70 p-6 rounded-2xl shadow-md transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <Coffee className="w-8 h-8 text-pink-400 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-pink-600">Software Engineer Intern </h3>
                  <p className="text-sky-600">Mihoyo Co., LTD. • Aug 2023 - Nov 2023 • Shanghai, China </p>
                </div>
              </div>
              <p className="text-sky-700">
              - Supported the Genshin Impact Project, created and implemented unique Genshin Impact mods to deliver engaging and high-quality gaming experiences for end-users.
              <br />
              - Conducted market research and gathered data on user feedback, competitor performance, and trends using Python tools like BeautifulSoup and Pandas, assisting with database management in MySQL.
              <br />
              - Supported the data cleaning process to ensure data accuracy and relevance, using Pandas and NumPy for initial analysis.
              <br />
              - Analysed data inputs and market trend using Python and Excel via linear regression model and clustering.
              <br />
              - Identified and reported bugs in game features, and contributed to debugging efforts using Python (Pygame) and Java (LibGDX) alongside the development team.
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* Say Hello Section */}
            <section className="py-12 bg-white/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-pink-600 text-center mb-12 flex items-center justify-center gap-2">
            Say Hello! <MessageCircle className="inline-block w-6 h-6 text-sky-400" />
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="bg-white/70 p-8 rounded-2xl shadow-md relative">
              {/* Added cute cat peeking */}
              <div className="absolute -top-6 -right-6 transform rotate-12">
                <Cat className="w-12 h-12 text-pink-400" />
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sky-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="What should I call you?"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sky-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Where can I reach you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sky-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default App;