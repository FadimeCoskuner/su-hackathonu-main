import React from "react";
import {
  Phone,
  Mail,
  Instagram,
  X,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import { Logo } from "../component/Logo";
import * as Icon from "../assets/icons";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="px-[5vw] py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4">
          <div className="flex flex-col items-center gap-y-3">
            <Logo className="h-7 w-auto fill-black" />

            <div className="flex items-center gap-x-3">
              <Icon.Konya className="h-8 w-auto fill-black" />
              <Icon.Altay className="h-8 w-auto fill-black" />
              <Icon.MyCity className="h-8 w-auto fill-black" />
            </div>
          </div>

          <div className="flex flex-col items-end gap-y-1 text-md text-black/80">
            <div className="flex items-center gap-x-2">
              <Phone className="w-4 h-4" />
              <span>+90 (332) 205 39 81</span>
            </div>

            <div className="flex items-center gap-x-2">
              <Mail className="w-4 h-4" />
              <span>iletisim@kapsul.org.tr</span>
            </div>

            <div className="flex items-center gap-x-3 pt-1 text-black/70">
              <a href="#" className="hover:text-black transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition">
                <X className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-black transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-300 pt-2 text-center text-[11px] text-black/60">
          © 2025 – Kapsül Teknoloji Platformu – Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};
