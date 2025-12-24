import { motion } from "framer-motion";
import { FiCode, FiBook, FiUsers, FiHeart } from "react-icons/fi";
import { aboutContent, personalInfo } from "@/data/portfolioData";

const About = () => {
  const valueIcons = [FiCode, FiBook, FiHeart, FiUsers];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-4">
            About Me
          </span>
          <h2 className="heading-primary mb-4">The Developer Behind the Code</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, values, and what drives me as a
            developer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="heading-secondary mb-4 text-gradient">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {aboutContent.intro}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {aboutContent.story}
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Currently Focused On:
              </h4>
              <ul className="space-y-3">
                {aboutContent.currentFocus.map((focus, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-medium mt-0.5">
                      {index + 1}
                    </span>
                    <span>{focus}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {aboutContent.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Fun Facts / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-card rounded-2xl border border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "2+", label: "Years Coding" },
              { number: "15+", label: "Projects Completed" },
              { number: "10+", label: "Technologies" },
              { number: "∞", label: "Lines of Code" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
