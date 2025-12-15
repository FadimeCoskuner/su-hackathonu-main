import React from "react";
import { Droplet, Menu, X } from "lucide-react";

interface NavbarProps {
  navbar: { label: string; section: string }[];
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navbar,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Droplet className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-900 tracking-wide">
            Su Hackathonu
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navbar.map(({ label, section }, idx) => (
            <span
              key={idx}
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer text-sm font-medium transition-colors select-none
                ${
                  activeSection === section
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-700 hover:text-gray-900"
                }
              `}
            >
              {label}
            </span>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-inner px-4 py-3 space-y-2">
          {navbar.map(({ label, section }, idx) => (
            <span
              key={idx}
              onClick={() => scrollToSection(section)}
              className="block text-gray-700 hover:text-gray-900 py-2 text-base cursor-pointer select-none"
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};
