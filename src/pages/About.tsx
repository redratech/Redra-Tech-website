import { Helmet } from "react-helmet-async";
import { Target, Eye, Users, Award, Heart, Lightbulb } from "lucide-react";

const About = () => (
  <div>
    <Helmet>
      <title>About Redra Tech | Leading Tech Company in Tamil Nadu</title>
      <meta name="description" content="Learn more about Redra Tech, our mission to drive digital transformation, and our commitment to building world-class SaaS and web applications. We provide localized impact through expert digital solutions." />
    </Helmet>
    <section className="py-24 hero-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">About Us</p>
        <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-foreground">
          We Are <span className="gradient-text">Redra Tech</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A passionate team of developers and designers dedicated to helping businesses grow online through innovative digital solutions.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Redra Tech was founded with a simple mission — make premium web development accessible to businesses of all sizes. Starting as a small startup in Tamil Nadu, India, we've grown by delivering quality work that speaks for itself.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe that every business deserves a strong digital presence, regardless of their budget. That's why we combine modern technologies with creative design to build solutions that not only look great but also deliver real results.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: "Our Mission", desc: "Helping businesses grow online by delivering high-quality, affordable digital solutions." },
            { icon: Eye, title: "Our Vision", desc: "Become a leading digital solutions company known for innovation, quality, and customer satisfaction." },
            { icon: Users, title: "Our Team", desc: "A small but dedicated team of developers, designers, and strategists who love what they do." },
          ].map((item, i) => (
            <div key={i} className="glass-card-hover p-8 text-center">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5">
                <item.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold mb-12 text-foreground">Our Core Values</h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: Award, title: "Excellence", desc: "We strive for the highest quality in everything we build." },
            { icon: Heart, title: "Passion", desc: "We love what we do and it shows in our work." },
            { icon: Lightbulb, title: "Innovation", desc: "We stay ahead with the latest technologies and trends." },
          ].map((v, i) => (
            <div key={i} className="group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <v.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold mb-2 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
