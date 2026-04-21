import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

export function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col rounded-3xl p-8 transition-all duration-500 ${
        plan.popular ? "glass shadow-glow ring-1 ring-accent/40" : "glass hover:shadow-glow"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-gradient px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow">
            <Sparkles size={12} /> Most Popular
          </span>
        </div>
      )}

      <div>
        <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
      </div>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold text-gradient">{plan.price}</span>
        <span className="text-sm text-muted-foreground">/ project</span>
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                plan.popular
                  ? "bg-primary-gradient text-primary-foreground"
                  : "bg-white/10 text-accent"
              }`}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 space-y-2">
        <button
          className={`w-full rounded-xl px-5 py-3 text-sm font-medium transition ${
            plan.popular
              ? "bg-primary-gradient text-primary-foreground shadow-glow hover:scale-[1.02]"
              : "border border-border bg-white/5 text-foreground hover:bg-white/10"
          }`}
        >
          Choose Plan
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button className="rounded-xl border border-border bg-white/5 px-3 py-2 text-xs text-muted-foreground transition hover:bg-white/10 hover:text-foreground">
            Free Consultation
          </button>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-border bg-white/5 px-3 py-2 text-center text-xs text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
