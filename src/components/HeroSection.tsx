import { motion } from "framer-motion";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="bg-dark text-dark-foreground pt-16 pb-24 relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 right-0 w-1 h-full bg-primary opacity-80" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            Company Overview
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-black leading-[1.1] mb-6">
            Membangun Masa Depan{" "}
            <span className="text-dark-muted">Bisnis Digital.</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-muted font-light leading-relaxed border-l-4 border-primary pl-6">
            Kami membantu organisasi bertransformasi melalui teknologi, data, dan
            strategi manusia yang terukur untuk menghadapi tantangan global.
          </p>
        </motion.div>

        <motion.div
          className="hidden md:block md:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Digital transformation abstract visual"
              className="w-full h-80 object-cover animate-glow-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
          </div>
          {/* Floating decoration */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-primary rounded-lg animate-float opacity-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
