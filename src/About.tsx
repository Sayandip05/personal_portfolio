export default function About() {
  return (
    <div className="max-w-[850px]">
      <h1 className="text-[48px] sm:text-[60px] md:text-[100px] lg:text-[130px] leading-[0.9] font-bold tracking-[-0.04em] mb-8 md:mb-16 text-[#0A0A0A] dark:text-white transition-colors duration-300">About Me</h1>
      <div className="space-y-8 md:space-y-12 text-[18px] md:text-[22px] text-[#4A4A4A] dark:text-[#A3A3A3] leading-[1.6] transition-colors duration-300">
        <p>
          I am a Software Developer based in Kolkata, India, graduating with a B.Tech in 2027.
        </p>
      <p>
        My technical expertise is heavily focused on AI agent integration. I spend my time building scalable applications and exploring how artificial intelligence can be seamlessly integrated into modern software systems.
      </p>

      <div className="w-full rounded-xl overflow-hidden my-10 md:my-16">
        <img 
          src="/sayandipbar.png" 
          alt="Sayandip Bar" 
          className="w-full h-auto"
        />
      </div>

      <p>
        I am a highly responsible individual who takes ownership of the projects I work on. I don't claim to know everything, but I pride myself on being an exceptionally fast learner. When faced with an unfamiliar problem or a new technology, I dive in headfirst and figure it out quickly.
      </p>

      <p>
        I don't have traditional hobbies like traveling or outdoor exploration. My life revolves around the digital world. I can sit in front of my computer for hours on end, fully dedicated to my work, writing clean code, and optimizing complex logic. For me, software development isn't just a career path—it's where I channel all my focus and energy.
      </p>

      <div className="w-full rounded-xl overflow-hidden my-10 md:my-16">
        <img 
          src="/Infront of desk.png" 
          alt="Infront of desk" 
          className="w-full h-auto"
        />
      </div>

      <p>
        I'm always eager to take on new responsibilities and learn new things. If you're looking for a dedicated software developer who learns fast and works hard, I'd love to connect!
      </p>

        <p>
          You can also read more about my work <a href="https://github.com/Sayandip05" target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:underline">here</a>.
        </p>
      </div>
    </div>
  );
}
