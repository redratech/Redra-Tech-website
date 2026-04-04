import { useState } from "react";
import { Mail, MapPin, MessageCircle, Send, Clock, Phone } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          from_phone: form.phone,
          message: form.message,
          to_name: "Redra Tech Team",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent! We'll get back to you soon.", { id: toastId });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/917639157729?text=${encodeURIComponent("Hi Redra Tech, I'd like to discuss a project.")}`;

  return (
    <div>
      <Helmet>
        <title>Contact Redra Tech | Get Your Free Consultation</title>
        <meta name="description" content="Ready to build your digital future? Contact Redra Tech for free consultations on web development, SaaS product builds, and e-commerce solutions." />
      </Helmet>
      <section className="py-24 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-foreground">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind? Let's talk about it.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-2xl">
              <h2 className="font-heading font-bold text-2xl mb-6 text-foreground">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                  <textarea
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full gradient-bg py-3.5 rounded-xl font-semibold text-primary-foreground transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:opacity-90 hover:shadow-xl"
                  }`}
                >
                  <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading font-bold text-2xl mb-6 text-foreground">Contact Info</h2>
              
              {[
                { icon: Mail, label: "Email", value: "info.redratech@gmail.com", href: "mailto:info.redratech@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 7639157729", href: "tel:+917639157729" },
                { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
                { icon: Clock, label: "Response Time", value: "Within 24 hours" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="glass-card p-6 rounded-2xl border-primary/20">
                <h3 className="font-heading font-semibold mb-3 flex items-center gap-2 text-foreground">
                  <MessageCircle size={18} className="text-primary" /> WhatsApp
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Prefer chatting? Reach us directly on WhatsApp for quick responses.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-2.5 rounded-xl font-medium text-sm transition-all hover:opacity-90 hover:shadow-lg"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
