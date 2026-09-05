import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Calendar, Mail, Phone, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { submitToN8n } from "../lib/utils";
import { trackEvent, trackOutbound } from "../lib/analytics";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [step, setStep] = useState<"form" | "calendar">("form");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#agendar") {
        setStep("calendar");
      } else if (window.location.hash === "#contacto") {
        setStep("form");
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSmartSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setStep("calendar");
    trackEvent("generate_lead", { form_id: "contact-smart", channel: "calendar", has_company: Boolean(formData.email) });
  };

  const handleWhatsApp = () => {
    const phoneNumber = "528122509882";
    const text = `Hola Zulia, me interesa agendar una consultoría.\n\n*Nombre:* ${formData.name}\n*Email:* ${formData.email}\n*Mensaje:* ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    trackOutbound("generate_lead", { form_id: "contact-smart", channel: "whatsapp" });
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-24 bg-background relative overflow-hidden scroll-mt-16">
      <div id="agendar" className="absolute top-0 scroll-mt-16" />
        {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {step === "form" ? "¿Listo para escalar?" : "Selecciona tu Horario"}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {step === "form" 
              ? "Cuéntanos sobre tu proyecto y agendemos una sesión estratégica." 
              : "Elige el espacio que mejor se adapte a tu agenda."}
          </p>
          
          <div className="flex justify-center gap-4 mb-8 bg-muted/50 p-1 rounded-full w-fit mx-auto">
            <button 
              onClick={() => setStep("form")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${step === "form" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              1. Datos
            </button>
            <button 
              onClick={() => setStep("calendar")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${step === "calendar" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              2. Agenda
            </button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {step === "form" ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8"
              >
                <form onSubmit={handleSmartSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                      <Input id="name" placeholder="Tu nombre" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Correo Corporativo</label>
                      <Input id="email" type="email" placeholder="tu@empresa.com" required value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">¿Qué desafío quieres resolver?</label>
                    <Textarea id="message" placeholder="Describe brevemente tus objetivos..." className="min-h-[120px]" required value={formData.message} onChange={handleChange} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Button type="submit" size="lg" className="flex-1 text-base group" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...
                        </>
                      ) : (
                        <>
                          Continuar a Agenda <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                    <Button type="button" variant="outline" size="lg" onClick={handleWhatsApp} className="flex-1 text-base">
                      Solo enviar WhatsApp
                    </Button>
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    * Tus datos están seguros y solo se usarán para la reunión.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="calendar"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="h-full min-h-[600px] w-full"
              >
                <div className="absolute top-4 right-4 z-10">
                   <Button variant="ghost" size="sm" onClick={() => setStep("form")}>
                     ← Volver a datos
                   </Button>
                </div>
                {/* 
                  INTEGRACIÓN AVANZADA:
                  Si usas Cal.com, puedes pre-llenar los datos así:
                  src={`https://cal.com/tu-link?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`}
                */}
                <iframe 
                  src={`https://calendar.google.com/calendar/appointments/schedules/AcZssZ...`}
                  style={{width: "100%", height: "100%", minHeight: "600px", border: "none"}}
                  title="Agendar Consultoría"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
