import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Star, Trophy, CheckCircle, Users, Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Certifications = () => {
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

  const certifications = [
    {
      id: 1,
      title: "Certificação OAB - Excelência Profissional",
      issuer: "Ordem dos Advogados do Brasil",
      year: "2023",
      description: "Reconhecimento por excelência na prestação de serviços jurídicos e compromisso com a ética profissional.",
      icon: Award,
      category: "Profissional",
      verified: true
    },
    {
      id: 2,
      title: "ISO 9001:2015 - Gestão da Qualidade",
      issuer: "Bureau Veritas",
      year: "2022",
      description: "Certificação internacional que comprova nosso sistema de gestão da qualidade e melhoria contínua.",
      icon: Shield,
      category: "Qualidade",
      verified: true
    },
    {
      id: 3,
      title: "Prêmio Melhor Escritório de Advocacia",
      issuer: "Revista Jurídica Nacional",
      year: "2023",
      description: "Reconhecimento como um dos melhores escritórios de advocacia do país em pesquisa nacional.",
      icon: Trophy,
      category: "Reconhecimento",
      verified: true
    },
    {
      id: 4,
      title: "Certificação em Compliance Empresarial",
      issuer: "Instituto Brasileiro de Compliance",
      year: "2023",
      description: "Especialização em programas de compliance e integridade corporativa para empresas.",
      icon: CheckCircle,
      category: "Especialização",
      verified: true
    },
    {
      id: 5,
      title: "Prêmio Inovação Jurídica",
      issuer: "Associação Brasileira de Advogados",
      year: "2022",
      description: "Reconhecimento por inovação no uso de tecnologia e metodologias modernas na advocacia.",
      icon: Star,
      category: "Inovação",
      verified: true
    },
    {
      id: 6,
      title: "Certificação em Mediação e Arbitragem",
      issuer: "Centro de Arbitragem e Mediação",
      year: "2023",
      description: "Especialização em métodos alternativos de resolução de conflitos e mediação empresarial.",
      icon: Users,
      category: "Mediação",
      verified: true
    }
  ];

  const stats = [
    {
      icon: Award,
      value: "15+",
      label: "Certificações",
      description: "Reconhecimentos profissionais"
    },
    {
      icon: Trophy,
      value: "8",
      label: "Prêmios",
      description: "Conquistados nos últimos 3 anos"
    },
    {
      icon: Users,
      value: "100%",
      label: "Equipe Certificada",
      description: "Todos os advogados especializados"
    },
    {
      icon: Calendar,
      value: "25+",
      label: "Anos",
      description: "De experiência e tradição"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-cream/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(45_86%_62%_/_0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,hsl(220_26%_14%_/_0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            Certificações e Prêmios
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Reconhecimento
            <span className="block text-secondary animate-text-gradient">Profissional</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto animate-slide-up-delay-1">
            Nossa excelência é reconhecida por instituições renomadas e clientes satisfeitos
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-glow">
                  <IconComponent className="h-10 w-10 text-secondary group-hover:animate-bounce" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {stat.value}
                </div>
                <div className="font-semibold text-primary mb-1">{stat.label}</div>
                <div className="text-sm text-elegant">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <Card
                key={cert.id}
                className="group cursor-pointer shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-glow">
                      <IconComponent className="h-8 w-8 text-secondary group-hover:animate-pulse" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="text-xs">
                        {cert.category}
                      </Badge>
                      <div className="text-sm font-semibold text-secondary">
                        {cert.year}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-elegant mb-4 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Issuer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-sm font-semibold text-primary">{cert.issuer}</div>
                      {cert.verified && (
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <CheckCircle className="w-3 h-3" />
                          Verificado
                        </div>
                      )}
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-4 h-4 text-secondary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-primary-foreground shadow-premium">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Confie em Nossa Experiência
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nossas certificações e prêmios comprovam nosso compromisso com a excelência e resultados excepcionais
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="w-5 h-5" />
                <span className="font-medium">15+ Certificações</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">8 Prêmios</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Shield className="w-5 h-5" />
                <span className="font-medium">100% Verificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

