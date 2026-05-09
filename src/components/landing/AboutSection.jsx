import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Specializzato nello sviluppo di gestionali per PMI",
  "Approccio diretto, senza intermediari",
  "Comunicazione chiara e trasparente",
  "Tempi di consegna certi e rispettati",
  "Supporto post-lancio garantito",
];

export default function AboutSection() {
  return (
    <section id="chi-sono" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=800&q=80&auto=format&fit=crop"
                  alt="Developer working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl border border-border shadow-xl p-4 flex items-center gap-4">
                <img
                  src="https://media.base44.com/images/public/user_690311299cd1bf314d6f3192/e4775bc89_logo.png"
                  alt="Poseidon Solutions"
                  className="w-10 h-10 flex-shrink-0"
                />
                <div>
                  <div className="text-sm font-bold text-foreground">Poseidon Solutions</div>
                  <div className="flex gap-2 mt-1">
                    <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">React</div>
                    <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">Laravel</div>
                    <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">MySQL</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Chi Sono
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Il tuo partner tecnologico,
              <br />
              non un&apos;azienda impersonale
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Sono uno sviluppatore specializzato nella creazione di software gestionali per piccole e medie imprese.
              Lavoro direttamente con te, senza filtri e senza burocrazia. Questo significa tempi più rapidi,
              costi più contenuti e un prodotto che rispecchia davvero le tue esigenze.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ogni gestionale che creo nasce dall&apos;ascolto. Prima capisco come lavori,
              poi progetto la soluzione migliore per digitalizzare e ottimizzare i tuoi processi.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}