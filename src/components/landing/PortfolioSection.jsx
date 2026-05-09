import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";

const categories = [
  { id: "tutti", label: "Tutti" },
  { id: "gestionale", label: "Gestionali" },
  { id: "saas", label: "SaaS" },
  { id: "social", label: "Social & Community" },
  { id: "web", label: "Siti Web" },
  { id: "automazione", label: "Automazione" },
];

const techColors = {
  "React": "bg-sky-100 text-sky-700",
  "Node.js": "bg-green-100 text-green-700",
  "PostgreSQL": "bg-blue-100 text-blue-700",
  "MySQL": "bg-orange-100 text-orange-700",
  "Next.js": "bg-slate-100 text-slate-700",
  "MongoDB": "bg-emerald-100 text-emerald-700",
  "Laravel": "bg-red-100 text-red-700",
  "Vue.js": "bg-teal-100 text-teal-700",
  "Python": "bg-yellow-100 text-yellow-700",
  "REST API": "bg-purple-100 text-purple-700",
  "QR Code": "bg-rose-100 text-rose-700",
  "Stripe": "bg-indigo-100 text-indigo-700",
  "Social API": "bg-pink-100 text-pink-700",
  "Tailwind": "bg-cyan-100 text-cyan-700",
};

const projects = [
  {
    id: 1,
    name: "Athena",
    tagline: "Gestionale Magazzino Completo",
    category: "gestionale",
    image: "https://media.base44.com/images/public/69ff5b9c9f84f4b0282aafdc/d294a5c59_image.png",
    description: "Sistema completo per la gestione dell'inventario di magazzino con DDT, conti deposito multi-sede, gestione cartellini con QR Code e inventario in tempo reale.",
    challenge: "Gestire depositi distribuiti su più sedi con tracciabilità completa dei movimenti e scadenze, integrando la generazione automatica di documenti fiscali.",
    techs: ["React", "Laravel", "MySQL", "QR Code", "REST API"],
  },
  {
    id: 2,
    name: "OPManager",
    tagline: "Gestione Preventivi & Commesse",
    category: "gestionale",
    image: "https://media.base44.com/images/public/69ff5b9c9f84f4b0282aafdc/aed9355a0_image.png",
    description: "Piattaforma per la gestione completa del ciclo preventivi-commesse: dalla ricezione del lead alla chiusura del lavoro, con calendario commesse e archiviazione.",
    challenge: "Costruire un flusso end-to-end per gestire preventivi di centinaia di migliaia di euro, con tracciamento degli stati, assegnazione operatori e statistiche avanzate.",
    techs: ["React", "Laravel", "MySQL", "Tailwind"],
  },
  {
    id: 3,
    name: "Anthas",
    tagline: "Gestionale Farmaceutico B2B",
    category: "gestionale",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80&auto=format&fit=crop",
    description: "Software gestionale su misura per un'azienda di compravendita farmaceutica: anagrafica prodotti, gestione ordini, tracciabilità lotti e conformità normativa.",
    challenge: "Rispettare le stringenti normative del settore farmaceutico garantendo tracciabilità completa dei lotti, scadenze e movimentazioni di prodotti regolamentati.",
    techs: ["React", "Laravel", "MySQL", "REST API"],
  },
  {
    id: 4,
    name: "PreventFlow",
    tagline: "SaaS Lead → Preventivi → Follow-up",
    category: "saas",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    description: "Piattaforma SaaS pubblica su preventflow.it per la gestione dell'intero ciclo commerciale: acquisizione lead, creazione preventivi e follow-up automatizzato.",
    challenge: "Progettare un'architettura multi-tenant scalabile con piani di abbonamento, automazioni email e un'interfaccia che non richieda formazione agli utenti.",
    techs: ["React", "Laravel", "MySQL", "Stripe", "REST API"],
    link: "https://preventflow.it",
  },
  {
    id: 5,
    name: "Automaz",
    tagline: "Automazione Pubblicazione Social",
    category: "automazione",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&auto=format&fit=crop",
    description: "Sistema di automazione che riceve contenuti direttamente dai fornitori e li pubblica automaticamente sui canali social aziendali, con scheduling e reportistica.",
    challenge: "Integrare API di fornitori eterogenei con i principali social network, normalizzando formati diversi e gestendo code di pubblicazione con retry automatico.",
    techs: ["Laravel", "React", "Social API", "REST API", "MySQL"],
  },
  {
    id: 6,
    name: "SoFu",
    tagline: "Piattaforma di Crowdfunding",
    category: "saas",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80&auto=format&fit=crop",
    description: "Piattaforma completa di crowdfunding con gestione campagne, sistema di pledge, pagamenti integrati, dashboard creator e notifiche automatiche ai sostenitori.",
    challenge: "Implementare un sistema di pagamento sicuro con logica di addebito condizionale al raggiungimento del target, garantendo conformità e trasparenza finanziaria.",
    techs: ["React", "Laravel", "MySQL", "Stripe", "REST API"],
  },
  {
    id: 7,
    name: "Slamin",
    tagline: "Social Network per la Poesia",
    category: "social",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80&auto=format&fit=crop",
    description: "Community dedicata al mondo della poesia e dello slam poetry: profili autore, pubblicazione testi, audio/video, eventi, contest e sistema di votazione.",
    challenge: "Creare un'esperienza social verticale con algoritmo di discovery dei contenuti, gestione eventi live e monetizzazione creatori mantenendo l'anima artistica della piattaforma.",
    techs: ["React", "Laravel", "MySQL", "REST API"],
  },
  {
    id: 8,
    name: "Siti Web",
    tagline: "Sviluppo Web su Misura",
    category: "web",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&auto=format&fit=crop",
    description: "Realizzazione di siti web istituzionali, e-commerce e landing page per aziende di vari settori, con focus su performance, SEO e conversione.",
    challenge: "Bilanciare design accattivante con performance ottimali, garantendo accessibilità e velocità di caricamento su tutti i dispositivi.",
    techs: ["React", "Laravel", "MySQL", "Tailwind"],
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("tutti");
  const [selected, setSelected] = useState(null);

  const filtered = activeCategory === "tutti"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Progetti realizzati
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Gestionali, piattaforme SaaS e social network sviluppati su misura per realtà diverse.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
                onClick={() => setSelected(project)}
              >
                {/* Screenshot */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-semibold bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{project.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{project.tagline}</p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-primary hover:opacity-70 transition-opacity"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.slice(0, 3).map((t) => (
                      <span key={t} className={`text-xs font-medium px-2 py-0.5 rounded-full ${techColors[t] || "bg-muted text-muted-foreground"}`}>
                        {t}
                      </span>
                    ))}
                    {project.techs.length > 3 && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        +{project.techs.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal detail */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-card rounded-2xl border border-border shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-56 overflow-hidden rounded-t-2xl">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-display">{selected.name}</h3>
                    <p className="text-muted-foreground mt-1">{selected.tagline}</p>
                  </div>
                  {selected.link && (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-70 transition-opacity"
                    >
                      Visita <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{selected.description}</p>

                <div className="bg-secondary/60 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Tag className="w-4 h-4 text-primary" />
                    Sfida tecnica affrontata
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selected.challenge}</p>
                </div>

                <div>
                  <div className="text-sm font-semibold text-foreground mb-3">Tecnologie utilizzate</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.techs.map((t) => (
                      <span key={t} className={`text-sm font-medium px-3 py-1 rounded-full ${techColors[t] || "bg-muted text-muted-foreground"}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-8 w-full py-3 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  Chiudi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}