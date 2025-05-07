import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Certifications",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
      <div className="bg-white/30 backdrop-blur-md text-white rounded-full shadow-lg px-6 py-3 flex items-center justify-between gap-6 transition-all duration-300 max-w-[90vw] md:max-w-3xl w-full">
        {/* Brand */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-base md:text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          👨‍💻 JC
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-5 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-400 transition">
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[72px] w-[90vw] max-w-3xl bg-black/80 backdrop-blur-md rounded-xl shadow-xl py-4 px-6 flex flex-col items-center space-y-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-white hover:text-pink-400 text-base">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}