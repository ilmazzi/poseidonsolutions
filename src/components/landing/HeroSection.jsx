import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Waves } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Waves className="w-4 h-4" />
            Gestionali su misura per PMI
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
            Software gestionale
            <br />
            <span className="text-primary">che semplifica</span>
            <br />
            il tuo business
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Sviluppo gestionali personalizzati per piccole e medie imprese.
            Soluzioni su misura che automatizzano i processi e fanno crescere la tua azienda.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contatti"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Richiedi una consulenza
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servizi"
              className="inline-flex items-center gap-2 text-foreground px-8 py-4 rounded-xl text-base font-medium border border-border hover:bg-secondary transition-colors"
            >
              Scopri i servizi
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { number: "10+", label: "Anni di esperienza" },
            { number: "50+", label: "Progetti completati" },
            { number: "100%", label: "Clienti soddisfatti" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.number}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}