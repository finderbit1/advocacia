import { Button } from "@/components/ui/button";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Tradição e Inovação em 
              <span className="text-secondary block">Advocacia</span>
            </h2>
            
            <p className="text-lg text-elegant mb-6 leading-relaxed">
              Há mais de 25 anos, nosso escritório se dedica a oferecer serviços jurídicos de excelência, 
              combinando tradição, conhecimento técnico e inovação para atender às necessidades de nossos clientes.
            </p>
            
            <p className="text-lg text-elegant mb-8 leading-relaxed">
              Nossa equipe de advogados especializados trabalha com dedicação integral para garantir 
              os melhores resultados, sempre pautados pela ética, transparência e compromisso com a justiça.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center group">
                <Award className="h-6 w-6 text-secondary mr-3 group-hover:animate-bounce" />
                <div>
                  <div className="font-bold text-primary">Prêmios OAB</div>
                  <div className="text-sm text-elegant">Reconhecimento profissional</div>
                </div>
              </div>
              <div className="flex items-center group">
                <Users className="h-6 w-6 text-secondary mr-3 group-hover:animate-bounce" />
                <div>
                  <div className="font-bold text-primary">Equipe Especializada</div>
                  <div className="text-sm text-elegant">15 advogados experientes</div>
                </div>
              </div>
              <div className="flex items-center group">
                <Clock className="h-6 w-6 text-secondary mr-3 group-hover:animate-bounce" />
                <div>
                  <div className="font-bold text-primary">Atendimento 24h</div>
                  <div className="text-sm text-elegant">Suporte emergencial</div>
                </div>
              </div>
              <div className="flex items-center group">
                <MapPin className="h-6 w-6 text-secondary mr-3 group-hover:animate-bounce" />
                <div>
                  <div className="font-bold text-primary">Múltiplas Cidades</div>
                  <div className="text-sm text-elegant">Presença nacional</div>
                </div>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="shadow-gold hover:shadow-glow transition-all hover:scale-105">
              Conheça Nossa Equipe
            </Button>
          </div>

          {/* Image/Visual Element */}
          <div className="relative animate-float">
            <div className="aspect-square bg-gradient-hero rounded-3xl shadow-premium flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="text-6xl font-bold mb-4 animate-glow">25+</div>
                <div className="text-xl uppercase tracking-wider">Anos de</div>
                <div className="text-xl uppercase tracking-wider">Excelência</div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-secondary p-6 rounded-2xl shadow-glow animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-primary">Taxa de Sucesso</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-premium animate-pulse">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-elegant">Casos Resolvidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;