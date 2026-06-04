"use client";

import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  Database,
  Sparkles,
} from "lucide-react";

const icons = {
  Code,
  Monitor,
  Database,
  Sparkles,
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: {
  title: string;
  progress: number;
  iconName: string;
}) {
  const Icon =
    icons[iconName as keyof typeof icons] || Code;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />

      <div className="relative">
        <Icon className="text-cyan-300" />

        <h3 className="mt-4 font-semibold text-lg">
          {title}
        </h3>

        <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </div>

        <p className="text-gray-400 text-sm mt-2">
          {progress}% completed
        </p>
      </div>
    </motion.article>
  );
}