import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="mb-24 md:mb-40">
        <h1 className="text-[48px] sm:text-[60px] md:text-[100px] lg:text-[130px] leading-[0.9] font-bold tracking-[-0.04em] mb-8 md:mb-16 text-[#0A0A0A] dark:text-white transition-colors duration-300">Sayandip Bar</h1>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 md:mb-16">
          <h2 className="text-[22px] md:text-[26px] font-bold text-[#333333] dark:text-[#EAEAEA] tracking-tight transition-colors duration-300">Software Developer</h2>
          <div className="flex items-center gap-2 text-[18px] md:text-[22px] font-bold text-[#333333] dark:text-[#EAEAEA] transition-colors duration-300">
            <MapPin size={24} className="text-[#FF4081] fill-[#FF4081]" />
            Kolkata, India
          </div>
        </div>
        <div className="max-w-[850px] space-y-6 md:space-y-8 text-[18px] md:text-[22px] text-[#4A4A4A] dark:text-[#A3A3A3] leading-[1.6] transition-colors duration-300">
          <p>
            Hi there! I'm a Software Developer based in Kolkata, India, currently pursuing my B.Tech (Class of 2027). My core focus lies in AI agent integration, building robust systems that solve real-world problems.
          </p>
          <p>
            I don't have hobbies like traveling or exploring—my true dedication is to my work. I am a highly responsible developer who can sit for hours, fully immersed in writing code and debugging complex issues. While I may not know everything yet, I am a fast learner who adapts quickly to new technologies and challenges.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-24 md:mb-32">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#0A0A0A] dark:text-white transition-colors duration-300">Latest Projects</h2>
          <Link to="/work" className="text-[16px] md:text-[18px] text-[#4A4A4A] dark:text-[#A3A3A3] hover:text-zinc-900 dark:hover:text-white mb-1 md:mb-2 transition-colors">View all</Link>
        </div>
        <div className="h-[1px] w-full bg-[#F4D5C1] dark:bg-[#FF6B00]/30 mb-8 md:mb-10 transition-colors duration-300"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Project 1 */}
          <a href="https://github.com/Sayandip05/FreelanceFlow" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
            <div className="relative aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Abstract technology" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[60px] sm:text-[90px] font-medium text-white/40 tracking-tighter">2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF6B00] dark:group-hover:text-[#FF6B00] tracking-tight transition-colors duration-300">FreelanceFlow</h3>
              <div className="w-7 h-7 border-2 border-[#FF6B00] rounded-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={18} className="text-[#FF6B00]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[#4A4A4A] dark:text-[#A3A3A3] leading-relaxed text-[19px] transition-colors duration-300">Full-stack freelance marketplace with secure escrow payments and AI-powered worklogs.</p>
          </a>

          {/* Project 2 */}
          <a href="https://github.com/Sayandip05/careremind" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
            <div className="relative aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" alt="Network lines" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[60px] sm:text-[90px] font-medium text-white/40 tracking-tighter">2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF6B00] dark:group-hover:text-[#FF6B00] tracking-tight transition-colors duration-300">CareRemind</h3>
              <div className="w-7 h-7 border-2 border-[#FF6B00] rounded-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={18} className="text-[#FF6B00]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[#4A4A4A] dark:text-[#A3A3A3] leading-relaxed text-[19px] transition-colors duration-300">AI-powered healthcare reminder system with automated WhatsApp/SMS notifications.</p>
          </a>

          {/* Project 3 */}
          <a href="https://github.com/Sayandip05/InvIQ" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
            <div className="relative aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Circuit board" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[60px] sm:text-[90px] font-medium text-white/40 tracking-tighter">2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF6B00] dark:group-hover:text-[#FF6B00] tracking-tight transition-colors duration-300">InvIQ</h3>
              <div className="w-7 h-7 border-2 border-[#FF6B00] rounded-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={18} className="text-[#FF6B00]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[#4A4A4A] dark:text-[#A3A3A3] leading-relaxed text-[19px] transition-colors duration-300">AI-assisted inventory platform with LangGraph agent and automated stock-out prevention.</p>
          </a>
        </div>
      </section>
    </>
  );
}
