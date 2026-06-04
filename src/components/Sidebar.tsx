"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Courses", icon: BookOpen },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex w-20 lg:w-64 border-r border-white/10 bg-black/40 backdrop-blur-2xl flex-col p-5">

        {/* BRAND SECTION */}
        <div className="flex items-center gap-3 mb-10">

         
         

          {/* BRAND NAME */}
          <h2
            className={
              orbitron.className +
              " text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 font-bold text-xl tracking-wider"
            }
          >
            EduVerse
          </h2>

        </div>

        {/* NAV ITEMS */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className="relative w-full"
              >
                {/* ACTIVE BACKGROUND */}
                {active === item.name && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-400/30"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {/* ITEM */}
                <div className="relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/5 hover:scale-[1.02]">

                  <Icon
                    size={20}
                    className={
                      active === item.name
                        ? "text-cyan-300"
                        : "text-gray-400"
                    }
                  />

                  <span
                    className={
                      "hidden lg:block font-medium " +
                      (active === item.name
                        ? "text-cyan-300"
                        : "text-gray-300")
                    }
                  >
                    {item.name}
                  </span>

                </div>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ================= MOBILE NAV ================= */}
      <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-t border-white/10 flex justify-around py-3">

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative flex flex-col items-center"
            >
              <Icon
                className={
                  active === item.name
                    ? "text-cyan-300"
                    : "text-gray-400"
                }
              />

              {/* ACTIVE DOT */}
              {active === item.name && (
                <motion.div
                  layoutId="mobileActive"
                  className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1"
                />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
}