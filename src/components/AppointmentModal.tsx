import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AppointmentModalProps {
  children: React.ReactNode;
}

const AppointmentModal = ({ children }: AppointmentModalProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipoConsulta: "",
    data: "",
    horario: "",
    mensagem: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const tiposConsulta = [
    "Consulta Jurídica Presencial",
    "Consulta Jurídica Online",
    "Emergência Jurídica",
    "Análise de Documentos",
    "Planejamento Tributário",
    "Consultoria Empresarial",
    "Outro"
  ];

  const horariosDisponiveis = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
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

    if (!formData.tipoConsulta) {
      newErrors.tipoConsulta = "Tipo de consulta é obrigatório";
    }

    if (!formData.data) {
      newErrors.data = "Data é obrigatória";
    }

    if (!formData.horario) {
      newErrors.horario = "Horário é obrigatório";
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
      // Simular envio do agendamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui você integraria com seu sistema de agendamento
      console.log("Dados do agendamento:", formData);
      
      toast({
        title: "Agendamento realizado com sucesso!",
        description: `Sua consulta foi agendada para ${formData.data} às ${formData.horario}. Enviaremos um lembrete por email.`,
      });

      // Limpar formulário e fechar modal
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        tipoConsulta: "",
        data: "",
        horario: "",
        mensagem: ""
      });
      setIsOpen(false);

    } catch (error) {
      toast({
        title: "Erro ao agendar consulta",
        description: "Tente novamente ou entre em contato pelo WhatsApp",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-3">
            <Calendar className="w-6 h-6 text-secondary" />
            Agendar Consulta
          </DialogTitle>
          <p className="text-elegant">
            Preencha os dados abaixo para agendar sua consulta jurídica
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <User className="w-5 h-5 text-secondary" />
              Dados Pessoais
            </h3>
            
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
          </div>

          {/* Dados da Consulta */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              Dados da Consulta
            </h3>
            
            <div className="space-y-2">
              <Label htmlFor="tipoConsulta">Tipo de Consulta *</Label>
              <Select value={formData.tipoConsulta} onValueChange={(value) => handleInputChange("tipoConsulta", value)}>
                <SelectTrigger className={errors.tipoConsulta ? "border-red-500" : ""}>
                  <SelectValue placeholder="Selecione o tipo de consulta" />
                </SelectTrigger>
                <SelectContent>
                  {tiposConsulta.map((tipo) => (
                    <SelectItem key={tipo} value={tipo}>
                      {tipo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.tipoConsulta && (
                <div className="flex items-center gap-1 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.tipoConsulta}
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="data">Data *</Label>
                <Input 
                  id="data" 
                  type="date"
                  min={getMinDate()}
                  max={getMaxDate()}
                  value={formData.data}
                  onChange={(e) => handleInputChange("data", e.target.value)}
                  className={errors.data ? "border-red-500" : ""}
                />
                {errors.data && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.data}
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="horario">Horário *</Label>
                <Select value={formData.horario} onValueChange={(value) => handleInputChange("horario", value)}>
                  <SelectTrigger className={errors.horario ? "border-red-500" : ""}>
                    <SelectValue placeholder="Selecione o horário" />
                  </SelectTrigger>
                  <SelectContent>
                    {horariosDisponiveis.map((horario) => (
                      <SelectItem key={horario} value={horario}>
                        {horario}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.horario && (
                  <div className="flex items-center gap-1 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {errors.horario}
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="mensagem">Observações (opcional)</Label>
              <Textarea 
                id="mensagem" 
                placeholder="Descreva brevemente sua necessidade jurídica ou alguma observação importante..."
                rows={3}
                value={formData.mensagem}
                onChange={(e) => handleInputChange("mensagem", e.target.value)}
              />
            </div>
          </div>

          {/* Informações Importantes */}
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-4 border border-secondary/20">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              Informações Importantes
            </h4>
            <ul className="text-sm text-elegant space-y-1">
              <li>• Consultas presenciais: Av. Paulista, 1000 - Conjunto 1201</li>
              <li>• Consultas online: Link será enviado por email</li>
              <li>• Duração: 1 hora (consultas de emergência podem variar)</li>
              <li>• Cancelamento: Até 24h antes do agendamento</li>
              <li>• Documentos: Traga documentos relacionados ao seu caso</li>
            </ul>
          </div>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              type="submit" 
              variant="secondary" 
              size="lg" 
              className="flex-1 shadow-gold hover:shadow-glow transition-all hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Agendando...
                </>
              ) : (
                <>
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirmar Agendamento
                </>
              )}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="lg" 
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
