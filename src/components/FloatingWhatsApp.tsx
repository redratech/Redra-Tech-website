import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "917639157729";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi Redra Tech, I'd like to discuss a project.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group overflow-hidden"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
      <MessageCircle size={30} className="relative z-10" />
    </a>
  );
};

export default FloatingWhatsApp;
