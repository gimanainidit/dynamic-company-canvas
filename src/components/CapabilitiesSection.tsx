import { motion } from "framer-motion";
import { Cpu, Cloud, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Digital Transformation Strategy",
    description: "Strategi komprehensif untuk transformasi digital end-to-end.",
  },
  {
    icon: Cpu,
    title: "AI & Workforce Automation",
    description: "Otomasi cerdas yang meningkatkan produktivitas tim Anda.",
  },
  {
    icon: Cloud,
    title: "Enterprise Cloud Architecture",
    description: "Arsitektur cloud yang scalable dan aman untuk enterprise.",
  },
];

const CapabilitiesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-bold text-sm uppercase tracking-widest mb-2 text-muted-foreground">
            Key Capabilities
          </h3>
          <div className="w-16 h-1 bg-primary mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="bg-card p-8 rounded-lg shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <cap.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-serif font-bold mb-2 text-card-foreground">
                {cap.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
