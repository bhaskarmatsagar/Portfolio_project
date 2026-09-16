import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {portfolioData.skills.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-medium mb-4 text-white/80">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
