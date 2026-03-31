import { useState, type ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`h-[120px] ${className}`} style={{ perspective: "1000px" }}>
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front face */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[#e8e0f0] rounded-xl p-6 border border-[#d4c8e0] overflow-hidden">
          <button
            onClick={() => setIsFlipped(true)}
            className="absolute top-3 right-3 w-7 h-7 rounded-full border border-[#b8a8cc] flex items-center justify-center text-sm font-serif italic text-[#7c6a94] hover:text-[#4a3366] hover:border-[#7c6a94] transition-colors"
            aria-label="Show info"
          >
            i
          </button>
          {front}
        </div>

        {/* Back face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#e8e0f0] rounded-xl p-6 border border-[#d4c8e0] overflow-hidden">
          <button
            onClick={() => setIsFlipped(false)}
            className="absolute top-3 right-3 w-7 h-7 rounded-full border border-[#b8a8cc] flex items-center justify-center text-sm text-[#7c6a94] hover:text-[#4a3366] hover:border-[#7c6a94] transition-colors"
            aria-label="Close info"
          >
            &times;
          </button>
          {back}
        </div>
      </div>
    </div>
  );
}
