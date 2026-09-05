import React from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reducción de costos operativos hasta un 40%",
  "Atención al cliente instantánea 24/7/365",
  "Eliminación de errores humanos en procesos repetitivos",
  "Escalabilidad sin necesidad de contratar más personal",
  "Integración perfecta con tu stack actual (CRM, ERP)",
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full opacity-30"></div>
            <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-background/80 border border-border/50">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Lead Calificado</div>
                    <div className="text-xs text-muted-foreground">Hace 2 minutos • Vía WhatsApp</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-background/80 border border-border/50 opacity-80">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Ticket Resuelto</div>
                    <div className="text-xs text-muted-foreground">Hace 5 minutos • Agente IA</div>
                  </div>
                </div>
                 <div className="flex items-center gap-4 p-3 rounded-lg bg-background/80 border border-border/50 opacity-60">
                  <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Reporte Enviado</div>
                    <div className="text-xs text-muted-foreground">Hace 10 minutos • Automático</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tu empresa, <span className="text-primary">pero más rápida</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Implementar IA no es un lujo, es una necesidad competitiva. Ayudamos a empresas a desbloquear su verdadero potencial eliminando cuellos de botella.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
