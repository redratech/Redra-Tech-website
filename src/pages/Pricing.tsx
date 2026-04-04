import { Check, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Website",
    price: "₹10,000 – ₹18,000",
    desc: "Perfect for single-page portfolios and local business information sites.",
    features: ["Up to 3-5 Pages", "Responsive Design", "Contact Form", "Basic SEO", "Google My Business", "1 Month Post-Launch Support"],
    popular: false,
  },
  {
    name: "Business Portal",
    price: "₹30,000 – ₹55,000",
    desc: "Comprehensive solution for corporate and high-growth services.",
    features: ["Up to 15 Pages", "Custom Branding", "CMS (Admin Panel)", "Advanced SEO Strategy", "Social Integrations", "Domain & Hosting (1 Yr)", "3 Months Support"],
    popular: true,
  },
  {
    name: "Enterprise & E-com",
    price: "₹75,000+",
    desc: "Scale your revenue with a professional store or custom SaaS solution.",
    features: ["Custom Web Apps", "E-commerce Integration", "Payment Gateway Setup", "Inventory Management", "User Portal & Accounts", "Analytics Dashboard", "Priority 24/7 Support"],
    popular: false,
  },
];

const Pricing = () => (
  <div>
    <section className="py-24 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">Pricing</p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-foreground">
          Affordable <span className="gradient-text">Plans</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Transparent pricing with no hidden fees. Choose a plan that fits your budget.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`glass-card p-8 rounded-2xl flex flex-col relative transition-all duration-300 hover:shadow-xl ${
                p.popular ? "neon-glow border-primary/30 scale-105" : "hover:-translate-y-1"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1">
                  <Sparkles size={12} /> Most Popular
                </div>
              )}
              <h3 className="font-heading font-bold text-xl mb-1 text-foreground">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
              <p className="text-2xl font-heading font-bold gradient-text mb-6">{p.price}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded-xl font-semibold transition-all ${
                  p.popular
                    ? "gradient-bg text-primary-foreground hover:opacity-90 shadow-lg"
                    : "border border-border text-foreground hover:border-primary/40 hover:shadow-md"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
