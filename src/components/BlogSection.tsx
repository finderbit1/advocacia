import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const BlogSection = () => {
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

  const articles = [
    {
      id: 1,
      title: "Novas Regras do Trabalho Remoto: O que Mudou em 2024",
      excerpt: "A Lei 14.442/2022 trouxe mudanças significativas para o trabalho remoto. Entenda as principais alterações na legislação trabalhista e como isso afeta empresas e funcionários, incluindo questões de controle de jornada, custos e responsabilidades.",
      category: "Direito Trabalhista",
      readTime: "8 min",
      publishDate: "15 Jan 2024",
      image: "/api/placeholder/400/250",
      featured: true,
      tags: ["Trabalho Remoto", "Lei 14.442", "Home Office"],
      author: "Dr. Maria Silva",
      views: 1250,
      content: "A pandemia acelerou a adoção do trabalho remoto, mas foi apenas em 2022 que o Brasil regulamentou definitivamente essa modalidade através da Lei 14.442. As principais mudanças incluem: 1) Controle de jornada obrigatório mesmo no home office; 2) Responsabilidade da empresa pelos custos de infraestrutura; 3) Direito à desconexão após o horário de trabalho; 4) Necessidade de acordo individual ou coletivo para implementação. As empresas precisam se adequar rapidamente para evitar passivos trabalhistas."
    },
    {
      id: 2,
      title: "Planejamento Tributário para Empresas: Estratégias Legais",
      excerpt: "Descubra como estruturar seu planejamento tributário de forma legal e eficiente, reduzindo custos sem infringir a legislação. Análise das principais estratégias utilizadas por empresas de médio e grande porte.",
      category: "Direito Tributário",
      readTime: "12 min",
      publishDate: "12 Jan 2024",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Tributário", "Planejamento", "Empresas"],
      author: "Dr. João Santos",
      views: 890,
      content: "O planejamento tributário é uma ferramenta essencial para empresas que buscam otimizar sua carga fiscal de forma legal. As principais estratégias incluem: 1) Análise da melhor forma de tributação (Lucro Real vs Presumido vs Simples); 2) Estruturação societária adequada; 3) Aproveitamento de incentivos fiscais; 4) Operações de reestruturação tributária; 5) Compliance fiscal preventivo. É fundamental que o planejamento seja feito com antecedência e sempre dentro da legalidade."
    },
    {
      id: 3,
      title: "Contratos Digitais: Validade Jurídica e Boas Práticas",
      excerpt: "Saiba como garantir a validade jurídica dos contratos digitais e quais são as melhores práticas para sua empresa. Análise da legislação atual e tendências do mercado.",
      category: "Direito Civil",
      readTime: "6 min",
      publishDate: "10 Jan 2024",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Contratos", "Digital", "Validade"],
      author: "Dra. Ana Costa",
      views: 650,
      content: "A digitalização dos contratos trouxe agilidade, mas também novos desafios jurídicos. Para garantir validade, é essencial: 1) Identificação segura das partes; 2) Assinatura digital qualificada ou certificação ICP-Brasil; 3) Integridade do documento; 4) Armazenamento seguro; 5) Conformidade com a LGPD. As melhores práticas incluem uso de plataformas certificadas e backup em múltiplos locais."
    },
    {
      id: 4,
      title: "LGPD na Prática: Como Implementar na Sua Empresa",
      excerpt: "Guia prático para implementar a LGPD em sua empresa, com dicas essenciais e checklists para compliance. Passo a passo para adequação completa à legislação.",
      category: "Direito Digital",
      readTime: "15 min",
      publishDate: "8 Jan 2024",
      image: "/api/placeholder/400/250",
      featured: true,
      tags: ["LGPD", "Compliance", "Privacidade"],
      author: "Dr. Pedro Lima",
      views: 2100,
      content: "A LGPD exige que empresas implementem um programa robusto de proteção de dados. O processo inclui: 1) Mapeamento de dados pessoais; 2) Análise de base legal para tratamento; 3) Implementação de medidas técnicas e organizacionais; 4) Treinamento de colaboradores; 5) Criação de procedimentos para exercício de direitos; 6) Nomeação de DPO quando necessário; 7) Realização de DPIAs; 8) Implementação de plano de resposta a incidentes. A adequação é um processo contínuo que requer monitoramento constante."
    },
    {
      id: 5,
      title: "Reforma Trabalhista: Impactos Após 7 Anos",
      excerpt: "Análise completa dos impactos da reforma trabalhista após 7 anos de vigência e suas consequências práticas para empresas e trabalhadores.",
      category: "Direito Trabalhista",
      readTime: "10 min",
      publishDate: "5 Jan 2024",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Reforma", "Trabalhista", "Análise"],
      author: "Dra. Carla Mendes",
      views: 780,
      content: "Após 7 anos da Lei 13.467/2017, é possível avaliar seus impactos reais. Principais mudanças observadas: 1) Redução de 40% no número de ações trabalhistas; 2) Aumento da negociação coletiva; 3) Flexibilização de jornada de trabalho; 4) Mudanças no sistema de terceirização; 5) Novas regras para trabalho intermitente. As empresas que se adequaram corretamente conseguiram reduzir significativamente seus passivos trabalhistas."
    },
    {
      id: 6,
      title: "Startups e Investimentos: Aspectos Jurídicos Essenciais",
      excerpt: "Conheça os principais aspectos jurídicos que toda startup deve considerar ao buscar investimentos e crescer. Guia completo para empreendedores.",
      category: "Direito Empresarial",
      readTime: "9 min",
      publishDate: "3 Jan 2024",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Startups", "Investimentos", "Empresarial"],
      author: "Dr. Roberto Alves",
      views: 920,
      content: "Startups que buscam investimento precisam estar juridicamente preparadas. Aspectos essenciais incluem: 1) Estrutura societária adequada (SA vs LTDA); 2) Acordos de acionistas bem estruturados; 3) Proteção de propriedade intelectual; 4) Compliance regulatório; 5) Contratos de trabalho adequados; 6) Estruturação de stock options; 7) Due diligence preparatória; 8) Acordos de investimento claros. A preparação jurídica adequada pode ser decisiva para o sucesso da captação."
    },
    {
      id: 7,
      title: "Compliance Empresarial: Como Implementar um Programa Eficaz",
      excerpt: "Saiba como estruturar um programa de compliance robusto em sua empresa, reduzindo riscos e aumentando a governança corporativa.",
      category: "Direito Empresarial",
      readTime: "11 min",
      publishDate: "1 Jan 2024",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Compliance", "Governança", "Riscos"],
      author: "Dr. Fernando Oliveira",
      views: 750,
      content: "Um programa de compliance eficaz deve incluir: 1) Mapeamento de riscos específicos da empresa; 2) Código de conduta e políticas claras; 3) Treinamento regular de colaboradores; 4) Canais de denúncia seguros; 5) Investigação de irregularidades; 6) Monitoramento contínuo; 7) Auditoria interna; 8) Relatórios para alta gestão. A implementação deve ser gradual e adaptada à realidade de cada empresa."
    },
    {
      id: 8,
      title: "Mediação e Arbitragem: Alternativas ao Judiciário",
      excerpt: "Entenda como a mediação e arbitragem podem ser alternativas mais rápidas e eficientes para resolução de conflitos empresariais.",
      category: "Direito Civil",
      readTime: "7 min",
      publishDate: "28 Dez 2023",
      image: "/api/placeholder/400/250",
      featured: false,
      tags: ["Mediação", "Arbitragem", "Conflitos"],
      author: "Dra. Patricia Santos",
      views: 680,
      content: "A mediação e arbitragem oferecem vantagens significativas: 1) Rapidez na resolução (meses vs anos); 2) Confidencialidade total; 3) Especialização dos árbitros; 4) Flexibilidade de procedimentos; 5) Menor custo; 6) Preservação de relacionamentos. Para empresas, essas alternativas são especialmente vantajosas em disputas comerciais, societárias e contratuais. A cláusula arbitral deve ser incluída nos contratos desde o início."
    }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-cream/30 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(45_86%_62%_/_0.05)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(220_26%_14%_/_0.05)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors">
            <BookOpen className="w-4 h-4 mr-2" />
            Conhecimento Jurídico
          </Badge>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary mb-6 animate-slide-up">
            Artigos e
            <span className="block text-secondary animate-text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto animate-slide-up-delay-1">
            Mantenha-se atualizado com as últimas novidades do mundo jurídico e dicas práticas dos nossos especialistas
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-secondary" />
            Artigos em Destaque
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card
                key={article.id}
                className="group cursor-pointer shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-primary/40" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-secondary text-primary border-0">
                    Destaque
                  </Badge>
                  <Badge variant="outline" className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-elegant mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {article.views} visualizações
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-elegant line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-elegant">
                      Por <span className="font-semibold text-primary">{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-secondary" />
            Últimos Artigos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card
                key={article.id}
                className="group cursor-pointer shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-primary/40" />
                  </div>
                  <Badge variant="outline" className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-xs">
                    {article.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 text-xs text-elegant mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-elegant text-sm line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-elegant">
                      Por <span className="font-semibold text-primary">{article.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                      Ler
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 md:p-12 text-primary-foreground shadow-premium">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Quer Receber Nossos Artigos?
            </h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e receba os melhores insights jurídicos diretamente no seu email
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-xl border-0 text-primary placeholder:text-primary/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button variant="secondary" size="lg" className="shadow-gold hover:shadow-glow transition-all hover:scale-105">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
