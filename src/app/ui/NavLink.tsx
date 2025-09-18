"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

export default function NavLink({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [underline, setUnderline] = useState(0);
  return (
    <motion.a
      href="#"
      className="py-4 font-semibold relative hover:text-[#C6BEEE]"
      onHoverStart={() => setUnderline(1)}
      onHoverEnd={() => setUnderline(0)}
    >
      {children}
      <motion.span
        className="absolute left-0 bottom-0 h-[2px] bg-[#C6BEEE] w-full origin-center"
        initial={{ scaleX: 0.7, opacity: 0 }}
        animate={{ scaleX: underline, opacity: underline }}
        transition={{ duration: 0.27, ease: "linear" }}
      />
    </motion.a>
  );
}
