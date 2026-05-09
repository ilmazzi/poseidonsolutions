import React from "react";
import { motion } from "framer-motion";
import { Database, BarChart3, Settings, Shield, Smartphone, RefreshCcw } from "lucide-react";

const services = [
  {
    icon: Database,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
    title: "Gestionali Personalizzati",
    description: "Software su misura progettato attorno ai tuoi processi aziendali specifici, non il contrario.",
  },
  {
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    title: "Dashboard & Reportistica",
    description: "Pannelli di controllo intuitivi per monitorare in tempo reale le performance della tua attività.",
  },
  {
    icon: RefreshCcw,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80&auto=format&fit=crop",
    title: "Automazione Processi",
    description: "Elimina le attività ripetitive e manuali. Lascia che il software lavori per te.",
  },
  {
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop",
    title: "Accesso da Ovunque",
    description: "Soluzioni web responsive accessibili da qualsiasi dispositivo, in ufficio o in mobilità.",
  },
  {
    icon: Shield,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&auto=format&fit=crop",
    title: "Sicurezza & Affidabilità",
    description: "I tuoi dati sono protetti con i più alti standard di sicurezza e backup automatici.",
  },
  {
    icon: Settings,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80&auto=format&fit=crop",
    title: "Assistenza Continua",
    description: "Supporto tecnico dedicato e aggiornamenti costanti per far evolvere il tuo gestionale.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Servizi
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Soluzioni per ogni esigenza
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Ogni azienda è unica. Creo gestionali che si adattano perfettamente al tuo modo di lavorare.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}