// components/AnimatedSection.jsx
"use client";
import { motion } from "framer-motion";
import React from "react";

const AnimatedSection = ({ children, delay = 0.1 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
