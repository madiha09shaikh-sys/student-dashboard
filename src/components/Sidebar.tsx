"use client";

import { motion } from "framer-motion";

export default function HeroTile({
  coursesCount,
}: {
  coursesCount: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-6 sm:p-8
        bg-gradient-to-br from-[#0b1020] via-[#0f1a33] to-[#0b1020]
        border border-cyan-400/30
      "
    >
      {/* BIG BRIGHT GLOW (VISIBLE) */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.4, 1, 1.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-0 left-0
          w-[500px] h-[500px]
          bg-cyan-400/40
          blur-[120px]
          rounded-full
        "
      />

      {/* PURPLE GLOW */}
      <motion.div
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 60, -60, 0],
          scale: [1, 1.3, 1, 1.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-0 right-0
          w-[500px] h-[500px]
          bg-purple-500/40
          blur-[120px]
          rounded-full
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 text-white">
        
        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <motion.h2
          animate={{
            scale: [1, 1.05, 1],
            textShadow: [
              "0px 0px 10px cyan",
              "0px 0px 25px purple",
              "0px 0px 10px cyan",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            text-5xl font-extrabold mt-2
            text-transparent bg-clip-text
            bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500
          "
        >
          Madiha
        </motion.h2>

        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-gray-300"
        >
          You have <b className="text-white">{coursesCount}</b> courses
        </motion.p>

        {/* FLOATING BADGE */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="
            inline-block mt-6
            px-4 py-2
            rounded-full
            bg-cyan-500/20
            border border-cyan-400/30
          "
        >
          🔥 Learning Streak Active
        </motion.div>

      </div>
    </motion.article>
  );
}
