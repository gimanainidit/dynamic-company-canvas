import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Ahmad Fadhil",
    role: "Chief Information Officer",
    bio: "Berpengalaman 15+ tahun dalam strategi IT enterprise dan transformasi digital di sektor keuangan dan telekomunikasi.",
    image: null,
  },
  {
    name: "Rizky Pratama",
    role: "Chief Technology Officer",
    bio: "Pakar infrastruktur keamanan dengan sertifikasi CISSP dan OSCP. Memimpin tim teknis dalam proyek-proyek kritis nasional.",
    image: null,
  },
  {
    name: "Dian Safitri",
    role: "Security Project Specialist",
    bio: "Spesialis manajemen proyek keamanan siber dengan track record implementasi SOC dan compliance framework di berbagai industri.",
    image: null,
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            Tim Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-4">
            Leadership Team
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dipimpin oleh profesional berpengalaman di bidang keamanan siber dan teknologi informasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-card border border-border rounded-lg overflow-hidden group glow-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="aspect-square bg-primary/10 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl font-serif font-black text-accent/30">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-bold text-card-foreground">{member.name}</h3>
                <p className="text-accent text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent text-sm transition-colors"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
