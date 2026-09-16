
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Education
          </motion.h2>
          <div className="space-y-8">
            {portfolioData.education.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-6 border-l border-white/10"
              >
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-1.5 border-2 border-background"></div>
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-white/60 mt-1">{item.institution}</p>
                <span className="inline-block mt-2 text-xs font-medium px-2 py-1 bg-white/5 rounded text-white/40">{item.year}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Achievements
          </motion.h2>
          <div className="space-y-8">
            {portfolioData.achievements.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-6 border-l border-white/10"
              >
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6.5px] top-1.5 border-2 border-background"></div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-white/60 mt-2">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
