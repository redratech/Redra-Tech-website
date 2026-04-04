import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/Redratech.png";

const Footer = () => (
  <footer className="border-t border-border/40 bg-foreground text-background">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="Redra Tech" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-background/60 text-sm leading-relaxed">
            We create modern websites, web apps, and digital solutions for businesses and startups.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-background">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Pricing", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-background/60 hover:text-background transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-background">Services</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>Website Development</li>
            <li>E-commerce Solutions</li>
            <li>Web Applications</li>
            <li>SaaS Products</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-background">Contact</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-neon-blue" /> +91 7639157729
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-neon-blue" /> info.redratech@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-neon-blue" /> Tamil Nadu, India
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/40">
        © 2026 Redra Tech. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
