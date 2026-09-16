
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Dock, { type DockItemData } from "../ui/Dock";
import { Mail, FileText } from "lucide-react";

export const Contact = () => {
  const dockItems: DockItemData[] = [
    { 
      icon: <Mail size={18} />, 
      label: 'Email', 
      onClick: () => window.location.href = `mailto:${portfolioData.contact.email}` 
    },
    { 
      icon: <span className="font-bold font-mono">G</span>, 
      label: 'GitHub', 
      onClick: () => window.open(portfolioData.contact.socials.github, '_blank') 
    },
    { 
      icon: <span className="font-bold font-mono">in</span>, 
      label: 'LinkedIn', 
      onClick: () => window.open(portfolioData.contact.socials.linkedin, '_blank') 
    },
    { 
      icon: <span className="font-bold font-mono">ig</span>, 
      label: 'Instagram', 
      onClick: () => window.open(portfolioData.contact.socials.instagram, '_blank') 
    },
    { 
      icon: <FileText size={18} />, 
      label: 'Resume', 
      onClick: () => window.open(portfolioData.resume.file, '_blank') 
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto w-full relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#171717] border border-white/5 rounded-3xl p-12 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together.</h2>
        <p className="text-white/60 max-w-md mx-auto mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href={`mailto:${portfolioData.contact.email}`} 
          className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
        >
          Say Hello
        </a>

        <div className="mt-16 flex flex-wrap justify-center relative w-full h-[120px]">
          <Dock 
            items={dockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </motion.div>
      
      <div className="mt-12 text-center text-sm text-white/40">
        <p>© {new Date().getFullYear()} {portfolioData.home.name}. All rights reserved.</p>
      </div>
    </section>
  );
};
