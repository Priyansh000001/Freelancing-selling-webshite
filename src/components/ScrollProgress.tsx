import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.22,
  });

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed left-0 top-0 z-[100] h-[2px] w-full origin-left bg-primary-gradient shadow-glow"
    />
  );
}
