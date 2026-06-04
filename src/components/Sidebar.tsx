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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-cyan-400/20
        bg-[#070b18]
        p-6 sm:p-8
      "
    >
      {/* 🌈 Moving Gradient Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute inset-0
          bg-gradient-to-r
          from-cyan-500/10
          via-purple-500/10
          to-blue-500/10
          bg-[length:200%_200%]
        "
      />

      {/* 🔵 Floating Glow Orb 1 */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.4, 0.7, 0.4, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-20
          -right-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-400/30
          blur-[120px]
        "
      />

      {/* 🟣 Floating Glow Orb 2 */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.85, 1.1, 1],
          opacity: [0.3, 0.6, 0.3, 0.3],
        }}
        transition={{
          duration: 10,
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

      {/* CONTENT */}
      <div className="relative z-10">
        <h1 className={`leading-tight ${inter.className}`}>

          {/* Small floating text */}
          <motion.span
            animate={{
              opacity: [0.6, 1, 0.6],
              y: [0, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="block text-sm tracking-widest text-cyan-300/70 uppercase"
          >
            Welcome back
          </motion.span>

          {/* MAIN NAME (BREATHING EFFECT) */}
          <motion.span
            animate={{
              scale: [1, 1.02, 1],
              textShadow: [
                "0px 0px 10px rgba(34,211,238,0.3)",
                "0px 0px 25px rgba(168,85,247,0.4)",
                "0px 0px 10px rgba(34,211,238,0.3)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
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
            "
          >
            Madiha
          </motion.span>

          {/* Animated underline pulse */}
          <motion.div
            animate={{
              width: ["40%", "70%", "40%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-[2px]
              mt-3
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
            "
          />
        </h1>

        {/* SUB TEXT FLOAT */}
        <motion.p
          animate={{
            opacity: [0.7, 1, 0.7],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-4 text-gray-300"
        >
          You have{" "}
          <span className="font-bold text-white">
            {coursesCount}
          </span>{" "}
          active courses in progress
        </motion.p>

        {/* BADGES FLOAT */}
        <div className="mt-6 flex flex-wrap gap-3">

          <motion.div
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
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
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
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
