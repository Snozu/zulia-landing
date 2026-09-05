import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, Sparkles, RefreshCcw } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  type?: "text" | "input" | "form" | "cta";
  inputConfig?: {
    placeholder?: string;
    inputType?: "text" | "email";
    onSubmit?: (value: string) => void;
  };
  ctaConfig?: {
      label: string;
      action: () => void;
  };
}

interface Option {
  label: string;
  action: () => void;
}

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "ai", text: "¡Hola! He analizado tu mercado y encontrado 50 prospectos de alto valor que coinciden con tu ICP. ¿Qué te gustaría hacer?", type: "text" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tempInputValue, setTempInputValue] = useState("");

  const scrollToBottom = () => {
    // Scroll only the container, not the window
    if (containerRef.current) {
        containerRef.current.scrollTo({
            top: containerRef.current.scrollHeight,
            behavior: "smooth"
        });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    // Initial options
    setOptions([
      { label: "🔍 Ver prospectos", action: () => handleUserSelection("Muéstrame los prospectos encontrados", "ver_prospectos") },
      { label: "📧 Redactar campaña", action: () => handleUserSelection("Prepara una secuencia de correos", "redactar_campana") },
      { label: "📊 Ver insights", action: () => handleUserSelection("¿Qué señales de compra detectaste?", "ver_insights") },
    ]);
  }, []);

  const handleUserSelection = (text: string, flow: string) => {
    setOptions([]); // Hide options while processing
    addMessage("user", text);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let responseText = "";
      let nextOptions: Option[] = [];

      if (flow === "ver_prospectos") {
        responseText = "Para mostrarte los leads más relevantes, necesito confirmar tu industria principal. ¿Podrías escribirla?";
        // Add Input Message
        addMessage("ai", responseText);
        addMessage("ai", "", "input", {
            placeholder: "Ej: SaaS, E-commerce, FinTech...",
            inputType: "text",
            onSubmit: (value) => {
                handleUserSelection(`Mi industria es ${value}`, "industria_confirmada");
            }
        });
        return; // Stop here, wait for input
      } else if (flow === "industria_confirmada") {
         responseText = "¡Perfecto! Aquí tienes los 3 principales para tu sector:\n1. TechCorp (Ronda Serie B reciente)\n2. InnovateX (Contratando equipo de ventas)\n3. GrowthLTD (Nuevo CTO nombrado)\n\n¿Quieres que inicie el contacto?";
         nextOptions = [
            { label: "🚀 Iniciar secuencia", action: () => handleUserSelection("Inicia la secuencia de contacto", "iniciar_secuencia") },
            { label: "ℹ️ Más info de TechCorp", action: () => handleUserSelection("Dame más detalles de TechCorp", "info_techcorp") }
         ];
      } else if (flow === "redactar_campana") {
        responseText = "He redactado 3 variantes de correo personalizadas. El asunto A tiene un 45% de tasa de apertura estimada. ¿Te gustaría revisarlos?";
        nextOptions = [
            { label: "👁️ Revisar correos", action: () => handleUserSelection("Quiero revisar los borradores", "revisar_correos") },
            { label: "✈️ Enviar automáticamente", action: () => handleUserSelection("Envíalos, confío en ti", "iniciar_secuencia") }
        ];
      } else if (flow === "ver_insights") {
         responseText = "Detecté que el 40% de tus leads interactuaron con tu post de LinkedIn ayer. Es el momento perfecto para contactarlos.";
         nextOptions = [
            { label: "🔥 Contactar ahora", action: () => handleUserSelection("Contactar a los que interactuaron", "iniciar_secuencia") }
        ];
      } else if (flow === "iniciar_secuencia") {
          responseText = "¡Entendido! Iniciando secuencia de outreach multicanal. Ingresa tu correo para enviarte el reporte de resultados:";
           addMessage("ai", responseText);
            addMessage("ai", "", "input", {
                placeholder: "tu@empresa.com",
                inputType: "email",
                onSubmit: (value) => {
                    handleUserSelection(`Envíalo a ${value}`, "reporte_enviado");
                }
            });
            return;
      } else if (flow === "reporte_enviado") {
           responseText = "¡Listo! El reporte está en camino. ¿Quieres agendar una demo completa para ver todo el potencial?";
           addMessage("ai", responseText);
           addMessage("ai", "", "cta", undefined, {
               label: "📅 Agendar Demo",
               action: () => window.open("https://cal.com", "_blank")
           });
           nextOptions = [
               { label: "🔄 Reiniciar", action: () => resetChat() }
           ];
           setOptions(nextOptions);
           return;

      } else if (flow === "info_techcorp") {
          responseText = "TechCorp: SaaS B2B, 50-200 empleados. Acaban de migrar a HubSpot. El decisor clave es María González (VP de Ventas). He encontrado su correo verificado.";
          nextOptions = [
            { label: "📧 Contactar a María", action: () => handleUserSelection("Contactar a María González", "iniciar_secuencia") }
          ];
      } else if (flow === "revisar_correos") {
          responseText = "Aquí el Borrador 1: 'Hola [Nombre], vi que [Empresa] está expandiendo su equipo...'. Incluye referencia a su última noticia. ¿Lo envío?";
           nextOptions = [
            { label: "✅ Enviar", action: () => handleUserSelection("Enviar correo", "iniciar_secuencia") }
          ];
      } else if (flow === "contacto") {
          responseText = "¡Excelente decisión! Haz clic en el botón de abajo para agendar una consultoría estratégica gratuita.";
      }

      addMessage("ai", responseText);
      setOptions(nextOptions);
    }, 1000);
  };

  const addMessage = (role: "user" | "ai", text: string, type: "text" | "input" | "form" | "cta" = "text", inputConfig?: Message['inputConfig'], ctaConfig?: Message['ctaConfig']) => {
    setMessages((prev) => [
      ...prev,
      { 
          id: Math.random().toString(36).substring(7), 
          role, 
          text, 
          type, 
          inputConfig,
          ctaConfig
      },
    ]);
  };

  const resetChat = () => {
    setMessages([{ id: "1", role: "ai", text: "¡Hola! He analizado tu mercado y encontrado 50 prospectos de alto valor que coinciden con tu ICP. ¿Qué te gustaría hacer?", type: "text" }]);
    setOptions([
      { label: "🔍 Ver prospectos", action: () => handleUserSelection("Muéstrame los prospectos encontrados", "ver_prospectos") },
      { label: "📧 Redactar campaña", action: () => handleUserSelection("Prepara una secuencia de correos", "redactar_campana") },
      { label: "📊 Ver insights", action: () => handleUserSelection("¿Qué señales de compra detectaste?", "ver_insights") },
    ]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] relative">
      {/* Header */}
      <div className="p-4 border-b border-border/50 bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-base">ZulIA Agent</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Conectado a tu negocio
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={resetChat} title="Reiniciar chat">
            <RefreshCcw className="w-4 h-4 text-muted-foreground" />
        </Button>
      </div>

      {/* Messages Area */}
      <div 
        ref={containerRef}
        className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 md:space-y-6 scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent scroll-smooth max-h-[300px] md:max-h-[400px]"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex w-max max-w-[85%] flex-col gap-2 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-3.5 text-sm md:text-base shadow-sm",
                msg.role === "user"
                  ? "ml-auto bg-primary text-primary-foreground rounded-br-none"
                  : "bg-muted/80 text-foreground rounded-bl-none border border-border/50",
                msg.type === "input" && "w-full max-w-[95%] md:max-w-[90%] bg-transparent border-0 p-0 shadow-none"
              )}
            >
              {msg.type === "text" && msg.text}

              {msg.type === "input" && msg.inputConfig && (
                  <form 
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (tempInputValue.trim()) {
                            msg.inputConfig?.onSubmit?.(tempInputValue);
                            setTempInputValue("");
                        }
                    }}
                    className="flex gap-2 w-full"
                  >
                      <input 
                        type={msg.inputConfig.inputType || "text"}
                        placeholder={msg.inputConfig.placeholder}
                        value={tempInputValue}
                        onChange={(e) => setTempInputValue(e.target.value)}
                        className="flex-1 bg-background border border-primary/20 rounded-lg md:rounded-xl px-3 py-2 md:px-4 md:py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        autoFocus
                      />
                      <button 
                        type="submit"
                        disabled={!tempInputValue.trim()}
                        className="bg-primary text-primary-foreground p-2 md:p-3 rounded-lg md:rounded-xl hover:bg-primary/90 disabled:opacity-50 transition-colors"
                      >
                          <Send className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                  </form>
              )}

              {msg.type === "cta" && msg.ctaConfig && (
                  <div className="flex flex-col gap-3">
                      <p className="mb-1">{msg.text}</p>
                      <button 
                        onClick={msg.ctaConfig.action}
                        className="bg-primary text-primary-foreground font-medium py-2.5 px-5 md:py-3 md:px-6 rounded-lg md:rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer border border-primary/20 hover:border-primary/40 active:scale-95 flex items-center justify-center gap-2 w-full text-sm md:text-base"
                      >
                          {msg.ctaConfig.label} <Sparkles className="w-4 h-4" />
                      </button>
                  </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center gap-1 h-8 md:h-10 bg-muted/50 w-12 md:w-16 rounded-xl md:rounded-2xl rounded-bl-none px-3 md:px-4"
          >
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-foreground/40 rounded-full animate-bounce"></span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Options Area */}
      <div className="p-3 md:p-4 border-t border-border/50 bg-card/50">
        <div className="flex flex-wrap gap-2 justify-center">
            <AnimatePresence mode="popLayout">
                {options.map((option, index) => (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 25,
                            delay: index * 0.1 
                        }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={option.action}
                        className="bg-primary text-primary-foreground font-medium py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm rounded-lg md:rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer border border-primary/20 hover:border-primary/40 active:scale-95"
                    >
                        {option.label}
                    </motion.button>
                ))}
            </AnimatePresence>
        </div>
        {options.length === 0 && !isTyping && (
             <div className="text-center text-[10px] md:text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1 animate-pulse font-medium">
                <Sparkles className="w-3 h-3 text-primary" /> Esperando respuesta de ZulIA...
             </div>
        )}
      </div>
    </div>
  );
}
