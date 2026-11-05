"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bungee,
  Rubik_Wet_Paint,
  DynaPuff,
  Creepster,
  Permanent_Marker,
  Rubik_Mono_One,
} from "next/font/google";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Upload,
  Type,
  Trash2,
  RotateCcw,
  RotateCw,
  Plus,
  Minus,
  Check,
} from "lucide-react";

// Types
type GarmentType = "HOODIE" | "SHIRT" | "TRACKSUIT" | "TEAM UNIFORM";
type ViewType = "FRONT" | "BACK";
type LayerType = "PATCH" | "ARTWORK" | "TEXT";

interface CanvasLayer {
  id: string;
  type: LayerType;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  src?: string;
  text?: string;
  color?: string;
  fontFamily?: string;
}

const patches = [
  { id: "tiger", src: "/studio/embroidered-patch-comic-bam.webp", alt: "Comic BAM! embroidered patch" },
  { id: "vintage", src: "/studio/embroidered-patch-vintage-tiger.webp", alt: "Vintage snarling tiger embroidered patch" },
  {
    id: "eagle",
    src: "/studio/embroidered-patch-eagle.png",
    alt: "Bald eagle embroidered patch with stars and stripes",
  },
  {
    id: "rose",
    src: "/studio/embroidered-patch-rose.png",
    alt: "Red rose embroidered patch",
  },
  {
    id: "snake",
    src: "/studio/embroidered-patch-snake.png",
    alt: "Green cobra embroidered patch",
  },
  {
    id: "panther",
    src: "/studio/embroidered-patch-panther.png",
    alt: "Black panther embroidered patch",
  },
  {
    id: "wolf",
    src: "/studio/embroidered-patch-wolf.png",
    alt: "Howling wolf embroidered patch",
  },
  {
    id: "bear",
    src: "/studio/embroidered-patch-bear.png",
    alt: "Brown bear embroidered patch",
  },
  {
    id: "dragon",
    src: "/studio/embroidered-patch-dragon.png",
    alt: "Red dragon embroidered patch",
  },
  {
    id: "anchor",
    src: "/studio/embroidered-patch-anchor.png",
    alt: "Navy anchor and rope embroidered patch",
  },
  {
    id: "motorcycle",
    src: "/studio/embroidered-patch-motorcycle.png",
    alt: "Cafe racer motorcycle embroidered patch",
  },
  {
    id: "flames",
    src: "/studio/embroidered-patch-flames.png",
    alt: "Flames embroidered patch",
  },
  {
    id: "skull_rose",
    src: "/studio/embroidered-patch-skull-rose.png",
    alt: "Skull and rose embroidered patch",
  },
  {
    id: "dagger",
    src: "/studio/embroidered-patch-dagger.png",
    alt: "True Heart dagger embroidered patch",
  },
  {
    id: "spider",
    src: "/studio/embroidered-patch-spider.png",
    alt: "Black widow spider embroidered patch",
  },
];

const colors = [
  { name: "White", value: "#FFFFFF" },
  { name: "Ash Grey", value: "#E2E2E2" },
  { name: "Black", value: "#2C2C2C" },
  { name: "Navy", value: "#1E293B" },
  { name: "Forest", value: "#14532D" },
  { name: "Crimson", value: "#7F1D1D" },
];

const fBungee = Bungee({ weight: "400", subsets: ["latin"] });
const fRubikWetPaint = Rubik_Wet_Paint({ weight: "400", subsets: ["latin"] });
const fDynaPuff = DynaPuff({ subsets: ["latin"] });
const fCreepster = Creepster({ weight: "400", subsets: ["latin"] });
const fPermanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});
const fRubikMono = Rubik_Mono_One({ weight: "400", subsets: ["latin"] });

const fonts = [
  { name: "Sans", value: "sans-serif" },
  { name: "Serif", value: "serif" },
  { name: "Mono", value: "monospace" },
  { name: "Bubble", value: fBungee.style.fontFamily },
  { name: "Funky", value: fDynaPuff.style.fontFamily },
  { name: "Toxic Drip", value: fRubikWetPaint.style.fontFamily },
  { name: "Horror", value: fCreepster.style.fontFamily },
  { name: "Marker", value: fPermanentMarker.style.fontFamily },
  { name: "Heavy Block", value: fRubikMono.style.fontFamily },
];

