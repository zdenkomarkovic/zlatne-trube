"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      id="kontakt"
      className="bg-gradient-to-br py-14 from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="brut-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* O nama */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              ZLATNE TRUBE
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Najbolja trubačka muzika za svadbe, rođendane i proslave širom
              Srbije, Hrvatske i Slovenije.
            </p>
          </div>

          {/* Brzi linkovi */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-foreground">
              Brzi linkovi
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/#usluge"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Usluge
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-foreground">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+381639662325"
                  className="hover:text-primary transition-colors"
                >
                  063-966-23-25
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/14Mi5RPW5E9/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/trubaci_official?igsh=ZmJmN3EwcDlmbjJk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Trubači ZLATNE TRUBE. Sva prava
              zadržana.
            </p>
            <a
              href="https://www.manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Izrada sajta:{" "}
              <span className="font-bold text-primary hover:text-muted-foreground transition-colors">
                ManikamWebSolutions
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
