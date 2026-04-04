import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Code, ShoppingCart, Monitor, Palette, Zap, DollarSign, PenTool, Headphones, Star, ArrowRight, CheckCircle2, Layers } from "lucide-react";
import logo from "@/assets/Redratech.png";

const services = [
  { icon: Code, title: "Website Development", desc: "Custom, responsive websites built with modern technologies.", color: "from-primary to-primary" },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Online stores that convert visitors into customers.", color: "from-secondary to-secondary" },
  { icon: Monitor, title: "Web Applications", desc: "Scalable web apps tailored to your business needs.", color: "from-[#00D2FF] to-[#3a7bd5]" },
  { icon: Layers, title: "SaaS Products", desc: "Building scalable, multi-tenant software as a service solutions.", color: "from-[#8E2DE2] to-[#4A00E0]" },
];

const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Get your project launched on time, every time." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium quality at prices that work for startups." },
  { icon: PenTool, title: "Modern Design", desc: "Cutting-edge designs that set you apart." },
  { icon: Headphones, title: "Reliable Support", desc: "We're here for you even after launch." },
];

const portfolioItems = [
  { title: "School Management Portal", desc: "A comprehensive school website with admin dashboard and student portal.", tag: "Education" },
  { title: "Fashion E-commerce Store", desc: "Full-featured online shopping platform with payment integration.", tag: "E-commerce" },
  { title: "Analytics Dashboard", desc: "Real-time data visualization dashboard for SaaS businesses.", tag: "SaaS" },
];

const testimonials = [
  { name: "Rajkumar V", role: "Founder, Sports Educate Foundation", text: "Redra Tech developed a professional and high-performance platform for our foundation. Their technical expertise helped us streamline our school outreach and display our sports programs effectively. A truly reliable partner for digital innovation.", rating: 5, link: "https://www.sportseducate.com", linkText: "www.sportseducate.com" },
  { name: "Kamalesh Srinivasan", role: "Founder, The Leisure Yacht Dubai", text: "Redra Tech built our luxury yacht booking system from scratch. The interface is elegant, and the booking flow is seamless, reflecting the premium experience we offer in Dubai. Their technical ability is truly outstanding.", rating: 5, link: "https://www.theleisureyacht.com", linkText: "www.theleisureyacht.com" },
  { name: "Pradeep", role: "Founder, Indian School for Modern Languages", text: "Redra Tech crafted a beautiful and user-friendly platform for our language school. Their attention to detail and modern design helped us attract students from across the globe. Highly satisfied with their digital solutions.", rating: 5, link: "https://www.indianschoolformodernlanguages.com", linkText: "www.indianschoolformodernlanguages.com" },
];

const stats = [
  { value: "6+", label: "Projects Completed" },
  { value: "4+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const Index = () => (
  <div>
    <Helmet>
      <title>Redra Tech | Web Development & SaaS Solutions</title>
      <meta name="description" content="Build your digital future with Redra Tech. We provide premium software and web development services including SaaS products and E-commerce solutions." />
    </Helmet>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium animate-fade-up">
              <Zap size={14} /> Software & Web Development Company
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
              Build Your Digital Future with{" "}
              <span className="gradient-text">Redra Tech</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              We create modern websites, web apps, and digital solutions for businesses and startups.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact" className="gradient-bg px-8 py-3.5 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-all hover:shadow-xl shadow-primary/20">
                Get Started
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-heading font-bold gradient-text">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative p-12 bg-card/40 backdrop-blur-sm rounded-[40px] border border-border/40 shadow-2xl">
                <img src={logo} alt="Redra Tech Logo" className="w-80 h-auto object-contain drop-shadow-2xl animate-float" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-4 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                  <CheckCircle2 size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">6+ Projects</p>
                  <p className="text-xs text-muted-foreground">Successfully Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Our Services</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">End-to-end digital solutions to bring your ideas to life.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="glass-card-hover p-7 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <s.icon size={26} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm mb-3 uppercase tracking-wider">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">Built for Results</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyUs.map((w, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
                <w.icon size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold mb-2 text-foreground">{w.title}</h3>
              <p className="text-muted-foreground text-sm">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



    {/* Testimonials */}
    <section className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm mb-3 uppercase tracking-wider">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card-hover p-7">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                  {t.link && (
                    <a 
                      href={t.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary text-[10px] hover:underline block mt-1 font-medium"
                    >
                      {t.linkText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="gradient-bg p-12 md:p-16 text-center rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-primary-foreground">
              Start Your Project Today
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Ready to build something amazing? Let's turn your ideas into reality.
            </p>
            <Link to="/contact" className="bg-card text-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-card/90 transition-all inline-block shadow-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
