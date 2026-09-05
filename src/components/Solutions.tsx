import React from "react";
import { motion } from "framer-motion";
import { Bot, Zap, Database, Brain, BarChart3, Lock } from "lucide-react";
import { cn } from "../lib/utils";

const solutions = [
  {
    title: "Agentes de Soporte (RAG)",
    description: "Chatbots que entienden tus documentos y políticas. Responden preguntas complejas al instante, reduciendo el volumen de tickets en un 70%.",
    icon: Bot,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Automatización de Procesos",
    description: "Conectamos tus apps (CRM, Email, ERP) con flujos inteligentes. Si pasa X, automáticamente sucede Y, sin intervención humana.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Gestión de Leads & CRM",
    description: "Captura, califica y nutre leads automáticamente. Nuestro sistema identifica a los clientes potenciales más valiosos para tu equipo de ventas.",
    icon: BarChart3,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Base de Conocimiento IA",
    description: "Centraliza toda la información de tu empresa. La IA se encarga de mantenerla organizada y accesible para tus empleados y clientes.",
    icon: Database,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Soluciones que <span className="text-primary">Transforman</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No vendemos software genérico. Diseñamos ecosistemas de inteligencia artificial adaptados a la realidad de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors", item.bg, item.color)}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
