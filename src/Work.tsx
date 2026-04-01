import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  return (
    <>
      <section className="mb-16 md:mb-24">
        <h1 className="text-[60px] md:text-[130px] leading-[0.9] font-bold tracking-[-0.04em] mb-10 md:mb-16 text-[#0A0A0A] dark:text-white transition-colors duration-300">My Work</h1>
        <div className="max-w-[850px] space-y-6 md:space-y-8 text-[18px] md:text-[22px] text-[#4A4A4A] dark:text-[#A3A3A3] leading-[1.6] transition-colors duration-300">
          <p>
            My work is centered around AI agent integration.
          </p>
          <p>
            As a B.Tech student graduating in 2027, I specialize in crafting scalable server-side applications and intelligent systems. I take full responsibility for my code, and while I am always learning, my ability to adapt quickly allows me to tackle complex technical challenges with deep focus and dedication.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-[22px] md:text-[26px] font-bold tracking-tight text-[#0A0A0A] dark:text-white mb-4 transition-colors duration-300">All Projects</h2>
        <div className="h-[1px] w-full bg-[#F4D5C1] dark:bg-[#FF6B00]/30 mb-8 md:mb-10 transition-colors duration-300"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Abstract technology" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[90px] font-medium text-white/40 tracking-tighter">2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[22px] font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF6B00] dark:group-hover:text-[#FF6B00] tracking-tight transition-colors duration-300">FreelanceFlow</h3>
              <div className="w-6 h-6 border-2 border-[#FF6B00] rounded-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={16} className="text-[#FF6B00]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[#4A4A4A] dark:text-[#A3A3A3] leading-relaxed text-[16px] transition-colors duration-300">Freelancer platform.</p>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" alt="Network lines" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[90px] font-medium text-white/40 tracking-tighter">2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[22px] font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF6B00] dark:group-hover:text-[#FF6B00] tracking-tight transition-colors duration-300">CareRemind</h3>
              <div className="w-6 h-6 border-2 border-[#FF6B00] rounded-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={16} className="text-[#FF6B00]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[#4A4A4A] dark:text-[#A3A3A3] leading-relaxed text-[16px] transition-colors duration-300">Medical application for patient care and reminders.</p>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" alt="Circuit board" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[90px] font-medium text-white/40 tracking-tighter">2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[22px] font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF6B00] dark:group-hover:text-[#FF6B00] tracking-tight transition-colors duration-300">InvIQ</h3>
              <div className="w-6 h-6 border-2 border-[#FF6B00] rounded-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={16} className="text-[#FF6B00]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[#4A4A4A] dark:text-[#A3A3A3] leading-relaxed text-[16px] transition-colors duration-300">B2B inventory management solution.</p>
          </div>

          {/* Project 4 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[1.4/1] rounded-xl overflow-hidden mb-5 bg-zinc-200 dark:bg-zinc-800 transition-colors duration-300">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" alt="Matrix code" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[90px] font-medium text-white/40 tracking-tighter">2026</span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[22px] font-bold text-[#0A0A0A] dark:text-white group-hover:text-[#FF6B00] dark:group-hover:text-[#FF6B00] tracking-tight transition-colors duration-300">API Gateway</h3>
              <div className="w-6 h-6 border-2 border-[#FF6B00] rounded-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <ArrowUpRight size={16} className="text-[#FF6B00]" strokeWidth={2.5} />
              </div>
            </div>
            <p className="text-[#4A4A4A] dark:text-[#A3A3A3] leading-relaxed text-[16px] transition-colors duration-300">A high-performance, secure API routing layer.</p>
          </div>


        </div>
      </section>

      <section className="mb-16 max-w-[850px] space-y-6 md:space-y-8 text-[18px] md:text-[22px] text-[#4A4A4A] dark:text-[#A3A3A3] leading-[1.6] transition-colors duration-300">
        <p>
          Whether it's in the world of web development or creative problem solving, my focus is always on creating work that scales - pushing the limits of what's possible while staying rooted in clean code and best practices.
        </p>
        <p>
          If you'd like to connect for work queries or collaborations, please do <a href="/contact" className="text-[#FF6B00] hover:underline">get in touch</a>.
        </p>
      </section>
    </>
  );
}
