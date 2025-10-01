"use client";

import Image from "next/image";
import Logo from "../public/android-chrome-192x192.png";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navList.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors underline-animation"
            whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-lg border-b border-primary/20"
          : "bg-transparent"
      } fixed top-0 left-0 right-0 z-[10] transition-all duration-300`}
    >
      <nav className="flex items-center justify-between px-8 py-2 max-w-[80rem] w-full text-primary font-bold">
        <Link
          href="/"
          className="transform hover:scale-110 transition-transform duration-300"
        >
          <Image
            src={Logo}
            alt="Zlatne Trube logo"
            width={50}
            height={50}
            className="rounded-full shadow-lg"
          />
        </Link>
        <DesktopNav />
        <Link href="tel:+381629662325">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            className="items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground border-2 border-primary/30 text-sm md:text-lg py-2 px-4 md:py-3 md:px-6 transition-all flex font-bold shadow-lg hover:shadow-[0_0_25px_rgba(255,165,0,0.5)]"
          >
            <PhoneIcon className="mr-2" />
            <p>062-966-23-25</p>
          </motion.button>
        </Link>
        <MobileMenu />
      </nav>
    </header>
  );
}
