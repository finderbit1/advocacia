import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, DollarSign, Clock, Users, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const SuccessCases = () => {
  const [activeCase, setActiveCase] = useState(0);
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

  const cases = [
    {
      id: 1,
      title: "Recuperação de Créditos Empresariais - TechCorp",
      category: "Direito Empresarial",
      description: "Representamos a TechCorp, empresa de tecnologia com 200 funcionários, na recuperação de R$ 2,5 milhões em créditos inadimplentes de 15 clientes corporativos. O caso envolvia contratos complexos de prestação de serviços de TI com cláusulas específicas de pagamento e garantias.",
      result: "R$ 2.500.000",
      duration: "6 meses",
      clientType: "Empresa de Tecnologia",
      challenges: [
        "Múltiplos devedores em 8 estados diferentes",
        "Contratos com cláusulas de confidencialidade complexas",
        "Resistência inicial dos devedores alegando vícios nos serviços",
        "Pressão por parte dos credores para resolução rápida",
        "Necessidade de preservar relacionamento comercial"
      ],
      solutions: [
        "Auditoria completa de todos os contratos e documentação",
        "Estratégia de negociação personalizada para cada devedor",
        "Implementação de acordos de pagamento escalonado",
        "Ações judiciais coordenadas apenas quando necessário",
        "Mediação extrajudicial para preservar relacionamentos"
      ],
      testimonial: {
        text: "O escritório não apenas recuperou nossos créditos, mas também nos ajudou a reestruturar nossos contratos para evitar problemas futuros. Profissionais excepcionais que realmente entendem de negócios!",
        author: "Carlos Mendes, CEO - TechCorp"
      },
      additionalInfo: {
        industry: "Tecnologia da Informação",
        employees: "200 funcionários",
        revenue: "R$ 15 milhões/ano",
        location: "São Paulo, SP"
      }
    },
    {
      id: 2,
      title: "Defesa em Ação Trabalhista Coletiva - GlobalCorp",
      category: "Direito Trabalhista",
      description: "Defendemos a GlobalCorp, multinacional do setor automotivo, em ação coletiva movida por 150 funcionários do sindicato dos metalúrgicos. O caso envolvia reivindicações de horas extras, adicional noturno e equiparação salarial, com valores totais pleiteados de R$ 8 milhões.",
      result: "85% de redução",
      duration: "8 meses",
      clientType: "Multinacional Automotiva",
      challenges: [
        "Ação coletiva com 150 reclamantes representados pelo sindicato",
        "Valores elevados em discussão (R$ 8 milhões pleiteados)",
        "Pressão da mídia e sindicatos por resolução rápida",
        "Complexidade das convenções coletivas aplicáveis",
        "Necessidade de manter operações durante o processo"
      ],
      solutions: [
        "Análise minuciosa de cada caso individual dentro da ação coletiva",
        "Estratégia de defesa unificada baseada em precedentes",
        "Negociação extrajudicial com o sindicato",
        "Implementação de programa de compliance trabalhista",
        "Acordo coletivo que beneficiou ambas as partes"
      ],
      testimonial: {
        text: "O resultado foi excepcional. Reduzimos significativamente nossa exposição trabalhista e ainda implementamos melhorias que aumentaram a satisfação dos funcionários. Uma vitória para todos!",
        author: "Maria Silva, Diretora de RH - GlobalCorp"
      },
      additionalInfo: {
        industry: "Indústria Automotiva",
        employees: "2.500 funcionários",
        revenue: "R$ 500 milhões/ano",
        location: "São Bernardo do Campo, SP"
      }
    },
    {
      id: 3,
      title: "Planejamento Sucessório Complexo - Família Alves",
      category: "Direito Civil",
      description: "Estruturamos um planejamento sucessório completo para a família Alves, proprietária de um grupo empresarial com patrimônio diversificado de R$ 50 milhões. O caso envolvia 4 herdeiros, múltiplas empresas, imóveis e investimentos, com necessidade de otimização tributária e preservação do patrimônio.",
      result: "R$ 50.000.000",
      duration: "12 meses",
      clientType: "Família Empresária",
      challenges: [
        "Patrimônio diversificado: 8 empresas, 15 imóveis, investimentos",
        "4 herdeiros com interesses e perfis diferentes",
        "Necessidade de otimização do ITCMD (Imposto de Transmissão)",
        "Preservação da continuidade dos negócios",
        "Complexidade das estruturas societárias existentes"
      ],
      solutions: [
        "Mapeamento completo e avaliação de todo o patrimônio",
        "Estruturação societária otimizada com holding familiar",
        "Implementação de fundo de investimento familiar",
        "Documentação jurídica robusta (testamentos, doações, acordos)",
        "Planejamento tributário que reduziu ITCMD em 60%"
      ],
      testimonial: {
        text: "O planejamento foi impecável. Não apenas protegemos nosso patrimônio, mas também criamos uma estrutura que permitirá a continuidade dos negócios para as próximas gerações. Tranquilidade total para nossa família!",
        author: "Roberto Alves, Patriarca da Família"
      },
      additionalInfo: {
        industry: "Diversificado (Construção, Imóveis, Investimentos)",
        companies: "8 empresas do grupo",
        properties: "15 imóveis",
        location: "São Paulo, SP"
      }
    },
    {
      id: 4,
      title: "Recuperação Judicial - Construtora Beta",
      category: "Direito Empresarial",
      description: "Assistimos a Construtora Beta, empresa com 30 anos de mercado, em processo de recuperação judicial. A empresa enfrentava dificuldades financeiras devido a atrasos em pagamentos de obras públicas e aumento dos custos de materiais. O processo envolveu renegociação de R$ 25 milhões em dívidas.",
      result: "R$ 25.000.000",
      duration: "18 meses",
      clientType: "Construtora",
      challenges: [
        "Dívidas de R$ 25 milhões com 45 credores diferentes",
        "Obras em andamento que precisavam ser finalizadas",
        "Pressão de fornecedores e funcionários",
        "Complexidade das garantias e fianças bancárias",
        "Necessidade de manter a operação durante o processo"
      ],
      solutions: [
        "Elaboração de plano de recuperação judicial detalhado",
        "Negociação com credores por categorias (bancos, fornecedores, trabalhadores)",
        "Reestruturação operacional e financeira",
        "Implementação de controles internos rigorosos",
        "Acompanhamento judicial especializado"
      ],
      testimonial: {
        text: "Graças ao trabalho excepcional do escritório, conseguimos não apenas sair da recuperação judicial, mas também reestruturar nossa empresa para crescer novamente. Hoje estamos mais fortes que nunca!",
        author: "Ana Costa, Diretora Financeira - Construtora Beta"
      },
      additionalInfo: {
        industry: "Construção Civil",
        employees: "180 funcionários",
        revenue: "R$ 40 milhões/ano",
        location: "Rio de Janeiro, RJ"
      }
    }
  ];

  const currentCase = cases[activeCase];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-cream to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(45_86%_62%_/_0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(220_26%_14%_/_0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
            <Award className="w-4 h-4 mr-2" />
            Casos de Sucesso
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Resultados que
            <span className="block text-secondary animate-text-gradient">Falam por Si</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto animate-slide-up-delay-1">
            Cada caso é único, mas nosso compromisso com a excelência é constante
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Case Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {cases.map((caseItem, index) => (
                <Card
                  key={caseItem.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-premium ${
                    activeCase === index
                      ? 'shadow-gold border-secondary bg-secondary/5'
                      : 'hover:shadow-elegant border-border'
                  }`}
                  onClick={() => setActiveCase(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeCase === index
                          ? 'bg-secondary text-primary shadow-glow'
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <span className="font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 text-xs">
                          {caseItem.category}
                        </Badge>
                        <h3 className="font-semibold text-primary mb-2 line-clamp-2">
                          {caseItem.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-elegant">
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {caseItem.result}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {caseItem.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Case Details */}
          <div className="lg:col-span-2">
            <Card className="shadow-premium border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Case Header */}
                <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge className="mb-3 bg-secondary/20 text-secondary border-secondary/30">
                        {currentCase.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{currentCase.title}</h3>
                      <div className="flex items-center gap-6 text-primary-foreground/90">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5" />
                          {currentCase.clientType}
                        </div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-5 h-5" />
                          {currentCase.result}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          {currentCase.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    {currentCase.description}
                  </p>
                </div>

                {/* Case Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Challenges */}
                    <div>
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        Desafios Enfrentados
                      </h4>
                      <ul className="space-y-3">
                        {currentCase.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3 text-elegant">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        Soluções Implementadas
                      </h4>
                      <ul className="space-y-3">
                        {currentCase.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-3 text-elegant">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-secondary font-bold text-lg">"</span>
                      </div>
                      <div>
                        <p className="text-elegant italic mb-3 leading-relaxed">
                          "{currentCase.testimonial.text}"
                        </p>
                        <div className="text-sm font-semibold text-primary">
                          — {currentCase.testimonial.author}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" className="shadow-gold hover:shadow-glow transition-all hover:scale-105">
              Quero um Resultado Similar
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Ver Mais Casos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
