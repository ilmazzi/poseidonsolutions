import React from "react";

const LOGO_URL = "https://media.base44.com/images/public/user_690311299cd1bf314d6f3192/e4775bc89_logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Poseidon Solutions" className="h-7 w-auto" />
            <span className="text-sm font-semibold text-foreground">Poseidon Solutions</span>
          </div>

          <div className="flex items-center gap-8">
            <a href="#servizi" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Servizi
            </a>
            <a href="#chi-sono" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Chi Sono
            </a>
            <a href="#processo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Processo
            </a>
            <a href="#contatti" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contatti
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Poseidon Solutions. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}