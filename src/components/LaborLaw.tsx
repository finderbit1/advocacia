import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Clock, DollarSign, FileText, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SocialSecurityLaw = () => {
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

  const benefits = [
    {
      icon: Shield,
      title: "Rescisão Trabalhista",
      description: "Defesa em rescisões contratuais, cálculo de verbas rescisórias e garantia de todos os direitos trabalhistas.",
      requirements: "Contrato de trabalho",
      success: "98% de aprovação"
    },
    {
      icon: Clock,
      title: "Horas Extras",
      description: "Cobrança de horas extras não pagas, adicional noturno e horas de sobreaviso devidas.",
      requirements: "Jornada superior a 8h/dia",
      success: "95% de sucesso"
    },
    {
      icon: Users,
      title: "FGTS e Multas",
      description: "Recuperação de depósitos FGTS não realizados e multas por demissão sem justa causa.",
      requirements: "Vínculo empregatício",
      success: "92% de aprovação"
    },
    {
      icon: DollarSign,
      title: "Salário e Benefícios",
      description: "Cobrança de salários atrasados, 13º salário, férias proporcionais e benefícios não pagos.",
      requirements: "Relação de emprego",
      success: "90% de aprovação"
    },
    {
      icon: FileText,
      title: "Acidente de Trabalho",
      description: "Defesa em casos de acidente de trabalho, estabilidade e indenizações por danos morais.",
      requirements: "Acidente no trabalho",
      success: "96% de sucesso"
    },
    {
      icon: TrendingUp,
      title: "Assédio Moral",
      description: "Combate ao assédio moral no ambiente de trabalho e indenizações por danos psicológicos.",
      requirements: "Comportamento abusivo",
      success: "88% de indenizações"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Análise Gratuita",
      description: "Avaliamos seu caso sem compromisso e identificamos as melhores estratégias."
    },
    {
      step: "2", 
      title: "Documentação",
      description: "Orientamos sobre todos os documentos necessários e auxiliamos na organização."
    },
    {
      step: "3",
      title: "Protocolo",
      description: "Protocolamos seu pedido no INSS com toda a documentação organizada."
    },
    {
      step: "4",
      title: "Acompanhamento",
      description: "Acompanhamos todo o processo e defendemos seus direitos em todas as instâncias."
    }
  ];

  const testimonials = [
    {
      name: "Roberto Alves",
      benefit: "Rescisão Trabalhista",
      text: "Conseguiram todas as minhas verbas rescisórias em 3 meses. Profissionais muito competentes e atenciosos.",
      result: "R$ 15.000 recuperados"
    },
    {
      name: "Maria Silva",
      benefit: "Horas Extras",
      text: "Após anos trabalhando horas extras não pagas, conseguiram minha indenização. Gratidão eterna!",
      result: "R$ 8.500 de horas extras"
    },
    {
      name: "João Santos",
      benefit: "FGTS e Multas",
      text: "Recuperaram meu FGTS e multas que a empresa não havia depositado. Excelente trabalho da equipe.",
      result: "R$ 12.000 de FGTS + multas"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-blue-50/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(220_84%_60%_/_0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(220_26%_14%_/_0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20 transition-colors">
            <Shield className="w-4 h-4 mr-2" />
            Direito Trabalhista
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Seus Direitos
            <span className="block text-blue-600 animate-text-gradient">Trabalhistas</span>
          </h2>
          <p className="text-xl text-elegant max-w-4xl mx-auto animate-slide-up-delay-1">
            Especialistas em direito trabalhista, atuando em todo o Brasil para defender os direitos dos trabalhadores. 
            Garantimos a proteção dos seus direitos trabalhistas com agilidade e eficiência.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/40 rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:animate-bounce" />
                  </div>
                  <CardTitle className="font-playfair text-lg text-primary group-hover:text-blue-600 transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-elegant text-sm leading-relaxed text-center">
                    {benefit.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="text-xs font-semibold text-blue-700 mb-1">Requisitos:</div>
                      <div className="text-sm text-blue-600">{benefit.requirements}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{benefit.success}</div>
                      <div className="text-xs text-elegant">Taxa de Sucesso</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Como Funciona Nosso Processo</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-blue-600/40 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h4 className="font-semibold text-primary mb-2">{step.title}</h4>
                <p className="text-sm text-elegant leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/40 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-elegant">{testimonial.benefit}</p>
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

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-premium">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Garanta Seus Direitos Trabalhistas
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Não deixe seus direitos trabalhistas para depois. Nossa equipe está pronta para 
              analisar seu caso e garantir a proteção dos seus direitos como trabalhador.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="shadow-gold hover:shadow-glow transition-all hover:scale-105">
                <Shield className="w-5 h-5 mr-2" />
                Consulta Gratuita
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <FileText className="w-5 h-5 mr-2" />
                Análise de Caso
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSecurityLaw;
