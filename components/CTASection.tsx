"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="brut-container my-14">
      <div className=" flex items-center">
        <div className=" w-full">
          <motion.div
            className="glass-hero p-8 md:p-12 "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.h3
              className="text-5xl md:text-7xl font-black uppercase leading-tight gradient-text mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              TRUBAČI &quot;ZLATNE TRUBE&quot;
            </motion.h3>
            <motion.p
              className="text-xl md:text-3xl font-bold mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Najbolji trubači za svadbe, rođendane i proslave.
            </motion.p>
            <motion.ul
              className="list-disc pl-6 text-base md:text-xl mt-5 space-y-2 text-white/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.ul>
            <motion.div
              className="flex flex-wrap gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="tel:+381629662325" className="modern-btn glow-effect">
                📞 062-966-23-25
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
