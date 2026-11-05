"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

interface HeroContentProps {
  mobile?: boolean;
}

export function HeroContent({ mobile = false }: HeroContentProps) {
  // Only one <h1> per page: the mobile variant is the indexed one; desktop copy is a styled div.
  const Heading: React.ElementType = mobile ? "h1" : "div";
  return (
    <motion.div
      className="flex flex-col z-20 w-full h-full justify-center pt-8 lg:pt-0"
      variants={staggerContainer}
      initial={false}
      animate="visible"
    >
      {/* Main Headline */}
      <motion.div variants={fadeInUp} className="mb-6 lg:mb-8">
        <Heading
          className={`font-sans text-[clamp(3rem,5vw,5rem)] font-bold leading-[1.05] tracking-tight ${
            mobile ? "text-white" : "text-near-black"
          }`}
        >
          <span
            className={`block mb-5 text-[10px] uppercase tracking-[0.3em] font-medium leading-normal ${
              mobile ? "text-white/50" : "text-gray-500"
            }`}
          >
            Clothing Manufacturer in Sialkot, Pakistan
          </span>
          Turn Your Ideas
          <br />
          into Premium
          <br />
          Apparel
        </Heading>
      </motion.div>

      {/* Supporting Copy */}
      <motion.div variants={fadeInUp} className="mb-10 lg:mb-12">
        <p
          className={`text-base md:text-lg max-w-[90%] lg:max-w-md font-medium leading-relaxed ${
            mobile ? "text-white/85" : "text-near-black/70"
          }`}
        >
          Premium apparel manufacturing from Sialkot, Pakistan. We transform
          your creative vision into high-quality garments that brands worldwide
          trust.
        </p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-16"
      >
        <Button
          href="/request-quote"
          className={`rounded-full px-8 h-14 flex items-center justify-center text-[13px] font-semibold whitespace-nowrap transition-colors duration-300 border-none shadow-md ${
            mobile
              ? "bg-white text-[#0a0a0a] hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              : "bg-near-black text-white hover:bg-[#2A2A28]"
          }`}
        >
          START CREATING
        </Button>
        <Button
          href="/portfolio"
          variant="outline"
          className={`rounded-full px-8 h-14 flex items-center justify-center text-[13px] font-semibold whitespace-nowrap transition-colors duration-300 ${
            mobile
              ? "border border-white/40 text-white hover:bg-white/15"
              : "border border-near-black/10 text-near-black hover:bg-black/5"
          }`}
        >
          EXPLORE GALLERY
        </Button>
      </motion.div>

      {/* Social Proof — hidden on mobile */}
      {!mobile && (
        <motion.div
          variants={fadeInUp}
          className="hidden lg:flex items-center gap-4"
        >
          <div className="flex -space-x-3">
            {["R", "C", "I", "B"].map((initial, i) => (
              <div
                key={initial}
                aria-hidden="true"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                style={{ backgroundColor: ["#1a1a1a", "#3a3a38", "#555552", "#777774"][i] }}
              >
                {initial}
              </div>
            ))}
          </div>
          <p className="text-xs font-medium max-w-[140px] leading-snug text-near-black/60">
            Join <span className="font-bold text-near-black">100+ Brands</span>{" "}
            and start manufacturing now
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
