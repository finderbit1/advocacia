import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "5511999998888"; // Substitua pelo número real
  const message = "Olá! Gostaria de agendar uma consulta jurídica.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-float">
      <Button
        onClick={handleWhatsAppClick}
        className="h-16 w-16 rounded-full shadow-premium hover:shadow-glow transition-all duration-300 bg-green-500 hover:bg-green-600 text-white border-0 group"
        size="icon"
      >
        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
        
        {/* Pulse animation rings */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></span>
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-navy-deep text-primary-foreground px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-elegant">
          Fale conosco no WhatsApp
          <div className="absolute top-full right-4 border-4 border-transparent border-t-navy-deep"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;