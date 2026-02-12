import { motion } from "framer-motion";
import { Mail, Linkedin, Download } from "lucide-react";
import ceoPortrait from "@/assets/ceo-portrait.jpg";

const LeadershipCard = () => {
  return (
    <motion.div
      className="bg-card border border-border p-8 rounded-lg shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
        Leadership
      </h4>

      <div className="flex items-center space-x-4 mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/30 shrink-0">
          <img
            src={ceoPortrait}
            alt="CEO"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div>
          <h5 className="font-bold text-card-foreground font-serif text-lg">
            Nama Anda
          </h5>
          <p className="text-sm text-muted-foreground">Principal Director</p>
        </div>
      </div>

      <div className="text-sm space-y-3 pt-4 border-t border-border">
        <a
          href="mailto:email@anda.com"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={14} /> email@anda.com
        </a>
        <a
          href="#"
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={14} /> LinkedIn Profile
        </a>
      </div>

      <motion.a
        href="#"
        className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Download size={16} />
        Download Company Deck
      </motion.a>
    </motion.div>
  );
};

export default LeadershipCard;
