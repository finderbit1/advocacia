import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Entre em 
              <span className="text-secondary block">Contato</span>
            </h2>
            
            <p className="text-lg text-elegant mb-8 leading-relaxed">
              Precisa de assessoria jurídica? Nossa equipe está pronta para atendê-lo. 
              Agende uma consulta ou envie sua mensagem.
            </p>

            <Card className="shadow-elegant border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Solicitar Consulta</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome *</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input id="telefone" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="assunto">Área de Interesse</Label>
                  <Input id="assunto" placeholder="Ex: Direito Empresarial, Civil, Trabalhista..." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea 
                    id="mensagem" 
                    placeholder="Descreva brevemente sua necessidade jurídica..."
                    rows={4}
                  />
                </div>
                
                <Button variant="secondary" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Telefone</div>
                    <div className="text-elegant">(11) 3333-4444</div>
                    <div className="text-elegant">(11) 99999-8888</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">E-mail</div>
                    <div className="text-elegant">contato@advocaciaelegante.com.br</div>
                    <div className="text-elegant">comercial@advocaciaelegante.com.br</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Endereço</div>
                    <div className="text-elegant">Av. Paulista, 1000 - Conjunto 1201</div>
                    <div className="text-elegant">Bela Vista, São Paulo - SP</div>
                    <div className="text-elegant">CEP: 01310-100</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-secondary mr-4 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Horário de Atendimento</div>
                    <div className="text-elegant">Segunda a Sexta: 8h às 18h</div>
                    <div className="text-elegant">Sábado: 8h às 12h</div>
                    <div className="text-elegant text-sm mt-1">*Atendimento emergencial 24h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="shadow-elegant border-0 gradient-hero text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h4 className="font-playfair text-xl font-bold mb-4">
                  Atendimento Personalizado
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary">24h</div>
                    <div className="text-sm">Resposta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">100%</div>
                    <div className="text-sm">Confidencial</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;