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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 90px rgba(34,211,238,0.25)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-cyan-500/20
        bg-[#0b1020]
        backdrop-blur-xl
        p-6 sm:p-8
        shadow-[0_0_60px_rgba(34,211,238,0.10)]
      "
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      {/* Glow Orb 1 */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.4, 0.7, 0.4, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-24
          -right-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/30
          blur-[140px]
        "
      />

      {/* Glow Orb 2 */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.85, 1.15, 1],
          opacity: [0.3, 0.6, 0.3, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-24
          -left-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-purple-500/30
          blur-[140px]
        "
      />

      <div className="relative z-10">
        {/* TITLE */}
        <h1 className={`leading-tight ${inter.className}`}>
          
          {/* Small text */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="block text-sm sm:text-base text-cyan-300/70 tracking-widest uppercase"
          >
            Welcome back
          </motion.span>

          {/* MAIN NAME */}
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 120,
            }}
            className="
              block
              text-4xl sm:text-5xl md:text-6xl
              font-extrabold
              bg-gradient-to-r
              from-cyan-300
              via-sky-400
              to-purple-500
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_25px_rgba(34,211,238,0.25)]
            "
          >
            Madiha
          </motion.span>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "65%" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="
              h-[2px]
              mt-3
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-purple-500
              shadow-[0_0_20px_rgba(34,211,238,0.3)]
            "
          />
        </h1>

        {/* SUB TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-300"
        >
          You have{" "}
          <span className="font-bold text-white">
            {coursesCount}
          </span>{" "}
          active courses in progress
        </motion.p>

        {/* BADGES */}
        <div className="mt-6 flex flex-wrap gap-3">
          
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="
              rounded-full
              border border-cyan-500/20
              bg-cyan-500/10
              px-4 py-2
              text-sm text-cyan-300
            "
          >
            🔥 12 Day Streak
          </motion.div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="
              rounded-full
              border border-purple-500/20
              bg-purple-500/10
              px-4 py-2
              text-sm text-purple-300
            "
          >
            📚 {coursesCount} Courses
          </motion.div>

        </div>
      </div>
    </motion.article>
  );
}
