import { useState, useEffect } from 'react';
import { Linkedin, Mail, Moon, Sun, Github } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isWork = location.pathname === '/work';
  const isContact = location.pathname === '/contact';

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] dark:bg-[#111111] text-[#111111] dark:text-[#F9F9F9] font-sans selection:bg-orange-200 dark:selection:bg-orange-900 transition-colors duration-300">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/95 dark:bg-[#111111]/95 backdrop-blur-sm border-b border-[#E5E5E5] dark:border-[#333333] transition-colors duration-300">
        {/* Mobile Header - Stacked Layout */}
        <div className="sm:hidden max-w-[900px] mx-auto px-4 py-3 flex flex-col items-center gap-2">
          <Link to="/" onClick={scrollToTop} className={`text-[24px] font-black ${(!isAbout && !isWork && !isContact) ? 'text-[#FF6B00]' : 'text-[#111111] dark:text-white'} tracking-tighter leading-none`}>SB</Link>
          <nav className="flex gap-4 text-[14px] text-zinc-600 dark:text-zinc-400">
            <Link to="/about" onClick={scrollToTop} className={`${isAbout ? 'text-[#FF6B00]' : 'hover:text-zinc-900 dark:hover:text-white'} transition-colors`}>About</Link>
            <Link to="/work" onClick={scrollToTop} className={`${isWork ? 'text-[#FF6B00]' : 'hover:text-zinc-900 dark:hover:text-white'} transition-colors`}>Work</Link>
            <Link to="/contact" onClick={scrollToTop} className={`${isContact ? 'text-[#FF6B00]' : 'hover:text-zinc-900 dark:hover:text-white'} transition-colors`}>Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
              <a href="https://x.com/Sayandip05" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sayandipbar2005" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Linkedin size="16" strokeWidth={1.5} /></a>
              <a href="https://github.com/Sayandip05" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Github size="16" strokeWidth={1.5} /></a>
            </div>
            <div className="w-[1px] h-4 bg-zinc-300 dark:bg-zinc-700"></div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="w-7 h-7 rounded-full bg-[#EAEAEA] dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 hover:bg-[#DEDEDE] dark:hover:bg-zinc-700 transition-colors"
            >
              {isDark ? <Sun size="12" strokeWidth={2} fill="currentColor" /> : <Moon size="12" strokeWidth={2} fill="currentColor" />}
            </button>
          </div>
        </div>
        {/* Desktop Header - Single Row */}
        <div className="hidden sm:flex max-w-[900px] mx-auto px-6 md:px-12 lg:px-16 py-3 md:py-4 items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/" onClick={scrollToTop} className={`text-[22px] md:text-[28px] font-black ${(!isAbout && !isWork && !isContact) ? 'text-[#FF6B00]' : 'text-[#111111] dark:text-white'} tracking-tighter leading-none shrink-0`}>SB</Link>
            <div className="w-[1px] h-5 bg-zinc-300 dark:bg-zinc-700"></div>
            <nav className="flex gap-4 md:gap-6 text-[14px] md:text-[17px] text-zinc-600 dark:text-zinc-400">
              <Link to="/about" onClick={scrollToTop} className={`${isAbout ? 'text-[#FF6B00]' : 'hover:text-zinc-900 dark:hover:text-white'} transition-colors whitespace-nowrap`}>About</Link>
              <Link to="/work" onClick={scrollToTop} className={`${isWork ? 'text-[#FF6B00]' : 'hover:text-zinc-900 dark:hover:text-white'} transition-colors whitespace-nowrap`}>Work</Link>
              <Link to="/contact" onClick={scrollToTop} className={`${isContact ? 'text-[#FF6B00]' : 'hover:text-zinc-900 dark:hover:text-white'} transition-colors whitespace-nowrap`}>Contact</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            <div className="flex items-center gap-3 md:gap-4 text-zinc-600 dark:text-zinc-400">
              <a href="https://x.com/Sayandip05" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sayandipbar2005" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Linkedin size="18" strokeWidth={1.5} className="md:w-5 md:h-5" /></a>
              <a href="https://github.com/Sayandip05" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Github size="18" strokeWidth={1.5} className="md:w-5 md:h-5" /></a>
            </div>
            <div className="w-[1px] h-5 bg-zinc-300 dark:bg-zinc-700"></div>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#EAEAEA] dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 hover:bg-[#DEDEDE] dark:hover:bg-zinc-700 transition-colors"
            >
              {isDark ? <Sun size="14" strokeWidth={2} fill="currentColor" className="md:w-4 md:h-4" /> : <Moon size="14" strokeWidth={2} fill="currentColor" className="md:w-4 md:h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-32 sm:pt-20 md:pt-24 pb-8 md:pb-10">
        <main>
          <Outlet />
        </main>

        {/* Hiring CTA */}
        <section className="mb-16 md:mb-24 mt-20 md:mt-32">
          <div className="bg-[#F2F2F2] dark:bg-[#1A1A1A] border border-[#E5E5E5] dark:border-[#333333] rounded-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-center overflow-hidden transition-colors duration-300">
            <div className="w-full md:w-[280px] lg:w-[320px] aspect-[1.5/1] rounded-lg overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Corporate building" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 py-2 w-full">
              <h2 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold tracking-tight mb-4 md:mb-6 text-[#0A0A0A] dark:text-white">Looking to Hire?</h2>
              <form className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-5" onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:sayandipbar05@gmail.com"; }}>
                <input 
                  type="email" 
                  placeholder="recruiter@company.com" 
                  className="flex-1 min-w-0 bg-transparent border border-[#CCCCCC] dark:border-[#444444] rounded-md px-4 md:px-5 py-3 md:py-3.5 text-[16px] md:text-[19px] text-[#333] dark:text-[#EEEEEE] placeholder-[#888] dark:placeholder-[#666666] focus:outline-none focus:border-[#999] dark:focus:border-[#888888] transition-colors"
                />
                <button 
                  type="submit" 
                  className="bg-[#333333] dark:bg-white hover:bg-[#1A1A1A] dark:hover:bg-zinc-200 text-white dark:text-[#111111] px-6 md:px-8 py-3 md:py-3.5 rounded-md text-[16px] md:text-[19px] font-medium transition-colors shrink-0 whitespace-nowrap"
                >
                  Get in Touch
                </button>
              </form>
              <p className="text-[#555555] dark:text-[#A3A3A3] text-[15px] md:text-[17px] lg:text-[19px]">
                I'm currently open to new opportunities as a Software Developer. Drop your email or reach out directly to discuss how I can add value to your team.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#E5E5E5] dark:border-[#333333] flex flex-col md:flex-row items-center justify-between gap-4 text-[16px] md:text-[19px] transition-colors duration-300">
          <div className="text-[#4A4A4A] dark:text-[#A3A3A3]">
            © Sayandip Bar | 2026
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 font-medium">
            <Link to="/" onClick={scrollToTop} className={`${(!isAbout && !isWork && !isContact) ? 'text-[#FF6B00]' : 'text-[#4A4A4A] dark:text-[#A3A3A3] hover:text-zinc-900 dark:hover:text-white'} transition-colors`}>Home</Link>
            <Link to="/about" onClick={scrollToTop} className={`${isAbout ? 'text-[#FF6B00]' : 'text-[#4A4A4A] dark:text-[#A3A3A3] hover:text-zinc-900 dark:hover:text-white'} transition-colors`}>About</Link>
            <Link to="/work" onClick={scrollToTop} className={`${isWork ? 'text-[#FF6B00]' : 'text-[#4A4A4A] dark:text-[#A3A3A3] hover:text-zinc-900 dark:hover:text-white'} transition-colors`}>Work</Link>
            <Link to="/contact" onClick={scrollToTop} className={`${isContact ? 'text-[#FF6B00]' : 'text-[#4A4A4A] dark:text-[#A3A3A3] hover:text-zinc-900 dark:hover:text-white'} transition-colors`}>Contact</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
