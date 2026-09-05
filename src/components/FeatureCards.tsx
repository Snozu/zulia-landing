import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Zap, BarChart3, Search, MessageSquare, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

export default function FeatureCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full min-h-[400px]">
      {/* Card 1: RAG / Knowledge Base */}
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setActiveCard(1)}
        onHoverEnd={() => setActiveCard(null)}
      >
        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Bot className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Base de Conocimiento Viva</h3>
            <p className="text-sm text-muted-foreground">Tu IA aprende de tus PDFs, Notion y Drive al instante.</p>
          </div>
          
          {/* Mini Demo Visual */}
          <div className="mt-4 bg-muted/50 rounded-xl p-3 border border-border/50 relative overflow-hidden">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
             </div>
             <div className="space-y-2">
                <div className="h-2 bg-foreground/10 rounded w-3/4"></div>
                <div className="h-2 bg-foreground/10 rounded w-1/2"></div>
                <motion.div 
                    className="h-2 bg-blue-500/50 rounded w-full"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
             </div>
             {activeCard === 1 && (
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
                 >
                    <span className="text-xs font-medium text-blue-500 flex items-center gap-1">
                        <Search className="w-3 h-3" /> Indexando...
                    </span>
                 </motion.div>
             )}
          </div>
        </div>
      </motion.div>

      {/* Card 2: Automation */}
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 cursor-pointer group md:row-span-2"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setActiveCard(2)}
        onHoverEnd={() => setActiveCard(null)}
      >
         <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="h-full flex flex-col">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Automatización Total</h3>
            <p className="text-sm text-muted-foreground mb-6">Conecta CRM, Email y WhatsApp en flujos autónomos.</p>
            
            {/* Flow Visual */}
            <div className="flex-1 bg-muted/30 rounded-xl border border-border/50 p-4 relative flex flex-col items-center justify-center gap-4">
                <div className="flex items-center gap-2 p-2 bg-card rounded-lg shadow-sm border border-border/50 w-full max-w-[140px]">
                    <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center"><MessageSquare className="w-3 h-3 text-green-600"/></div>
                    <span className="text-[10px] font-medium">Nuevo Lead</span>
                </div>
                <motion.div 
                    className="h-8 w-0.5 bg-border relative"
                >
                    <motion.div 
                        className="absolute top-0 left-0 w-full bg-amber-500"
                        animate={{ height: ["0%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </motion.div>
                <div className="flex items-center gap-2 p-2 bg-card rounded-lg shadow-sm border border-border/50 w-full max-w-[140px]">
                    <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center"><Bot className="w-3 h-3 text-blue-600"/></div>
                    <span className="text-[10px] font-medium">Calificación IA</span>
                </div>
                 <motion.div 
                    className="h-8 w-0.5 bg-border relative"
                >
                    <motion.div 
                        className="absolute top-0 left-0 w-full bg-amber-500"
                        animate={{ height: ["0%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                    />
                </motion.div>
                 <div className="flex items-center gap-2 p-2 bg-card rounded-lg shadow-sm border border-border/50 w-full max-w-[140px]">
                    <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center"><BarChart3 className="w-3 h-3 text-purple-600"/></div>
                    <span className="text-[10px] font-medium">Update CRM</span>
                </div>
            </div>
        </div>
      </motion.div>

      {/* Card 3: Analytics */}
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setActiveCard(3)}
        onHoverEnd={() => setActiveCard(null)}
      >
         <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Reportes en Tiempo Real</h3>
            <p className="text-sm text-muted-foreground">Métricas que importan, actualizadas al segundo.</p>
          </div>
           {/* Chart Visual */}
           <div className="mt-4 h-24 flex items-end justify-between px-2 gap-2">
                {[40, 70, 50, 90, 60, 80].map((height, i) => (
                    <motion.div 
                        key={i}
                        className="w-full bg-purple-500/20 rounded-t-sm"
                        initial={{ height: "20%" }}
                        animate={{ height: `${height}%`, backgroundColor: activeCard === 3 ? "rgba(168, 85, 247, 0.5)" : "rgba(168, 85, 247, 0.2)" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                ))}
           </div>
        </div>
      </motion.div>
    </div>
  );
}
