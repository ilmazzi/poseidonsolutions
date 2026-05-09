import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function ContactSection() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Compila tutti i campi", variant: "destructive" });
      return;
    }
    if (!WEB3FORMS_KEY) {
      toast({
        title: "Invio non configurato",
        description:
          "Aggiungi VITE_WEB3FORMS_ACCESS_KEY in .env (chiave da web3forms.com).",
        variant: "destructive",
      });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuovo contatto da ${form.name} — Poseidon`,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Invio non riuscito");
      }
      toast({ title: "Messaggio inviato!", description: "Ti risponderò il prima possibile." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Errore nell'invio",
        description: err instanceof Error ? err.message : "Riprova tra poco.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contatti" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Contatti
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              Parliamo del tuo
              <br />
              prossimo progetto
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Hai un&apos;idea per un gestionale? Vuoi digitalizzare i tuoi processi?
              Scrivimi e ne parliamo senza impegno. La prima consulenza è gratuita.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium text-foreground">info@poseidonsolutions.it</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Sede</div>
                  <div className="text-sm font-medium text-foreground">Italia — Lavoro da remoto</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Disponibilità</div>
                  <div className="text-sm font-medium text-foreground">Lun — Ven, 9:00 — 18:00</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-5"
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nome</label>
                <Input
                  placeholder="Il tuo nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="la-tua@email.it"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Messaggio</label>
                <Textarea
                  placeholder="Raccontami del tuo progetto..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground hover:opacity-90 py-6 text-base font-semibold rounded-xl"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                ) : (
                  <>
                    Invia messaggio
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}