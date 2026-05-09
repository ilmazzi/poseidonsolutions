import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import AboutSection from "../components/landing/AboutSection";
import ProcessSection from "../components/landing/ProcessSection";
import PortfolioSection from "../components/landing/PortfolioSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}