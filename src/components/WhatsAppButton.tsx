import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Phone, Mail, Clock, Scale, Users, Shield, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Ícone do WhatsApp personalizado
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5511999998888"; // Substitua pelo número real (formato: código do país + DDD + número)
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const quickMessages = [
    {
      id: "consulta",
      title: "Agendar Consulta",
      message: "Olá! Gostaria de agendar uma consulta jurídica. Podem me ajudar?",
      icon: <Clock className="w-4 h-4" />,
      gradient: "from-slate-600 via-slate-700 to-slate-800",
      hoverGradient: "from-slate-700 via-slate-800 to-slate-900",
      accent: "bg-gradient-to-br from-slate-100 to-slate-200",
      glow: "shadow-slate-500/25",
      popular: false
    },
    {
      id: "emergencia",
      title: "Emergência Jurídica",
      message: "URGENTE! Preciso de atendimento jurídico imediato. É uma emergência!",
      icon: <Phone className="w-4 h-4" />,
      gradient: "from-amber-500 via-amber-600 to-amber-700",
      hoverGradient: "from-amber-600 via-amber-700 to-amber-800",
      accent: "bg-gradient-to-br from-amber-100 to-amber-200",
      glow: "shadow-amber-500/30",
      popular: true
    },
    {
      id: "empresarial",
      title: "Direito Empresarial",
      message: "Olá! Preciso de assessoria jurídica empresarial. Podem me ajudar?",
      icon: <Users className="w-4 h-4" />,
      gradient: "from-emerald-500 via-emerald-600 to-emerald-700",
      hoverGradient: "from-emerald-600 via-emerald-700 to-emerald-800",
      accent: "bg-gradient-to-br from-emerald-100 to-emerald-200",
      glow: "shadow-emerald-500/30",
      popular: true
    },
    {
      id: "trabalhista",
      title: "Direito Trabalhista",
      message: "Olá! Tenho uma questão trabalhista e gostaria de uma consulta.",
      icon: <Scale className="w-4 h-4" />,
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      hoverGradient: "from-blue-600 via-blue-700 to-blue-800",
      accent: "bg-gradient-to-br from-blue-100 to-blue-200",
      glow: "shadow-blue-500/30",
      popular: false
    },
    {
      id: "civil",
      title: "Direito Civil",
      message: "Olá! Preciso de orientação em direito civil. Podem me ajudar?",
      icon: <Shield className="w-4 h-4" />,
      gradient: "from-violet-500 via-violet-600 to-violet-700",
      hoverGradient: "from-violet-600 via-violet-700 to-violet-800",
      accent: "bg-gradient-to-br from-violet-100 to-violet-200",
      glow: "shadow-violet-500/30",
      popular: false
    },
    {
      id: "orçamento",
      title: "Solicitar Orçamento",
      message: "Olá! Gostaria de solicitar um orçamento para assessoria jurídica.",
      icon: <Mail className="w-4 h-4" />,
      gradient: "from-rose-500 via-rose-600 to-rose-700",
      hoverGradient: "from-rose-600 via-rose-700 to-rose-800",
      accent: "bg-gradient-to-br from-rose-100 to-rose-200",
      glow: "shadow-rose-500/30",
      popular: false
    }
  ];
  
  const handleWhatsAppClick = (message: string) => {
    try {
      // Limpa o número removendo caracteres especiais
      const cleanNumber = whatsappNumber.replace(/\D/g, '');
      
      // Monta a URL do WhatsApp
      const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
      
      // Abre o WhatsApp
      window.open(url, '_blank', 'noopener,noreferrer');
      
      // Fecha o painel
      setIsOpen(false);
      
      // Log para debug (remover em produção)
      console.log('WhatsApp URL:', url);
    } catch (error) {
      console.error('Erro ao abrir WhatsApp:', error);
      // Fallback: tenta abrir diretamente
      window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    }
  };

  const handleDefaultClick = () => {
    const defaultMessage = "Olá! Gostaria de mais informações sobre os serviços jurídicos.";
    handleWhatsAppClick(defaultMessage);
  };

  // Hook para fechar o painel ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        panelRef.current &&
        buttonRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Messages Panel */}
      {isOpen && (
        <div ref={panelRef} className="absolute bottom-20 right-0 mb-4 animate-slide-up">
          <Card className="w-80 shadow-2xl border-0 bg-white/98 backdrop-blur-xl rounded-3xl overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400"></div>
            <div className="absolute top-4 right-4">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 px-6 py-5 border-b border-slate-200/50 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 text-sm">Como podemos ajudar?</h3>
                      <p className="text-xs text-slate-600 mt-1">Escolha uma opção para iniciar o atendimento</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className="h-8 w-8 p-0 hover:bg-slate-200 rounded-full transition-all duration-200 hover:scale-110"
                  >
                    <X className="w-4 h-4 text-slate-600" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="p-5 space-y-3 bg-gradient-to-b from-white to-slate-50/50">
                {quickMessages.map((msg, index) => (
                  <Button
                    key={msg.id}
                    variant="ghost"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleWhatsAppClick(msg.message);
                    }}
                    className={`w-full justify-start p-4 h-auto bg-gradient-to-r ${msg.gradient} hover:bg-gradient-to-r hover:${msg.hoverGradient} text-white hover:shadow-xl hover:${msg.glow} transition-all duration-500 group rounded-2xl border-0 relative overflow-hidden transform hover:scale-[1.02] hover:-translate-y-1`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="flex items-center gap-4 w-full relative z-10">
                      <div className={`w-12 h-12 ${msg.accent} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                        <div className="text-slate-700 group-hover:text-slate-800">
                          {msg.icon}
                        </div>
                      </div>
                      <div className="text-left flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-sm text-white group-hover:text-slate-100">{msg.title}</div>
                          {msg.popular && (
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-300 fill-current" />
                              <span className="text-xs text-yellow-200 font-medium">Popular</span>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-slate-200 group-hover:text-slate-100 line-clamp-2 mt-1 leading-relaxed">{msg.message}</div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Zap className="w-4 h-4 text-white/80" />
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
              
              {/* Footer */}
              <div className="px-5 pb-5 bg-gradient-to-b from-slate-50/50 to-white">
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-4 text-center border border-emerald-100">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-700">Atendimento Confidencial</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    💬 Resposta garantida em até 2 horas • Segurança total dos seus dados
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                    className="text-xs border-slate-300 hover:bg-slate-100 transition-all duration-200"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="relative">
      <Button
          ref={buttonRef}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (isOpen) {
              setIsOpen(false);
            } else {
              handleDefaultClick();
            }
          }}
          onMouseEnter={() => {
            if (!isOpen) {
              setIsOpen(true);
            }
          }}
          className="h-18 w-18 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-700 text-white border-0 group relative overflow-hidden transform hover:scale-110 hover:-translate-y-2"
        size="icon"
      >
          <WhatsAppIcon className="h-9 w-9 group-hover:scale-110 transition-transform relative z-10" />
          
          {/* Multiple elegant pulse animation rings */}
          <span className="absolute inset-0 rounded-full bg-emerald-300 opacity-30 animate-ping"></span>
          <span className="absolute inset-0 rounded-full bg-emerald-200 opacity-20 animate-ping" style={{ animationDelay: '0.3s' }}></span>
          <span className="absolute inset-0 rounded-full bg-emerald-100 opacity-10 animate-ping" style={{ animationDelay: '0.6s' }}></span>
          
          {/* Enhanced shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/50 to-emerald-600/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </Button>
        
        {/* Enhanced status badge */}
        <Badge className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white text-xs animate-bounce shadow-xl border-0 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></div>
          <span className="font-medium">Online</span>
        </Badge>
        
        {/* Floating decorative elements */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
        
        {/* Enhanced tooltip */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
          <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white px-5 py-4 rounded-2xl text-sm whitespace-nowrap shadow-2xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="w-3 h-3 text-white" />
              </div>
              <div>
                <div className="font-semibold">Fale conosco no WhatsApp</div>
                <div className="text-xs text-slate-300">Resposta rápida garantida</div>
              </div>
            </div>
            <div className="absolute top-full right-8 border-4 border-transparent border-t-slate-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;