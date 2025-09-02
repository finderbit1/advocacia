import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Pill, Stethoscope, FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const MedicalLaw = () => {
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

  const services = [
    {
      icon: Pill,
      title: "Contratos e Obrigações",
      description: "Defesa em questões contratuais, rescisões, inadimplemento e obrigações de fazer, não fazer e dar.",
      cases: "800+ contratos analisados",
      success: "95% de resolução"
    },
    {
      icon: Stethoscope,
      title: "Responsabilidade Civil",
      description: "Ações por danos morais e materiais, responsabilidade por produtos defeituosos e acidentes diversos.",
      cases: "500+ casos de danos",
      success: "92% de indenizações"
    },
    {
      icon: Shield,
      title: "Direito do Consumidor",
      description: "Defesa do consumidor contra práticas abusivas, vícios de produtos, serviços e relações de consumo.",
      cases: "1.200+ casos consumeristas",
      success: "98% de vitórias"
    },
    {
      icon: Heart,
      title: "Família e Sucessões",
      description: "Divórcios, pensão alimentícia, guarda de filhos, inventários e partilhas de bens.",
      cases: "600+ processos familiares",
      success: "90% de acordo"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      case: "Contrato de compra e venda",
      text: "Resolveram minha questão contratual de forma rápida e eficiente. Profissionais muito competentes!",
      result: "R$ 50.000 recuperados"
    },
    {
      name: "João Silva",
      case: "Danos morais",
      text: "Conseguiram minha indenização por danos morais em tempo recorde. Excelente atendimento!",
      result: "R$ 25.000 de indenização"
    },
    {
      name: "Ana Costa",
      case: "Direito do consumidor",
      text: "Defenderam meus direitos como consumidora com muita competência. Recomendo!",
      result: "Produto trocado + indenização"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-red-50/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(0_84%_60%_/_0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(220_26%_14%_/_0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20 transition-colors">
            <Heart className="w-4 h-4 mr-2" />
            Direito Civil e Consumidor
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Defendemos seus
            <span className="block text-red-600 animate-text-gradient">Direitos Civis</span>
          </h2>
          <p className="text-xl text-elegant max-w-4xl mx-auto animate-slide-up-delay-1">
            Especialistas em direito civil e do consumidor, atuando em todo o Brasil para garantir seus direitos em questões 
            contratuais, responsabilidade civil, danos morais e materiais. Sua proteção é nossa prioridade!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500/20 to-red-600/40 rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-red-600 group-hover:animate-bounce" />
                  </div>
                  <CardTitle className="font-playfair text-lg text-primary group-hover:text-red-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-elegant text-sm leading-relaxed text-center">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">{service.cases}</div>
                      <div className="text-xs text-elegant">Casos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{service.success}</div>
                      <div className="text-xs text-elegant">Taxa</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Casos de Sucesso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/40 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-elegant">{testimonial.case}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-elegant italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">{testimonial.result}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-premium">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de Ajuda Jurídica?
            </h3>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Se você tem uma questão jurídica urgente ou precisa de orientação legal, 
              nossa equipe está disponível para atendimento prioritário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="shadow-gold hover:shadow-glow transition-all hover:scale-105">
                <Heart className="w-5 h-5 mr-2" />
                Atendimento Prioritário
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                <FileText className="w-5 h-5 mr-2" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalLaw;
