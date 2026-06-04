"use client";

import { motion } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function HeroTile({"use client";

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
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 20, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative z-10">
        {/* Heading */}
        <h1 className={`leading-tight ${inter.className}`}>
          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 200,
            }}
            className="block text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Welcome Back
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
            className="block text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent"
          >
            Madiha
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-sm sm:text-base text-gray-400"
        >
          You have{" "}
          <span className="font-semibold text-white">
            {coursesCount}
          </span>{" "}
          active courses in progress
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            🔥 12 Day Streak
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
          >
            📚 {coursesCount} Courses
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
}
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
