import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const StatsSection = () => {
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

  const stats = [
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Taxa de Sucesso",
      description: "Casos resolvidos com êxito",
      color: "text-green-500"
    },
    {
      icon: Users,
      value: 1000,
      suffix: "+",
      label: "Clientes Atendidos",
      description: "Pessoas e empresas satisfeitas",
      color: "text-blue-500"
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Tradição e excelência",
      color: "text-yellow-500"
    },
    {
      icon: Clock,
      value: 24,
      suffix: "h",
      label: "Atendimento",
      description: "Suporte disponível sempre",
      color: "text-purple-500"
    }
  ];

  const Counter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (isVisible && !hasStarted) {
        setHasStarted(true);
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          
          setCount(Math.floor(progress * end));
          
          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame);
          }
        };
      }
    }, [isVisible, hasStarted, end, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {count}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-secondary/10 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(45_86%_62%_/_0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(45_86%_62%_/_0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Números que
            <span className="block text-secondary animate-text-gradient">Comprovam</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-slide-up-delay-1">
            Nossa trajetória de sucesso é medida em resultados concretos e clientes satisfeitos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-premium hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border border-white/20 group-hover:border-secondary/50">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse-slow">
                    <IconComponent className={`h-10 w-10 ${stat.color} group-hover:animate-wiggle`} />
                  </div>
                  
                  <div className="mb-4">
                    <Counter 
                      end={stat.value} 
                      duration={2000 + (index * 200)}
                      suffix={stat.suffix}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-foreground mb-2 group-hover:text-secondary transition-colors">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-glow">
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-primary-foreground font-medium">
              Junte-se aos nossos clientes satisfeitos
            </span>
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

