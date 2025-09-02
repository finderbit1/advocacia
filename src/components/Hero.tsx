import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowRight, Scale } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8">
            <Scale className="h-16 w-16 mx-auto text-secondary mb-4" />
          </div>
          
          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Advocacia com
            <span className="text-secondary block mt-2">Excelência</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Escritório especializado em direito empresarial, civil e trabalhista. 
            Defendemos seus direitos com expertise, dedicação e resultados comprovados.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="group">
              Agendar Consulta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Conheça Nossos Serviços
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">25+</div>
              <div className="text-sm uppercase tracking-wider">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
              <div className="text-sm uppercase tracking-wider">Casos Resolvidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-sm uppercase tracking-wider">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;