
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { AnimatedLink } from "../ui/AnimatedLink";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group rounded-3xl bg-[#171717] border border-white/5 p-6 hover:border-white/20 transition-colors flex flex-col"
          >
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-white/5 mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-white/60 mb-6 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, i) => (
                <span key={i} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-auto">
              {project.live && project.live !== "https://your-ecommerce-demo.com" && (
                <AnimatedLink href={project.live} className="text-sm font-medium">Live Demo</AnimatedLink>
              )}
              {project.github && (
                <AnimatedLink href={project.github} className="text-sm font-medium text-white/60 hover:text-white">GitHub</AnimatedLink>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
