import { useState, useRef, useEffect, type ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className = "" }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(120);

  useEffect(() => {
    const el = isFlipped ? backRef.current : frontRef.current;
    if (el) setHeight(Math.max(120, el.scrollHeight));
  }, [isFlipped]);

  return (
    <div
      className={className}
      style={{
        perspective: "1000px",
        height,
        transition: "height 300ms ease",
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)" }}
      >
        {/* Front face */}
        <div
          ref={frontRef}
          className="absolute inset-x-0 top-0 [backface-visibility:hidden] bg-card-bg rounded-xl p-6 border border-card-border overflow-hidden"
        >
          <button
            onClick={() => setIsFlipped(true)}
            className="absolute top-3 right-3 w-7 h-7 rounded-full border border-card-btn-border flex items-center justify-center text-sm font-serif italic text-card-label hover:text-card-btn-hover hover:border-card-label transition-colors"
            aria-label="Show info"
          >
            i
          </button>
          {front}
        </div>

        {/* Back face */}
        <div
          ref={backRef}
          className="absolute inset-x-0 top-0 [backface-visibility:hidden] [transform:rotateX(180deg)] bg-card-bg rounded-xl p-6 pr-12 border border-card-border"
        >
          <button
            onClick={() => setIsFlipped(false)}
            className="absolute top-3 right-3 w-7 h-7 rounded-full border border-card-btn-border flex items-center justify-center text-sm text-card-label hover:text-card-btn-hover hover:border-card-label transition-colors"
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
