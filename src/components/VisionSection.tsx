import { motion } from "framer-motion";
import officeImage from "@/assets/office-building.jpg";

const VisionSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 text-foreground">
          Visi Kami
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Perusahaan kami percaya bahwa teknologi bukan pengganti manusia,
          melainkan <em className="text-primary font-semibold not-italic">multiplier</em>.
          Kami berdiri sejak 2020 dengan satu misi: menyederhanakan
          kompleksitas.
        </p>

        <div className="relative mb-8 rounded-lg overflow-hidden">
          <img
            src={officeImage}
            alt="Kantor perusahaan"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-primary rounded-lg -z-10" />
        </div>

        <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
          Pendekatan Strategis
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Kami tidak hanya mengirimkan kode; kami mengirimkan solusi. Tim kami
          terdiri dari para ahli yang memahami irisan antara kebutuhan bisnis
          dan kapabilitas teknis.
        </p>

        <motion.blockquote
          className="border-l-4 border-primary pl-6 py-4 bg-secondary rounded-r-lg mb-6"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <p className="text-lg italic text-foreground font-serif">
            "Innovation distinguishes between a leader and a follower."
          </p>
        </motion.blockquote>

        <p className="text-muted-foreground leading-relaxed">
          Dalam setiap proyek, kami menerapkan metodologi{" "}
          <strong className="text-foreground">Agile</strong> yang ketat namun
          fleksibel, memastikan setiap sprint memberikan nilai nyata bagi
          pemangku kepentingan Anda.
        </p>
      </motion.div>
    </div>
  );
};

export default VisionSection;
