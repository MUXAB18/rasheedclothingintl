"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export function HeroVisual() {
  return (
    <motion.div
      className="w-full h-full flex gap-3 md:gap-4 py-4 box-border"
      variants={staggerContainer}
      initial={false}
      animate="visible"
    >
      {/* Left Column (Staggered down slightly) */}
      <div className="flex flex-col gap-3 md:gap-4 w-1/2 pt-8 md:pt-12 h-full">
        {/* Top Left (Flex 1.2) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full flex-[1.2] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-gray-100"
        >
          <Image
            src="/black-first-48-graphic-tee-shorts-set.webp"
            alt="Black First 48 graphic tee and shorts set, custom streetwear made in Sialkot"
            fill
            sizes="(max-width: 1024px) 45vw, 25vw"
            className="object-cover"
          />
        </motion.div>

        {/* Middle Left (Flex 1.5 - Square-ish) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full flex-[1.5] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#223B65]"
        >
          <Image
            src="/red-first-48-graphic-tee-shorts-set.webp"
            alt="Red First 48 graphic tee and shorts set, custom printed streetwear"
            fill
            sizes="(max-width: 1024px) 45vw, 25vw"
            className="object-cover opacity-90"
          />
        </motion.div>

        {/* Bottom Left (Flex 1 - Landscape) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full flex-1 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-gray-100"
        >
          <Image
            src="/black-red-racerback-gym-tank-tops.webp"
            alt="Black and red racerback gym tank tops with a B logo, custom gymwear"
            fill
            sizes="(max-width: 1024px) 45vw, 25vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Right Column (Starts at top) */}
      <div className="flex flex-col gap-3 md:gap-4 w-1/2 pb-8 md:pb-12 h-full">
        {/* Top Right (Flex 1.8 - Portrait) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full flex-[1.8] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-gray-100"
        >
          <Image
            src="/blue-zip-up-hoodie-puff-print-model.webp"
            alt="Model wearing a blue zip-up hoodie with a puff-print graphic, custom hoodie"
            fill
            sizes="(max-width: 1024px) 45vw, 25vw"
            className="object-cover object-top"
          />
        </motion.div>

        {/* Bottom Right (Flex 1.2 - Landscape to match bottom alignment) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full flex-[1.2] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm bg-[#90B79B]"
        >
          <Image
            src="/grey-zip-hoodie-tracksuit-models.webp"
            alt="Models wearing a grey zip hoodie tracksuit and a black hoodie outfit"
            fill
            sizes="(max-width: 1024px) 45vw, 25vw"
            className="object-cover object-center opacity-90"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
