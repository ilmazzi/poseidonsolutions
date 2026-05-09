import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://media.base44.com/images/public/user_690311299cd1bf314d6f3192/e4775bc89_logo.png";

const navLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Sono", href: "#chi-sono" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Processo", href: "#processo" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Poseidon Solutions" className="h-9 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Poseidon Solutions
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Parliamone
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-center hover:opacity-90 transition-opacity"
              >
                Parliamone
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}