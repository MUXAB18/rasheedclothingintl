import Image from "next/image";
import { BadgeCheck } from "lucide-react";

/** Trust badge: verified member of the Sialkot Chamber of Commerce & Industry. */
export function ChamberBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-3 rounded-2xl bg-white border border-black/10 px-4 py-2.5 shadow-sm ${className}`}
    >
      <Image
        src="/chamber.png"
        alt="Sialkot Chamber of Commerce & Industry (SCCI) logo"
        width={150}
        height={42}
        className="h-9 w-auto"
      />
      <span className="flex items-center gap-1.5 text-[12px] font-bold text-black leading-tight">
        <BadgeCheck size={16} className="text-green-600 shrink-0" aria-hidden />
        Verified Member
      </span>
    </div>
  );
}
