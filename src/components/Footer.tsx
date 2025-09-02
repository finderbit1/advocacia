import { Scale, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-secondary mr-3" />
              <div className="font-playfair text-2xl font-bold">
                Advocacia Elegante
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Escritório de advocacia especializado em direito empresarial, civil e trabalhista. 
              Oferecemos serviços jurídicos de excelência com mais de 25 anos de experiência.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-secondary mr-2" />
                <span>(11) 3333-4444</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-secondary mr-2" />
                <span>contato@advocaciaelegante.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-secondary mr-2" />
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-secondary">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Direito Empresarial</li>
              <li>Direito Trabalhista</li>
              <li>Direito Civil</li>
              <li>Direito Tributário</li>
              <li>Direito Penal</li>
              <li>Consultoria Jurídica</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6 text-secondary">
              Links Úteis
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#sobre" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-secondary transition-colors">Serviços</a></li>
              <li><a href="#equipe" className="hover:text-secondary transition-colors">Nossa Equipe</a></li>
              <li><a href="#contato" className="hover:text-secondary transition-colors">Contato</a></li>
              <li><a href="#blog" className="hover:text-secondary transition-colors">Blog Jurídico</a></li>
              <li><a href="#casos" className="hover:text-secondary transition-colors">Casos de Sucesso</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
            <div>
              © 2024 Advocacia Elegante. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacidade" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#termos" className="hover:text-secondary transition-colors">
                Termos de Uso
              </a>
              <div className="text-primary-foreground/40">
                OAB/SP 12.345
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;