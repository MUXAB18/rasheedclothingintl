"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** Use "h1" for the main heading of a page (exactly one per page). */
  as?: "h1" | "h2";
  /** Paint immediately (no entrance animation). Use for headings in the first screen. */
  immediate?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  as = "h2",
  immediate = false,
}: SectionHeadingProps) {
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  // The page's main heading is the LCP element: never start it hidden (it would wait for JS to hydrate)
  const aboveFold = as === "h1" || immediate;
  return (
    <div
      className={cn(
        "flex flex-col mb-16",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          initial={aboveFold ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="eyebrow mb-6"
        >
          {eyebrow}
        </motion.div>
      )}

      <Heading
        initial={aboveFold ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl lg:text-7xl mb-6 text-balance font-sans font-black tracking-tight"
      >
        {title}
      </Heading>

      {subtitle && (
        <motion.p
          initial={aboveFold ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-2xl text-near-black/70 font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
