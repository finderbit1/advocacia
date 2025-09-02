import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Award, TrendingUp, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO - TechCorp Brasil",
      company: "Empresa de Tecnologia",
      content: "Excelente atendimento e resultados excepcionais. O escritório resolveu uma questão empresarial complexa de R$ 2.5 milhões com total profissionalismo. Recomendo para qualquer empresa que precise de assessoria jurídica de qualidade.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      result: "R$ 2.5M recuperados",
      time: "6 meses"
    },
    {
      name: "João Santos",
      role: "Diretor Comercial",
      company: "Indústria Metalúrgica",
      content: "Assessoria jurídica de primeira qualidade. Equipe competente, ágil e sempre disponível para esclarecer dúvidas. Resolveram nosso problema trabalhista em tempo recorde, evitando uma multa de R$ 800 mil.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      result: "R$ 800K economizados",
      time: "2 meses"
    },
    {
      name: "Ana Costa",
      role: "Empreendedora",
      company: "Rede de Farmácias",
      content: "Confiança total no trabalho realizado. Superaram minhas expectativas em todos os aspectos do processo jurídico. A consultoria preventiva evitou problemas que poderiam custar milhões à nossa empresa.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      result: "R$ 1.2M em riscos evitados",
      time: "Consultoria contínua"
    },
    {
      name: "Carlos Mendes",
      role: "Diretor Financeiro",
      company: "Construtora",
      content: "O escritório nos ajudou a estruturar uma fusão complexa de R$ 50 milhões. Profissionalismo exemplar, conhecimento técnico excepcional e resultados que superaram todas as expectativas.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      result: "Fusão R$ 50M concluída",
      time: "8 meses"
    },
    {
      name: "Patricia Lima",
      role: "Sócia-Proprietária",
      company: "Clínica Médica",
      content: "Atendimento humanizado e resultados excepcionais. Resolveram nossa questão de direito médico com maestria, protegendo nossa reputação e evitando danos irreparáveis ao negócio.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      result: "Caso resolvido favoravelmente",
      time: "4 meses"
    },
    {
      name: "Roberto Alves",
      role: "Presidente",
      company: "Grupo Empresarial",
      content: "Parceria de longa data que sempre entrega resultados. A equipe jurídica é parte estratégica do nosso negócio, oferecendo soluções inovadoras e preventivas que agregam valor real.",
      rating: 5,
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      result: "Parceria de 8 anos",
      time: "Consultoria estratégica"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            O que nossos 
            <span className="text-secondary block">clientes dizem</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto">
            A confiança de nossos clientes é nosso maior patrimônio. Confira alguns depoimentos de quem já experimentou nossos serviços.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-premium transition-all duration-500 border-0 gradient-subtle group animate-on-scroll hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Header com foto e rating */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-secondary/20 group-hover:border-secondary/40 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <Quote className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-secondary fill-current group-hover:animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                    <div className="text-xs text-elegant">{testimonial.role}</div>
                    <div className="text-xs text-secondary font-medium">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Content */}
                <blockquote className="text-elegant mb-6 italic leading-relaxed group-hover:text-primary transition-colors text-sm">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Resultados */}
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-semibold text-primary">{testimonial.result}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-secondary" />
                    <span className="text-xs text-elegant">Tempo: {testimonial.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Estatísticas gerais */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">500+</div>
            <div className="text-sm text-elegant">Clientes Satisfeitos</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-sm text-elegant">Taxa de Sucesso</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">R$ 15M+</div>
            <div className="text-sm text-elegant">Valor Recuperado</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Star className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">4.9/5</div>
            <div className="text-sm text-elegant">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;