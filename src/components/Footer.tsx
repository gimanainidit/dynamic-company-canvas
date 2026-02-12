import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-muted py-16 border-t border-dark-muted/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <h3 className="text-dark-foreground font-bold mb-4 uppercase tracking-wider text-xs">
            Address
          </h3>
          <div className="flex items-start gap-2">
            <MapPin size={14} className="mt-1 text-primary shrink-0" />
            <div>
              <p>Menara Sentraya, Lt. 22</p>
              <p>Jakarta Selatan, Indonesia</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-dark-foreground font-bold mb-4 uppercase tracking-wider text-xs">
            Connect
          </h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={14} className="text-primary" /> info@namaperusahaan.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> +62 21 5555 8888
            </p>
          </div>
        </div>
        <div className="flex items-end">
          <p className="text-dark-muted/60">
            &copy; 2024 NamaPerusahaan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
