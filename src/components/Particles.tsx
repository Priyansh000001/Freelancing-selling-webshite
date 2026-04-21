import { useEffect, useMemo, useState } from "react";

export function Particles({ count = 30 }: { count?: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  const finalCount = isMobile ? Math.max(8, Math.floor(count * 0.45)) : count;

  const dots = useMemo(
    () =>
      Array.from({ length: finalCount }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
      })),
    [finalCount],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full bg-accent animate-float"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            boxShadow: "0 0 10px oklch(0.78 0.21 235 / 62%)",
            opacity: isMobile ? 0.35 : 0.5,
          }}
        />
      ))}
    </div>
  );
}
