import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { UpOutlined } from "@ant-design/icons";
import {
  Navbar,
  Footer,
  HeroSection,
  AboutSection,
  ProblemsSection,
  ScheduleSection,
  PrizesSection,
  ParticipationSection,
  LocationSection,
  PartnersSection,
} from "../component";

export const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const hackathonDate = new Date("2026-01-15T09:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "problems",
        "schedule",
        "prizes",
        "participation",
        "location",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navbar = [
    { label: "Ana Sayfa", section: "home" },
    { label: "Hakkında", section: "about" },
    { label: "Problemler", section: "problems" },
    { label: "Program", section: "schedule" },
    { label: "Ödüller", section: "prizes" },
    { label: "Katılım", section: "participation" },
    { label: "Konum", section: "location" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        navbar={navbar}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection timeLeft={timeLeft} />
      <AboutSection />
      <ProblemsSection />
      <ScheduleSection />
      <PrizesSection />
      <ParticipationSection />
      <LocationSection />
      <PartnersSection />
      <Footer />

      <Button
        onClick={() => scrollToSection("home")}
        type="text"
        className="fixed bottom-8 right-8 p-3 rounded-full shadow hover:shadow-lg transition"
        icon={<UpOutlined style={{ fontSize: 20 }} />}
      />
    </div>
  );
};
