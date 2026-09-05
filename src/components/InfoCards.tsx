import React from "react";
import { motion } from "framer-motion";
import { Target, PenTool, Database, MessageCircle } from "lucide-react";

const infoItems = [
  {
    icon: Target,
    title: "Agente de Prospección",
    description: "Investiga leads cualificados, detecta señales de compra y personaliza el outreach automáticamente.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: PenTool,
    title: "Generador de Contenido",
    description: "Crea posts para blog, redes sociales y correos de venta alineados perfectamente con la voz de tu marca.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Database,
    title: "Enriquecimiento CRM",
    description: "Actualiza datos de contactos en tiempo real con intención de compra y actividad web reciente.",
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    icon: MessageCircle,
    title: "Atención al Cliente",
    description: "Resuelve consultas 24/7 y escala casos complejos a humanos con contexto completo de la conversación.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  }
];

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-center">
      {infoItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-card/50 border border-border/50 hover:border-primary/30 p-5 rounded-2xl backdrop-blur-sm transition-all hover:bg-card/80 group"
        >
          <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
            <item.icon className={`w-5 h-5 ${item.color}`} />
          </div>
          <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
