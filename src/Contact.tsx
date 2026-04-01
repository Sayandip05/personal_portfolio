import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="mb-24">
      <h1 className="text-[60px] md:text-[130px] leading-[0.9] font-bold tracking-[-0.04em] mb-10 md:mb-16 text-[#0A0A0A] dark:text-white transition-colors duration-300">Contact</h1>
      <div className="max-w-[850px] space-y-6 md:space-y-8 text-[18px] md:text-[22px] text-[#4A4A4A] dark:text-[#A3A3A3] leading-[1.6] transition-colors duration-300">
        <p>
          I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you!
        </p>
        
        <div className="pt-8 md:pt-12 flex flex-col gap-6 md:gap-8">
          <a href="mailto:sayandipbar05@gmail.com" className="flex items-center gap-4 md:gap-6 text-[#0A0A0A] dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors group w-fit">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-[#FF6B00]/10 transition-colors">
              <Mail size={24} className="md:w-7 md:h-7" />
            </div>
            <span className="font-bold text-[20px] md:text-[28px] tracking-tight break-all">sayandipbar05@gmail.com</span>
          </a>
          
          <a href="https://www.linkedin.com/in/sayandipbar2005" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 text-[#0A0A0A] dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors group w-fit">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-[#FF6B00]/10 transition-colors">
              <Linkedin size={24} className="md:w-7 md:h-7" />
            </div>
            <span className="font-bold text-[20px] md:text-[28px] tracking-tight">LinkedIn</span>
          </a>

          <a href="https://x.com/Sayandip05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 text-[#0A0A0A] dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors group w-fit">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-[#FF6B00]/10 transition-colors">
              <Twitter size={24} className="md:w-7 md:h-7" />
            </div>
            <span className="font-bold text-[20px] md:text-[28px] tracking-tight">X (Twitter)</span>
          </a>

          <a href="https://github.com/Sayandip05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-6 text-[#0A0A0A] dark:text-white hover:text-[#FF6B00] dark:hover:text-[#FF6B00] transition-colors group w-fit">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-[#FF6B00]/10 transition-colors">
              <Github size={24} className="md:w-7 md:h-7" />
            </div>
            <span className="font-bold text-[20px] md:text-[28px] tracking-tight">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
