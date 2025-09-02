import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Smartphone, Target, Heart, Shield, MessageCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Differentials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const differentials = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Possuímos um time de especialistas nas mais variadas áreas do direito. Isso significa que dedicamos todas nossas energias para entregar solução e tranquilidade àqueles que precisam do nosso apoio.",
      features: [
        "Advogados especializados",
        "Certificações em áreas específicas",
        "Atualização constante da legislação",
        "Experiência comprovada"
      ],
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "100% Digital",
      description: "Nosso escritório possui ferramentas capazes de viabilizar atendimento de excelência totalmente digital. Temos estrutura física, mas cada vez mais clientes tem preferido nos contatar de forma online, com um simples clique na tela do celular.",
      features: [
        "Atendimento online 24/7",
        "Portal do cliente exclusivo",
        "Assinatura digital de documentos",
        "Videoconferências seguras"
      ],
      color: "green"
    },
    {
      icon: Target,
      title: "Entregamos Resultados",
      description: "Não medimos esforços para trazer a melhor solução para o seu problema. Nossa alta taxa de sucesso comprova nosso compromisso com a excelência e resultados efetivos.",
      features: [
        "Alta taxa de sucesso",
        "Centenas de casos resolvidos",
        "Milhões recuperados",
        "Resultados mensuráveis"
      ],
      color: "purple"
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Você não é e nunca será apenas mais um cliente. Cada história importa e sentimos na pele a dor de nossos clientes. Receba atendimento individualizado e humanizado.",
      features: [
        "Atendimento humanizado",
        "Advogado dedicado por caso",
        "Comunicação direta e transparente",
        "Acompanhamento personalizado"
      ],
      color: "red"
    },
    {
      icon: Shield,
      title: "Acompanhamento Integral",
      description: "Nós não deixamos você na mão. Vamos até o final para te trazer a melhor solução, independentemente de quão longo seja o caminho. Acompanhamos cada etapa do processo.",
      features: [
        "Acompanhamento completo",
        "Relatórios mensais detalhados",
        "Suporte em todas as instâncias",
        "Compromisso até o final"
      ],
      color: "orange"
    },
    {
      icon: MessageCircle,
      title: "Direto no seu WhatsApp",
      description: "Você contata com alguém de nossa equipe diretamente via WhatsApp. Não ficará com nenhuma dúvida. Atendimento rápido, direto e eficiente.",
      features: [
        "WhatsApp dedicado por caso",
        "Resposta em até 5 minutos",
        "Suporte 24 horas",
        "Comunicação instantânea"
      ],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500/20 to-blue-600/40",
        icon: "text-blue-600",
        badge: "bg-blue-500/10 text-blue-600 border-blue-500/20"
      },
      green: {
        bg: "from-green-500/20 to-green-600/40", 
        icon: "text-green-600",
        badge: "bg-green-500/10 text-green-600 border-green-500/20"
      },
      purple: {
        bg: "from-purple-500/20 to-purple-600/40",
        icon: "text-purple-600", 
        badge: "bg-purple-500/10 text-purple-600 border-purple-500/20"
      },
      red: {
        bg: "from-red-500/20 to-red-600/40",
        icon: "text-red-600",
        badge: "bg-red-500/10 text-red-600 border-red-500/20"
      },
      orange: {
        bg: "from-orange-500/20 to-orange-600/40",
        icon: "text-orange-600",
        badge: "bg-orange-500/10 text-orange-600 border-orange-500/20"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-cream/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(45_86%_62%_/_0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
            <Target className="w-4 h-4 mr-2" />
            Nossos Diferenciais
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Por que escolher
            <span className="block text-secondary animate-text-gradient">nosso escritório?</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto animate-slide-up-delay-1">
            Conheça os diferenciais que nos tornam a melhor escolha para defender seus direitos e garantir resultados excepcionais
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            const colorClasses = getColorClasses(differential.color);
            
            return (
              <Card
                key={index}
                className="group cursor-pointer shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${colorClasses.bg} rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                      <IconComponent className={`h-10 w-10 ${colorClasses.icon} group-hover:animate-bounce`} />
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {differential.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-elegant leading-relaxed mb-6 text-center">
                    {differential.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {differential.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${colorClasses.icon.replace('text-', 'bg-')} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm text-elegant">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badge */}
                  <div className="mt-6 text-center">
                    <Badge className={`${colorClasses.badge} hover:opacity-80 transition-opacity`}>
                      Diferencial Exclusivo
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-primary-foreground shadow-premium">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experimente Nossos Diferenciais
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Agende uma consulta gratuita e descubra como nossos diferenciais podem fazer a diferença no seu caso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Users className="w-5 h-5" />
                <span className="font-medium">Especialistas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Target className="w-5 h-5" />
                <span className="font-medium">Alta Taxa de Sucesso</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Atendimento 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
