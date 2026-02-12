import { motion } from "framer-motion";
import { Shield, Lock, Search, ServerCog, FileKey } from "lucide-react";
import { Link } from "react-router-dom";

export const services = [
  {
    icon: Shield,
    title: "Penetration Testing",
    slug: "penetration-testing",
    short: "Uji keamanan infrastruktur dan aplikasi Anda dengan simulasi serangan yang terkontrol.",
    overview: "Layanan penetration testing kami mencakup pengujian komprehensif terhadap infrastruktur jaringan, aplikasi web, dan sistem internal organisasi Anda.",
    scope: ["Network penetration testing", "Web application security assessment", "API security testing", "Social engineering simulation"],
    deliverables: ["Laporan temuan kerentanan terperinci", "Risk severity matrix", "Rekomendasi remediasi prioritas", "Executive summary untuk manajemen"],
  },
  {
    icon: Lock,
    title: "Security Operations Center",
    slug: "security-operations-center",
    short: "Monitoring keamanan 24/7 dengan tim ahli dan teknologi SIEM terkini.",
    overview: "SOC kami menyediakan monitoring, deteksi, dan respons insiden secara real-time untuk melindungi aset digital organisasi Anda.",
    scope: ["24/7 threat monitoring", "SIEM management", "Incident response", "Threat intelligence"],
    deliverables: ["Monthly security report", "Real-time alert dashboard", "Incident response playbook", "Threat landscape briefing"],
  },
  {
    icon: Search,
    title: "Vulnerability Assessment",
    slug: "vulnerability-assessment",
    short: "Identifikasi dan prioritaskan kerentanan keamanan sebelum dieksploitasi.",
    overview: "Identifikasi kerentanan secara proaktif pada seluruh infrastruktur IT Anda dengan metodologi yang terstruktur dan tools enterprise-grade.",
    scope: ["Infrastructure scanning", "Configuration audit", "Patch management review", "Compliance gap analysis"],
    deliverables: ["Vulnerability inventory", "Risk-ranked findings", "Remediation roadmap", "Compliance mapping report"],
  },
  {
    icon: ServerCog,
    title: "Cloud Security Architecture",
    slug: "cloud-security",
    short: "Desain dan implementasi arsitektur keamanan cloud yang tangguh.",
    overview: "Kami merancang arsitektur keamanan cloud yang sesuai dengan best practices industri dan kebutuhan compliance organisasi Anda.",
    scope: ["Cloud security posture management", "Identity & access management", "Data encryption strategy", "Multi-cloud security design"],
    deliverables: ["Cloud security blueprint", "IAM policy framework", "Encryption implementation guide", "Security architecture document"],
  },
  {
    icon: FileKey,
    title: "Compliance & GRC",
    slug: "compliance-grc",
    short: "Pendampingan untuk memenuhi standar keamanan dan regulasi industri.",
    overview: "Kami membantu organisasi mencapai dan mempertahankan kepatuhan terhadap standar keamanan informasi yang berlaku.",
    scope: ["ISO 27001 implementation", "GDPR compliance assessment", "Risk management framework", "Policy & procedure development"],
    deliverables: ["Gap analysis report", "Policy documentation suite", "Risk register", "Audit readiness checklist"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-foreground mb-4">
            Solusi Keamanan Siber Komprehensif
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan layanan keamanan siber end-to-end yang dirancang untuk melindungi organisasi Anda dari ancaman digital modern.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.slug}
              className="bg-card p-8 rounded-lg border border-border hover:border-accent/40 transition-all duration-300 group glow-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <svc.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-serif font-bold mb-2 text-card-foreground">
                {svc.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {svc.short}
              </p>
              <Link
                to={`/services#${svc.slug}`}
                className="text-accent text-sm font-semibold hover:underline inline-flex items-center gap-1"
              >
                Selengkapnya →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
