import { useState, useRef, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
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

  const faqs = [
    {
      id: "1",
      question: "Quanto custa uma consulta jurídica?",
      answer: "Nossas consultas têm valores transparentes e acessíveis. Consultas individuais custam R$ 300 (1 hora) ou R$ 500 (2 horas). Para empresas, oferecemos pacotes mensais a partir de R$ 1.500 para consultoria básica, R$ 3.500 para assessoria completa e R$ 5.000 para suporte jurídico 24/7. Casos complexos são avaliados individualmente. Oferecemos também honorários de sucumbência em ações judiciais de grande valor.",
      category: "Valores",
      popular: true
    },
    {
      id: "2", 
      question: "Quanto tempo demora para resolver um processo judicial?",
      answer: "O prazo varia conforme a complexidade e o tipo de processo. Ações de cobrança simples: 6-12 meses. Ações trabalhistas: 1-2 anos. Processos cíveis complexos: 2-4 anos. Recuperação judicial: 1-3 anos. Trabalhamos sempre com agilidade, priorizando acordos extrajudiciais quando possível. Mantemos você informado mensalmente sobre o andamento e prazos importantes.",
      category: "Prazos"
    },
    {
      id: "3",
      question: "Vocês atendem casos em todo o Brasil?",
      answer: "Sim! Atendemos clientes em todo o território nacional. Temos escritórios físicos em São Paulo (sede), Rio de Janeiro e Brasília. Para outros estados, trabalhamos através de nossa rede de correspondentes jurídicos credenciados. Também oferecemos atendimento online via videoconferência para consultas e reuniões, garantindo a mesma qualidade do atendimento presencial.",
      category: "Atendimento"
    },
    {
      id: "4",
      question: "Como funciona o atendimento de emergência 24h?",
      answer: "Oferecemos plantão jurídico 24h para casos urgentes como: prisões, medidas cautelares, bloqueios bancários, ações trabalhistas urgentes, questões de família emergenciais. A taxa de emergência é de R$ 800 para atendimento imediato. Nossa equipe de plantão está sempre disponível pelo WhatsApp (11) 99999-8888 ou telefone (11) 3333-4444. Para emergências, respondemos em até 30 minutos.",
      category: "Emergência",
      popular: true
    },
    {
      id: "5",
      question: "Vocês trabalham com honorários de sucumbência?",
      answer: "Sim! Trabalhamos com honorários de sucumbência em ações judiciais de valor significativo (acima de R$ 50.000). Isso significa que você só paga nossos honorários se ganharmos o caso. A porcentagem varia de 10% a 20% do valor da causa, dependendo da complexidade. Também oferecemos financiamento de custas processuais para clientes qualificados. Avaliamos cada caso individualmente.",
      category: "Pagamento"
    },
    {
      id: "6",
      question: "Qual a taxa de sucesso do escritório?",
      answer: "Nossa taxa de sucesso é de 98%, resultado de 25 anos de experiência e uma equipe altamente especializada. Trabalhamos apenas com casos que temos convicção de sucesso, sempre priorizando a qualidade sobre a quantidade. Nossos números: 1.200+ casos resolvidos, 98% de aprovação dos clientes, 4.9/5 de avaliação média. Temos especialistas em cada área do direito.",
      category: "Resultados"
    },
    {
      id: "7",
      question: "Como posso acompanhar meu processo?",
      answer: "Oferecemos múltiplas formas de acompanhamento: 1) Portal online exclusivo com acesso 24h; 2) Relatórios mensais detalhados por email; 3) WhatsApp dedicado para seu caso; 4) Reuniões presenciais ou online mensais; 5) Notificações automáticas sobre prazos e movimentações. Você sempre saberá exatamente o que está acontecendo com seu processo.",
      category: "Acompanhamento"
    },
    {
      id: "8",
      question: "Vocês oferecem consultoria preventiva para empresas?",
      answer: "Sim! Nossa consultoria preventiva inclui: análise de contratos, compliance trabalhista e fiscal, auditoria jurídica, treinamentos para equipe, revisão de políticas internas, análise de riscos, due diligence, estruturação societária. Pacotes mensais a partir de R$ 2.500. Acreditamos que prevenir é mais eficiente e econômico que remediar. Já evitamos R$ 15 milhões em passivos para nossos clientes.",
      category: "Prevenção"
    },
    {
      id: "9",
      question: "Qual a diferença entre os tipos de consultoria oferecidos?",
      answer: "Oferecemos 3 modalidades: 1) Consultoria Básica (R$ 1.500/mês): 10h mensais, consultas por email, revisão de contratos simples; 2) Consultoria Completa (R$ 3.500/mês): 20h mensais, atendimento prioritário, compliance básico; 3) Suporte Jurídico 24/7 (R$ 5.000/mês): atendimento ilimitado, plantão, auditoria completa, treinamentos. Todas incluem relatórios mensais e portal de acompanhamento.",
      category: "Valores"
    },
    {
      id: "10",
      question: "Como funciona o processo de contratação?",
      answer: "O processo é simples: 1) Contato inicial (telefone, WhatsApp ou formulário); 2) Consulta preliminar gratuita (30 min) para entender sua necessidade; 3) Proposta personalizada com valores e prazos; 4) Assinatura do contrato e pagamento; 5) Início imediato dos trabalhos. Todo o processo pode ser feito online. Garantimos confidencialidade total desde o primeiro contato.",
      category: "Contratação"
    },
    {
      id: "11",
      question: "Vocês trabalham com empresas de todos os portes?",
      answer: "Sim! Atendemos desde microempresas até multinacionais. Para MEIs e microempresas: pacotes especiais a partir de R$ 800/mês. Pequenas empresas (até 50 funcionários): R$ 1.500-3.500/mês. Médias empresas (50-500 funcionários): R$ 3.500-8.000/mês. Grandes empresas: valores personalizados. Temos experiência com todos os setores: tecnologia, indústria, comércio, serviços, construção, saúde, educação.",
      category: "Atendimento"
    },
    {
      id: "12",
      question: "Quais documentos preciso ter para iniciar um processo?",
      answer: "Os documentos variam conforme o tipo de caso, mas geralmente incluem: 1) Documentos pessoais (RG, CPF, comprovante de residência); 2) Contratos relacionados ao caso; 3) Comprovantes de pagamento ou débito; 4) Comunicações (emails, cartas, mensagens); 5) Testemunhas (nome e contato); 6) Documentos da empresa (se aplicável). Na consulta inicial, orientamos exatamente quais documentos são necessários para seu caso específico.",
      category: "Documentação"
    }
  ];

  const categories = ["Todos", "Valores", "Prazos", "Atendimento", "Emergência", "Pagamento", "Resultados", "Acompanhamento", "Prevenção", "Contratação", "Documentação"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredFAQs = selectedCategory === "Todos" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-cream/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(45_86%_62%_/_0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,hsl(220_26%_14%_/_0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Tire Suas
            <span className="block text-secondary animate-text-gradient">Dúvidas</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto animate-slide-up-delay-1">
            Respostas claras e diretas para as principais questões sobre nossos serviços
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-secondary text-primary shadow-gold hover:shadow-glow"
                  : "hover:bg-secondary/10 hover:border-secondary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-border rounded-2xl shadow-elegant hover:shadow-premium transition-all duration-300 bg-white/50 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-secondary font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                          {faq.question}
                        </h3>
                        {faq.popular && (
                          <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-xs">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {faq.category}
                      </Badge>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-elegant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-primary-foreground shadow-premium">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Não encontrou sua resposta?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer qualquer dúvida. Entre em contato conosco agora mesmo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg" className="shadow-gold hover:shadow-glow transition-all hover:scale-105 group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group">
                <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Ligar Agora
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
