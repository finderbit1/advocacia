import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AppointmentModal from "@/components/AppointmentModal";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    area: "",
    mensagem: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const areasJuridicas = [
    "Direito Empresarial",
    "Direito Trabalhista", 
    "Direito Civil",
    "Direito Tributário",
    "Direito Penal",
    "Consultoria Jurídica",
    "Outro"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.telefone)) {
      newErrors.telefone = "Formato inválido. Use (11) 99999-9999";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.area) {
      newErrors.area = "Área de interesse é obrigatória";
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erro na validação",
        description: "Por favor, corrija os campos destacados",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui você integraria com seu backend/email service
      console.log("Dados do formulário:", formData);
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 2 horas úteis.",
      });

      // Limpar formulário
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        area: "",
        mensagem: ""
      });

    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 gradient-subtle">
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
                <p className="text-sm text-elegant">Preencha o formulário e entraremos em contato em até 2 horas úteis</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input 
                        id="nome" 
                        placeholder="Seu nome completo"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        className={errors.nome ? "border-red-500" : ""}
                      />
                      {errors.nome && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.nome}
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                      <Input 
                        id="telefone" 
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", formatPhone(e.target.value))}
                        className={errors.telefone ? "border-red-500" : ""}
                      />
                      {errors.telefone && (
                        <div className="flex items-center gap-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.telefone}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="area">Área de Interesse *</Label>
                    <Select value={formData.area} onValueChange={(value) => handleInputChange("area", value)}>
                      <SelectTrigger className={errors.area ? "border-red-500" : ""}>
                        <SelectValue placeholder="Selecione a área jurídica" />
                      </SelectTrigger>
                      <SelectContent>
                        {areasJuridicas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.area && (
                      <div className="flex items-center gap-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.area}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="mensagem">Descreva sua necessidade *</Label>
                    <Textarea 
                      id="mensagem" 
                      placeholder="Descreva brevemente sua necessidade jurídica, situação atual e o que você espera..."
                      rows={4}
                      value={formData.mensagem}
                      onChange={(e) => handleInputChange("mensagem", e.target.value)}
                      className={errors.mensagem ? "border-red-500" : ""}
                    />
                    {errors.mensagem && (
                      <div className="flex items-center gap-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.mensagem}
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      variant="secondary" 
                      size="lg" 
                      className="w-full shadow-gold hover:shadow-glow transition-all hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                    
                    <div className="text-center text-sm text-elegant">
                      ou
                    </div>
                    
                    <AppointmentModal>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg" 
                        className="w-full border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all hover:scale-105"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar Consulta
                      </Button>
                    </AppointmentModal>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-elegant">
                      Ao enviar este formulário, você concorda com nossa 
                      <span className="text-secondary cursor-pointer hover:underline"> Política de Privacidade</span>
                    </p>
                  </div>
                </form>
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
            <Card className="shadow-elegant border-0 gradient-hero text-primary-foreground animate-float">
              <CardContent className="p-6 text-center">
                <h4 className="font-playfair text-xl font-bold mb-4 animate-glow">
                  Atendimento Personalizado
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="group cursor-pointer">
                    <div className="text-2xl font-bold text-secondary group-hover:scale-110 transition-transform">24h</div>
                    <div className="text-sm">Resposta</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-2xl font-bold text-secondary group-hover:scale-110 transition-transform">100%</div>
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