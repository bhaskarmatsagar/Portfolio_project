
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { AnimatedLink } from "../ui/AnimatedLink";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start pt-32 pb-16 px-6 max-w-5xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10">
          <img 
            src={portfolioData.about.profileImage} 
            alt={portfolioData.home.name} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=Bhaskar+Matsagar&background=random"; }}
          />
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
      >
        Hi, I'm {portfolioData.home.name.split(' ')[0]},<br />
        <span className="text-white/60">{portfolioData.home.role}</span><br />
        <span className="text-white/40">& {portfolioData.home.secondaryRole}</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-white/60 max-w-2xl mt-6 leading-relaxed"
      >
        {portfolioData.about.bio}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-center gap-6"
      >
        <a 
          href="#projects" 
          className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
        >
          {portfolioData.home.ctaPrimary}
        </a>
        <AnimatedLink href="#contact" className="text-white/80 hover:text-white font-medium">
          {portfolioData.home.ctaSecondary}
        </AnimatedLink>
      </motion.div>
    </section>
  );
};
