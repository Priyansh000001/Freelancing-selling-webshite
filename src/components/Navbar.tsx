import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/MagneticButton";

type NavbarProps = {
  onOpenInquiry?: () => void;
};

const navItems = [
  { id: "#home", label: "Home" },
  { id: "#services", label: "Services" },
  { id: "#work", label: "Work" },
  { id: "#contact", label: "Contact" },
];

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const anchorBase = useMemo(() => (location.pathname === "/" ? "" : "/"), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto mt-3 max-w-7xl px-3 sm:mt-4 sm:px-4">
        <div className="glass relative flex min-h-14 items-center justify-between rounded-2xl border border-accent/18 px-3 py-2 shadow-elegant sm:min-h-16 sm:px-5">
          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5" />
          <div className="flex min-w-12 items-center">
            <BrandLogo />
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-3 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`${anchorBase}${item.id}`}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.06] hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">
            <MagneticButton
              onClick={onOpenInquiry}
              className="rounded-xl bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:brightness-110"
            >
              Get Proposal
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded-lg p-2.5 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl border border-accent/20 p-3 lg:hidden sm:p-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`${anchorBase}${item.id}`}
                  className="min-h-11 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenInquiry?.();
                }}
                className="mt-1 min-h-11 rounded-xl bg-primary-gradient px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
              >
                Get Proposal
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
