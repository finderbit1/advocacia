import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Início", href: "#hero" },
    { id: "services", label: "Serviços", href: "#services" },
    { id: "about", label: "Sobre", href: "#about" },
    { id: "testimonials", label: "Depoimentos", href: "#testimonials" },
    { id: "faq", label: "FAQ", href: "#faq" },
    { id: "contact", label: "Contato", href: "#contact" }
  ];

  // Detectar scroll para mudar aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar seção ativa baseada no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5511999998888";
    const message = "Olá! Gostaria de mais informações sobre os serviços jurídicos.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold text-primary">
                Advocacia Elegante
              </h1>
              <p className="text-xs text-elegant">Excelência Jurídica</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-secondary ${
                  activeSection === item.id
                    ? "text-secondary"
                    : isScrolled 
                      ? "text-primary" 
                      : "text-primary-foreground"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className={`transition-all duration-300 ${
                isScrolled 
                  ? "text-primary hover:text-secondary" 
                  : "text-primary-foreground hover:text-secondary"
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleWhatsAppClick}
              className="shadow-gold hover:shadow-glow transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-all duration-300 ${
                    isScrolled 
                      ? "text-primary hover:text-secondary" 
                      : "text-primary-foreground hover:text-secondary"
                  }`}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h2 className="font-playfair text-lg font-bold text-primary">
                        Advocacia Elegante
                      </h2>
                      <p className="text-xs text-elegant">Excelência Jurídica</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-secondary/10 text-secondary border-l-4 border-secondary"
                            : "text-primary hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => scrollToSection("#contact")}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Entrar em Contato
                    </Button>
                    <Button
                      variant="secondary"
                      className="w-full shadow-gold hover:shadow-glow"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Falar no WhatsApp
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
