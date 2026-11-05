import React from "react";
import { DesignStudio } from "@/components/design-studio/DesignStudio";

export default function DesignStudioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <main className="flex-grow">
        <DesignStudio />
      </main>
    </div>
  );
}
