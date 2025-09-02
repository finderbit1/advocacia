import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Briefcase, FileText, Shield, Gavel } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description: "Consultoria jurídica completa para empresas, contratos, fusões e aquisições, compliance e reestruturações societárias."
    },
    {
      icon: Users,
      title: "Direito Trabalhista",
      description: "Assessoria em relações de trabalho, rescisões, ações trabalhistas e compliance trabalhista para empresas."
    },
    {
      icon: Briefcase,
      title: "Direito Civil",
      description: "Contratos civis, responsabilidade civil, direito de família, sucessões e questões patrimoniais."
    },
    {
      icon: FileText,
      title: "Direito Tributário",
      description: "Planejamento tributário, defesa fiscal, recursos administrativos e judiciais em matéria tributária."
    },
    {
      icon: Shield,
      title: "Direito Penal",
      description: "Defesa criminal, consultoria preventiva, compliance penal e acompanhamento em inquéritos policiais."
    },
    {
      icon: Gavel,
      title: "Consultoria Jurídica",
      description: "Assessoria jurídica preventiva, análise de riscos, pareceres técnicos e suporte jurídico estratégico."
    }
  ];

  return (
    <section className="py-20 gradient-subtle">
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
              <Card key={index} className="shadow-elegant hover:shadow-deep transition-all duration-300 hover:-translate-y-1 border-0">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-gold rounded-full flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-playfair text-xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-elegant text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
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