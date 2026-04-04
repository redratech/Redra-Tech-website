import { Code, ShoppingCart, Monitor, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Code,
    title: "Website Development",
    desc: "We build fast, responsive, and SEO-friendly websites using the latest web technologies. From landing pages to complex multi-page sites, we ensure your online presence stands out.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI"],
    color: "from-primary to-primary"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Launch your online store with a fully functional e-commerce platform. We integrate secure payment gateways, inventory management, and a seamless shopping experience.",
    features: ["Payment Integration", "Product Management", "Order Tracking", "Mobile Optimized"],
    color: "from-secondary to-secondary"
  },
  {
    icon: Monitor,
    title: "Custom Web Applications",
    desc: "Need something unique? We develop custom web applications tailored to your business workflows — from dashboards to management systems and beyond.",
    features: ["Custom Features", "Scalable Architecture", "API Integration", "Real-time Data"],
    color: "from-[#00D2FF] to-[#3a7bd5]"
  },
  {
    icon: Layers,
    title: "SaaS Products",
    desc: "We help you build and launch scalable SaaS products. From multi-tenant architecture to subscription management, we handle the tech while you focus on growth.",
    features: ["Multi-tenant Architecture", "Subscription Management", "User Analytics", "Scalable Backend"],
    color: "from-[#8E2DE2] to-[#4A00E0]"
  },
];

const Services = () => (
  <div>
    <Helmet>
      <title>Our Services | Redra Tech - SaaS, Web & E-commerce</title>
      <meta name="description" content="Explore our range of professional digital services including custom SaaS products, e-commerce development, and bespoke web applications." />
    </Helmet>
    <section className="py-24 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">What We Offer</p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-foreground">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          End-to-end digital solutions to bring your ideas to life.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 space-y-8">
        {services.map((s, i) => (
          <div key={i} className="glass-card-hover p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0`}>
              <s.icon size={30} className="text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-3">
                {s.features.map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full">
                    <CheckCircle2 size={12} /> {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-24 section-alt">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold mb-4 text-foreground">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-8">Let's discuss your project and build something great together.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 gradient-bg px-8 py-3.5 rounded-xl font-semibold text-primary-foreground hover:opacity-90 transition-all hover:shadow-xl">
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </div>
);

export default Services;
