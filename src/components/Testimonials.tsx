import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content: "Excelente atendimento e resultados excepcionais. O escritório resolveu uma questão empresarial complexa com total profissionalismo.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor Comercial",
      content: "Assessoria jurídica de primeira qualidade. Equipe competente, ágil e sempre disponível para esclarecer dúvidas.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Empreendedora",
      content: "Confiança total no trabalho realizado. Superaram minhas expectativas em todos os aspectos do processo jurídico.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-premium transition-all duration-500 border-0 gradient-subtle group animate-on-scroll hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-current group-hover:animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-elegant mb-6 italic leading-relaxed group-hover:text-primary transition-colors">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-elegant">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;