"use client";
import Image from "next/image";
import heroImg from "../public/optimized/IMG-94104329a11c00a619019db369c7181b-V.webp";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <Image
        src={heroImg}
        alt="ZLATNE TRUBE hero"
        fill
        priority
        className="object-cover"
        unoptimized
      />
      {/* Gradient overlay umesto crnog */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute inset-0 flex items-end pb-14 ">
        <div className="brut-container w-full">
          <motion.div
            className=" md:p-10 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-7xl font-black uppercase leading-tight gradient-text mb-2 md:mb-4 drop-shadow-2xl">
              🎺 TRUBAČI "ZLATNE TRUBE" 🎺
            </h1>
            <p className="text-xl md:text-3xl font-bold mt-3 text-white drop-shadow-lg">
              Najbolja trubačka muzika za svadbe, rođendane i proslave.
            </p>
            <ul className="list-disc pl-6 text-base md:text-xl mt-2 md:mt-5 space-y-1 md:space-y-2 text-white/95 drop-shadow-lg">
              <li>Sviramo po celoj Srbiji, Hrvatskoj i Sloveniji</li>
              <li>Energični, profesionalni i po pristupačnoj ceni</li>
              <li>Brz kontakt i sigurna rezervacija</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
