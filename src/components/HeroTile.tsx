"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function HeroTile({
  coursesCount,
}: {
  coursesCount: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8"
    >
      {/* TITLE */}
      <h1 className={`leading-tight ${inter.className}`}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          Welcome Back
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="block text-4xl sm:text-5xl md:text-6xl font-extrabold 
          bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 
          bg-clip-text text-transparent"
        >
          Madiha
        </motion.span>
      </h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-3 text-sm sm:text-base"
      >
        You have{" "}
        <span className="text-white font-semibold">
          {coursesCount}
        </span>{" "}
        active courses
      </motion.p>

      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.65 }}
        whileHover={{ scale: 1.05 }}
        className="mt-5 inline-flex items-center px-4 py-2 rounded-full 
        bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
      >
        🔥 12 Day Streak
      </motion.div>
    </motion.article>
  );
}