export function DesignStudio() {
  const router = useRouter();
  const [garment, setGarment] = useState<GarmentType>("HOODIE");
  const [view, setView] = useState<ViewType>("FRONT");
  const [activeColor, setActiveColor] = useState(colors[0]);

  // Advanced State
  const [layers, setLayers] = useState<CanvasLayer[]>([]);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [isTextToolOpen, setIsTextToolOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textFont, setTextFont] = useState("sans-serif");
  const [isFontDropdownOpen, setIsFontDropdownOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAllPatches, setShowAllPatches] = useState(false);

  // Refs
  const constraintsRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getGarmentImage = () => {
    const formatStr = garment.toLowerCase().replace(" ", "");
    return `/studio/base_${formatStr}_${view.toLowerCase()}.webp`;
  };

  const addLayer = (
    layer: Omit<CanvasLayer, "id" | "x" | "y" | "scale" | "rotation">,
  ) => {
    const id = `${layer.type.toLowerCase()}-${Date.now()}`;
    setLayers((prev) => [
      ...prev,
      {
        ...layer,
        id,
        x: 0,
        y: 0,
        scale: 1,
        rotation: 0,
      },
    ]);
    setSelectedLayerId(id);
  };

  const handleUploadArtwork = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      addLayer({ type: "ARTWORK", src: url });
    }
  };

  const handleAddText = () => {
    if (textInput.trim()) {
      addLayer({
        type: "TEXT",
        text: textInput,
        color: textColor,
        fontFamily: textFont,
      });
      setTextInput("");
      setIsTextToolOpen(false);
    }
  };

  const updateLayer = (id: string, updates: Partial<CanvasLayer>) => {
    setLayers((prev) =>
      prev.map((layer) => (layer.id === id ? { ...layer, ...updates } : layer)),
    );
  };

  const removeLayer = (id: string) => {
    setLayers((prev) => prev.filter((layer) => layer.id !== id));
    if (selectedLayerId === id) setSelectedLayerId(null);
  };

  const quoteHref = () => {
    const categoryBySlug: Record<GarmentType, string> = {
      HOODIE: "hoodies",
      SHIRT: "tees",
      TRACKSUIT: "tracksuits",
      "TEAM UNIFORM": "corporate",
    };
    const items = layers.map((l) =>
      l.type === "TEXT"
        ? `text "${l.text}"`
        : l.type === "PATCH"
          ? `patch (${(l.src || "").split("/").pop()?.replace(/\.\w+$/, "").replace("embroidered-patch-", "")})`
          : "uploaded artwork (I will send the file)",
    );
    const note = `Design Studio mockup: ${activeColor.name} ${garment.toLowerCase()}, ${view.toLowerCase()} view, ${layers.length} design element(s)${items.length ? ": " + items.join(", ") : ""}.`;
    const p = new URLSearchParams({
      category: categoryBySlug[garment],
      colors: activeColor.name,
      note,
    });
    return `/request-quote?${p.toString()}`;
  };

  const handleSaveProceed = () => {
    setShowSuccessModal(true);
  };

  return (
    <div
      className="pt-28 md:pt-32 pb-16 md:pb-24 min-h-screen bg-white"
      onClick={() => setSelectedLayerId(null)}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <SectionHeading
          immediate
          className="mb-4 md:mb-16"
          eyebrow="Design Studio"
          title="Create Your Vision"
          subtitle="Customize a premium garment with your colors, artwork, and patches."
        />

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start mt-4 md:mt-12">
          {/* Left Column - Configuration */}
          <div
            className="order-2 lg:order-1 lg:col-span-3 flex flex-col gap-5 lg:gap-8 bg-[#F8F8F8] border border-gray-100 rounded-2xl p-4 lg:p-6 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Garment Selection */}
            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-[2px] text-gray-500 uppercase mb-4">
                1. Select Garment
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                {(
                  [
                    "HOODIE",
                    "SHIRT",
                    "TRACKSUIT",
                    "TEAM UNIFORM",
                  ] as GarmentType[]
                ).map((type) => (
                  <button
                    key={type}
                    onClick={() => setGarment(type)}
                    className={cn(
                      "py-3 px-4 rounded-md text-center lg:text-left text-sm font-sans font-semibold transition-all duration-300 min-h-[44px]",
                      garment === type
                        ? "bg-black text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-black hover:text-black",
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-[2px] text-gray-500 uppercase mb-4">
                2. Select Color
              </h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColor(color)}
                    className={cn(
                      "w-10 h-10 rounded-full border-2 transition-transform duration-300",
                      activeColor.name === color.name
                        ? "scale-110 border-black"
                        : "border-gray-200 hover:scale-110",
                    )}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    aria-label={`${color.name} color`}
                    aria-pressed={activeColor.name === color.name}
                  />
                ))}
                {/* Custom Color Picker */}
                <label
                  className={cn(
                    "w-10 h-10 rounded-full border-2 cursor-pointer transition-transform duration-300 relative overflow-hidden flex items-center justify-center",
                    activeColor.name === "Custom"
                      ? "scale-110 border-black"
                      : "border-gray-200 hover:scale-110",
                  )}
                  style={
                    activeColor.name === "Custom"
                      ? { backgroundColor: activeColor.value }
                      : {}
                  }
                  title="Custom Color"
                >
                  {activeColor.name !== "Custom" && (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-green-400 to-blue-500" />
                  )}
                  <input
                    type="color"
                    className="absolute opacity-0 w-[200%] h-[200%] cursor-pointer left-[-50%] top-[-50%]"
                    onChange={(e) =>
                      setActiveColor({ name: "Custom", value: e.target.value })
                    }
                  />
                </label>
              </div>
              <p className="text-xs font-sans text-gray-500 mt-3">
                {activeColor.name}
              </p>
            </div>

            {/* View Selection */}
            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-[2px] text-gray-500 uppercase mb-4">
                3. Camera View
              </h3>
              <div className="flex gap-2">
                {(["FRONT", "BACK"] as ViewType[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={cn(
                      "flex-1 py-3 px-4 rounded-md text-center text-sm font-sans font-semibold transition-all duration-300",
                      view === v
                        ? "bg-black text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-black hover:text-black",
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Mockup Canvas */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex items-center justify-center bg-[#F5F5F0] rounded-3xl p-3 sm:p-8 shadow-inner relative h-[46vh] min-h-[320px] sm:h-[500px] lg:h-[700px] overflow-hidden sticky top-[88px] lg:static z-30 border border-black/5">
            {/* Toolbar for Selected Layer */}
            <AnimatePresence>
              {selectedLayerId && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-2 sm:top-6 z-40 bg-white/90 backdrop-blur-md shadow-xl rounded-full px-2 py-2 flex gap-1 items-center border border-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() =>
                      updateLayer(selectedLayerId, {
                        scale:
                          (layers.find((l) => l.id === selectedLayerId)
                            ?.scale || 1) + 0.1,
                      })
                    }
                    className="p-2.5 min-w-10 min-h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                    title="Scale Up"
                    aria-label="Scale Up"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    onClick={() =>
                      updateLayer(selectedLayerId, {
                        scale: Math.max(
                          0.1,
                          (layers.find((l) => l.id === selectedLayerId)
                            ?.scale || 1) - 0.1,
                        ),
                      })
                    }
                    className="p-2.5 min-w-10 min-h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                    title="Scale Down"
                    aria-label="Scale Down"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-px h-4 bg-gray-300 mx-1" />
                  <button
                    onClick={() =>
                      updateLayer(selectedLayerId, {
                        rotation:
                          (layers.find((l) => l.id === selectedLayerId)
                            ?.rotation || 0) - 15,
                      })
                    }
                    className="p-2.5 min-w-10 min-h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                    title="Rotate Left"
                    aria-label="Rotate Left"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    onClick={() =>
                      updateLayer(selectedLayerId, {
                        rotation:
                          (layers.find((l) => l.id === selectedLayerId)
                            ?.rotation || 0) + 15,
                      })
                    }
                    className="p-2.5 min-w-10 min-h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                    title="Rotate Right"
                    aria-label="Rotate Right"
                  >
                    <RotateCw size={16} />
                  </button>
                  <div className="w-px h-4 bg-gray-300 mx-1" />
                  <button
                    onClick={() => removeLayer(selectedLayerId)}
                    className="p-2.5 min-w-10 min-h-10 flex items-center justify-center hover:bg-red-50 text-red-500 rounded-full transition-colors"
                    title="Delete Layer"
                    aria-label="Delete Layer"
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${garment}-${view}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full flex items-center justify-center"
                ref={constraintsRef}
              >
                {/* Colored Garment Image (Mix Blend Trick) */}
                <div className="relative w-full h-full max-w-[500px]">
                  {/* The Base Image (Texture and Shadows) */}
                  <Image
                    src={getGarmentImage()}
                    alt={`Custom ${garment} ${view} view in the design studio`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Color Overlay (Tinted exactly to the shape of the garment) */}
                  <div
                    className="absolute inset-0 transition-colors duration-500 mix-blend-multiply pointer-events-none"
                    style={{
                      backgroundColor: activeColor.value,
                      maskImage: `url(${getGarmentImage()})`,
                      WebkitMaskImage: `url(${getGarmentImage()})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                </div>

                {/* Render Layers */}
                {layers.map((layer) => (
                  <motion.div
                    key={layer.id}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.1}
                    dragMomentum={false}
                    onDragStart={() => setSelectedLayerId(layer.id)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLayerId(layer.id);
                    }}
                    whileHover={{ cursor: "grab" }}
                    whileDrag={{ cursor: "grabbing" }}
                    className={cn(
                      "absolute z-20 flex items-center justify-center origin-center touch-none",
                      selectedLayerId === layer.id
                        ? "ring-2 ring-blue-500 ring-offset-4 ring-offset-transparent border-dashed rounded-sm"
                        : "",
                    )}
                    animate={{ scale: layer.scale, rotate: layer.rotation }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {layer.type === "TEXT" ? (
                      <div
                        className="whitespace-nowrap px-2 pointer-events-none select-none"
                        style={{
                          color: layer.color,
                          fontFamily: layer.fontFamily,
                          fontSize: "32px",
                          fontWeight: "bold",
                          textShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                        }}
                      >
                        {layer.text}
                      </div>
                    ) : (
                      <div className="relative w-32 h-32 pointer-events-none select-none">
                        <Image
                          src={layer.src!}
                          alt="Your design element on the garment"
                          fill
                          sizes="128px"
                          className={cn(
                            "object-contain",
                            layer.type === "PATCH" ? "drop-shadow-xl" : "",
                          )}
                          draggable={false}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-2 sm:bottom-6 text-center text-[10px] sm:text-xs font-sans text-gray-600 font-bold tracking-widest uppercase pointer-events-none">
              <span className="hidden sm:inline">Click to Edit &bull; Drag to Move</span>
              <span className="sm:hidden">Tap to Edit &bull; Drag to Move</span>
            </div>
          </div>

          {/* Right Column - Tools */}
          <div
            className="order-3 lg:order-3 lg:col-span-3 flex flex-col gap-5 lg:gap-8 bg-[#F8F8F8] border border-gray-100 rounded-2xl p-4 lg:p-6 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-[2px] text-gray-500 uppercase mb-4">
                4. Add Design
              </h3>

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleUploadArtwork}
                accept="image/png, image/jpeg, image/webp"
                className="hidden"
              />

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="py-3 px-4 rounded-md text-sm font-sans font-bold bg-white border border-gray-200 text-gray-700 hover:text-black hover:border-black transition-colors uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Upload size={16} />
                  Upload Artwork
                </button>

                <div className="relative">
                  <button
                    onClick={() => setIsTextToolOpen(!isTextToolOpen)}
                    className={cn(
                      "w-full py-3 px-4 rounded-md text-sm font-sans font-bold transition-colors uppercase tracking-widest flex items-center justify-center gap-2 border",
                      isTextToolOpen
                        ? "bg-black text-white border-black"
                        : "bg-white border-gray-200 text-gray-700 hover:text-black hover:border-black",
                    )}
                  >
                    <Type size={16} />
                    Add Text
                  </button>

                  {/* Inline Text Tool */}
                  <AnimatePresence>
                    {isTextToolOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden mt-3"
                      >
                        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-3">
                          <input
                            type="text"
                            placeholder="Type here..."
                            value={textInput}
                            onChange={(e) => setTextInput(e.target.value)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && handleAddText()
                            }
                            className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                          />
                          <div className="flex gap-2">
                            <input
                              type="color"
                              value={textColor}
                              onChange={(e) => setTextColor(e.target.value)}
                              className="w-8 h-8 rounded cursor-pointer border border-gray-200"
                            />
                            <div className="relative flex-1">
                              <button
                                type="button"
                                onClick={() =>
                                  setIsFontDropdownOpen(!isFontDropdownOpen)
                                }
                                className="w-full h-8 px-2 text-left border border-gray-200 rounded-md text-xs focus:outline-none bg-white flex items-center justify-between"
                                style={{ fontFamily: textFont }}
                              >
                                <span className="truncate text-base">
                                  {
                                    fonts.find((f) => f.value === textFont)
                                      ?.name
                                  }
                                </span>
                                <span className="text-gray-400 text-[10px] ml-2">
                                  ▼
                                </span>
                              </button>

                              <AnimatePresence>
                                {isFontDropdownOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="absolute left-0 bottom-full mb-1 w-48 bg-[#1E1E1E] border border-gray-800 rounded-lg shadow-2xl overflow-hidden z-[100] py-1"
                                  >
                                    {fonts.map((f) => (
                                      <button
                                        key={f.value}
                                        type="button"
                                        className={cn(
                                          "w-full text-left px-4 py-2 text-base hover:bg-gray-800 transition-colors flex items-center gap-2",
                                          textFont === f.value
                                            ? "text-white"
                                            : "text-gray-300",
                                        )}
                                        style={{ fontFamily: f.value }}
                                        onClick={() => {
                                          setTextFont(f.value);
                                          setIsFontDropdownOpen(false);
                                        }}
                                      >
                                        {textFont === f.value && (
                                          <Check
                                            size={14}
                                            className="text-white shrink-0"
                                          />
                                        )}
                                        <span
                                          className={cn(
                                            "truncate",
                                            textFont !== f.value && "ml-[22px]",
                                          )}
                                        >
                                          {f.name}
                                        </span>
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <button
                            onClick={handleAddText}
                            disabled={!textInput.trim()}
                            className="w-full py-2 bg-black text-white rounded-md text-xs font-bold uppercase tracking-widest disabled:opacity-50 transition-opacity"
                          >
                            Add to Canvas
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-sans font-bold tracking-[2px] text-gray-500 uppercase mb-4">
                5. Patch Library
              </h3>
              <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-3">
                {(showAllPatches ? patches : patches.slice(0, 4)).map(
                  (patch) => (
                    <button
                      key={patch.id}
                      onClick={() =>
                        addLayer({ type: "PATCH", src: patch.src })
                      }
                      className="relative aspect-square rounded-md bg-white border border-gray-200 flex items-center justify-center p-2 lg:p-4 hover:border-black transition-colors group overflow-hidden"
                    >
                      <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={patch.src}
                          alt={patch.alt}
                          fill
                          sizes="96px"
                          className="object-contain drop-shadow-sm mix-blend-multiply"
                        />
                      </div>
                      {/* Plus icon overlay on hover */}
                      <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="text-black text-2xl font-light">
                          +
                        </span>
                      </div>
                    </button>
                  ),
                )}
              </div>
              <button
                onClick={() => setShowAllPatches(!showAllPatches)}
                className="w-full mt-3 py-2 border border-gray-200 rounded-md text-xs font-sans font-bold uppercase tracking-widest text-gray-600 hover:text-black hover:border-black transition-colors"
              >
                {showAllPatches
                  ? "View Less"
                  : "View More (" + (patches.length - 4) + "+)"}
              </button>
            </div>

            <div className="mt-auto pt-4 lg:pt-6 border-t border-gray-200 flex flex-col gap-3">
              {layers.length > 0 && (
                <button
                  onClick={() => {
                    setLayers([]);
                    setSelectedLayerId(null);
                  }}
                  className="w-full py-2.5 rounded-md border border-gray-200 text-xs font-sans font-bold uppercase tracking-widest text-gray-600 hover:text-red-600 hover:border-red-300 transition-colors"
                >
                  Clear all ({layers.length})
                </button>
              )}
              <button
                onClick={handleSaveProceed}
                className="w-full bg-black text-white hover:bg-[#2A2A28] rounded-full px-8 h-14 flex items-center justify-center text-[13px] font-semibold uppercase whitespace-nowrap transition-colors duration-300 font-sans"
              >
                Save & Proceed
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
              >
                ×
              </button>

              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} strokeWidth={3} />
              </div>

              <h2 className="text-2xl font-serif font-bold text-center mb-2">
                Design Ready!
              </h2>
              <p className="text-gray-600 text-center text-sm mb-8">
                Your custom {activeColor.name} {garment.toLowerCase()} design
                with {layers.length} customizations is ready. Continue to the quote form
                and we will prefill your garment, colour and design details.
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setShowSuccessModal(false);
                    router.push(quoteHref());
                  }}
                  className="w-full py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
                >
                  Request Final Quote
                </button>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-4 bg-gray-100 text-gray-800 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
                >
                  Continue Editing
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
