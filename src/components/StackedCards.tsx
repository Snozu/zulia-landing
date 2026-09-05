import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, PenTool, Database, MessageCircle, ArrowRight } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: Target,
    title: "Agente de Prospección",
    description: "Investiga leads cualificados, detecta señales de compra y personaliza el outreach automáticamente.",
    color: "bg-white dark:bg-zinc-950",
    gradient: "from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950",
    textColor: "text-zinc-900 dark:text-zinc-50",
    subTextColor: "text-zinc-500 dark:text-zinc-400",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-200 dark:border-blue-800/50"
  },
  {
    id: 2,
    icon: PenTool,
    title: "Generador de Contenido",
    description: "Crea posts para blog, redes sociales y correos de venta alineados perfectamente con la voz de tu marca.",
    color: "bg-white dark:bg-zinc-950",
    gradient: "from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950",
    textColor: "text-zinc-900 dark:text-zinc-50",
    subTextColor: "text-zinc-500 dark:text-zinc-400",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    borderColor: "border-purple-200 dark:border-purple-800/50"
  },
  {
    id: 3,
    icon: Database,
    title: "Enriquecimiento CRM",
    description: "Actualiza datos de contactos en tiempo real con intención de compra y actividad web reciente.",
    color: "bg-white dark:bg-zinc-950",
    gradient: "from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950",
    textColor: "text-zinc-900 dark:text-zinc-50",
    subTextColor: "text-zinc-500 dark:text-zinc-400",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-200 dark:border-emerald-800/50"
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Atención al Cliente",
    description: "Resuelve consultas 24/7 y escala casos complejos a humanos con contexto completo de la conversación.",
    color: "bg-white dark:bg-zinc-950",
    gradient: "from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950",
    textColor: "text-zinc-900 dark:text-zinc-50",
    subTextColor: "text-zinc-500 dark:text-zinc-400",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-200 dark:border-amber-800/50"
  }
];

export default function StackedCards() {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="relative h-[280px] md:h-[280px] w-full flex items-center justify-center perspective-1000 mt-8 md:mt-0">
      <div className="relative w-full max-w-[90vw] md:max-w-2xl aspect-[16/9] md:aspect-[16/7]">
        <AnimatePresence initial={false} mode="popLayout">
          {cards.map((card, index) => {
            // Calculate relative index to handle infinite cycling visual
            const relativeIndex = (index - activeCard + cards.length) % cards.length;
            
            // Only show top 3 cards for performance and visual clarity
            if (relativeIndex > 2) return null;

            return (
              <motion.div
                key={card.id}
                layoutId={`card-${card.id}`}
                initial={{ opacity: 0, y: -50 }}
                animate={{
                  scale: 1 - relativeIndex * 0.05, // Slightly more scale difference on mobile to see back cards
                  y: -relativeIndex * 15, // Reduced from 25 to avoid overlapping top content on mobile
                  z: -relativeIndex,
                  rotate: 0, 
                  opacity: 1,
                }}
                whileHover={{
                    y: relativeIndex === 0 ? 0 : -relativeIndex * 20 - 5,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                exit={{ y: 150, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`absolute top-1/2 left-0 w-full aspect-[16/9] md:aspect-[16/7] -translate-y-1/2 rounded-xl md:rounded-2xl border shadow-lg md:shadow-2xl overflow-hidden cursor-pointer transition-all ${card.color} ${relativeIndex === 0 ? 'border-border/50' : card.borderColor}`}
                style={{
                  zIndex: cards.length - relativeIndex,
                  transformOrigin: "bottom center",
                  background: "var(--card-bg)",
                }}
                onClick={nextCard}
              >
                {/* Full Card Color Background */}
                <div className={`absolute inset-0 ${card.color} opacity-20`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-40`} />
                
                {/* Top "Tab" Area - Reduced height */}
                <div className="absolute top-0 left-0 right-0 h-6 md:h-8 flex items-center px-4 md:px-6">
                    <div className="w-8 md:w-12 h-1 rounded-full bg-white/20 mx-auto" />
                </div>

                {/* Content - Horizontal Layout */}
                <div className="relative z-10 h-full flex flex-row items-center p-4 md:p-8 gap-4 md:gap-8">
                  <motion.div 
                    animate={{ opacity: relativeIndex === 0 ? 1 : 0.5, scale: relativeIndex === 0 ? 1 : 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-2xl ${card.iconBg} backdrop-blur-md flex items-center justify-center shadow-inner border border-white/10 dark:border-black/10`}
                  >
                      <card.icon className={`w-5 h-5 md:w-8 md:h-8 ${card.iconColor}`} />
                  </motion.div>

                  <motion.div 
                    animate={{ opacity: relativeIndex === 0 ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-center min-w-0"
                  >
                    <h3 className={`text-lg md:text-2xl font-bold ${card.textColor} mb-1 md:mb-2 tracking-tight truncate`}>{card.title}</h3>
                    <p className={`${card.subTextColor} text-xs md:text-base leading-snug md:leading-relaxed font-medium line-clamp-2 md:line-clamp-none`}>
                        {card.description}
                    </p>
                  </motion.div>
                  
                  <motion.div 
                     animate={{ opacity: relativeIndex === 0 ? 1 : 0, x: relativeIndex === 0 ? 0 : 20 }}
                     className={`shrink-0 hidden md:flex items-center ${card.textColor}/90 text-sm font-semibold tracking-wide bg-white/10 dark:bg-black/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-colors`}
                  >
                      Ver siguiente <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                  
                  {/* Mobile Arrow */}
                  <motion.div 
                     animate={{ opacity: relativeIndex === 0 ? 1 : 0 }}
                     className="shrink-0 md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 dark:bg-black/10 text-white/90 dark:text-black/90"
                  >
                      <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
