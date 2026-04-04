import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/Redratech.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-md border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Redra Tech" className="h-10" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors relative hover:text-primary ${
                location.pathname === l.path
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:gradient-bg after:rounded-full"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex gradient-bg px-6 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all hover:shadow-lg"
        >
          Get Started
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border/40 px-4 pb-6 pt-2 shadow-lg animate-fade-up">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 gradient-bg text-center px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
