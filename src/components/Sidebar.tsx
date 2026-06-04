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
boxShadow: "0 0 80px rgba(34,211,238,0.25)",
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
p-6
sm:p-8
shadow-[0_0_50px_rgba(34,211,238,0.08)]
"
>
{/* Gradient Overlay */} <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

```
  {/* Glow Orb 1 */}
  <motion.div
    animate={{
      x: [0, 50, -40, 0],
      y: [0, -40, 30, 0],
      scale: [1, 1.3, 0.9, 1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -top-20
      -right-20
      h-96
      w-96
      rounded-full
      bg-cyan-400/40
      blur-[120px]
    "
  />

  {/* Glow Orb 2 */}
  <motion.div
    animate={{
      x: [0, -40, 30, 0],
      y: [0, 30, -25, 0],
      scale: [1, 0.8, 1.2, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      -bottom-20
      -left-20
      h-96
      w-96
      rounded-full
      bg-purple-500/40
      blur-[120px]
    "
  />

  <div className="relative z-10">
    <h1 className={`leading-tight ${inter.className}`}>
      <motion.span
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          type: "spring",
        }}
        className="
          block
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-white
        "
      >
        Welcome Back
      </motion.span>

      <motion.span
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
        className="
          block
          text-4xl
          sm:text-5xl
          md:text-6xl
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
    </h1>

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

    <div className="mt-6 flex flex-wrap gap-3">
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          rounded-full
          border
          border-cyan-500/20
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          text-cyan-300
        "
      >
        🔥 12 Day Streak
      </motion.div>

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          rounded-full
          border
          border-purple-500/20
          bg-purple-500/10
          px-4
          py-2
          text-sm
          text-purple-300
        "
      >
        📚 {coursesCount} Courses
      </motion.div>
    </div>
  </div>
</motion.article>


);
}
