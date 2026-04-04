import { ExternalLink, Monitor } from "lucide-react";

const projects = [
  { title: "School Management Portal", desc: "A comprehensive school website with student portal, admin dashboard, attendance tracking, and grade management system.", tags: ["React", "Node.js", "PostgreSQL"], category: "Education" },
  { title: "Fashion E-commerce Store", desc: "Full-featured online shopping platform with product catalog, cart, secure checkout, and order tracking capabilities.", tags: ["Next.js", "Stripe", "Tailwind"], category: "E-commerce" },
  { title: "Analytics Dashboard", desc: "Real-time data visualization dashboard for SaaS businesses with charts, reports, and team collaboration features.", tags: ["React", "D3.js", "Firebase"], category: "SaaS" },
  { title: "Restaurant Booking App", desc: "Online reservation system with menu display, table management, and real-time availability for restaurant chains.", tags: ["React", "Supabase", "Maps API"], category: "Hospitality" },
];

const Portfolio = () => (
  <div>
    <section className="py-24 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">Our Work</p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-foreground">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A selection of projects that showcase our expertise and creativity.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="glass-card-hover overflow-hidden group">
              <div className="h-56 relative overflow-hidden gradient-bg-soft">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/15 group-hover:to-secondary/15 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor size={56} className="text-primary/15 group-hover:text-primary/25 transition-colors" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-secondary bg-card px-3 py-1 rounded-full shadow-sm">{p.category}</span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-heading font-bold text-xl mb-2 flex items-center gap-2 text-foreground">
                  {p.title}
                  <ExternalLink size={14} className="text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-medium text-primary bg-primary/8 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;
