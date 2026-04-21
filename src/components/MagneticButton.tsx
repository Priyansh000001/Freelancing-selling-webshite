import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function MagneticButton({
  children,
  className,
  type = "button",
  onClick,
  disabled = false,
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const motionStyle = useMemo(
    () => ({
      x: offset.x,
      y: offset.y,
    }),
    [offset.x, offset.y],
  );

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={motionStyle}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left - bounds.width / 2;
        const y = event.clientY - bounds.top - bounds.height / 2;
        setOffset({
          x: x * 0.12,
          y: y * 0.12,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      transition={{ type: "spring", stiffness: 280, damping: 18, mass: 0.35 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
