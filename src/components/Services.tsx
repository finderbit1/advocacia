import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Briefcase, FileText, Shield, Gavel, Scale, Handshake, Award, BookOpen, Zap, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description: "Consultoria jurídica completa para empresas, contratos, fusões e aquisições, compliance e reestruturações societárias.",
      gradient: "from-blue-500 to-blue-600",
      hoverGradient: "from-blue-600 to-blue-700",
      stats: "450+ empresas atendidas",
      cases: "R$ 2.5M em recuperações",
      time: "15+ anos de experiência"
    },
    {
      icon: Users,
      title: "Direito Trabalhista",
      description: "Assessoria em relações de trabalho, rescisões, ações trabalhistas e compliance trabalhista para empresas.",
      gradient: "from-green-500 to-green-600",
      hoverGradient: "from-green-600 to-green-700",
      stats: "1.200+ casos resolvidos",
      cases: "98% de sucesso",
      time: "Resposta em 24h"
    },
    {
      icon: Briefcase,
      title: "Direito Civil",
      description: "Contratos civis, responsabilidade civil, direito de família, sucessões e questões patrimoniais.",
      gradient: "from-purple-500 to-purple-600",
      hoverGradient: "from-purple-600 to-purple-700",
      stats: "800+ processos",
      cases: "R$ 1.8M recuperados",
      time: "Atendimento 24/7"
    },
    {
      icon: FileText,
      title: "Direito Tributário",
      description: "Planejamento tributário, defesa fiscal, recursos administrativos e judiciais em matéria tributária.",
      gradient: "from-orange-500 to-orange-600",
      hoverGradient: "from-orange-600 to-orange-700",
      stats: "R$ 5.2M economizados",
      cases: "300+ empresas",
      time: "Especialistas OAB"
    },
    {
      icon: Shield,
      title: "Direito Penal",
      description: "Defesa criminal, consultoria preventiva, compliance penal e acompanhamento em inquéritos policiais.",
      gradient: "from-red-500 to-red-600",
      hoverGradient: "from-red-600 to-red-700",
      stats: "95% de absolvições",
      cases: "200+ casos",
      time: "Plantão 24h"
    },
    {
      icon: Gavel,
      title: "Consultoria Jurídica",
      description: "Assessoria jurídica preventiva, análise de riscos, pareceres técnicos e suporte jurídico estratégico.",
      gradient: "from-indigo-500 to-indigo-600",
      hoverGradient: "from-indigo-600 to-indigo-700",
      stats: "100+ pareceres/mês",
      cases: "R$ 3M em riscos evitados",
      time: "Consultoria preventiva"
    }
  ];

  return (
    <section id="services" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados com foco na excelência e resultados efetivos para nossos clientes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 group animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:${service.hoverGradient} relative overflow-hidden`}>
                    <IconComponent className="h-8 w-8 text-white group-hover:animate-bounce relative z-10" />
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                  <CardTitle className="font-playfair text-xl text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-elegant text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Estatísticas */}
                  <div className="space-y-2 pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-secondary" />
                      <span className="font-semibold text-primary">{service.stats}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-secondary" />
                      <span className="font-semibold text-primary">{service.cases}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-secondary" />
                      <span className="font-semibold text-primary">{service.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;