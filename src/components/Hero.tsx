import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import { ArrowRight, Scale, Star, Award, Shield, Zap, Calendar } from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-95"></div>
        {/* Animated particles */}
        <div className="absolute inset-0 gradient-radial animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="mb-8 animate-scale-up">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center mb-4 animate-glow shadow-gold">
                <Scale className="h-10 w-10 text-secondary animate-bounce" />
              </div>
              {/* Floating icons around main icon */}
              <Star className="absolute -top-2 -right-2 h-6 w-6 text-secondary/60 animate-pulse" />
              <Award className="absolute -bottom-2 -left-2 h-6 w-6 text-secondary/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Shield className="absolute -top-2 -left-2 h-5 w-5 text-secondary/40 animate-pulse" style={{ animationDelay: '1s' }} />
              <Zap className="absolute -bottom-2 -right-2 h-5 w-5 text-secondary/40 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Advocacia com
            <span className="text-secondary block mt-2 animate-slide-up-delay-1">Excelência</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2">
            Escritório especializado em direito empresarial, civil e trabalhista. 
            Defendemos seus direitos com expertise, dedicação e resultados comprovados.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up-delay-3">
            <AppointmentModal>
              <Button variant="secondary" size="lg" className="group shadow-gold hover:shadow-glow">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </AppointmentModal>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-elegant hover:shadow-premium transition-all"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Conheça Nossos Serviços
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform counter-animation" data-target="25">25+</div>
              <div className="text-sm uppercase tracking-wider">Anos de Experiência</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform counter-animation" data-target="1500">1500+</div>
              <div className="text-sm uppercase tracking-wider">Casos Resolvidos</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform counter-animation" data-target="98">98%</div>
              <div className="text-sm uppercase tracking-wider">Taxa de Sucesso</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform counter-animation" data-target="500">500+</div>
              <div className="text-sm uppercase tracking-wider">Clientes Atendidos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;