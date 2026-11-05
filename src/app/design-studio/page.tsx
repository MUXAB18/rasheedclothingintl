import React from "react";
import { DesignStudio } from "@/components/design-studio/DesignStudio";

export default function DesignStudioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <h1 className="sr-only">Custom Clothing Design Studio</h1>
      <DesignStudio />
    </div>
  );
}
