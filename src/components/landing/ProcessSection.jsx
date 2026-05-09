import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Ascolto",
    description: "Parliamo delle tue esigenze, dei tuoi processi e dei problemi che vuoi risolvere. Niente gergo tecnico, solo conversazione.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Progettazione",
    description: "Definisco l'architettura e l'interfaccia del gestionale. Ti mostro come sarà prima di scrivere una riga di codice.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Sviluppo",
    description: "Costruisco il software con aggiornamenti regolari, così puoi vedere i progressi e dare feedback in tempo reale.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Lancio & Supporto",
    description: "Messa online, formazione del team e assistenza continua. Non ti lascio solo dopo il go-live.",
  },
];

export default function ProcessSection() {
  return (
    <section id="processo" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Come Lavoro
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Dal primo contatto al lancio
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Un processo semplice e trasparente, pensato per farti sentire coinvolto in ogni fase.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4 z-0" />
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">
                  Fase {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}